"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const subtitle = customization?.heroSection?.subtitle || "Natural essences captured in their purest form. A collection inspired by the earth, for the modern soul.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop";
    
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Pastel Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pastel-pink blur-[120px] rounded-full opacity-60 animate-float" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pastel-lavender blur-[120px] rounded-full opacity-60 animate-float [animation-delay:2s]" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Floating Badge */}
                    <div className="px-6 py-2 bg-white/50 backdrop-blur-xl border border-white/80 rounded-full shadow-sm animate-fade-in">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pastel-violet">Pure Essence • Collective</span>
                    </div>

                    {/* Main Heading */}
                    <div className="max-w-4xl space-y-6 animate-fade-in [animation-delay:0.3s]">
                        <h1 className="text-6xl md:text-9xl font-serif text-text-main leading-[1.1] tracking-tight">
                            {customization?.heroSection?.title ? customization.heroSection.title : (
                                <>
                                    The Art of <br />
                                    <span className="italic font-light text-pastel-rose">Scented Bloom</span>
                                </>
                            )}
                        </h1>
                        <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in [animation-delay:0.6s]">
                        <Link
                            href="/shop"
                            className="px-10 py-5 bg-text-main text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-pastel-violet transition-all duration-500 shadow-xl shadow-text-main/10"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/new-arrivals"
                            className="px-10 py-5 bg-white border border-gray-100 text-text-main rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:border-pastel-rose transition-all duration-500 shadow-sm"
                        >
                            New Arrivals
                        </Link>
                    </div>
                </div>

                {/* Hero Feature Image (Floating) */}
                <div className="mt-20 relative max-w-5xl mx-auto perspective-1000 animate-fade-in [animation-delay:0.9s]">
                    <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl glass-panel">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image}
                            alt="Sage & Stone Perfume"
                            className="w-full h-full object-cover object-center animate-slow-zoom transition-all hover:scale-110 duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e1bee7_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.1] -z-10" />
        </section>
    );
}
