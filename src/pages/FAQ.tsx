import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What makes MyChef different from hiring freelance staff?",
          answer: "MyChef is a professionally managed hospitality company, not a freelance marketplace. All our staff are employed or contracted through our company, uniformed, trained to consistent standards, and backed by full insurance and licensing. You're working with a legitimate business, not coordinating with individual freelancers."
        },
        {
          question: "Are you available 24/7?",
          answer: "Yes! Our WhatsApp and phone lines are monitored 24/7 for inquiries and urgent bookings. For non-urgent requests, we respond within business hours (8 AM - 10 PM Bali time)."
        },
        {
          question: "Do you serve areas outside of Bali?",
          answer: "Currently, we operate exclusively in Bali. We serve all major areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, and Nusa Dua."
        },
        {
          question: "How many years have you been in business?",
          answer: "MyChef was founded in 2018 and has been providing professional hospitality staffing for over 7 years. We've grown from 10 staff members to over 100 professionals."
        }
      ]
    },
    {
      category: "Booking & Pricing",
      faqs: [
        {
          question: "How far in advance should I book?",
          answer: "For best staff availability, we recommend booking at least 3-5 days in advance. However, we often accommodate same-day and next-day requests depending on availability. Large events should be booked 2-4 weeks ahead."
        },
        {
          question: "What's included in your pricing?",
          answer: "Our rates include staff wages, uniforms, transportation to your location, and our service fee. For chef services, grocery costs are separate. For events, equipment rental (plates, glasses, etc.) can be added. All pricing is transparent with no hidden fees."
        },
        {
          question: "Do you require a deposit?",
          answer: "Yes, we typically require a 30-50% deposit to secure your booking, with the balance due on or before the service date. For corporate clients with invoicing, different terms can be arranged."
        },
        {
          question: "What's your cancellation policy?",
          answer: "Cancellations more than 48 hours before service receive a full refund. Cancellations within 48 hours incur a 50% fee. Last-minute cancellations (within 24 hours) forfeit the deposit. We understand emergencies—contact us to discuss your situation."
        },
        {
          question: "Can I request the same staff for recurring bookings?",
          answer: "Absolutely! For regular clients (weekly villa service, monthly events, etc.), we assign dedicated staff who become familiar with your preferences. This ensures consistent, personalized service."
        }
      ]
    },
    {
      category: "Service Delivery",
      faqs: [
        {
          question: "What if I'm not satisfied with the service?",
          answer: "Client satisfaction is our priority. If you're unhappy with any aspect of our service, contact us immediately. We'll address the issue in real-time if possible, or provide a partial refund or credit for future service depending on the situation."
        },
        {
          question: "Do your staff speak English?",
          answer: "All our staff have at least conversational English ability. Chefs, butlers, and concierge staff have fluent English for detailed communication. We can also provide Indonesian-only staff if preferred."
        },
        {
          question: "What happens if staff don't show up?",
          answer: "This has never happened in our 7-year history. We have backup staff for every booking and supervisors who ensure arrival. If an extreme emergency occurred, we'd provide immediate replacement staff or a full refund."
        },
        {
          question: "Can I customize the service to my specific needs?",
          answer: "Yes! We specialize in customized solutions. Whether it's dietary restrictions, special event themes, specific cleaning protocols, or unique requests—we work with you to deliver exactly what you need."
        },
        {
          question: "What equipment do staff bring?",
          answer: "Chefs bring professional knives and basic cooking tools. Housekeeping brings cleaning supplies. For events, we can provide full equipment rental (tables, chairs, glassware, etc.) at additional cost, or work with your existing setup."
        }
      ]
    },
    {
      category: "Staff & Quality",
      faqs: [
        {
          question: "Are your staff certified and trained?",
          answer: "Yes. All staff complete our internal hospitality training program. Chefs hold food safety certifications. We conduct monthly training workshops on customer service, professional standards, and specialized skills."
        },
        {
          question: "Do you conduct background checks?",
          answer: "Every team member undergoes background verification and reference checks before joining MyChef. Client safety and trust are paramount to our operations."
        },
        {
          question: "How do you ensure service consistency?",
          answer: "We have standardized operating procedures for every service type, regular staff training, supervisor oversight for large events, and a quality feedback system. Our team culture emphasizes professionalism and pride in their work."
        },
        {
          question: "Can I meet the staff before the service?",
          answer: "For large or long-term bookings, we're happy to arrange a brief meet-and-greet. For standard bookings, we provide staff profiles (photo, experience, specialties) in advance."
        }
      ]
    },
    {
      category: "Payment & Invoicing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, cash, and for international clients, PayPal or international wire transfer. Corporate clients can arrange invoice billing with payment terms."
        },
        {
          question: "Do you provide receipts and invoices?",
          answer: "Yes, all transactions include a formal invoice from our licensed company. Perfect for expense reporting, villa management records, or corporate accounting."
        },
        {
          question: "Are there discounts for long-term contracts?",
          answer: "Yes! Weekly and monthly packages offer significantly better rates than individual bookings. Contact us for custom pricing on long-term villa management or recurring event staffing."
        },
        {
          question: "Can I tip the staff directly?",
          answer: "Absolutely! Tips are not included in our pricing and are always appreciated by the staff. You can give cash directly to the team—they keep 100% of gratuities."
        }
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Support Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text-gold">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find quick answers to common questions about booking, services, pricing, and quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-3xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${catIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6 bg-card/50"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground">Our team is ready to help you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-8 text-center hover:scale-105 transition-all">
                <div className="w-14 h-14 rounded-full bg-[oklch(var(--whatsapp-green))]/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-[oklch(var(--whatsapp-green))]" />
                </div>
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Fastest response</p>
                <p className="font-medium mb-4">+62 822-3756-5997</p>
                <Button className="w-full">Chat Now</Button>
              </GlassCard>

              <GlassCard className="p-8 text-center hover:scale-105 transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak to our team</p>
                <p className="font-medium mb-4">+62 822-3756-5997</p>
                <Button className="w-full" variant="outline">Call Us</Button>
              </GlassCard>

              <GlassCard className="p-8 text-center hover:scale-105 transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Detailed inquiries</p>
                <p className="font-medium mb-4">info@mychef.in</p>
                <Button className="w-full" variant="outline">Send Email</Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;
