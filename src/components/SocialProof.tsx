import { Star, Users, ChefHat, Award } from "lucide-react";

const SocialProof = () => {
  const stats = [
    { icon: Users, value: "190,500+", label: "People Served" },
    { icon: ChefHat, value: "2,500+", label: "Verified Chefs" },
    { icon: Award, value: "50+", label: "Countries Worldwide" },
  ];

  const ratings = [
    { category: "Chef Quality", rating: 4.49 },
    { category: "Food Quality", rating: 4.62 },
    { category: "Presentation", rating: 4.59 },
    { category: "Cleanliness", rating: 4.75 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our community of food lovers and culinary enthusiasts
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground mb-4 shadow-medium">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Ratings */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-soft">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
            Our Quality Ratings
          </h3>
          <div className="space-y-6">
            {ratings.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-charcoal">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(item.rating)
                            ? 'fill-secondary text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-bold text-charcoal">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-gold rounded-full transition-smooth"
                    style={{ width: `${(item.rating / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
