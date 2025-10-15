import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass shadow-lg py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
              scrolled 
                ? "bg-gradient-to-br from-primary to-chart-4" 
                : "glass-subtle"
            )}>
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-2xl font-bold transition-all duration-300",
              scrolled ? "gradient-text-gold" : "text-white"
            )}>
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
                    ? scrolled 
                      ? "text-primary" 
                      : "text-white"
                    : scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className={cn(
                "shine transition-all duration-300",
                scrolled 
                  ? "border-primary/20 hover:bg-primary/10" 
                  : "glass-subtle border-white/30 text-white hover:bg-white/20"
              )}
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
            <Button 
              className={cn(
                "shine group hover:scale-105 transition-all duration-300",
                scrolled 
                  ? "shadow-lg shadow-primary/20" 
                  : "glass-strong text-white"
              )}
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
              scrolled ? "bg-primary/10" : "glass-subtle"
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "w-5 h-5" : "w-5 h-5 text-white"} />
            ) : (
              <Menu className={scrolled ? "w-5 h-5" : "w-5 h-5 text-white"} />
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
