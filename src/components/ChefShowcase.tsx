import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ChefShowcase = () => {
  const chefs = [
    { name: "Marco Rossi", location: "Rome, Italy", rating: 4.9, specialties: "Italian • Mediterranean" },
    { name: "Sophie Laurent", location: "Paris, France", rating: 4.8, specialties: "French • Pastry" },
    { name: "Hiroshi Tanaka", location: "Tokyo, Japan", rating: 5.0, specialties: "Japanese • Sushi" },
    { name: "Maria Garcia", location: "Barcelona, Spain", rating: 4.9, specialties: "Spanish • Tapas" },
    { name: "James Chen", location: "Singapore", rating: 4.7, specialties: "Fusion • Asian" },
    { name: "Isabella Santos", location: "Lisbon, Portugal", rating: 4.8, specialties: "Portuguese • Seafood" },
    { name: "Ahmed Hassan", location: "Dubai, UAE", rating: 4.9, specialties: "Middle Eastern" },
    { name: "Emma Thompson", location: "London, UK", rating: 4.6, specialties: "British • Modern" },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section id="chefs" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Meet Our Talented Chefs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class culinary experts verified and ready to create your perfect dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <Card
              key={index}
              className="p-6 transition-smooth hover:-translate-y-2 hover:shadow-large cursor-pointer animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                  <AvatarFallback className="bg-gradient-coral text-white text-2xl font-bold">
                    {getInitials(chef.name)}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-lg font-bold text-charcoal mb-1">
                  {chef.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {chef.location}
                </p>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(chef.rating)
                          ? 'fill-secondary text-secondary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-charcoal">
                    {chef.rating}
                  </span>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  {chef.specialties}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefShowcase;
