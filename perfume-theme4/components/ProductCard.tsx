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
        <div className="group relative bg-white border border-sand-200 hover:border-rose-gold/30 hover:shadow-xl hover:shadow-rose-gold/5 transition-all duration-500 overflow-hidden flex flex-col h-full rounded-sm">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                {product.tag && (
                    <span className="bg-rose-gold text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                        {product.tag}
                    </span>
                )}
                <span className="bg-stone-900/80 text-white text-[9px] font-medium px-3 py-1.5 uppercase tracking-widest backdrop-blur-md shadow-sm">
                    {product.longevity}
                </span>
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-20 p-2.5 bg-white/90 rounded-full text-stone-400 hover:text-rose-gold hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm backdrop-blur-sm">
                <Heart className="w-4 h-4" />
            </button>

            {/* Image Area */}
            <div className="relative aspect-[4/5] bg-sand-50 overflow-hidden cursor-pointer group/image">
                <Link href={`/shop/${product.slug}`} className="block h-full w-full relative">
                    {/* Main Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-6 transition-opacity duration-700 group-hover/image:opacity-0 mix-blend-multiply"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    {/* Hover Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Image
                            src={product.imageHover || product.image}
                            alt={`${product.name} Hover`}
                            fill
                            className="object-contain p-6 absolute inset-0 opacity-0 transition-all duration-700 group-hover/image:opacity-100 scale-95 group-hover/image:scale-105 mix-blend-multiply"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </Link>

                {/* Quick Actions */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[1px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                    <button
                        onClick={() => onQuickView?.(product)}
                        className="w-full bg-white/95 backdrop-blur-sm text-stone-600 py-3.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-sand-100 hover:text-stone-900 transition-colors flex items-center justify-center gap-2 border-t border-sand-200/50"
                    >
                        <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-stone-900 text-white py-3.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-rose-gold transition-colors flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center gap-2"><ShoppingBag className="w-3.5 h-3.5" /> Add to Cart</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center flex flex-col flex-grow bg-white relative z-20">
                <p className="text-[9px] text-stone-500 uppercase tracking-[0.2em] mb-2">{product.brand}</p>
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-serif text-xl text-stone-900 group-hover:text-rose-gold transition-colors mb-3 line-clamp-2 leading-snug">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-rose-gold fill-rose-gold/20" : "text-stone-200")}
                        />
                    ))}
                    <span className="text-[10px] text-stone-400 ml-1.5 tracking-wider">({product.rating})</span>
                </div>

                <div className="mt-auto pt-2 border-t border-sand-100">
                    {product.mrp > product.price ? (
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-sm font-medium text-stone-900 tracking-wider">₹{product.price.toLocaleString()}</p>
                            <p className="text-[11px] text-stone-400 line-through tracking-wider">₹{product.mrp.toLocaleString()}</p>
                        </div>
                    ) : (
                        <p className="text-sm font-medium text-stone-900 tracking-wider">₹{product.price.toLocaleString()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
