import React, { useState } from 'react';
import { PRICING_PLANS, PROJECT_BASIS_CATALOG } from '../data';
import { PricingPlan, ProjectBasisItem } from '../types';
import {
  Check,
  Sparkles,
  Gift,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Monitor,
  Megaphone,
  Search,
  PenTool,
  Mail,
  Settings,
  Users,
  Briefcase,
  ExternalLink,
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
  defaultTab?: 'monthly' | 'project-basis';
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories for Project Basis Catalog
  const categories = [
    'All',
    'Web & Digital',
    'Social Media',
    'Research & Sourcing',
    'SEO & Inbound',
    'Design & Branding',
    'Lead Generation',
    'Support & Security',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECT_BASIS_CATALOG
      : PROJECT_BASIS_CATALOG.filter((item) => item.category === selectedCategory);

  const getProjectIcon = (iconName: string) => {
    const iconClass = 'w-5 h-5 text-[#EE7F23] stroke-[2]';
    switch (iconName) {
      case 'monitor':
        return <Monitor className={iconClass} />;
      case 'megaphone':
        return <Megaphone className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'search':
        return <Search className={iconClass} />;
      case 'pen-tool':
        return <PenTool className={iconClass} />;
      case 'mail':
        return <Mail className={iconClass} />;
      case 'settings':
        return <Settings className={iconClass} />;
      case 'briefcase':
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  return (
    <div id="pricing" className="w-full scroll-mt-24 space-y-16 sm:space-y-20">
      {/* ================= CATALOG 1: DEDICATED MONTHLY ASSISTANT PLANS ================= */}
      <div className="w-full">
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1e38] tracking-tight leading-tight mb-4">
            Dedicated Virtual Assistant & Research Support Plans
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Scale your candidate sourcing, hiring authority lists, and recruitment engine with a dedicated assistant.
            <span className="font-semibold text-[#0e1e38]"> All website, graphic, SEO, and social media services are 100% Complimentary (- Free)</span> with your subscription!
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isFullTime = plan.id === 'full-time';
            const isFreeTrial = plan.id === 'free-trial';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-white transition-all duration-300 ${
                  isFullTime
                    ? 'border-2 border-[#EE7F23] shadow-xl shadow-orange-500/10 ring-4 ring-orange-500/5 -translate-y-1'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Badge if Popular or Special */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm ${
                        isFullTime
                          ? 'bg-[#EE7F23] text-white'
                          : isFreeTrial
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {isFullTime && <Sparkles className="w-3 h-3" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="p-6 pb-5 border-b border-slate-100 flex flex-col justify-between text-center">
                  <div className="text-center">
                    <h3 className="font-display text-lg font-bold text-[#0e1e38] uppercase tracking-wide text-center">
                      {plan.name}
                    </h3>
                    {plan.tagline && (
                      <p className="text-[12px] text-slate-500 mt-1 min-h-[18px] text-center">
                        {plan.tagline}
                      </p>
                    )}
                  </div>

                  {/* Price Display */}
                  <div className="mt-4 flex flex-wrap items-baseline justify-center gap-1.5 sm:gap-2">
                    {plan.originalPrice && (
                      <span className="text-slate-400 line-through text-sm sm:text-base font-semibold tracking-tight">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`mt-5 w-full py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                      isFullTime
                        ? 'bg-[#EE7F23] hover:bg-[#de7016] text-white hover:shadow-md'
                        : isFreeTrial
                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                        : 'bg-slate-100 hover:bg-[#EE7F23] text-[#0e1e38] hover:text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Core Features */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Deliverables & Services Included:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-snug">
                            {feat.includes('- Free') ? (
                              <>
                                <span>{feat.replace('- Free', '').trim()}</span>{' '}
                                <span className="inline-flex items-center font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.2 rounded text-[10px] tracking-wide">
                                  - Free
                                </span>
                              </>
                            ) : (
                              feat
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complementary Services Box */}
                  {plan.complimentaryFeatures && plan.complimentaryFeatures.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 bg-orange-50/50 -mx-6 -mb-6 p-5 rounded-b-2xl">
                      <div className="flex items-center gap-1.5 text-[#EE7F23] font-bold text-xs uppercase tracking-wider mb-2.5">
                        <Gift className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Complimentary Services:</span>
                      </div>
                      <ul className="space-y-1.5 text-[11.5px] text-slate-700">
                        {plan.complimentaryFeatures.map((cFeat, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-extrabold">✓</span>
                            <span className="leading-tight">
                              {cFeat.includes('- Free') ? (
                                <>
                                  <span>{cFeat.replace('- Free', '').trim()}</span>{' '}
                                  <span className="font-bold text-emerald-700 bg-emerald-100/80 px-1 py-0.2 rounded text-[10px]">
                                    FREE
                                  </span>
                                </>
                              ) : (
                                cFeat
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote for Assistant Plans */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Cancel or adjust plans anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Vetted & trained recruitment specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#EE7F23]" />
            <span>Website, social media & SEO support always included complimentary</span>
          </div>
        </div>
      </div>

      {/* ================= CATALOG 2: PROJECT BASIS CATALOG (RENDERED OUTSIDE DIRECTLY) ================= */}
      <div id="project-catalog" className="w-full pt-8 sm:pt-10 border-t-2 border-dashed border-slate-200/80">
        {/* Top Catalog Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#EE7F23] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Standalone & Fixed-Scope Deliverables</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1e38] tracking-tight leading-tight mb-3">
            Project Basis Services Catalog
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Looking for standalone execution without an ongoing subscription? Choose from our fixed-scope recruitment and digital agency projects with clear timelines and guaranteed deliverables.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0e1e38] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Basis Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10">
          {filteredProjects.map((item: ProjectBasisItem) => (
            <div
              key={item.id}
              className={`relative flex flex-col rounded-2xl bg-white border transition-all duration-300 p-6 justify-between ${
                item.isPopular
                  ? 'border-2 border-[#EE7F23] shadow-lg shadow-orange-500/5 ring-2 ring-orange-500/10'
                  : 'border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300'
              }`}
            >
              {/* Header Section */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#EE7F23] bg-orange-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-orange-50/80 border border-orange-100 flex-shrink-0">
                    {getProjectIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#0e1e38] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11.5px] text-slate-500 mt-0.5 line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Pricing & Turnaround Bar */}
                <div className="my-4 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Project Basis
                    </span>
                    <span className="font-display text-lg font-bold text-[#0e1e38]">
                      {item.priceStartingAt}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1 justify-end">
                      <Clock className="w-2.5 h-2.5" />
                      Turnaround
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {item.turnaroundTime}
                    </span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mb-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {item.deliverables.slice(0, 4).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug text-[11.5px]">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Callout */}
                <div className="p-2.5 rounded-lg bg-orange-50/40 border border-orange-100/60 mb-5">
                  <span className="text-[10px] font-bold text-[#EE7F23] uppercase tracking-wider block mb-0.5">
                    Ideal For:
                  </span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {item.idealFor}
                  </p>
                </div>
              </div>

              {/* Card CTA Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href="https://calendly.com/raj-kapoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#EE7F23] hover:bg-[#de7016] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <span>Book Project Call</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onSelectPlan(item.title)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0e1e38] text-xs font-semibold transition-all cursor-pointer text-center"
                >
                  Quick Inquire / Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Assurance Footnote */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Milestone-based project delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>100% intellectual property ownership & source files</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#EE7F23]" />
            <span>Dedicated senior project specialist & rapid turnaround</span>
          </div>
        </div>
      </div>
    </div>
  );
};
