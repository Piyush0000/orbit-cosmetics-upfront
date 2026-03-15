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
        <section className="py-40 px-6 md:px-10 bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-dream-mint/20 blur-[100px] rounded-full" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col items-center mb-32 text-center">
                    <div className="px-5 py-2 glass-card mb-8">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-dream-violet">Dream Worlds • Categories</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-serif text-text-main leading-none tracking-tighter">Choose Your <br /> <span className="italic opacity-50">Discovery</span></h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                    {CATEGORIES.map((category, idx) => (
                        <div key={idx} className="group relative animate-fade-in flex flex-col items-center w-full">
                            <Link href={category.href} className="block relative w-full aspect-square mb-10 group/item max-w-[180px] sm:max-w-[220px] lg:max-w-[280px] mx-auto">
                                {/* Decorative Ring */}
                                <div className="absolute inset-[-15px] border border-dream-violet/20 rounded-full scale-90 opacity-0 group-hover/item:scale-100 group-hover/item:opacity-100 transition-all duration-700 pointer-events-none" />

                                {/* Image Circle */}
                                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700 group-hover/item:shadow-dream-violet/20 group-hover/item:-rotate-3 relative">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-dream-violet/40 to-transparent opacity-0 group-hover/item:opacity-40 transition-opacity duration-700" />
                                </div>

                                {/* Floating Label */}
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-y-4 group-hover/item:translate-y-0 text-center z-20">
                                    <div className="glass-card px-8 py-3 shadow-2xl">
                                        <p className="text-[9px] uppercase tracking-widest font-bold text-text-main">Enter</p>
                                    </div>
                                </div>
                            </Link>

                            <div className="space-y-3 text-center">
                                <h3 className="text-3xl font-serif text-text-main tracking-tight">{category.name}</h3>
                                <div className="w-8 h-[1px] bg-dream-violet/30 mx-auto" />
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-dream-violet/60">{category.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
