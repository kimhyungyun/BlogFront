"use client";

import { useEffect, useState } from "react";
import { Guestbook } from "../../../types/Guestbook";
import { getGuestbooks } from "../../../utils/api";
import GuestbookCard from "@/components/guestbook/GuestbookCard";

export default function Home() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    getGuestbooks().then((guestbooks) => setGuestbooks(guestbooks));
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-amber-50 mt-30">
          방명록
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {guestbooks.map((guestbook) => (
            <div
              key={guestbook.id}
              className="transform hover:scale-105 transition-all duration-300"
            >
              <GuestbookCard guestbook={guestbook} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
