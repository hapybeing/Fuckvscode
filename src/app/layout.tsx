import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll"; // IMPORT PHYSICS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurang | Visual Experience",
  description: "A cinematic journey through visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-cinema-black">
      <body className={inter.className}>
        <SmoothScroll>
          <div className="noise-overlay" />
          <Navbar />
          <main className="relative z-10 flex min-h-screen flex-col">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}


