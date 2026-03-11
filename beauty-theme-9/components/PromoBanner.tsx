import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="relative py-8 sm:py-16 px-4 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-border/30 shadow-lg shadow-primary/5">
                    {/* Left countdown panel */}
                    <div className="lg:col-span-2 bg-gradient-to-tl from-secondary/30 to-muted/40 p-6 sm:p-10 md:p-14 flex flex-col justify-center items-center order-2 lg:order-1">
                        <p className="text-xs sm:text-sm font-semibold text-primary tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-8">Offer Ends In</p>
                        <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-8">
                            <div className="flex flex-col items-center bg-background rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 min-w-[56px] sm:min-w-[72px] shadow-sm border border-border/30">
                                <span className="text-2xl sm:text-3xl font-bold font-serif text-foreground">02</span>
                                <span className="text-[9px] sm:text-[10px] uppercase text-muted-foreground tracking-wider mt-0.5 sm:mt-1">Days</span>
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-primary/30 self-center">:</span>
                            <div className="flex flex-col items-center bg-background rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 min-w-[56px] sm:min-w-[72px] shadow-sm border border-border/30">
                                <span className="text-2xl sm:text-3xl font-bold font-serif text-foreground">14</span>
                                <span className="text-[9px] sm:text-[10px] uppercase text-muted-foreground tracking-wider mt-0.5 sm:mt-1">Hours</span>
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-primary/30 self-center">:</span>
                            <div className="flex flex-col items-center bg-background rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 min-w-[56px] sm:min-w-[72px] shadow-sm border border-border/30">
                                <span className="text-2xl sm:text-3xl font-bold font-serif text-foreground">45</span>
                                <span className="text-[9px] sm:text-[10px] uppercase text-muted-foreground tracking-wider mt-0.5 sm:mt-1">Mins</span>
                            </div>
                        </div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                            Free shipping on orders above ₹2,999
                        </p>
                    </div>

                    {/* Right content panel */}
                    <div className="lg:col-span-3 bg-gradient-to-tl from-primary via-primary/90 to-primary/80 p-6 sm:p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden order-1 lg:order-2">
                        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
                        <div className="absolute top-0 right-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-accent/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3" />

                        <div className="relative z-10">
                            <span className="inline-block py-1 px-3 sm:px-4 border border-white/20 rounded-full text-white/80 mb-4 sm:mb-6 text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                                ✨ Limited Time Offer
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 font-serif leading-tight">
                                Flat 30% OFF<br className="hidden sm:block" /> on Skincare
                            </h2>
                            <p className="text-white/70 mb-5 sm:mb-8 max-w-sm leading-relaxed text-sm sm:text-base">
                                Indulge in our premium skincare collection with exclusive savings.
                            </p>
                            <Link href="/shop">
                                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-6 sm:px-8 shadow-xl shadow-black/10 font-semibold gap-2 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                                    Shop the Sale <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
