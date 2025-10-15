import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-charcoal tracking-tight">
            takeachef
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-foreground hover:text-primary transition-smooth">
              The Experience
            </a>
            <a href="#chefs" className="text-foreground hover:text-primary transition-smooth">
              Our Chefs
            </a>
            <a href="#menus" className="text-foreground hover:text-primary transition-smooth">
              Menus
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth">
              How It Works
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Login
            </Button>
            <Button className="bg-gradient-gold hover:opacity-90 transition-smooth shadow-medium">
              Find a chef
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
