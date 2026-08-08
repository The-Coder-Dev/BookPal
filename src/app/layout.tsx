import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/web/Navbar";

const inter = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BookPal",
  description: "A book library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(`min-h-sscreen antialiased ${inter.className}`)}
    >
      <body className="min-h-full flex flex-col">
        <div
          className="
          fixed
          inset-0
          pointer-events-none
          opacity-[0.03]
          bg-[url('/noise.gif')]
          z-50"
        />
        
        {children}
      </body>
    </html>
  );
}
