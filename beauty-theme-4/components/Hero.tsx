import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10">
      {/* Decorative botanical elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block mb-6 py-1.5 px-5 border border-primary/30 rounded-full text-primary text-sm font-medium tracking-[0.2em] uppercase bg-primary/5 backdrop-blur-sm">
          Natural Beauty Essentials
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 font-serif leading-[1.1]">
          Beauty, <span className="text-primary italic">Naturally</span> Yours
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover a curated collection of botanical-powered skincare and beauty essentials designed for your most radiant self.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
              Shop Skincare
            </Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Explore Beauty
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
