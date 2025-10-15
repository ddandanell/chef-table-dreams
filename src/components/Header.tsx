import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Who We Serve", href: "#who-we-serve" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return location.hash === href;
    }
    return location.pathname === href;
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md transition-all duration-500 py-4 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-primary to-chart-4">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text-gold">
              MyChef
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-underline",
                  isActive(link.href)
                    ? "text-foreground" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-white text-foreground border border-border hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
            <Button 
              className="bg-white text-foreground border border-border hover:bg-white/90 group hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-muted/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass-strong rounded-2xl p-6 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-border/50">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <a href="#services">View Services</a>
                </Button>
                <Button 
                  className="w-full group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
