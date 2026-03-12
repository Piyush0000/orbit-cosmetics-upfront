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
        <div className="group relative bg-white border border-lavender-100 hover:border-pastel-purple/40 hover:shadow-2xl hover:shadow-lavender-200/20 transition-all duration-700 overflow-hidden flex flex-col h-full rounded-[2rem]">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                {product.tag && (
                    <span className="bg-pastel-purple text-white text-[9px] font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg rounded-full">
                        {product.tag}
                    </span>
                )}
                <span className="bg-text-main/80 text-white text-[9px] font-medium px-4 py-1.5 uppercase tracking-widest backdrop-blur-md shadow-lg rounded-full">
                    {product.longevity}
                </span>
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-4 right-4 z-20 p-3 bg-white/60 backdrop-blur-md rounded-full text-text-muted hover:text-pastel-purple hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-500 shadow-sm border border-white/80">
                <Heart className="w-4 h-4" />
            </button>

            {/* Image Area */}
            <div className="relative aspect-[4/5] bg-lavender-50 transition-colors duration-700 group-hover:bg-white overflow-hidden cursor-pointer group/image">
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
                        className="w-full bg-white/80 backdrop-blur-md text-text-muted py-4 text-[10px] uppercase font-bold tracking-[0.25em] hover:bg-lavender-50 hover:text-text-main transition-all flex items-center justify-center gap-2 border-t border-lavender-100"
                    >
                        <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-text-main text-white py-4 text-[10px] uppercase font-bold tracking-[0.25em] hover:bg-pastel-purple transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center gap-2"><ShoppingBag className="w-3.5 h-3.5" /> Add to Cart</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center flex flex-col flex-grow bg-white relative z-20">
                <p className="text-[9px] text-text-muted uppercase tracking-[0.3em] font-bold mb-3">{product.brand}</p>
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-serif text-2xl text-text-main group-hover:text-pastel-purple transition-colors mb-4 line-clamp-2 leading-tight">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-pastel-purple fill-pastel-purple/20" : "text-lavender-100")}
                        />
                    ))}
                    <span className="text-[10px] text-text-muted ml-2 tracking-widest font-bold">({product.rating})</span>
                </div>

                <div className="mt-auto pt-4 border-t border-lavender-50">
                    {product.mrp > product.price ? (
                        <div className="flex items-center justify-center gap-4">
                            <p className="text-base font-bold text-text-main tracking-widest">₹{product.price.toLocaleString()}</p>
                            <p className="text-[12px] text-text-muted line-through tracking-widest opacity-60">₹{product.mrp.toLocaleString()}</p>
                        </div>
                    ) : (
                        <p className="text-base font-bold text-text-main tracking-widest">₹{product.price.toLocaleString()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
