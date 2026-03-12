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
        <section className="py-24 bg-sand-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-rose-gold text-[10px] tracking-[0.3em] uppercase block mb-3 font-medium">Perfect Moments</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-wide font-light">Shop by Occasion</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OCCASIONS.map((occ, idx) => (
                        <Link
                            key={idx}
                            href={occ.href}
                            className="group relative h-[320px] overflow-hidden rounded-md cursor-pointer shadow-sm hover:shadow-xl hover:shadow-sand-200/50 transition-all duration-500 block"
                        >
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${occ.image})` }}
                            />
                            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/40 transition-colors duration-500 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-90" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white">
                                <div className="p-4 rounded-full border border-white/20 backdrop-blur-md mb-6 group-hover:bg-rose-gold group-hover:border-rose-gold group-hover:text-white transition-all duration-500 shadow-lg transform group-hover:-translate-y-2">
                                    <occ.icon className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <h3 className="text-2xl font-serif tracking-wide drop-shadow-md">{occ.name}</h3>
                                <span className="text-[10px] uppercase tracking-[0.2em] mt-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sand-50 font-medium">Discover</span>
                                <span className="inline-block h-px w-0 bg-rose-gold transition-all duration-500 group-hover:w-16 opacity-0 group-hover:opacity-100 mt-3" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
