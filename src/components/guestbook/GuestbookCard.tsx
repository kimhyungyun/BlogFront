"use client";

import Link from "next/link";
import { Guestbook } from "../../../types/Guestbook";
import { useState } from "react";
import { likeGuestbook } from "../../../utils/api";

interface GuestbookCardProps {
  guestbook: Guestbook;
}

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  const [likes, setLikes] = useState(guestbook.likes);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await likeGuestbook(guestbook.id);
      setLikes((prev) => prev + 1);
    } catch (error) {
      console.error("좋아요 실패:", error);
    }
  };

  return (
    <Link href={`/dashboard/${guestbook.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="aspect-video bg-gray-100 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-800 line-clamp-3 p-4">
              {guestbook.content}
            </p>
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
              <span className="text-base font-medium">
                {guestbook.author[0]}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-base text-gray-900 line-clamp-2">
                {guestbook.content}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mt-1 gap-2">
                <span className="font-medium">{guestbook.author}</span>
                <span className="mx-1">•</span>
                <span>조회수 {likes}회</span>
                <span className="mx-1">•</span>
                <span>
                  {new Date(guestbook.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={handleLike}
                  className="ml-auto text-sm bg-pink-100 text-pink-700 px-2 py-1 rounded hover:bg-pink-200"
                >
                  ❤️ 좋아요
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
