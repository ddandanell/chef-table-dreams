import { Button } from "@/components/ui/button";
import { ChefHat, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-xl font-black text-foreground tracking-tight group">
            <ChefHat className="w-8 h-8 text-primary group-hover:text-coral transition-smooth" />
            <span className="font-black">My Chef Do<span className="text-xs align-top">.</span>It</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-smooth font-medium">
              Why Us
            </a>
            <a href="#who-we-serve" className="text-foreground hover:text-primary transition-smooth font-medium">
              Who We Serve
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/6282237565997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <Button variant="outline" className="gap-2 border-[hsl(var(--whatsapp-green))] text-[hsl(var(--whatsapp-green))] hover:bg-[hsl(var(--whatsapp-green))] hover:text-white">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <Button className="bg-gradient-coral hover:opacity-90 transition-smooth shadow-medium">
              Request Quote
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <a href="#services" className="block text-foreground hover:text-primary transition-smooth font-medium py-2">
              Services
            </a>
            <a href="#why-us" className="block text-foreground hover:text-primary transition-smooth font-medium py-2">
              Why Us
            </a>
            <a href="#who-we-serve" className="block text-foreground hover:text-primary transition-smooth font-medium py-2">
              Who We Serve
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-smooth font-medium py-2">
              Testimonials
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-smooth font-medium py-2">
              Contact
            </a>
            <a 
              href="https://wa.me/6282237565997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full gap-2 border-[hsl(var(--whatsapp-green))] text-[hsl(var(--whatsapp-green))]">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
