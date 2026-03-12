"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useStoreContext } from "@/context/store-context";

export function Footer() {
    const context = useStoreContext() as any;
    const customization = context?.customization;

    const footerData = customization?.footerSection || {};
    const logoText = footerData.logoText || customization?.headerSection?.logoText || customization?.storeName || "AURA";
    const copyrightText = footerData.copyrightText || `© ${new Date().getFullYear()} ${logoText}. All rights reserved.`;

    const socialIcons: any = { Instagram, Facebook, Twitter };
    
    const DEFAULT_SOCIAL_LINKS = [
        { platform: "Instagram", href: "#" },
        { platform: "Facebook", href: "#" },
        { platform: "Twitter", href: "#" },
    ];

    const socialLinks = footerData.socialLinks?.map((link: any) => ({
        platform: link.platform || link.name || "Instagram",
        href: link.url || link.href || "#",
    })) || DEFAULT_SOCIAL_LINKS;

    return (
        <footer className="bg-gradient-to-b from-muted/20 to-muted/40 pt-16 pb-8 border-t border-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-foreground flex items-center gap-2.5">
                            <Gem className="w-5 h-5 text-primary" />
                            {logoText}
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Indulge in luxurious, clean beauty essentials crafted for your radiant self.
                        </p>
                        <div className="flex gap-2">
                            <Input placeholder="Enter your email" className="bg-background/80 border-border/40 shadow-none rounded-full text-sm" />
                            <Button className="rounded-full px-6 shadow-md shadow-primary/15">Subscribe</Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">Shop</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skincare</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Makeup</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Haircare</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">Support</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">Follow Us</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((link: any, i: number) => {
                                const Icon = socialIcons[link.platform] || Instagram;
                                return (
                                    <Button key={i} variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/8 rounded-full transition-all">
                                        <Icon className="w-5 h-5" />
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <Separator className="bg-border/30" />

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>{copyrightText}</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
