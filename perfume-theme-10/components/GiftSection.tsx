import Link from "next/link";
import { Gift } from "lucide-react";

export default function GiftSection() {
    return (
        <section className="py-40 relative bg-dream-peach/40 text-text-main overflow-hidden">
            {/* Background Ethereal Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dream-sky/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-slow-zoom" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dream-mint/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 animate-slow-zoom [animation-delay:4s]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <div className="mb-16 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-dream-violet shadow-2xl border border-white/50 animate-float">
                        <Gift className="w-10 h-10 stroke-[1]" />
                    </div>
                </div>

                <div className="px-5 py-2 glass-card mb-10 inline-block border-none shadow-sm">
                    <span className="text-[10px] tracking-[0.4em] uppercase block font-bold text-dream-violet">Dream Gifting • Exclusive</span>
                </div>
                <h2 className="text-6xl md:text-[100px] font-serif mb-10 leading-none tracking-tighter italic">Signature <span className="not-italic opacity-40">Surprises</span></h2>
                <p className="max-w-2xl mx-auto text-text-muted text-xl mb-20 font-light leading-relaxed">
                    Elevate every celebration with our curated gift sets. Discover scents that tell a story, wrapped in ethereal, dream-like premium packaging.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Link
                        href="/gifts/men"
                        className="px-14 py-6 bg-text-main text-white rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-dream-lavender hover:text-text-main transition-all duration-700 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] min-w-[240px]"
                    >
                        For Him
                    </Link>
                    <Link
                        href="/gifts/women"
                        className="px-14 py-6 glass-card text-text-main rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-700 min-w-[240px] shadow-sm"
                    >
                        For Her
                    </Link>
                </div>
            </div>
        </section>
    );
}
