"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sliders,
  Type,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Sparkles,
  Maximize2,
  Play,
  Pause,
  BookOpen,
  Check,
} from "lucide-react";

type FontType = "serif" | "sans" | "mono";
type ThemeType = "parchment" | "obsidian" | "sepia" | "linen";

interface SoundPreset {
  id: string;
  name: string;
  desc: string;
}

const SOUND_PRESETS: SoundPreset[] = [
  { id: "rain", name: "Rain on Library Window", desc: "Gentle rain & storm acoustics" },
  { id: "fire", name: "Hearth Fireplace", desc: "Warm crackling cedar embers" },
  { id: "vinyl", name: "Antique Vinyl Crackle", desc: "Cozy analog turntable hiss" },
  { id: "silence", name: "Deep Library Stillness", desc: "Zero auditory distraction" },
];

export default function InteractiveReaderPreview() {
  const [selectedFont, setSelectedFont] = useState<FontType>("serif");
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>("parchment");
  const [fontSize, setFontSize] = useState<number>(18);
  const [activeSound, setActiveSound] = useState<string>("rain");
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(42);

  const themeClasses: Record<ThemeType, { container: string; text: string; sub: string; border: string; accent: string }> = {
    parchment: {
      container: "bg-[#fbf7ee] dark:bg-[#25221e]",
      text: "text-[#2e2925] dark:text-[#f4ede2]",
      sub: "text-[#6c6258] dark:text-[#a89d8f]",
      border: "border-[#e5dcce] dark:border-[#3d3731]",
      accent: "bg-[#7a3b34] text-white",
    },
    obsidian: {
      container: "bg-[#141312]",
      text: "text-[#ede5d8]",
      sub: "text-[#9e9485]",
      border: "border-[#2b2724]",
      accent: "bg-[#b87d3b] text-black",
    },
    sepia: {
      container: "bg-[#efe5d2] dark:bg-[#2c2217]",
      text: "text-[#3d2b1f] dark:text-[#f3e8d6]",
      sub: "text-[#7a6452] dark:text-[#b59e89]",
      border: "border-[#d8caaF] dark:border-[#4d3b2b]",
      accent: "bg-[#5e3229] text-white",
    },
    linen: {
      container: "bg-[#ffffff] dark:bg-[#1a1a1a]",
      text: "text-[#1c1b1a] dark:text-[#f0f0f0]",
      sub: "text-[#75726e] dark:text-[#999999]",
      border: "border-[#e2e0dc] dark:border-[#333333]",
      accent: "bg-[#2c2b29] text-white",
    },
  };

  const fontClasses: Record<FontType, string> = {
    serif: "font-serif",
    sans: "font-sans",
    mono: "font-mono",
  };

  const currentTheme = themeClasses[selectedTheme];

  return (
    <section id="reader" className="w-full py-24 sm:py-32 bg-card/30 border-y border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono tracking-wider uppercase">
            <Sliders className="size-3.5" />
            <span>The Reader Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight">
            Crafted for pure, undisturbed{" "}
            <span className="italic font-serif text-secondary">
              absorption.
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
            Test the reader right in your browser. Switch paper tones, typography pairings,
            and ambient auditory atmospheres in real time.
          </p>
        </div>

        {/* The Live Interactive Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Sidebar */}
          <div className="lg:col-span-4 bg-card rounded-2xl border border-border p-6 space-y-6 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                Workstation Controls
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">
                Live Interactive
              </span>
            </div>

            {/* Typography Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-medium text-foreground flex items-center gap-1.5">
                <Type className="size-3.5 text-secondary" />
                <span>Typography Engine</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedFont("serif")}
                  className={cn(
                    "px-3 py-2 rounded-xl text-xs font-serif font-semibold border transition-all cursor-pointer",
                    selectedFont === "serif"
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-xs"
                      : "bg-muted/50 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  Lora Serif
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFont("sans")}
                  className={cn(
                    "px-3 py-2 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer",
                    selectedFont === "sans"
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-xs"
                      : "bg-muted/50 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  Sans Clean
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFont("mono")}
                  className={cn(
                    "px-3 py-2 rounded-xl text-xs font-mono font-semibold border transition-all cursor-pointer",
                    selectedFont === "mono"
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-xs"
                      : "bg-muted/50 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  Mono Focus
                </button>
              </div>
            </div>

            {/* Paper Theme Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-medium text-foreground flex items-center gap-1.5">
                <Sun className="size-3.5 text-secondary" />
                <span>Paper & Tone Environment</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTheme("parchment")}
                  className={cn(
                    "p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between transition-all cursor-pointer",
                    selectedTheme === "parchment"
                      ? "bg-[#fbf7ee] text-[#2e2925] border-amber-600 ring-1 ring-amber-600/30"
                      : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span>Parchment</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#fbf7ee] border border-stone-300" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTheme("obsidian")}
                  className={cn(
                    "p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between transition-all cursor-pointer",
                    selectedTheme === "obsidian"
                      ? "bg-[#141312] text-[#ede5d8] border-amber-500 ring-1 ring-amber-500/30"
                      : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span>Obsidian</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#141312] border border-stone-700" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTheme("sepia")}
                  className={cn(
                    "p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between transition-all cursor-pointer",
                    selectedTheme === "sepia"
                      ? "bg-[#efe5d2] text-[#3d2b1f] border-amber-800 ring-1 ring-amber-800/30"
                      : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span>Antique Sepia</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#efe5d2] border border-amber-300" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTheme("linen")}
                  className={cn(
                    "p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between transition-all cursor-pointer",
                    selectedTheme === "linen"
                      ? "bg-white text-black border-stone-400 ring-1 ring-stone-300"
                      : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span>Linen White</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-white border border-stone-300" />
                </button>
              </div>
            </div>

            {/* Font Size Slider */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">Type Scale</span>
                <span className="font-mono font-bold text-foreground">{fontSize}px</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif text-muted-foreground">A</span>
                <input
                  type="range"
                  min={14}
                  max={24}
                  step={1}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-secondary h-1.5 bg-muted rounded-lg cursor-pointer"
                />
                <span className="text-lg font-serif font-bold text-foreground">A</span>
              </div>
            </div>

            {/* Ambient Soundscape Player */}
            <div className="space-y-3 pt-3 border-t border-border/60">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-medium text-foreground flex items-center gap-1.5">
                  <Volume2 className="size-3.5 text-secondary" />
                  <span>Atmospheric Soundscape</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="text-xs flex items-center gap-1 font-mono text-secondary hover:underline cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="size-3" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-3" />
                      <span>Sample Audio</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sound Presets */}
              <div className="grid grid-cols-2 gap-2">
                {SOUND_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setActiveSound(preset.id);
                      setIsPlayingAudio(true);
                    }}
                    className={cn(
                      "p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer",
                      activeSound === preset.id
                        ? "bg-secondary/15 border-secondary/50 text-foreground font-medium"
                        : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                    )}
                  >
                    <p className="font-semibold line-clamp-1">{preset.name}</p>
                    <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                      {preset.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Audio visualizer bar (animated if active) */}
              {isPlayingAudio && (
                <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/20 flex items-center justify-between animate-in fade-in">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-secondary rounded-full animate-bounce" />
                    <span className="w-1 h-5 bg-secondary rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1 h-2 bg-secondary rounded-full animate-bounce [animation-delay:300ms]" />
                    <span className="w-1 h-4 bg-secondary rounded-full animate-bounce [animation-delay:75ms]" />
                    <span className="text-[11px] font-mono text-secondary font-medium ml-1.5">
                      Simulated Ambiance Playing
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(false)}
                    className="text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Reader Canvas Mockup */}
          <div className="lg:col-span-8">
            <div
              className={cn(
                "rounded-2xl border p-8 sm:p-12 transition-all duration-300 shadow-xl relative min-h-[540px] flex flex-col justify-between",
                currentTheme.container,
                currentTheme.border
              )}
            >
              {/* Reader Window Top Header */}
              <div className={cn("flex items-center justify-between pb-6 border-b", currentTheme.border)}>
                <div className="flex items-center gap-3">
                  <span className={cn("text-xs font-mono uppercase tracking-widest font-semibold", currentTheme.sub)}>
                    Book II • Section 1
                  </span>
                  <span className={cn("text-xs", currentTheme.sub)}>•</span>
                  <span className={cn("text-xs font-mono", currentTheme.sub)}>
                    Marcus Aurelius
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={cn("text-xs font-mono px-2 py-0.5 rounded-full border", currentTheme.border, currentTheme.sub)}>
                    Offline Synced
                  </span>
                </div>
              </div>

              {/* Reader Body Text Container */}
              <div className="my-auto py-8 max-w-xl mx-auto space-y-6">
                <h3
                  className={cn(
                    "text-2xl sm:text-3xl font-bold tracking-tight",
                    currentTheme.text,
                    fontClasses[selectedFont]
                  )}
                >
                  On the Fragility of Outside Opinion
                </h3>

                <p
                  className={cn("leading-relaxed transition-all", currentTheme.text, fontClasses[selectedFont])}
                  style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
                >
                  When you wake up in the morning, tell yourself: The people I deal with today will be meddling, 
                  ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they cannot 
                  distinguish good from evil.
                </p>

                <p
                  className={cn("leading-relaxed transition-all", currentTheme.text, fontClasses[selectedFont])}
                  style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
                >
                  But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer 
                  has a nature related to my own — not of the same blood or birth, but the same mind, and 
                  possessing a share of the divine.
                </p>
              </div>

              {/* Reader Bottom Bar with Progress Indicator */}
              <div className={cn("pt-6 border-t flex items-center justify-between", currentTheme.border)}>
                <div className="flex items-center gap-3">
                  <span className={cn("text-xs font-mono", currentTheme.sub)}>
                    Page 42 of 188
                  </span>
                  <div className="w-24 sm:w-36 h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary transition-all duration-300"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                </div>

                <span className={cn("text-xs font-mono italic", currentTheme.sub)}>
                  ~4m remaining in chapter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
