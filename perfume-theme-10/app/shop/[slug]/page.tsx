import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import FragrancePyramid from "@/components/product/FragrancePyramid";
import ProductTabs from "@/components/product/ProductTabs";
import Recommendations from "@/components/product/Recommendations";
import { products } from "@/lib/data";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} | Perfume Upfront`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Ethereal Elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-dream-mint/10 blur-[130px] rounded-full animate-slow-zoom" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-dream-peach/10 blur-[130px] rounded-full animate-slow-zoom [animation-delay:4s]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Product Layout */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
                    <ProductGallery images={product.gallery} />
                    <ProductInfo product={product} />
                </div>

                {/* Fragrance Pyramid Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <div className="inline-block px-5 py-2 glass-card border-none shadow-sm mb-6">
                            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-dream-violet">Scent Journey • Composition</span>
                        </div>
                        <h2 className="text-5xl font-serif text-text-main leading-tight tracking-tighter italic">Olfactory <span className="not-italic opacity-40">Profile</span></h2>
                    </div>
                    <FragrancePyramid
                        topNotes={product.topNotes}
                        middleNotes={product.middleNotes}
                        baseNotes={product.baseNotes}
                    />
                </div>

                {/* Details & Reviews */}
                <div className="max-w-6xl mx-auto">
                    <ProductTabs product={product} />
                </div>

                {/* Recommendations */}
                <div className="mt-40">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 border-b border-white/5 pb-10">
                        <div>
                            <span className="text-dream-violet text-[10px] tracking-[0.4em] uppercase block mb-4 font-bold">You May Also Love</span>
                            <h2 className="text-5xl font-serif text-text-main tracking-tighter italic">Completing <span className="not-italic opacity-40">The Aura</span></h2>
                        </div>
                    </div>
                    <Recommendations currentProductId={product.id} />
                </div>
            </div>
        </div>
    );
}
