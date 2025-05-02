import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HG - Portfolio",
  description: "풀스택 개발자 HG의 포트폴리오입니다.",
  authors: [{ name: "Hyun_Gyun" }],
  openGraph: {
    title: "BlogFront",
    description: "풀스택 개발자 HG의 포트폴리오입니다",
    url: "https://blog-front-orpin.vercel.app",
    siteName: "BlogFront",
    type: "website",
    locale: "ko_KR",
    images: ["/Thumbnail.png"],
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
