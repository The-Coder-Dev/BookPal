import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground selection:bg-secondary/20 selection:text-secondary">
      <Navbar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}