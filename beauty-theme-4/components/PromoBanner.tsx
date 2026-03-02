import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PromoBanner() {
    return (
        <section className="relative py-24 px-4 bg-primary w-full overflow-hidden text-primary-foreground">
            {/* Abstract Background Shapes - botanical orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-white/3 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="inline-block py-1.5 px-5 border border-white/25 rounded-full text-white/90 mb-6 text-sm font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
                    Limited Time Offer
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                    Flat 30% OFF on Skincare
                </h2>

                {/* Simple Countdown UI */}
                <div className="flex justify-center gap-4 md:gap-8 mb-10 text-center">
                    <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3">
                        <span className="text-3xl md:text-5xl font-bold font-serif">02</span>
                        <span className="text-xs uppercase text-white/60 tracking-wider mt-1">Days</span>
                    </div>
                    <span className="text-3xl md:text-5xl font-bold text-accent self-start pt-3">:</span>
                    <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3">
                        <span className="text-3xl md:text-5xl font-bold font-serif">14</span>
                        <span className="text-xs uppercase text-white/60 tracking-wider mt-1">Hours</span>
                    </div>
                    <span className="text-3xl md:text-5xl font-bold text-accent self-start pt-3">:</span>
                    <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3">
                        <span className="text-3xl md:text-5xl font-bold font-serif">45</span>
                        <span className="text-xs uppercase text-white/60 tracking-wider mt-1">Mins</span>
                    </div>
                </div>

                <Link href="/shop">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-full shadow-xl shadow-black/10 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold">
                        Shop the Sale
                    </Button>
                </Link>
            </div>
        </section>
    );
}
