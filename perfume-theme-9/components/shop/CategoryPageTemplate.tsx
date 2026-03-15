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
        <main className="min-h-screen bg-background overflow-hidden relative">
            <Header />

            <div className="relative py-24 md:py-32 overflow-hidden">
                {/* Background Ethereal Elements */}
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-dream-mint/20 blur-[130px] rounded-full animate-float" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-dream-peach/20 blur-[130px] rounded-full animate-float [animation-delay:2s]" />
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-5 py-2 glass-card border-none shadow-sm mb-6">
                        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-dream-violet">Collection • Discovery</span>
                    </div>
                    <h1 className="font-serif text-6xl md:text-[100px] font-medium mb-8 animate-fade-in text-text-main tracking-tighter leading-none italic">
                        {title.split(' ')[0]} <span className="not-italic opacity-40">{title.split(' ')[1] || ""}</span>
                    </h1>
                    {description && (
                        <p className="text-text-muted max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] md:text-xs animate-fade-in delay-100 font-bold">
                            {description}
                        </p>
                    )}
                    <div className="mt-10 w-24 h-[1px] bg-dream-violet/30 mx-auto" />
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-10 py-20 relative z-10">
                {products.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, index) => (
                            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                                <ProductCard
                                    product={product}
                                    onQuickView={setQuickViewProduct}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 glass-card max-w-xl mx-auto">
                        <h3 className="text-2xl font-serif text-text-main mb-4">No treasures found</h3>
                        <p className="text-text-muted text-xs uppercase tracking-widest">We couldn't find any products in this category matching your criteria.</p>
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
