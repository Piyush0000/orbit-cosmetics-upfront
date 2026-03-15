"use client";

import { MapPin } from "lucide-react";

export default function AddressForm() {
    return (
        <div className="glass-card p-8 sm:p-12 rounded-[50px_10px_50px_10px] border-white/5 relative overflow-hidden group shadow-2xl backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-dream-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <h2 className="font-serif text-3xl text-text-main mb-10 pb-6 border-b border-white/5 italic tracking-tight relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 glass-panel border-none shadow-xl flex items-center justify-center rounded-full bg-white/5 border-white/10">
                    <MapPin className="w-5 h-5 text-dream-violet" />
                </div>
                Shipping <span className="not-italic opacity-30">Sanctuary</span>
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                {/* Full Name */}
                <div className="md:col-span-2 group/field">
                    <label htmlFor="fullName" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="e.g. John Doe"
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent font-serif italic"
                    />
                </div>

                {/* Phone Number */}
                <div className="group/field">
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="+91 99999 99999"
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent font-serif italic"
                    />
                </div>

                {/* Alternate Phone (Optional) */}
                <div className="group/field">
                    <label htmlFor="altPhone" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        Alternate Phone <span className="opacity-30 font-normal italic lowercase tracking-normal">(Optional)</span>
                    </label>
                    <input
                        type="tel"
                        id="altPhone"
                        placeholder="+91 88888 88888"
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent font-serif italic"
                    />
                </div>

                {/* Pincode */}
                <div className="group/field">
                    <label htmlFor="pincode" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        Pincode
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        placeholder="110001"
                        maxLength={6}
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent font-serif italic"
                    />
                </div>

                {/* City */}
                <div className="group/field">
                    <label htmlFor="city" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        placeholder="e.g. New Delhi"
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent font-serif italic"
                    />
                </div>

                {/* State */}
                <div className="md:col-span-2 group/field">
                    <label htmlFor="state" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        State
                    </label>
                    <div className="relative">
                        <select
                            id="state"
                            className="w-full border-b border-white/10 py-3 text-lg text-text-main focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent appearance-none font-serif italic cursor-pointer pr-10"
                        >
                            <option value="" className="bg-background">Select State</option>
                            <option value="Delhi" className="bg-background">Delhi</option>
                            <option value="Maharashtra" className="bg-background">Maharashtra</option>
                            <option value="Karnataka" className="bg-background">Karnataka</option>
                            <option value="Uttar Pradesh" className="bg-background">Uttar Pradesh</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-dream-violet opacity-30">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                {/* Full Address */}
                <div className="md:col-span-2 group/field">
                    <label htmlFor="address" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        Address <span className="opacity-30 font-normal italic lowercase tracking-normal text-[8px]">(House No, Building, Street, Area)</span>
                    </label>
                    <textarea
                        id="address"
                        rows={3}
                        placeholder="e.g. Flat 302, Heavenly Apartments, MG Road"
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent resize-none font-serif italic"
                    />
                </div>

                {/* Landmark (Optional) */}
                <div className="md:col-span-2 group/field">
                    <label htmlFor="landmark" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-dream-violet mb-4 transition-colors group-focus-within/field:text-text-main">
                        Landmark <span className="opacity-30 font-normal italic lowercase tracking-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        id="landmark"
                        placeholder="e.g. Near Central Park"
                        className="w-full border-b border-white/10 py-3 text-lg text-text-main placeholder:text-white/10 focus:outline-none focus:border-dream-violet transition-all duration-500 bg-transparent font-serif italic"
                    />
                </div>
            </form>
        </div>
    );
}
