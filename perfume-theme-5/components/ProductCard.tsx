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
        <div className="group relative bg-obsidian-900 border border-rich-gold/10 hover:border-rich-gold/30 hover:shadow-xl hover:shadow-rich-gold/5 transition-all duration-500 overflow-hidden flex flex-col h-full rounded-sm">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                {product.tag && (
                    <span className="bg-rich-gold text-obsidian-950 text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                        {product.tag}
                    </span>
                )}
                <span className="bg-obsidian-950/80 text-pearl-100 text-[9px] font-medium px-3 py-1.5 uppercase tracking-widest backdrop-blur-md shadow-sm border border-pearl-100/10">
                    {product.longevity}
                </span>
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-20 p-2.5 bg-obsidian-900/90 rounded-full text-onyx-400 hover:text-rich-gold hover:bg-obsidian-800 transition-all opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm backdrop-blur-sm border border-rich-gold/20">
                <Heart className="w-4 h-4" />
            </button>

            {/* Image Area */}
            <div className="relative aspect-[4/5] bg-obsidian-950 overflow-hidden cursor-pointer group/image">
                <Link href={`/shop/${product.slug}`} className="block h-full w-full relative">
                    {/* Main Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-6 transition-opacity duration-700 group-hover/image:opacity-0 mix-blend-luminosity brightness-90 grayscale-[0.3]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    {/* Hover Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Image
                            src={product.imageHover || product.image}
                            alt={`${product.name} Hover`}
                            fill
                            className="object-contain p-6 absolute inset-0 opacity-0 transition-all duration-700 group-hover/image:opacity-100 scale-95 group-hover/image:scale-105 mix-blend-luminosity brightness-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </Link>

                {/* Quick Actions */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[1px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                    <button
                        onClick={() => onQuickView?.(product)}
                        className="w-full bg-obsidian-900/95 backdrop-blur-sm text-pearl-300 py-3.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-obsidian-800 hover:text-pearl-100 transition-colors flex items-center justify-center gap-2 border-t border-rich-gold/20"
                    >
                        <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-rich-gold text-obsidian-950 py-3.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center gap-2"><ShoppingBag className="w-3.5 h-3.5" /> Add to Cart</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center flex flex-col flex-grow bg-obsidian-900 relative z-20">
                <p className="text-[9px] text-rich-gold uppercase tracking-[0.2em] mb-2">{product.brand}</p>
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-serif text-xl text-pearl-100 group-hover:text-rich-gold transition-colors mb-3 line-clamp-2 leading-snug">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-rich-gold fill-rich-gold/20" : "text-onyx-600")}
                        />
                    ))}
                    <span className="text-[10px] text-onyx-400 ml-1.5 tracking-wider">({product.rating})</span>
                </div>

                <div className="mt-auto pt-2 border-t border-rich-gold/10">
                    {product.mrp > product.price ? (
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-sm font-medium text-pearl-100 tracking-wider">₹{product.price.toLocaleString()}</p>
                            <p className="text-[11px] text-onyx-400 line-through tracking-wider">₹{product.mrp.toLocaleString()}</p>
                        </div>
                    ) : (
                        <p className="text-sm font-medium text-pearl-100 tracking-wider">₹{product.price.toLocaleString()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
