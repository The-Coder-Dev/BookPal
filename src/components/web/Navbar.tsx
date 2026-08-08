"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Library", url: "/library" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="w-full absolute z-3 ">
      <nav className="w-full mx-auto max-w-7xl mt-3 px-4 md:mt-5 z-20">
        <div className="w-full flex items-center justify-between border border-secondary/10 bg-white/60 backdrop-blur-lg gap-4 rounded-lg py-4 px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Image src="/logo.svg" width={30} height={30} alt="logo" />
                <p className="text-lg font-semibold">BookPal</p>
              </Link>
            </div>

            <div className=" gap-2 hidden sm:flex">
              {navItems.map((item) => {
                const isActive = pathName === item.url;
                return (
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: isActive ? "outline" : "ghost",
                      }), isActive ? "text-black" : "text-black"
                    )}
                    href={item.url}
                    key={item.url}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Link href="/sign-in" className={cn(buttonVariants({variant: "ghost"}))}>
              Login
            </Link>
            <Link href="/sign-in" className={cn(buttonVariants({variant: "secondary"}), "group")}>
              Sign Up
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-all duration-300"/>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
