import { Edit, Inbox, MessageSquare, CalendarCheck, UtensilsCrossed, ArrowRight, Check, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Edit,
      title: "Tell Us What You Want",
      description: "Share your occasion, number of guests, cuisine preferences, and any dietary needs.",
      highlights: ["Your preferences", "Guest count", "Dietary needs"]
    },
    {
      number: 2,
      icon: Inbox,
      title: "Get Custom Proposals",
      description: "Multiple professional chefs review your request and send personalized menu proposals.",
      highlights: ["Multiple proposals", "Custom menus", "Fast response"]
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Choose and Refine",
      description: "Browse proposals, read chef profiles and reviews, then chat directly with chefs.",
      highlights: ["Direct communication", "Chef profiles", "Real reviews"]
    },
    {
      number: 4,
      icon: CalendarCheck,
      title: "Book with Confidence",
      description: "Securely book and pay through our platform. Your date is locked in.",
      highlights: ["Secure payment", "Instant confirmation", "Protected booking"]
    },
    {
      number: 5,
      icon: UtensilsCrossed,
      title: "Enjoy the Magic",
      description: "Your chef arrives, prepares restaurant-quality food, serves your guests, and cleans up.",
      highlights: ["In-home service", "Restaurant quality", "Full cleanup"]
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Simple & Seamless</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Simple <span className="gradient-text-gold">5-Step</span> Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Booking your private chef experience is refreshingly simple
          </p>
        </div>
        
        {/* Steps Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-32 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
                )}
                
                {/* Step Card */}
                <GlassCard hover3d className="relative group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-4 flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto rounded-2xl glass-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 text-center min-h-[3rem] flex items-center justify-center group-hover:gradient-text-gold transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                    {step.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    {step.highlights.map((highlight, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Arrow Connector - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to get started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="shine group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
              asChild
            >
              <a href="#services">
                Request Service
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a 
                href="https://wa.me/6282237565997"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
