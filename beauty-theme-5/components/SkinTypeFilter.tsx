"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const concerns = [
    "Dry Skin", "Oily Skin", "Acne Care", "Anti-Aging", "Sensitive Skin"
];

const allProducts = [
    { id: 1, name: "Hydra-Boost Gel", concern: "Dry Skin", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Oil Control Toner", concern: "Oily Skin", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Clear Skin Spot Treatment", concern: "Acne Care", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Youthful Glow Serum", concern: "Anti-Aging", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Calming Chamomile Cream", concern: "Sensitive Skin", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=400" },
];

export function SkinTypeFilter() {
    const [activeConcern, setActiveConcern] = useState(concerns[0]);

    const filteredProducts = allProducts.filter(p => p.concern === activeConcern);

    return (
        <section className="py-14 sm:py-20 px-4 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    {/* Left sidebar / top on mobile */}
                    <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground mb-2">
                                Shop by Concern
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Tailored solutions for your skin needs.
                            </p>
                        </div>

                        {/* Horizontal scroll tabs on mobile, vertical on desktop */}
                        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                            {concerns.map((concern) => (
                                <button
                                    key={concern}
                                    onClick={() => setActiveConcern(concern)}
                                    className={`text-left px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeConcern === concern
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "bg-background hover:bg-primary/5 text-foreground border border-border/30 hover:border-primary/20"
                                        }`}
                                >
                                    {concern}
                                </button>
                            ))}
                        </div>

                        <Button variant="link" className="p-0 text-primary font-semibold gap-1 hidden lg:flex text-sm">
                            Browse all products <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Right: products */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            {filteredProducts.map((product) => (
                                <Card key={product.id} className="border border-border/40 shadow-none hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 p-0 gap-0 rounded-xl sm:rounded-3xl hover:-translate-y-1 overflow-hidden">
                                    <div className="aspect-square sm:aspect-[4/3] bg-muted rounded-t-xl sm:rounded-t-3xl overflow-hidden relative">
                                        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>
                                    <CardContent className="p-3 sm:p-5">
                                        <h4 className="font-serif font-semibold text-sm sm:text-lg line-clamp-1">{product.name}</h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 line-clamp-1">For {product.concern}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
