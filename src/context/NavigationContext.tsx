import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId } from '../types/navigation';

interface NavigationContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, options?: { preselectedPlan?: string; preselectedService?: string }) => void;
  preselectedPlan: string;
  preselectedService: string;
  setPreselectedPlan: (plan: string) => void;
  setPreselectedService: (service: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function getPageFromUrl(): PageId {
  // Check hash first (e.g. #/pricing or #pricing)
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const validPages: PageId[] = ['home', 'pricing', 'services', 'portfolio', 'why-legacy', 'testimonials', 'contact'];
  
  if (hash && validPages.includes(hash as PageId)) {
    return hash as PageId;
  }

  // Check pathname (e.g. /pricing)
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  if (path && validPages.includes(path as PageId)) {
    return path as PageId;
  }

  return 'home';
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);
  const [preselectedPlan, setPreselectedPlan] = useState<string>('');
  const [preselectedService, setPreselectedService] = useState<string>('');

  useEffect(() => {
    const handleUrlChange = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateTo = (
    page: PageId,
    options?: { preselectedPlan?: string; preselectedService?: string }
  ) => {
    if (options?.preselectedPlan) {
      setPreselectedPlan(options.preselectedPlan);
    }
    if (options?.preselectedService) {
      setPreselectedService(options.preselectedService);
    }

    setCurrentPage(page);
    const newHash = page === 'home' ? '' : `#${page}`;
    
    // Update hash for instant back/forward and shareable URLs
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash || window.location.pathname);
    }

    // Scroll to top of the new page
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        preselectedPlan,
        preselectedService,
        setPreselectedPlan,
        setPreselectedService,
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
