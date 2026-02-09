
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
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20 animate-in fade-in duration-500 text-foreground">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-primary">Join Our Community</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Experience premium personal care tailored for you
                    </p>
                </div>

                <div className="bg-card p-8 rounded-2xl border border-border/60 shadow-lg shadow-primary/5 relative overflow-hidden group">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700 pointer-events-none" />

                    <form onSubmit={handleSignup} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-foreground/80" htmlFor="name">Full Name</label>
                            <Input id="name" placeholder="Jane Doe" required className="h-12 bg-background/50 border-input focus:border-primary/50 text-foreground placeholder:text-muted-foreground/70 rounded-lg transition-all focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-foreground/80" htmlFor="email">Email</label>
                            <Input id="email" placeholder="m@example.com" type="email" required className="h-12 bg-background/50 border-input focus:border-primary/50 text-foreground placeholder:text-muted-foreground/70 rounded-lg transition-all focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-foreground/80" htmlFor="password">Password</label>
                            <Input id="password" type="password" required className="h-12 bg-background/50 border-input focus:border-primary/50 text-foreground placeholder:text-muted-foreground/70 rounded-lg transition-all focus:ring-2 focus:ring-primary/20" />
                        </div>

                        <Button className="w-full py-6 text-lg tracking-wide shadow-md hover:shadow-primary/20 transition-all font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg" disabled={loading}>
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
