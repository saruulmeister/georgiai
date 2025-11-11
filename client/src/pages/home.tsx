import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ProductSection from '@/components/ProductSection';
import FeaturesSection from '@/components/FeaturesSection';
import SocialProofSection from '@/components/SocialProofSection';
import ComparisonSection from '@/components/ComparisonSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import ICPSection from '@/components/ICPSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <ProductSection />
      <FeaturesSection />
      <SocialProofSection />
      <ComparisonSection />
      <ArchitectureSection />
      <ICPSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
