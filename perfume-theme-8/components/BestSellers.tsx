import Link from "next/link";
import ProductCard from "./ProductCard";

import { products } from "@/lib/data";

const PRODUCTS = products.slice(0, 4);

export default function BestSellers() {
    return (
        <section className="py-32 px-6 md:px-10 bg-pastel-pink/20">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <div className="px-4 py-1.5 bg-white rounded-full mb-6 inline-block shadow-sm">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pastel-rose">Most Loved • Collective</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-text-main leading-tight">Your Fragrance <br /> signature</h2>
                    </div>
                    <Link href="/shop" className="hidden md:flex items-center gap-4 group">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-text-main border-b border-text-main pb-1 group-hover:text-pastel-violet group-hover:border-pastel-violet transition-all">View All Products</span>
                        <div className="w-12 h-12 rounded-full border border-pastel-rose flex items-center justify-center group-hover:bg-pastel-violet group-hover:text-white transition-all duration-500">
                             <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-20 text-center md:hidden">
                    <Link href="/shop" className="inline-flex items-center gap-4 bg-text-main text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}
