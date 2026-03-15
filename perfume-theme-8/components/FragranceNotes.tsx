import { Flower, Sprout, Wind, Droplets, Flame, Sun, Sparkles, Heart } from "lucide-react";

const NOTES = [
    { name: "Floral", icon: Flower },
    { name: "Woody", icon: Sprout },
    { name: "Citrus", icon: Sun },
    { name: "Fresh", icon: Wind },
    { name: "Aqua", icon: Droplets },
    { name: "Spicy", icon: Flame },
    { name: "Oriental", icon: Sparkles },
    { name: "Sweet", icon: Heart },
];

export default function FragranceNotes() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <div className="px-4 py-1.5 bg-pastel-sky/30 rounded-full mb-6 inline-block">
                        <span className="text-[10px] tracking-[0.3em] uppercase block font-bold text-pastel-blue">Olfactory Families</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-text-main leading-tight">Shop by Fragrance Notes</h2>
                    <p className="mt-6 text-text-muted max-w-xl mx-auto font-light text-lg">
                        Discover the essence that defines your personality, from vibrant citrus to deep, resonant woods.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-12">
                    {NOTES.map((note) => (
                        <div
                            key={note.name}
                            className="flex flex-col items-center justify-center group cursor-pointer"
                        >
                            <div className="w-24 h-24 rounded-[30px] bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:bg-pastel-pink/50 transition-all duration-500 border border-pastel-rose/20 relative overflow-hidden group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-pastel-cream/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <note.icon className="w-8 h-8 stroke-[1.2] text-text-muted transition-all duration-500 group-hover:scale-110 group-hover:text-pastel-rose relative z-10" />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted group-hover:text-text-main transition-colors">
                                {note.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
