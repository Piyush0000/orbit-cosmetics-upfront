"use client";

import { useState } from "react";
import { CreditCard, Wallet, Banknote, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const PAYMENT_METHODS = [
    {
        id: "upi",
        label: "UPI",
        icon: Wallet,
        description: "Google Pay, PhonePe, Paytm, etc.",
    },
    {
        id: "card",
        label: "Credit / Debit Card",
        icon: CreditCard,
        description: "Visa, Mastercard, RuPay, Amex",
    },
    {
        id: "netbanking",
        label: "Net Banking",
        icon: Landmark,
        description: "All major banks supported",
    },
    {
        id: "cod",
        label: "Cash on Delivery",
        icon: Banknote,
        description: "Pay with cash upon delivery",
    },
];

export default function PaymentOptions() {
    const [selectedMethod, setSelectedMethod] = useState("upi");

    return (
        <div className="glass-card p-8 sm:p-12 rounded-[60px] border-white/5 shadow-2xl backdrop-blur-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-dream-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <h2 className="font-serif text-3xl text-text-main mb-10 pb-6 border-b border-white/5 italic tracking-tight relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 glass-panel border-none shadow-xl flex items-center justify-center rounded-full bg-white/5 border-white/10">
                    <CreditCard className="w-5 h-5 text-dream-violet" />
                </div>
                Payment <span className="not-italic opacity-60">Gateway</span>
            </h2>

            <div className="space-y-6 relative z-10">
                {PAYMENT_METHODS.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={cn(
                            "relative overflow-hidden cursor-pointer transition-all duration-700 flex items-center justify-between p-6 rounded-full group/method",
                            selectedMethod === method.id
                                ? "glass-card border-dream-violet/50 bg-dream-violet/[0.08]"
                                : "glass-panel border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                        )}
                    >
                        {selectedMethod === method.id && (
                            <div className="absolute top-0 right-0 w-24 h-24 bg-dream-violet/10 blur-[40px] rounded-full animate-slow-zoom" />
                        )}

                        <div className="flex items-center gap-6">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700",
                                selectedMethod === method.id 
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110" 
                                    : "bg-white/5 text-text-muted group-hover/method:bg-white/10"
                            )}>
                                <method.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={cn(
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500",
                                    selectedMethod === method.id ? "text-text-main" : "text-text-muted"
                                )}>
                                    {method.label}
                                </h3>
                                <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider font-medium">{method.description}</p>
                            </div>
                        </div>

                        <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-700",
                            selectedMethod === method.id ? "border-dream-violet shadow-[0_0_10px_rgba(209,196,233,0.5)]" : "border-black/10"
                        )}>
                            {selectedMethod === method.id && (
                                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Details / Form placeholder */}
            <div className="mt-10 p-6 glass-card border-white/5 bg-white/[0.02] rounded-[32px] relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-dream-violet font-bold flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Secure Expedition Protocol
                </p>
                <p className="text-[9px] text-text-muted mt-3 leading-relaxed uppercase tracking-wider">
                    Your financial aura is shielded with high-level encryption. 
                    {selectedMethod === 'cod' && " Please prepare the exact alchemy for delivery."}
                </p>
            </div>
        </div>
    );
}
