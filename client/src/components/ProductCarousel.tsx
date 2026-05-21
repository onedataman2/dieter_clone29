import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  status: "in-stock" | "out-of-stock" | "new";
}

interface ProductCarouselProps {
  title: string;
  viewAllLink?: string;
  products: Product[];
}

export function ProductCarousel({
  title,
  viewAllLink,
  products,
}: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              View all
              <ChevronRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full sm:w-80 md:w-72"
              >
                <ProductCard
                  {...product}
                  onAddToCart={() => console.log(`Added ${product.name} to cart`)}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white hover:bg-secondary"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white hover:bg-secondary"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
