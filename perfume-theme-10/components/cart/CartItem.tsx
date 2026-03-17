"use client";

import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartItem as CartItemType } from "@/context/CartContext";


interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="flex gap-6 p-6 glass-card border-white/5 hover:border-white/10 transition-all duration-700 rounded-[40px] group relative overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-dream-violet/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
            
            {/* Image */}
            <div className="relative w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0 glass-panel border-white/10 rounded-[24px] p-4 group-hover:shadow-[0_0_30px_rgba(212,163,115,0.1)] transition-all duration-1000">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2 transition-transform duration-[2s] group-hover:scale-110"
                        sizes="128px"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-dream-violet">
                        <ShoppingBag className="w-10 h-10" />
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="font-serif text-2xl text-text-main italic tracking-tight line-clamp-1">
                            {item.name}
                        </h3>
                        <p className="text-[9px] text-dream-violet mt-2 uppercase tracking-[0.4em] font-bold">
                            Volume • {item.size}
                        </p>
                    </div>
                    <p className="text-xl font-serif text-text-main whitespace-nowrap italic tracking-tighter">
                        ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-8">
                    {/* Quantity Selector */}
                    <div className="flex items-center glass-card border-black/10 rounded-full overflow-hidden bg-black/5">
                        <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                            className="p-3 text-black hover:text-dream-violet hover:bg-white/20 disabled:opacity-20 transition-all duration-500"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="w-4 h-4 stroke-[3]" />
                        </button>
                        <span className="w-10 text-center text-xs font-bold text-black">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-3 text-black hover:text-dream-violet hover:bg-white/20 transition-all duration-500"
                            aria-label="Increase quantity"
                        >
                            <Plus className="w-4 h-4 stroke-[3]" />
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-text-muted hover:text-dream-peach transition-all duration-500 flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] group/btn"
                    >
                        <Trash2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500" />
                        <span className="hidden sm:inline">Relinquish</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
