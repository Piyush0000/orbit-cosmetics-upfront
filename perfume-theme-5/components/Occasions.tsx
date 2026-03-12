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
        <section className="py-24 bg-obsidian-950 border-t border-rich-gold/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-rich-gold/50" />
                        <span className="text-rich-gold text-[10px] tracking-[0.4em] uppercase font-medium">Perfect Moments</span>
                        <span className="h-px w-8 bg-rich-gold/50" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-pearl-100 tracking-wide font-light">Shop by Occasion</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OCCASIONS.map((occ, idx) => (
                        <Link
                            key={idx}
                            href={occ.href}
                            className="group relative h-[320px] overflow-hidden rounded-sm cursor-pointer shadow-md shadow-black/40 hover:shadow-xl hover:shadow-rich-gold/10 transition-all duration-700 block border border-pearl-100/5 hover:border-rich-gold/30"
                        >
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 sepia-[.1]"
                                style={{ backgroundImage: `url(${occ.image})` }}
                            />
                            <div className="absolute inset-0 bg-obsidian-950/40 group-hover:bg-obsidian-950/20 transition-colors duration-500 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent opacity-90" />

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-rich-gold/0 group-hover:border-rich-gold/50 transition-colors duration-500" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-rich-gold/0 group-hover:border-rich-gold/50 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-pearl-100">
                                <div className="p-4 rounded-full border border-pearl-100/20 backdrop-blur-md mb-6 group-hover:bg-rich-gold group-hover:border-rich-gold group-hover:text-obsidian-950 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 shadow-lg transform group-hover:-translate-y-2">
                                    <occ.icon className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <h3 className="text-2xl font-serif tracking-wide drop-shadow-md text-pearl-100">{occ.name}</h3>
                                <span className="text-[10px] uppercase tracking-[0.2em] mt-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-rich-gold font-bold">Discover</span>
                                <span className="inline-block h-px w-0 bg-rich-gold transition-all duration-500 group-hover:w-16 opacity-0 group-hover:opacity-100 mt-3" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
