"use client";

import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

// Mock Data


export default function CartPageContent() {
    const router = useRouter();
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    const handleUpdateQuantity = (id: string, newQuantity: number) => {
        updateQuantity(id, newQuantity);
    };

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const handleCheckout = () => {
        router.push("/checkout");
    };

    const subtotal = cartTotal;
    const shipping = subtotal > 5000 ? 0 : 500; // Free shipping above 5000
    const discount = 0; // Placeholder for promo code

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-obsidian-950">
                <div className="relative mb-10 group">
                    <div className="absolute inset-0 bg-rich-gold/20 blur-3xl rounded-full scale-150 group-hover:bg-rich-gold/30 transition-all duration-700" />
                    <div className="relative w-24 h-24 bg-obsidian-900 border border-rich-gold/20 rounded-full flex items-center justify-center shadow-2xl">
                        <ShoppingBag className="w-10 h-10 text-rich-gold animate-pulse" />
                    </div>
                </div>
                <h2 className="font-serif text-4xl text-pearl-100 mb-6 tracking-wide">Your Gallery is Silent</h2>
                <p className="text-onyx-400 mb-10 max-w-md italic font-light leading-relaxed">
                    The essence of luxury awaits. Explore our masterpiece collection and find the scent that defines your story.
                </p>
                <Link
                    href="/shop"
                    className="bg-rich-gold text-obsidian-950 py-5 px-12 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-xl active:scale-[0.98]"
                >
                    Begin Your Journey
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 bg-obsidian-950">
            <div className="text-center mb-16 lg:mb-20">
                <span className="text-[10px] text-rich-gold uppercase tracking-[0.4em] font-bold mb-4 block">Your Selection</span>
                <h1 className="font-serif text-4xl lg:text-5xl text-pearl-100 underline underline-offset-[16px] decoration-rich-gold/20">Shopping Gallery</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                {/* Cart Items List */}
                <div className="lg:col-span-2">
                    <div className="flex justify-between items-center pb-6 border-b border-rich-gold/10 mb-8">
                        <span className="text-[10px] font-bold text-onyx-500 uppercase tracking-[0.2em]">
                            Selected Masterpiece
                        </span>
                        <span className="text-[10px] font-bold text-onyx-500 uppercase tracking-[0.2em] hidden sm:block">
                            Value
                        </span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-rich-gold/5">
                        <Link href="/shop" className="text-[10px] text-rich-gold uppercase tracking-[0.2em] font-bold hover:text-white transition-colors flex items-center gap-3">
                            <ShoppingBag className="w-3.5 h-3.5" /> Continue Exploring
                        </Link>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                    <CartSummary
                        subtotal={subtotal}
                        shipping={shipping}
                        discount={discount}
                        onCheckout={handleCheckout}
                    />
                </div>
            </div>
        </div>
    );
}
