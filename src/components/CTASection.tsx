import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { MessageCircle, Clock, Zap, Award, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center p-8 md:p-12 bg-white/10 backdrop-blur-sm">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Start Your Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience MyChef Excellence?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether it's a villa service program, special event, or personal assistance, 
              our team is ready to exceed your expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg hover:scale-105 transition-all group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Request Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 hover:scale-105 transition-all"
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/20">
              {[
                { icon: Clock, text: "Available 24/7" },
                { icon: Zap, text: "Rapid Response" },
                { icon: Award, text: "Professional Service" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
