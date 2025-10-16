import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ChefHat, Users, TrendingUp, Heart, Award, DollarSign, Calendar, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Industry-leading wages with regular increases based on performance and tenure"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Work schedules that fit your life—choose full-time or per-event opportunities"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths from service staff to supervisory and management roles"
    },
    {
      icon: Award,
      title: "Professional Training",
      description: "Monthly workshops on hospitality, food safety, customer service, and specialized skills"
    },
    {
      icon: Heart,
      title: "Team Environment",
      description: "Work with 100+ professionals in a supportive, respectful company culture"
    },
    {
      icon: Users,
      title: "Insurance & Benefits",
      description: "Health coverage, accident insurance, and worker protections for all team members"
    }
  ];

  const positions = [
    {
      title: "Chef de Partie",
      type: "Full-time / Event-based",
      pay: "Rp 4.5M - 7M/month",
      requirements: [
        "3+ years professional kitchen experience",
        "Culinary certification preferred",
        "Menu planning & food costing skills",
        "English communication ability"
      ]
    },
    {
      title: "Waitstaff / Server",
      type: "Full-time / Event-based",
      pay: "Rp 3M - 4.5M/month",
      requirements: [
        "1+ years service experience",
        "Professional presentation",
        "Customer service excellence",
        "Ability to work events & villa shifts"
      ]
    },
    {
      title: "Bartender",
      type: "Event-based",
      pay: "Rp 350K - 500K/event",
      requirements: [
        "Cocktail mixing experience",
        "Responsible service knowledge",
        "High-energy personality",
        "Event bartending preferred"
      ]
    },
    {
      title: "Housekeeping Staff",
      type: "Full-time",
      pay: "Rp 3M - 4M/month",
      requirements: [
        "Villa or hotel housekeeping experience",
        "Attention to detail",
        "Reliable & punctual",
        "Ability to work independently"
      ]
    },
    {
      title: "Event Coordinator",
      type: "Full-time",
      pay: "Rp 5M - 8M/month",
      requirements: [
        "2+ years event management",
        "Team leadership experience",
        "Excellent communication",
        "Problem-solving under pressure"
      ]
    },
    {
      title: "Butler / Concierge",
      type: "Full-time",
      pay: "Rp 4M - 6M/month",
      requirements: [
        "Luxury hospitality background",
        "Discretion & professionalism",
        "Multi-tasking ability",
        "English fluency required"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Submit Application",
      description: "Fill out our online form with your experience and availability"
    },
    {
      step: "2",
      title: "Phone Screening",
      description: "Brief call to discuss your background and career goals"
    },
    {
      step: "3",
      title: "Skills Assessment",
      description: "Practical demonstration of your abilities (cooking, service, etc.)"
    },
    {
      step: "4",
      title: "Interview & Training",
      description: "Meet the team and begin your onboarding process"
    }
  ];

  const testimonials = [
    {
      name: "Wayan K.",
      role: "Senior Chef (3 years with MyChef)",
      quote: "I've grown so much here. Started as a line cook, now I lead teams at major events. The training and opportunities are real."
    },
    {
      name: "Made S.",
      role: "Event Supervisor (2 years)",
      quote: "Best hospitality company I've worked for in Bali. They actually care about staff welfare and pay fairly."
    },
    {
      name: "Putu A.",
      role: "Butler (1 year)",
      quote: "Working with international clients has improved my English and professional skills tremendously. Great career move."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <ChefHat className="w-4 h-4" />
              <span className="text-sm font-medium">Now Hiring</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Bali's Leading <span className="gradient-text-gold">Hospitality Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build your career with a professional company that invests in training, offers real growth opportunities, and treats staff with respect.
            </p>
            <Button size="lg" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why MyChef?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than a job—a career path with a company that values its people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">Find your perfect role</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {positions.map((position, index) => (
              <GlassCard key={index} className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-primary">{position.pay}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Apply for This Position</Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground">Four simple steps to join our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">Start Your Application</Button>
          </div>
        </div>
      </section>

      {/* Staff Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hear From Our Team</h2>
            <p className="text-xl text-muted-foreground">Real experiences from MyChef professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} className="p-8">
                <div className="mb-6">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default Careers;
