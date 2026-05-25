import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductListView } from "@/components/ProductListView";
import { ProductDetail } from "./ProductDetail";
import { products, priceRanges } from "@/lib/productData";
import { Menu, Search } from "lucide-react";
import type { Product } from "@/lib/productData";

interface FilterState {
  categories: string[];
  brands: string[];
  priceRanges: string[];
  minRating: number;
  inStockOnly: boolean;
}

export function Products() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRanges: [],
    minRating: 0,
    inStockOnly: false,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes("all")) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Brand filter
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }

    // Price filter
    if (filters.priceRanges.length > 0) {
      result = result.filter((p) => {
        return filters.priceRanges.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return range && p.price >= range.min && p.price <= range.max;
        });
      });
    }

    // Rating filter
    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }

    // Stock filter
    if (filters.inStockOnly) {
      result = result.filter((p) => p.status === "in-stock");
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (a.status === "new" ? -1 : 1));
        break;
      default:
        break;
    }

    return result;
  }, [filters, searchQuery, sortBy]);

  if (selectedProduct) {
    return (
      <ProductDetail
        productId={selectedProduct.id}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Browse Products
          </h1>
          <p className="text-muted-foreground">
            Explore our collection of home electronics
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setFilterSidebarOpen(!filterSidebarOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Menu className="w-5 h-5" />
              Filters
            </button>

            <div className="ml-auto">
              <label className="text-sm text-muted-foreground mr-2">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredProducts.length} products
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar
              onFilterChange={setFilters}
              isOpen={true}
              onClose={() => {}}
            />
          </div>

          {/* Mobile Sidebar */}
          <FilterSidebar
            onFilterChange={setFilters}
            isOpen={filterSidebarOpen}
            onClose={() => setFilterSidebarOpen(false)}
          />

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            <ProductListView
              products={filteredProducts}
              onProductClick={setSelectedProduct}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
