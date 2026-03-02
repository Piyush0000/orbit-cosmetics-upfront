import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scissors, Palette, Heart, Flower2 } from "lucide-react";

const categories = [
    { name: "Skincare", icon: Sparkles, color: "bg-emerald-50 dark:bg-emerald-900/20", iconColor: "text-emerald-600" },
    { name: "Haircare", icon: Scissors, color: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-600" },
    { name: "Makeup", icon: Palette, color: "bg-pink-50 dark:bg-pink-900/20", iconColor: "text-pink-600" },
    { name: "Hygiene", icon: Heart, color: "bg-sky-50 dark:bg-sky-900/20", iconColor: "text-sky-600" },
    { name: "Fragrances", icon: Flower2, color: "bg-violet-50 dark:bg-violet-900/20", iconColor: "text-violet-600" },
];

export function CategoryGrid() {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif text-foreground">
                    Shop by Category
                </h2>
                <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
                    Find exactly what your beauty routine needs
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((cat) => (
                        <Card
                            key={cat.name}
                            className="group cursor-pointer hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 border border-border/50 bg-card hover:-translate-y-1 rounded-2xl"
                        >
                            <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                                <div className={`p-5 rounded-2xl ${cat.color} group-hover:scale-110 transition-transform duration-400`}>
                                    <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                                </div>
                                <span className="font-medium text-base tracking-wide group-hover:text-primary transition-colors">
                                    {cat.name}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
