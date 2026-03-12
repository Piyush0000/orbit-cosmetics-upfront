"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useStoreContext } from "@/context/store-context";


const NAV_LINKS = [
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/unisex", label: "Unisex" },
    { href: "/luxury", label: "Luxury Collection" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/gift-sets", label: "Gift Sets" },
    { href: "/sale", label: "Sale", highlight: true },
];

const DEFAULT_ANNOUNCEMENTS = [
    "100% Authentic Perfumes",
    "Free Shipping Above ₹1499",
    "Long-Lasting Premium Fragrances",
    "Gift-Ready Packaging",
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [announcementIndex, setAnnouncementIndex] = useState(0);
    const { cartCount } = useCart();

    // Get store customization
    const { customization } = useStoreContext() || {};

    const storeName = customization?.storeName || "PERFUME UPFRONT";

    const announcements = customization?.announcementBar?.text
        ? [customization.announcementBar.text]
        : DEFAULT_ANNOUNCEMENTS;

    // Handle scroll for sticky header proper styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Rotate announcements
    useEffect(() => {
        const interval = setInterval(() => {
            setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [announcements.length]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-sand-200"
                        : "bg-transparent py-5 lg:py-6 border-b border-stone-900/5"
                )}
            >
                <div className="container mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex flex-col">
                            <Link href="/" className="text-2xl lg:text-3xl font-serif tracking-wider transition-colors text-stone-900">
                                {storeName}
                            </Link>
                            <span className="text-[9px] uppercase tracking-[0.3em] hidden sm:block mt-0.5 transition-colors text-stone-500">
                                Signature Scents for Every Moment
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-[11px] uppercase tracking-[0.2em] transition-all duration-300",
                                        // @ts-ignore
                                        link.highlight
                                            ? "px-5 py-2.5 bg-rose-gold text-white hover:bg-stone-900 shadow-sm"
                                            : "text-stone-600 hover:text-stone-900 font-medium"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Utilities */}
                        <div className="flex items-center gap-5 transition-colors text-stone-700">
                            <button className="p-2 hover:text-rose-gold transition-colors" aria-label="Search">
                                <Search className="w-5 h-5 stroke-[1.5]" />
                            </button>
                            <button className="p-2 hover:text-rose-gold transition-colors hidden sm:block" aria-label="Wishlist">
                                <Heart className="w-5 h-5 stroke-[1.5]" />
                            </button>
                            <Link href="/cart" className="p-2 hover:text-rose-gold transition-colors" aria-label="Cart">
                                <div className="relative">
                                    <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1.5 -right-1.5 bg-rose-gold text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <button className="p-2 hover:text-rose-gold transition-colors hidden sm:block" aria-label="Account">
                                <User className="w-5 h-5 stroke-[1.5]" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 hover:text-rose-gold"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Announcement Bar - Positioned below fixed header */}
            <div
                className={cn(
                    "fixed left-0 right-0 z-40 bg-stone-900 text-white text-center py-2.5 transition-all duration-500",
                    isScrolled ? "top-[70px] lg:top-[74px]" : "top-[85px] lg:top-[98px]"
                )}
            >
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase animate-fade-in">
                    {announcements[announcementIndex]}
                </p>
            </div>

            {/* Spacer to prevent content overlap */}
            <div className="h-[120px] lg:h-[140px]" />

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-sand-50 pt-32 px-8 lg:hidden animate-fade-in">
                    <nav className="flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-lg font-serif border-b border-sand-200 pb-4 flex justify-between items-center transition-colors",
                                    // @ts-ignore
                                    link.highlight ? "text-rose-gold" : "text-stone-900"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                                <ChevronDown className="-rotate-90 w-4 h-4 text-stone-300" />
                            </Link>
                        ))}
                        <div className="flex gap-8 mt-10 justify-center border-t border-sand-200 pt-10">
                            <Link href="/account" className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-sand-200 shadow-sm">
                                    <User className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                Account
                            </Link>
                            <Link href="/wishlist" className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-sand-200 shadow-sm">
                                    <Heart className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                Wishlist
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
