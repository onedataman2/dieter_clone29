import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  status: "in-stock" | "out-of-stock" | "new";
  onAddToCart?: () => void;
}

export function ProductCard({
  image,
  name,
  price,
  status,
  onAddToCart,
}: ProductCardProps) {
  const statusConfig = {
    "in-stock": {
      label: "In Stock",
      className: "status-badge-in-stock",
      showIcon: true,
    },
    "out-of-stock": {
      label: "Out of Stock",
      className: "status-badge-out-of-stock",
      showIcon: false,
    },
    new: {
      label: "New",
      className: "status-badge-new",
      showIcon: false,
    },
  };

  const config = statusConfig[status];

  return (
    <div className="product-card flex flex-col h-full">
      {/* Image container */}
      <div className="relative bg-secondary overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <div className={`status-badge ${config.className}`}>
            {config.showIcon && <Check className="w-3 h-3" />}
            <span>{config.label}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-2">
          {name}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          <Button
            size="sm"
            variant="ghost"
            onClick={onAddToCart}
            className="p-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
