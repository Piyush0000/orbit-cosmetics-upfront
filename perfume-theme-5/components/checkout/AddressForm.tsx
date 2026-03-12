"use client";

import { MapPin } from "lucide-react";

export default function AddressForm() {
    return (
        <div className="bg-obsidian-900 p-8 lg:p-12 border border-rich-gold/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rich-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-rich-gold/10 transition-all duration-700" />
            
            <h2 className="font-serif text-2xl text-pearl-100 mb-10 flex items-center gap-4 underline underline-offset-[12px] decoration-rich-gold/20 tracking-wide">
                <MapPin className="w-6 h-6 text-rich-gold" />
                Delivery Coordinates
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                {/* Full Name */}
                <div className="md:col-span-2 group/input">
                    <label htmlFor="fullName" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Consignee Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="e.g. Alexander Pierce"
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent font-medium tracking-wide"
                    />
                </div>

                {/* Phone Number */}
                <div className="group/input">
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Primary Contact
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="+91 00000 00000"
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent font-medium tracking-wide"
                    />
                </div>

                {/* Alternate Phone (Optional) */}
                <div className="group/input">
                    <label htmlFor="altPhone" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Secondary Secure <span className="opacity-40 font-normal italic lowercase tracking-normal">(Optional)</span>
                    </label>
                    <input
                        type="tel"
                        id="altPhone"
                        placeholder="+91 00000 00000"
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent font-medium tracking-wide"
                    />
                </div>

                {/* Pincode */}
                <div className="group/input">
                    <label htmlFor="pincode" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Postal Identity
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        placeholder="000000"
                        maxLength={6}
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent font-medium tracking-wide"
                    />
                </div>

                {/* City */}
                <div className="group/input">
                    <label htmlFor="city" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Metropolis
                    </label>
                    <input
                        type="text"
                        id="city"
                        placeholder="e.g. Mumbai"
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent font-medium tracking-wide"
                    />
                </div>

                {/* State */}
                <div className="md:col-span-2 group/input">
                    <label htmlFor="state" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Province / State
                    </label>
                    <div className="relative">
                        <select
                            id="state"
                            className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 focus:outline-none focus:border-rich-gold transition-all bg-transparent appearance-none font-medium tracking-wide"
                        >
                            <option value="" className="bg-obsidian-900">Select Region</option>
                            <option value="Delhi" className="bg-obsidian-900">Delhi</option>
                            <option value="Maharashtra" className="bg-obsidian-900">Maharashtra</option>
                            <option value="Karnataka" className="bg-obsidian-900">Karnataka</option>
                            <option value="Uttar Pradesh" className="bg-obsidian-900">Uttar Pradesh</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-rich-gold opacity-50">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                {/* Full Address */}
                <div className="md:col-span-2 group/input">
                    <label htmlFor="address" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Detailed Residence (Suite, Building, Estate)
                    </label>
                    <textarea
                        id="address"
                        rows={3}
                        placeholder="e.g. Penthouse 702, Azure Heights, Marine Drive"
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent resize-none font-medium tracking-wide"
                    />
                </div>

                {/* Landmark (Optional) */}
                <div className="md:col-span-2 group/input">
                    <label htmlFor="landmark" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rich-gold mb-3 group-focus-within/input:text-pearl-100 transition-colors">
                        Distinguishing Landmark <span className="opacity-40 font-normal italic lowercase tracking-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        id="landmark"
                        placeholder="e.g. Opposite The Grand Plaza"
                        className="w-full border-b border-rich-gold/20 py-3 text-sm text-pearl-100 placeholder:text-onyx-600 focus:outline-none focus:border-rich-gold transition-all bg-transparent font-medium tracking-wide"
                    />
                </div>
            </form>
        </div>
    );
}
