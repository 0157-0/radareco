import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ContributeSection from "@/components/contribute-section";
import Footer from "@/components/footer";
import Roadmap from "@/components/roadmap-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <Roadmap />
        <ContributeSection />
      </main>
      <Footer />
    </div>
  );
}
