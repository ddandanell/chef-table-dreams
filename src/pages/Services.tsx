import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ChefHat, Users, Calendar, Home, Utensils, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Event Catering Excellence",
      description: "Transform your special occasions with our professional catering team. From intimate gatherings to grand celebrations, we deliver restaurant-quality cuisine with impeccable presentation.",
      features: ["Custom menu design", "Professional chef team", "Full service staff", "Equipment included"],
      pricing: "From $150/event"
    },
    {
      icon: Home,
      title: "Villa Service Solutions",
      description: "Elevate your villa experience with dedicated hospitality professionals. Our trained staff ensures every guest receives five-star treatment in your private property.",
      features: ["Daily housekeeping", "Butler service", "Meal preparation", "Guest relations"],
      pricing: "From $40/day"
    },
    {
      icon: Users,
      title: "Personal Concierge Service",
      description: "Your dedicated lifestyle manager in Bali. From grocery shopping to event coordination, we handle the details so you can focus on what matters.",
      features: ["Personal shopping", "Appointment booking", "Travel arrangements", "24/7 availability"],
      pricing: "From $25/hour"
    },
    {
      icon: Utensils,
      title: "Private Chef Services",
      description: "Enjoy chef-prepared meals in the comfort of your home. Our culinary professionals create personalized dining experiences tailored to your preferences.",
      features: ["Custom menus", "Dietary accommodations", "Ingredient sourcing", "Kitchen cleanup"],
      pricing: "From $80/meal"
    },
    {
      icon: Calendar,
      title: "Event Staffing",
      description: "Professional hospitality staff for any occasion. Our uniformed team provides seamless service that reflects the quality of your brand.",
      features: ["Waitstaff", "Bartenders", "Event coordinators", "Setup & cleanup"],
      pricing: "From $20/hour per staff"
    },
    {
      icon: Sparkles,
      title: "Luxury Packages",
      description: "Comprehensive hospitality solutions for discerning clients. Our premium packages combine multiple services for ultimate convenience.",
      features: ["All-inclusive service", "Priority scheduling", "Dedicated account manager", "Custom solutions"],
      pricing: "Custom pricing"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$500",
      duration: "per week",
      features: [
        "Daily housekeeping (4 hours)",
        "Meal preparation (breakfast & lunch)",
        "Basic concierge services",
        "WhatsApp support"
      ]
    },
    {
      name: "Premium",
      price: "$1,200",
      duration: "per week",
      features: [
        "Full-day villa management",
        "Private chef (3 meals daily)",
        "Personal concierge service",
        "24/7 phone support",
        "Priority booking"
      ],
      featured: true
    },
    {
      name: "Elite",
      price: "$2,500",
      duration: "per week",
      features: [
        "Complete villa operations",
        "Dedicated chef & butler",
        "Full concierge team",
        "Event planning included",
        "Luxury vehicle service",
        "VIP priority access"
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Bali's Premier Hospitality Staffing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Professional Services for <span className="gradient-text-gold">Every Occasion</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
              From intimate villa experiences to large-scale events, our 100+ trained professionals deliver hotel-standard excellence wherever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Button size="lg" className="group">
                <ChefHat className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book a Service
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Service Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive hospitality solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary">{service.pricing}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Weekly Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Convenient bundles designed for extended stays and regular service needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <GlassCard 
                key={index} 
                className={`p-8 ${pkg.featured ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {pkg.featured && (
                  <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">/{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.featured ? "default" : "outline"}>
                  Select {pkg.name}
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Services;
