import { notFound } from "next/navigation";
import Link from "next/link";
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
        <div className="bg-obsidian-950 min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="mb-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-onyx-400 font-bold">
                    <Link href="/" className="hover:text-rich-gold transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-rich-gold transition-colors">Shop</Link>
                    <span>/</span>
                    <span className="text-rich-gold">{product.name}</span>
                </nav>

                {/* Product Layout */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
                    <ProductGallery images={product.gallery} />
                    <ProductInfo product={product} />
                </div>

                {/* Fragrance Pyramid Section */}
                <div className="mb-24 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-rich-gold/30 to-transparent" />
                    <FragrancePyramid
                        topNotes={product.topNotes}
                        middleNotes={product.middleNotes}
                        baseNotes={product.baseNotes}
                    />
                </div>

                {/* Tabs, Reviews, etc. */}
                <div className="mb-24">
                    <ProductTabs product={product} />
                </div>

                {/* Recommendations */}
                <div className="pt-20 border-t border-rich-gold/10">
                    <h2 className="text-3xl font-serif text-pearl-100 text-center mb-16 underline underline-offset-[12px] decoration-rich-gold/30">You May Also Desire</h2>
                    <Recommendations currentProductId={product.id} />
                </div>

            </div>
        </div>
    );
}
