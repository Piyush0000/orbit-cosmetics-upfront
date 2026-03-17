import Link from "next/link";
import { Briefcase, Heart, Sun, PartyPopper } from "lucide-react";

const OCCASIONS = [
    { name: "Office Wear", icon: Briefcase, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop", href: "/occasion/office" },
    { name: "Date Night", icon: Heart, image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop", href: "/occasion/date" },
    { name: "Daily Wear", icon: Sun, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af93?q=80&w=800&auto=format&fit=crop", href: "/occasion/daily" },
    { name: "Party", icon: PartyPopper, image: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=800&auto=format&fit=crop", href: "/occasion/party" },
];

export default function Occasions() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-dream-peach/10 blur-[100px] rounded-full" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <div className="px-5 py-2 glass-card mb-8 inline-block shadow-sm">
                        <span className="text-[10px] tracking-[0.4em] uppercase block font-bold text-text-main">Perfect Moments • Occasion</span>
                    </div>
                    <h2 className="text-6xl md:text-[100px] font-serif text-text-main leading-none tracking-tighter italic">Signature <span className="not-italic opacity-60">Curation</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {OCCASIONS.map((occ, idx) => (
                        <Link
                            key={idx}
                            href={occ.href}
                            className="group relative h-[450px] overflow-hidden rounded-full cursor-pointer shadow-2xl transition-all duration-700 block border border-black/10"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${occ.image})` }}
                            />
                            {/* Sophisticated Overlays */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-6">
                                <div className="p-5 rounded-full glass-card mb-8 group-hover:bg-white transition-all duration-700 shadow-2xl transform group-hover:-translate-y-4">
                                    <occ.icon className="w-6 h-6 stroke-[1] text-dream-violet group-hover:text-black" />
                                </div>
                                <h3 className="text-3xl font-serif tracking-tighter text-white mb-4 group-hover:text-dream-violet transition-colors">{occ.name}</h3>
                                <div className="w-12 h-[1px] bg-dream-violet scale-0 group-hover:scale-100 transition-transform duration-700 mb-6" />
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 group-hover:text-white transition-all duration-500">Explore Collection</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
