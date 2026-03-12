import Link from "next/link";
import { cn } from "@/lib/utils";

const CATEGORIES = [
    { name: "Forest", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=700&auto=format&fit=crop", href: "/men", subtitle: "Earthy & Woody" },
    { name: "Ocean", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop", href: "/women", subtitle: "Fresh & Saline" },
    { name: "Clay", image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=700&auto=format&fit=crop", href: "/unisex", subtitle: "Warm & Musky" },
    { name: "Stone", image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=700&auto=format&fit=crop", href: "/luxury", subtitle: "Mineral & Pure" },
];

export default function CategoryGrid() {
    return (
        <section className="py-40 px-6 md:px-10 bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1 pt-12">
                        <span className="mono-label text-sage-600 mb-6 block">Categories</span>
                        <h2 className="text-5xl font-serif leading-[1.1] mb-8">Curated <br /> Elements</h2>
                        <p className="text-stone-900/50 font-light leading-relaxed">
                            Organized by olfactory families that reflect the raw beauty of our planet.
                        </p>
                    </div>

                    {CATEGORIES.map((category, idx) => (
                        <div key={idx} className={cn(
                            "group relative overflow-hidden animate-fade-in",
                            idx % 2 === 0 ? "lg:pt-24" : "lg:pb-24"
                        )}>
                            <Link href={category.href} className="block overflow-hidden relative aspect-[3/4] mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-sage-800/10 mix-blend-multiply opacity-40" />
                            </Link>
                            <div className="space-y-1">
                                <h3 className="text-xl font-serif tracking-widest uppercase">{category.name}</h3>
                                <p className="mono-label text-[9px] text-stone-400">{category.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
