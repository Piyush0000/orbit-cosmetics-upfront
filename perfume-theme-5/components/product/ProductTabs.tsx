"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductTabsProps {
    product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'reviews'>('description');

    return (
        <div className="mt-24">
            {/* Tabs Header */}
            <div className="flex justify-center border-b border-rich-gold/10 mb-16 overflow-x-auto custom-scrollbar">
                {['description', 'ingredients', 'reviews'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-10 py-6 text-[10px] font-bold uppercase tracking-[0.3em] relative transition-all duration-500 whitespace-nowrap ${activeTab === tab ? "text-rich-gold" : "text-onyx-500 hover:text-pearl-100"
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rich-gold to-transparent"
                            />
                        )}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTabGlow"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-rich-gold/20 blur-lg rounded-full"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    {activeTab === 'description' && (
                        <motion.div
                            key="desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-10 text-pearl-300 leading-loose"
                        >
                            <div className="relative p-8 lg:p-12 border border-rich-gold/10 bg-obsidian-900 shadow-2xl">
                                <span className="absolute -top-4 left-8 px-4 py-1 bg-obsidian-950 border border-rich-gold/20 text-[9px] font-bold uppercase tracking-[0.3em] text-rich-gold">The Narrative</span>
                                <p className="text-lg lg:text-xl font-serif text-pearl-100 italic leading-snug mb-8">
                                    "{product.description}"
                                </p>
                                <p className="font-light opacity-80 first-letter:text-5xl first-letter:font-serif first-letter:text-rich-gold first-letter:mr-3 first-letter:float-left">
                                    Immerse yourself in the world of luxury with {product.name}. Created by master perfumers,
                                    this fragrance is designed to leave a lasting impression. The bottle itself is a work of art,
                                    reflecting the elegance and sophistication of the scent inside. Every note is a testament to 
                                    excellence, crafted with rare materials sourced from the most remote corners of the world.
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 mt-12">
                                <div className="bg-obsidian-900 p-8 border border-rich-gold/10 group hover:border-rich-gold/30 transition-all duration-500 shadow-xl">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-6 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rich-gold animate-pulse" /> Ideal Occasions
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {product.occasion.map(occ => (
                                            <span key={occ} className="px-4 py-2 bg-obsidian-950 border border-rich-gold/10 text-[10px] uppercase font-bold tracking-widest text-pearl-100 group-hover:border-rich-gold/20 transition-colors shadow-inner">{occ}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-obsidian-900 p-8 border border-rich-gold/10 group hover:border-rich-gold/30 transition-all duration-500 shadow-xl">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-6 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rich-gold animate-pulse" /> Optimal Seasons
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {product.season.map(seas => (
                                            <span key={seas} className="px-4 py-2 bg-obsidian-950 border border-rich-gold/10 text-[10px] uppercase font-bold tracking-widest text-pearl-100 group-hover:border-rich-gold/20 transition-colors shadow-inner">{seas}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'ingredients' && (
                        <motion.div
                            key="ing"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="text-pearl-300 leading-loose text-center py-10"
                        >
                            <div className="max-w-3xl mx-auto p-12 lg:p-16 border border-rich-gold/10 bg-obsidian-900 relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-obsidian-950 border border-rich-gold/20 text-[10px] font-bold uppercase tracking-[0.4em] text-rich-gold">Noble Formula</div>
                                <p className="font-serif text-2xl text-pearl-100 italic mb-10 opacity-60">"Transparency in every drop."</p>
                                <p className="text-lg tracking-wide font-light leading-relaxed">
                                    Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol,
                                    Geraniol, Coumarin, Citral, Farnesol, Eugenol.
                                </p>
                                <div className="mt-12 pt-10 border-t border-rich-gold/5">
                                    <p className="text-[10px] text-onyx-500 uppercase tracking-widest leading-relaxed">
                                        Please be aware that ingredient lists may evolve. 
                                        Refer to the physical packaging for the definitive composition.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                        <motion.div
                            key="rev"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col gap-10">
                                {product.reviewData && product.reviewData.length > 0 ? (
                                    product.reviewData.map(review => (
                                        <div key={review.id} className="p-8 border border-rich-gold/10 bg-obsidian-900 group hover:border-rich-gold/20 transition-all duration-500 shadow-lg">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-obsidian-950 border border-rich-gold/20 flex items-center justify-center font-serif text-rich-gold text-lg">
                                                        {review.author[0]}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-pearl-100 tracking-wide">{review.author}</span>
                                                            {review.verified && <CheckCircle className="w-3.5 h-3.5 text-rich-gold" />}
                                                        </div>
                                                        <span className="text-[9px] text-onyx-500 uppercase tracking-widest font-bold">{review.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={cn("w-3.5 h-3.5", i < review.rating ? "text-rich-gold fill-rich-gold/20" : "text-onyx-800")} />
                                                    ))}
                                                </div>
                                            </div>
                                            <h4 className="font-serif text-lg text-pearl-100 mb-3 italic tracking-wide group-hover:text-rich-gold transition-colors">{review.title}</h4>
                                            <p className="text-pearl-300 text-sm leading-relaxed font-light opacity-80 italic">"{review.content}"</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-24 bg-obsidian-900 border border-rich-gold/10">
                                        <p className="text-onyx-400 uppercase tracking-[0.2em] font-bold text-xs mb-8">Every masterpiece awaits its first chronicle.</p>
                                        <button className="px-10 py-4 border border-rich-gold text-rich-gold text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-rich-gold hover:text-obsidian-950 transition-all duration-500">
                                            Share Your Experience
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
