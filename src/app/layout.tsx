import type { Metadata } from "next";
// WE IMPORT CUSTOM FONTS HERE
import { Syne, Space_Grotesk } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";

// Configure the "Display" font (Headers)
const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

// Configure the "Tech" font (Details)
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
      {/* We apply both fonts to the body */}
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans`}>
        
        <StarField />
        <Navbar />
        
        <main className="relative z-10 flex min-h-screen flex-col">
          {children}
        </main>
        
      </body>
    </html>
  );
}
