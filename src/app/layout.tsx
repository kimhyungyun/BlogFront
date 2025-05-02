import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HG - Portfolio",
  description: "풀스택 개발자 HG의 포트폴리오입니다.",
  openGraph: {
    title: "BlogFront",
    description: "풀스택 개발자 HG의 포트폴리오입니다",
    url: "https://blog-front-orpin.vercel.app",
    siteName: "BlogFront",
    images: [
      {
        url: "/Thumbnail.png",
        width: 1200,
        height: 630,
        alt: "썸네일",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
