"use client";

import { ChevronDown } from "lucide-react";

export default function ProductFilters() {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
            {/* Results Count */}
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-text-main">
                Displaying <span className="text-dream-violet">9</span> Artifacts
            </p>

            {/* Sort By */}
            <div className="flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-main">Harmonize By:</span>
                <div className="relative group">
                    <button className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-text-main hover:text-dream-violet transition-all duration-500">
                        Recommended <ChevronDown className="w-4 h-4 text-text-main" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute right-0 top-full mt-4 w-56 glass-card border-white/5 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700 z-50 shadow-2xl backdrop-blur-3xl rounded-[32px]">
                        {["Recommended", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"].map(opt => (
                            <button key={opt} className="block w-full text-left px-6 py-3 text-[9px] uppercase tracking-[0.2em] font-bold text-text-main hover:bg-white/5 hover:text-dream-violet transition-all">
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
