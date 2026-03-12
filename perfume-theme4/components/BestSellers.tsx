import ProductCard from "./ProductCard";

import { products } from "@/lib/data";

const PRODUCTS = products.slice(0, 4);

export default function BestSellers() {
    return (
        <section className="py-24 px-6 md:px-10 bg-white border-t border-sand-100">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-rose-gold uppercase tracking-[0.3em] text-[10px] font-medium font-sans block mb-3">Our Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-light tracking-wide">Best Sellers & Trending</h2>
                    </div>
                    <a href="/shop" className="hidden md:inline-block text-[11px] uppercase tracking-[0.2em] font-medium border-b border-stone-300 pb-1 hover:text-rose-gold hover:border-rose-gold transition-colors text-stone-600 mb-2">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="/shop" className="text-[11px] uppercase tracking-[0.2em] font-medium border-b border-stone-300 pb-1 text-stone-600 hover:text-rose-gold transition-colors">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
