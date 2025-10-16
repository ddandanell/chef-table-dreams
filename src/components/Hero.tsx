import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { MessageCircle, CheckCircle, Award, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal animation="fade" delay={0}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm mb-8">
              <Award className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Premium Hospitality Services Since 2018</span>
            </div>
          </ScrollReveal>
          
          {/* Headline */}
          <ScrollReveal animation="slide-up" delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              MyChef
              <br />
              Professional Service Team for Your Bali Villa
            </h1>
          </ScrollReveal>
          
          {/* Description */}
          <ScrollReveal animation="slide-up" delay={200}>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
              Premium hospitality staffing for luxury villas, events, and private residences. 
              Professional chefs, servers, and concierge services delivered with hotel-standard excellence.
            </p>
          </ScrollReveal>
          
          {/* CTA Buttons */}
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90 btn-hover-lift group"
              >
                <MessageCircle className="w-5 h-5 mr-2 icon group-hover:rotate-12 transition-transform" />
                Get Instant Quote
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90 btn-hover-lift"
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
          </ScrollReveal>
          
          {/* Spacing maintained */}
          <div className="pt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
