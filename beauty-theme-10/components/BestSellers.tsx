"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import { useStoreContext } from "@/context/store-context";

const defaultProducts = [
    { id: 1, name: "Veridian Dew Serum", price: "₹3,899", category: "Botanical Serum", image: "/botanical_product_card_sage_1772727123457_png_1772728375907.png" },
    { id: 2, name: "Forest Essence Toner", price: "₹2,499", category: "Herbal Mist", image: "/botanical_toner_serene_1772727123459_png_1772728497990.png" },
    { id: 3, name: "Sunset Petal Oil", price: "₹4,599", category: "Elixir", image: "/botanical_face_oil_1772727123460_png_1772728517400.png" },
    { id: 4, name: "Sage Silk Moisturizer", price: "₹3,299", category: "Recovery Cream", image: "/botanical_moisturizer_jar_1772727123461_png_1772728532573.png" },
];

export function BestSellers() {
    const context = useStoreContext() as any;
    const customization = context?.customization;

    const bestSellersData = customization?.bestSellersSection || {};
    const title = bestSellersData.title || "BEST SELLERS";
    const badgeText = bestSellersData.badgeText || "The Garden's Finest";
    const products = bestSellersData.products || defaultProducts;

    return (
        <section id="bestsellers" className="py-24 sm:py-32 px-6 bg-background/50 relative overflow-hidden">
            {/* Soft Botanical Underglow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2.5 py-1 px-4 rounded-full bg-primary/5 border border-primary/10">
                            <Leaf className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">{badgeText}</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-foreground tracking-tight">
                            {title.split(' ').map((word: string, i: number, arr: string[]) => (
                                <span key={i}>
                                    {i === 1 ? <span className="italic font-light text-primary/80">{word}</span> : word}
                                    {i < arr.length - 1 ? ' ' : ''}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <Link href="/shop" className="group">
                        <Button variant="ghost" className="text-[11px] font-bold tracking-[0.25em] text-primary hover:bg-primary/5 rounded-full gap-3 px-8 transition-all border border-primary/5">
                            VIEW COLLECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product: any, idx: number) => (
                        <div key={product.id} className="group flex flex-col items-center text-center">
                            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-secondary/20 botanical-glow border border-primary/5 mb-8 transition-all duration-700 hover:rounded-[1.5rem] hover:-translate-y-2">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {idx < 2 && (
                                    <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary border-none rounded-full px-4 py-1.5 text-[9px] font-bold tracking-widest shadow-lg">
                                        PURE POTENCY
                                    </Badge>
                                )}

                                {/* Hover Add to cart button */}
                                <div className="absolute bottom-6 inset-x-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <Button className="w-full h-12 rounded-full bg-primary text-white shadow-xl shadow-primary/30 text-[10px] font-bold tracking-widest hover:scale-105 active:scale-95">
                                        ADD TO RITUAL
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">{product.category}</p>
                                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-lg font-bold text-foreground/80">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
