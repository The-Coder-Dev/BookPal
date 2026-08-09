"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatarText: string;
  quote: string;
  favoriteBook: string;
  booksRead: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Alistair Finch",
    role: "Professor of Classical Literature",
    institution: "Oxford Literary Review",
    avatarText: "AF",
    quote:
      "BookPal has done something revolutionary by being stubbornly conservative. In a digital world obsessed with infinite content, having a finite, beautifully typeset edition of essential books is a breath of fresh air.",
    favoriteBook: "Meditations",
    booksRead: 38,
  },
  {
    id: "t2",
    name: "Clara Morales",
    role: "Architect & Essayist",
    institution: "Studio Meridian",
    avatarText: "CM",
    quote:
      "The typography engine is sublime. The golden-ratio margins, paper color temperatures, and zero distractions allow me to read for hours without screen fatigue. It feels like holding a luxury hardcover.",
    favoriteBook: "The Shape of Craft",
    booksRead: 24,
  },
  {
    id: "t3",
    name: "Julian Vance",
    role: "Independent Researcher & Author",
    institution: "Monograph Press",
    avatarText: "JV",
    quote:
      "Having my entire library downloaded locally without DRM or tracking has transformed my travel reading. It is genuinely the only reading software that respects the reader's solitude.",
    favoriteBook: "Letters from a Stoic",
    booksRead: 52,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono tracking-wider uppercase">
            <Quote className="size-3.5" />
            <span>Reader Acclaim</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight">
            Loved by scholars, writers &{" "}
            <span className="italic font-serif text-secondary">
              attentive minds.
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
            Over 14,000 readers have left behind infinite feeds to rediscover the joy of deliberate, immersive reading.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border/80 p-8 flex flex-col justify-between space-y-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-secondary/30 relative overflow-hidden group"
            >
              {/* Star Rating & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="size-3 text-secondary" />
                  Verified Reader
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-foreground/90 font-serif leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Reader Info */}
              <div className="pt-4 border-t border-border/60 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.role} • {item.institution}
                  </p>
                  <p className="text-[10px] font-mono text-secondary mt-0.5">
                    Favorite: {item.favoriteBook} • {item.booksRead} Volumes Read
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
