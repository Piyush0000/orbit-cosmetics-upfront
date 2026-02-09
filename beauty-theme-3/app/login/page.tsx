"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setLoading(false);
            router.push("/profile");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20 animate-in fade-in duration-500">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Welcome Back</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Sign in to your account
                    </p>
                </div>

                <div className="space-y-6 bg-card p-8 rounded-xl border shadow-sm">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                            <Input id="email" placeholder="m@example.com" type="email" required className="h-12" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
                            <Input id="password" type="password" required className="h-12" />
                        </div>

                        <Button className="w-full py-6 text-lg" disabled={loading}>
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        <Link href="#" className="underline underline-offset-4 hover:text-primary">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline underline-offset-4 hover:text-primary font-medium">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
