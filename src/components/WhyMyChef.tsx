import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Shield, UserCheck, Award, GraduationCap, Star, TrendingUp } from "lucide-react";

const WhyMyChef = () => {
  const differentiators = [
    {
      icon: UserCheck,
      title: "Professional Employment Model",
      description: "All staff are employed & contracted by MyChef—not freelancers. Consistent quality, reliable service.",
      color: "from-blue-500 to-blue-600",
      badge: "Employed Staff"
    },
    {
      icon: GraduationCap,
      title: "Rigorous Training Program",
      description: "Hospitality training, food safety certification, customer service excellence standards.",
      color: "from-green-500 to-green-600",
      badge: "Certified Training"
    },
    {
      icon: TrendingUp,
      title: "Consistent Quality Standards",
      description: "Uniformed staff, quality supervision, regular performance reviews, and ongoing development.",
      color: "from-purple-500 to-purple-600",
      badge: "Quality Assured"
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full liability coverage, workers compensation, and complete client protection.",
      color: "from-orange-500 to-orange-600",
      badge: "Fully Insured"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5">
            <Award className="w-4 h-4 text-primary mr-2" />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            The MyChef Difference
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not a freelance marketplace. We're a professional company delivering hotel-standard service to your private space.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <ScrollReveal 
              key={index}
              animation="slide-up" 
              delay={index * 150}
              className="group"
            >
              <GlassCard 
                hover3d
                className="h-full p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-primary/10"
              >
                {/* Enhanced Icon with dynamic gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 text-xs bg-primary/90 text-primary-foreground border-0 shadow-md"
                  >
                    {item.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMyChef;
