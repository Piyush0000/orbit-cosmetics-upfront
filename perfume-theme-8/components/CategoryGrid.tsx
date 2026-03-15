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
        <section className="py-40 px-6 md:px-10 bg-background">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center mb-24 text-center">
                    <div className="px-4 py-1.5 bg-pastel-mint rounded-full mb-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pastel-sage">Collections • 2026</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif text-text-main leading-tight">Curated Elements for <br /> every mood</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {CATEGORIES.map((category, idx) => (
                        <div key={idx} className={cn(
                            "group relative animate-fade-in",
                            idx % 2 === 0 ? "lg:pt-12" : "lg:pb-12"
                        )}>
                            <Link href={category.href} className="block relative aspect-[3/4] mb-8 overflow-hidden rounded-[40px] shadow-sm transform transition-all duration-700 hover:shadow-2xl hover:translate-y-[-10px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pastel-violet/40 to-transparent mix-blend-multiply opacity-40" />
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-[10px] uppercase underline tracking-widest font-bold text-text-main">
                                        Explore
                                    </div>
                                </div>
                            </Link>
                            <div className="space-y-2 text-center">
                                <h3 className="text-2xl font-serif text-text-main">{category.name}</h3>
                                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-pastel-violet">{category.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
