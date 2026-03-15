import Link from "next/link";
import ProductCard from "./ProductCard";

import { products } from "@/lib/data";

const PRODUCTS = products.slice(0, 4);

export default function BestSellers() {
    return (
        <section className="py-32 px-6 md:px-10 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dream-sky/10 blur-[80px] rounded-full" />
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <div className="max-w-xl">
                        <div className="px-5 py-2 glass-card mb-8 inline-block shadow-sm">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-dream-violet">Curated • The Best Sellers</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-serif text-text-main leading-none font-medium tracking-tighter">Iconic <br /> <span className="italic opacity-50">Silhouettes</span></h2>
                    </div>
                    <Link href="/shop" className="hidden md:flex items-center gap-6 group">
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-text-main group-hover:text-dream-violet transition-all duration-500">View Entire Collection</span>
                        <div className="w-14 h-14 rounded-full border border-dream-violet/20 flex items-center justify-center group-hover:bg-dream-violet group-hover:text-white transition-all duration-700 shadow-lg group-hover:shadow-dream-violet/30">
                             <span className="transform group-hover:translate-x-2 transition-transform text-xl">→</span>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-24 text-center md:hidden">
                    <Link href="/shop" className="inline-flex items-center gap-6 bg-text-main text-black px-12 py-5 rounded-[30px_5px_30px_5px] text-[11px] font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-dream-violet transition-all">
                        Discover More
                    </Link>
                </div>
            </div>
        </section>
    );
}
