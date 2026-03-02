import Link from "next/link";
import { Facebook, Instagram, Twitter, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-muted/30 pt-16 pb-8 border-t border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Newsletter */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-primary" />
                            LUMIÈRE
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Elevating your daily ritual with premium, botanical, and sustainable beauty essentials.
                        </p>
                        <div className="flex gap-2">
                            <Input placeholder="Enter your email" className="bg-background border-border/50 shadow-none rounded-full text-sm" />
                            <Button className="rounded-full px-6 shadow-sm">Subscribe</Button>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Shop</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skincare</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Makeup</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Haircare</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link>
                    </div>

                    {/* Links 2 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Support</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Follow Us</h4>
                        <div className="flex gap-3">
                            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full transition-colors"><Instagram className="w-5 h-5" /></Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full transition-colors"><Facebook className="w-5 h-5" /></Button>
                            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full transition-colors"><Twitter className="w-5 h-5" /></Button>
                        </div>
                    </div>
                </div>

                <Separator className="bg-border/40" />

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Lumière Beauty. All rights reserved.</p>
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
