"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { SearchOverlay } from "@/components/search/SearchOverlay";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 10);
        });
    }

    const navLinks = [
        { name: "Shop", href: "/shop" },
        { name: "Best Sellers", href: "/#bestsellers" },
        { name: "Concerns", href: "/concerns" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-700 ${isScrolled ? "bg-white/60 backdrop-blur-2xl border-b border-white/40 shadow-[0_8px_32px_rgba(110,80,250,0.06)]" : "bg-transparent"}`}>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Mobile Menu */}
                    <div className="flex items-center md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full bg-white/40 backdrop-blur-md border border-white/60">
                                    <Menu className="h-5 w-5 text-primary" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full sm:w-[400px] flex flex-col p-8 bg-white/95 backdrop-blur-3xl border-r border-white/40">
                                <SheetHeader className="text-left px-0 border-b border-primary/10 pb-8">
                                    <SheetTitle className="font-serif text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                                        <Gem className="w-6 h-6 text-primary" />
                                        AURA
                                    </SheetTitle>
                                    <SheetDescription className="text-[11px] font-medium text-muted-foreground mt-2">
                                        Ethereal Beauty Essentials
                                    </SheetDescription>
                                </SheetHeader>

                                <nav className="flex flex-col gap-6 mt-12">
                                    {navLinks.map((link) => (
                                        <SheetClose key={link.name} asChild>
                                            <Link
                                                href={link.href}
                                                className="text-2xl font-serif text-foreground/80 hover:text-primary transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-8 border-t border-primary/10 text-[10px] font-medium text-muted-foreground/60">
                                    <p>© 2026 Aura Prismatic.</p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo - Desktop Left */}
                    <div className="hidden md:flex items-center">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground flex items-center gap-3 group">
                            <Gem className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                            <span>AURA</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-12 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-[11px] font-semibold text-foreground/60 hover:text-primary transition-all relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hidden sm:flex rounded-full hover:bg-primary/5 transition-all duration-500 group"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="h-4 w-4 text-foreground/60 group-hover:text-primary" />
                        </Button>
                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full bg-white/80 hover:bg-white text-primary border border-primary/10 shadow-lg shadow-primary/5 transition-all duration-500 relative group"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag className="h-4 w-4" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
