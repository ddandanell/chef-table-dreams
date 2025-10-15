import { Building2, Award, Star, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyMyChef = () => {
  const differentiators = [
    {
      icon: Building2,
      title: "Professional Employment Model",
      description: "All staff are employed & contracted by My Chef—not freelancers. Consistent quality, reliable service."
    },
    {
      icon: Award,
      title: "Rigorous Training Program",
      description: "Hospitality training, food safety certification, customer service excellence standards."
    },
    {
      icon: Star,
      title: "Consistent Quality Standards",
      description: "Uniformed staff, quality supervision, regular performance reviews, and ongoing development."
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full liability coverage, workers compensation, and complete client protection."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            The Difference is in Our People
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not a marketplace. We're your staffing partner with a proven track record of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center transition-smooth hover:-translate-y-2 hover:shadow-large animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMyChef;
