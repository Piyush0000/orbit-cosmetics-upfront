import Link from "next/link";
import { Gift } from "lucide-react";

export default function GiftSection() {
    return (
        <section className="py-32 relative bg-pastel-cream text-text-main overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pastel-pink/30 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pastel-lavender/30 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <div className="mb-12 flex justify-center">
                    <div className="w-20 h-20 rounded-[30px] bg-white flex items-center justify-center text-pastel-rose shadow-xl border border-white">
                        <Gift className="w-8 h-8 stroke-[1.2]" />
                    </div>
                </div>

                <div className="px-4 py-1.5 bg-white/50 rounded-full mb-6 inline-block border border-white">
                    <span className="text-[10px] tracking-[0.3em] uppercase block font-bold text-pastel-violet">The Art of Gifting</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">The Perfect Gift</h2>
                <p className="max-w-xl mx-auto text-text-muted text-xl mb-16 font-light leading-relaxed">
                    Give the gift of luxury. Make every celebration unforgettable with our exclusive gift sets, wrapped in signature premium packaging.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        href="/gifts/men"
                        className="px-10 py-5 bg-text-main text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-pastel-violet transition-all duration-500 shadow-xl shadow-text-main/10 min-w-[220px]"
                    >
                        Gifts for Him
                    </Link>
                    <Link
                        href="/gifts/women"
                        className="px-10 py-5 bg-white border border-gray-100 text-text-main rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:border-pastel-rose transition-all duration-500 shadow-sm min-w-[220px]"
                    >
                        Gifts for Her
                    </Link>
                </div>
            </div>
        </section>
    );
}
