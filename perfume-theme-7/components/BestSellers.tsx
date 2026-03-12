import ProductCard from "./ProductCard";

import { products } from "@/lib/data";

const PRODUCTS = products.slice(0, 4);

export default function BestSellers() {
    return (
        <section className="py-32 px-6 md:px-10 bg-stone-50 border-y border-stone-100">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="mono-label text-sage-600 block mb-4">Our Selection</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-stone-900 font-light">Best <br className="md:hidden" /> Sellers</h2>
                    </div>
                    <a href="/shop" className="hidden md:inline-block mono-label text-[11px] font-bold border-b border-stone-900 pb-1 hover:text-clay-600 hover:border-clay-600 transition-all text-stone-900 mb-2">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a href="/shop" className="mono-label text-[11px] font-bold border-b border-stone-900 pb-1 text-stone-900 hover:text-clay-400 transition-all">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
