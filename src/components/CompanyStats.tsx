import { TrendingUp, Users, Calendar, Award, Shield, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const CompanyStats = () => {
  const stats = [
    { icon: Calendar, label: "Operating Since", value: 2018, suffix: "" },
    { icon: Users, label: "Professional Staff", value: 100, suffix: "+" },
    { icon: TrendingUp, label: "Events Per Year", value: 500, suffix: "+" },
    { icon: Award, label: "Villa Partnerships", value: 50, suffix: "+" },
    { icon: CheckCircle, label: "Client Retention", value: 98, suffix: "%" }
  ];

  const certifications = [
    { icon: Shield, text: "Licensed by Indonesian Tourism Board" },
    { icon: Award, text: "Food Safety Certified" },
    { icon: CheckCircle, text: "Fully Insured & Bonded" },
    { icon: Users, text: "Bali Hotel & Restaurant Association Member" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Established</span> Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Years of experience delivering premium hospitality services across Bali
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <GlassCard
              key={index}
              className="text-center p-6"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & <span className="text-primary">Compliance</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <GlassCard
                key={index}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{cert.text}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
