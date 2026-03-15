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
        <div className="mt-32">
            {/* Tabs Header */}
            <div className="flex justify-center border-b border-white/10 mb-16 overflow-x-auto pb-2 scrollbar-hide">
                {['description', 'ingredients', 'reviews'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-10 py-5 text-[10px] font-bold uppercase tracking-[0.4em] relative transition-all duration-500 whitespace-nowrap ${activeTab === tab ? "text-dream-violet" : "text-text-muted hover:text-text-main"
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-dream-violet shadow-[0_0_15px_rgba(183,143,115,0.6)]"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    {activeTab === 'description' && (
                        <motion.div
                            key="desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-10 text-text-muted leading-loose font-light text-lg italic serif"
                        >
                            <p className="opacity-80">
                                {product.description}
                                <br /><br />
                                Immerse yourself in the world of luxury with {product.name}. Created by master perfumers, 
                                this fragrance is designed to leave a lasting impression. The bottle itself is a work of art, 
                                reflecting the elegance and sophistication of the scent inside. Each note is carefully extracted
                                to ensure the purest olfactory experience.
                            </p>
                            <div className="grid md:grid-cols-2 gap-10 mt-12">
                                <div className="glass-card p-10 rounded-[30px_5px_30px_5px] border-white/5">
                                    <h4 className="font-serif text-2xl text-text-main mb-6 italic tracking-tight">Occasion <span className="opacity-40 not-italic">Mood</span></h4>
                                    <div className="flex flex-wrap gap-3">
                                        {product.occasion.map(occ => (
                                            <span key={occ} className="px-5 py-2 glass-card border-dream-violet/20 text-[9px] uppercase tracking-[0.2em] font-bold shadow-sm text-dream-violet rounded-full">{occ}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="glass-card p-10 rounded-[30px_5px_30px_5px] border-white/5">
                                    <h4 className="font-serif text-2xl text-text-main mb-6 italic tracking-tight">Seasonal <span className="opacity-40 not-italic">Harmony</span></h4>
                                    <div className="flex flex-wrap gap-3">
                                        {product.season.map(seas => (
                                            <span key={seas} className="px-5 py-2 glass-card border-dream-violet/20 text-[9px] uppercase tracking-[0.2em] font-bold shadow-sm text-dream-violet rounded-full">{seas}</span>
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
                            className="text-text-muted leading-loose text-center font-light py-10"
                        >
                            <p className="italic mb-10 text-2xl font-serif text-text-main tracking-tight">"Transparency in every drop."</p>
                            <p className="max-w-2xl mx-auto text-lg opacity-70">
                                Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol,
                                Geraniol, Coumarin, Citral, Farnesol, Eugenol.
                            </p>
                            <div className="mt-16 w-16 h-[1px] bg-dream-violet/30 mx-auto mb-8" />
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 max-w-lg mx-auto leading-relaxed">
                                Please be aware that ingredient lists may change or vary from time to time.
                                Please refer to the ingredient list on the product package you receive for the most up to date list of ingredients.
                            </p>
                        </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                        <motion.div
                            key="rev"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="flex flex-col gap-10">
                                {product.reviewData && product.reviewData.length > 0 ? (
                                    product.reviewData.map(review => (
                                        <div key={review.id} className="glass-card p-10 rounded-[30px_5px_30px_5px] border-white/5 relative overflow-hidden group">
                                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-dream-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-dream-violet font-serif text-xl border-white/10">
                                                        {review.author[0]}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-text-main text-xs uppercase tracking-widest">{review.author}</span>
                                                        {review.verified && (
                                                            <div className="flex items-center gap-1 mt-1">
                                                                <CheckCircle className="w-2.5 h-2.5 text-dream-violet" />
                                                                <span className="text-[8px] uppercase tracking-widest text-text-muted">Verified Aura</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold">{review.date}</span>
                                            </div>
                                            <div className="flex text-dream-violet mb-6 opacity-60">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-current" : "opacity-20"}`} />
                                                ))}
                                            </div>
                                            <h4 className="font-serif text-xl text-text-main mb-4 italic tracking-tight">{review.title}</h4>
                                            <p className="text-text-muted text-sm leading-relaxed font-light opacity-80">{review.content}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-24 glass-card rounded-[30px_5px_30px_5px]">
                                        <p className="text-text-muted uppercase tracking-[0.3em] text-[10px] font-bold">No reviews yet. Be the first to share your aura.</p>
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
