"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useStoreContext } from "@/context/store-context";


const NAV_LINKS = [
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/unisex", label: "Unisex" },
    { href: "/luxury", label: "Luxury" },
    { href: "/new-arrivals", label: "New" },
    { href: "/gift-sets", label: "Gifts" },
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
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
            <div
                className={cn(
                    "pointer-events-auto transition-all duration-500 rounded-[50px] px-4 md:px-8 py-3 flex items-center justify-between w-full max-w-7xl shadow-xl border border-black/5",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-2xl"
                        : "bg-white/40 backdrop-blur-md"
                )}
            >
                {/* Logo Area */}
                <div className="flex-1 min-w-0">
                    <Link href="/" className="text-lg lg:text-xl font-serif tracking-[0.1em] lg:tracking-[0.2em] uppercase text-text-main leading-none font-bold truncate block">
                        {storeName}
                    </Link>
                    <span className="mono-label text-[7px] lg:text-[8px] mt-0.5 lg:mt-1 text-text-muted block truncate">
                        Botanical Essence
                    </span>
                </div>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden lg:flex items-center gap-8 justify-center flex-none mx-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "mono-label transition-all duration-300 relative group text-xs uppercase tracking-[0.15em] whitespace-nowrap",
                                    // @ts-ignore
                                    link.highlight
                                        ? "px-6 py-2 bg-dream-lavender text-text-main hover:bg-black hover:text-white rounded-full font-bold shadow-sm"
                                        : "text-text-main font-semibold hover:text-dream-violet"
                                )}
                            >
                                {link.label}
                                {/* Underline effect */}
                                {!link.highlight && (
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-dream-violet transition-all duration-300 group-hover:w-full" />
                                )}
                            </Link>
                        ))}
                </nav>

                {/* Utilities - Right */}
                <div className="flex-none flex items-center gap-0.5 sm:gap-2 text-text-main ml-2">
                    <button className="p-1.5 sm:p-2 hover:text-dream-violet transition-colors flex-shrink-0" aria-label="Search">
                        <Search className="w-5 h-5 stroke-[1.5]" />
                    </button>
                    <Link href="/cart" className="p-1.5 sm:p-2 hover:text-dream-violet transition-colors flex-shrink-0" aria-label="Cart">
                        <div className="relative">
                            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-dream-violet text-black text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </Link>

                    {/* Mobile Menu Button - Ensure it's not clipped */}
                    <button
                        className="lg:hidden p-1.5 sm:p-2 hover:text-dream-violet flex items-center justify-center flex-shrink-0"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl pt-32 px-8 lg:hidden animate-fade-in pointer-events-auto flex flex-col items-center">
                    {/* Close Button Inside Overlay */}
                    <button 
                        className="absolute top-10 right-10 p-4 bg-white/20 rounded-full shadow-lg border border-white/40 hover:bg-white/40 transition-all text-text-main"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X className="w-8 h-8 stroke-[1.5]" />
                    </button>

                    <nav className="flex flex-col gap-8 w-full max-w-sm">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-serif border-b border-lavender-100 pb-6 flex justify-between items-center transition-colors hover:text-dream-violet",
                                    // @ts-ignore
                                    link.highlight ? "text-dream-violet font-bold" : "text-text-main"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="uppercase tracking-widest">{link.label}</span>
                                <ChevronDown className="-rotate-90 w-5 h-5 opacity-70" />
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
