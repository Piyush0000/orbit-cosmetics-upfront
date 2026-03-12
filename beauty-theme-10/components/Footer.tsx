"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Leaf, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useStoreContext } from "@/context/store-context";

export function Footer() {
    const context = useStoreContext() as any;
    const customization = context?.customization;

    const footerData = customization?.footerSection || {};
    const logoText = footerData.logoText || (customization?.headerSection?.logoText || "VERIDIAN");
    const newsletterTitle = footerData.newsletterTitle || "Join our botanical inner circle";
    const newsletterDescription = footerData.newsletterDescription || "Receive artisanal skincare rituals, botanical insights, and early access to our limited harvests.";
    const copyrightText = footerData.copyrightText || `© ${new Date().getFullYear()} ${logoText} Zen Botanical. Crafted for Purity.`;

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
        <footer className="bg-primary/5 pt-24 pb-12 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Branding & Newsletter */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-10">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <span className="font-serif text-3xl font-bold tracking-tight text-foreground">
                                {logoText}
                            </span>
                        </Link>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-foreground">{newsletterTitle}</h4>
                            <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-sm">
                                {newsletterDescription}
                            </p>
                            <div className="flex gap-3 max-w-md p-1.5 bg-background border border-primary/10 rounded-full focus-within:border-primary/30 transition-all shadow-sm">
                                <Input
                                    placeholder="your@email.com"
                                    className="bg-transparent border-none focus-visible:ring-0 shadow-none px-6 text-sm"
                                />
                                <Button className="rounded-full px-8 bg-primary text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                                    JOIN
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4 lg:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.25em]">Rituals</h4>
                        <nav className="flex flex-col gap-5">
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Daily Cleanse</Link>
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Hydration Series</Link>
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Night Recovery</Link>
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Gifting</Link>
                        </nav>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.25em]">Company</h4>
                        <nav className="flex flex-col gap-5">
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Ethos</Link>
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Botanical Science</Link>
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Stockists</Link>
                            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">Support</Link>
                        </nav>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3 space-y-8">
                        <h4 className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.25em]">Follow</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link: any, i: number) => {
                                const Icon = socialIcons[link.platform] || Instagram;
                                return (
                                    <Button key={i} variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-background border border-primary/5 hover:bg-primary/5 hover:text-primary transition-all">
                                        <Icon className="w-5 h-5" />
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-primary/40 uppercase tracking-widest">
                    <p>{copyrightText}</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
