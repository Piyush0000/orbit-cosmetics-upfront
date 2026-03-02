"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Dummy Data
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
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 font-serif text-foreground">
                    Shop by Concern
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Whatever your skin needs, we have a botanical solution crafted just for you.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {concerns.map((concern) => (
                        <Button
                            key={concern}
                            variant={activeConcern === concern ? "default" : "outline"}
                            onClick={() => setActiveConcern(concern)}
                            className={`rounded-full px-6 transition-all duration-300 ${activeConcern === concern
                                ? "shadow-md shadow-primary/20 scale-105"
                                : "hover:bg-primary/5 border-border/50 hover:border-primary/30 hover:text-primary"
                                }`}
                        >
                            {concern}
                        </Button>
                    ))}
                </div>

                {/* Product Display Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {/* Featured Large Card for the Concern */}
                    <div className="lg:col-span-1 h-full min-h-[300px] bg-gradient-to-br from-primary/8 to-accent/5 rounded-2xl p-8 flex flex-col justify-center items-start border border-primary/10">
                        <h3 className="text-2xl font-bold font-serif mb-4">{activeConcern}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Targeted botanical solutions to help you achieve balance and radiance.
                        </p>
                        <Button variant="link" className="p-0 text-primary font-semibold">
                            Browse all {activeConcern} products &rarr;
                        </Button>
                    </div>

                    {/* Filtered Products */}
                    {filteredProducts.map((product) => (
                        <Card key={product.id} className="border border-border/50 shadow-none hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 p-0 gap-0 rounded-2xl hover:-translate-y-1">
                            <div className="aspect-square bg-muted rounded-t-2xl overflow-hidden relative">
                                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                            <CardContent className="p-5">
                                <h4 className="font-serif font-semibold text-lg">{product.name}</h4>
                                <p className="text-sm text-muted-foreground mt-1">Perfect for {product.concern}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
