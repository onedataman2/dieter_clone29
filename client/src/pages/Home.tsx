import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

// Mock product data matching the Framer design
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Products Grid - Masonry Layout */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 auto-rows-max">
              {allProducts.map((product, idx) => {
                // Create staggered masonry effect
                let spanClass = "";
                if (idx === 0) spanClass = "md:col-span-2 md:row-span-2"; // Large featured item
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
      </main>
      <Footer />
    </div>
  );
}
