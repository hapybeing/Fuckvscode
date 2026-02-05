import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // IMPORT THE COMPONENT

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
        {/* The Noise Overlay */}
        <div className="noise-overlay" />
        
        {/* THE NAVBAR IS ACTIVE */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

