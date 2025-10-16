import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMyChef from "@/components/WhyMyChef";
import ServicesSection from "@/components/ServicesSection";
import CompanyStats from "@/components/CompanyStats";
import CustomerSegments from "@/components/CustomerSegments";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyMyChef />
        <ServicesSection />
        <CompanyStats />
        <CustomerSegments />
        <HowItWorks />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6282237565997"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default Index;
