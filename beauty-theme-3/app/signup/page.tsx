
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate signup delay
        setTimeout(() => {
            setLoading(false);
            router.push("/profile");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20 animate-in fade-in duration-500">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground">Create Account</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Join us for an exclusive beauty experience
                    </p>
                </div>

                <div className="bg-card p-8 rounded-none border border-border/40 shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <form onSubmit={handleSignup} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="name">Full Name</label>
                            <Input id="name" placeholder="Jane Doe" required className="h-12 bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                            <Input id="email" placeholder="m@example.com" type="email" required className="h-12 bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
                            <Input id="password" type="password" required className="h-12 bg-background/50" />
                        </div>

                        <Button className="w-full py-6 text-lg tracking-wide shadow-md hover:shadow-lg transition-all" disabled={loading}>
                            {loading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
