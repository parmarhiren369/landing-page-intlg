import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId } from '../types/navigation';

interface NavigationContextType {
  currentPage: PageId;
  activeNavTab: PageId;
  navigateTo: (
    page: PageId,
    options?: {
      preselectedPlan?: string;
      preselectedService?: string;
      portfolioCategory?: string;
    }
  ) => void;
  preselectedPlan: string;
  preselectedService: string;
  portfolioCategory: string;
  setPreselectedPlan: (plan: string) => void;
  setPreselectedService: (service: string) => void;
  setPortfolioCategory: (category: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function getPageFromUrl(): { page: PageId; isPricingHash: boolean } {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  
  if (hash === 'pricing') {
    return { page: 'home', isPricingHash: true };
  }

  const validPages: PageId[] = ['home', 'services', 'portfolio', 'why-legacy', 'testimonials', 'contact'];
  
  if (hash && validPages.includes(hash as PageId)) {
    return { page: hash as PageId, isPricingHash: false };
  }

  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  if (path === 'pricing') {
    return { page: 'home', isPricingHash: true };
  }
  if (path && validPages.includes(path as PageId)) {
    return { page: path as PageId, isPricingHash: false };
  }

  return { page: 'home', isPricingHash: false };
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initial = getPageFromUrl();
  const [currentPage, setCurrentPage] = useState<PageId>(initial.page);
  const [activeNavTab, setActiveNavTab] = useState<PageId>(initial.isPricingHash ? 'pricing' : initial.page);
  const [preselectedPlan, setPreselectedPlan] = useState<string>('');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [portfolioCategory, setPortfolioCategory] = useState<string>('');

  useEffect(() => {
    const handleUrlChange = () => {
      const state = getPageFromUrl();
      setCurrentPage(state.page);
      setActiveNavTab(state.isPricingHash ? 'pricing' : state.page);
      if (state.isPricingHash) {
        setTimeout(() => {
          const el = document.getElementById('pricing');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    // Initial check for #pricing
    if (initial.isPricingHash) {
      setTimeout(() => {
        const el = document.getElementById('pricing');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateTo = (
    page: PageId,
    options?: {
      preselectedPlan?: string;
      preselectedService?: string;
      portfolioCategory?: string;
    }
  ) => {
    if (options?.preselectedPlan) {
      setPreselectedPlan(options.preselectedPlan);
    }
    if (options?.preselectedService) {
      setPreselectedService(options.preselectedService);
    }
    if (options?.portfolioCategory) {
      setPortfolioCategory(options.portfolioCategory);
    }

    // "pricing" is kept at the front page, not a separate page
    if (page === 'pricing') {
      setCurrentPage('home');
      setActiveNavTab('pricing');
      if (window.location.hash !== '#pricing') {
        window.history.pushState(null, '', '#pricing');
      }
      setTimeout(() => {
        const el = document.getElementById('pricing');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    setCurrentPage(page);
    setActiveNavTab(page);
    const newHash = page === 'home' ? '' : `#${page}`;
    
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash || window.location.pathname);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        activeNavTab,
        navigateTo,
        preselectedPlan,
        preselectedService,
        portfolioCategory,
        setPreselectedPlan,
        setPreselectedService,
        setPortfolioCategory,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
