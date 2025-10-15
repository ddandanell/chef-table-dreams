import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import ChefShowcase from "@/components/ChefShowcase";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <ChefShowcase />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
