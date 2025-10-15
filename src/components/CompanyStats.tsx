import { TrendingUp, Users, Calendar, Award, Shield, CheckCircle } from "lucide-react";

const CompanyStats = () => {
  const stats = [
    { icon: Calendar, label: "Since", value: "2018" },
    { icon: Users, label: "Professional Staff", value: "100+" },
    { icon: TrendingUp, label: "Events Per Year", value: "500+" },
    { icon: Award, label: "Villa Partnerships", value: "50+" },
    { icon: CheckCircle, label: "Client Retention", value: "98%" }
  ];

  const certifications = [
    { icon: Shield, text: "Licensed by Indonesian Tourism Board" },
    { icon: Award, text: "Food Safety Certified" },
    { icon: CheckCircle, text: "Fully Insured & Bonded" },
    { icon: Users, text: "Bali Hotel & Restaurant Association Member" }
  ];

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Established Excellence
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Years of experience delivering premium hospitality services across Bali
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm font-medium">{cert.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
