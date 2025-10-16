import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Gift, Heart, Briefcase, Calendar, Star, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

const GiftCards = () => {
  const giftOptions = [
    {
      value: "$250",
      description: "Perfect for a special dinner for two with a private chef",
      recommended: "Intimate Celebrations"
    },
    {
      value: "$500",
      description: "Great for event staffing or a week of villa housekeeping",
      recommended: "Villa Guests",
      popular: true
    },
    {
      value: "$1,000",
      description: "Ideal for comprehensive event catering or monthly villa services",
      recommended: "Premium Events"
    },
    {
      value: "Custom",
      description: "Choose any amount to match your recipient's specific needs",
      recommended: "Flexible Option"
    }
  ];

  const occasions = [
    {
      icon: Heart,
      title: "Weddings & Anniversaries",
      description: "Gift the couple professional service for their special celebration or honeymoon villa stay"
    },
    {
      icon: Calendar,
      title: "Birthday Celebrations",
      description: "Let them host a stress-free party with professional chef and waitstaff service"
    },
    {
      icon: Briefcase,
      title: "Corporate Gifts",
      description: "Reward clients or employees with luxury villa experiences and professional hospitality"
    },
    {
      icon: Gift,
      title: "Thank You Gifts",
      description: "Show appreciation with the gift of exceptional service for their Bali visit"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Amount",
      description: "Select a preset value or customize your own gift amount"
    },
    {
      step: "2",
      title: "Personalize",
      description: "Add a personal message and choose digital or physical delivery"
    },
    {
      step: "3",
      title: "Send",
      description: "Gift card delivered instantly via email or scheduled for a special date"
    },
    {
      step: "4",
      title: "They Redeem",
      description: "Recipient books any of our services using their gift card code"
    }
  ];

  const corporateFeatures = [
    "Bulk purchase discounts (10+ cards)",
    "Custom branded gift cards",
    "Company logo inclusion",
    "Dedicated account manager",
    "Usage tracking & reporting",
    "Invoice billing available"
  ];

  const faqs = [
    {
      question: "Do gift cards expire?",
      answer: "Gift cards are valid for 12 months from the purchase date."
    },
    {
      question: "Can gift cards be used for any service?",
      answer: "Yes! Recipients can use them for any of our services: chefs, waitstaff, housekeeping, concierge, or event staffing."
    },
    {
      question: "What if the service costs more than the gift card value?",
      answer: "Recipients simply pay the difference. If the service costs less, the remaining balance stays on the card."
    },
    {
      question: "Can I purchase a gift card for someone outside Bali?",
      answer: "Absolutely! Digital gift cards can be purchased from anywhere and redeemed when the recipient visits Bali."
    },
    {
      question: "Is there a minimum purchase amount?",
      answer: "The minimum gift card value is $50. Maximum is $5,000 per card."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Perfect Gift Idea</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Give the Gift of <span className="gradient-text-gold">Exceptional Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              MyChef gift cards let your loved ones experience professional hospitality—perfect for villa stays, special events, or unforgettable celebrations in Bali.
            </p>
            <Button size="lg" className="group">
              <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Purchase Gift Card
            </Button>
          </div>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Gift Amount</h2>
            <p className="text-xl text-muted-foreground">Select from popular values or create a custom amount</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {giftOptions.map((option, index) => (
              <GlassCard 
                key={index} 
                className={`p-8 text-center hover:scale-105 transition-all ${option.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {option.popular && (
                  <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl font-bold mb-4">{option.value}</div>
                <p className="text-sm text-muted-foreground mb-4 min-h-[48px]">{option.description}</p>
                <div className="text-xs font-medium text-primary mb-6">
                  {option.recommended}
                </div>
                <Button className="w-full" variant={option.popular ? "default" : "outline"}>
                  Select
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Occasions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For Every Occasion</h2>
            <p className="text-xl text-muted-foreground">Thoughtful gifts that create lasting memories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {occasions.map((occasion, index) => (
              <GlassCard key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <occasion.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{occasion.title}</h3>
                    <p className="text-muted-foreground">{occasion.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Gift Cards Work</h2>
            <p className="text-xl text-muted-foreground">Simple to give, easy to redeem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">For Businesses</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Corporate Gift Card Packages</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reward employees, impress clients, or offer unique incentives with bulk MyChef gift cards. Professional hospitality makes a memorable corporate gift.
                </p>
                <Button size="lg">Request Corporate Pricing</Button>
              </div>

              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-6">Corporate Benefits</h3>
                <ul className="space-y-3">
                  {corporateFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="p-8">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Give Something Extraordinary?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Purchase a MyChef gift card today and give your loved ones an experience they'll never forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Buy Gift Card Now</Button>
              <Button size="lg" variant="outline">Contact for Corporate Orders</Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
};

export default GiftCards;
