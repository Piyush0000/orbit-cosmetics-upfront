"use client";

import Image from "next/image";
import { Star, ShoppingBag, Heart, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/data";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
    onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
    const { addToCart } = useCart();
    return (
        <div className="glass-card group flex flex-col h-full overflow-hidden border-white/5 rounded-[40px_10px_40px_10px] relative shadow-2xl backdrop-blur-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-dream-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Image Area */}
            <div className="relative aspect-[4/5] glass-panel border-none overflow-hidden cursor-pointer group/image transition-all duration-700">
                <Link href={`/shop/${product.slug}`} className="block h-full w-full relative">
                    {/* Main Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-6 transition-all duration-1000 group-hover/image:scale-110 group-hover/image:rotate-2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </Link>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {product.tag && (
                        <span className="glass-panel border-white/10 bg-white/10 text-text-main text-[9px] font-bold px-4 py-2 rounded-full shadow-xl backdrop-blur-xl uppercase tracking-widest">
                            {product.tag}
                        </span>
                    )}
                </div>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-24 group-hover:translate-y-0 transition-transform duration-700 ease-out z-20">
                    <button
                        onClick={() => onQuickView?.(product)}
                        className="flex-1 glass-card border-white/10 text-white py-3.5 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl backdrop-blur-2xl"
                    >
                        <span className="flex items-center justify-center gap-2"><Eye className="w-3.5 h-3.5" /> Details</span>
                    </button>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-3.5 bg-white text-black hover:bg-dream-violet transition-all rounded-[15px_5px_15px_5px] shadow-2xl group/btn"
                    >
                        <ShoppingBag className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-center relative z-10">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-dream-violet mb-3 opacity-60">{product.brand}</p>
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-serif text-2xl text-text-main hover:text-dream-violet transition-colors line-clamp-1 mb-2 leading-tight italic tracking-tight">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-center gap-1.5 mb-5 opacity-40">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-2.5 h-2.5", i < Math.floor(product.rating) ? "text-dream-violet fill-dream-violet" : "text-text-muted")}
                        />
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-center gap-4">
                    {product.mrp > product.price ? (
                        <>
                            <p className="text-xl font-serif italic text-text-main tracking-tight">₹{product.price.toLocaleString()}</p>
                            <p className="text-xs text-text-muted line-through opacity-30 font-bold uppercase tracking-widest">₹{product.mrp.toLocaleString()}</p>
                        </>
                    ) : (
                        <p className="font-serif text-2xl text-text-main tracking-tighter italic shadow-dream-violet/20">₹{product.price.toLocaleString()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
