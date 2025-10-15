import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Zap, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience My Chef Excellence?
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether it's a villa service program, special event, or personal assistance, 
            our team is ready to exceed your expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-foreground hover:bg-white/90 text-lg px-8 py-6 shadow-xl"
            >
              Request Quote
            </Button>
            <a 
              href="https://wa.me/6282237565997" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="bg-[hsl(var(--whatsapp-green))] border-white text-white hover:bg-[hsl(var(--whatsapp-green))]/90 gap-2 text-lg px-8 py-6 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Available 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Rapid Response</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
