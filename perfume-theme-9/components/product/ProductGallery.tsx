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
        <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-5 overflow-x-auto md:overflow-visible py-2 md:py-0 scrollbar-hide">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={cn(
                            "relative w-24 h-24 flex-shrink-0 transition-all duration-700 rounded-[20px_5px_20px_5px] overflow-hidden border",
                            selectedImage === idx 
                                ? "border-dream-violet shadow-[0_0_30px_rgba(183,143,115,0.2)] scale-105" 
                                : "border-white/5 opacity-40 hover:opacity-100 hover:border-white/20"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`View ${idx + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image Area */}
            <div className="relative flex-grow aspect-square glass-card border-white/5 overflow-hidden group rounded-[40px_10px_40px_10px] shadow-2xl">
                {images[selectedImage] && (
                    <Image
                        src={images[selectedImage]}
                        alt="Product Main View"
                        fill
                        className="object-contain p-8 md:p-16 transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                )}
                {/* Protective Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dream-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>
        </div>
    );
}
