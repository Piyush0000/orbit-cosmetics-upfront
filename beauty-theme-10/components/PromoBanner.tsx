import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="relative py-16 px-6 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-[3rem] overflow-hidden border border-primary/10 shadow-2xl botanical-glow">
                    {/* Left: The Timer / Urgency */}
                    <div className="lg:col-span-2 bg-secondary/20 p-10 md:p-14 flex flex-col justify-center items-center order-2 lg:order-1 relative">
                        {/* Decorative leaf watermarks */}
                        <div className="absolute top-4 left-4 opacity-5"><Leaf className="w-24 h-24 rotate-12" /></div>

                        <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-8">HARVEST WINDOW ENDS IN</p>
                        <div className="flex gap-4 mb-10">
                            {[
                                { val: "02", label: "Days" },
                                { val: "14", label: "Hours" },
                                { val: "45", label: "Mins" }
                            ].map((unit, i) => (
                                <div key={i} className="flex flex-col items-center bg-background rounded-2xl px-5 py-4 min-w-[72px] shadow-sm border border-primary/5">
                                    <span className="text-3xl font-serif font-bold text-foreground">{unit.val}</span>
                                    <span className="text-[9px] uppercase font-bold text-primary/40 tracking-wider mt-1">{unit.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[11px] font-bold text-primary/60 text-center uppercase tracking-widest leading-relaxed">
                            Complimentary botanical ritual kit <br /> on orders above ₹4,000
                        </p>
                    </div>

                    {/* Right: The Offer */}
                    <div className="lg:col-span-3 bg-primary p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden order-1 lg:order-2 group">
                        {/* Organic Light Blobs */}
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
                        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-secondary/10 rounded-full blur-[80px] -translate-x-1/4 -translate-y-1/4" />

                        <div className="relative z-10 space-y-8">
                            <span className="inline-flex items-center gap-2.5 py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-[0.25em] uppercase border border-white/20">
                                <Leaf className="w-3.5 h-3.5" /> FULL BLOOM SEASON
                            </span>
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                                    Refine your <br />
                                    <span className="italic font-light opacity-80">Skin Nature</span>
                                </h2>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">ENJOY 25% SAVINGS</h3>
                            </div>
                            <p className="text-white/70 max-w-sm leading-relaxed text-sm font-medium">
                                Unlock the medicinal potency of our cold-pressed botanicals with exclusive seasonal pricing.
                            </p>
                            <Link href="/shop" className="inline-block pt-4">
                                <Button size="lg" className="h-14 bg-white text-primary hover:bg-white/90 rounded-full px-10 shadow-xl font-bold gap-3 hover:scale-105 transition-all text-xs tracking-widest uppercase">
                                    SHOP THE HARVEST <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
