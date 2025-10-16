import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Home, Calendar, Users, Building, Heart, Briefcase } from "lucide-react";
import CTASection from "@/components/CTASection";

const WhoWeServe = () => {
  const segments = [
    {
      icon: Home,
      title: "Villa Owners & Property Managers",
      description: "Elevate your rental property with professional hospitality staff that turns good reviews into exceptional ones.",
      needs: [
        "Daily housekeeping & turnover services",
        "Guest welcome & departure coordination",
        "In-villa dining experiences",
        "Ongoing property maintenance support"
      ],
      benefits: [
        "Increase booking rates with premium service offerings",
        "Reduce guest complaints through professional staff",
        "Flexible staffing for occupancy changes",
        "Same-day service availability"
      ],
      caseStudy: {
        client: "Luxury Villa in Canggu",
        result: "Increased 5-star reviews by 40% after adding daily chef service",
        quote: "Guests now specifically book because of the chef service. It's become our signature feature."
      }
    },
    {
      icon: Calendar,
      title: "Event Planners & Wedding Coordinators",
      description: "Focus on creative details while we handle the service execution with experienced event staff.",
      needs: [
        "Professional waitstaff & bartenders",
        "Event setup & breakdown crews",
        "Kitchen staff & catering teams",
        "Event coordination support"
      ],
      benefits: [
        "Uniformed staff who represent your brand",
        "Scalable teams from 5 to 50+ staff",
        "Reliable, trained professionals",
        "Insurance & licensing covered"
      ],
      caseStudy: {
        client: "Destination Wedding Company",
        result: "Successfully staffed 120+ weddings with zero service complaints",
        quote: "MyChef is our only staffing partner. They've never let us down, even for last-minute additions."
      }
    },
    {
      icon: Users,
      title: "Expat Residents & Long-Term Visitors",
      description: "Enjoy Bali living without the hassles—personal staff who make daily life effortless.",
      needs: [
        "Weekly housekeeping services",
        "Personal chef for daily meals",
        "Concierge & errand services",
        "Household management"
      ],
      benefits: [
        "Consistent service from the same staff",
        "Monthly packages at discounted rates",
        "Flexible scheduling around your life",
        "English-speaking professionals"
      ],
      caseStudy: {
        client: "American Family in Ubud",
        result: "Saved 15+ hours weekly with comprehensive household service package",
        quote: "Our chef knows exactly how the kids like their meals. It feels like having family help."
      }
    },
    {
      icon: Building,
      title: "Retreat Centers & Co-Living Spaces",
      description: "Maintain consistent hospitality standards with dedicated staff who understand your community.",
      needs: [
        "Daily meal preparation for groups",
        "Common area maintenance",
        "Guest services coordination",
        "Workshop & event support"
      ],
      benefits: [
        "Dedicated staff familiar with your space",
        "Dietary accommodation expertise",
        "Flexible for varying occupancy",
        "Professional kitchen management"
      ],
      caseStudy: {
        client: "Yoga Retreat in Ubud",
        result: "Serves 200+ vegetarian meals weekly with zero dietary errors",
        quote: "They handle complex dietary needs seamlessly. Our guests rave about the food quality."
      }
    },
    {
      icon: Heart,
      title: "Private Celebrations & Family Events",
      description: "Make your special moments unforgettable with attentive service that lets you enjoy the occasion.",
      needs: [
        "Birthday party staffing",
        "Anniversary dinners",
        "Family reunion catering",
        "Intimate gathering support"
      ],
      benefits: [
        "Stress-free hosting experience",
        "Professional service at home",
        "Custom menu design",
        "Complete setup & cleanup"
      ],
      caseStudy: {
        client: "50th Birthday Villa Party",
        result: "Hosted 30 guests with seamless 5-course dinner service",
        quote: "I actually got to enjoy my own party! The staff were invisible yet attentive."
      }
    },
    {
      icon: Briefcase,
      title: "Corporate Clients & Business Events",
      description: "Impress clients and motivate teams with professional hospitality at your corporate functions.",
      needs: [
        "Team building event staffing",
        "Client entertainment coordination",
        "Corporate retreat services",
        "Meeting & conference support"
      ],
      benefits: [
        "Professional image with uniformed staff",
        "Invoice & documentation for accounting",
        "Reliable service for reputation-critical events",
        "Scalable solutions for any group size"
      ],
      caseStudy: {
        client: "Tech Company Retreat",
        result: "Managed meals & service for 40-person week-long retreat",
        quote: "The team could focus on collaboration while MyChef handled everything else perfectly."
      }
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Tailored Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tailored Service for <span className="gradient-text-gold">Every Occasion</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From luxury villa operations to intimate celebrations, we deliver professional hospitality solutions designed for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {segments.map((segment, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <segment.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-3">{segment.title}</h2>
                        <p className="text-lg text-muted-foreground">{segment.description}</p>
                      </div>
                    </div>

                    <GlassCard className="p-8 mb-6">
                      <h3 className="text-xl font-bold mb-4">What You Need</h3>
                      <ul className="space-y-3">
                        {segment.needs.map((need, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>

                    <GlassCard className="p-8">
                      <h3 className="text-xl font-bold mb-4">Why Choose MyChef</h3>
                      <ul className="space-y-3">
                        {segment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>

                  {/* Right Column - Case Study */}
                  <div className="lg:sticky lg:top-24">
                    <GlassCard className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                      <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                        Success Story
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{segment.caseStudy.client}</h3>
                      <div className="mb-6">
                        <div className="text-lg font-semibold mb-2">Result:</div>
                        <p className="text-muted-foreground">{segment.caseStudy.result}</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6 py-2">
                        <p className="italic text-lg">"{segment.caseStudy.quote}"</p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <Button className="w-full">Get Started with This Service</Button>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Don't See Your Situation?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We work with all types of clients and can customize solutions for unique needs. Let's discuss how we can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule Consultation</Button>
              <Button size="lg" variant="outline">View All Services</Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default WhoWeServe;
