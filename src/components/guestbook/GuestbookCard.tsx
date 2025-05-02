"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { likeGuestbook } from "../../../utils/api";
import { GuestbookCardProps } from "../../../types/GuestbookCardProps";

const LIKE_BUTTON_TEXT = "❤️ 좋아요";
const DEFAULT_AUTHOR_LENGTH = 5;

const handleApiAction = async (
  apiFunc: Function,
  id: string,
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    await apiFunc(id);
    setState((prev) => prev + 1);
  } catch (error) {
    console.error("API 호출 실패:", error);
  }
};

const formatAuthorName = (author: string) => {
  return author.length > DEFAULT_AUTHOR_LENGTH
    ? `${author.slice(0, 4)}...`
    : author;
};

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  const [likes, setLikes] = useState(guestbook.likes);
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  useEffect(() => {
    if (guestbook.createdAt) {
      setFormattedDate(new Date(guestbook.createdAt).toLocaleDateString());
    }
  }, [guestbook.createdAt]);

  return (
    <Link href={`/dashboard/${guestbook.id}`} passHref>
      <div className="bg-white rounded-2xl ">
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
              <div className="flex items-center text-sm text-gray-600 mt-1 gap-2">
                <span className="font-medium">
                  {formatAuthorName(guestbook.author)}
                </span>
                <span className="mx-1">•</span>
                <span>
                  <span>{formattedDate}</span>
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleApiAction(
                      likeGuestbook,
                      String(guestbook.id),
                      setLikes
                    );
                  }}
                  className="ml-auto text-sm bg-pink-100 text-pink-700 px-2 py-1 rounded `hover`:bg-pink-200 cursor-pointer"
                >
                  {LIKE_BUTTON_TEXT}
                </button>
                <span>❤️ {likes}회</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
