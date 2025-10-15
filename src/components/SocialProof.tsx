import { Star, Users, ChefHat, Award } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const SocialProof = () => {
  const stats = [
    { icon: Users, value: 190500, label: "People Served" },
    { icon: ChefHat, value: 2500, label: "Verified Chefs" },
    { icon: Award, value: 50, label: "Countries Worldwide", suffix: "+" },
  ];

  const ratings = [
    { category: "Chef Quality", rating: 4.49 },
    { category: "Food Quality", rating: 4.62 },
    { category: "Presentation", rating: 4.59 },
    { category: "Cleanliness", rating: 4.75 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Social Proof</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text-gold">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our community of food lovers and culinary enthusiasts
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <GlassCard
              key={index}
              hover3d
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-4 rounded-xl rotate-6 opacity-20" />
                <div className="relative w-full h-full glass-subtle rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text-gold">
                <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Ratings */}
        <GlassCard variant="strong" className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Quality <span className="gradient-text-gold">Ratings</span>
          </h3>
          <div className="space-y-6">
            {ratings.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(item.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-bold gradient-text-gold">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-chart-4 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${(item.rating / 5) * 100}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default SocialProof;
