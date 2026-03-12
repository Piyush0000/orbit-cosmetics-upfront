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
        <section className="py-32 px-6 md:px-10 bg-mint-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-lavender-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-pastel-purple text-[10px] tracking-[0.4em] uppercase block mb-4 font-bold">Curated Selections</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-text-main tracking-tight font-light">Explore Collections</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
                    {CATEGORIES.map((category, idx) => (
                        <Link
                            key={idx}
                            href={category.href}
                            className={cn(
                                "group relative overflow-hidden rounded-[2rem] cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-lavender-200/40 transition-all duration-700",
                                category.size || "col-span-1"
                            )}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-lavender-200/10 group-hover:bg-lavender-200/20 transition-colors duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-text-main/60 via-transparent to-transparent opacity-60" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-end justify-center pb-8">
                                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="block text-white text-2xl md:text-3xl font-serif font-light tracking-wide mb-3 drop-shadow-md">
                                        {category.name}
                                    </span>
                                    <span className="inline-block h-[2px] w-0 bg-pastel-purple transition-all duration-700 group-hover:w-16 opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
