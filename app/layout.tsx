import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundCarousel from "@/components/BackgroundCarrousel";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weaviate Movie finder",
  description: "Search movie you will like using semantic search with Weamiate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundCarousel />
        <Header />
        <main className="w-full p-8 md:pt-18 md:pt-0 ">{children}</main>
      </body>
    </html>
  );
}
