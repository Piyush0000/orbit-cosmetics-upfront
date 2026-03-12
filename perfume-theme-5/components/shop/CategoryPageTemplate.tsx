"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";
import { useState } from "react";
import QuickViewModal from "@/components/shop/QuickViewModal";

interface CategoryPageTemplateProps {
    title: string;
    description?: string;
    products: Product[];
}

export default function CategoryPageTemplate({ title, description, products }: CategoryPageTemplateProps) {
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    return (
        <main className="min-h-screen bg-obsidian-950">
            <Header />

            <div className="bg-obsidian-900 py-12 md:py-16 border-b border-rich-gold/10 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-rich-gold/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rich-gold/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />
                
                <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
                    <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 animate-fade-in text-pearl-100">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-pearl-300 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] md:text-xs animate-fade-in delay-100 font-medium">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20">
                {products.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {products.map((product, index) => (
                            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                <ProductCard
                                    product={product}
                                    onQuickView={setQuickViewProduct}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-rich-gold/10 rounded-sm bg-obsidian-900/50">
                        <h3 className="text-xl font-serif text-pearl-100 mb-2">No fragrances found</h3>
                        <p className="text-pearl-300 text-sm">We couldn't find any scents in this category matching your criteria.</p>
                    </div>
                )}
            </div>

            {quickViewProduct && (
                <QuickViewModal
                    product={quickViewProduct}
                    isOpen={!!quickViewProduct}
                    onClose={() => setQuickViewProduct(null)}
                />
            )}
        </main>
    );
}
