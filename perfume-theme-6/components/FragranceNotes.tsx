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
        <section className="py-24 bg-white border-t border-sand-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-rose-gold text-[10px] tracking-[0.3em] uppercase block mb-3 font-medium">Olfactory Families</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-wide font-light">Shop by Fragrance Notes</h2>
                    <p className="mt-4 text-stone-500 max-w-xl mx-auto font-light tracking-wide text-sm leading-relaxed">
                        Discover the essence that defines your personality, from vibrant citrus to deep, resonant woods.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10">
                    {NOTES.map((note) => (
                        <div
                            key={note.name}
                            className="flex flex-col items-center justify-center group cursor-pointer"
                        >
                            <div className="w-20 h-20 rounded-full bg-sand-50 shadow-sm flex items-center justify-center mb-5 group-hover:shadow-md group-hover:bg-white transition-all duration-500 border border-sand-200 group-hover:border-rose-gold/40 relative overflow-hidden">
                                <div className="absolute inset-0 bg-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <note.icon className="w-7 h-7 stroke-[1.5] text-stone-400 transition-all duration-500 group-hover:scale-110 group-hover:text-rose-gold relative z-10" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 group-hover:text-stone-900 transition-colors">
                                {note.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
