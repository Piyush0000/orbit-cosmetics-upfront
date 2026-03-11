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
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20 animate-in fade-in duration-500 text-foreground">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-primary">Welcome Back</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Sign in to acccess your personalized beauty journey
                    </p>
                </div>

                <div className="space-y-6 bg-card p-8 rounded-2xl border border-border/60 shadow-lg shadow-primary/5 relative overflow-hidden">
                    <form onSubmit={handleLogin} className="space-y-4 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-foreground/80" htmlFor="email">Email</label>
                            <Input id="email" placeholder="m@example.com" type="email" required className="h-12 bg-background/50 border-input focus:border-primary/50 text-foreground placeholder:text-muted-foreground/70 rounded-lg transition-all focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-foreground/80" htmlFor="password">Password</label>
                            <Input id="password" type="password" required className="h-12 bg-background/50 border-input focus:border-primary/50 text-foreground placeholder:text-muted-foreground/70 rounded-lg transition-all focus:ring-2 focus:ring-primary/20" />
                        </div>

                        <Button className="w-full py-6 text-lg tracking-wide font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-md hover:shadow-primary/20 transition-all" disabled={loading}>
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="text-center text-sm relative z-10">
                        <Link href="#" className="underline underline-offset-4 hover:text-primary text-muted-foreground transition-colors">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline underline-offset-4 hover:text-primary font-medium text-primary transition-colors">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
