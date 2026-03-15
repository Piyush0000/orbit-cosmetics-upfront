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
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Decorative Spheres */}
            <div className="absolute top-0 right-[10%] w-64 h-64 bg-dream-mint/10 blur-[80px] rounded-full animate-float" />
            <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-dream-sky/10 blur-[100px] rounded-full animate-float [animation-delay:2s]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <div className="px-5 py-2 glass-card mb-8 inline-block shadow-sm">
                        <span className="text-[10px] tracking-[0.4em] uppercase block font-bold text-dream-violet">Olfactory • The Dream Scents</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-serif text-text-main leading-none italic tracking-tighter">Families <span className="not-italic opacity-40">& Souls</span></h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-10 gap-y-16">
                    {NOTES.map((note) => (
                        <div
                            key={note.name}
                            className="flex flex-col items-center justify-center group cursor-pointer"
                        >
                            <div className="w-24 h-24 rounded-[40px_10px_40px_10px] bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:bg-dream-mint transition-all duration-700 border border-dream-violet/10 relative overflow-hidden group-hover:-translate-y-4 group-hover:-rotate-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-dream-sky/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <note.icon className="w-10 h-10 stroke-[1] text-text-muted transition-all duration-700 group-hover:scale-110 group-hover:text-text-main relative z-10" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted group-hover:text-dream-violet transition-colors">
                                {note.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
