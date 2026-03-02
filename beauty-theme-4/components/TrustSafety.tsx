import { ShieldCheck, Leaf, HeartHandshake, FlaskConical } from "lucide-react";

const features = [
    { icon: ShieldCheck, title: "Dermatologically Tested", desc: "Safe for all skin types" },
    { icon: Leaf, title: "100% Vegan", desc: "Plant-based goodness" },
    { icon: HeartHandshake, title: "Cruelty Free", desc: "Never tested on animals" },
    { icon: FlaskConical, title: "Paraben Free", desc: "No harmful chemicals" },
];

export function TrustSafety() {
    return (
        <section className="py-16 bg-gradient-to-r from-primary/5 via-muted/30 to-accent/5 border-t border-b border-border/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center gap-3 group">
                            <div className="p-4 rounded-2xl bg-background shadow-sm border border-border/30 text-primary group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-400">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                                <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
