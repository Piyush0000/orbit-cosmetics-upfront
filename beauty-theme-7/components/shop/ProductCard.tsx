"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
    };

    return (
        <Link href={`/shop/${product.id}`} className="group">
            <Card className="border border-primary/10 shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 overflow-hidden bg-card h-full flex flex-col p-0 gap-0 rounded-xl hover:-translate-y-2 group/card">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {product.tags.includes("Bestseller") && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-none rounded-full px-3 py-1 text-xs shadow-md shadow-primary/20">
                            Bestseller
                        </Badge>
                    )}

                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <Button size="icon" variant="secondary" className="rounded-full h-9 w-9 bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg border-0">
                            <Heart className="w-4 h-4 text-accent" />
                        </Button>
                    </div>

                    <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                        {product.skinType.slice(0, 2).map((type) => (
                            <Badge key={type} variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs font-normal border-0 rounded-full px-2.5 py-0.5 shadow-sm">
                                {type}
                            </Badge>
                        ))}
                    </div>
                </div>

                <CardContent className="pt-5 px-5 pb-2 flex-grow">
                    <div className="flex justify-between items-start mb-1.5">
                        <div className="text-[11px] text-muted-foreground uppercase tracking-[0.18em] font-medium">{product.category}</div>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {product.rating} <span className="text-muted-foreground/50">({product.reviews})</span>
                        </div>
                    </div>

                    <h3 className="font-serif text-xl font-medium leading-snug mb-3 group-hover:text-primary transition-colors tracking-tight">
                        {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                        {product.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] bg-primary/6 text-primary px-2.5 py-0.5 rounded-full font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="px-5 pb-5 pt-0 flex justify-between items-center">
                    <span className="font-bold text-lg text-accent">₹{product.price.toLocaleString("en-IN")}</span>
                    <Button
                        size="sm"
                        variant="outline"
                        className="rounded-none px-6 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-bold uppercase text-[10px] tracking-widest hover:shadow-lg hover:shadow-primary/10"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
