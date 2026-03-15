"use client";

import { useState } from "react";
import { Star, ShoppingBag, Truck, ShieldCheck, Gift } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.size);

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
                <h2 className="mono-label text-sage-600 mb-2">{product.brand}</h2>
                <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">{product.name}</h1>

                <div className="flex items-center gap-6 mb-6">
                    <div className="flex text-clay-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-current" : "text-stone-200"}`} />
                        ))}
                    </div>
                    <span className="mono-label text-[10px] text-stone-400 border-l border-stone-200 pl-6 cursor-pointer hover:text-stone-900 transition-colors">
                        {product.reviews} Reviews
                    </span>
                </div>

                <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-3xl font-light text-stone-900 tracking-tight">₹{product.price.toLocaleString()}</span>
                    {product.mrp > product.price && (
                        <span className="text-lg text-stone-300 line-through font-light">₹{product.mrp.toLocaleString()}</span>
                    )}
                    {product.mrp > product.price && (
                        <span className="mono-label text-[10px] text-clay-600 font-bold">Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%</span>
                    )}
                </div>
            </div>

            {/* Description Short */}
            <p className="text-stone-900/70 leading-relaxed font-light text-lg italic serif">
                "{product.description}"
            </p>

            {/* Selectors */}
            <div className="space-y-8 border-y border-stone-100 py-8">
                {/* Size */}
                <div>
                    <span className="mono-label text-stone-900 mb-4 block">Volume</span>
                    <div className="flex flex-wrap gap-4">
                        {product.availableSizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-8 py-3 mono-label text-[11px] transition-all border ${selectedSize === size
                                    ? "bg-stone-900 text-white border-stone-900 shadow-lg"
                                    : "border-stone-200 text-stone-400 hover:border-stone-900 hover:text-stone-900"
                                    } rounded-sm`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-8 pt-4">
                    <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2"></div>
                        <div className="flex flex-col">
                            <span className="mono-label text-[9px] text-stone-400 mb-1">Longevity</span>
                            <span className="text-md font-serif text-stone-900 tracking-widest">{product.longevity}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2"></div>
                        <div className="flex flex-col">
                            <span className="mono-label text-[9px] text-stone-400 mb-1">Sillage</span>
                            <span className="text-md font-serif text-stone-900 tracking-widest">{product.sillage}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-stone-200 rounded-sm">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-6 py-4 hover:bg-stone-50 transition-colors text-stone-400 font-light">-</button>
                        <span className="px-6 mono-label text-stone-900">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="px-6 py-4 hover:bg-stone-50 transition-colors text-stone-400 font-light">+</button>
                    </div>

                    {/* Add to Cart */}
                    <button className="flex-grow bg-stone-900 text-white mono-label text-[12px] font-bold hover:bg-sage-600 transition-all duration-500 flex items-center justify-center gap-3 rounded-sm">
                        <ShoppingBag className="w-4 h-4" /> Add To Cart
                    </button>
                </div>
                <button className="w-full border border-stone-900 text-stone-900 py-4 mono-label text-[12px] font-bold hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-sm">
                    Express Checkout
                </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-stone-50 mt-4">
                <div className="flex flex-col items-center text-center gap-3 group">
                    <ShieldCheck className="w-6 h-6 text-stone-300 group-hover:text-sage-600 transition-colors" />
                    <span className="mono-label text-[8px] text-stone-400">Authentic</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                    <Truck className="w-6 h-6 text-stone-300 group-hover:text-sage-600 transition-colors" />
                    <span className="mono-label text-[8px] text-stone-400">FedEx Express</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                    <Gift className="w-6 h-6 text-stone-300 group-hover:text-sage-600 transition-colors" />
                    <span className="mono-label text-[8px] text-stone-400">Gift Ready</span>
                </div>
            </div>
        </div>
    );
}
