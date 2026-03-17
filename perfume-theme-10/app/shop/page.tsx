"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    };
 
     return (
         <div className="bg-background min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
 
                 {/* Header */}
                 <div className="text-center mb-16 space-y-4">
                     <p className="text-dream-violet uppercase tracking-[0.4em] text-xs font-bold animate-fade-in">Discover Your Scent</p>
                     <h1 className="text-5xl md:text-7xl font-serif text-text-main italic tracking-tighter leading-none">All <span className="not-italic opacity-60 font-light">Fragrances</span></h1>
                     <p className="text-text-muted max-w-2xl mx-auto font-light text-lg">
                         Explore our curated collection of luxury perfumes, crafted to evoke emotion and memory. Find your signature scent today.
                     </p>
                 </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block">
                        <FilterSidebar />
                    </div>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-8">
                        <button
                            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                            className="w-full flex items-center justify-between glass-card border-white/10 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.4em] text-text-main shadow-2xl backdrop-blur-xl rounded-[20px_5px_20px_5px]"
                        >
                            <span>Ritual Filters</span>
                            <Filter className="w-4 h-4 text-dream-violet" />
                        </button>

                        {/* Mobile Sidebar (Collapsible) */}
                        <AnimatePresence>
                            {isMobileFiltersOpen && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="mt-6 p-8 glass-card border-white/5 rounded-[25px_5px_25px_5px] overflow-hidden"
                                >
                                    <FilterSidebar />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        <ProductFilters />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onQuickView={handleQuickView}
                                />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-24 text-center">
                            <button className="glass-card border-black/10 text-text-main py-6 px-12 text-[11px] uppercase font-bold tracking-[0.5em] hover:border-dream-violet hover:text-dream-violet transition-all duration-700 rounded-[35px_5px_35px_5px] shadow-2xl group/btn overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dream-violet/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                Extend <span className="not-italic opacity-60 font-light lowercase font-serif px-2 italic">expedition</span>
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
