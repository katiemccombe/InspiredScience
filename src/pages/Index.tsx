import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DisciplinesSection from "@/components/DisciplinesSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <div id="disciplines">
      <DisciplinesSection />
    </div>
    <ImpactSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
