import type { Metadata } from "next";
import { Inter } from "next/font/google"; // We start with Inter, will upgrade to custom fonts later
import "./globals.css";

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
        {/* The Noise Overlay we defined in CSS */}
        <div className="noise-overlay" />
        
        {/* Main Content Wrapper */}
        <main className="relative z-10 flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
