"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll event listener to toggle background style if needed
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
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Mobile Menu */}
                    <div className="flex items-center md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px]">
                                <nav className="flex flex-col gap-4 mt-8">
                                    {navLinks.map((link) => (
                                        <Link key={link.name} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-foreground">
                            LUMIÈRE<span className="text-primary">.</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-secondary rounded-full">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-secondary rounded-full">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-secondary rounded-full relative">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-[10px] text-primary-foreground font-bold flex items-center justify-center rounded-full">
                                2
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
