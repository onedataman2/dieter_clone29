import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  categories?: string[];
}

export function Header({ categories = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultCategories = [
    "All",
    "Calculator",
    "Clock",
    "Gaming",
    "Radio",
    "Recorder",
    "Speaker",
  ];

  const cats = categories.length > 0 ? categories : defaultCategories;

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-dashed border-primary">
      <div className="container">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-black text-foreground">
              dieter
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right: CTA and Search */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:inline-block px-4 py-2 bg-primary text-black font-bold text-sm rounded-full hover:bg-opacity-90 transition-all"
            >
              Buy for 59€
            </a>
            <button className="p-2 hover:bg-muted rounded transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="border-t-2 border-dashed border-primary py-4 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {cats.map((cat, idx) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                  idx === 0
                    ? "bg-primary text-black"
                    : "bg-muted text-foreground hover:bg-primary hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t-2 border-dashed border-primary">
            <a
              href="#"
              className="block py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="block py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="block py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
