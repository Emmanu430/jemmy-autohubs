import type { Metadata } from "next";
import ScrollProgress from "@/components/ScrollProgress";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Jemmy Autohubs",
  description: "Quality cars, honest deals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <ScrollProgress />
        
        <div className="flex-1">{children}</div>

        <footer className="border-t border-brand-gold/20 bg-brand-purple">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-white/60">
            © 2026 Jemmy Autohubs. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}