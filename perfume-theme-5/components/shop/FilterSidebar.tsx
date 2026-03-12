"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { filters } from "@/lib/data";

interface FilterSidebarProps {
    className?: string;
}

export default function FilterSidebar({ className = "" }: FilterSidebarProps) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        genders: true,
        brands: true,
        priceRanges: true,
        concentrations: false,
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className={`w-full ${className}`}>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-rich-gold/20">
                <h3 className="font-serif text-xl text-pearl-100">Filters</h3>
                <button className="text-[10px] text-pearl-300 hover:text-rich-gold uppercase tracking-[0.2em] transition-colors">Clear All</button>
            </div>

            <div className="space-y-8">
                {/* Gender */}
                <div className="border-b border-rich-gold/10 pb-8">
                    <button
                        onClick={() => toggleSection('genders')}
                        className="flex items-center justify-between w-full mb-6 group"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pearl-100 group-hover:text-rich-gold transition-colors">Gender</span>
                        {openSections.genders ? <ChevronUp className="w-4 h-4 text-rich-gold" /> : <ChevronDown className="w-4 h-4 text-rich-gold" />}
                    </button>
                    <AnimatePresence mode="wait">
                        {openSections.genders && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.genders.map(gender => (
                                        <label key={gender} className="flex items-center gap-4 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-onyx-600 rounded-sm bg-obsidian-800 checked:bg-rich-gold checked:border-rich-gold focus:ring-0 transition-all" />
                                            </div>
                                            <span className="text-xs text-pearl-300 group-hover:text-pearl-100 transition-colors uppercase tracking-widest">{gender}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Price */}
                <div className="border-b border-rich-gold/10 pb-8">
                    <button
                        onClick={() => toggleSection('priceRanges')}
                        className="flex items-center justify-between w-full mb-6 group"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pearl-100 group-hover:text-rich-gold transition-colors">Price Range</span>
                        {openSections.priceRanges ? <ChevronUp className="w-4 h-4 text-rich-gold" /> : <ChevronDown className="w-4 h-4 text-rich-gold" />}
                    </button>
                    <AnimatePresence mode="wait">
                        {openSections.priceRanges && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.priceRanges.map((range, idx) => (
                                        <label key={idx} className="flex items-center gap-4 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 border-onyx-600 rounded-sm bg-obsidian-800 checked:bg-rich-gold checked:border-rich-gold focus:ring-0 transition-all" />
                                            <span className="text-xs text-pearl-300 group-hover:text-pearl-100 transition-colors uppercase tracking-widest">{range.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Brands */}
                <div className="border-b border-rich-gold/10 pb-8">
                    <button
                        onClick={() => toggleSection('brands')}
                        className="flex items-center justify-between w-full mb-6 group"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pearl-100 group-hover:text-rich-gold transition-colors">Brand</span>
                        {openSections.brands ? <ChevronUp className="w-4 h-4 text-rich-gold" /> : <ChevronDown className="w-4 h-4 text-rich-gold" />}
                    </button>
                    <AnimatePresence mode="wait">
                        {openSections.brands && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="max-h-60 overflow-y-auto custom-scrollbar space-y-4 pr-2">
                                    {filters.brands.map(brand => (
                                        <label key={brand} className="flex items-center gap-4 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 border-onyx-600 rounded-sm bg-obsidian-800 checked:bg-rich-gold checked:border-rich-gold focus:ring-0 transition-all" />
                                            <span className="text-xs text-pearl-300 group-hover:text-pearl-100 transition-colors uppercase tracking-widest">{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Concentration */}
                <div className="pb-8">
                    <button
                        onClick={() => toggleSection('concentrations')}
                        className="flex items-center justify-between w-full mb-6 group"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-pearl-100 group-hover:text-rich-gold transition-colors">Concentration</span>
                        {openSections.concentrations ? <ChevronUp className="w-4 h-4 text-rich-gold" /> : <ChevronDown className="w-4 h-4 text-rich-gold" />}
                    </button>
                    <AnimatePresence mode="wait">
                        {openSections.concentrations && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.concentrations.map(conc => (
                                        <label key={conc} className="flex items-center gap-4 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 border-onyx-600 rounded-sm bg-obsidian-800 checked:bg-rich-gold checked:border-rich-gold focus:ring-0 transition-all" />
                                            <span className="text-xs text-pearl-300 group-hover:text-pearl-100 transition-colors uppercase tracking-widest">{conc}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </aside>
    );
}
