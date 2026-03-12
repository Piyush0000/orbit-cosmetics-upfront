"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
    const { addToCart } = useCart();
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-obsidian-900 rounded-sm shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar relative border border-rich-gold/20"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-30 p-2 bg-obsidian-800/80 hover:bg-obsidian-700 rounded-full transition-colors shadow-sm border border-rich-gold/10 text-pearl-100"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Image Section */}
                                <div className="relative h-64 sm:h-80 md:h-full bg-obsidian-950 p-8 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain mix-blend-luminosity brightness-110 grayscale-[0.2]"
                                        />
                                    </div>
                                    {product.tag && (
                                        <span className="absolute top-4 left-4 bg-rich-gold text-obsidian-950 text-[10px] uppercase font-bold px-3 py-1 tracking-widest shadow-lg">
                                            {product.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-8">
                                        <p className="text-[10px] text-rich-gold uppercase tracking-[0.3em] font-bold mb-3">{product.brand}</p>
                                        <h2 className="text-3xl font-serif text-pearl-100 mb-4 leading-tight">{product.name}</h2>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-rich-gold fill-rich-gold/20" : "text-onyx-700"}`} />
                                                ))}
                                            </div>
                                            <span className="text-[11px] text-onyx-400 tracking-[0.2em] font-medium uppercase">({product.reviews} Reviews)</span>
                                        </div>
                                        <p className="text-2xl font-serif text-pearl-100 tracking-wider">₹{product.price.toLocaleString()}</p>
                                    </div>

                                    <p className="text-pearl-300 leading-relaxed mb-8 line-clamp-4 font-light text-sm italic opacity-90">
                                        "{product.description}"
                                    </p>

                                    <div className="space-y-6 mb-10">
                                        <div className="flex flex-wrap gap-3">
                                            {product.topNotes.slice(0, 3).map(note => (
                                                <span key={note} className="px-3.5 py-1.5 bg-obsidian-800 text-[10px] text-pearl-300 rounded-full border border-rich-gold/10 uppercase tracking-widest">
                                                    {note}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button
                                            onClick={() => {
                                                addToCart(product);
                                                onClose();
                                            }}
                                            className="w-full bg-rich-gold text-obsidian-950 py-4 uppercase text-[10px] font-bold tracking-[0.25em] hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                                        >
                                            <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                                        </button>
                                        <Link
                                            href={`/shop/${product.slug}`}
                                            className="w-full border border-rich-gold/20 text-pearl-100 py-4 uppercase text-[10px] font-bold tracking-[0.25em] hover:bg-obsidian-800 hover:text-rich-gold hover:border-rich-gold transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            View Full Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
