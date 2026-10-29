import authorKevinImage from './assets/web-development/author kevin.png';
import jodyHarkerImage from './assets/web-development/jody harker search.png';
import recruitmentImage from './assets/web-development/recruitment.png';
import worldBridgePartnersImage from './assets/web-development/world bridge partners.png';
import scippInternationalImage from './assets/web-development/scipp international.png';
import p3Image from './assets/web-development/p3.png';
import {
  ServiceItem,
  PricingPlan,
  ProjectBasisItem,
  PortfolioItem,
  StatisticItem,
  ProcessStep,
  TestimonialItem,
  SocialMediaImage,
} from './types';

/* =========================================================
   IMAGE LOADERS
   ========================================================= */

/* Social Media Images */
const SOCIAL_MEDIA_ASSETS = import.meta.glob(
  './assets/social-media/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

/* Website Development Images */
const WEB_DEVELOPMENT_ASSETS = import.meta.glob(
  './assets/web-development/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

/* Get Social Media Image */
const getSocialMediaImage = (filename: string): string => {
  const imagePath = `./assets/social-media/${filename}`;

  return SOCIAL_MEDIA_ASSETS[imagePath] ?? '';
};

/* Get Website Development Image */
const getWebDevelopmentImage = (filename: string): string => {
  const imagePath = `./assets/web-development/${filename}`;

  return WEB_DEVELOPMENT_ASSETS[imagePath] ?? '';
};

/* =========================================================
   PRICING & PLANS DATA
   ========================================================= */

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free-trial',
    name: 'FREE TRIAL',
    price: '$0',
    period: '/Month',
    badge: '100% Free Trial',
    ctaText: 'Get Started',
    features: [
      'Dedicated Virtual Assistant',
      'Database Maintenance (50 Records/Day)',
      'Company List Building (50 Companies/Day)',
      'Email Validation (50 Emails/Day)',
      'Hiring Authority List (50 HAs/Day)',
      'Candidate Sourcing (10 Profiles/Day)',
      'Job Postings & Response Management',
      'Social Media Outreach',
      'LinkedIn Network Growth',
      'Job Searches List (50 Jobs/Day)',
      'Daily Status Reports',
      'Weekly Strategy Meetings',
    ],
  },
  {
    id: 'half-time',
    name: 'Half-Time',
    originalPrice: '$1050/month',
    price: '$750',
    period: '/month',
    ctaText: 'Subscribe',
    tagline: 'Dedicated Virtual Assistant (20 Hours/Week)',
    features: [
      'Dedicated Virtual Assistant',
      'Candidate Sourcing',
      'Hiring Authority List',
      'Company List Building',
      'Email & Phone Validation',
      'Database Maintenance',
      'Job Postings & Response Management',
      'Job Searches for Business Development',
      'MPC Marketing Campaigns',
      'Social Media Content Marketing - Free',
      'LinkedIn Network Growth',
      'Emails & Drip Campaigns',
      'Website & Graphic Support - Free',
      'SEO & Content Writing - Free',
      'Technical Support - Free',
      'Blogs & Newsletter Management - Free',
      'Commercial Video & Graphic Content - Free',
      'Daily Status Reports',
      'Weekly Strategy Meetings',
    ],
  },
  {
    id: 'full-time',
    name: 'Full-Time',
    originalPrice: '$1800/month',
    price: '$1200',
    period: '/month',
    badge: 'Most Popular',
    isPopular: true,
    ctaText: 'Subscribe',
    tagline: 'Full-Time Dedicated Assistant (40 Hours/Week)',
    features: [
      'Dedicated Virtual Assistant',
      'Candidate Sourcing',
      'Hiring Authority List',
      'Company List Building',
      'Email & Phone Validation',
      'Database Maintenance',
      'Job Postings & Response Management',
      'Job Searches for Business Development',
      'MPC Marketing Campaigns',
      'Social Media Content Marketing - Free',
      'LinkedIn Network Growth',
      'Emails & Drip Campaigns',
      'Website & Graphic Support - Free',
      'SEO & Content Writing - Free',
      'Technical Support - Free',
      'Blogs & Newsletter Management - Free',
      'Commercial Video & Graphic Content - Free',
      'Daily Status Reports',
      'Weekly Strategy Meetings',
    ],
  },
];

