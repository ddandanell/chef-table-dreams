import { Utensils, Home, UserCheck, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Utensils,
      title: "Event Catering Services",
      description: "Turn-key catering solutions for weddings, corporate events, and private celebrations. Full-service teams including chefs, servers, and event coordinators.",
      features: [
        "10-200 guest capacity",
        "Custom menu development",
        "Setup, service & cleanup",
        "Equipment & tableware included"
      ],
      pricing: "Starting from IDR 500,000/person",
      image: "event"
    },
    {
      icon: Home,
      title: "Villa Service Programs",
      description: "Dedicated villa staff for rental properties and private homes. Daily housekeeping, private chef services, and butler assistance.",
      features: [
        "Daily, weekly, monthly packages",
        "Private chef + housekeeping",
        "Guest communication support",
        "Inventory & supply management"
      ],
      pricing: "Starting from IDR 3,500,000/week",
      image: "villa"
    },
    {
      icon: UserCheck,
      title: "Personal Concierge",
      description: "Lifestyle management for expats and villa owners. Airport transfers, grocery shopping, restaurant reservations, and daily assistance.",
      features: [
        "English-speaking professionals",
        "Airport meet & greet",
        "Shopping & errands",
        "Local expertise & connections"
      ],
      pricing: "Starting from IDR 150,000/hour",
      image: "concierge"
    },
    {
      icon: Calendar,
      title: "Meal Preparation Services",
      description: "Weekly meal prep packages for busy families and health-conscious individuals. Custom menus, grocery shopping, and organized meal storage.",
      features: [
        "Personalized meal plans",
        "Dietary accommodations",
        "Fresh ingredients sourced daily",
        "Labeled, organized storage"
      ],
      pricing: "Starting from IDR 2,500,000/week",
      image: "meal-prep"
    },
    {
      icon: Users,
      title: "Event Staffing Solutions",
      description: "Professional event staff rental. Bartenders, servers, hosts, and support staff for any occasion. Uniformed, experienced, and reliable.",
      features: [
        "Flexible team sizing (2-50 staff)",
        "Professional uniforms provided",
        "4-hour minimum booking",
        "Same-day availability possible"
      ],
      pricing: "Starting from IDR 125,000/hour per staff",
      image: "staffing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Complete Hospitality Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five specialized service divisions serving Bali's luxury villa and event market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 transition-smooth hover:-translate-y-2 hover:shadow-xl animate-scale-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Pricing</p>
                    <p className="text-lg font-bold text-charcoal">{service.pricing}</p>
                  </div>
                  <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-white">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom package? We create tailored solutions for your specific needs.
          </p>
          <Button size="lg" className="bg-foreground hover:opacity-90 text-white shadow-medium">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
