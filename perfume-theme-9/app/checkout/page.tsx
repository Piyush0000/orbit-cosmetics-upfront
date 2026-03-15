"use client";

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
         <main className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
             {/* Background Ethereal Elements */}
             <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-dream-violet/5 blur-[120px] rounded-full animate-slow-zoom pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-dream-peach/5 blur-[120px] rounded-full animate-slow-zoom [animation-delay:4s] pointer-events-none" />
 
             <div className="container mx-auto px-6 relative z-10">
                 <div className="text-center mb-16">
                     <span className="text-[10px] uppercase tracking-[0.5em] text-dream-violet font-bold mb-4 block animate-fade-in">Secure Expedition</span>
                     <h1 className="text-5xl md:text-7xl font-serif text-text-main tracking-tighter leading-none italic">
                         Final <span className="not-italic opacity-30 font-light">Checkout</span>
                     </h1>
                 </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-8">
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
