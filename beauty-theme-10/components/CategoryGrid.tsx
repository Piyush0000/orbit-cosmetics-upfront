"use client";

import { Leaf, Droplets, Sparkles, Sprout, Flower } from "lucide-react";
import { useRef } from "react";
import { useStoreContext } from "@/context/store-context";

const defaultCategories = [
    { name: "Dew Serums", icon: Droplets, color: "bg-primary/10", iconColor: "text-primary" },
    { name: "Night Sprout", icon: Sprout, color: "bg-secondary/20", iconColor: "text-primary/70" },
    { name: "Petal Dust", icon: Flower, color: "bg-accent/10", iconColor: "text-accent" },
    { name: "Mist Rituals", icon: Sparkles, color: "bg-primary/10", iconColor: "text-primary" },
    { name: "Forest Oil", icon: Leaf, color: "bg-secondary/20", iconColor: "text-primary/70" },
];

const iconMap: any = {
    Leaf,
    Droplets,
    Sparkles,
    Sprout,
    Flower
};

export function CategoryGrid() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const context = useStoreContext() as any;
    const customization = context?.customization;

    const categoryData = customization?.categorySection || {};
    const title = categoryData.title || "Artisan Harvests";
    const badgeText = categoryData.badgeText || "The Collection";
    const description = categoryData.description || "Curated by Botanical Intelligence";
    const categories = categoryData.categories || defaultCategories;

    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-2.5 py-1 px-4 rounded-full bg-primary/5 border border-primary/10 mb-6">
                        <Leaf className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">{badgeText}</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-serif text-foreground tracking-tight">
                        {title.split(' ').map((word: string, i: number, arr: string[]) => (
                            <span key={i}>
                                {i === arr.length - 1 ? <span className="italic font-light text-primary/80">{word}</span> : word + ' '}
                            </span>
                        ))}
                    </h2>
                    <p className="text-muted-foreground/60 mt-6 text-sm uppercase tracking-[0.2em] font-bold">{description}</p>
                </div>

                <div ref={scrollRef} className="flex gap-12 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory justify-start md:justify-center" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {categories.map((cat: any) => {
                        const Icon = typeof cat.icon === 'string' ? (iconMap[cat.icon] || Leaf) : (cat.icon || Leaf);
                        return (
                            <div
                                key={cat.name}
                                className="group cursor-pointer flex flex-col items-center flex-shrink-0 snap-start"
                            >
                                <div className="relative mb-8">
                                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-background flex items-center justify-center border border-primary/10 transition-all duration-1000 group-hover:border-primary group-hover:scale-105 botanical-glow overflow-hidden">
                                        <div className={`absolute inset-0 opacity-10 ${cat.color || 'bg-primary/10'} group-hover:opacity-20 transition-opacity`} />
                                        <Icon className={`w-10 h-10 md:w-14 md:h-14 ${cat.iconColor || 'text-primary'} relative z-10 transition-transform duration-1000 group-hover:scale-110`} />
                                    </div>
                                    {/* Floating decorative petal */}
                                    <div className="absolute -top-4 -right-2 w-10 h-10 bg-primary/10 rounded-full blur-xl group-hover:animate-pulse" />
                                </div>
                                <span className="font-serif text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                    {cat.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
