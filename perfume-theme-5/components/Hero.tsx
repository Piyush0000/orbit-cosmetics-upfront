"use client";

import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const title = customization?.heroSection?.title || "Discover Your Signature Scent";
    const subtitle = customization?.heroSection?.subtitle || "Experience the essence of elegance with our meticulously curated collection of premium fragrances, crafted to linger in memory.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=2000&auto=format&fit=crop";
    
    return (
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-obsidian-950">
            {/* Full Bleed Background Image */}
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={image} 
                    alt="Luxury Dark Perfume" 
                    className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity scale-[1.02] transform transition-transform duration-[20s] ease-out hover:scale-110"
                />
                
                {/* Complex Overlays for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/90 via-obsidian-950/40 to-obsidian-950/90" />
                
                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-rich-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-rich-gold/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
            </div>

            {/* Glowing inner border box */}
            <div className="absolute inset-6 md:inset-10 border border-rich-gold/20 rounded-sm z-10 pointer-events-none hidden md:block" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rich-gold/40 to-transparent z-10" />

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 max-w-4xl text-center">
                <div className="space-y-8 animate-slide-up flex flex-col items-center">
                    
                    <div className="inline-flex items-center space-x-4 mb-2">
                        <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-rich-gold"></span>
                        <p className="text-rich-gold tracking-[0.4em] text-xs uppercase font-medium">
                            The Midnight Elixir
                        </p>
                        <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-rich-gold"></span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-pearl-100 font-normal leading-[1.05] tracking-tight drop-shadow-2xl">
                        {title.split(' ').map((word: string, i: number, arr: string[]) => {
                            // Style specific words or just standard rendering
                            if (i === arr.length - 1 || word.toLowerCase() === 'signature') {
                                return <span key={i} className="italic text-rich-gold font-light animate-glow inline-block">{word} </span>
                            }
                            return <span key={i}>{word} </span>
                        })}
                    </h1>

                    <p className="text-pearl-300 max-w-2xl text-lg md:text-xl font-light leading-relaxed mx-auto drop-shadow-md">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center items-center w-full sm:w-auto">
                        <Link
                            href="/shop"
                            className="w-full sm:w-auto px-10 py-5 bg-rich-gold text-obsidian-950 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-white hover:text-obsidian-950 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 flex items-center justify-center rounded-sm"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/bestsellers"
                            className="w-full sm:w-auto px-10 py-5 bg-transparent text-pearl-100 border border-rich-gold/40 text-[11px] uppercase tracking-[0.25em] font-medium hover:border-rich-gold hover:text-rich-gold hover:bg-rich-gold/5 transition-all duration-500 rounded-sm flex items-center justify-center"
                        >
                            View Best Sellers
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
                <span className="text-[9px] uppercase tracking-[0.3em] text-rich-gold mb-3 font-medium">Scroll down</span>
                <span className="h-16 w-px bg-gradient-to-b from-rich-gold to-transparent"></span>
            </div>
        </section>
    );
}
