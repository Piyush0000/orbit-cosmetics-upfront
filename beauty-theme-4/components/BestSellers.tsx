import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

// Dummy Data
const products = [
    { id: 1, name: "Luminous Glow Serum", price: "₹3,599", category: "Skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Velvet Matte Lipstick", price: "₹2,299", category: "Makeup", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Hydrating Rose Mist", price: "₹2,599", category: "Skincare", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Repairing Night Cream", price: "₹4,299", category: "Skincare", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500" },
];

export function BestSellers() {
    return (
        <section id="bestsellers" className="py-20 px-4 bg-muted/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <Badge variant="outline" className="mb-4 px-5 py-1.5 border-primary/40 text-primary text-xs uppercase tracking-[0.2em] font-medium rounded-full">
                        Customer Favorites
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground">
                        Best Sellers
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="group overflow-hidden border border-border/50 shadow-none hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-card p-0 gap-0 rounded-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-none backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                                    Bestseller
                                </Badge>
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                    <Button className="w-full gap-2 shadow-lg rounded-xl bg-primary hover:bg-primary/90" size="lg">
                                        <ShoppingBag className="w-4 h-4" /> Add to Cart
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="pt-5 pb-6 px-5">
                                <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">{product.category}</p>
                                <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                    {product.name}
                                </h3>
                                <p className="text-xl font-bold text-accent">{product.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <Link href="/shop">
                        <Button variant="outline" size="lg" className="min-w-[200px] rounded-full border-primary/30 text-primary hover:bg-primary/5">
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
