import ProductCard from "./ProductCard";

import { products } from "@/lib/data";

const PRODUCTS = products.slice(0, 4);

export default function BestSellers() {
    return (
        <section className="py-24 px-6 md:px-10 bg-obsidian-950 border-t border-rich-gold/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rich-gold/20 to-transparent" />
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-4 bg-rich-gold" />
                            <span className="text-rich-gold uppercase tracking-[0.3em] text-[10px] font-medium font-sans">Our Collection</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-pearl-100 font-light tracking-wide">Best Sellers & Trending</h2>
                    </div>
                    <a href="/shop" className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium border-b border-rich-gold/30 pb-1 hover:text-rich-gold hover:border-rich-gold transition-colors text-pearl-300 mb-2">
                        View All
                        <span className="text-rich-gold">&rarr;</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a href="/shop" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium border-b border-rich-gold/30 pb-1 text-pearl-300 hover:text-rich-gold hover:border-rich-gold transition-colors">
                        View All
                        <span className="text-rich-gold">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
