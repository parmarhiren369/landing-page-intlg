import React, { useState } from 'react';
import { LegacyLogo } from './LegacyLogo';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { NAV_ITEMS, PageId } from '../types/navigation';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const { currentPage, navigateTo } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: PageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100/90 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center transition-opacity hover:opacity-95 text-left cursor-pointer"
            aria-label="Legacy Group International Home"
          >
            <LegacyLogo size="md" />
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[14.5px] font-medium transition-colors py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#0e1e38] font-bold'
                      : 'text-[#0e1e38]/80 hover:text-[#0e1e38]'
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Dedicated Page Indicator Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#EE7F23] rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="group inline-flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] active:bg-[#c9610f] text-white text-[14.5px] font-semibold px-5 py-2.5 rounded-lg shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0e1e38] hover:bg-slate-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium transition-colors text-left cursor-pointer ${
                  isActive
                    ? 'bg-orange-50 text-[#EE7F23] font-bold'
                    : 'text-[#0e1e38] hover:bg-slate-50'
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#EE7F23]" />}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] text-white font-semibold py-3 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
