import Image from "next/image";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        brand: string;
        price: number;
        rating: number;
        image: string;
        imageHover?: string;
        longevity: string;
        tag?: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
            {/* Badges */}
            <div className="absolute top-2 left-2 z-20 flex flex-col gap-2">
                {product.tag && (
                    <span className="bg-gold-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                        {product.tag}
                    </span>
                )}
                <span className="bg-black/80 text-white text-[10px] font-medium px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                    {product.longevity}
                </span>
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 z-20 p-2 bg-white/80 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
                <Heart className="w-4 h-4" />
            </button>

            {/* Image Area */}
            <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                {/* Main Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
                    style={{ backgroundImage: `url(${product.image})` }}
                />
                {/* Hover Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${product.imageHover || product.image})` }}
                />

                {/* Quick Add Button */}
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-xs uppercase font-bold tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-gold-600">
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
                <h3 className="font-serif text-lg text-gray-900 group-hover:text-gold-600 transition-colors mb-2 line-clamp-1">
                    {product.name}
                </h3>

                <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-gold-400 fill-gold-400" : "text-gray-300")}
                        />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                </div>

                <p className="font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
            </div>
        </div>
    );
}
