import Link from "next/link";
import { Facebook, Instagram, Twitter, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-white/40 pt-24 pb-12 border-t border-primary/10 mt-20 relative overflow-hidden backdrop-blur-3xl">
            {/* Prismatic Underglow */}
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-0 left-[-10%] w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Branding */}
                    <div className="md:col-span-5 space-y-10">
                        <Link href="/" className="text-3xl font-serif font-bold tracking-tight text-foreground flex items-center gap-4 group">
                            <Gem className="w-7 h-7 text-primary group-hover:rotate-180 transition-transform duration-1000" />
                            <span className="text-gradient">AURA PRISMATIC</span>
                        </Link>
                        <p className="text-muted-foreground text-[11px] font-medium leading-[2.2] max-w-sm">
                            Harnessing the refractive power of mineral science to create skincare that illuminates from within. Ethereal care, scientifically refined.
                        </p>
                        <div className="space-y-6">
                            <p className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">Connect With the Glow</p>
                            <div className="flex gap-4">
                                <Input placeholder="EMAIL@LIGHT.COM" className="bg-white/50 backdrop-blur-md border-primary/10 border-b-2 border-t-0 border-x-0 rounded-none text-[10px] tracking-widest focus:ring-0 focus:border-primary px-0 h-10" />
                                <Button className="rounded-full px-10 bg-primary text-primary-foreground shadow-lg shadow-primary/20 text-[10px] font-bold tracking-widest transition-all hover:scale-105 active:scale-95">
                                    INVITE
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <h4 className="font-bold text-primary text-[10px] tracking-[0.3em] uppercase mb-4">Discover</h4>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">Formulations</Link>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">Illuminators</Link>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">Crystals</Link>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">New Phase</Link>
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-6">
                        <h4 className="font-bold text-primary text-[10px] tracking-[0.3em] uppercase mb-4">Integrity</h4>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">Tracing</Link>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">Ethics</Link>
                        <Link href="#" className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors">Legality</Link>
                    </div>

                    <div className="md:col-span-3 flex flex-col gap-6">
                        <h4 className="font-bold text-primary text-[10px] tracking-[0.3em] uppercase mb-4">Network</h4>
                        <div className="flex gap-4 mt-2">
                            <Button variant="ghost" size="icon" className="hover:bg-primary/5 rounded-full border border-primary/10 p-2 transition-all"><Instagram className="w-4 h-4 text-primary" /></Button>
                            <Button variant="ghost" size="icon" className="hover:bg-primary/5 rounded-full border border-primary/10 p-2 transition-all"><Facebook className="w-4 h-4 text-primary" /></Button>
                            <Button variant="ghost" size="icon" className="hover:bg-primary/5 rounded-full border border-primary/10 p-2 transition-all"><Twitter className="w-4 h-4 text-primary" /></Button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-semibold text-muted-foreground/50 tracking-widest">
                    <p>&copy; 2026 Aura Prismatic. The light is yours.</p>
                    <div className="flex gap-12">
                        <Link href="#" className="hover:text-primary transition-colors">Molecular Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Phase</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
