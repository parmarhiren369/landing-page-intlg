import authorKevinImage from './assets/web-development/author kevin.png';
import recruitmentTwoImage from './assets/web-development/recruitment 2.png';
import recruitmentImage from './assets/web-development/recruitment.png';
import intlgImage from './assets/web-development/intlg.png';
import worldBridgePartnersImage from './assets/web-development/world bridge partners.png';
import scippInternationalImage from './assets/web-development/scipp international.png';
import p3Image from './assets/web-development/p3.png';
import {
  ServiceItem,
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
   SERVICES DATA
   ========================================================= */

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description:
      'Modern, responsive and user-friendly websites that convert visitors into customers.',
    iconName: 'monitor',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description:
      'Strategic content, creative campaigns and community growth across all platforms.',
    iconName: 'megaphone',
  },
  {
    id: 'seo-content',
    title: 'SEO & Content',
    description:
      'Improve your search rankings with optimized content and proven SEO strategies.',
    iconName: 'search',
  },
  {
    id: 'graphic-branding',
    title: 'Graphic Design & Branding',
    description:
      'Creative designs that make your brand stand out.',
    iconName: 'pen-tool',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description:
      'Engage your audience with targeted and result-driven email campaigns.',
    iconName: 'mail',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description:
      'Reliable support to keep your website secure, updated and running smoothly.',
    iconName: 'settings',
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
    title: 'Recruitment Website',
    category: 'Web Development',
    tags: ['Design', 'Development', 'Recruitment'],
    imageType: 'laptop-web',
    image: recruitmentTwoImage,
    websiteUrl: 'https://bacon-tamplate2.netlify.app/',
    headline: 'RECRUITMENT WEBSITE',
    subheadline: 'Modern recruitment website experience',
    badge: 'Live Website',
    description:
      'A modern recruitment website designed for clear navigation, strong branding, and candidate engagement.',
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
    title: 'INTLG Website',
    category: 'Web Development',
    tags: ['Branding', 'Design', 'Development'],
    imageType: 'laptop-web',
    image: intlgImage,
    websiteUrl: 'https://intlg.com/',
    headline: 'INTLG WEBSITE',
    subheadline: 'Corporate website and digital experience',
    badge: 'Live Website',
    description:
      'A professional corporate website with modern layouts, responsive design, and clear messaging.',
  },

  {
    id: 'p5',
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
    id: 'p6',
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
    id: 'p7',
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
    authorRole: 'Marketing Director',
    authorName: 'Sarah Jenkins',
    company: 'Nexus Global Brands',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'The website and social media strategy delivered by Legacy exceeded our expectations. Highly recommended!',
    authorRole: 'Business Owner',
    authorName: 'Marcus Vance',
    company: 'Apex Horizon Tech',
    rating: 5,
  },
  {
    id: 'test-3',
    quote:
      'Professional, reliable and results-driven. Legacy is more than a vendor – they are a true growth partner.',
    authorRole: 'Client Partner',
    authorName: 'Elena Rostova',
    company: 'Kestrel Advisory Group',
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
    title: 'Recruitment Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('recruitment 2.png'),
    websiteUrl: 'https://bacon-tamplate2.netlify.app/',
    headline: 'RECRUITMENT WEBSITE',
    caption: 'Recruitment website design and development.',
    tags: ['Recruitment', 'Design', 'Development'],
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
    title: 'INTLG Website',
    campaign: 'Website Development',
    category: 'Web Development',
    platform: 'Omnichannel',
    imageUrl: getWebDevelopmentImage('intlg.png'),
    websiteUrl: 'https://intlg.com/',
    headline: 'INTLG WEBSITE',
    caption: 'INTLG website design and development.',
    tags: ['Corporate', 'Branding', 'Development'],
  },

  {
    id: 'wd-5',
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
    id: 'wd-6',
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
    id: 'wd-7',
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