"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scissors, Palette, Heart, Flower2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const categories = [
    { name: "Skincare", icon: Sparkles, color: "bg-rose-50 dark:bg-rose-900/20", iconColor: "text-rose-500" },
    { name: "Haircare", icon: Scissors, color: "bg-orange-50 dark:bg-orange-900/20", iconColor: "text-orange-400" },
    { name: "Makeup", icon: Palette, color: "bg-pink-50 dark:bg-pink-900/20", iconColor: "text-pink-500" },
    { name: "Hygiene", icon: Heart, color: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-500" },
    { name: "Fragrances", icon: Flower2, color: "bg-red-50 dark:bg-red-900/20", iconColor: "text-red-400" },
];

export function CategoryGrid() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const amount = direction === "left" ? -280 : 280;
            scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">
                        Artisan Collections
                    </h2>
                    <div className="w-24 h-[1px] bg-primary animate-in zoom-in duration-1000" />
                    <p className="text-muted-foreground mt-4 text-sm uppercase tracking-[0.2em] font-medium font-sans">Curated by Formulation</p>
                </div>

                <div ref={scrollRef} className="flex gap-10 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory justify-start md:justify-center" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className="group cursor-pointer flex flex-col items-center flex-shrink-0 snap-start"
                        >
                            <div className="relative mb-6">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-background flex items-center justify-center border-2 border-primary/10 transition-all duration-700 group-hover:border-primary group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/10 overflow-hidden">
                                    <div className={`absolute inset-0 opacity-10 ${cat.color} group-hover:opacity-20 transition-opacity`} />
                                    <cat.icon className={`w-10 h-10 md:w-12 md:h-12 ${cat.iconColor} relative z-10 transition-transform duration-700 group-hover:scale-110`} />
                                </div>
                                {/* Floating decorative blob */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 rounded-full blur-xl group-hover:animate-pulse" />
                            </div>
                            <span className="font-serif text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
