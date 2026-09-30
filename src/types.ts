export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageType?: string;
  image?: string;
  websiteUrl?: string;
  headline?: string;
  subheadline?: string;
  badge?: string;
  description?: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
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
  authorName: string;
  company: string;
  rating: number;
}

export interface SocialMediaImage {
  id: string;
  title: string;
  campaign: string;
  category: string;
  platform: string;
  imageUrl: string;
  headline: string;
  caption: string;
  likes?: string;
  shares?: string;
  impressions?: string;
  tags: string[];
  websiteUrl?: string;
}
