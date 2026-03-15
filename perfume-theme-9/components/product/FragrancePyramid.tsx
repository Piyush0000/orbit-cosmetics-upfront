"use client";

import { motion } from "framer-motion";

interface FragrancePyramidProps {
    topNotes: string[];
    middleNotes: string[];
    baseNotes: string[];
}

export default function FragrancePyramid({ topNotes, middleNotes, baseNotes }: FragrancePyramidProps) {
    return (
        <div className="py-24 glass-card border-white/5 rounded-[40px_10px_40px_10px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-dream-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-12 z-10">

                {/* Top Notes */}
                <div className="text-center relative w-full">
                    <span className="absolute left-[-40px] md:left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet rotate-[-90deg] hidden md:block">Top Presence</span>
                    <span className="md:hidden block mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet">Top Presence</span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center gap-6"
                    >
                        {topNotes.map((note, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group/note">
                                <div className="w-20 h-20 rounded-[25px_5px_25px_5px] glass-card flex items-center justify-center border-white/10 group-hover/note:border-dream-violet group-hover/note:bg-dream-violet transition-all duration-700 shadow-2xl group-hover/note:shadow-dream-violet/40">
                                    <span className="font-serif text-2xl text-text-main group-hover/note:text-black transition-colors">{note[0]}</span>
                                </div>
                                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{note}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Connecting Line */}
                <div className="w-[1px] h-12 bg-gradient-to-b from-dream-violet/50 to-transparent"></div>

                {/* Middle Notes */}
                <div className="text-center relative w-full">
                    <span className="absolute left-[-40px] md:left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet rotate-[-90deg] hidden md:block">Heart Spirit</span>
                    <span className="md:hidden block mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet">Heart Spirit</span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center gap-10"
                    >
                        {middleNotes.map((note, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group/note">
                                <div className="w-24 h-24 rounded-[30px_5px_30px_5px] glass-card flex items-center justify-center border-white/10 group-hover/note:border-dream-violet group-hover/note:bg-dream-violet transition-all duration-700 shadow-2xl group-hover/note:shadow-dream-violet/40">
                                    <span className="font-serif text-3xl text-text-main group-hover/note:text-black transition-colors">{note[0]}</span>
                                </div>
                                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{note}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Connecting Line */}
                <div className="w-[1px] h-12 bg-gradient-to-b from-dream-violet/50 to-transparent"></div>

                {/* Base Notes */}
                <div className="text-center relative w-full">
                    <span className="absolute left-[-40px] md:left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet rotate-[-90deg] hidden md:block">Base Essence</span>
                    <span className="md:hidden block mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet">Base Essence</span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center gap-12"
                    >
                        {baseNotes.map((note, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group/note">
                                <div className="w-28 h-28 rounded-[35px_5px_35px_5px] glass-card flex items-center justify-center border-white/10 group-hover/note:border-dream-violet group-hover/note:bg-dream-violet transition-all duration-700 shadow-2xl group-hover/note:shadow-dream-violet/40">
                                    <span className="font-serif text-4xl text-text-main group-hover/note:text-black transition-colors">{note[0]}</span>
                                </div>
                                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{note}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
