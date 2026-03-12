"use client";

import { createContext, useContext, ReactNode } from "react";
import { useStore } from "../lib/api";

type StoreContextType = {
    customization: any;
} | null;

const StoreContext = createContext<StoreContextType>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
    const storeData = useStore();

    return (
        <StoreContext.Provider value={storeData as any}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStoreContext() {
    return useContext(StoreContext);
}
