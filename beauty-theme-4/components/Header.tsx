"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { useStoreContext } from "@/context/store-context";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Add scroll event listener to toggle background style if needed
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 10);
        });
    }

    const context = useStoreContext() as any;
    const customization = context?.customization;

    const navData = customization?.headerSection || {};
    const logoText = navData.logoText || customization?.storeName || "LUMIÈRE";
    const tagline = navData.tagline || "Botanical Beauty & Skincare";

    const DEFAULT_NAV_LINKS = [
        { name: "Shop", href: "/shop" },
        { name: "Best Sellers", href: "/#bestsellers" },
        { name: "Concerns", href: "/concerns" },
        { name: "About Us", href: "/about" },
    ];

    const navLinks = navData.navLinks?.map((link: any) => ({
        href: link.href || link.url || "#",
        name: link.name || link.label || "Link",
    })) || DEFAULT_NAV_LINKS;

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-lg shadow-sm border-b border-border/50" : "bg-transparent"}`}>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Mobile Menu */}
                    <div className="flex items-center md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] flex flex-col p-6 bg-background">
                                <SheetHeader className="text-left px-0">
                                    <SheetTitle className="font-serif text-2xl font-bold flex items-center gap-2">
                                        <Leaf className="w-5 h-5 text-primary" />
                                        {logoText}
                                    </SheetTitle>
                                    <SheetDescription className="text-xs text-muted-foreground">
                                        {tagline}
                                    </SheetDescription>
                                </SheetHeader>

                                <nav className="flex flex-col gap-5 mt-10">
                                    {navLinks.map((link: any) => (
                                        <SheetClose key={link.name} asChild>
                                            <Link
                                                href={link.href}
                                                className="text-lg font-medium hover:text-primary transition-colors border-b border-border/30 pb-3"
                                            >
                                                {link.name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <div className="mt-auto pb-8 text-sm text-muted-foreground">
                                    <p>© {new Date().getFullYear()} {logoText}.</p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-center md:justify-start md:flex-none">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-primary" />
                            {logoText}
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link: any) => (
                            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hidden sm:flex hover:bg-primary/10 rounded-full hover:text-primary transition-colors"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-primary/10 rounded-full relative hover:text-primary transition-colors"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center rounded-full animate-in zoom-in shadow-sm">
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
