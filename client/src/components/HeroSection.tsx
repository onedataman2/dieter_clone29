import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Design.
              <br />
              Compare.
              <br />
              Perfect.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Smart electronics for a smarter home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-foreground text-white hover:bg-foreground/90 w-full sm:w-auto"
              >
                View all products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Woman with tablet showing smart home interface"
              className="w-full max-w-md md:max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
