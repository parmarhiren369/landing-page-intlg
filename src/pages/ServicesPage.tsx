import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES_DATA } from '../data';
import { useNavigation } from '../context/NavigationContext';
import {
  Gift,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Megaphone,
  Search,
  PenTool,
  Mail,
  Settings,
  Sparkles,
  Layers,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigateTo, preselectedService, setPreselectedService } = useNavigation();

  // Find index or default
  const initialIndex = SERVICES_DATA.findIndex((s) => s.title === preselectedService);
  const [activeTab, setActiveTab] = useState<number>(initialIndex >= 0 ? initialIndex : 0);

  const detailedServices = [
    {
      id: 'web-dev',
      title: 'Website Design & Development',
      badge: 'High Performance & Conversion',
      icon: <Monitor className="w-6 h-6 text-[#EE7F23]" />,
      summary:
        'Custom, mobile-responsive, lightning-fast websites specifically tailored for recruitment agencies, executive search firms, and growth companies.',
      deliverables: [
        'Custom UI/UX designed in Figma to match your brand identity',
        'Mobile, tablet, and ultra-wide responsive layouts',
        'Lead capture & client enquiry forms with email routing',
        'Job board integration and candidate application portals',
        'High-speed Google PageSpeed optimization (90+ mobile scores)',
        'SSL certificate configuration, domain mapping, and hosting setup',
      ],
      recruitmentUse:
        'Recruitment is all about credibility. When hiring authorities and candidate executives visit your site, a clean, modern digital presence builds trust instantly and turns visitors into signed contracts.',
      tools: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'WordPress / Webflow', 'Vercel / Netlify'],
      actionLabel: 'View Web Portfolio Case Studies',
      actionTarget: 'portfolio' as const,
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      badge: 'Omnichannel & Organic Reach',
      icon: <Megaphone className="w-6 h-6 text-[#EE7F23]" />,
      summary:
        'End-to-end social media strategy, custom branded graphics, holiday campaign creatives, and LinkedIn network expansion for recruitment leaders.',
      deliverables: [
        'Monthly editorial content calendar tailored to your industry niche',
        'High-resolution custom social media graphics (1080x1080, 1080x1920)',
        'Full set of 60+ seasonal, holiday, and recruitment celebration campaigns',
        'LinkedIn thought leadership carousel posts and copywriting',
        'Hashtag strategy, audience tagging, and optimal posting times',
        'Monthly audience growth and engagement analytics report',
      ],
      recruitmentUse:
        'Stay top-of-mind with HR directors, founders, and top candidates. Consistent, visually arresting posts establish your firm as the go-to specialist in your recruitment market.',
      tools: ['LinkedIn', 'Canva Pro', 'Photoshop', 'Buffer', 'Hootsuite', 'Meta Business Suite'],
      actionLabel: 'Browse All 60+ Social Creatives in Portfolio',
      actionTarget: 'portfolio' as const,
    },
    {
      id: 'seo-content',
      title: 'SEO & Content Writing',
      badge: 'Rank Higher & Attract Inbound Leads',
      icon: <Search className="w-6 h-6 text-[#EE7F23]" />,
      summary:
        'Targeted search engine optimization and expert copywriting designed to get your search firm discovered when employers search for recruiters.',
      deliverables: [
        'In-depth recruitment keyword research (hiring managers & candidates)',
        'On-page technical SEO (meta titles, descriptions, schema markups, alt tags)',
        'Bi-weekly industry blog posts and executive search articles',
        'Local SEO and Google Business Profile optimization',
        'Internal link structuring and core web vitals speed tuning',
        'Keyword rank tracking and organic search growth reports',
      ],
      recruitmentUse:
        'Inbound client enquiries are the highest-margin recruitment accounts. When hiring managers search for "executive recruiter in [niche]", ranking on page 1 delivers inbound retainers.',
      tools: ['Google Search Console', 'Ahrefs', 'SEMrush', 'SurferSEO', 'Google Analytics 4'],
      actionLabel: 'Discuss SEO Strategy with Us',
      actionTarget: 'contact' as const,
    },
    {
      id: 'graphic-branding',
      title: 'Graphic Design & Branding',
      badge: 'Distinctive Visual Identity',
      icon: <PenTool className="w-6 h-6 text-[#EE7F23]" />,
      summary:
        'Polished logos, branded collateral, client pitch decks, and digital media assets that make your search brand instantly recognizable.',
      deliverables: [
        'Brand identity guidelines (colors, typography, voice, icon library)',
        'Executive pitch decks & proposal presentations for search clients',
        'Digital one-pagers, brochures, and case study PDF downloads',
        'Custom social banner headers (LinkedIn, Twitter, Facebook, YouTube)',
        'Email signatures, business card designs, and stationery',
        'Display advertisement banners and trade show graphics',
      ],
      recruitmentUse:
        'High-ticket search clients evaluate presentation quality before signing fee agreements. Professional decks and collateral convey multi-million-dollar capability.',
      tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign', 'Canva Pro'],
      actionLabel: 'Request Custom Branding Collateral',
      actionTarget: 'contact' as const,
    },
    {
      id: 'email-marketing',
      title: 'Emails & Drip Campaigns',
      badge: 'High-Open Outreach Campaigns',
      icon: <Mail className="w-6 h-6 text-[#EE7F23]" />,
      summary:
        'Targeted email nurture sequences and automated outreach designed to connect with hiring authorities and passive executive candidates.',
      deliverables: [
        'Cold outreach sequences tailored to hiring authorities and HR executives',
        'Candidate nurture drips for active and passive candidate talent pools',
        'Monthly recruitment industry newsletter template and distribution',
        'Email deliverability setup (SPF, DKIM, DMARC, custom tracking domains)',
        'Subject line A/B testing and open-rate optimization',
        'Automated follow-up sequences to maximize response rates',
      ],
      recruitmentUse:
        'Recruitment business development requires multi-touch outreach. Our structured email workflows keep your pipeline full of conversations with hiring decision-makers.',
      tools: ['Mailchimp', 'HubSpot', 'Apollo.io', 'Instantly', 'Lemlist', 'ActiveCampaign'],
      actionLabel: 'Set Up Email Nurture Campaign',
      actionTarget: 'contact' as const,
    },
    {
      id: 'website-maintenance',
      title: 'Website & Technical Support',
      badge: 'Peace of Mind & Zero Downtime',
      icon: <Settings className="w-6 h-6 text-[#EE7F23]" />,
      summary:
        'Proactive monitoring, regular updates, fast bug fixes, and continuous technical improvements so your site never goes offline.',
      deliverables: [
        '24/7 uptime monitoring and immediate issue alerts',
        'Weekly CMS plugin, core, and dependency security updates',
        'Cloud backups stored securely in off-site servers',
        'Speed audits and cache optimization routines',
        'Content updates (adding team members, updating fees, new job listings)',
        'Domain renewal reminders, DNS management, and SSL renewal',
      ],
      recruitmentUse:
        'You never need to hire a separate webmaster or deal with confusing hosting panels. Simply message your Legacy team and changes are done seamlessly.',
      tools: ['Cloudflare', 'GitHub', 'Vercel', 'AWS', 'WP Engine', 'UptimeRobot'],
      actionLabel: 'Get Support Assistance',
      actionTarget: 'contact' as const,
    },
  ];

  const current = detailedServices[activeTab];

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <PageHeader
        badge="100% Complimentary • Included Free"
        badgeIcon={<Gift className="w-3.5 h-3.5 text-[#EE7F23]" />}
        title="Complimentary Digital & Marketing Services"
        subtitle="When you subscribe to any of our Dedicated Virtual Assistant or Research Support plans, you get full access to our entire creative and digital agency capabilities without paying a single dollar in extra agency retainers."
        currentPageName="Complimentary Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* ================= PHILOSOPHY CALLOUT ================= */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EE7F23] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Why We Include Everything Complimentary:</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1e38] mt-1">
              Recruitment Agencies Need Great Tech & Marketing to Win
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Most search firms waste thousands of dollars hiring separate web agencies, graphic freelancers, and social media contractors. We bundle all of these capabilities into our dedicated assistant subscriptions so your business grows faster with zero friction.
            </p>
          </div>

          <button
            onClick={() => navigateTo('pricing')}
            className="bg-[#0e1e38] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer shadow-sm"
          >
            <span>View Subscription Plans</span>
            <ArrowRight className="w-4 h-4 text-[#EE7F23]" />
          </button>
        </div>

        {/* ================= 6 SERVICES SELECTOR & DEEP DIVE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Tab List */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2 mb-2">
              Select a Complimentary Service:
            </span>
            {detailedServices.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-[#0e1e38] text-white border-[#0e1e38] shadow-md -translate-x-1'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? 'bg-white/10 text-orange-400' : 'bg-slate-100 text-[#0e1e38]'
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base">
                        {service.title}
                      </div>
                      <div
                        className={`text-[11px] font-medium ${
                          isActive ? 'text-orange-300' : 'text-emerald-600 font-semibold'
                        }`}
                      >
                        100% Complimentary (- Free)
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#EE7F23] translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Service View Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#EE7F23] bg-orange-50 px-2.5 py-1 rounded-md mb-2">
                  {current.badge}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38]">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Included Free in Plan</span>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-5">
              {current.summary}
            </p>

            {/* Recruitment Application */}
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-[#0e1e38] block mb-1">
                Why this matters for your search business:
              </span>
              <p className="text-slate-600">{current.recruitmentUse}</p>
            </div>

            {/* Deliverables Checklist */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e1e38] mb-3">
                Key Deliverables & Specifications:
              </h4>
              <ul className="space-y-2.5">
                {current.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Tech Stack */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Technologies & Platforms Handled:
              </span>
              <div className="flex flex-wrap gap-2">
                {current.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo(current.actionTarget)}
                className="inline-flex items-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>{current.actionLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setPreselectedService(current.title);
                  navigateTo('contact', { preselectedService: current.title });
                }}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0e1e38] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-all cursor-pointer"
              >
                <span>Enquire About {current.title}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= 6 CARDS OVERVIEW GRID ================= */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F23]">
              Summary at a Glance
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38] mt-1">
              All 6 Services Built In
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`bg-white rounded-xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  activeTab === index
                    ? 'border-[#EE7F23] shadow-md ring-2 ring-orange-500/10'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-orange-50 text-[#EE7F23]">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                      FREE WITH PLAN
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-[#0e1e38] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#EE7F23]">
                  <span>Explore Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#0e1e38] text-white rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Want to add custom digital requirements?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Tell us about your brand vision, target hiring authorities, and tech stack. We will customize your complimentary service roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('portfolio')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/20 transition-all cursor-pointer"
            >
              <span>View Portfolio Proof</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
