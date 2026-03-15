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

    return (
        <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Ethereal Elements */}
            <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-dream-violet/5 blur-[120px] rounded-full animate-slow-zoom pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-dream-peach/5 blur-[120px] rounded-full animate-slow-zoom [animation-delay:4s] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {cartItems.length === 0 ? (
                    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 glass-card p-16 rounded-[40px_10px_40px_10px] border-white/5">
                        <div className="w-24 h-24 glass-panel border-none shadow-xl flex items-center justify-center mb-10 rounded-full bg-white/5 border-white/10 group">
                            <ShoppingBag className="w-10 h-10 text-dream-violet group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6 tracking-tighter italic">Your Cart Is <span className="not-italic opacity-30">Waiting</span></h2>
                        <p className="text-text-muted mb-10 max-w-md text-lg font-light leading-relaxed">
                            Your personal luxury collection is still a dream. Discover our signature scents to begin your journey.
                        </p>
                        <Link
                            href="/shop"
                            className="bg-white text-black py-5 px-12 text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-dream-violet transition-all duration-700 rounded-[30px_5px_30px_5px] shadow-2xl"
                        >
                            Explore Scents
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="mb-20 text-center">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-dream-violet font-bold mb-4 block animate-fade-in">Private Selection</span>
                            <h1 className="text-6xl md:text-7xl font-serif text-text-main tracking-tighter leading-none italic">
                                Shopping <span className="not-italic opacity-30 font-light">Cart</span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                            {/* Cart Items List */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="flex justify-between items-center pb-6 border-b border-white/5 px-4">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">Signature Product</span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted hidden sm:block">Subtotal Essence</span>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {cartItems.map(item => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onUpdateQuantity={handleUpdateQuantity}
                                            onRemove={handleRemove}
                                        />
                                    ))}
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
                    </>
                )}
            </div>
        </div>
    );
}
