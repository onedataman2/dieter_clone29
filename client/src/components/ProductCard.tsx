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
    },
    "out-of-stock": {
      label: "Out of Stock",
      className: "status-badge-out-of-stock",
    },
    new: {
      label: "New",
      className: "status-badge-in-stock",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="product-card flex flex-col h-full">
      {/* Image container */}
      <div className="relative bg-muted overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-1 flex flex-col">
        {/* Status Badge */}
        <div className="mb-0.5">
          <span className={`status-badge ${config.className} text-xs px-1.5 py-0.5`} style={{backgroundColor: '#ffffff', color: '#4a4a4a'}}>
            {config.label}
          </span>
        </div>

        {/* Price */}
        <div className="mb-0.5">
          <span className="text-xs font-semibold text-foreground">
            ${price.toFixed(0)}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xs font-medium text-foreground line-clamp-1">
          {name}
        </h3>
      </div>
    </div>
  );
}
