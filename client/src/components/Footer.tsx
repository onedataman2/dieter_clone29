import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "#" },
        { label: "Trending", href: "#" },
        { label: "New Arrivals", href: "#" },
        { label: "Staff Picks", href: "#" },
        { label: "Under $150", href: "#" },
        { label: "Shop by Maker", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Compatibility Guide", href: "#" },
        { label: "Shipping & Delivery", href: "#" },
        { label: "Returns & Refunds", href: "#" },
        { label: "Track Order", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Affiliates", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookies Policy", href: "#" },
        { label: "Returns Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-4">dieter</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Curated home electronics. Perfect together.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Stay in the loop
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get new arrivals, curated picks, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="flex-1"
              />
              <Button className="bg-foreground text-white hover:bg-foreground/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 dieter. All rights reserved.
          </p>
          <div className="flex gap-4">
            <img
              src="https://images.ctfassets.net/c7lxnbtvlc12/4SIsqnQLipZFAgAaUSQUkA/5c3ff70d7ee0120786c7db1bc6532f15/visa-dark.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://images.ctfassets.net/c7lxnbtvlc12/1SQWYEUw4okgAyS2YOuEkE/4e2a1bd189674c89903d401fda2e7d8f/mastercard-dark.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://images.ctfassets.net/c7lxnbtvlc12/6X8bUMfVzuKaAkAaU2QMSE/1f176be75f27ca2b5717b4d18b4ba0ad/amex-dark.svg"
              alt="American Express"
              className="h-6"
            />
            <img
              src="https://images.ctfassets.net/c7lxnbtvlc12/3LottIKKxiukYAaKSUUUCK/d32760320582fbb993fce8eef491e176/paypal-dark.svg"
              alt="PayPal"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
