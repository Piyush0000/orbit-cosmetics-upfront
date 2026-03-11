"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { SearchOverlay } from "@/components/search/SearchOverlay";

import { useStoreContext } from "@/context/store-context";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const context = useStoreContext() as any;
    const customization = context?.customization;

    const navData = customization?.headerSection || {};
    const logoText = navData.logoText || "VERIDIAN";
    const tagline = navData.tagline || "Botanical Excellence";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = navData.navLinks || [
        { name: "Shop All", href: "/shop" },
        { name: "Rituals", href: "/concerns" },
        { name: "Botanicals", href: "/shop" },
        { name: "About", href: "/about" },
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-700 ${isScrolled
                ? "py-4 bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-sm"
                : "py-6 bg-transparent"
                }`}
        >
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

                {/* Mobile Menu */}
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/5">
                                <Menu className="h-6 w-6 text-primary" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] border-r border-primary/10 bg-background/95 backdrop-blur-3xl">
                            <SheetHeader className="text-left px-0">
                                <SheetTitle className="font-serif text-3xl font-bold flex items-center gap-2 text-primary">
                                    <Leaf className="w-6 h-6" /> {logoText}
                                </SheetTitle>
                                <SheetDescription className="text-xs text-muted-foreground/60 tracking-widest uppercase mt-2">
                                    {tagline}
                                </SheetDescription>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 mt-12">
                                {navLinks.map((link: any) => (
                                    <SheetClose key={link.name} asChild>
                                        <Link href={link.href} className="text-xl font-serif text-foreground/80 hover:text-primary transition-all">
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Leaf className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {logoText}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link: any) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[13px] font-medium text-foreground/60 hover:text-primary transition-all relative group tracking-wide"
                        >
                            {link.name}
                            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary/40 group-hover:w-full transition-all duration-500"></span>
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-primary/5 text-foreground/60 hover:text-primary transition-all"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-primary/5 text-foreground/60 hover:text-primary transition-all relative"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingBag className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-[9px] font-bold flex items-center justify-center rounded-full text-white shadow-lg shadow-primary/20">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                </div>
            </div>
        </header>
    );
}
