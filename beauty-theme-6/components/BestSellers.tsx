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
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
                    <div>
                        <Badge variant="outline" className="mb-3 px-4 py-1 border-primary/30 text-primary text-xs uppercase tracking-[0.25em] font-semibold rounded-full bg-primary/5">
                            ✨ Customer Favorites
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-foreground">
                            Best Sellers
                        </h2>
                    </div>
                    <Link href="/shop">
                        <Button variant="ghost" className="text-primary hover:bg-primary/5 rounded-full gap-2 font-medium text-sm">
                            View All <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                {/* Uniform 4-column grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product, idx) => (
                        <Card key={product.id} className="group overflow-hidden border border-border/40 shadow-none hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 bg-card p-0 gap-0 rounded-2xl sm:rounded-3xl hover:-translate-y-1">
                            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                {idx === 0 && (
                                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-none rounded-full px-3 py-1 text-xs shadow-md shadow-primary/20">
                                        Bestseller
                                    </Badge>
                                )}
                                {/* Hover Add button */}
                                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <Button size="sm" className="w-full rounded-full gap-1.5 bg-white/90 backdrop-blur-sm text-foreground hover:bg-white border-none text-xs sm:text-sm shadow-lg">
                                        <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-3 sm:p-4 space-y-1">
                                <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-widest">{product.category}</p>
                                <h3 className="text-sm sm:text-base font-serif font-semibold group-hover:text-primary transition-colors line-clamp-1">
                                    {product.name}
                                </h3>
                                <p className="text-base sm:text-lg font-bold text-accent">{product.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
