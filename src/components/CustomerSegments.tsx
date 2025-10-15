import { Home, Calendar, Globe, Flower2, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section id="who-we-serve" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Serving Bali's Luxury Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by diverse clients across the island's premium hospitality sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card
                key={index}
                className="p-6 transition-smooth hover:-translate-y-2 hover:shadow-large animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {segment.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {segment.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-charcoal">Perfect for:</p>
                  {segment.perfectFor.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
