import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { MessageCircle, CheckCircle, Award, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-villa-event.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base image layer with parallax */}
        <div 
          className="absolute inset-0 scale-110"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src={heroImage} 
            alt="Luxury villa service in Bali" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/75" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm mb-8 animate-fade-in">
            <Award className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Premium Hospitality Services Since 2018</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up delay-100 text-white">
            MyChef
            <br />
            Professional Service Team for Your Bali Villa
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Premium hospitality staffing for luxury villas, events, and private residences. 
            Professional chefs, servers, and concierge services delivered with hotel-standard excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="bg-white text-foreground hover:bg-white/90 group hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get Instant Quote
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-foreground hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
              asChild
            >
              <a 
                href="https://wa.me/6282237565997" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/30 animate-fade-in delay-400 max-w-4xl mx-auto">
            {[
              { icon: Clock, text: "24/7 Availability" },
              { icon: Users, text: "100+ Trained Professionals" },
              { icon: CheckCircle, text: "Zero Booking Fees" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:border-white/50 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white font-medium text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
