import { ShieldCheck, Leaf, HeartHandshake, FlaskConical } from "lucide-react";

const features = [
    { icon: ShieldCheck, title: "Dermatologically Tested", desc: "Safe for all skin types" },
    { icon: Leaf, title: "100% Vegan", desc: "Plant-based goodness" },
    { icon: HeartHandshake, title: "Cruelty Free", desc: "Never tested on animals" },
    { icon: FlaskConical, title: "Paraben Free", desc: "No harmful chemicals" },
];

export function TrustSafety() {
    return (
        <section className="py-6 sm:py-10 bg-muted/20 border-y border-border/20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex items-center gap-2.5 group bg-card/60 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3.5 border border-border/20">
                            <div className="p-2 rounded-xl bg-primary/8 text-primary flex-shrink-0">
                                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-semibold text-foreground text-xs sm:text-sm leading-tight truncate">{feature.title}</h4>
                                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
