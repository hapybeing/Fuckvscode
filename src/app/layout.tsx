import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google"; // Custom Fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import Preloader from "@/components/Preloader"; // <--- NEW IMPORT

// Configure Fonts
const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
});

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
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans overflow-x-hidden`}>
        
        {/* 1. SYSTEM BOOT (Runs first) */}
        <Preloader />
        
        {/* 2. BACKGROUND ATMOSPHERE */}
        <StarField />
        
        {/* 3. INTERFACE LAYERS */}
        <Navbar />
        
        <main className="relative z-10 flex min-h-screen flex-col">
          {children}
        </main>
        
      </body>
    </html>
  );
}
