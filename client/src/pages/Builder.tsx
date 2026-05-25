import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Product, products, categories } from "@/lib/productData";
import {
  Trash2,
  Plus,
  Copy,
  Share2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface BuilderItem {
  product: Product;
  quantity: number;
}

interface CategorySection {
  name: string;
  categoryId: string;
  items: BuilderItem[];
}

export function Builder() {
  const [buildName, setBuildName] = useState("Compose your setup");
  const [items, setItems] = useState<BuilderItem[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  // Group items by category
  const categoryGroups: CategorySection[] = categories.map((cat) => ({
    name: cat.name,
    categoryId: cat.id,
    items: items.filter((item) => item.product.category === cat.id),
  }));

  const addItem = (product: Product) => {
    const existingItem = items.find((item) => item.product.id === product.id);
    if (existingItem) {
      setItems(
        items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { product, quantity: 1 }]);
    }
  };

  const removeItem = (productId: string) => {
    setItems(items.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      setItems(
        items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const relatedProducts = products
    .filter((p) => !items.find((item) => item.product.id === p.id))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Builder Form */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {buildName}
              </h1>
              <p className="text-muted-foreground">
                Pick parts, confirm quantities, then check out per order to one click.
              </p>
            </div>

            {/* Build Name Input */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <input
                type="text"
                value={buildName}
                onChange={(e) => setBuildName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                placeholder="Name your setup"
              />
            </div>

            {/* Category Sections */}
            <div className="space-y-4 mb-8">
              {categoryGroups.map((group) => {
                const isExpanded = expandedCategories.has(group.categoryId);
                const availableProducts = products.filter(
                  (p) => p.category === group.categoryId
                );

                return (
                  <div key={group.categoryId} className="border border-gray-200 rounded-lg">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(group.categoryId)}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground capitalize">
                          {group.name}
                        </span>
                        {group.items.length > 0 && (
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                            {group.items.length}
                          </span>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>

                    {/* Category Content */}
                    {isExpanded && (
                      <div className="border-t border-gray-200 p-4 space-y-3">
                        {/* Selected Items */}
                        {group.items.length > 0 && (
                          <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                            {group.items.map((item) => (
                              <div
                                key={item.product.id}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded"
                              >
                                <div className="flex-1">
                                  <h4 className="text-sm font-semibold text-foreground">
                                    {item.product.name}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    {item.product.brand}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center border border-gray-200 rounded">
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.product.id,
                                          item.quantity - 1
                                        )
                                      }
                                      className="px-2 py-1 hover:bg-gray-100"
                                    >
                                      −
                                    </button>
                                    <span className="px-2 py-1 border-l border-r border-gray-200 text-xs font-semibold">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.product.id,
                                          item.quantity + 1
                                        )
                                      }
                                      className="px-2 py-1 hover:bg-gray-100"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <span className="text-sm font-bold text-foreground w-16 text-right">
                                    ${item.product.price * item.quantity}
                                  </span>
                                  <button
                                    onClick={() => removeItem(item.product.id)}
                                    className="p-1 hover:bg-red-50 rounded"
                                  >
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add Product Dropdown */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground">
                            Add {group.name.toLowerCase()}
                          </p>
                          {availableProducts.length > 0 ? (
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                              {availableProducts.map((product) => (
                                <button
                                  key={product.id}
                                  onClick={() => addItem(product)}
                                  className="w-full text-left px-3 py-2 text-sm hover:bg-orange-50 rounded border border-gray-200 hover:border-orange-300 transition-colors"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-foreground">
                                      {product.name}
                                    </span>
                                    <span className="text-orange-600 font-semibold">
                                      ${product.price}
                                    </span>
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {product.brand}
                                  </p>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs text-muted-foreground italic">
                              No products available
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Related Products */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Products You May Like
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {relatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gray-100 aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-semibold line-clamp-2 mb-2">
                        {product.name}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-foreground">
                          ${product.price}
                        </span>
                        <button
                          onClick={() => addItem(product)}
                          className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded hover:bg-orange-600 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Build Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {/* Price Summary */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <div className="text-4xl font-bold text-foreground mb-2">
                  ${totalPrice.toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Estimated total
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-orange-200">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      ITEMS
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {totalItems}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      COMPONENTS
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {items.length}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-foreground font-semibold py-2.5 rounded hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share Build
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-foreground font-semibold py-2.5 rounded hover:bg-gray-50 transition-colors">
                    <Copy className="w-4 h-4" />
                    Save Build
                  </button>
                </div>
              </div>

              {/* Compatibility Alert */}
              {items.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">
                        Compatibility Check
                      </h4>
                      <p className="text-xs text-blue-800">
                        All selected components are compatible. Your setup is
                        ready to go!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Build Specs */}
              {items.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">
                    BUILD SPECS
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Items:</span>
                      <span className="font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Categories:
                      </span>
                      <span className="font-semibold">{items.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Avg Price/Item:
                      </span>
                      <span className="font-semibold">
                        ${(totalPrice / totalItems).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
