"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Clock,
  Star,
  Bookmark,
  Sparkles,
  ArrowRight,
  Filter,
  Eye,
  Check,
} from "lucide-react";

interface ShelfBook {
  id: string;
  title: string;
  author: string;
  year: string;
  category: "philosophy" | "essays" | "craft" | "literature";
  categoryLabel: string;
  coverImage: string;
  readTime: string;
  hours: number;
  rating: string;
  curatorNote: string;
  excerpt: string;
  tags: string[];
  editionBadge?: string;
}

const SHELF_BOOKS: ShelfBook[] = [
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    year: "180 AD",
    category: "philosophy",
    categoryLabel: "Philosophy",
    coverImage: "/books/meditations.png",
    readTime: "4h 15m",
    hours: 4.2,
    rating: "4.9",
    curatorNote: "The definitive Gregory Hays translation. Stoic principles for resilience under immense responsibility.",
    excerpt: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    tags: ["Stoicism", "Mindset", "Classic"],
    editionBadge: "Curator's Gold",
  },
  {
    id: "solitude",
    title: "The Art of Solitude",
    author: "Elena Vance",
    year: "2024",
    category: "essays",
    categoryLabel: "Essays & Stillness",
    coverImage: "/books/solitude.png",
    readTime: "3h 40m",
    hours: 3.6,
    rating: "4.8",
    curatorNote: "An essential modern antidote to relentless connectivity. Poetic, grounded, and intensely restorative.",
    excerpt: "When the room goes quiet, we stop rehearsing for an audience and begin listening to truth.",
    tags: ["Stillness", "Focus", "Modernity"],
    editionBadge: "New Addition",
  },
  {
    id: "letters",
    title: "Letters from a Stoic",
    author: "Lucius Seneca",
    year: "65 AD",
    category: "philosophy",
    categoryLabel: "Philosophy",
    coverImage: "/books/letters.png",
    readTime: "6h 20m",
    hours: 6.3,
    rating: "4.9",
    curatorNote: "The epistolary masterwork. Letters to Lucilius on true wealth, the value of time, and tranquility.",
    excerpt: "It is not the man who has too little, but the man who craves more, that is poor.",
    tags: ["Stoicism", "Epistolary", "Wisdom"],
    editionBadge: "Timeless Canon",
  },
  {
    id: "craft",
    title: "The Shape of Craft",
    author: "Klaus Lindqvist",
    year: "2023",
    category: "craft",
    categoryLabel: "Craft & Design",
    coverImage: "/books/craft.png",
    readTime: "5h 10m",
    hours: 5.1,
    rating: "4.9",
    curatorNote: "Why tactile architecture, fine typography, and handmade objects outlive industrial disposable fashion.",
    excerpt: "Quality is not an accident of circumstance; it is an act of spiritual resistance.",
    tags: ["Design", "Architecture", "Mastery"],
    editionBadge: "Design Essential",
  },
  {
    id: "letters-stoic-2",
    title: "Essays on Brevity of Life",
    author: "Lucius Seneca",
    year: "49 AD",
    category: "essays",
    categoryLabel: "Essays & Stillness",
    coverImage: "/books/letters.png",
    readTime: "1h 50m",
    hours: 1.8,
    rating: "4.9",
    curatorNote: "The most concise and devastating reflection on mortality and misspent time ever committed to paper.",
    excerpt: "Life is long if you know how to use it.",
    tags: ["Time", "Mortality", "Philosophy"],
    editionBadge: "Weekend Read",
  },
  {
    id: "marcus-journal",
    title: "The Inner Citadel",
    author: "Pierre Hadot",
    year: "1998",
    category: "philosophy",
    categoryLabel: "Philosophy",
    coverImage: "/books/meditations.png",
    readTime: "7h 30m",
    hours: 7.5,
    rating: "4.9",
    curatorNote: "The authoritative intellectual commentary unlocking the spiritual exercises of the Meditations.",
    excerpt: "Philosophy was not an academic theory, but a method for transforming one's vision of the world.",
    tags: ["Philosophy", "Scholarship", "Depth"],
    editionBadge: "Scholar's Choice",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Curations" },
  { id: "philosophy", label: "Philosophy & Mind" },
  { id: "essays", label: "Essays & Stillness" },
  { id: "craft", label: "Craft & Design" },
];

