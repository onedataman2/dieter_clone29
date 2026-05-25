import { Product } from "@/lib/productData";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface ProductListViewProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductListView({
  products,
  onProductClick,
}: ProductListViewProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground mb-2">
            No products found
          </p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your filters
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductClick(product)}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative bg-gray-100 aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            {/* Status Badge */}
            <div className="absolute top-2 left-2">
              <span
                className={`text-xs px-2 py-1 rounded font-medium ${
                  product.status === "in-stock"
                    ? "bg-white text-gray-800"
                    : product.status === "new"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.status === "in-stock"
                  ? "In Stock"
                  : product.status === "new"
                  ? "New"
                  : "Out of Stock"}
              </span>
            </div>
            {/* Favorite Button */}
            <button
              onClick={(e) => toggleFavorite(e, product.id)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.has(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Content */}
          <div className="p-3">
            {/* Brand */}
            <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>

            {/* Name */}
            <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-2">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Price and Button */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-foreground">
                ${product.price}
              </span>
              <button className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded hover:bg-orange-600 transition-colors">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
