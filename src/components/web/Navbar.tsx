"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X, BookOpen, Compass, Sliders } from "lucide-react";

const navItems = [
  { label: "Edition", url: "/" },
  { label: "Manifesto", url: "/#ethos" },
  { label: "Shelves", url: "/#shelves" },
  { label: "Reader", url: "/#reader" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav className="w-full mx-auto max-w-7xl">
        <div className="w-full flex items-center justify-between border border-border/60 bg-background/80 backdrop-blur-xl rounded-full py-2.5 px-4 sm:px-6 shadow-sm">
          {/* Left Brand */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.svg"
                width={28}
                height={28}
                alt="BookPal Logo"
                className="w-7 h-7 transition-transform group-hover:scale-105"
                priority
              />
              <span className="text-lg font-serif font-bold tracking-tight text-foreground">
                BookPal
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathName === item.url;
                return (
                  <Link
                    key={item.label}
                    href={item.url}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors",
                      isActive
                        ? "bg-secondary/15 text-secondary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-full text-xs hover:bg-muted font-medium text-foreground"
              )}
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full text-xs font-semibold bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground group px-4 shadow-xs"
              )}
            >
              <span>Join Edition</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/sign-up"
              className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold"
            >
              Join
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-2 p-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-border shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-border/60 flex flex-col gap-2">
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 text-center text-xs font-medium rounded-full border border-border hover:bg-muted text-foreground"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 text-center text-xs font-semibold rounded-full bg-secondary text-secondary-foreground"
              >
                Join Free Edition
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
