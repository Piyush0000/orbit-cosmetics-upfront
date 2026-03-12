"use client";

import { useState } from "react";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductFilters from "@/components/shop/ProductFilters";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/shop/QuickViewModal";
import { products, Product } from "@/lib/data";
import { Filter } from "lucide-react";

export default function ShopPage() {
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const handleQuickView = (product: Product) => {
        setSelectedProduct(product);
        setIsQuickViewOpen(true);
    };

    return (
        <div className="bg-obsidian-950 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-rich-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold">Discover Your Scent</p>
                    <h1 className="text-4xl md:text-5xl font-serif text-pearl-100">All Fragrances</h1>
                    <p className="text-pearl-300 max-w-2xl mx-auto font-light text-sm md:text-base opacity-80 uppercase tracking-widest leading-loose">
                        Explore our curated collection of luxury perfumes, crafted to evoke emotion and memory. Find your signature scent today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block">
                        <FilterSidebar />
                    </div>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-6">
                        <button
                            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                            className="w-full flex items-center justify-between border border-rich-gold/30 bg-obsidian-900 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-pearl-100 hover:border-rich-gold transition-colors"
                        >
                            <span>Filters</span>
                            <Filter className="w-4 h-4 text-rich-gold" />
                        </button>

                        {/* Mobile Sidebar (Collapsible) */}
                        {isMobileFiltersOpen && (
                            <div className="mt-4 p-6 border border-rich-gold/10 rounded-sm bg-obsidian-900/50 backdrop-blur-sm animate-fade-in">
                                <FilterSidebar />
                            </div>
                        )}
                    </div>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        <ProductFilters />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onQuickView={handleQuickView}
                                />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-20 text-center">
                            <button className="border-b border-rich-gold text-pearl-100 pb-1.5 uppercase text-[10px] font-bold tracking-[0.3em] hover:text-rich-gold transition-all duration-300">
                                Load More Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick View Modal */}
            <QuickViewModal
                product={selectedProduct}
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
            />
        </div>
    );
}
