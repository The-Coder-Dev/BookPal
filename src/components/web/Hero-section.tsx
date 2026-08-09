"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Eye,
} from "lucide-react";

interface SpotlightBook {
  id: string;
  title: string;
  author: string;
  year: string;
  genre: string;
  coverImage: string;
  readTime: string;
  rating: string;
  curatorNote: string;
  excerpt: string;
  tags: string[];
}

const SPOTLIGHT_BOOKS: SpotlightBook[] = [
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    year: "180 AD",
    genre: "Stoic Philosophy",
    coverImage: "/books/meditations.png",
    readTime: "4h 15m",
    rating: "4.9",
    curatorNote: "The personal journal of Rome's philosopher emperor. Raw, practical, and devoid of performative rhetoric.",
    excerpt: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    tags: ["Philosophy", "Stoicism", "Mindfulness"],
  },
  {
    id: "solitude",
    title: "The Art of Solitude",
    author: "Elena Vance",
    year: "2024",
    genre: "Essays & Stillness",
    coverImage: "/books/solitude.png",
    readTime: "3h 40m",
    rating: "4.8",
    curatorNote: "A timely defense of deliberate quietude in an age saturated with algorithmic stimulation.",
    excerpt: "Solitude is not the absence of company, but the moment our mind finally catches up with our soul.",
    tags: ["Essays", "Deep Focus", "Modern Life"],
  },
  {
    id: "letters",
    title: "Letters from a Stoic",
    author: "Lucius Seneca",
    year: "65 AD",
    genre: "Classical Letters",
    coverImage: "/books/letters.png",
    readTime: "6h 20m",
    rating: "4.9",
    curatorNote: "Timeless epistolary wisdom on friendship, wealth, mortality, and the discipline of everyday life.",
    excerpt: "We suffer more often in imagination than in reality.",
    tags: ["Classic", "Epistolary", "Wisdom"],
  },
  {
    id: "craft",
    title: "The Shape of Craft",
    author: "Klaus Lindqvist",
    year: "2023",
    genre: "Architecture & Design",
    coverImage: "/books/craft.png",
    readTime: "5h 10m",
    rating: "4.9",
    curatorNote: "An exploration into why enduring objects and buildings carry emotional weight across generations.",
    excerpt: "Craft is love made visible in the grain of wood and the cadence of sentence structures.",
    tags: ["Design", "Architecture", "Mastery"],
  },
];

export default function HeroSection() {
  const [selectedBook, setSelectedBook] = useState<SpotlightBook>(SPOTLIGHT_BOOKS[0]);
  const [activePreview, setActivePreview] = useState<SpotlightBook | null>(null);

  return (
    <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[800px] bg-gradient-to-tr from-secondary/15 via-accent/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline & Interactive Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Curation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-medium transition-all hover:bg-secondary/15">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Private Collection • Curated Edition 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.08] text-foreground">
              Not just a library —{" "}
              <span className="italic font-serif normal-case text-secondary block sm:inline">
                An edition.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              No infinite feeds. No algorithm noise. A handpicked sanctuary of essential books — 
              download in pure typographic clarity, annotate privately, and read anywhere at your own pace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="#shelves"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-12 px-7 text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all group bg-primary hover:bg-secondary text-primary-foreground"
                )}
              >
                <span>Explore The Shelves</span>
                <ArrowRight className="size-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-6 text-base font-medium rounded-full border-border/80 hover:bg-muted/60 transition-all text-foreground"
                )}
              >
                <span>Join The Edition</span>
              </Link>
            </div>

            {/* Social Proof & Ethos stats */}
            <div className="pt-6 border-t border-border/60 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">1,200+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Handpicked Volumes</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">Zero</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Algorithms or Ads</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Offline Sanctuary</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Spotlight Deck */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Spotlight Showcase Card */}
            <div className="w-full max-w-md bg-card/80 backdrop-blur-md rounded-2xl border border-border/80 p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Bookmark className="size-4 text-secondary fill-secondary/20" />
                  <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">
                    Spotlight Volume
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  <Star className="size-3 fill-current" />
                  <span>{selectedBook.rating}</span>
                </div>
              </div>

              {/* Book Centerpiece Display */}
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                {/* 3D Book Cover Presentation */}
                <div className="relative group shrink-0">
                  <div className="w-36 h-52 sm:w-40 sm:h-56 relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1 ring-1 ring-black/10">
                    <Image
                      src={selectedBook.coverImage}
                      alt={selectedBook.title}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 160px, 180px"
                    />
                    {/* Book spine lighting gloss */}
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
                  </div>
                  {/* Subtle Book shadow underneath */}
                  <div className="absolute -bottom-2 inset-x-3 h-3 bg-black/30 blur-md rounded-full -z-10" />
                </div>

                {/* Metadata & Description */}
                <div className="flex flex-col justify-between space-y-3 text-center sm:text-left flex-1">
                  <div>
                    <span className="text-xs font-mono text-secondary tracking-wide uppercase">
                      {selectedBook.genre} • {selectedBook.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mt-0.5">
                      {selectedBook.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      by {selectedBook.author}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground italic line-clamp-3 leading-relaxed border-l-2 border-secondary/30 pl-2.5 my-1">
                    &ldquo;{selectedBook.excerpt}&rdquo;
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {selectedBook.readTime}
                    </span>
                    <span>•</span>
                    <span className="text-secondary font-medium">Curator Vetted</span>
                  </div>
                </div>
              </div>

              {/* Excerpt / Quick Action Bar */}
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActivePreview(selectedBook)}
                  className="text-xs font-medium text-secondary hover:text-foreground flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2.5 rounded-md hover:bg-secondary/10"
                >
                  <Eye className="size-3.5" />
                  <span>Read Excerpt</span>
                </button>

                <Link
                  href={`/sign-up`}
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-all flex items-center gap-1 group/btn"
                >
                  <span>Open Volume</span>
                  <ChevronRight className="size-3 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>

              {/* Book Deck Selector Dots/Thumbs */}
              <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">
                  Select Edition:
                </span>
                <div className="flex items-center gap-1.5">
                  {SPOTLIGHT_BOOKS.map((book) => (
                    <button
                      key={book.id}
                      type="button"
                      onClick={() => setSelectedBook(book)}
                      className={cn(
                        "text-xs px-2.5 py-1 rounded-md transition-all font-mono",
                        selectedBook.id === book.id
                          ? "bg-secondary text-secondary-foreground font-semibold shadow-xs"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                      )}
                    >
                      {book.title.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Drawer for Quick Excerpt Preview */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card w-full max-w-lg rounded-2xl border border-border p-6 sm:p-8 shadow-2xl space-y-5 relative">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                  Curator&apos;s Excerpt
                </span>
                <h4 className="text-xl font-serif font-bold text-foreground">
                  {activePreview.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-serif text-foreground/90 text-base sm:text-lg leading-relaxed italic bg-muted/40 p-4 rounded-xl border border-border/50">
              &ldquo;{activePreview.excerpt}&rdquo;
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="font-sans font-medium text-foreground">
                Curator Note:
              </p>
              <p className="font-sans leading-relaxed">
                {activePreview.curatorNote}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-border/60">
              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="px-4 py-2 text-xs font-medium rounded-full border border-border hover:bg-muted transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href="/sign-up"
                className="px-5 py-2 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
              >
                Read Complete Edition
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
