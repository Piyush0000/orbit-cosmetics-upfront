"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const subtitle = customization?.heroSection?.subtitle || "Natural essences captured in their purest form. A collection inspired by the earth, for the modern soul.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop";
    
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background pt-20">
            {/* Background Ethereal Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-dream-mint/30 blur-[150px] rounded-full animate-float" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-dream-peach/30 blur-[150px] rounded-full animate-float [animation-delay:3s]" />
            <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-dream-sky/20 blur-[100px] rounded-full animate-slow-zoom" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content (Asymmetrical) */}
                    <div className="space-y-10 animate-fade-in order-2 lg:order-1">
                        <div className="inline-block px-5 py-2 glass-card border-none shadow-sm mb-4">
                            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-dream-violet/80">Ethereal Collection • 2026</span>
                        </div>

                        <h1 className="text-7xl md:text-[120px] font-serif text-text-main leading-[0.85] tracking-tighter">
                            {customization?.heroSection?.title ? customization.heroSection.title : (
                                <>
                                    <span className="block italic font-light opacity-60">Dreamy</span>
                                    <span className="block font-medium -mt-4 text-dream-violet">Essence</span>
                                </>
                            )}
                        </h1>

                        <p className="text-text-muted text-xl font-light leading-relaxed max-w-lg mb-8">
                            {subtitle}
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <Link
                                href="/shop"
                                className="px-12 py-5 bg-text-main text-black rounded-[40px_10px_40px_10px] text-xs uppercase tracking-[0.2em] font-bold hover:bg-dream-violet transition-all duration-700 shadow-2xl shadow-text-main/20"
                            >
                                Shop Dream
                            </Link>
                            <Link
                                href="/new-arrivals"
                                className="px-12 py-5 glass-card text-text-main rounded-[40px_10px_40px_10px] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-700"
                            >
                                New arrivals
                            </Link>
                        </div>
                    </div>

                    {/* Right: Feature Image (Organic Mask) */}
                    <div className="relative order-1 lg:order-2 animate-fade-in [animation-delay:0.4s]">
                        <div className="relative aspect-square w-full max-w-xl mx-auto lg:ml-auto">
                            {/* Organic Mask Container */}
                            <div className="absolute inset-0 rounded-[100px_40px_120px_50px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-[12px] border-white/40">
                                <img
                                    src={image}
                                    alt="Scented Bloom"
                                    className="w-full h-full object-cover animate-slow-zoom"
                                />
                            </div>
                            
                            {/* Floating Glass Detail Card */}
                            <div className="absolute -bottom-10 -left-10 glass-card p-8 shadow-2xl animate-float max-w-[240px] hidden md:block">
                                <p className="mono-label text-[10px] mb-2 text-dream-violet">Crafted by</p>
                                <p className="font-serif text-lg leading-tight text-text-main">Maîtres Parfumeurs de Paris</p>
                                <div className="mt-4 w-12 h-[1px] bg-dream-violet/40" />
                            </div>

                            {/* Decorative Sphere */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dream-peach/40 rounded-full blur-xl animate-float [animation-delay:1s]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </section>
    );
}
