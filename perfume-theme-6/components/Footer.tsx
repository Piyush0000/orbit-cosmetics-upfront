"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ShieldCheck, RefreshCw, Truck, Lock } from "lucide-react";
import { useStoreContext } from "@/context/store-context";

export default function Footer() {
    const { customization } = useStoreContext() || {};
    const storeName = customization?.storeName || "PERFUME UPFRONT";

    return (
        <footer className="bg-sand-100 text-stone-600 pt-16 pb-8 border-t border-sand-200">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Trust Badges - Top of Footer */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-sand-200 mb-12">
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-rose-gold shadow-sm border border-sand-200">
                            <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-stone-900 font-serif text-lg">100% Authentic</h4>
                            <p className="text-xs text-stone-500 mt-1">Direct from brands</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-rose-gold shadow-sm border border-sand-200">
                            <Truck className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-stone-900 font-serif text-lg">Complimentary Delivery</h4>
                            <p className="text-xs text-stone-500 mt-1">On orders above ₹1499</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-rose-gold shadow-sm border border-sand-200">
                            <RefreshCw className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-stone-900 font-serif text-lg">Easy Returns</h4>
                            <p className="text-xs text-stone-500 mt-1">7-day return policy</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-rose-gold shadow-sm border border-sand-200">
                            <Lock className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                            <h4 className="text-stone-900 font-serif text-lg">Secure Payments</h4>
                            <p className="text-xs text-stone-500 mt-1">Encrypted checkout</p>
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    {/* Brand Col */}
                    <div className="space-y-6 lg:pr-8">
                        <h3 className="text-2xl font-serif text-stone-900 tracking-wider uppercase">{storeName}</h3>
                        <p className="text-sm text-stone-500 leading-relaxed font-light">
                            Discover your signature scent with our meticulously curated collection of luxury fragrances. Authentic, timeless, and delivered with care.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-sand-200 text-stone-600 hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-sand-200 text-stone-600 hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-sand-200 text-stone-600 hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm"><Twitter className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-stone-900 text-lg font-serif mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><Link href="/about" className="hover:text-rose-gold transition-colors">About the Maison</Link></li>
                            <li><Link href="/contact" className="hover:text-rose-gold transition-colors">Client Services</Link></li>
                            <li><Link href="/shipping" className="hover:text-rose-gold transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/faq" className="hover:text-rose-gold transition-colors">FAQ</Link></li>
                            <li><Link href="/stores" className="hover:text-rose-gold transition-colors">Boutiques</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-stone-900 text-lg font-serif mb-6 tracking-wide">Collections</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><Link href="/men" className="hover:text-rose-gold transition-colors">For Him</Link></li>
                            <li><Link href="/women" className="hover:text-rose-gold transition-colors">For Her</Link></li>
                            <li><Link href="/unisex" className="hover:text-rose-gold transition-colors">Genderless</Link></li>
                            <li><Link href="/luxury" className="hover:text-rose-gold transition-colors">Haute Parfumerie</Link></li>
                            <li><Link href="/gift-sets" className="hover:text-rose-gold transition-colors">The Art of Gifting</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-stone-900 text-lg font-serif mb-6 tracking-wide">Get in Touch</h4>
                        <ul className="space-y-5 text-sm font-light">
                            <li className="flex gap-4 items-start">
                                <MapPin className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">123 Luxury Avenue, Perfume District, PC 560001</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone className="w-5 h-5 text-stone-400 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail className="w-5 h-5 text-stone-400 shrink-0" />
                                <span>concierge@perfumeupfront.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-sand-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-stone-500">
                    <p>© {new Date().getFullYear()} {storeName}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-stone-900 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-stone-900 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
