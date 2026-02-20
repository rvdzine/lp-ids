import HeroSection from "@/components/landing/HeroSection";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import AIAdvantage from "@/components/landing/AIAdvantage";
import SkillGapWarning from "@/components/landing/SkillGapWarning";
import TrustStats from "@/components/landing/TrustStats";
import InstructorAuthority from "@/components/landing/InstructorAuthority";
import CaseStudy from "@/components/landing/CaseStudy";
import ComparisonTable from "@/components/landing/ComparisonTable";
import CourseModules from "@/components/landing/CourseModules";
import CareerOutcomes from "@/components/landing/CareerOutcomes";
import ToolsGrid from "@/components/landing/ToolsGrid";
import Testimonials from "@/components/landing/Testimonials";
import FAQSection from "@/components/landing/FAQSection";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <UrgencyBanner />
      <AIAdvantage />
      <SkillGapWarning />
      <TrustStats />
      <InstructorAuthority />
      <CaseStudy />
      <ComparisonTable />
      <CourseModules />
      <CareerOutcomes />
      <ToolsGrid />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
