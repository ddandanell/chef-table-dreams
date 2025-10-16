import { GlassCard } from "@/components/ui/glass-card";
import { Shield, Users, Clock, Award, CheckCircle, Star } from "lucide-react";

const WhyMyChef = () => {
  const differentiators = [
    {
      icon: Users,
      title: "Professional Employment Model",
      description: "All staff are employed & contracted by MyChef—not freelancers. Consistent quality, reliable service."
    },
    {
      icon: Award,
      title: "Rigorous Training Program",
      description: "Hospitality training, food safety certification, customer service excellence standards."
    },
    {
      icon: Star,
      title: "Consistent Quality Standards",
      description: "Uniformed staff, quality supervision, regular performance reviews, and ongoing development."
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full liability coverage, workers compensation, and complete client protection."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-black">MyChef</span> Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not a freelance marketplace. We're a professional company delivering hotel-standard service to your private space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <GlassCard 
              key={index}
              hover3d
              className={`group animate-fade-in-up delay-${index * 100}`}
            >
              {/* Icon with gradient background */}
              <div className="relative w-14 h-14 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-4 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                <div className="relative w-full h-full glass-subtle rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text-gold transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMyChef;
