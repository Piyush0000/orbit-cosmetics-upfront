"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ShieldCheck, RefreshCw, Truck, Lock } from "lucide-react";
import { useStoreContext } from "@/context/store-context";

export default function Footer() {
    const { customization } = useStoreContext() || {};
    const storeName = customization?.storeName || "PERFUME UPFRONT";

    return (
        <footer className="bg-obsidian-950 text-pearl-300 pt-16 pb-8 border-t border-rich-gold/20 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-rich-gold/50 to-transparent" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Trust Badges - Top of Footer */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-rich-gold/10 mb-12">
                    <div className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-14 h-14 rounded-full bg-obsidian-900 flex items-center justify-center text-rich-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] border border-rich-gold/20 group-hover:border-rich-gold/50 group-hover:bg-obsidian-800 transition-all duration-300">
                            <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-pearl-100 font-serif text-lg tracking-wide">100% Authentic</h4>
                            <p className="text-xs text-onyx-300 mt-1 uppercase tracking-wider">Direct from brands</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-14 h-14 rounded-full bg-obsidian-900 flex items-center justify-center text-rich-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] border border-rich-gold/20 group-hover:border-rich-gold/50 group-hover:bg-obsidian-800 transition-all duration-300">
                            <Truck className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-pearl-100 font-serif text-lg tracking-wide">Complimentary Delivery</h4>
                            <p className="text-xs text-onyx-300 mt-1 uppercase tracking-wider">On orders above ₹1499</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-14 h-14 rounded-full bg-obsidian-900 flex items-center justify-center text-rich-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] border border-rich-gold/20 group-hover:border-rich-gold/50 group-hover:bg-obsidian-800 transition-all duration-300">
                            <RefreshCw className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-pearl-100 font-serif text-lg tracking-wide">Easy Returns</h4>
                            <p className="text-xs text-onyx-300 mt-1 uppercase tracking-wider">7-day return policy</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-14 h-14 rounded-full bg-obsidian-900 flex items-center justify-center text-rich-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] border border-rich-gold/20 group-hover:border-rich-gold/50 group-hover:bg-obsidian-800 transition-all duration-300">
                            <Lock className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-pearl-100 font-serif text-lg tracking-wide">Secure Payments</h4>
                            <p className="text-xs text-onyx-300 mt-1 uppercase tracking-wider">Encrypted checkout</p>
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    {/* Brand Col */}
                    <div className="space-y-6 lg:pr-8">
                        <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rich-gold via-[#e8c86d] to-rich-gold">
                                {storeName}
                            </span>
                        </h3>
                        <p className="text-sm text-pearl-300 leading-relaxed font-light">
                            Discover your signature scent with our meticulously curated collection of luxury fragrances. Authentic, timeless, and delivered with care.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-obsidian-900 border border-rich-gold/20 text-pearl-300 hover:bg-rich-gold hover:border-rich-gold hover:text-obsidian-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-obsidian-900 border border-rich-gold/20 text-pearl-300 hover:bg-rich-gold hover:border-rich-gold hover:text-obsidian-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-obsidian-900 border border-rich-gold/20 text-pearl-300 hover:bg-rich-gold hover:border-rich-gold hover:text-obsidian-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"><Twitter className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-pearl-100 text-lg font-serif mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-light text-pearl-300">
                            <li><Link href="/about" className="hover:text-rich-gold transition-colors">About the Maison</Link></li>
                            <li><Link href="/contact" className="hover:text-rich-gold transition-colors">Client Services</Link></li>
                            <li><Link href="/shipping" className="hover:text-rich-gold transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/faq" className="hover:text-rich-gold transition-colors">FAQ</Link></li>
                            <li><Link href="/stores" className="hover:text-rich-gold transition-colors">Boutiques</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-pearl-100 text-lg font-serif mb-6 tracking-wide">Collections</h4>
                        <ul className="space-y-4 text-sm font-light text-pearl-300">
                            <li><Link href="/men" className="hover:text-rich-gold transition-colors">For Him</Link></li>
                            <li><Link href="/women" className="hover:text-rich-gold transition-colors">For Her</Link></li>
                            <li><Link href="/unisex" className="hover:text-rich-gold transition-colors">Genderless</Link></li>
                            <li><Link href="/luxury" className="hover:text-rich-gold transition-colors">Haute Parfumerie</Link></li>
                            <li><Link href="/gift-sets" className="hover:text-rich-gold transition-colors">The Art of Gifting</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-pearl-100 text-lg font-serif mb-6 tracking-wide">Get in Touch</h4>
                        <ul className="space-y-5 text-sm font-light text-pearl-300">
                            <li className="flex gap-4 items-start group">
                                <MapPin className="w-5 h-5 text-rich-gold/70 shrink-0 mt-0.5 group-hover:text-rich-gold transition-colors" />
                                <span className="leading-relaxed group-hover:text-pearl-100 transition-colors">123 Luxury Avenue, Perfume District, PC 560001</span>
                            </li>
                            <li className="flex gap-4 items-center group">
                                <Phone className="w-5 h-5 text-rich-gold/70 shrink-0 group-hover:text-rich-gold transition-colors" />
                                <span className="group-hover:text-pearl-100 transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex gap-4 items-center group">
                                <Mail className="w-5 h-5 text-rich-gold/70 shrink-0 group-hover:text-rich-gold transition-colors" />
                                <span className="group-hover:text-pearl-100 transition-colors">concierge@perfumeupfront.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-rich-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-onyx-400">
                    <p>© {new Date().getFullYear()} {storeName}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-rich-gold transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-rich-gold transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
