import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { brands, categories, priceRanges } from "@/lib/productData";

interface FilterState {
  categories: string[];
  brands: string[];
  priceRanges: string[];
  minRating: number;
  inStockOnly: boolean;
}

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({
  onFilterChange,
  isOpen,
  onClose,
}: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRanges: [],
    minRating: 0,
    inStockOnly: false,
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brand: true,
    rating: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (priceRangeId: string) => {
    const newPrices = filters.priceRanges.includes(priceRangeId)
      ? filters.priceRanges.filter((p) => p !== priceRangeId)
      : [...filters.priceRanges, priceRangeId];
    const newFilters = { ...filters, priceRanges: newPrices };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, minRating: rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStockChange = () => {
    const newFilters = { ...filters, inStockOnly: !filters.inStockOnly };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const emptyFilters: FilterState = {
      categories: [],
      brands: [],
      priceRanges: [],
      minRating: 0,
      inStockOnly: false,
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.priceRanges.length > 0 ||
    filters.minRating > 0 ||
    filters.inStockOnly;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 overflow-y-auto z-50 transform transition-transform md:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={onClose}
              className="md:hidden p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="w-full mb-4 px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded border border-orange-200"
            >
              Reset Filters
            </button>
          )}

          {/* Category Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("category")}
              className="flex items-center justify-between w-full mb-3 font-semibold text-foreground"
            >
              Category
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedSections.category ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSections.category && (
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat.id)}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-muted-foreground">
                      {cat.name}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      ({cat.count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("price")}
              className="flex items-center justify-between w-full mb-3 font-semibold text-foreground"
            >
              Price
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedSections.price ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSections.price && (
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.priceRanges.includes(range.id)}
                      onChange={() => handlePriceChange(range.id)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-muted-foreground">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("brand")}
              className="flex items-center justify-between w-full mb-3 font-semibold text-foreground"
            >
              Brand
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedSections.brand ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSections.brand && (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-muted-foreground">{brand}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("rating")}
              className="flex items-center justify-between w-full mb-3 font-semibold text-foreground"
            >
              Rating
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedSections.rating ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSections.rating && (
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.minRating === rating}
                      onChange={() => handleRatingChange(rating)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-muted-foreground">
                      {rating}+ Stars
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Stock Filter */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={handleStockChange}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm font-semibold text-foreground">
                In Stock Only
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
