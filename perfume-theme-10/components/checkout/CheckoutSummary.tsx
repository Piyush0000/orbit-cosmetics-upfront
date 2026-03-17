"use client";

import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
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
        <div className="glass-card p-10 rounded-[50px] h-fit sticky top-32 border-white/5 relative overflow-hidden group shadow-2xl backdrop-blur-3xl">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-dream-violet/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
            
            <h2 className="font-serif text-3xl text-text-main mb-10 pb-6 border-b border-white/5 italic tracking-tight relative z-10 leading-none">Order <span className="not-italic opacity-60">Selection</span></h2>

            {/* Mini Cart List */}
            <div className="space-y-6 mb-10 max-h-80 overflow-y-auto pr-4 custom-scrollbar relative z-10">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 group/item">
                        <div className="relative w-16 h-20 flex-shrink-0 glass-panel border-white/5 p-2 rounded-[20px] transition-transform duration-500 group-hover/item:scale-105">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain p-1"
                                sizes="64px"
                            />
                            <div className="absolute -top-2 -right-2 bg-dream-violet text-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg">
                                {item.quantity}
                            </div>
                        </div>
                        <div className="flex-1 py-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-main italic line-clamp-1">{item.name}</h4>
                            <p className="text-[8px] text-text-muted uppercase tracking-[0.2em] font-medium mt-1">{item.size}</p>
                            <p className="text-sm font-serif italic text-text-main mt-1.5">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/5 pt-8 space-y-6 mb-10 relative z-10">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">
                    <span>Aura Value</span>
                    <span className="text-text-main">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">
                    <span>Elite Delivery</span>
                    <span className={shipping === 0 ? "text-dream-violet font-black" : "text-text-main"}>
                        {shipping === 0 ? "COMPLIMENTARY" : `₹${shipping.toLocaleString()}`}
                    </span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-dream-peach">
                        <span>Sanctuary Benefit</span>
                        <span>-₹{discount.toLocaleString()}</span>
                    </div>
                )}
                
                <div className="flex justify-between items-center pt-8 border-t border-white/10 relative z-10">
                    <span className="font-serif text-3xl text-text-main italic tracking-tighter">Total</span>
                    <span className="font-serif text-3xl text-dream-violet font-bold tracking-tighter italic">₹{total.toLocaleString()}</span>
                </div>
            </div>

            <button
                onClick={onPlaceOrder}
                className="w-full bg-white text-black py-6 px-8 text-[11px] uppercase font-bold tracking-[0.5em] hover:bg-dream-violet transition-all duration-700 flex items-center justify-center gap-3 rounded-full shadow-2xl group/btn"
            >
                Confirm Order <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </button>

            <div className="mt-8 flex items-center justify-center gap-3 text-[8px] uppercase tracking-[0.3em] font-bold text-text-muted">
                <Lock className="w-3.5 h-3.5" />
                <span>SSL Encrypted Sanctuary</span>
            </div>
        </div>
    );
}
