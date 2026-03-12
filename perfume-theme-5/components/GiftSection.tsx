import Link from "next/link";
import { Gift } from "lucide-react";

export default function GiftSection() {
    return (
        <section className="py-24 relative bg-obsidian-900 text-pearl-100 border-t border-rich-gold/10 overflow-hidden">
            {/* Background Image / Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.2] mix-blend-luminosity sepia-[.2]" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/80 to-obsidian-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/90 via-transparent to-obsidian-900/90" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-obsidian-950 flex items-center justify-center text-rich-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-rich-gold/30">
                        <Gift className="w-8 h-8 stroke-[1.5]" />
                    </div>
                </div>

                <div className="inline-flex items-center gap-3 mb-6">
                    <span className="h-px w-10 bg-rich-gold/50" />
                    <span className="text-rich-gold text-[10px] tracking-[0.4em] uppercase font-medium">The Art of Gifting</span>
                    <span className="h-px w-10 bg-rich-gold/50" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide font-light text-pearl-100 drop-shadow-lg">The Perfect Gift</h2>
                <p className="max-w-xl mx-auto text-pearl-300 text-lg mb-12 font-light leading-relaxed">
                    Give the gift of luxury. Make every celebration unforgettable with our exclusive gift sets, wrapped in signature <span className="text-rich-gold italic">Midnight Elixir</span> premium packaging.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link
                        href="/gifts/men"
                        className="px-8 py-4 bg-rich-gold text-obsidian-950 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-obsidian-950 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 min-w-[200px] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    >
                        Gifts for Him
                    </Link>
                    <Link
                        href="/gifts/women"
                        className="px-8 py-4 bg-transparent border border-rich-gold/40 text-pearl-100 text-[11px] uppercase tracking-[0.2em] font-medium hover:border-rich-gold hover:text-rich-gold hover:bg-rich-gold/5 transition-all duration-300 min-w-[200px]"
                    >
                        Gifts for Her
                    </Link>
                </div>
            </div>
        </section>
    );
}
