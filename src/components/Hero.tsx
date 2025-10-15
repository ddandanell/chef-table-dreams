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
    <div className="hero bg-base-200 min-h-screen relative pt-20" style={{ backgroundImage: `url(${hero1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-overlay bg-opacity-80 bg-black"></div>
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-foreground text-background rounded-full text-sm font-bold mb-4 shadow-lg">Since 2018</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Bali's Premier Hospitality Staffing Excellence
          </h1>
          <p className="py-6 text-lg md:text-xl text-white max-w-3xl mx-auto font-semibold drop-shadow-md">
            From intimate villa dinners to grand events, our uniformed, professional staff deliver luxury hotel standards for your home, property, or celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background text-lg px-10 py-7 font-bold shadow-xl">
              Request Service
            </Button>
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[hsl(var(--whatsapp-green))] hover:bg-[hsl(var(--whatsapp-green))]/90 text-white gap-2 text-lg px-10 py-7 font-bold shadow-xl">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm text-white">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-medium">Background-Checked</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-medium">500+ Events Annually</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
