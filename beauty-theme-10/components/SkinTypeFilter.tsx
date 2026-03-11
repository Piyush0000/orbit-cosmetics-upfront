"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf } from "lucide-react";

const concerns = [
    "Forest Dew", "Oil Balance", "Pure Petal", "Age Reset", "Calm Mist"
];

const allProducts = [
    { id: 1, name: "Veridian Dew Gel", concern: "Forest Dew", image: "/botanical_product_card_sage_1772727123457_png_1772728375907.png" },
    { id: 2, name: "Deep Sprout Balm", concern: "Forest Dew", image: "/botanical_toner_serene_1772727123459_png_1772728497990.png" },
    { id: 3, name: "Silk Root Cream", concern: "Forest Dew", image: "/botanical_face_oil_1772727123460_png_1772728517400.png" },
    { id: 4, name: "Leaf Control Toner", concern: "Oil Balance", image: "/botanical_moisturizer_jar_1772727123461_png_1772728532573.png" },
    { id: 5, name: "Matte Sage Serum", concern: "Oil Balance", image: "/botanical_product_card_sage_1772727123457_png_1772728375907.png" },
    { id: 6, name: "Pore Forest Mask", concern: "Oil Balance", image: "/botanical_avatar_portrait_1772727123458_png_1772728393190.png" },
];

export function SkinTypeFilter() {
    const [activeConcern, setActiveConcern] = useState(concerns[0]);

    const filteredProducts = allProducts.filter(p => p.concern === activeConcern);

    return (
        <section className="py-32 px-6 bg-primary/5">
            <div className="max-w-7xl mx-auto">
                {/* Header + horizontal pill tabs */}
                <div className="text-center mb-16 space-y-8">
                    <div className="flex flex-col items-center">
                        <div className="inline-flex items-center gap-2.5 py-1 px-4 rounded-full bg-primary/5 border border-primary/10 mb-6">
                            <Leaf className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">Targeted Rituals</span>
                        </div>
                        <h2 className="text-4xl sm:text-7xl font-serif text-foreground tracking-tight mb-6">
                            Rituals by <span className="italic font-light text-primary/80">Essence</span>
                        </h2>
                        <p className="text-muted-foreground/60 max-w-lg mx-auto text-sm font-medium leading-relaxed">
                            Bespoke botanical solutions harvested for your skin's unique nature.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {concerns.map((concern) => (
                            <button
                                key={concern}
                                onClick={() => setActiveConcern(concern)}
                                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all duration-500 whitespace-nowrap uppercase border ${activeConcern === concern
                                    ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105"
                                    : "bg-background hover:bg-primary/5 text-foreground/60 border-primary/10"
                                    }`}
                            >
                                {concern}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group">
                            <div className="aspect-[4/3] bg-secondary/20 rounded-[2rem] overflow-hidden relative botanical-glow border border-primary/5 mb-6 transition-all duration-700 group-hover:-translate-y-2 group-hover:rounded-[1.5rem]">
                                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-serif font-bold text-2xl text-foreground group-hover:text-primary transition-colors">{product.name}</h4>
                                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Designed for {product.concern}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="ghost" className="text-primary font-bold tracking-[0.2em] gap-3 text-[10px] hover:bg-primary/5 rounded-full px-10 h-14 border border-primary/5">
                        BROWSE ALL ESSENCES <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
