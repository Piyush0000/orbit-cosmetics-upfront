"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import { useStoreContext } from "@/context/store-context";

export function Hero() {
  const context = useStoreContext() as any;
  const customization = context?.customization;

  const heroData = customization?.heroSection || {};
  const title = heroData.title || "Aura of Veridian";
  const subtitle = heroData.subtitle || "Ancient forest wisdom meets modern botanical science. Formulations cold-pressed for potency, designed for the modern soul's ritual.";
  const ctaText = heroData.ctaText || "THE BOTANICAL RITUAL";
  const secondaryCtaText = heroData.secondaryCtaText || "EXPLORE GARDEN";
  const mainImage = heroData.mainImage || "/botanical_serene_hero_zen_1772727123456_png_1772728343807.png";
  const floatingImage = heroData.floatingImage || "/botanical_avatar_portrait_1772727123458_png_1772728393190.png";
  const badgeText = heroData.badgeText || "Ethically Sourced. Purely Botanical.";

  return (
    <section className="relative w-full min-h-[800px] lg:min-h-[900px] flex items-center overflow-hidden bg-background pt-24 pb-16">
      {/* Botanical Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[80px] -ml-40 -mb-40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content: Botanical Narrative */}
        <div className="flex flex-col items-start text-left max-w-xl space-y-10 group">
          <div className="inline-flex items-center gap-2.5 py-2 px-6 rounded-full bg-primary/5 border border-primary/10 botanical-glow">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
              {badgeText}
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-[8rem] font-serif leading-[1.05] text-foreground tracking-tight">
              {title.split(' ').map((word: string, i: number, arr: string[]) => (
                <span key={i}>
                  {i === arr.length - 1 ? <><br /><span className="italic font-light text-primary/80">{word}</span></> : word + ' '}
                </span>
              ))}
            </h1>
            <p className="text-lg text-muted-foreground/70 leading-relaxed max-w-lg font-medium">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 w-full">
            <Button size="lg" className="h-14 px-10 rounded-full bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-xs font-bold tracking-[0.15em]">
              {ctaText} <ArrowRight className="ml-3 w-4 h-4" />
            </Button>
            <Button variant="ghost" className="h-14 px-8 rounded-full border border-primary/10 text-primary text-[11px] font-bold tracking-widest hover:bg-primary/5">
              {secondaryCtaText}
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="flex items-center gap-8 pt-8 border-t border-primary/5 w-full">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-secondary/30 overflow-hidden shadow-sm">
                  <div className="w-full h-full flex items-center justify-center text-primary/40"><Leaf className="w-5 h-5" /></div>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Sparkles key={s} className="w-3 h-3 fill-accent" />)}
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                {heroData.trustText || "Trusted by 50k+ Nature Seekers"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Serene Composition */}
        <div className="relative h-[600px] lg:h-[800px] w-full mt-12 lg:mt-0 group">
          {/* Main Organic Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-[4rem] border border-white/60 shadow-inner overflow-hidden flex items-center justify-center p-8 botanical-glow">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden group">
              <Image
                src={mainImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Detail Portrait */}
          <div className="absolute top-16 -right-4 lg:-right-12 w-56 h-72 rounded-[3rem] border-4 border-white/60 shadow-2xl overflow-hidden z-20 animate-bounce-slow botanical-glow">
            <Image
              src={floatingImage}
              alt="Detail view"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Accents */}
          <div className="absolute -bottom-6 -left-6 lg:-left-12 w-48 h-48 bg-accent/20 rounded-full blur-[60px] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
