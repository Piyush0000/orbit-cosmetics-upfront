import Link from "next/link";
import { cn } from "@/lib/utils";

const CATEGORIES = [
    { name: "Men's Perfumes", image: "https://images.unsplash.com/photo-1595166667117-9c9be2897e93?q=80&w=700&auto=format&fit=crop", href: "/men", size: "col-span-1 md:col-span-2 row-span-2" },
    { name: "Women's Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=700&auto=format&fit=crop", href: "/women", size: "col-span-1 md:col-span-2 row-span-2" },
    { name: "Unisex", image: "https://images.unsplash.com/photo-1615160359300-47401c107ae7?q=80&w=700&auto=format&fit=crop", href: "/unisex" },
    { name: "Gift Sets", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=700&auto=format&fit=crop", href: "/gift-sets" },
    { name: "Travel Size", image: "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=700&auto=format&fit=crop", href: "/travel" },
    { name: "Premium Collection", image: "https://images.unsplash.com/photo-1605307373307-e075c324c4c2?q=80&w=700&auto=format&fit=crop", href: "/premium" },
];

export default function CategoryGrid() {
    return (
        <section className="py-24 px-6 md:px-10 bg-sand-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-rose-gold text-[10px] tracking-[0.3em] uppercase block mb-3 font-medium">Curated Selections</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-wide font-light">Shop by Category</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
                    {CATEGORIES.map((category, idx) => (
                        <Link
                            key={idx}
                            href={category.href}
                            className={cn(
                                "group relative overflow-hidden rounded-md cursor-pointer shadow-sm hover:shadow-xl hover:shadow-sand-200/50 transition-all duration-500",
                                category.size || "col-span-1"
                            )}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-80" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-end justify-center pb-8">
                                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="block text-white text-xl md:text-2xl font-serif font-medium tracking-wide mb-3 drop-shadow-md">
                                        {category.name}
                                    </span>
                                    <span className="inline-block h-px w-0 bg-rose-gold transition-all duration-500 group-hover:w-16 opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
