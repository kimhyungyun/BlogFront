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
    <main className="min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="background-video z-0 absolute top-0 transform  w-full h-full object-cover"
      >
        <source src="Boardvideo.mp4" type="video/mp4" />
      </video>
      <section className="container mx-auto px-4 py-12 relative z-10 ">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-amber-50 mt-20">
            방명록
          </h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-25">
          {guestbooks.map((guestbook) => (
            <div
              key={guestbook.id}
              className="transform hover:scale-105 transition-all duration-300 overflow-hidden rounded-2xl"
            >
              <GuestbookCard guestbook={guestbook} />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
