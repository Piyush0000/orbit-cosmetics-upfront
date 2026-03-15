"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface CartSummaryProps {
    subtotal: number;
    shipping: number;
    discount: number;
    onCheckout: () => void;
}

export default function CartSummary({ subtotal, shipping, discount, onCheckout }: CartSummaryProps) {
    const total = subtotal + shipping - discount;

    return (
        <div className="glass-card p-10 sm:p-12 rounded-[50px_10px_50px_10px] h-fit sticky top-32 border-white/5 relative overflow-hidden group shadow-2xl backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-dream-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <h2 className="font-serif text-3xl text-text-main mb-10 pb-6 border-b border-white/5 italic tracking-tight relative z-10 leading-none">Order <span className="not-italic opacity-30">Summary</span></h2>

            <div className="space-y-6 text-[11px] uppercase tracking-[0.3em] font-bold relative z-10">
                <div className="flex justify-between text-text-muted">
                    <span>Aura Value</span>
                    <span className="text-text-main">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                    <span>Elite Delivery</span>
                    <span className={shipping === 0 ? "text-dream-violet" : "text-text-main"}>
                        {shipping === 0 ? "COMPLIMENTARY" : `₹${shipping.toLocaleString()}`}
                    </span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-dream-peach">
                        <span>Sanctuary Benefit</span>
                        <span>-₹{discount.toLocaleString()}</span>
                    </div>
                )}

                <div className="pt-8 mt-8 border-t border-white/10 flex justify-between items-center relative z-10">
                    <span className="font-serif text-3xl text-text-main italic tracking-tighter">Total</span>
                    <span className="font-serif text-3xl text-dream-violet tracking-tighter italic shadow-dream-violet/20">₹{total.toLocaleString()}</span>
                </div>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mt-10 mb-10 leading-relaxed font-bold relative z-10 text-center">
                Ritual taxes confirmed at checkout
            </p>

            <div className="space-y-4 relative z-10">
                <button
                    onClick={onCheckout}
                    className="w-full bg-white text-black py-6 px-8 text-[11px] uppercase font-bold tracking-[0.5em] hover:bg-dream-violet transition-all duration-700 flex items-center justify-center gap-3 rounded-[35px_5px_35px_5px] shadow-2xl group/btn"
                >
                    Finalize Essence <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </button>

                <Link
                    href="/shop"
                    className="w-full glass-card border-white/10 text-white/30 py-5 px-8 text-[9px] uppercase font-bold tracking-[0.4em] hover:border-dream-violet hover:text-dream-violet transition-all duration-700 flex items-center justify-center gap-3 rounded-[20px_5px_20px_5px] bg-white/[0.02]"
                >
                    <ShoppingBag className="w-4 h-4" /> Continue Expedition
                </Link>
            </div>
        </div>
    );
}
