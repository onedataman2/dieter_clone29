import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

// Mock product data
const allProducts = [
  {
    id: "1",
    image: "https://framerusercontent.com/images/C67lEKfFEQ9Ao4GMknVpRjdQSPo.png",
    name: "They-re Radio P77",
    price: 179,
    status: "in-stock" as const,
  },
  {
    id: "2",
    image: "https://framerusercontent.com/images/J2eFqmrs2I831EXbJfBQyNaMI.png",
    name: "Radion T28",
    price: 129,
    status: "in-stock" as const,
  },
  {
    id: "3",
    image: "https://framerusercontent.com/images/dlSQBjwpKaHj9r2I3UFrWjaddak.png",
    name: "Clock Orange O2",
    price: 399,
    status: "out-of-stock" as const,
  },
  {
    id: "4",
    image: "https://framerusercontent.com/images/mTzSE6KF0SZuuB0yuiIuLJScuYo.png",
    name: "Radion Y-01",
    price: 199,
    status: "in-stock" as const,
  },
  {
    id: "5",
    image: "https://framerusercontent.com/images/iqlO85MtzwaDJDynNJM1ZwWvNys.png",
    name: "Proto T 52",
    price: 99,
    status: "out-of-stock" as const,
  },
  {
    id: "6",
    image: "https://framerusercontent.com/images/Bh5yiJhSRHnGMNKs3ITKN7R1rq4.png",
    name: "Radiot P52",
    price: 299,
    status: "in-stock" as const,
  },
  {
    id: "7",
    image: "https://framerusercontent.com/images/UzlqqmSBYDe3mG46DVCNbucgg.png",
    name: "AX-34 Deck",
    price: 159,
    status: "in-stock" as const,
  },
  {
    id: "8",
    image: "https://framerusercontent.com/images/amf7AUxXbx8JQqjTSxSa86sHI1Q.png",
    name: "Pocket Play X-RP",
    price: 279,
    status: "in-stock" as const,
  },
  {
    id: "9",
    image: "https://framerusercontent.com/images/sf2RXVteaVIKZ4CMMDuy5OxJgFw.png",
    name: "SP-4 Radio",
    price: 149,
    status: "in-stock" as const,
  },
  {
    id: "10",
    image: "https://framerusercontent.com/images/9IuqsvqmUCrbEJwmzoNFxDgt5U.png",
    name: "SonicWave X1",
    price: 199,
    status: "out-of-stock" as const,
  },
  {
    id: "11",
    image: "https://framerusercontent.com/images/NjETYEJv2gTFoNCccRUMElCkPg.png",
    name: "Calc 9000",
    price: 79,
    status: "in-stock" as const,
  },
  {
    id: "12",
    image: "https://framerusercontent.com/images/FVlTCVAMDL4uYxEnpzFQyoZrNZo.png",
    name: "NeoChrono Console",
    price: 399,
    status: "out-of-stock" as const,
  },
  {
    id: "13",
    image: "https://framerusercontent.com/images/0s6mPyGAVm85FLM7Z7vvtGQYEZ4.png",
    name: "Recordio ZT 1",
    price: 99,
    status: "in-stock" as const,
  },
  {
    id: "14",
    image: "https://framerusercontent.com/images/7gTyrPv3vkoowZ8uAS0PhZ7qfR8.png",
    name: "Gamebrot 0XR",
    price: 189,
    status: "out-of-stock" as const,
  },
  {
    id: "15",
    image: "https://framerusercontent.com/images/Q3GZoob7o00Ph3EvrwhWAqbfPI.png",
    name: "Headset x28",
    price: 189,
    status: "in-stock" as const,
  },
  {
    id: "16",
    image: "https://framerusercontent.com/images/jj10qxfx4o42XIpRi5mhD0G02M.png",
    name: "Peeuriva 24-T4",
    price: 189,
    status: "out-of-stock" as const,
  },
];

// Section component for horizontal scrolling
function ProductSection({
  title,
  products,
  showViewAll = true,
}: {
  title: string;
  products: typeof allProducts;
  showViewAll?: boolean;
}) {
  return (
    <section className="py-6 md:py-8 bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            {title}
          </h2>
          {showViewAll && (
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View all <ChevronRight className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="flex gap-1.5 md:gap-2 px-4 md:px-0 pb-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-28 md:w-32"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Organize products into different sections
  const trendingProducts = allProducts.slice(0, 6);
  const newProducts = allProducts.slice(2, 8);
  const dealsProducts = allProducts.filter((p) => p.price < 200).slice(0, 6);
  const staffPicksProducts = allProducts.slice(4, 10);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Main Grid - All Products */}
        <section className="py-8 md:py-12 bg-white border-b border-gray-200">
          <div className="container">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
              All Products
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-1.5 md:gap-2 auto-rows-max">
              {allProducts.map((product, idx) => {
                // Create staggered masonry effect
                let spanClass = "";
                if (idx === 0) spanClass = "md:col-span-2"; // Large featured item
                else if (idx === 7) spanClass = "md:col-span-2"; // Wide item
                else if (idx === 15) spanClass = "md:col-span-2"; // Another wide item

                return (
                  <div key={product.id} className={spanClass}>
                    <ProductCard
                      {...product}
                      onAddToCart={() =>
                        console.log(`Added ${product.name} to cart`)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <ProductSection title="Trending" products={trendingProducts} />

        {/* New Arrivals Section */}
        <ProductSection title="New Arrivals" products={newProducts} />

        {/* Deals Section */}
        <ProductSection title="Deals Under $200" products={dealsProducts} />

        {/* Staff Picks Section */}
        <ProductSection title="Staff Picks" products={staffPicksProducts} />
      </main>
      <Footer />
    </div>
  );
}