export default function CuratedShelves() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedBook, setSelectedBook] = useState<ShelfBook | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const filteredBooks = SHELF_BOOKS.filter((book) => {
    if (activeCategory === "all") return true;
    return book.category === activeCategory;
  });

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="shelves" className="w-full py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono tracking-wider uppercase">
              <BookOpen className="size-3.5" />
              <span>Volume Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight">
              Curated Shelves
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl font-light">
              Carefully assembled collections. Filter by discipline or explore the entire edition.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border",
                  activeCategory === cat.id
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                    : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => {
            const isSaved = bookmarkedIds.includes(book.id);
            return (
              <div
                key={book.id}
                className="bg-card rounded-2xl border border-border/80 p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-xl hover:border-secondary/30 group"
              >
                {/* Top card row: Category & Bookmark button */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-secondary font-semibold">
                    {book.categoryLabel}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleBookmark(book.id)}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer border",
                      isSaved
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                    title={isSaved ? "Remove from shelf" : "Save to shelf"}
                  >
                    <Bookmark
                      className={cn("size-3.5", isSaved && "fill-current")}
                    />
                  </button>
                </div>

                {/* Book Presentation: Image + Info */}
                <div className="flex gap-4 items-start">
                  {/* Cover */}
                  <div className="relative shrink-0 w-28 h-40 sm:w-32 sm:h-44 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105 ring-1 ring-black/10">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 112px, 128px"
                    />
                    <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col justify-between h-40 sm:h-44 space-y-1">
                    <div>
                      {book.editionBadge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-semibold inline-block mb-1">
                          {book.editionBadge}
                        </span>
                      )}
                      <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium">
                        {book.author} ({book.year})
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-border/40">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="size-3 text-secondary" />
                          {book.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold font-mono">
                          <Star className="size-3 fill-current" />
                          {book.rating}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {book.tags.slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curator Note Snippet */}
                <p className="text-xs text-muted-foreground line-clamp-2 italic bg-muted/30 p-3 rounded-lg border border-border/40 font-serif">
                  &ldquo;{book.curatorNote}&rdquo;
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedBook(book)}
                    className="text-xs font-medium text-secondary hover:text-foreground flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-3 rounded-md hover:bg-secondary/10"
                  >
                    <Eye className="size-3.5" />
                    <span>Sample Passage</span>
                  </button>

                  <Link
                    href="/sign-up"
                    className="text-xs font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-all flex items-center gap-1 group/btn"
                  >
                    <span>Read Book</span>
                    <ArrowRight className="size-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Excerpt Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card w-full max-w-lg rounded-2xl border border-border p-6 sm:p-8 shadow-2xl space-y-5 relative">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                  BookPal Sample Passage
                </span>
                <h4 className="text-xl font-serif font-bold text-foreground">
                  {selectedBook.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  by {selectedBook.author} ({selectedBook.year})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBook(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-serif text-foreground/90 text-base leading-relaxed italic bg-muted/40 p-5 rounded-xl border border-border/50">
              &ldquo;{selectedBook.excerpt}&rdquo;
            </div>

            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p className="font-sans font-semibold text-foreground">
                Curator&apos;s Appraisal:
              </p>
              <p className="font-sans leading-relaxed">
                {selectedBook.curatorNote}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
              <button
                type="button"
                onClick={() => setSelectedBook(null)}
                className="px-4 py-2 text-xs font-medium rounded-full border border-border hover:bg-muted transition-colors cursor-pointer"
              >
                Dismiss
              </button>
              <Link
                href="/sign-up"
                className="px-5 py-2 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
              >
                Add To My Shelf
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
