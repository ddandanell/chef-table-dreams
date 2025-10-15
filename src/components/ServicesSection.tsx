import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ChefHat, Users, Utensils, Home, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Private Chef Services",
      description: "Professional chefs for intimate dinners, daily meal preparation, or special occasions. Custom menus tailored to your preferences.",
      features: ["Custom menu design", "Dietary accommodations", "Market-fresh ingredients", "Full cleanup service"],
      price: "From $45/hour",
      gradient: "from-primary/10 to-chart-4/10"
    },
    {
      icon: Users,
      title: "Event Staffing",
      description: "Complete event team including servers, bartenders, and coordinators for weddings, corporate events, and celebrations.",
      features: ["Professional servers", "Experienced bartenders", "Event coordinators", "Setup & breakdown"],
      price: "From $35/hour per staff",
      gradient: "from-chart-1/10 to-primary/10"
    },
    {
      icon: Utensils,
      title: "Villa Services",
      description: "Daily housekeeping, villa management, and hospitality services for rental properties and private residences.",
      features: ["Daily cleaning", "Guest management", "Maintenance coordination", "Concierge services"],
      price: "Custom packages available",
      gradient: "from-chart-4/10 to-chart-1/10"
    },
    {
      icon: Home,
      title: "Catering Services",
      description: "Full-service catering for events of any size. From intimate gatherings to large celebrations with complete setup.",
      features: ["Menu planning", "Food preparation", "Service staff", "Equipment rental"],
      price: "Contact for quote",
      gradient: "from-primary/10 to-chart-2/10"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-chart-4/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Hospitality{" "}
            <span className="gradient-text-gold">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional service team for every occasion. Hotel-standard excellence for your villa, event, or residence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={index}
              hover3d
              className={`group relative overflow-hidden animate-fade-in-up delay-${index * 100}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with 3D effect */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-4 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                  <div className="relative w-full h-full glass-subtle rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text-gold transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2 text-sm"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-5 h-5 rounded-full glass-subtle flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-lg font-bold text-primary">
                    {service.price}
                  </span>
                  <Button 
                    variant="outline" 
                    className="shine group/btn hover:bg-primary/10 hover:border-primary/30"
                  >
                    Learn More
                    <Star className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up delay-400">
          <GlassCard variant="strong" className="inline-block">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Need a Custom Package?</h3>
                <p className="text-muted-foreground">Let's discuss your specific requirements</p>
              </div>
              <Button className="shine group whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                <ChefHat className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Get Custom Quote
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
