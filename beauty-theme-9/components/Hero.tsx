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
  const title = heroData.title || "PRISMATIC AURA";
  const subtitle = heroData.subtitle || "Formulations derived from pure light and mineral precision. Experience a glow that transcends the ordinary.";
  const badgeText = heroData.badgeText || "The Iridescence Series";
  const ctaText = heroData.ctaText || "DISCOVER THE GLOW";
  const mainImage = heroData.mainImage || "/ethereal_beauty_product_hero_1772727001179.png";
  const secondaryImage = heroData.secondaryImage || "/glowing_skincare_model_portrait_1772727021942.png";

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background pt-32 pb-20 lg:pt-0 lg:pb-0">
      {/* Background Prismatic Blooms */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Structural Glass Elements */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[400px] bg-white/20 backdrop-blur-3xl rounded-[3rem] border border-white/40 hidden lg:block -rotate-6 shadow-2xl shadow-primary/5" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">

        {/* Left Content: Ethereal Vision */}
        <div className="lg:col-span-12 xl:col-span-6 flex flex-col items-start text-left relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-transparent"></div>
            <span className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase">
              {badgeText}
            </span>
          </div>

          <h1 className="text-6xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] font-serif font-bold leading-[0.9] text-foreground mb-10 tracking-tight relative">
            {title.split(' ').map((word: string, i: number, arr: string[]) => (
              <span key={i} className={i === 1 ? "text-gradient relative z-20" : "relative z-20"}>
                {word} {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-12 font-medium">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-12 rounded-full bg-primary text-primary-foreground hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 font-bold tracking-widest text-[11px]">
                {ctaText}
              </Button>
            </Link>
            <Button variant="ghost" className="text-foreground/60 hover:text-primary transition-colors text-[11px] font-bold tracking-widest">
              VIEW MANIFESTO <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Stats/Badges */}
          <div className="mt-20 flex gap-12 border-l border-primary/20 pl-8">
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-foreground font-bold italic">Crystal</span>
              <span className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-widest">Molecular Purity</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-foreground font-bold italic">Light</span>
              <span className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-widest">Refractive Care</span>
            </div>
          </div>
        </div>

        {/* Right Content: Refractive Composition */}
        <div className="lg:col-span-12 xl:col-span-6 relative h-[600px] lg:h-[800px] w-full mt-10 xl:mt-0">
          {/* Main Floating Glass */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-[4rem] border border-white/60 shadow-inner overflow-hidden flex items-center justify-center p-8">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden group">
              <Image
                src={mainImage}
                alt={title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-60 mix-blend-overlay" />

              {/* Prismatic Overlay Effect */}
              <div className="absolute inset-x-[-50%] inset-y-[-50%] bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] pointer-events-none" />
            </div>
          </div>

          {/* Floating Detail Sphere with Model */}
          <div className="absolute top-0 -right-10 w-64 h-64 rounded-full border-4 border-white/60 shadow-2xl overflow-hidden z-20 animate-bounce-slow">
            <Image
              src={secondaryImage}
              alt="Refractive Model"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
