"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem } from "lucide-react";
import { useStoreContext } from "@/context/store-context";

export function Hero() {
  const context = useStoreContext() as any;
  const customization = context?.customization;

  const heroData = customization?.heroSection || {};
  const title = heroData.title || `Elevate Your<br/><span className="italic font-extralight text-accent">Natural Glow</span>`;
  const subtitle = heroData.subtitle || "Experience the intersection of traditional botanical wisdom and modern clinical science.<span className=\"hidden sm:inline\"> Crafted for those who seek uncompromising excellence in their daily ritual.</span>";
  const ctaText = heroData.ctaText || "Explore Shop";

  return (
    <section className="relative w-full h-[calc(100dvh-80px)] min-h-[400px] sm:min-h-[600px] flex items-center overflow-hidden bg-[oklch(0.12_0.03_160)]">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Decorative Orbs - Intensified for Luxury */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center text-center py-10 sm:py-20 lg:py-24">
        {/* Top Content */}
        <div className="space-y-4 sm:space-y-8 flex flex-col items-center">
          <div className="hidden sm:inline-flex items-center gap-2 py-1.5 px-6 rounded-full border border-accent/20 bg-accent/5 text-accent text-[9px] sm:text-xs font-bold tracking-[0.4em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Gem className="w-4 h-4" /> Editorial Collection 2025
          </div>

          <h1 
            className="text-4xl sm:text-8xl lg:text-[10rem] font-medium font-serif leading-[1.0] sm:leading-[0.85] text-primary-foreground tracking-tighter"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p 
            className="text-[10px] sm:text-lg lg:text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        {/* Middle Actions */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
          <Link href="/shop" className="w-full sm:w-auto overflow-hidden group/btn">
            <Button size="lg" className="w-full sm:w-auto text-lg px-14 py-8 rounded-none bg-accent text-accent-foreground items-center gap-3 transition-all duration-700 tracking-[0.3em] uppercase font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-accent-foreground/50 after:scale-x-0 group-hover/btn:after:scale-x-100 after:transition-transform">
              {ctaText} <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2" />
            </Button>
          </Link>
          <Link href="/#bestsellers" className="group flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-all duration-500">
            <span className="text-base sm:text-lg font-medium tracking-widest border-b border-accent/10 group-hover:border-accent transition-all duration-500 uppercase">View Bestsellers</span>
          </Link>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-3xl mx-auto pt-4 sm:pt-12 border-t border-primary-foreground/10">
          <div className="space-y-0 sm:space-y-1">
            <p className="text-lg sm:text-3xl font-serif text-accent italic">50k+</p>
            <p className="text-[7px] sm:text-[10px] text-primary-foreground/40 uppercase tracking-[0.1em] sm:tracking-[0.2em]">Clients</p>
          </div>
          <div className="space-y-0 sm:space-y-1 border-x border-primary-foreground/10 px-1 sm:px-4">
            <p className="text-lg sm:text-3xl font-serif text-accent italic">200+</p>
            <p className="text-[7px] sm:text-[10px] text-primary-foreground/40 uppercase tracking-[0.1em] sm:tracking-[0.2em]">Formulae</p>
          </div>
          <div className="space-y-0 sm:space-y-1">
            <p className="text-lg sm:text-3xl font-serif text-accent italic">4.9/5</p>
            <p className="text-[7px] sm:text-[10px] text-primary-foreground/40 uppercase tracking-[0.1em] sm:tracking-[0.2em]">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
