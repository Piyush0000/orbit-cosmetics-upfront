import ProductCard from "./ProductCard";

const PRODUCTS = [
    {
        id: "1",
        name: "Noir Extreme",
        brand: "Tom Ford",
        price: 12500,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=700&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=700&auto=format&fit=crop",
        longevity: "12H Long Lasting",
        tag: "Best Seller"
    },
    {
        id: "2",
        name: "Sauvage Elixir",
        brand: "Dior",
        price: 14800,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=700&auto=format&fit=crop",
        longevity: "10H Long Lasting",
        tag: "Trending"
    },
    {
        id: "3",
        name: "Bleu de Chanel",
        brand: "Chanel",
        price: 11200,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=700&auto=format&fit=crop",
        longevity: "8H Moderate",
    },
    {
        id: "4",
        name: "Black Opium",
        brand: "Yves Saint Laurent",
        price: 9800,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1615160359300-47401c107ae7?q=80&w=700&auto=format&fit=crop",
        longevity: "8H Long Lasting",
        tag: "Hot"
    }
];

export default function BestSellers() {
    return (
        <section className="py-16 px-4 md:px-8 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-gold-500 uppercase tracking-widest text-xs font-bold font-sans">Our Collection</span>
                        <h2 className="text-3xl md:text-4xl font-serif mt-2 text-black">Best Sellers & Trending</h2>
                    </div>
                    <a href="/shop" className="hidden md:block text-sm uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="/shop" className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
