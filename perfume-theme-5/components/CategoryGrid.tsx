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
        <section className="py-24 px-6 md:px-10 bg-obsidian-900 overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-rich-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-rich-gold/50" />
                        <span className="text-rich-gold text-[10px] tracking-[0.4em] uppercase font-medium">Curated Selections</span>
                        <span className="h-px w-8 bg-rich-gold/50" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-pearl-100 tracking-wide font-light">Shop by Category</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
                    {CATEGORIES.map((category, idx) => (
                        <Link
                            key={idx}
                            href={category.href}
                            className={cn(
                                "group relative overflow-hidden cursor-pointer rounded-sm shadow-md shadow-black/50 hover:shadow-xl hover:shadow-rich-gold/10 transition-all duration-700 border border-pearl-100/5 hover:border-rich-gold/30",
                                category.size || "col-span-1"
                            )}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 sepia-[.15] opacity-80"
                                style={{ backgroundImage: `url(${category.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-rich-gold/0 group-hover:border-rich-gold/50 transition-colors duration-500" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-rich-gold/0 group-hover:border-rich-gold/50 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 p-6 w-full glass-panel opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 border-x-0 border-b-0">
                                    <span className="block text-pearl-100 text-lg md:text-xl font-serif font-medium tracking-wide mb-2">
                                        {category.name}
                                    </span>
                                    <span className="text-rich-gold text-[9px] uppercase tracking-[0.3em]">Explore</span>
                                </div>
                                
                                {/* Default visible title when not hovering */}
                                <div className="absolute bottom-8 left-0 right-0 text-center transition-opacity duration-500 group-hover:opacity-0">
                                    <span className="block text-pearl-100 text-xl md:text-2xl font-serif font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {category.name}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
