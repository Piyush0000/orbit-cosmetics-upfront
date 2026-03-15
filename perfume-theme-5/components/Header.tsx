"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
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
                        ? "bg-obsidian-900/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3 border-b border-rich-gold/10"
                        : "bg-transparent py-5 lg:py-6 border-b border-pearl-100/10"
                )}
            >
                <div className="container mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex flex-col">
                            <Link href="/" className="text-2xl lg:text-3xl font-serif tracking-widest transition-colors text-pearl-100 uppercase">
                                {storeName}
                            </Link>
                            <span className="text-[9px] uppercase tracking-[0.3em] hidden sm:block mt-0.5 transition-colors text-rich-gold/80 font-medium">
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
                                            ? "px-5 py-2.5 bg-rich-gold text-obsidian-950 hover:bg-white shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] font-semibold"
                                            : "text-pearl-300 hover:text-rich-gold font-medium"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Utilities */}
                        <div className="flex items-center gap-5 transition-colors text-pearl-100">
                            <button className="p-2 hover:text-rich-gold transition-colors" aria-label="Search">
                                <Search className="w-5 h-5 stroke-[1.5]" />
                            </button>
                            <button className="p-2 hover:text-rich-gold transition-colors hidden sm:block" aria-label="Wishlist">
                                <Heart className="w-5 h-5 stroke-[1.5]" />
                            </button>
                            <Link href="/cart" className="p-2 hover:text-rich-gold transition-colors" aria-label="Cart">
                                <div className="relative">
                                    <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1.5 -right-1.5 bg-rich-gold text-obsidian-950 text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                            </Link>


                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 hover:text-rich-gold"
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
                    "fixed left-0 right-0 z-40 bg-obsidian-800 border-b border-rich-gold/20 text-pearl-100 text-center py-2.5 transition-all duration-500",
                    isScrolled ? "top-[70px] lg:top-[74px]" : "top-[85px] lg:top-[98px]"
                )}
            >
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase animate-fade-in text-rich-gold">
                    {announcements[announcementIndex]}
                </p>
            </div>

            {/* Spacer to prevent content overlap */}
            <div className="h-[120px] lg:h-[140px]" />

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-obsidian-900 pt-32 px-8 lg:hidden animate-fade-in overflow-y-auto pb-10">
                    <div className="absolute top-6 right-6">
                        <button
                            className="p-2 text-pearl-100 hover:text-rich-gold"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8 stroke-[1.5]" />
                        </button>
                    </div>

                    <div className="mb-10 text-center">
                        <Link href="/" className="text-3xl font-serif tracking-widest text-pearl-100 uppercase" onClick={() => setMobileMenuOpen(false)}>
                            {storeName}
                        </Link>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-lg font-serif border-b border-onyx-600 pb-4 flex justify-between items-center transition-colors",
                                    // @ts-ignore
                                    link.highlight ? "text-rich-gold" : "text-pearl-100"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                                <ChevronDown className="-rotate-90 w-4 h-4 text-onyx-400" />
                            </Link>
                        ))}
                        <div className="flex gap-8 mt-10 justify-center border-t border-onyx-600 pt-10">

                            <Link href="/wishlist" className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-pearl-300 hover:text-rich-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                <div className="w-12 h-12 bg-obsidian-800 rounded-full flex items-center justify-center border border-rich-gold/30 shadow-sm">
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
