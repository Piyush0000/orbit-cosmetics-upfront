"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartItem as CartItemType } from "@/context/CartContext";


interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="flex gap-6 py-8 border-b border-rich-gold/5 last:border-0 hover:bg-obsidian-900/50 transition-all duration-500 p-4 group/item">
            {/* Image */}
            <div className="relative w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 bg-obsidian-950 border border-rich-gold/10 overflow-hidden group-hover/item:border-rich-gold/30 transition-colors">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2 mix-blend-luminosity brightness-110 grayscale-[0.3] group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-110"
                    sizes="112px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/20 to-transparent pointer-events-none" />
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="font-serif text-xl text-pearl-100 group-hover:text-rich-gold transition-colors duration-500 leading-tight mb-2">
                            {item.name}
                        </h3>
                        <p className="text-[10px] text-onyx-500 uppercase tracking-[0.2em] font-bold">
                            Volume: <span className="text-rich-gold/70">{item.size}</span>
                        </p>
                    </div>
                    <p className="font-serif text-lg text-pearl-100 tracking-wider">
                        ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                </div>

                <div className="flex justify-between items-end mt-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-rich-gold/20 bg-obsidian-950 h-10 overflow-hidden">
                        <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                            className="w-10 h-full flex items-center justify-center text-pearl-300 hover:text-rich-gold hover:bg-obsidian-900 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-xs font-bold text-pearl-100 tracking-widest">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-full flex items-center justify-center text-pearl-300 hover:text-rich-gold hover:bg-obsidian-900 transition-all"
                            aria-label="Increase quantity"
                        >
                            <Plus className="w-3 h-3" />
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-onyx-600 hover:text-rich-gold transition-all duration-300 flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] group/remove"
                    >
                        <Trash2 className="w-3.5 h-3.5 group-hover/remove:scale-110" />
                        <span className="hidden sm:inline">Relinquish</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
