"use client";

import Header from "@/components/Header";
import AddressForm from "@/components/checkout/AddressForm";
import PaymentOptions from "@/components/checkout/PaymentOptions";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();

    const handlePlaceOrder = () => {
        // Here we would handle form validation and payment processing
        // For now, redirect to success
        router.push("/order-confirmation");
    };

    return (
        <main className="min-h-screen bg-obsidian-950 pt-20">
            <Header />

            <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
                <div className="text-center mb-16 lg:mb-20">
                    <span className="text-[10px] text-rich-gold uppercase tracking-[0.4em] font-bold mb-4 block">Final Stage</span>
                    <h1 className="font-serif text-4xl lg:text-5xl text-pearl-100 underline underline-offset-[16px] decoration-rich-gold/20">Acquisition Portal</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-12 lg:space-y-16">
                        <AddressForm />
                        <PaymentOptions />
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-1">
                        <CheckoutSummary onPlaceOrder={handlePlaceOrder} />
                    </div>
                </div>
            </div>
        </main>
    );
}
