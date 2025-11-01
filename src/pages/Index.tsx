import { Hero } from "@/components/Hero";
import { ConceptSection } from "@/components/ConceptSection";
import { HowItWorks } from "@/components/HowItWorks";
import { AudienceCards } from "@/components/AudienceCards";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ConceptSection />
      <HowItWorks />
      <AudienceCards />
      <Footer />
    </div>
  );
};

export default Index;
