"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const subtitle = customization?.heroSection?.subtitle || "Natural essences captured in their purest form. A collection inspired by the earth, for the modern soul.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop";
    
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 lg:pt-40 pb-20">
            {/* Artistic Ethereal Background Glows */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-dream-peach/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 animate-slow-zoom" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-dream-mint/20 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 animate-float [animation-delay:2s]" />
            <div className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-dream-lavender/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-float [animation-delay:4s]" />

            <div className="container mx-auto px-6 relative z-10 h-full">
                <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left: Huge Editorial Text Overlay */}
                    <div className="lg:col-span-7 z-20 space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left relative">
                        <div className="inline-block px-5 py-1.5 glass-card border-none shadow-sm mb-2 lg:mb-4 rounded-full">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-dream-violet">Atelier Collection • 2026</span>
                        </div>

                        <h1 className="text-[80px] md:text-[120px] lg:text-[150px] xl:text-[180px] font-serif leading-[0.8] tracking-tighter text-text-main">
                            {customization?.heroSection?.title ? customization.heroSection.title : (
                                <div className="flex flex-col">
                                    <span className="block font-medium drop-shadow-sm">Pastel</span>
                                    <span className="block italic font-light text-[#7a6bab] -mt-2 md:-mt-4 lg:-mt-6 drop-shadow-lg lg:ml-12">Whispers</span>
                                </div>
                            )}
                        </h1>

                        <p className="text-text-main text-lg md:text-xl font-medium leading-relaxed max-w-sm lg:max-w-md mx-auto lg:mx-0 backdrop-blur-sm bg-white/40 p-8 rounded-[40px] border border-white/50 shadow-lg">
                            {subtitle}
                        </p>

                        <div className="flex justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
                            <Link
                                href="/shop"
                                className="px-10 py-5 bg-text-main text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-dream-lavender hover:text-text-main transition-all duration-700 shadow-2xl hover:scale-105"
                            >
                                Shop Collection
                            </Link>
                            <Link
                                href="/new-arrivals"
                                className="px-10 py-5 glass-card text-text-main rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-700 shadow-md hover:scale-105"
                            >
                                Explore New
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image Layout */}
                    <div className="lg:col-span-12 lg:absolute lg:right-0 lg:w-[45%] xl:w-[40%] z-10 animate-fade-in [animation-delay:0.4s] mt-12 lg:mt-0">
                        <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto">
                            {/* Main Image Container */}
                            <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
                                <img
                                    src={image}
                                    alt="Hero Fragrance"
                                    className="w-full h-full object-cover animate-slow-zoom select-none"
                                />
                                {/* subtle gradient overlay to ensure text contrast if it overlaps */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent mix-blend-overlay pointer-events-none" />
                            </div>
                            
                            {/* Floating Glass Detail Card */}
                            <div className="absolute -bottom-8 lg:-bottom-12 -left-4 lg:-left-20 glass-card p-6 lg:p-8 shadow-2xl animate-float max-w-[200px] lg:max-w-[240px] z-30 rounded-[40px]">
                                <p className="mono-label text-[9px] mb-2 text-dream-violet font-bold uppercase tracking-widest">Masterpiece</p>
                                <p className="font-serif text-base lg:text-lg leading-tight text-text-main">A symphony of delicate floral notes.</p>
                                <div className="mt-4 w-12 h-[1.5px] bg-dream-violet/40" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </section>
    );
}
