"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

export default function Hero() {
    const { customization } = useStoreContext() || {};

    const subtitle = customization?.heroSection?.subtitle || "Experience the essence of elegance with our meticulously curated collection of premium fragrances, crafted to linger in memory.";
    const image = customization?.heroSection?.image || "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop";
    
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-sand-50">
            {/* Background elegant texture or slight gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-sand-50 to-sand-100 opacity-80" />
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-rose-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-stone-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-slide-up max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                    <div className="inline-flex items-center space-x-2">
                        <span className="h-px w-8 bg-rose-gold"></span>
                        <p className="text-rose-gold tracking-[0.25em] text-xs uppercase font-medium">
                            Luxury Collection
                        </p>
                    </div>

                    {customization?.heroSection?.title ? (
                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 font-normal leading-[1.1] tracking-tight">
                             {customization.heroSection.title}
                         </h1>
                    ) : (
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 font-normal leading-[1.1] tracking-tight">
                            Discover Your <br />
                            <span className="italic text-stone-600 font-light">Signature Scent</span>
                        </h1>
                    )}

                    <p className="text-stone-600 max-w-xl text-lg font-light leading-relaxed mx-auto lg:mx-0">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                        <Link
                            href="/shop"
                            className="px-8 py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-rose-gold transition-all duration-500 shadow-xl shadow-stone-900/10 hover:shadow-rose-gold/20 flex items-center justify-center"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/bestsellers"
                            className="px-8 py-4 bg-transparent text-stone-900 border border-stone-300 text-xs uppercase tracking-[0.2em] hover:border-stone-900 transition-all duration-500 flex items-center justify-center"
                        >
                            View Best Sellers
                        </Link>
                    </div>
                </div>

                <div className="relative hidden lg:block h-[600px] w-full animate-fade-in group">
                     {/* Decorative Elements */}
                     <div className="absolute inset-0 bg-sand-200/50 rounded-t-full scale-[0.85] origin-bottom transition-transform duration-1000 group-hover:scale-[0.88]" />
                     <div className="absolute inset-y-8 inset-x-12 border border-stone-300/50 rounded-t-full z-20" />
                     
                     {/* Image Placeholder */}
                     <div className="absolute inset-x-8 bottom-0 top-16 bg-sand-100 overflow-hidden rounded-t-[10rem] shadow-2xl shadow-stone-900/5 z-10 flex items-center justify-center relative">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img
                             src={image}
                             alt="Luxury Perfume"
                             className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-sand-50/50 to-transparent pointer-events-none" />
                     </div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
                <span className="h-16 w-px bg-gradient-to-b from-stone-400 to-transparent"></span>
            </div>
        </section>
    );
}
