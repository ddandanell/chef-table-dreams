import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, Shield, Users, Heart, Target, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Every team member undergoes rigorous training in hospitality, food safety, and customer service to deliver consistent five-star experiences."
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete business licensing, liability insurance, and worker protections ensure peace of mind for every client engagement."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "100+ uniformed staff members with verified backgrounds, professional certifications, and ongoing skill development programs."
    },
    {
      icon: Heart,
      title: "Service-First Culture",
      description: "We don't just fill positions—we create memorable experiences. Our team genuinely cares about exceeding your expectations."
    }
  ];

  const milestones = [
    { year: "2018", event: "Company founded with 10 staff members" },
    { year: "2019", event: "Expanded to 50+ professionals" },
    { year: "2021", event: "Launched villa management services" },
    { year: "2023", event: "Reached 100+ team members" },
    { year: "2024", event: "Served 1,000+ events successfully" }
  ];

  const certifications = [
    "Licensed Hospitality Company",
    "Food Safety Certified",
    "Liability Insurance Coverage",
    "Background Verified Staff",
    "ISO Service Standards",
    "Environmental Compliance"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Established 2018</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Excellence <span className="gradient-text-gold">Since 2018</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're not a gig marketplace connecting freelancers. We're a professionally managed hospitality company with trained, uniformed staff delivering consistent five-star service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To elevate private hospitality in Bali by providing professional, reliable staff who deliver hotel-standard service in villas, events, and private residences.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018, MyChef began when we recognized a gap in Bali's hospitality market: villa owners and event planners needed professional staff, not just freelance workers. They needed consistency, accountability, and the assurance of working with a legitimate company.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we employ over 100 trained professionals who serve hundreds of clients across Bali, from luxury villas to high-profile events. Our success is built on one principle: treat every service like it's for a five-star hotel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Professional Staff</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-sm text-muted-foreground">Events Served</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The difference between hiring staff and hiring MyChef
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Building Bali's most trusted hospitality company</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">{milestone.year}</span>
                  </div>
                </div>
                <GlassCard className="flex-1 p-6">
                  <p className="text-lg">{milestone.event}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Licenses & Certifications</h2>
            <p className="text-xl text-muted-foreground">Fully compliant and professionally certified</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <GlassCard key={index} className="p-6 flex items-center gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default AboutUs;
