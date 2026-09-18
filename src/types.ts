export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'monitor' | 'megaphone' | 'search' | 'pen-tool' | 'mail' | 'settings';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageType: 'laptop-web' | 'social-campaign' | 'seo-dashboard' | 'graphic-brochure';
  headline: string;
  subheadline: string;
  badge?: string;
  client?: string;
  description?: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  iconName: 'briefcase' | 'users' | 'trending-up' | 'trophy';
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorRole: string;
  authorName?: string;
  company?: string;
  rating: number;
}

export interface SocialMediaImage {
  id: string;
  title: string;
  campaign: string;
  category: string;
  platform: 'Instagram' | 'LinkedIn' | 'Facebook' | 'Omnichannel';
  imageUrl: string;
  headline: string;
  caption: string;
  likes?: string;
  shares?: string;
  impressions?: string;
  tags: string[];
}