/* =========================================================
   PROJECT BASIS CATALOG (STANDALONE & FIXED-SCOPE DELIVERABLES)
   ========================================================= */

export const PROJECT_BASIS_CATALOG: ProjectBasisItem[] = [
  {
    id: 'proj-web-dev',
    title: 'Website Design & Development',
    category: 'Web & Digital',
    badge: 'Turnkey Delivery',
    isPopular: true,
    iconName: 'monitor',
    tagline: 'High-conversion bespoke websites engineered for recruitment & executive search',
    priceStartingAt: '$499',
    turnaroundTime: '7 - 14 Days',
    deliverables: [
      'Custom UI/UX designed in Figma matching your brand identity',
      'Up to 10 responsive pages (Home, Practice Areas, Team, Jobs, Contact)',
      'Lead capture & client enquiry forms with direct email routing',
      'Google PageSpeed mobile & desktop performance tuning (90+)',
      'SSL certificate, DNS domain mapping & cloud hosting deployment',
      '30-day post-launch technical warranty & handover',
    ],
    idealFor: 'Search firms and agencies seeking a modern, authoritative digital presence.',
  },
  {
    id: 'proj-social-pack',
    title: 'Social Media Growth & Creative Pack',
    category: 'Social Media',
    badge: 'Best Seller',
    isPopular: true,
    iconName: 'megaphone',
    tagline: 'High-resolution branded content, campaign graphics & carousel sets',
    priceStartingAt: '$299',
    turnaroundTime: '3 - 5 Days',
    deliverables: [
      '30 to 60 custom branded recruitment posts (1080x1080 & 1080x1920)',
      'Full holiday observance & seasonal celebration campaign graphics',
      'LinkedIn thought leadership carousel slide decks',
      'Engaging captions, calls-to-action & industry hashtag bank',
      'Editable Canva Pro / Figma source files included',
    ],
    idealFor: 'Recruiters seeking active daily social media visibility without high agency fees.',
  },
  {
    id: 'proj-sourcing-sprint',
    title: 'Candidate Sourcing & Talent Mapping Sprint',
    category: 'Research & Sourcing',
    badge: 'High Impact',
    iconName: 'users',
    tagline: 'Dedicated deep-dive talent pipeline for active client search mandates',
    priceStartingAt: '$399',
    turnaroundTime: '3 - 7 Days',
    deliverables: [
      '100 to 250 vetted candidate profiles matching your exact mandate',
      'Validated corporate email addresses & direct phone numbers',
      'Competitor organization mapping & talent bench insights',
      'Structured CSV / ATS-ready database export',
      'Detailed market talent intelligence summary report',
    ],
    idealFor: 'Recruitment teams facing urgent, high-priority searches with tight deadlines.',
  },
  {
    id: 'proj-seo-sprint',
    title: 'SEO & Search Engine Optimization Sprint',
    category: 'SEO & Inbound',
    badge: 'Inbound Growth',
    iconName: 'search',
    tagline: 'Capture hiring authorities and candidates searching on Google',
    priceStartingAt: '$349',
    turnaroundTime: '5 - 7 Days',
    deliverables: [
      'Comprehensive recruitment keyword strategy for hiring managers',
      'Full technical SEO audit (schema markup, crawl errors, speed)',
      'On-page title, meta tag & H1-H3 header optimization',
      'Google Search Console & Google Business profile optimization',
      'Competitor search visibility and keyword gap report',
    ],
    idealFor: 'Agencies wanting organic inbound retainer requests from employers.',
  },
  {
    id: 'proj-brand-deck',
    title: 'Executive Pitch Deck & Brand Identity Suite',
    category: 'Design & Branding',
    badge: 'Executive Polish',
    iconName: 'pen-tool',
    tagline: 'High-ticket presentation decks, proposal templates & collateral',
    priceStartingAt: '$349',
    turnaroundTime: '4 - 6 Days',
    deliverables: [
      '15 to 20-slide executive pitch deck (PowerPoint, Keynote & PDF)',
      'Retained search proposal & fee agreement document templates',
      'Vector logo refinement, brand color palette & typography guide',
      'Branded LinkedIn executive headers for key partners',
      'Professional email signature and digital business card templates',
    ],
    idealFor: 'Founders pitching enterprise search contracts and retained mandates.',
  },
  {
    id: 'proj-cold-email',
    title: 'Outbound Cold Email & Drip Campaign Setup',
    category: 'Lead Generation',
    badge: 'Pipeline Builder',
    iconName: 'mail',
    tagline: 'Automated outreach infrastructure connecting with hiring decision-makers',
    priceStartingAt: '$399',
    turnaroundTime: '4 - 7 Days',
    deliverables: [
      'Technical domain authentication (SPF, DKIM, DMARC configuration)',
      '4-step high-converting cold email sequence copy tailored to HR leaders',
      'Verification & hygiene check for up to 500 hiring authority contacts',
      'Email automation platform setup (Instantly, Apollo, or Lemlist)',
      'Follow-up workflows and response tracking system',
    ],
    idealFor: 'Search owners who want regular discovery calls with hiring authorities.',
  },
  {
    id: 'proj-maintenance',
    title: 'Website Maintenance & Technical Optimization',
    category: 'Support & Security',
    badge: 'Zero Downtime',
    iconName: 'settings',
    tagline: 'Proactive speed optimization, security hardening & maintenance',
    priceStartingAt: '$199',
    turnaroundTime: '2 - 3 Days',
    deliverables: [
      'Comprehensive malware scan, security audit & firewall setup',
      'CMS core, theme & plugin updates with regression check',
      'Full automated cloud backup creation and recovery test',
      'PageSpeed caching & database query optimization',
      '30 days priority technical support for any fixes or updates',
    ],
    idealFor: 'Firms needing confidence that their web platforms run fast, safely, and without bugs.',
  },
  {
    id: 'proj-custom-tech',
    title: 'Custom Recruitment Automation & Integrations',
    category: 'Custom Engineering',
    badge: 'Bespoke',
    iconName: 'briefcase',
    tagline: 'Custom ATS workflows, candidate data enrichment & webhook automations',
    priceStartingAt: 'Custom Quote',
    turnaroundTime: '1 - 3 Weeks',
    deliverables: [
      'Custom Zapier, Make, or API webhook integrations',
      'Candidate database deduplication & enrichment scripts',
      'Tailored job syndication & candidate portal customization',
      'Recruitment workflow architecture consultation',
      'Dedicated project engineer & documentation walkthrough',
    ],
    idealFor: 'Established agencies scaling operations with automated pipelines.',
  },
];

