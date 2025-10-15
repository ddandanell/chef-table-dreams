import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
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
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70" />
        
        {/* Animated mesh gradient overlay */}
        <div 
          className="absolute inset-0 animate-gradient pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 50%, oklch(var(--primary) / 0.15), transparent 50%), radial-gradient(circle at 80% 80%, oklch(var(--chart-4) / 0.15), transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>
      
      {/* Floating animated orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float"
          style={{ 
            background: 'radial-gradient(circle, oklch(var(--primary) / 0.3), transparent)',
            animationDelay: '0s',
            animationDuration: '8s'
          }} 
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{ 
            background: 'radial-gradient(circle, oklch(var(--chart-4) / 0.25), transparent)',
            animationDelay: '2s',
            animationDuration: '10s'
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-glow"
          style={{ 
            background: 'radial-gradient(circle, oklch(var(--primary) / 0.1), transparent)',
            animationDuration: '6s'
          }} 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <GlassCard variant="strong" className="p-8 md:p-12 lg:p-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-6 animate-fade-in">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Premium Hospitality Services Since 2018</span>
            </div>
            
            {/* Headline with staggered animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
              <GradientText as="span" variant="gold">
                MyChef
              </GradientText>
              {" "}
              <span className="text-white">
                Professional Service Team for Your Bali Villa
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl animate-fade-in-up delay-200">
              Premium hospitality staffing for luxury villas, events, and private residences. 
              Professional chefs, servers, and concierge services delivered with hotel-standard excellence.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
              <Button 
                size="lg" 
                className="shine group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Instant Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
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
            
            {/* Trust indicators with animated icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-fade-in delay-400">
              {[
                { icon: Clock, text: "24/7 Availability", color: "text-primary" },
                { icon: Users, text: "100+ Trained Professionals", color: "text-chart-4" },
                { icon: CheckCircle, text: "Zero Booking Fees", color: "text-primary" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 group"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl glass-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
