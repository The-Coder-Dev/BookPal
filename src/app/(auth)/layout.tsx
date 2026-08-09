import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft, BookOpen, Sparkles, ShieldCheck } from "lucide-react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-background text-foreground relative">
      {/* Left / Form Column */}
      <div className="w-full lg:w-1/2 xl:w-120 2xl:w-135 min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14 z-10 bg-background overflow-y-auto">
        {/* Top brand header */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-85"
          >
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="BookPal Logo"
              className="w-8 h-8 transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-semibold text-xl tracking-tight text-foreground">
              BookPal
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group px-3 py-1.5 rounded-full border border-border/60 hover:border-border hover:bg-muted/50"
          >
            <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
            <span>Home</span>
          </Link>
        </div>

        {/* Form container */}
        <div className="w-full max-w-md mx-auto my-auto py-8 sm:py-10">
          {children}
        </div>

        {/* Bottom subtle copyright / info */}
        <div className="w-full text-center lg:text-left text-xs text-muted-foreground py-2 border-t border-border/40">
          <p>© {new Date().getFullYear()} BookPal Edition. Curated reading for thoughtful minds.</p>
        </div>
      </div>

      {/* Right / Visual Showcase Column */}
      <div className="hidden lg:flex lg:flex-1 relative flex-col justify-between p-12 xl:p-16 overflow-hidden bg-primary/95 text-white">
        {/* Bookshelf ambiance background image */}
        <Image
          src="/auth.webp"
          alt="BookPal Library Ambiance"
          fill
          priority
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          sizes="(min-width: 1024px) 60vw, 0vw"
          quality={90}
        />

        {/* Atmospheric overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/35 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-secondary/15 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        {/* Top edition badge */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white/95 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Curated • Not Crowdsourced
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            Private Edition
          </span>
        </div>

        {/* Bottom typography & editorial content */}
        <div className="relative z-10 space-y-6 max-w-xl">
          <div className="space-y-3">
            <h1 className="text-white text-4xl xl:text-5xl 2xl:text-6xl font-serif font-normal uppercase tracking-tight leading-[1.15]">
              Not just a library.{" "}
              <span className="text-amber-200/95 font-serif italic normal-case block mt-1">
                An edition.
              </span>
            </h1>
            <p className="text-white/85 text-base xl:text-lg font-light leading-relaxed max-w-lg">
              Every book here is chosen, not just added. Read anywhere, offline, at your own pace.
            </p>
          </div>

          {/* Curated highlights */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/15">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/15 shadow-xs">
              <BookOpen className="size-3 text-amber-300" />
              Handpicked Titles
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/15 shadow-xs">
              <Sparkles className="size-3 text-amber-300" />
              Distraction Free
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/15 shadow-xs">
              <ShieldCheck className="size-3 text-amber-300" />
              Offline Sync
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}