/* =========================================================
   SERVICES DATA (COMPLIMENTARY WITH PLANS)
   ========================================================= */

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description:
      'Modern, responsive and user-friendly websites that convert visitors into customers.',
    iconName: 'monitor',
    isComplimentary: true,
    complimentaryBadge: 'COMPLIMENTARY • FREE',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description:
      'Strategic content, creative campaigns and community growth across all platforms.',
    iconName: 'megaphone',
    isComplimentary: true,
    complimentaryBadge: 'COMPLIMENTARY • FREE',
  },
  {
    id: 'seo-content',
    title: 'SEO & Content Writing',
    description:
      'Improve your search rankings with optimized content, blogs and proven SEO strategies.',
    iconName: 'search',
    isComplimentary: true,
    complimentaryBadge: 'COMPLIMENTARY • FREE',
  },
  {
    id: 'graphic-branding',
    title: 'Graphic Design & Branding',
    description:
      'Creative designs, digital assets and brand visuals that make your company stand out.',
    iconName: 'pen-tool',
    isComplimentary: true,
    complimentaryBadge: 'COMPLIMENTARY • FREE',
  },
  {
    id: 'email-marketing',
    title: 'Emails & Drip Campaigns',
    description:
      'Engage hiring authorities and candidates with targeted, result-driven email campaigns.',
    iconName: 'mail',
    isComplimentary: true,
    complimentaryBadge: 'COMPLIMENTARY • FREE',
  },
  {
    id: 'website-maintenance',
    title: 'Website & Technical Support',
    description:
      'Reliable support to keep your web platforms secure, updated, optimized and running smoothly.',
    iconName: 'settings',
    isComplimentary: true,
    complimentaryBadge: 'COMPLIMENTARY • FREE',
  },
];

