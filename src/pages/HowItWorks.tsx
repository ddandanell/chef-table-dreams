import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { MessageCircle, Calendar, CheckCircle, Star, Phone, Mail } from "lucide-react";
import CTASection from "@/components/CTASection";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Initial Contact",
      description: "Reach out via WhatsApp, phone, or email to discuss your needs",
      details: [
        "Available 24/7 for inquiries",
        "Immediate response during business hours",
        "No obligation consultation",
        "Discuss service requirements"
      ]
    },
    {
      number: "02",
      icon: Calendar,
      title: "Service Planning",
      description: "We design a custom service plan tailored to your specific requirements",
      details: [
        "Detailed service proposal",
        "Staff selection based on your needs",
        "Transparent pricing breakdown",
        "Timeline coordination"
      ]
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Confirmation & Preparation",
      description: "Secure your booking with our simple confirmation process",
      details: [
        "Contract agreement",
        "Payment processing",
        "Pre-service briefing",
        "Staff assignments finalized"
      ]
    },
    {
      number: "04",
      icon: Star,
      title: "Service Delivery",
      description: "Our professional team arrives and delivers exceptional service",
      details: [
        "Uniformed staff arrival",
        "Quality service execution",
        "Real-time support available",
        "Supervisor oversight"
      ]
    }
  ];

  const whatToExpect = [
    {
      title: "Pre-Service Communication",
      items: [
        "Confirmation call 24 hours before service",
        "Staff profiles shared in advance",
        "Menu or service plan review",
        "Special requests accommodation"
      ]
    },
    {
      title: "On Service Day",
      items: [
        "Staff arrival 30 minutes early",
        "Professional uniforms & equipment",
        "Courteous, attentive service",
        "Seamless execution"
      ]
    },
    {
      title: "Post-Service",
      items: [
        "Quality feedback collection",
        "Invoice delivery within 24 hours",
        "Follow-up for future bookings",
        "Ongoing support available"
      ]
    }
  ];

  const qualityAssurance = [
    {
      title: "Staff Vetting",
      description: "Background checks, reference verification, and skill assessments for every team member"
    },
    {
      title: "Ongoing Training",
      description: "Monthly workshops on hospitality standards, food safety, and customer service"
    },
    {
      title: "Supervision System",
      description: "Experienced supervisors oversee large events and provide real-time quality control"
    },
    {
      title: "Feedback Loop",
      description: "Client feedback directly influences staff development and service improvements"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Simple & Transparent Process</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              From Inquiry to <span className="gradient-text-gold">Exceptional Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our streamlined booking process ensures you get professional hospitality staff exactly when and how you need them.
            </p>
            <Button size="lg" className="group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Booking Now
            </Button>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Four Simple Steps</h2>
            <p className="text-xl text-muted-foreground">From first contact to flawless execution</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <GlassCard className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm font-bold text-primary mb-2 block">STEP {step.number}</span>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-xl text-muted-foreground">Clear communication at every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatToExpect.map((phase, index) => (
              <GlassCard key={index} className="p-8">
                <h3 className="text-xl font-bold mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Quality Promise</h2>
            <p className="text-xl text-muted-foreground">How we ensure consistent excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualityAssurance.map((item, index) => (
              <GlassCard key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">Choose your preferred way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-full bg-[oklch(var(--whatsapp-green))]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-[oklch(var(--whatsapp-green))]" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Instant response</p>
              <Button className="w-full">Message Us</Button>
            </GlassCard>

            <GlassCard className="p-8 text-center hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Phone Call</h3>
              <p className="text-sm text-muted-foreground mb-4">Speak directly to us</p>
              <Button className="w-full" variant="outline">Call Now</Button>
            </GlassCard>

            <GlassCard className="p-8 text-center hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Detailed inquiries</p>
              <Button className="w-full" variant="outline">Send Email</Button>
            </GlassCard>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default HowItWorks;
