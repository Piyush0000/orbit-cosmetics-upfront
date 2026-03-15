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
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible py-2 md:py-0">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={cn(
                            "relative w-24 h-24 flex-shrink-0 border transition-all duration-500 rounded-sm overflow-hidden",
                            selectedImage === idx ? "border-stone-900 opacity-100 scale-105" : "border-stone-100 opacity-60 hover:opacity-100"
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
            <div className="relative flex-grow aspect-[1/1] bg-stone-50 overflow-hidden group rounded-sm border border-stone-100">
                {images[selectedImage] && (
                    <Image
                        src={images[selectedImage]}
                        alt="Product Main View"
                        fill
                        className="object-contain p-12 transition-transform duration-1000 group-hover:scale-110 mix-blend-multiply"
                    />
                )}
                <div className="absolute inset-0 bg-sage-800/10 mix-blend-multiply opacity-10 pointer-events-none" />
            </div>
        </div>
    );
}
