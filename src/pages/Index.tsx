import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GradientText } from "@/components/ui/gradient-text";
import { 
  ChefHat, 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle,
  Instagram,
  Youtube,
  Mail
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-villa-event.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Chefs", href: "/services" },
    { name: "Experiences", href: "/about" },
    { name: "About", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* ===== NAVIGATION ===== */}
      <header className="fixed top-0 w-full z-50">
        <nav className="bg-black px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                MyChef
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <main className="flex-grow">
        <section className="relative flex flex-col justify-center items-center min-h-screen text-center">
          {/* Background */}
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt="Premium chef services in Bali" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6">
            <ScrollReveal animation="fade" delay={0}>
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/10 text-primary">
                Premium Hospitality Services Since 2018
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={100}>
              <GradientText 
                as="h1" 
                variant="gold"
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Empowering Bali's chefs to connect with wellness-minded travelers
              </GradientText>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={200}>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Local flavor. Global connection. Wellness at every bite.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/services">Explore Chefs</Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold"
                >
                  Watch Intro Video
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black border-t border-gray-700 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Logo + Tagline */}
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  MyChef
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Connecting local chefs with global wellness travelers through premium hospitality experiences.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-primary transition-colors">About</Link>
                <Link to="/services" className="block text-gray-400 hover:text-primary transition-colors">Services</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-primary transition-colors">Contact</Link>
                <Link to="/privacy-policy" className="block text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="block text-gray-400 hover:text-primary transition-colors">Terms of Use</Link>
              </div>
            </div>

            {/* Column 3: Social + Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Stay Connected</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://wa.me/6282237565997" className="text-gray-400 hover:text-primary transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} MyChef Bali. GDPR Compliant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6282237565997"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(var(--whatsapp-green))] hover:bg-[hsl(var(--whatsapp-green))]/90 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default Index;
