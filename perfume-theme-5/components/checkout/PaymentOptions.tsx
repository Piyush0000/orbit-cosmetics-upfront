"use client";

import { useState } from "react";
import { CreditCard, Wallet, Banknote, Landmark, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        <div className="bg-obsidian-900 p-8 lg:p-12 border border-rich-gold/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rich-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-rich-gold/10 transition-all duration-700" />
            
            <h2 className="font-serif text-2xl text-pearl-100 mb-10 flex items-center gap-4 underline underline-offset-[12px] decoration-rich-gold/20 tracking-wide">
                <CreditCard className="w-6 h-6 text-rich-gold" />
                Acquisition Method
            </h2>

            <div className="space-y-6">
                {PAYMENT_METHODS.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={cn(
                            "relative border p-6 cursor-pointer transition-all duration-500 flex items-center justify-between group/method overflow-hidden",
                            selectedMethod === method.id
                                ? "border-rich-gold bg-obsidian-950 shadow-lg shadow-rich-gold/5"
                                : "border-rich-gold/10 hover:border-rich-gold/30 bg-obsidian-900/50"
                        )}
                    >
                        {selectedMethod === method.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-rich-gold" />
                        )}
                        
                        <div className="flex items-center gap-6 relative z-10">
                            <div className={cn(
                                "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border",
                                selectedMethod === method.id 
                                    ? "bg-rich-gold/20 border-rich-gold text-rich-gold shadow-glow" 
                                    : "bg-obsidian-950 border-rich-gold/10 text-onyx-500 group-hover/method:border-rich-gold/30"
                            )}>
                                <method.icon className={cn("w-6 h-6", selectedMethod === method.id && "animate-pulse")} />
                            </div>
                            <div>
                                <h3 className={cn(
                                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500",
                                    selectedMethod === method.id ? "text-pearl-100" : "text-onyx-400"
                                )}>{method.label}</h3>
                                <p className="text-[10px] text-onyx-600 mt-1 italic tracking-wide font-light">{method.description}</p>
                            </div>
                        </div>

                        <div className={cn(
                            "w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 relative z-10",
                            selectedMethod === method.id ? "border-rich-gold bg-rich-gold/10" : "border-rich-gold/20"
                        )}>
                            {selectedMethod === method.id && (
                                <motion.div 
                                    layoutId="paymentDot"
                                    className="w-2 h-2 rounded-full bg-rich-gold shadow-glow" 
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Details / Form placeholder */}
            <div className="mt-10 p-6 bg-obsidian-950 border border-rich-gold/10 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rich-gold/40" />
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-rich-gold mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" /> Encryption Active
                </p>
                <p className="text-onyx-500 text-[10px] italic leading-relaxed tracking-wide">
                    Your financial signatures are encrypted with multi-layer obsidian-grade security. 
                    {selectedMethod === 'cod' && " Exact valuation preferred upon physical handover."}
                </p>
            </div>
        </div>
    );
}
