"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 custom-scrollbar pr-2">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={cn(
                            "relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 border-2 transition-all duration-500 overflow-hidden group/thumb",
                            selectedImage === idx 
                                ? "border-rich-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-rich-gold/50 ring-offset-2 ring-offset-obsidian-950" 
                                : "border-rich-gold/10 hover:border-rich-gold/40 opacity-50 hover:opacity-100"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`View ${idx + 1}`}
                            fill
                            className="object-contain p-3 mix-blend-luminosity grayscale-[0.5] group-hover/thumb:grayscale-0 transition-all duration-500 group-hover/thumb:scale-110"
                        />
                        <div className={cn(
                            "absolute inset-0 bg-rich-gold/10 transition-opacity duration-500",
                            selectedImage === idx ? "opacity-0" : "opacity-0 group-hover/thumb:opacity-20"
                        )} />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-grow aspect-square md:aspect-auto bg-obsidian-900 border border-rich-gold/10 overflow-hidden shadow-2xl flex items-center justify-center p-12 lg:p-16 group">
                {/* Decorative gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-rich-gold/5 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-rich-gold/5 rounded-full blur-[80px] pointer-events-none" />
                
                {images[selectedImage] && (
                    <div className="relative w-full h-full transform transition-transform duration-1000 group-hover:scale-[1.03]">
                        <Image
                            src={images[selectedImage]}
                            alt="Product Main View"
                            fill
                            className="object-contain mix-blend-luminosity brightness-110 drop-shadow-[0_0_50px_rgba(212,175,55,0.08)]"
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
