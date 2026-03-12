"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CartSummaryProps {
    subtotal: number;
    shipping: number;
    discount: number;
    onCheckout: () => void;
}

export default function CartSummary({ subtotal, shipping, discount, onCheckout }: CartSummaryProps) {
    const total = subtotal + shipping - discount;

    return (
        <div className="bg-obsidian-900 p-8 lg:p-10 border border-rich-gold/20 shadow-2xl h-fit sticky top-32 backdrop-blur-xl relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rich-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-rich-gold/10 transition-all duration-700" />
            
            <h2 className="font-serif text-2xl text-pearl-100 mb-8 pb-6 border-b border-rich-gold/10 tracking-wide underline underline-offset-[12px] decoration-rich-gold/20">Investment Details</h2>
 
            <div className="space-y-6 text-[11px] uppercase tracking-[0.2em] font-bold">
                <div className="flex justify-between text-onyx-400">
                    <span className="group-hover:text-pearl-100 transition-colors">Subtotal</span>
                    <span className="text-pearl-100 tracking-wider">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-onyx-400">
                    <span className="group-hover:text-pearl-100 transition-colors">Luxury Delivery</span>
                    <span className={cn("tracking-wider", shipping === 0 ? "text-rich-gold" : "text-pearl-100")}>{shipping === 0 ? "Complimentary" : `₹${shipping.toLocaleString()}`}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-rich-gold/80">
                        <span>Signature Discount</span>
                        <span className="tracking-wider">-₹{discount.toLocaleString()}</span>
                    </div>
                )}
 
                <div className="pt-8 mt-8 border-t border-rich-gold/20 flex justify-between items-center font-serif text-2xl text-pearl-100 group-hover:text-rich-gold transition-colors duration-500">
                    <span className="tracking-wide">Total Value</span>
                    <span className="tracking-widest">₹{total.toLocaleString()}</span>
                </div>
            </div>
 
            <p className="text-[9px] text-onyx-500 mt-8 mb-10 italic opacity-60">
                Final delivery valuations & insurance inclusive at checkout.
            </p>
 
            <div className="space-y-4">
                <button
                    onClick={onCheckout}
                    className="w-full bg-rich-gold text-obsidian-950 h-16 uppercase text-[11px] font-bold tracking-[0.3em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-rich-gold/5 active:scale-[0.98] group/btn"
                >
                    Secure Acquisition <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
                </button>
 
                <Link
                    href="/shop"
                    className="w-full bg-obsidian-950 border border-rich-gold/30 text-pearl-100 h-16 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-obsidian-800 hover:text-rich-gold hover:border-rich-gold transition-all duration-500 flex items-center justify-center gap-3"
                >
                    <ShoppingBag className="w-4 h-4" /> Continue Exploring
                </Link>
            </div>
        </div>
    );
}
