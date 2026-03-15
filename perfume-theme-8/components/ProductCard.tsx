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
        <div className="pastel-card group flex flex-col h-full overflow-hidden">
            {/* Image Area */}
            <div className="relative aspect-[4/5] bg-pastel-cream/30 overflow-hidden cursor-pointer group/image transition-all duration-700">
                <Link href={`/shop/${product.slug}`} className="block h-full w-full relative">
                    {/* Main Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-2 mix-blend-multiply"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    
                    {/* Soft Overlay */}
                    <div className="absolute inset-0 bg-pastel-violet/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
                </Link>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {product.tag && (
                        <span className="bg-pastel-rose text-text-main text-[9px] font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                            {product.tag}
                        </span>
                    )}
                </div>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <button
                        onClick={() => onQuickView?.(product)}
                        className="flex-1 bg-white/90 backdrop-blur-md text-text-main py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-pastel-pink transition-all rounded-xl shadow-lg"
                    >
                        <span className="flex items-center justify-center gap-2"><Eye className="w-3.5 h-3.5" /> View</span>
                    </button>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-3 bg-text-main text-white hover:bg-pastel-violet transition-all rounded-xl shadow-lg group/btn"
                    >
                        <ShoppingBag className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-pastel-violet mb-2">{product.brand}</p>
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-serif text-xl text-text-main hover:text-pastel-rose transition-colors line-clamp-1 mb-1">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-accent-gold fill-accent-gold" : "text-gray-200")}
                        />
                    ))}
                    <span className="text-[10px] text-text-muted ml-2 font-medium">({product.rating})</span>
                </div>

                <div className="mt-auto flex items-center justify-center gap-3">
                    {product.mrp > product.price ? (
                        <>
                            <p className="text-lg font-bold text-text-main">₹{product.price.toLocaleString()}</p>
                            <p className="text-sm text-text-muted line-through opacity-50">₹{product.mrp.toLocaleString()}</p>
                        </>
                    ) : (
                        <p className="text-lg font-bold text-text-main">₹{product.price.toLocaleString()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
