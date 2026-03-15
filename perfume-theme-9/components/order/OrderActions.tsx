"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Truck } from "lucide-react";

export default function OrderActions() {
    return (
        <div className="flex flex-col sm:row gap-6 justify-center max-w-xl mx-auto mt-12 relative z-10">
            <button className="flex-1 glass-card border-white/10 text-text-main py-6 px-10 text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-white/5 hover:border-dream-violet transition-all duration-700 flex items-center justify-center gap-3 rounded-[20px_5px_20px_5px] group shadow-2xl backdrop-blur-xl">
                <Truck className="w-4 h-4 text-dream-violet group-hover:-translate-y-1 transition-transform duration-500" /> 
                Track <span className="opacity-30">Ritual</span>
            </button>

            <Link
                href="/shop"
                className="flex-1 bg-white text-black py-6 px-10 text-[11px] uppercase font-bold tracking-[0.5em] hover:bg-dream-violet transition-all duration-700 flex items-center justify-center gap-3 rounded-[35px_5px_35px_5px] shadow-[0_20px_40px_rgba(255,255,255,0.1)] group/shop"
            >
                <ShoppingBag className="w-4 h-4 group-hover/shop:scale-110 transition-transform duration-500" /> 
                New <span className="font-serif italic not-uppercase tracking-normal opacity-60 lowercase">expedition</span>
            </Link>
        </div>
    );
}