/* =========================================================
   PORTFOLIO DATA
   ========================================================= */

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Website Development',
    category: 'Web Development',
    tags: ['Strategy', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: authorKevinImage,
    websiteUrl: 'https://author-kevin.vercel.app/',
    headline: 'BUILDING A STRONGER TOMORROW',
    subheadline: 'High-conversion enterprise digital experience',
    badge: 'Live Case Study',
    description:
      'Full redesign and modern web architecture engineered for speed, clean aesthetics, and optimal lead capture for a growth-stage company.',
  },

  {
    id: 'p2',
    title: 'Jody Harker Search Website',
    category: 'Web Development',
    tags: ['Executive Search', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: jodyHarkerImage,
    websiteUrl: 'https://jodyharkersearch.com/',
    headline: 'JODY HARKER SEARCH',
    subheadline: 'Executive search and leadership consulting platform',
    badge: 'Live Website',
    description:
      'A distinguished executive search website designed for executive leadership placement, candidate engagement, and strategic talent consulting.',
  },

  {
    id: 'p3',
    title: 'Talent Hub Website',
    category: 'Web Development',
    tags: ['Strategy', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: recruitmentImage,
    websiteUrl: 'https://bacon-talent-hub.vercel.app/',
    headline: 'TALENT HUB WEBSITE',
    subheadline: 'Recruitment and talent management experience',
    badge: 'Live Website',
    description:
      'A talent-focused website designed to improve recruitment workflows and user experience.',
  },

  {
    id: 'p4',
    title: 'WorldBridge Partners Website',
    category: 'Web Development',
    tags: ['Strategy', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: worldBridgePartnersImage,
    websiteUrl: 'https://worldbridgepartners.com/',
    headline: 'WORLDBRIDGE PARTNERS WEBSITE',
    subheadline: 'Professional recruitment website',
    badge: 'Live Website',
    description:
      'A recruitment website built to communicate expertise, services, and business value.',
  },

  {
    id: 'p5',
    title: 'SCIPP International Website',
    category: 'Web Development',
    tags: ['Education', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: scippInternationalImage,
    websiteUrl: 'https://scippinternational.org/',
    headline: 'SCIPP INTERNATIONAL WEBSITE',
    subheadline: 'Education and cybersecurity website',
    badge: 'Live Website',
    description:
      'An educational website designed to support cybersecurity programs, students, and certification initiatives.',
  },

  {
    id: 'p6',
    title: 'P3 Recruiter Website',
    category: 'Web Development',
    tags: ['Branding', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: p3Image,
    websiteUrl: 'https://p3recruiter.com/',
    headline: 'P3 RECRUITER WEBSITE',
    subheadline: 'Recruitment website experience',
    badge: 'Live Website',
    description:
      'A modern recruiter website designed for professional presentation and lead generation.',
  },
];

  

/* =========================================================
   STATISTICS DATA
   ========================================================= */

export const STATISTICS_DATA: StatisticItem[] = [
  {
    id: 'stat-1',
    value: '100+',
    label: 'Projects Delivered',
    iconName: 'briefcase',
  },
  {
    id: 'stat-2',
    value: '50+',
    label: 'Happy Clients',
    iconName: 'users',
  },
  {
    id: 'stat-3',
    value: '200%',
    label: 'Average Traffic Increase',
    iconName: 'trending-up',
  },
  {
    id: 'stat-4',
    value: '5+',
    label: 'Years of Experience',
    iconName: 'trophy',
  },
];

/* =========================================================
   PROCESS STEPS
   ========================================================= */

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Understand',
    description:
      'We learn about your goals, requirements, audience, and business objectives.',
  },
  {
    stepNumber: 2,
    title: 'Plan',
    description:
      'We create a tailored strategy, project plan, and clear direction.',
  },
  {
    stepNumber: 3,
    title: 'Execute',
    description:
      'We design, develop, create, and bring your ideas to life.',
  },
  {
    stepNumber: 4,
    title: 'Grow',
    description:
      'We monitor, optimize, and support your long-term success.',
  },
];

/* =========================================================
   TESTIMONIALS DATA
   ========================================================= */

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Legacy helped us transform our online presence. Their team is creative, responsive and truly understands our business needs.',
    authorRole: 'CEO',
    authorName: 'Gary Boza',
    company: 'Recruitment Organization',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'The website and social media strategy delivered by Legacy exceeded our expectations. Highly recommended!',
    authorRole: 'Head',
    authorName: 'Karel Lukas',
    company: 'Recruitment Company',
    rating: 5,
  },
  {
    id: 'test-3',
    quote:
      'Professional, reliable and results-driven. Legacy is more than a vendor – they are a true growth partner.',
    authorRole: 'CEO',
    authorName: 'Kevin Saylor',
    company: 'Recruitment Firm',
    rating: 5,
  },
];

