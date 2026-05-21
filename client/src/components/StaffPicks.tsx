import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface StaffPickProduct {
  id: string;
  image: string;
  name: string;
  price: number;
  status: "in-stock" | "out-of-stock" | "new";
  staffMemberId: string;
}

interface StaffPicksProps {
  staffMembers: StaffMember[];
  products: StaffPickProduct[];
}

export function StaffPicks({ staffMembers, products }: StaffPicksProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Staff Picks</h2>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            View all
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Staff Members */}
        <div className="mb-8 flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => console.log(`Added ${product.name} to cart`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
