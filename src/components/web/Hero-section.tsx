import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full h-screen flex items-center justify-center flex-col mx-auto max-w-7xl">
        <div className="flex items-center justify-center flex-col gap-6">
          <Badge className="text-sm py-3 bg-secondary/20 text-secondary">
            Curated - Not Crowdsourced
          </Badge>
          <h1 className="text-5xl font-[instrument] uppercase">
            Not just a library -{" "}
            <span className="text-secondary">An edition.</span>
          </h1>
          <p className="max-w-xl text-center">
            No infinite scroll. No noise. Just a small, carefully kept
            collection — download it, and read at your own pace.
          </p>
          <Button
            className="hover:bg-secondary group " nativeButton={false}
            render={<Link href="/">Read Book <ArrowRight className="size-4 group-hover:translate-x-0.5 transtion-all duration-300" /></Link>}
          />
        </div>
      </div>
    </section>
  );
}
