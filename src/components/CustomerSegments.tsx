import { Home, Calendar, Globe, Flower2, Briefcase, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const CustomerSegments = () => {
  const segments = [
    {
      icon: Home,
      title: "Villa Owners & Rental Companies",
      description: "Property managers and villa owners who need consistent, reliable staffing for guests",
      perfectFor: [
        "Daily housekeeping & chef service",
        "Guest concierge assistance",
        "Property management support"
      ]
    },
    {
      icon: Calendar,
      title: "Event Planners & Wedding Coordinators",
      description: "Professional event teams for weddings, corporate events, and celebrations",
      perfectFor: [
        "Full-service event catering",
        "Staffing for venues",
        "Large-scale celebrations"
      ]
    },
    {
      icon: Globe,
      title: "Expat Residents",
      description: "Long-term residents who need household staff and lifestyle management",
      perfectFor: [
        "Personal chef services",
        "Household management",
        "Concierge assistance"
      ]
    },
    {
      icon: Flower2,
      title: "Retreat Centers & Yoga Studios",
      description: "Wellness venues requiring healthy catering and hospitality support",
      perfectFor: [
        "Healthy meal programs",
        "Group catering",
        "Wellness retreat support"
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate Clients",
      description: "Businesses hosting team events, conferences, and executive dinners",
      perfectFor: [
        "Corporate catering",
        "Team building events",
        "Executive services"
      ]
    }
  ];

  return (
    <section id="who-we-serve" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-chart-4/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Who We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serving Bali's <span className="gradient-text-gold">Luxury Market</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by diverse clients across the island's premium hospitality sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <GlassCard
              key={index}
              hover3d
              className={`group animate-fade-in-up delay-${index * 100}`}
            >
              {/* Icon */}
              <div className="relative w-14 h-14 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-4 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                <div className="relative w-full h-full glass-subtle rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <segment.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text-gold transition-all duration-300">
                {segment.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {segment.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold">Perfect for:</p>
                {segment.perfectFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full glass-subtle flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
