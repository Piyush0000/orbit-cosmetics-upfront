import ProductCard from "./ProductCard";

import { products } from "@/lib/data";

const PRODUCTS = products.slice(0, 4);

export default function BestSellers() {
    return (
        <section className="py-32 px-6 md:px-10 bg-white border-t border-lavender-100">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-pastel-purple uppercase tracking-[0.4em] text-[10px] font-bold font-sans block mb-4">Our Collection</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-text-main font-light tracking-tight">Best Sellers</h2>
                    </div>
                    <a href="/shop" className="hidden md:inline-block text-[11px] uppercase tracking-[0.25em] font-bold border-b-2 border-lavender-100 pb-2 hover:text-pastel-purple hover:border-pastel-purple transition-all text-text-muted mb-2">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a href="/shop" className="text-[11px] uppercase tracking-[0.25em] font-bold border-b-2 border-lavender-100 pb-2 text-text-muted hover:text-pastel-purple transition-all">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
