"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem } from "lucide-react";
import { useStoreContext } from "@/context/store-context";

export function Hero() {
  const context = useStoreContext() as any;
  const customization = context?.customization;

  const heroData = customization?.heroSection || {};
  const title = heroData.title || "Unveil Your<br /><span className=\"text-primary\">True Aura</span>";
  const subtitle = heroData.subtitle || "Luxurious formulations crafted with care. Discover skincare that transforms your daily routine into a moment of indulgence.";
  const ctaText = heroData.ctaText || "Shop Now";

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {/* Floating badge */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            <Gem className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> New Collection {new Date().getFullYear()}
          </span>
        </div>

        <h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-bold font-serif leading-[1.05] text-foreground mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
        />

        <p 
            className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10"
            dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-12 sm:mb-16">
          <Link href="/shop" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto text-base px-10 py-5 sm:py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-105 transition-all duration-300 gap-2">
              {ctaText} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/#bestsellers" className="w-full sm:w-auto">
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base px-6 py-5 sm:py-6 text-primary hover:bg-primary/5 rounded-full transition-all duration-300 underline underline-offset-4 decoration-primary/30">
              Best Sellers
            </Button>
          </Link>
        </div>

        {/* Stats as horizontal pill badges */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <div className="flex items-center gap-2.5 bg-card border border-border/40 rounded-full px-5 py-2.5 shadow-sm">
            <p className="text-lg sm:text-xl font-bold font-serif text-foreground">50K+</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">Happy Customers</p>
          </div>
          <div className="flex items-center gap-2.5 bg-card border border-border/40 rounded-full px-5 py-2.5 shadow-sm">
            <p className="text-lg sm:text-xl font-bold font-serif text-foreground">200+</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">Products</p>
          </div>
          <div className="flex items-center gap-2.5 bg-card border border-border/40 rounded-full px-5 py-2.5 shadow-sm">
            <p className="text-lg sm:text-xl font-bold font-serif text-foreground">4.9★</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-secondary/30 rounded-full blur-[60px] pointer-events-none" />
    </section>
  );
}
