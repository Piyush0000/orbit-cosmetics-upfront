"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const subtitle = customization?.heroSection?.subtitle || "Natural essences captured in their purest form. A collection inspired by the earth, for the modern soul.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop";
    
    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-stone-50 overflow-hidden">
            {/* Left Column: Typography */}
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-32 lg:py-0 z-10">
                <div className="max-w-xl space-y-12 animate-fade-in">
                    <div className="space-y-4">
                        <span className="mono-label text-sage-600 block">Editorial 2026</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter uppercase font-light">
                            {customization?.heroSection?.title ? customization.heroSection.title : (
                                <>
                                    Rooted in <br />
                                    <span className="text-clay-400 italic font-normal lowercase">Nature</span>
                                </>
                            )}
                        </h1>
                    </div>
                    
                    <p className="text-stone-900/60 text-lg font-light leading-relaxed max-w-md">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 pt-4">
                        <Link
                            href="/shop"
                            className="group flex items-center gap-4 text-stone-900"
                        >
                            <span className="mono-label text-[12px] font-bold border-b border-stone-900 pb-1">Shop Collection</span>
                            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column: Immersive Image with Arch Mask */}
            <div className="flex-1 relative min-h-[500px] lg:min-h-screen">
                <div className="absolute inset-0 bg-sage-100 transform origin-right animate-reveal" />
                <div className="absolute inset-0 lg:inset-20 z-10 overflow-hidden rounded-t-full lg:rounded-full bg-stone-200 shadow-2xl animate-fade-in [animation-delay:0.5s]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={image}
                        alt="Sage & Stone Perfume"
                        className="w-full h-full object-cover object-center animate-slow-zoom brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-sage-800/10 pointer-events-none" />
                </div>
                
                {/* Decorative Text */}
                <div className="absolute bottom-12 right-12 z-20 hidden lg:block text-sage-800/40">
                    <span className="mono-label rotate-90 origin-right inline-block">Scented Anthology</span>
                </div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] border border-stone-200 rounded-full pointer-events-none opacity-20" />
        </section>
    );
}
