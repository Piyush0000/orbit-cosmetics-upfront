"use client";

import { ChevronDown } from "lucide-react";

export default function ProductFilters() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            {/* Results Count */}
            <p className="text-xs text-pearl-300 uppercase tracking-widest">Showing <span className="text-rich-gold font-bold">9</span> Masterpieces</p>

            {/* Sort By */}
            <div className="flex items-center gap-4">
                <span className="text-xs text-pearl-300 uppercase tracking-widest font-medium">Sort By:</span>
                <div className="relative group">
                    <button className="flex items-center gap-3 text-[10px] font-bold text-pearl-100 hover:text-rich-gold transition-colors uppercase tracking-[0.2em] border border-rich-gold/20 px-4 py-2 bg-obsidian-900/50">
                        Recommended <ChevronDown className="w-4 h-4 text-rich-gold" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute right-0 top-full mt-2 w-52 bg-obsidian-900 shadow-2xl border border-rich-gold/20 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 backdrop-blur-md">
                        {["Recommended", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"].map(opt => (
                            <button key={opt} className="block w-full text-left px-6 py-2.5 text-[10px] uppercase font-bold tracking-[0.15em] text-pearl-300 hover:bg-obsidian-800 hover:text-rich-gold transition-colors">
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
