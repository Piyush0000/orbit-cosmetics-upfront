import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
    { id: 1, name: "Luminous Glow Serum", price: "₹3,599", category: "Skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Velvet Matte Lipstick", price: "₹2,299", category: "Makeup", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Hydrating Rose Mist", price: "₹2,599", category: "Skincare", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Repairing Night Cream", price: "₹4,299", category: "Skincare", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500" },
];

export function BestSellers() {
    return (
        <section id="bestsellers" className="py-14 sm:py-20 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-6">
                    <div className="space-y-4">
                        <Badge variant="outline" className="px-5 py-1.5 border-accent/30 text-accent text-xs uppercase tracking-[0.3em] font-bold rounded-none bg-accent/5">
                            Curated Selection
                        </Badge>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium font-serif text-foreground tracking-tight">
                            The <span className="italic font-light text-primary">Essentials</span>
                        </h2>
                    </div>
                    <Link href="/shop" className="group flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest hover:text-accent transition-colors">
                        View Editorial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Uniform 4-column grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product, idx) => (
                        <Card key={product.id} className="group overflow-hidden border border-primary/5 shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 bg-card p-0 gap-0 rounded-xl hover:-translate-y-2">
                            <div className="relative aspect-[3/4] overflow-hidden bg-[oklch(0.95_0.02_160)]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />
                                {idx === 0 && (
                                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-none rounded-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                                        Iconic
                                    </Badge>
                                )}
                                {/* Hover Add button */}
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <Button size="sm" className="w-full rounded-none gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] font-bold uppercase tracking-[0.2em] py-6 shadow-2xl">
                                        <ShoppingBag className="w-4 h-4" /> Quick Add
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-5 space-y-2">
                                <p className="text-[10px] text-primary/60 uppercase tracking-[0.2em] font-medium">{product.category}</p>
                                <h3 className="text-base sm:text-lg font-serif font-medium group-hover:text-primary transition-colors line-clamp-1 tracking-tight">
                                    {product.name}
                                </h3>
                                <p className="text-lg font-bold text-accent italic">{product.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
