"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/lib/data";
import Toast from "@/components/Toast";

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [toastState, setToastState] = useState({ message: "", isVisible: false });

    const showToast = (message: string) => {
        setToastState({ message, isVisible: true });
        setTimeout(() => {
            setToastState(prev => ({ ...prev, isVisible: false }));
        }, 3000);
    };

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                const parsedCart: CartItem[] = JSON.parse(savedCart);
                // Filter out invalid items and deduplicate
                const uniqueItems = parsedCart
                    .filter(item => item && item.id && item.name)
                    .reduce((acc: CartItem[], current) => {
                    const x = acc.find(item => String(item.id) === String(current.id));
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        // If duplicate found, merge quantities
                        x.quantity += current.quantity;
                        return acc;
                    }
                }, []);
                setCartItems(uniqueItems);
            } catch (error) {
                console.error("Failed to parse cart data:", error);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product, quantity: number = 1) => {
        setCartItems((prevItems) => {
            const productId = String(product.id);
            const existingItem = prevItems.find((item) => String(item.id) === productId);
            if (existingItem) {
                return prevItems.map((item) =>
                    String(item.id) === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { ...product, id: productId, quantity }];
            }
        });
        showToast(`Added ${product.name} to cart`);
    };

    const removeFromCart = (productId: string) => {
        const idToRemove = String(productId);
        setCartItems((prevItems) => prevItems.filter((item) => String(item.id) !== idToRemove));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        const idToUpdate = String(productId);
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                String(item.id) === idToUpdate ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
            <Toast
                message={toastState.message}
                isVisible={toastState.isVisible}
                onClose={() => setToastState(prev => ({ ...prev, isVisible: false }))}
            />
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
