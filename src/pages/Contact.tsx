import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/ui/glass-card";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create Something <span className="gradient-text-gold">Exceptional</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need immediate service or want to discuss a custom hospitality solution, we're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="w-12 h-12 rounded-full bg-[oklch(var(--whatsapp-green))]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[oklch(var(--whatsapp-green))]" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-2">Instant messaging</p>
              <p className="text-sm font-medium">+62 822-3756-5997</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-2">Call us anytime</p>
              <p className="text-sm font-medium">+62 822-3756-5997</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-2">For detailed inquiries</p>
              <p className="text-sm font-medium">info@mychef.in</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Availability</h3>
              <p className="text-sm text-muted-foreground mb-2">24/7 support</p>
              <p className="text-sm font-medium">Always here</p>
            </GlassCard>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <GlassCard className="p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input 
                      placeholder="John Smith" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+62 812 3456 7890" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Service Type
                    </label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>Event Catering</option>
                      <option>Villa Services</option>
                      <option>Private Chef</option>
                      <option>Event Staffing</option>
                      <option>Concierge</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your needs..." 
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </GlassCard>

            {/* Office Information */}
            <div className="space-y-8">
              <GlassCard className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bali Office</h3>
                    <p className="text-muted-foreground mb-4">
                      Jalan Sunset Road No. 88<br />
                      Seminyak, Bali 80361<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-bold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday - Sunday</span>
                      <span className="font-medium">8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergency Line</span>
                      <span className="font-medium">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-bold mb-4">Fastest Response?</h3>
                <p className="text-muted-foreground mb-6">
                  For immediate assistance or urgent bookings, WhatsApp is your best option. Our team monitors messages 24/7 and can provide instant quotes and availability.
                </p>
                <Button className="w-full" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-4">Service Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  We serve all major areas in Bali:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Sanur', 'Nusa Dua', 'Kuta', 'Jimbaran'].map((area) => (
                    <span key={area} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                <p className="text-muted-foreground">Jalan Sunset Road No. 88, Seminyak, Bali</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
