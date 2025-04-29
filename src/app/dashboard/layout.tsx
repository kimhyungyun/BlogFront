import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Header from "./layout/page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DashbBard - HG DashBoard",
  description: "방명록 페이지입니다.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      {children}
    </div>
  );
}
