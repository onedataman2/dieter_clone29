import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Product, products, categories } from "@/lib/productData";
import { Trash2, Plus, Copy, Share2 } from "lucide-react";

interface BuilderItem {
  product: Product;
  quantity: number;
}

export function Builder() {
  const [buildName, setBuildName] = useState("My Smart Home Setup");
  const [items, setItems] = useState<BuilderItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
    setShowAddModal(false);
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

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Build Your Setup
          </h1>
          <p className="text-muted-foreground">
            Create and customize your perfect home electronics configuration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Product Selection */}
          <div className="lg:col-span-2">
            {/* Build Name */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Build Name
              </label>
              <input
                type="text"
                value={buildName}
                onChange={(e) => setBuildName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Select Components
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-foreground hover:bg-gray-200"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
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
                      <span className="font-bold text-foreground">
                        ${product.price}
                      </span>
                      <button
                        onClick={() => addItem(product)}
                        className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded hover:bg-orange-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Build Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Build Summary
              </h2>

              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Add components to your build
                </p>
              ) : (
                <>
                  {/* Items List */}
                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="bg-white p-3 rounded border border-gray-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold line-clamp-1">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              ${item.product.price} each
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-1 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="text-xs font-semibold flex-1 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-100"
                          >
                            +
                          </button>
                          <span className="text-xs font-bold ml-auto">
                            ${item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Stats */}
                  <div className="space-y-2 pb-6 border-b border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Items:</span>
                      <span className="font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Components:</span>
                      <span className="font-semibold">{items.length}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="mb-6 pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-semibold text-muted-foreground">
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-foreground">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition-colors">
                      Add to Cart
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-200 text-foreground font-semibold py-2 rounded hover:bg-gray-100 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share Build
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-200 text-foreground font-semibold py-2 rounded hover:bg-gray-100 transition-colors">
                      <Copy className="w-4 h-4" />
                      Save Build
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
