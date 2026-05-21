import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Brand {
  id: string;
  name: string;
  logo: string;
  productCount: number;
}

interface BrandShowcaseProps {
  title: string;
  brands: Brand[];
}

export function BrandShowcase({ title, brands }: BrandShowcaseProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            View all
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-foreground text-center mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {brand.productCount} products
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
