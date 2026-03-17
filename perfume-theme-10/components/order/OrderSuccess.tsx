"use client";

import { CheckCircle, Calendar, Package } from "lucide-react";

export default function OrderSuccess() {
    // Mock Data
    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const date = new Date();
    date.setDate(date.getDate() + 5); // 5 days from now
    const deliveryDate = date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="text-center max-w-2xl mx-auto relative z-10">
            <div className="mb-10 flex justify-center relative">
                {/* Ethereal Glow Behind Icon */}
                <div className="absolute inset-0 bg-dream-violet/20 blur-[60px] rounded-full scale-150 animate-pulse" />
                
                <div className="w-24 h-24 glass-card border-dream-violet/30 rounded-full flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-dream-violet/20 to-transparent animate-spin-slow" />
                    <CheckCircle className="w-12 h-12 text-white relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                </div>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl text-text-main mb-6 italic tracking-tight">
                Essence <span className="not-italic opacity-60">Confirmed</span>
            </h1>
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-text-muted mb-16 leading-relaxed">
                Your ritual has been harmonized. <br className="hidden sm:block" /> 
                Our artisans are now preparing your selection with profound care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-16">
                {/* Order ID Card */}
                <div className="glass-card p-8 rounded-[40px] border-black/5 relative overflow-hidden group/card shadow-2xl backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-dream-violet/5 blur-[40px] rounded-full group-hover/card:scale-150 transition-transform duration-1000" />
                    
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="w-12 h-12 glass-panel border-black/10 flex items-center justify-center rounded-full bg-white/5">
                            <Package className="w-6 h-6 text-dream-violet shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
                        </div>
                        <div>
                            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1.5 leading-none">Order Identity</h3>
                            <p className="font-serif text-xl text-text-main font-bold italic tracking-wider">{orderId}</p>
                        </div>
                    </div>
                </div>

                {/* Delivery Date Card */}
                <div className="glass-card p-8 rounded-[40px] border-black/5 relative overflow-hidden group/card shadow-2xl backdrop-blur-xl">
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-dream-peach/5 blur-[40px] rounded-full group-hover/card:scale-150 transition-transform duration-1000" />

                    <div className="flex items-center gap-5 relative z-10">
                        <div className="w-12 h-12 glass-panel border-black/10 flex items-center justify-center rounded-full bg-white/5">
                            <Calendar className="w-6 h-6 text-dream-peach shadow-[0_0_10px_rgba(253,186,116,0.3)]" />
                        </div>
                        <div>
                            <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1.5 leading-none">Expected Aura</h3>
                            <p className="font-serif text-xl text-text-main font-bold italic tracking-tight leading-none">{deliveryDate}</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-[9px] text-text-muted uppercase tracking-[0.3em] font-bold max-w-md mx-auto leading-relaxed border-t border-black/10 pt-10">
                A scroll of confirmation has been dispatched to your digital sanctuary with tracking enlightenment.
            </p>
        </div>
    );
}
