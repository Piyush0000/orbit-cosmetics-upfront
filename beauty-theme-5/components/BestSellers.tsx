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

                {/* Mobile: vertical stack / Desktop: masonry */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {/* Featured large card */}
                    <Card className="group overflow-hidden border border-border/40 shadow-none hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500 bg-card p-0 gap-0 rounded-2xl sm:rounded-3xl lg:row-span-2">
                        <div className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden bg-muted min-h-[250px]">
                            <Image
                                src={products[0].image}
                                alt={products[0].name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground border-none rounded-full px-3 py-1 text-xs shadow-md shadow-primary/20">
                                Bestseller
                            </Badge>
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                                <p className="text-[10px] sm:text-xs uppercase tracking-widest mb-1 text-white/70">{products[0].category}</p>
                                <h3 className="text-lg sm:text-2xl font-serif font-bold mb-2">{products[0].name}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg sm:text-xl font-bold">{products[0].price}</span>
                                    <Button size="sm" className="rounded-full gap-1.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 text-xs sm:text-sm">
                                        <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" /> Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Remaining cards: stack on mobile, horizontal on tablet+ */}
                    {products.slice(1).map((product) => (
                        <Card key={product.id} className="group overflow-hidden border border-border/40 shadow-none hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 bg-card p-0 gap-0 rounded-2xl sm:rounded-3xl flex flex-row h-[140px] sm:h-[180px] md:h-[200px]">
                            <div className="relative w-[120px] sm:w-[160px] md:w-[180px] flex-shrink-0 overflow-hidden bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <CardContent className="flex flex-col justify-center p-3 sm:p-4 md:p-5 flex-grow min-w-0">
                                <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
                                <h3 className="text-sm sm:text-base font-serif font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-base sm:text-lg font-bold text-accent mb-2 sm:mb-3">{product.price}</p>
                                <Button size="sm" variant="outline" className="rounded-full w-fit px-3 sm:px-4 text-[10px] sm:text-xs border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ShoppingBag className="w-3 h-3 mr-1" /> Add
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
