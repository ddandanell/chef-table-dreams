import { Edit3, FileText, MessageCircle, Calendar, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Edit3,
      title: "Personalize",
      description: "Tell us about your preferences, dietary needs, and occasion",
    },
    {
      number: 2,
      icon: FileText,
      title: "Receive Proposals",
      description: "Get custom menus from verified chefs in your area",
    },
    {
      number: 3,
      icon: MessageCircle,
      title: "Chat with Chefs",
      description: "Discuss details and customize your perfect menu",
    },
    {
      number: 4,
      icon: Calendar,
      title: "Book",
      description: "Secure your date with easy online payment",
    },
    {
      number: 5,
      icon: Sparkles,
      title: "Enjoy",
      description: "Relax while your chef creates an unforgettable experience",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Five simple steps to your perfect dining experience
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-coral flex items-center justify-center shadow-medium transition-smooth hover:scale-110 hover:shadow-large">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
