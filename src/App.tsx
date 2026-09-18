import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ImpactSection } from './components/ImpactSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PortfolioModal } from './components/PortfolioModal';
import { PortfolioItem } from './types';
import { PORTFOLIO_DATA } from './data';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  const handleOpenContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setContactModalOpen(true);
  };

  const handleExploreWork = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPortfolioItem = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
    setPortfolioModalOpen(true);
  };

  const handleViewAllPortfolio = () => {
    setSelectedPortfolioItem(null);
    setPortfolioModalOpen(true);
  };

  const handleOpenSocialMedia = () => {
    const smItem = PORTFOLIO_DATA.find((p) => p.category === 'Social Media');
    if (smItem) {
      setSelectedPortfolioItem(smItem);
      setPortfolioModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#EE7F23]/20 selection:text-[#0e1e38]">
      {/* SECTION 1 — HEADER */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* MAIN CONTENT IN EXACT SPECIFIED ORDER */}
      <main className="flex-grow">
        {/* SECTION 2 — HERO */}
        <HeroSection
          onWorkTogether={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
          onOpenSocialMedia={handleOpenSocialMedia}
        />

        {/* SECTION 3 — SERVICES */}
        <ServicesSection
          onSelectService={(title) => {
            if (title === 'Social Media Management') {
              handleOpenSocialMedia();
            } else {
              handleOpenContact(title);
            }
          }}
        />

        {/* SECTION 4 — FEATURED WORK */}
        <PortfolioSection
          onSelectPortfolioItem={handleSelectPortfolioItem}
          onViewAllPortfolio={handleViewAllPortfolio}
          onGetInTouch={() => handleOpenContact('Social Media Management')}
        />

        {/* SECTION 5 — IMPACT IN NUMBERS */}
        <ImpactSection />

        {/* SECTION 6 — OUR PROCESS */}
        <ProcessSection />

        {/* SECTION 7 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 8 — CTA */}
        <CTASection onGetInTouch={() => handleOpenContact()} />
      </main>

      {/* SECTION 9 — FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedService}
      />

      <PortfolioModal
        isOpen={portfolioModalOpen}
        onClose={() => setPortfolioModalOpen(false)}
        selectedItem={selectedPortfolioItem}
        onSelectAnotherItem={(item) => setSelectedPortfolioItem(item)}
        onGetInTouch={() => {
          setPortfolioModalOpen(false);
          handleOpenContact();
        }}
      />
    </div>
  );
}
