import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Users, Award, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-dining-art.jpg";

const TermsOfService = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Full-Screen Parallax Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 scale-110"
            style={{ 
              transform: `translateY(${scrollY * 0.4}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              src={heroImage} 
              alt="Fine dining experience" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-20 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full glass-strong mb-8 animate-pulse-glow">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white animate-fade-in-up">
              Service <span className="gradient-text-gold">Excellence</span>, Clearly Defined
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Our commitment to professional hospitality standards
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in-up delay-300">
              {[
                { icon: Award, text: "Licensed", color: "text-primary" },
                { icon: Users, text: "Professional", color: "text-chart-4" },
                { icon: CheckCircle, text: "Reliable", color: "text-primary" },
                { icon: FileText, text: "Transparent", color: "text-chart-4" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-xl glass-strong flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <span className="text-white font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-xl">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction & Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to My Chef Bali ("My Chef," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our hospitality staffing services, website (www.mychef.in), and all related services (collectively, the "Services").
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our Services.
            </p>
          </section>

          {/* About Our Services */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. About Our Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My Chef is a professional hospitality staffing company based in Bali, Indonesia. We provide:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Event catering services</li>
              <li>Villa service programs (private chefs, housekeeping, butler services)</li>
              <li>Personal concierge services</li>
              <li>Meal preparation services</li>
              <li>Event staffing solutions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All staff members are employed or contracted by My Chef and are professionally trained, background-checked, and insured.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old and legally capable of entering into binding contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.
            </p>
          </section>

          {/* Booking Process */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Booking Process</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1 Service Requests</h3>
            <p className="text-muted-foreground leading-relaxed">
              To request our services, you must provide accurate and complete information about your requirements, including event details, guest count, dietary restrictions, venue location, and any special requests.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Quotes and Proposals</h3>
            <p className="text-muted-foreground leading-relaxed">
              We will provide you with a detailed proposal and quote based on your requirements. Quotes are valid for 7 days unless otherwise specified.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3 Booking Confirmation</h3>
            <p className="text-muted-foreground leading-relaxed">
              A booking is confirmed only when:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>You have accepted our proposal in writing (email, WhatsApp, or website)</li>
              <li>Required deposit payment has been received</li>
              <li>You have received written confirmation from My Chef</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.4 Availability</h3>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to accommodate all requests, service availability is subject to staff capacity and scheduling. We recommend booking at least 7 days in advance for events and 3 days for regular services.
            </p>
          </section>

          {/* Pricing and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.1 Pricing</h3>
            <p className="text-muted-foreground leading-relaxed">
              All prices are quoted in Indonesian Rupiah (IDR) unless otherwise specified. Prices include service fees but exclude:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Groceries and ingredients (unless specified in package)</li>
              <li>Special equipment rental (if required)</li>
              <li>Transportation fees for locations outside Seminyak/Canggu area</li>
              <li>Gratuities (optional but appreciated)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.2 Payment Terms</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">Standard payment terms:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>One-time events:</strong> 50% deposit upon booking, 50% balance 48 hours before service</li>
              <li><strong>Weekly packages:</strong> 30% deposit upon booking, balance at start of service</li>
              <li><strong>Monthly contracts:</strong> First month paid in advance, then monthly billing</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.3 Accepted Payment Methods</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Bank transfer (Indonesian bank)</li>
              <li>International wire transfer</li>
              <li>Credit/debit card (processing fee may apply)</li>
              <li>Cash (for services under IDR 5,000,000)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.4 Late Payment</h3>
            <p className="text-muted-foreground leading-relaxed">
              If payment is not received by the due date, we reserve the right to cancel the booking and apply cancellation fees as outlined in Section 6.
            </p>
          </section>

          {/* Cancellations and Refunds */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cancellations and Refunds</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.1 Client Cancellations</h3>
            <div className="bg-muted/50 rounded-lg p-6 border border-border mt-4">
              <p className="text-muted-foreground mb-3"><strong>Cancellation Policy:</strong></p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>More than 7 days before service:</strong> Full refund minus 10% administrative fee</li>
                <li><strong>4-7 days before service:</strong> 50% refund</li>
                <li><strong>2-3 days before service:</strong> 25% refund</li>
                <li><strong>Less than 48 hours before service:</strong> No refund</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.2 My Chef Cancellations</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the rare event that we must cancel your booking due to unforeseen circumstances (staff illness, natural disaster, etc.), we will:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Notify you as soon as possible</li>
              <li>Offer alternative dates or staff members</li>
              <li>Provide a full refund if alternatives are not acceptable</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.3 Rescheduling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Requests to reschedule must be made at least 72 hours before the original service date. One free reschedule is permitted; additional changes may incur a rescheduling fee of 15% of the booking value.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.4 Refund Processing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Approved refunds will be processed within 14 business days to the original payment method.
            </p>
          </section>

          {/* Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">As a client, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate information about your requirements, venue, and any special considerations</li>
              <li>Ensure the venue/home has adequate facilities for food preparation and service</li>
              <li>Provide safe and appropriate working conditions for our staff</li>
              <li>Inform us of any allergies, dietary restrictions, or health concerns</li>
              <li>Ensure someone over 18 is present at the venue during service</li>
              <li>Notify us immediately of any changes to requirements or concerns</li>
              <li>Treat our staff with respect and professionalism</li>
              <li>Provide secure parking or reimburse parking costs if unavailable</li>
            </ul>
          </section>

          {/* Our Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Our Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">My Chef commits to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide professionally trained, uniformed, and background-checked staff</li>
              <li>Deliver services as described in the confirmed booking</li>
              <li>Maintain food safety and hygiene standards</li>
              <li>Carry appropriate liability insurance</li>
              <li>Arrive on time and prepared for the service</li>
              <li>Clean the kitchen and service areas after use</li>
              <li>Handle any issues or concerns promptly and professionally</li>
            </ul>
          </section>

          {/* Liability and Insurance */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Liability and Insurance</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.1 Our Insurance Coverage</h3>
            <p className="text-muted-foreground leading-relaxed">
              My Chef maintains comprehensive liability insurance covering property damage, personal injury, and food safety incidents that may occur during our services.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.2 Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, My Chef's total liability for any claims arising from our services shall not exceed the total amount paid for the specific booking in question.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.3 Client Property</h3>
            <p className="text-muted-foreground leading-relaxed">
              While we exercise care with your property, we are not liable for pre-existing damage or issues with appliances/equipment that were not disclosed to us in advance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.4 Force Majeure</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, government actions, pandemics, or other force majeure events.
            </p>
          </section>

          {/* Food Safety and Allergies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Food Safety and Allergies</h2>
            <p className="text-muted-foreground leading-relaxed">
              All our chefs are trained in food safety and hygiene. However, you must inform us of all allergies and dietary restrictions at the time of booking. While we take every precaution, we cannot guarantee the complete absence of allergens due to potential cross-contamination.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Clients with severe allergies should consult with our team before booking to ensure we can safely accommodate their needs.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of My Chef and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our Services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our Services, you consent to our Privacy Policy.
            </p>
          </section>

          {/* Reviews and Testimonials */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Reviews and Testimonials</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may request your feedback after service. By providing a review or testimonial, you grant My Chef permission to use your comments (with or without your name) in our marketing materials, website, and social media.
            </p>
          </section>

          {/* Photography and Media */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Photography and Media</h2>
            <p className="text-muted-foreground leading-relaxed">
              With your permission, we may photograph food, table settings, and event setups during our service for marketing purposes. We will not photograph guests without explicit consent. You may opt out of photography at any time.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">15.1 Direct Communication</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have any concerns or complaints, please contact us immediately at +62 822-3756-5997 or info@mychef.in. We are committed to resolving issues promptly and professionally.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">15.2 Governing Law</h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of Indonesia. Any disputes shall be resolved in the courts of Bali, Indonesia.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">16. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on our website with an updated "Last Updated" date. Your continued use of our Services after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">17. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to refuse service or terminate our relationship with any client who violates these Terms, treats our staff disrespectfully, or engages in fraudulent or illegal activity.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">18. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">19. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and My Chef regarding the use of our Services.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">20. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions, concerns, or support regarding these Terms or our Services, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <p className="font-semibold text-foreground mb-2">My Chef Bali</p>
              <p className="text-muted-foreground">Jalan Sunset Road No. 88</p>
              <p className="text-muted-foreground">Seminyak, Bali 80361, Indonesia</p>
              <p className="text-muted-foreground mt-3">Phone/WhatsApp: +62 822-3756-5997</p>
              <p className="text-muted-foreground">Email: info@mychef.in</p>
              <p className="text-muted-foreground">Website: www.mychef.in</p>
              <p className="text-muted-foreground mt-3">Available 24/7 for bookings and support</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-primary/5 rounded-lg p-6 border border-primary/20 mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Acknowledgment</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using My Chef's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
