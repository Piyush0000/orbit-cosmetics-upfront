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
        <Link href={`/shop/${product.id}`} className="group block h-full">
            <Card className="border-none shadow-none bg-card h-full flex flex-col p-0 gap-0 rounded-[var(--radius)] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5">
                <div className="relative aspect-[3/4] p-4">
                    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-secondary/30">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        {product.tags.includes("Bestseller") && (
                            <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-primary border-none rounded-full px-4 py-1.5 text-[10px] uppercase font-medium tracking-widest z-10 shadow-sm">
                                Artisan_Choice
                            </Badge>
                        )}

                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                            <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-background/90 hover:bg-primary hover:text-primary-foreground backdrop-blur-md border-none shadow-md">
                                <Heart className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <CardContent className="pt-2 px-6 pb-2 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium font-sans">{product.category}</div>
                        <div className="flex items-center gap-1.5 text-accent text-[11px] font-medium">
                            <Star className="w-3 h-3 fill-current" />
                            {product.rating}
                        </div>
                    </div>

                    <h3 className="font-serif text-2xl font-light leading-snug mb-4 group-hover:text-primary transition-colors duration-500 line-clamp-2">
                        {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.skinType.slice(0, 1).map((type) => (
                            <Badge key={type} variant="secondary" className="bg-secondary/50 text-muted-foreground text-[9px] font-sans uppercase tracking-widest border-none rounded-full px-3 py-1">
                                {type}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="px-6 pb-8 pt-0 flex justify-between items-center">
                    <span className="font-serif text-xl font-medium text-foreground italic">₹{product.price.toLocaleString("en-IN")}</span>
                    <Button
                        size="sm"
                        className="rounded-full px-6 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 border-none shadow-none"
                        onClick={handleAddToCart}
                    >
                        Acquire
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
