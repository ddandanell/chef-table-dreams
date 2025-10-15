import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import hero9 from "@/assets/hero-9.jpg";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted pt-20">
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4 opacity-30">
        {images.map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, gridRow: `span ${Math.floor(Math.random() * 2) + 1}` }}>
            <img src={img} alt={`Professional service ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl animate-scale-in">
          <div className="mb-4"><span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Since 2018</span></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">Bali's Premier Hospitality Staffing Excellence</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">100+ Trained Professionals | 5-Star Villa Service | Trusted by Bali's Finest Properties</p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">From intimate villa dinners to grand events, our uniformed, professional staff deliver luxury hotel standards for your home, property, or celebration.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-coral hover:opacity-90 transition-smooth shadow-medium text-lg px-8 py-6">Request Service</Button>
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-[hsl(var(--whatsapp-green))] hover:bg-[hsl(var(--whatsapp-green))]/90 text-white gap-2 text-lg px-8 py-6 w-full sm:w-auto"><MessageCircle className="w-5 h-5" />WhatsApp Us</Button></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-muted-foreground">Licensed & Insured</span></div>
            <div className="flex items-center justify-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-muted-foreground">Background-Checked</span></div>
            <div className="flex items-center justify-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-muted-foreground">24/7 Support</span></div>
            <div className="flex items-center justify-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-muted-foreground">500+ Events Annually</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
