import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex items-center overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-16">
        <div className="space-y-5 sm:space-y-8 text-center lg:text-left">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="h-px w-8 sm:w-12 bg-primary/50" />
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> New Collection 2024
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif leading-[1.08] text-foreground">
            Reveal Your
            <br />
            <span className="text-primary">Inner Glow</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
            Luxurious formulations crafted with care. Discover skincare that transforms your daily routine into a moment of indulgence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-5 sm:py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-105 transition-all duration-300 gap-2">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/#bestsellers" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base px-6 py-5 sm:py-6 text-primary hover:bg-primary/5 rounded-full transition-all duration-300 underline underline-offset-4 decoration-primary/30">
                Best Sellers
              </Button>
            </Link>
          </div>

          {/* Stats strip */}
          <div className="flex gap-6 sm:gap-8 pt-4 border-t border-border/30 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold font-serif text-foreground">50K+</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">Happy Customers</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold font-serif text-foreground">200+</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">Products</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold font-serif text-foreground">4.9★</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">Avg Rating</p>
            </div>
          </div>
        </div>

        {/* Right Decorative Panel - hidden on mobile */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-[420px] h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 rounded-[3rem] rotate-3" />
            <div className="absolute inset-3 bg-gradient-to-tr from-secondary/40 to-primary/8 rounded-[2.5rem] -rotate-2" />
            <div className="absolute inset-6 bg-gradient-to-b from-muted/50 to-primary/5 rounded-[2rem] rotate-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <p className="font-serif text-2xl font-bold text-foreground/70">Premium</p>
                <p className="font-serif text-lg text-primary">Beauty Care</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/15 rounded-full blur-sm" />
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-secondary/40 rounded-full blur-sm" />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />
    </section>
  );
}
