import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { WhyLegacyPage } from './pages/WhyLegacyPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { ContactModal } from './components/ContactModal';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();
  const [quickContactOpen, setQuickContactOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'why-legacy':
        return <WhyLegacyPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onOpenContactModal={() => setQuickContactOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#EE7F23]/20 selection:text-[#0e1e38]">
      {/* PERSISTENT HEADER NAVIGATION WITH ACTIVE TAB UNDERLINE */}
      <Navbar onOpenContactModal={() => setQuickContactOpen(true)} />

      {/* DEDICATED PAGE CONTENT */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* PERSISTENT FOOTER */}
      <Footer />

      {/* QUICK CONTACT MODAL IF TRIGGERED */}
      <ContactModal
        isOpen={quickContactOpen}
        onClose={() => setQuickContactOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
