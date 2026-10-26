export type PageId =
  | 'home'
  | 'pricing'
  | 'services'
  | 'portfolio'
  | 'why-legacy'
  | 'testimonials'
  | 'contact';

export interface NavItem {
  id: PageId;
  name: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'pricing', name: 'Plans & Pricing', path: '/pricing' },
  { id: 'services', name: 'Complimentary Services', path: '/services' },
  { id: 'portfolio', name: 'Portfolio', path: '/portfolio' },
  { id: 'why-legacy', name: 'Why Legacy', path: '/why-legacy' },
  { id: 'testimonials', name: 'Testimonials', path: '/testimonials' },
  { id: 'contact', name: 'Contact', path: '/contact' },
];
