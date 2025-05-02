"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-10 ">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extrabold text-amber-50">BOARD</div>
          <div className="flex items-center gap-15">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
            >
              홈
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
            >
              메인
            </Link>
            <Link
              href="/dashboard/register"
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
            >
              등록하기
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
