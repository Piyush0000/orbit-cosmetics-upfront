import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const products = [
    { id: 1, name: "Iridescent Glow Serum", price: "₹3,599", category: "Skincare", image: "/iridescent_serum_bottle_1772727040061.png" },
    { id: 2, name: "Prismatic Eye Cream", price: "₹2,299", category: "Skincare", image: "/ethereal_eye_cream_luxury_1772727097019.png" },
    { id: 3, name: "Holographic Lip Silk", price: "₹2,599", category: "Makeup", image: "/holographic_lipstick_minimalist_1772727113401.png" },
    { id: 4, name: "Morning Mist Illuminator", price: "₹4,299", category: "Skincare", image: "/mist_spray_ethereal_bright_1772727133043.png" },
];

export function BestSellers() {
    return (
        <section id="bestsellers" className="py-24 sm:py-32 px-6 bg-background/50 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 gap-8">
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-[10px] font-bold text-primary/60 tracking-[0.3em] uppercase">Refractive Essentials</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-foreground tracking-tight">
                            BEST <span className="text-gradient">SELLERS</span>
                        </h2>
                    </div>
                    <Link href="/shop" className="group">
                        <Button variant="ghost" className="text-[11px] font-bold tracking-widest text-primary hover:bg-primary/5 rounded-full gap-3 px-8 border border-primary/10">
                            VIEW CATALOG <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <div key={product.id} className="group relative">
                            {/* Card Background Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <Card className="relative overflow-hidden border-white/40 bg-white/60 backdrop-blur-xl shadow-2xl shadow-primary/5 rounded-[1.5rem] transition-all duration-700 group-hover:-translate-y-2 hover:border-primary/20">
                                <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-[1.2rem]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />

                                    {idx === 0 && (
                                        <div className="absolute top-4 left-4 py-1.5 px-4 bg-white/90 backdrop-blur-md text-primary text-[9px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                                            High Demand
                                        </div>
                                    )}

                                    {/* Add Button */}
                                    <div className="absolute bottom-4 inset-x-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Button className="w-full h-12 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40 text-[10px] font-bold tracking-wider hover:scale-105 active:scale-95">
                                            ADD TO BAG
                                        </Button>
                                    </div>
                                </div>
                                <CardContent className="p-6 pt-2 text-center">
                                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.25em] mb-1">{product.category}</p>
                                    <h3 className="text-lg font-serif font-bold text-foreground mb-3">{product.name}</h3>
                                    <p className="text-lg font-bold text-foreground/80">{product.price}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