/* =========================================================
   HERO SERVICE TICKER
   ========================================================= */

export const HERO_SERVICE_TICKER = [
  'WEBSITES',
  'SOCIAL MEDIA',
  'SEO',
  'CONTENT',
  'DESIGN',
  'MARKETING',
  'MAINTENANCE',
];

/* =========================================================
   SOCIAL MEDIA IMAGES
   ========================================================= */

const formatSocialMediaTitle = (filename: string): string => {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
};

export const SOCIAL_MEDIA_IMAGES: SocialMediaImage[] = Object.entries(
  SOCIAL_MEDIA_ASSETS
).map(([imagePath, imageUrl], index) => {
  const filename = imagePath.split('/').pop() ?? '';
  const title = formatSocialMediaTitle(filename);

  return {
    id: `sm-${index + 1}`,
    title,
    campaign: 'Legacy Social Media Campaigns',
    category: 'Campaign Posters',
    platform: 'Omnichannel',
    imageUrl,
    headline: title.toUpperCase(),
    caption: `Social media creative for ${title}.`,
    likes: '—',
    shares: '—',
    impressions: '—',
    tags: ['Social Media', 'Legacy Group International'],
  };
});

/* =========================================================
   WEBSITE DEVELOPMENT IMAGE DATA
   ========================================================= */

export const WEB_DEVELOPMENT_IMAGES: SocialMediaImage[] = [
  {
    id: 'wd-1',
    title: 'Author Kevin Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('author kevin.png'),
    websiteUrl: 'https://author-kevin.vercel.app/',
    headline: 'AUTHOR KEVIN WEBSITE',
    caption: 'Author Kevin website design and development.',
    tags: ['Website', 'Design', 'Development'],
  },

  {
    id: 'wd-2',
    title: 'Jody Harker Search Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('jody harker search.png'),
    websiteUrl: 'https://jodyharkersearch.com/',
    headline: 'JODY HARKER SEARCH WEBSITE',
    caption: 'Jody Harker Search website design and development.',
    tags: ['Executive Search', 'Design', 'Development'],
  },

  {
    id: 'wd-3',
    title: 'Talent Hub Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('recruitment.png'),
    websiteUrl: 'https://bacon-talent-hub.vercel.app/',
    headline: 'TALENT HUB WEBSITE',
    caption: 'Talent Hub website design and development.',
    tags: ['Talent Hub', 'Design', 'Development'],
  },

  {
    id: 'wd-4',
    title: 'WorldBridge Partners Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('world bridge partners.png'),
    websiteUrl: 'https://worldbridgepartners.com/',
    headline: 'WORLDBRIDGE PARTNERS WEBSITE',
    caption: 'WorldBridge Partners website design and development.',
    tags: ['Recruitment', 'Design', 'Development'],
  },

  {
    id: 'wd-5',
    title: 'SCIPP International Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('scipp international.png'),
    websiteUrl: 'https://scippinternational.org/',
    headline: 'SCIPP INTERNATIONAL WEBSITE',
    caption: 'SCIPP International website design and development.',
    tags: ['Education', 'Cybersecurity', 'Development'],
  },

  {
    id: 'wd-6',
    title: 'P3 Recruiter Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('p3.png'),
    websiteUrl: 'https://p3recruiter.com/',
    headline: 'P3 RECRUITER WEBSITE',
    caption: 'P3 Recruiter website design and development.',
    tags: ['Recruitment', 'Branding', 'Development'],
  },
];