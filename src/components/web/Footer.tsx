"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, BookOpen, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-card border-t border-border/80 text-foreground pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Imprint column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/logo.svg"
                width={32}
                height={32}
                alt="BookPal Logo"
                className="w-8 h-8 transition-transform group-hover:scale-105"
              />
              <span className="font-semibold text-xl tracking-tight text-foreground font-serif">
                BookPal
              </span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
              Not just a library — an edition. A curated sanctuary of essential books, 
              typeset with golden-ratio proportions and built for deep offline reading.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Volume 2026 • Private Edition</span>
            </div>
          </div>

          {/* Navigation Column 1: The Edition */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary">
              The Edition
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home Sanctuary
                </Link>
              </li>
              <li>
                <Link href="#ethos" className="hover:text-foreground transition-colors">
                  Our Manifesto
                </Link>
              </li>
              <li>
                <Link href="#shelves" className="hover:text-foreground transition-colors">
                  Curated Shelves
                </Link>
              </li>
              <li>
                <Link href="#reader" className="hover:text-foreground transition-colors">
                  Reader Workstation
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Curations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary">
              Curations
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#shelves" className="hover:text-foreground transition-colors">
                  Philosophy & Stoicism
                </Link>
              </li>
              <li>
                <Link href="#shelves" className="hover:text-foreground transition-colors">
                  Essays & Solitude
                </Link>
              </li>
              <li>
                <Link href="#shelves" className="hover:text-foreground transition-colors">
                  Craft & Architecture
                </Link>
              </li>
              <li>
                <Link href="#shelves" className="hover:text-foreground transition-colors">
                  Timeless Literature
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Sanctuary & Membership */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary">
              Membership
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/sign-in" className="hover:text-foreground transition-colors">
                  Reader Sign In
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="hover:text-foreground transition-colors">
                  Join Free Edition
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="hover:text-foreground transition-colors">
                  Offline Sync Access
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Colophon, Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left font-mono">
            <span>© {new Date().getFullYear()} BookPal Edition.</span>
            <span>•</span>
            <span>Hand-crafted for bibliophiles worldwide.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/80 hover:bg-muted text-foreground transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
