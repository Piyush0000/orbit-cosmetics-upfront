import { ShieldCheck, Leaf, HeartHandshake, FlaskConical, Wind, Trees } from "lucide-react";

const features = [
    { icon: Trees, title: "Sustainably Harvested", desc: "Ethical botanical sourcing" },
    { icon: Leaf, title: "100% Pure Plant", desc: "Cold-pressed excellence" },
    { icon: Wind, title: "Carbon Neutral", desc: "Protecting our forests" },
    { icon: ShieldCheck, title: "Science-Backed", desc: "Clinical botanical potency" },
];

export function TrustSafety() {
    return (
        <section className="py-12 bg-primary/5 border-y border-primary/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex items-center gap-5 group">
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-primary/10 text-primary shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-serif text-lg font-bold text-foreground leading-tight">{feature.title}</h4>
                                <p className="text-[11px] font-bold text-primary/40 uppercase tracking-widest">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
