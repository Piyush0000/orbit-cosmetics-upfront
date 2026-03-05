"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scissors, Palette, Heart, Flower2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const categories = [
    { name: "Skincare", icon: Sparkles, color: "bg-primary/5", iconColor: "text-primary" },
    { name: "Haircare", icon: Scissors, color: "bg-accent/10", iconColor: "text-accent" },
    { name: "Makeup", icon: Palette, color: "bg-primary/10", iconColor: "text-primary" },
    { name: "Hygiene", icon: Heart, color: "bg-accent/5", iconColor: "text-accent" },
    { name: "Fragrances", icon: Flower2, color: "bg-primary/5", iconColor: "text-primary" },
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
        <section className="py-16 px-4 bg-muted/20 border-y border-border/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
                            Shop by Category
                        </h2>
                        <p className="text-muted-foreground mt-1 text-sm">Browse our curated collections</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/25" onClick={() => scroll("left")}>
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/25" onClick={() => scroll("right")}>
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {categories.map((cat) => (
                        <Card
                            key={cat.name}
                            className="group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 border border-primary/5 bg-card hover:-translate-y-2 rounded-xl flex-shrink-0 w-[200px] snap-start overflow-hidden"
                        >
                            <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                                <div className={`p-5 rounded-2xl ${cat.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                                    <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                                </div>
                                <span className="font-medium text-sm tracking-wide group-hover:text-primary transition-colors whitespace-nowrap">
                                    {cat.name}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
