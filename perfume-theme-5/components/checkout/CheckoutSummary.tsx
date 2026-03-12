"use client";

import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data"; // Keep for now if needed, or better, loop through actual items

// Mock data mirrored from CartPage


interface CheckoutSummaryProps {
    onPlaceOrder: () => void;
}

export default function CheckoutSummary({ onPlaceOrder }: CheckoutSummaryProps) {
    const { cartItems, cartTotal } = useCart();

    const subtotal = cartTotal;
    const shipping = subtotal > 5000 ? 0 : 500;
    const discount = 0;
    const total = subtotal + shipping - discount;

    return (
        <div className="bg-obsidian-900 p-8 lg:p-10 border border-rich-gold/20 shadow-2xl h-fit sticky top-32 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rich-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-rich-gold/10 transition-all duration-700" />
            
            <h2 className="font-serif text-2xl text-pearl-100 mb-8 pb-6 border-b border-rich-gold/10 tracking-wide underline underline-offset-[12px] decoration-rich-gold/20">Investment Audit</h2>

            {/* Mini Cart List */}
            <div className="space-y-6 mb-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 group/item">
                        <div className="relative w-16 h-20 flex-shrink-0 bg-obsidian-950 border border-rich-gold/10 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain p-1 mix-blend-luminosity grayscale group-hover/item:grayscale-0 transition-all duration-700"
                                sizes="64px"
                            />
                            <div className="absolute -top-1 -right-1 bg-rich-gold text-obsidian-950 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg">
                                {item.quantity}
                            </div>
                        </div>
                        <div className="flex-1 py-1">
                            <h4 className="text-[11px] font-bold text-pearl-100 uppercase tracking-widest leading-tight group-hover/item:text-rich-gold transition-colors">{item.name}</h4>
                            <p className="text-[9px] text-onyx-500 uppercase tracking-[0.2em] mt-1 italic">{item.size}</p>
                            <p className="text-xs font-serif text-pearl-100 mt-2 tracking-wider">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-rich-gold/15 pt-6 space-y-5 mb-8 text-[10px] font-bold uppercase tracking-[0.2em]">
                <div className="flex justify-between text-onyx-400">
                    <span>Valuation</span>
                    <span className="text-pearl-100">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-onyx-400">
                    <span>Transit Insurance</span>
                    <span className={cn(shipping === 0 ? "text-rich-gold" : "text-pearl-100")}>{shipping === 0 ? "Complimentary" : `₹${shipping.toLocaleString()}`}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-rich-gold">
                        <span>Heritage Benefit</span>
                        <span>-₹{discount.toLocaleString()}</span>
                    </div>
                )}
                <div className="flex justify-between items-center font-serif text-2xl border-t border-rich-gold/20 pt-6 text-pearl-100 group-hover:text-rich-gold transition-colors duration-500">
                    <span className="tracking-wide text-lg">Acquisition Total</span>
                    <span className="tracking-widest">₹{total.toLocaleString()}</span>
                </div>
            </div>

            <button
                onClick={onPlaceOrder}
                className="w-full bg-rich-gold text-obsidian-950 h-16 uppercase text-[11px] font-bold tracking-[0.3em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-rich-gold/5 active:scale-[0.98] group/btn mb-6"
            >
                Confirm Acquisition <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[9px] text-onyx-600 uppercase tracking-[0.2em] font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                <Lock className="w-3 h-3 text-rich-gold" />
                <span>Obsidian Secured Transaction</span>
            </div>
        </div>
    );
}
