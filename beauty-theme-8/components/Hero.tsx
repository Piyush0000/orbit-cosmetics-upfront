"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import { useStoreContext } from "@/context/store-context";

export function Hero() {
  const context = useStoreContext() as any;
  const customization = context?.customization;

  const heroData = customization?.heroSection || {};
  const title = heroData.title || "Cocoa <br /><span className=\"italic font-light text-primary/80\">& Silk</span>";
  const subtitle = heroData.subtitle || "Immerse yourself in formulations where high-end science meets artisanal botanical care. Sophisticated beauty, naturally refined.";
  const ctaText = heroData.ctaText || "Shop Collection";

  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[850px] flex items-center overflow-hidden bg-background py-16 lg:py-0">
      {/* Background Organic Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content: The Narrative */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 py-1.5 px-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-[0.1em] uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Handcrafted Selection
            </span>
          </div>

          <h1
            className="text-6xl sm:text-7xl lg:text-9xl font-serif leading-[0.95] text-foreground mb-8"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p className="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed mb-10 max-w-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-12 py-8 rounded-[2rem] bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all duration-500 shadow-xl shadow-primary/20">
                {ctaText}
              </Button>
            </Link>
          </div>

          {/* Organic Badges */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3 group">
              <div className="p-3 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors duration-500">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-medium text-muted-foreground font-sans">Deep_Hydration</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-3 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors duration-500">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-medium text-muted-foreground font-sans">Botanical_Purity</span>
            </div>
          </div>
        </div>

        {/* Right Content: The Sculpted Composition */}
        <div className="relative h-[500px] lg:h-[700px] w-full hidden sm:block">
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-[80%] h-[90%] rounded-[4rem] overflow-hidden border-8 border-background shadow-2xl rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800"
              alt="Product Showcase"
              fill
              className="object-cover"
            />
          </div>
          {/* Secondary Layered Image */}
          <div className="absolute bottom-10 left-0 w-[50%] h-[60%] rounded-[3rem] overflow-hidden border-8 border-background shadow-2xl z-20 -rotate-6">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600"
              alt="Artisan Detail"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative Copper Disc */}
          <div className="absolute top-[20%] left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
