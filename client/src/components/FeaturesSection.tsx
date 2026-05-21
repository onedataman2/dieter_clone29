import { CheckCircle2, Share2, Zap, Lock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Compare products",
      description: "Side by side",
    },
    {
      icon: Zap,
      title: "Check compatibility",
      description: "Always a perfect fit",
    },
    {
      icon: Share2,
      title: "Track availability",
      description: "Real-time stock",
    },
    {
      icon: Lock,
      title: "Save and share",
      description: "Your builds, anywhere",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col items-start">
                <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
