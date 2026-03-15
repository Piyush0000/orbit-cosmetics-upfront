"use client";

import { useState } from "react";
import { Star, ShoppingBag, Truck, ShieldCheck, Gift } from "lucide-react";
import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.size);
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-dream-violet mb-3">{product.brand}</h2>
                <h1 className="text-5xl md:text-6xl font-serif text-text-main mb-6 tracking-tighter leading-none italic">
                    {product.name.split(' ')[0]} <span className="not-italic opacity-40">{product.name.split(' ').slice(1).join(' ')}</span>
                </h1>

                <div className="flex items-center gap-6 mb-8">
                    <div className="flex text-dream-violet">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-current" : "opacity-20"}`} />
                        ))}
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-text-muted border-l border-white/10 pl-6">
                        {product.reviews} Verified Reviews
                    </span>
                </div>

                <div className="flex items-baseline gap-4 mb-10">
                    <span className="text-4xl font-serif text-text-main tracking-tighter italic">₹{product.price.toLocaleString()}</span>
                    {product.mrp > product.price && (
                        <span className="text-xl text-white/20 line-through font-light">₹{product.mrp.toLocaleString()}</span>
                    )}
                    {product.mrp > product.price && (
                        <div className="px-3 py-1 bg-dream-peach/10 rounded-full border border-dream-peach/20">
                            <span className="text-[9px] text-dream-peach font-bold uppercase tracking-widest">-{Math.round(((product.mrp - product.price) / product.mrp) * 100)}%</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Description Short */}
            <p className="text-text-muted leading-relaxed font-light text-xl italic serif opacity-80 border-l-2 border-dream-violet/30 pl-8 py-2">
                "{product.description}"
            </p>

            {/* Selectors */}
            <div className="space-y-10 border-y border-white/5 py-10">
                {/* Size */}
                <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-main mb-6 block">Choose Volume</span>
                    <div className="flex flex-wrap gap-4">
                        {product.availableSizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={cn(
                                    "px-10 py-4 text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 rounded-[20px_5px_20px_5px] border",
                                    selectedSize === size
                                        ? "bg-dream-violet text-black border-dream-violet shadow-[0_10px_20px_-5px_rgba(183,143,115,0.4)]"
                                        : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                                )}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-10 pt-4">
                    <div className="flex items-center gap-5 group">
                        <div className="w-12 h-12 rounded-[15px_5px_15px_5px] glass-card flex items-center justify-center text-dream-violet group-hover:bg-dream-violet group-hover:text-black transition-all duration-700">
                            <Truck className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-[0.2em] text-text-muted mb-1 font-bold">Longevity</span>
                            <span className="text-sm font-serif text-text-main tracking-widest">{product.longevity}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 group">
                        <div className="w-12 h-12 rounded-[15px_5px_15px_5px] glass-card flex items-center justify-center text-dream-violet group-hover:bg-dream-violet group-hover:text-black transition-all duration-700">
                            <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-[0.2em] text-text-muted mb-1 font-bold">Sillage</span>
                            <span className="text-sm font-serif text-text-main tracking-widest">{product.sillage}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-5 pt-6">
                <div className="flex gap-5">
                    {/* Quantity */}
                    <div className="flex items-center glass-card border-white/10 rounded-[25px_5px_25px_5px] overflow-hidden">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-8 py-5 hover:bg-white/5 transition-colors text-white/40 font-light text-xl">-</button>
                        <span className="px-4 text-xs font-bold text-text-main w-8 text-center">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="px-8 py-5 hover:bg-white/5 transition-colors text-white/40 font-light text-xl">+</button>
                    </div>

                    {/* Add to Cart */}
                    <button 
                        onClick={() => addToCart(product, quantity)}
                        className="flex-grow bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-dream-violet transition-all duration-700 flex items-center justify-center gap-4 rounded-[40px_10px_40px_10px] shadow-2xl"
                    >
                        <ShoppingBag className="w-4 h-4" /> Add To Aura
                    </button>
                </div>
                <button className="w-full glass-card border-dream-violet/30 text-dream-violet py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-dream-violet hover:text-black transition-all duration-700 rounded-[25px_5px_25px_5px]">
                    Reserve Signature Experience
                </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/5 mt-6">
                <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/20 group-hover:text-dream-violet transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-text-muted font-bold">Authentic</span>
                </div>
                <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/20 group-hover:text-dream-violet transition-colors">
                        <Truck className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-text-muted font-bold">Express</span>
                </div>
                <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/20 group-hover:text-dream-violet transition-colors">
                        <Gift className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-text-muted font-bold">Elite Gift Box</span>
                </div>
            </div>
        </div>
    );
}
