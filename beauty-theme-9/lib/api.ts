import { useState, useEffect } from "react";

export class StorefrontAPI {
    private static getBaseUrl() {
        return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/storefront/public";
    }

    private static getSubdomain() {
        if (typeof window !== "undefined") {
            const hostname = window.location.hostname;
            if (hostname.includes("localhost") || hostname.includes("127.0.0.1")) {
                return process.env.NEXT_PUBLIC_SUBDOMAIN || "preview";
            }
            return hostname.split(".")[0];
        }
        return process.env.NEXT_PUBLIC_SUBDOMAIN || "preview";
    }

    static async getStoreCustomization() {
        try {
            const subdomain = this.getSubdomain();
            const response = await fetch(`${this.getBaseUrl()}/customization?subdomain=${subdomain}`);
            if (!response.ok) return null;
            const data = await response.json();
            return data.data;
        } catch {
            return null;
        }
    }
}

export function useStore() {
    const [customization, setCustomization] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStore() {
            setLoading(true);
            const data = await StorefrontAPI.getStoreCustomization();
            setCustomization(data);
            setLoading(false);
        }
        fetchStore();
    }, []);

    return { customization, loading };
}
