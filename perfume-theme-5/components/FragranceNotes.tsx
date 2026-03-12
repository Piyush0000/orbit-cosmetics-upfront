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
        <section className="py-24 bg-obsidian-900 border-t border-rich-gold/10 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-rich-gold/50" />
                        <span className="text-rich-gold text-[10px] tracking-[0.4em] uppercase font-medium">Olfactory Families</span>
                        <span className="h-px w-8 bg-rich-gold/50" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-pearl-100 tracking-wide font-light">Shop by Fragrance Notes</h2>
                    <p className="mt-4 text-pearl-300 max-w-xl mx-auto font-light tracking-wide text-sm leading-relaxed">
                        Discover the essence that defines your personality, from vibrant citrus to deep, resonant woods.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10 border-t border-rich-gold/10 pt-16 mt-8">
                    {NOTES.map((note) => (
                        <div
                            key={note.name}
                            className="flex flex-col items-center justify-center group cursor-pointer"
                        >
                            <div className="w-20 h-20 rounded-full bg-obsidian-800 shadow-inner flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:bg-obsidian-950 transition-all duration-500 border border-rich-gold/10 group-hover:border-rich-gold/60 relative overflow-hidden">
                                <div className="absolute inset-0 bg-rich-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <note.icon className="w-7 h-7 stroke-[1.5] text-onyx-400 transition-all duration-500 group-hover:scale-110 group-hover:text-rich-gold relative z-10 drop-shadow-md" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pearl-300 group-hover:text-rich-gold transition-colors">
                                {note.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
