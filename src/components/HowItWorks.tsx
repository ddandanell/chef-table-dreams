import { Edit, Inbox, MessageSquare, CalendarCheck, UtensilsCrossed, ArrowRight, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Edit,
      title: "Tell Us What You Want",
      description: "Share your occasion, number of guests, cuisine preferences, and any dietary needs. Whether it's a romantic dinner for two or a celebration for twenty, we customize everything to you.",
      highlights: ["Your preferences", "Guest count", "Dietary needs", "Special occasions"]
    },
    {
      number: 2,
      icon: Inbox,
      title: "Chefs Come to You",
      description: "Within hours, multiple professional chefs review your request and send personalized menu proposals. Each chef crafts a unique menu designed specifically for your tastes and requirements.",
      highlights: ["Multiple proposals", "Custom menus", "Professional chefs", "Fast response"]
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Choose and Refine",
      description: "Browse the proposals, read chef profiles and reviews, then start a conversation. Chat directly with chefs to adjust dishes, ask questions, or request changes until the menu is perfect.",
      highlights: ["Direct communication", "Menu customization", "Chef profiles", "Real reviews"]
    },
    {
      number: 4,
      icon: CalendarCheck,
      title: "Book with Confidence",
      description: "Once you've found your ideal chef and menu, securely book and pay through our platform. Your date is locked in and your chef is confirmed.",
      highlights: ["Secure payment", "Instant confirmation", "Protected booking", "Peace of mind"]
    },
    {
      number: 5,
      icon: UtensilsCrossed,
      title: "Enjoy the Magic",
      description: "Your chef arrives at your home, prepares restaurant-quality food in your kitchen, serves your guests, and cleans up. All you do is relax and enjoy an unforgettable culinary experience.",
      highlights: ["In-home service", "Restaurant quality", "Full cleanup", "Memorable experience"]
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">Simple & Seamless</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Simple 5-Step Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Booking your private chef experience is refreshingly simple
          </p>
        </div>
        
        {/* Steps Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Animated Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Mobile/Tablet Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-32 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 group-hover:rotate-6">
                      <step.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 text-center min-h-[3rem] flex items-center justify-center">
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
                        className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 animate-fade-in"
                        style={{ animationDelay: `${(index * 0.15) + (i * 0.1)}s`, animationFillMode: 'forwards' }}
                      >
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Arrow Connector - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to get started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-coral text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/6282237565997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--whatsapp-green))] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
