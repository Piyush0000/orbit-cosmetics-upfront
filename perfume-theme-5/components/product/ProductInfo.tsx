"use client";

import { useState } from "react";
import { Star, ShoppingBag, Truck, ShieldCheck, Gift } from "lucide-react";
import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.size);

    return (
        <div className="flex flex-col gap-8 animate-fade-in">
            {/* Header */}
            <div>
                <p className="text-[10px] text-rich-gold uppercase tracking-[0.3em] font-bold mb-3">{product.brand}</p>
                <h1 className="text-4xl lg:text-5xl font-serif text-pearl-100 mb-4 leading-tight">{product.name}</h1>

                <div className="flex items-center gap-6 mb-8">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("w-3.5 h-3.5", i < Math.floor(product.rating) ? "text-rich-gold fill-rich-gold/20" : "text-onyx-700")} />
                        ))}
                    </div>
                    <span className="text-[10px] text-onyx-400 uppercase tracking-[0.2em] font-bold border-b border-rich-gold/20 pb-0.5 hover:text-rich-gold transition-colors cursor-pointer">
                        {product.reviews} Grand Reviews
                    </span>
                </div>

                <div className="flex items-center gap-6 mb-8 bg-obsidian-900 p-6 border border-rich-gold/10 rounded-sm">
                    <span className="text-4xl font-serif text-pearl-100 tracking-wider">₹{product.price.toLocaleString()}</span>
                    {product.mrp > product.price && (
                        <span className="text-lg text-onyx-500 line-through tracking-widest font-light">₹{product.mrp.toLocaleString()}</span>
                    )}
                    {product.mrp > product.price && (
                        <span className="text-[10px] font-bold text-rich-gold uppercase tracking-[0.2em] bg-rich-gold/10 px-3 py-1.5 border border-rich-gold/20">
                            Exclusive Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                        </span>
                    )}
                </div>
            </div>

            {/* Description Short */}
            <p className="text-pearl-300 leading-relaxed font-light text-sm md:text-base opacity-90 italic border-l-2 border-rich-gold/30 pl-6 mb-2">
                "{product.description}"
            </p>

            {/* Selectors */}
            <div className="space-y-8 py-8 border-t border-b border-rich-gold/10">

                {/* Size */}
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-5 block">Select Volume</span>
                    <div className="flex flex-wrap gap-4">
                        {product.availableSizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={cn(
                                    "px-8 py-3 border text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500",
                                    selectedSize === size
                                        ? "border-rich-gold bg-rich-gold text-obsidian-950 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                                        : "border-rich-gold/20 text-pearl-300 hover:border-rich-gold hover:text-rich-gold bg-obsidian-900/50"
                                )}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-center gap-4 group/spec">
                        <div className="w-10 h-10 rounded-full bg-obsidian-800 border border-rich-gold/20 flex items-center justify-center group-hover/spec:border-rich-gold transition-colors duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-rich-gold animate-pulse"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] text-onyx-400 uppercase tracking-widest font-bold mb-0.5">Longevity</span>
                            <span className="text-xs font-bold text-pearl-100 tracking-wider uppercase">{product.longevity}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group/spec">
                        <div className="w-10 h-10 rounded-full bg-obsidian-800 border border-rich-gold/20 flex items-center justify-center group-hover/spec:border-rich-gold transition-colors duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-rich-gold animate-pulse"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] text-onyx-400 uppercase tracking-widest font-bold mb-0.5">Sillage</span>
                            <span className="text-xs font-bold text-pearl-100 tracking-wider uppercase">{product.sillage}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-rich-gold/20 bg-obsidian-900 h-16">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                            className="w-12 h-full text-pearl-100 hover:bg-obsidian-800 transition-colors flex items-center justify-center text-xl font-light"
                        >
                            -
                        </button>
                        <span className="w-12 text-center font-bold text-pearl-100 tracking-wider">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)} 
                            className="w-12 h-full text-pearl-100 hover:bg-obsidian-800 transition-colors flex items-center justify-center text-xl font-light"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart */}
                    <button className="flex-grow h-16 bg-rich-gold text-obsidian-950 uppercase text-[11px] font-bold tracking-[0.25em] hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-rich-gold/10 group/cart">
                        <ShoppingBag className="w-4 h-4 transition-transform duration-500 group-hover/cart:scale-110" /> Add to Shopping Bag
                    </button>
                </div>
                <button className="w-full h-16 border border-rich-gold text-rich-gold uppercase text-[11px] font-bold tracking-[0.25em] hover:bg-rich-gold hover:text-obsidian-950 transition-all duration-500 bg-obsidian-950/50">
                    Acquire Now
                </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-rich-gold/5">
                <div className="flex flex-col items-center text-center gap-3 group/badge">
                    <div className="w-12 h-12 flex items-center justify-center bg-obsidian-900 rounded-full border border-rich-gold/10 group-hover/badge:border-rich-gold transition-all duration-500">
                        <ShieldCheck className="w-5 h-5 text-rich-gold opacity-60 group-hover/badge:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[9px] text-onyx-400 uppercase tracking-[0.2em] font-bold">100% Authentic</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group/badge">
                    <div className="w-12 h-12 flex items-center justify-center bg-obsidian-900 rounded-full border border-rich-gold/10 group-hover/badge:border-rich-gold transition-all duration-500">
                        <Truck className="w-5 h-5 text-rich-gold opacity-60 group-hover/badge:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[9px] text-onyx-400 uppercase tracking-[0.2em] font-bold">Luxury Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group/badge">
                    <div className="w-12 h-12 flex items-center justify-center bg-obsidian-900 rounded-full border border-rich-gold/10 group-hover/badge:border-rich-gold transition-all duration-500">
                        <Gift className="w-5 h-5 text-rich-gold opacity-60 group-hover/badge:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[9px] text-onyx-400 uppercase tracking-[0.2em] font-bold">Signature Box</span>
                </div>
            </div>
        </div>
    );
}
