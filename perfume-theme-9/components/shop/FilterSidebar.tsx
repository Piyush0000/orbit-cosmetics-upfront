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
        <aside className={`w-full ${className} relative z-10`}>
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <h3 className="font-serif text-2xl text-text-main italic tracking-tight">Aura <span className="not-italic opacity-30">Filters</span></h3>
                <button className="text-[9px] text-text-muted hover:text-dream-violet uppercase tracking-[0.3em] font-bold transition-colors">Neutralize All</button>
            </div>

            <div className="space-y-10">
                {/* Gender */}
                <div className="border-b border-white/5 pb-8">
                    <button
                        onClick={() => toggleSection('genders')}
                        className="flex items-center justify-between w-full mb-6 group/btn"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet group-hover/btn:text-text-main transition-colors">Ritual For</span>
                        {openSections.genders ? <ChevronUp className="w-4 h-4 text-white/20" /> : <ChevronDown className="w-4 h-4 text-white/20" />}
                    </button>
                    <AnimatePresence>
                        {openSections.genders && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.genders.map(gender => (
                                        <label key={gender} className="flex items-center gap-4 cursor-pointer group/item">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-white/10 rounded-full bg-white/5 checked:bg-dream-violet checked:border-dream-violet focus:ring-0 transition-all duration-500 appearance-none cursor-pointer" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_10px_white]" />
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted group-hover/item:text-text-main transition-colors">{gender}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Price */}
                <div className="border-b border-white/5 pb-8">
                    <button
                        onClick={() => toggleSection('priceRanges')}
                        className="flex items-center justify-between w-full mb-6 group/btn"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet group-hover/btn:text-text-main transition-colors">Value Range</span>
                        {openSections.priceRanges ? <ChevronUp className="w-4 h-4 text-white/20" /> : <ChevronDown className="w-4 h-4 text-white/20" />}
                    </button>
                    <AnimatePresence>
                        {openSections.priceRanges && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.priceRanges.map((range, idx) => (
                                        <label key={idx} className="flex items-center gap-4 cursor-pointer group/item">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-white/10 rounded-full bg-white/5 checked:bg-dream-violet checked:border-dream-violet focus:ring-0 transition-all duration-500 appearance-none cursor-pointer" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_10px_white]" />
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted group-hover/item:text-text-main transition-colors">{range.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Brands */}
                <div className="border-b border-white/5 pb-8">
                    <button
                        onClick={() => toggleSection('brands')}
                        className="flex items-center justify-between w-full mb-6 group/btn"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet group-hover/btn:text-text-main transition-colors">Maison</span>
                        {openSections.brands ? <ChevronUp className="w-4 h-4 text-white/20" /> : <ChevronDown className="w-4 h-4 text-white/20" />}
                    </button>
                    <AnimatePresence>
                        {openSections.brands && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.brands.map(brand => (
                                        <label key={brand} className="flex items-center gap-4 cursor-pointer group/item">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-white/10 rounded-full bg-white/5 checked:bg-dream-violet checked:border-dream-violet focus:ring-0 transition-all duration-500 appearance-none cursor-pointer" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_10px_white]" />
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted group-hover/item:text-text-main transition-colors">{brand}</span>
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
                        className="flex items-center justify-between w-full mb-6 group/btn"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet group-hover/btn:text-text-main transition-colors">Potency</span>
                        {openSections.concentrations ? <ChevronUp className="w-4 h-4 text-white/20" /> : <ChevronDown className="w-4 h-4 text-white/20" />}
                    </button>
                    <AnimatePresence>
                        {openSections.concentrations && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-4">
                                    {filters.concentrations.map(conc => (
                                        <label key={conc} className="flex items-center gap-4 cursor-pointer group/item">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-white/10 rounded-full bg-white/5 checked:bg-dream-violet checked:border-dream-violet focus:ring-0 transition-all duration-500 appearance-none cursor-pointer" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_10px_white]" />
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted group-hover/item:text-text-main transition-colors">{conc}</span>
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
