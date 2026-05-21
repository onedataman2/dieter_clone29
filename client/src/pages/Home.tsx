import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { BrandShowcase } from "@/components/BrandShowcase";
import { StaffPicks } from "@/components/StaffPicks";
import { Footer } from "@/components/Footer";

// Mock data
const trendingProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "They're Radio F77",
    price: 179,
    status: "in-stock" as const,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Radion T28",
    price: 129,
    status: "in-stock" as const,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "Clock Orange Q2",
    price: 399,
    status: "out-of-stock" as const,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Radion Y-01",
    price: 199,
    status: "in-stock" as const,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Radio P52",
    price: 299,
    status: "in-stock" as const,
  },
];

const newArrivals = [
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "Pocket Play X-RP",
    price: 249,
    status: "new" as const,
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "NeoChronos Console",
    price: 199,
    status: "new" as const,
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "SonicWave X1",
    price: 349,
    status: "new" as const,
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "Recordio ZT 1",
    price: 279,
    status: "new" as const,
  },
  {
    id: "10",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Penurbia 24-14",
    price: 189,
    status: "new" as const,
  },
];

const brands = [
  {
    id: "1",
    name: "Teenage Engineering",
    logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    productCount: 12,
  },
  {
    id: "2",
    name: "Braun",
    logo: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
    productCount: 18,
  },
  {
    id: "3",
    name: "Sony",
    logo: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
    productCount: 24,
  },
  {
    id: "4",
    name: "Panasonic",
    logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    productCount: 16,
  },
  {
    id: "5",
    name: "Bang & Olufsen",
    logo: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
    productCount: 10,
  },
  {
    id: "6",
    name: "Yamaha",
    logo: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
    productCount: 14,
  },
];

const staffMembers = [
  {
    id: "1",
    name: "Alex",
    role: "Audio Expert",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Maya",
    role: "Tech Specialist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Chris",
    role: "Product Curator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "Jess",
    role: "Build Advisor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    name: "Sam",
    role: "Audio Expert",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const staffPickProducts = [
  {
    id: "11",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "SP-4 Radio",
    price: 149,
    status: "in-stock" as const,
    staffMemberId: "1",
  },
  {
    id: "12",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "AX-34 Dock",
    price: 169,
    status: "in-stock" as const,
    staffMemberId: "2",
  },
  {
    id: "13",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Proto T-52",
    price: 99,
    status: "in-stock" as const,
    staffMemberId: "3",
  },
  {
    id: "14",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "Gamebeat OMR",
    price: 189,
    status: "in-stock" as const,
    staffMemberId: "4",
  },
  {
    id: "15",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Headset z28",
    price: 189,
    status: "in-stock" as const,
    staffMemberId: "5",
  },
];

const underFiftyProducts = [
  {
    id: "16",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Calc 9000",
    price: 79,
    status: "in-stock" as const,
  },
  {
    id: "17",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "SonicWave X1",
    price: 149,
    status: "in-stock" as const,
  },
  {
    id: "18",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "SP-4 Radio",
    price: 149,
    status: "in-stock" as const,
  },
  {
    id: "19",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    name: "Recordio ZT 1",
    price: 99,
    status: "in-stock" as const,
  },
  {
    id: "20",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "Radion T28",
    price: 129,
    status: "in-stock" as const,
  },
];

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663034607010/GBWXKzp7YHz5KEoCdna3x8/hero-woman-tablet-dGi393Re8qcyHqNc7j4GGf.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection heroImage={heroImage} />
        <FeaturesSection />
        <ProductCarousel title="Trending" products={trendingProducts} />
        <ProductCarousel title="New Arrivals" products={newArrivals} />
        <BrandShowcase title="Shop by Maker" brands={brands} />
        <StaffPicks staffMembers={staffMembers} products={staffPickProducts} />
        <ProductCarousel title="Under $150" products={underFiftyProducts} />
        <Footer />
      </main>
    </div>
  );
}
