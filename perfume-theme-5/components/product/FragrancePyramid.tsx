"use client";

import { motion } from "framer-motion";

interface FragrancePyramidProps {
    topNotes: string[];
    middleNotes: string[];
    baseNotes: string[];
}

export default function FragrancePyramid({ topNotes, middleNotes, baseNotes }: FragrancePyramidProps) {
    return (
        <div className="py-20 bg-obsidian-900 border border-rich-gold/10 relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rich-gold/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rich-gold/5 rounded-full blur-[100px] -ml-48 -mb-48" />
            
            <div className="text-center mb-20 relative z-10">
                <span className="text-[10px] text-rich-gold uppercase tracking-[0.4em] font-bold mb-4 block">The Composition</span>
                <h3 className="font-serif text-4xl text-pearl-100 mb-6 underline underline-offset-[12px] decoration-rich-gold/20">Olfactory Pyramid</h3>
                <p className="text-sm text-onyx-400 max-w-lg mx-auto italic font-light tracking-wide">A cinematic progression of scents, meticulously layered to reveal a complex and intoxicating masterpiece.</p>
            </div>

            <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-12 z-10">
                
                {/* Pyramid Shape Decoration (CSS triangle/lines) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-b-[600px] border-b-rich-gold/5 pointer-events-none" />

                {/* Top Notes */}
                <div className="text-center relative w-full group/section">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-8 px-4 py-1.5 border border-rich-gold/20 bg-obsidian-950/50">Top Notes • The Opening</span>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center flex-wrap gap-8"
                        >
                            {topNotes.map((note, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group/note">
                                    <div className="w-16 h-16 rounded-full bg-obsidian-950 flex items-center justify-center border border-rich-gold/10 group-hover/note:border-rich-gold shadow-lg transition-all duration-700 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-rich-gold/10 to-transparent opacity-0 group-hover/note:opacity-100 transition-opacity duration-700" />
                                        <span className="font-serif text-2xl text-onyx-500 group-hover/note:text-rich-gold transition-colors duration-700 relative z-10">{note[0]}</span>
                                    </div>
                                    <span className="text-[11px] text-pearl-100 font-bold uppercase tracking-[0.15em] opacity-60 group-hover/note:opacity-100 transition-opacity duration-700">{note}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Connecting Line */}
                <div className="w-px h-16 bg-gradient-to-b from-rich-gold/40 to-rich-gold/10"></div>

                {/* Middle Notes */}
                <div className="text-center relative w-full group/section">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-8 px-4 py-1.5 border border-rich-gold/20 bg-obsidian-950/50">Heart Notes • The Soul</span>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center flex-wrap gap-10"
                        >
                            {middleNotes.map((note, i) => (
                                <div key={i} className="flex flex-col items-center gap-5 group/note">
                                    <div className="w-20 h-20 rounded-full bg-obsidian-950 flex items-center justify-center border border-rich-gold/15 group-hover/note:border-rich-gold shadow-xl transition-all duration-700 relative overflow-hidden lg:scale-110">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-rich-gold/15 to-transparent opacity-0 group-hover/note:opacity-100 transition-opacity duration-700" />
                                        <span className="font-serif text-3xl text-onyx-500 group-hover/note:text-rich-gold transition-colors duration-700 relative z-10">{note[0]}</span>
                                    </div>
                                    <span className="text-[11px] text-pearl-100 font-bold uppercase tracking-[0.15em] opacity-60 group-hover/note:opacity-100 transition-opacity duration-700">{note}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Connecting Line */}
                <div className="w-px h-16 bg-gradient-to-b from-rich-gold/10 to-rich-gold/40"></div>

                {/* Base Notes */}
                <div className="text-center relative w-full group/section">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-8 px-4 py-1.5 border border-rich-gold/20 bg-obsidian-950/50">Base Notes • The Legacy</span>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex justify-center flex-wrap gap-12"
                        >
                            {baseNotes.map((note, i) => (
                                <div key={i} className="flex flex-col items-center gap-6 group/note">
                                    <div className="w-24 h-24 rounded-full bg-obsidian-950 flex items-center justify-center border border-rich-gold/20 group-hover/note:border-rich-gold shadow-2xl transition-all duration-700 relative overflow-hidden lg:scale-125">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-rich-gold/20 to-transparent opacity-0 group-hover/note:opacity-100 transition-opacity duration-700" />
                                        <span className="font-serif text-4xl text-onyx-500 group-hover/note:text-rich-gold transition-colors duration-700 relative z-10">{note[0]}</span>
                                    </div>
                                    <span className="text-[11px] text-pearl-100 font-bold uppercase tracking-[0.15em] opacity-60 group-hover/note:opacity-100 transition-opacity duration-700">{note}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
