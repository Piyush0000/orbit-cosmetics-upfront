"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const subtitle = customization?.heroSection?.subtitle || "Step into a world of sensory wonder. Our collection of premium fragrances is designed for those who seek the extraordinary.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop";
    
    return (
        <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-lavender-50">
            {/* Immersive Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pastel-purple/20 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-mint-100/30 rounded-full blur-[120px] animate-blob [animation-delay:2s]" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-peach-100/20 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-10 animate-slide-up text-center lg:text-left">
                    <div className="inline-block">
                        <span className="px-4 py-1.5 bg-white/40 backdrop-blur-md border border-white/60 rounded-full text-pastel-purple text-[10px] uppercase tracking-[0.3em] font-bold shadow-sm">
                            New Collection 2026
                        </span>
                    </div>

                    <div className="space-y-4">
                        {customization?.heroSection?.title ? (
                             <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-text-main font-light leading-[1.05] tracking-tight">
                                 {customization.heroSection.title}
                             </h1>
                        ) : (
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-text-main font-light leading-[1.05] tracking-tight">
                                Essence of <br />
                                <span className="text-pastel-purple italic font-normal">Pure Joy</span>
                            </h1>
                        )}
                        <p className="text-text-muted max-w-xl text-xl font-light leading-relaxed mx-auto lg:mx-0">
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
                        <Link
                            href="/shop"
                            className="px-10 py-5 bg-text-main text-white text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-pastel-purple transition-all duration-500 shadow-2xl shadow-text-main/10 rounded-full flex items-center justify-center group"
                        >
                            Explore Scents
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <Link
                            href="/bestsellers"
                            className="px-10 py-5 bg-white/40 backdrop-blur-md text-text-main border border-white/60 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-white/60 transition-all duration-500 rounded-full flex items-center justify-center"
                        >
                            Best Sellers
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-6 relative hidden lg:flex justify-center items-center h-[700px]">
                    {/* Artistic Image Display */}
                    <div className="relative w-[85%] h-[85%] animate-float">
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl z-0 transform rotate-3" />
                        <div className="absolute inset-4 bg-lavender-100/50 rounded-[2.5rem] overflow-hidden z-10 shadow-inner">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={image}
                                alt="Signature Fragrance"
                                className="w-full h-full object-cover object-center mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-110"
                            />
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl z-20 flex items-center justify-center p-6 animate-float [animation-delay:1s]">
                             <p className="text-[10px] text-pastel-purple font-bold uppercase tracking-widest text-center leading-relaxed">
                                 Long Lasting <br /> Signature Scents
                             </p>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-mint-100/40 backdrop-blur-xl rounded-full border border-white/60 shadow-xl z-20 flex items-center justify-center p-6 animate-float [animation-delay:2s]">
                             <div className="text-mint-600 font-serif text-3xl">✾</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 opacity-50">
                <div className="w-[1px] h-16 bg-gradient-to-b from-pastel-purple to-transparent" />
            </div>
        </section>
    );
}
