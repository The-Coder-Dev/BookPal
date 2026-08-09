"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, Sparkles, Feather } from "lucide-react";
import { Button } from "../ui/button";

export default function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <section className="w-full py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-card via-card/90 to-secondary/10 rounded-3xl border border-secondary/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center space-y-8">
          {/* Subtle gold line & background blur */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-mono tracking-wider uppercase">
            <Feather className="size-3.5" />
            <span>The BookPal Dispatch</span>
          </div>

          {/* Heading */}
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight">
              A bi-weekly letter for the{" "}
              <span className="italic font-serif text-secondary">
                thoughtful reader.
              </span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
              Every other Sunday morning: one remarkable forgotten essay, three passages of timeless
              philosophical wisdom, and zero algorithm noise.
            </p>
          </div>

          {/* Form / Subscription State */}
          <div className="max-w-md mx-auto">
            {subscribed ? (
              <div className="p-5 bg-secondary/15 border border-secondary/30 rounded-2xl flex items-center justify-center gap-3 text-secondary animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="size-5 shrink-0" />
                <span className="text-sm font-medium font-serif">
                  Welcome to the Fellowship. Check your inbox this Sunday.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 items-center"
              >
                <div className="relative w-full">
                  <Mail className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all shadow-xs"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto h-11 px-7 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground font-semibold text-sm transition-all shrink-0 cursor-pointer shadow-md"
                >
                  {loading ? "Joining..." : "Join Dispatch"}
                </Button>
              </form>
            )}

            <p className="text-[11px] font-mono text-muted-foreground mt-3">
              ✦ Free forever • No spam • One-click unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
