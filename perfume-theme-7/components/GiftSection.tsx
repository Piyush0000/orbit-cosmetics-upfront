import Link from "next/link";
import { Gift } from "lucide-react";

export default function GiftSection() {
    return (
        <section className="py-24 relative bg-sand-100 text-stone-900 border-t border-sand-200 overflow-hidden">
            {/* Background Image / Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-100 via-sand-50/80 to-sand-100" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-rose-gold shadow-lg shadow-rose-gold/10 border border-sand-200">
                        <Gift className="w-7 h-7 stroke-[1.5]" />
                    </div>
                </div>

                <span className="text-rose-gold text-[10px] tracking-[0.3em] uppercase block mb-4 font-medium">The Art of Gifting</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide font-light">The Perfect Gift</h2>
                <p className="max-w-xl mx-auto text-stone-600 text-lg mb-12 font-light leading-relaxed">
                    Give the gift of luxury. Make every celebration unforgettable with our exclusive gift sets, wrapped in signature premium packaging.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link
                        href="/gifts/men"
                        className="px-8 py-4 bg-stone-900 text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-rose-gold hover:shadow-lg hover:shadow-rose-gold/20 transition-all duration-300 min-w-[200px]"
                    >
                        Gifts for Him
                    </Link>
                    <Link
                        href="/gifts/women"
                        className="px-8 py-4 bg-white border border-sand-200 text-stone-900 text-[11px] uppercase tracking-[0.2em] font-medium hover:border-rose-gold hover:text-rose-gold shadow-sm transition-all duration-300 min-w-[200px]"
                    >
                        Gifts for Her
                    </Link>
                </div>
            </div>
        </section>
    );
}
