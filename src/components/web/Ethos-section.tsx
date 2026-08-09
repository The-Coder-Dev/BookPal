"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Feather,
  EyeOff,
  WifiOff,
  Sparkles,
  Check,
  X,
  Compass,
  BookMarked,
  Scroll,
  Layers,
} from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Feather;
  features: string[];
}

const PILLARS: Pillar[] = [
  {
    id: "canon",
    number: "01",
    title: "Human-Curated Canon",
    tagline: "Vetted for enduring value, not click metrics.",
    description:
      "Most digital libraries are dumping grounds of millions of algorithmic re-hashes. BookPal is strictly an edition: we maintain a tightly bounded collection where every single book has survived the test of time or made an indisputable contribution to human thought.",
    icon: Compass,
    features: [
      "Rigorous scholarly curation criteria",
      "Definitive translations & clean editions",
      "Zero AI-generated clutter or sponsored placements",
    ],
  },
  {
    id: "zen",
    number: "02",
    title: "Typographic Zen",
    tagline: "Typeset for deep focus, not dopamine hits.",
    description:
      "Reading on a screen shouldn't feel like navigating a spreadsheet. Our reader engine calculates golden-ratio margins, comfortable 65-character line measures, and renders on warm parchment contrast tuned to reduce ocular fatigue over four-hour sessions.",
    icon: Scroll,
    features: [
      "Bespoke serif & sans typography pairings",
      "Nocturnal obsidian & antique paper modes",
      "Zero pop-ups, banners, or notification pings",
    ],
  },
  {
    id: "offline",
    number: "03",
    title: "True Local Sanctuary",
    tagline: "Your library belongs to you — offline & private.",
    description:
      "One click downloads your books straight to local cache. Read on subways, mountain cabins, or during international flights without needing a connection. Your notes and annotations stay strictly on your device.",
    icon: WifiOff,
    features: [
      "Instant offline availability with 1-click sync",
      "Zero surveillance or behavioral tracking",
      "Exportable highlights in standard Markdown",
    ],
  },
];

export default function EthosSection() {
  const [activePillar, setActivePillar] = useState<string>(PILLARS[0].id);

  return (
    <section id="ethos" className="w-full py-24 sm:py-32 bg-card/40 border-y border-border/60 relative overflow-hidden">
      {/* Subtle background ambient pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono tracking-wider uppercase">
            <BookMarked className="size-3.5" />
            <span>The BookPal Manifesto</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight">
            An antidote to the{" "}
            <span className="italic font-serif text-secondary">
              endless feed.
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
            The internet gave us access to everything and the attention span for nothing.
            BookPal was built as a quiet digital monastery for deep, contemplative reading.
          </p>
        </div>

        {/* Comparison Showcase: Modern Feeds vs BookPal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Column 1: The Modern Feed Problem */}
          <div className="bg-destructive/5 rounded-2xl border border-destructive/20 p-6 sm:p-8 space-y-5 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-destructive/80 font-semibold">
                The Infinite Web
              </span>
              <div className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
                <X className="size-3.5" />
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-foreground">
              Algorithmic Overwhelm & Distraction
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>Endless doomscrolling and recommendation engines optimized for engagement addiction.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>Bloated catalogs packed with thousands of unvetted, low-quality automated publications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>Aggressive trackers harvesting reading habits, telemetry, and personal reading speeds.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The BookPal Sanctuary */}
          <div className="bg-secondary/5 rounded-2xl border border-secondary/25 p-6 sm:p-8 space-y-5 shadow-md relative overflow-hidden transition-all">
            {/* Top gold accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                The BookPal Sanctuary
              </span>
              <div className="w-6 h-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                <Check className="size-3.5" />
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-foreground">
              Intentionality, Craft & Quiet Stillness
            </h3>

            <ul className="space-y-3 text-sm text-foreground/90 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-secondary font-bold text-base leading-none">✓</span>
                <span>Bounded, finite shelves: once you finish a curated collection, you are truly done.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-secondary font-bold text-base leading-none">✓</span>
                <span>Typeset by typographers with golden-ratio margins and classical book aesthetics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-secondary font-bold text-base leading-none">✓</span>
                <span>100% offline, privacy-first sanctuary where your marginalia belongs exclusively to you.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The 3 Core Pillars Tabs */}
        <div className="space-y-8">
          {/* Pillar Selector Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={cn(
                    "p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between space-y-4 cursor-pointer group",
                    isActive
                      ? "bg-card border-secondary/40 shadow-lg ring-1 ring-secondary/20 -translate-y-1"
                      : "bg-card/50 border-border hover:border-border/80 hover:bg-card/80"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-mono font-bold text-secondary">
                      {pillar.number}
                    </span>
                    <div
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center transition-colors",
                        isActive
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-serif font-bold text-foreground">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Expanded Display */}
          {(() => {
            const current = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];
            const Icon = current.icon;
            return (
              <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-secondary/15 text-secondary font-bold">
                        Pillar {current.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                        {current.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-light">
                      {current.description}
                    </p>

                    <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {current.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-4 h-4 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                            <Check className="size-2.5" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-muted/40 rounded-xl border border-border/60 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shadow-inner">
                      <Icon className="size-7" />
                    </div>
                    <p className="text-sm font-serif italic text-foreground/90">
                      &ldquo;{current.tagline}&rdquo;
                    </p>
                    <span className="text-xs font-mono uppercase text-muted-foreground">
                      BookPal Standard No. {current.number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
