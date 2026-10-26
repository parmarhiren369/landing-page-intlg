import React from 'react';
import { HeroVisual } from './HeroVisual';
import { PricingSection } from './PricingSection';
import { HERO_SERVICE_TICKER } from '../data';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onWorkTogether: () => void;
  onExploreWork: () => void;
  onOpenSocialMedia?: () => void;
  onSelectPlan?: (planName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWorkTogether,
  onExploreWork,
  onOpenSocialMedia,
  onSelectPlan,
}) => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onSelectPlan) {
      onSelectPlan('Full-Time');
    }
  };

  return (
    <section id="home" className="relative bg-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle ambient background aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-slate-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 xl:col-span-6 z-10">
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-[#0e1e38] leading-[1.12] tracking-tight mb-5 sm:mb-6">
              Real Solutions. <br />
              <span className="text-[#EE7F23]">Real Results.</span> <br />
              For Your Growth.
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-7 sm:mb-8">
              Empower your recruitment and search business with dedicated virtual assistants and advanced research support.
              <span className="font-semibold text-[#0e1e38]"> All website design, social media marketing, graphics & SEO services are included 100% complimentary</span> with our subscription plans!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={handleScrollToPricing}
                className="group inline-flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] active:bg-[#c9610f] text-white text-[15px] font-semibold px-6 sm:px-7 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>View Plans & Pricing</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onWorkTogether}
                className="inline-flex items-center justify-center text-[#0e1e38] hover:text-[#EE7F23] bg-white hover:bg-slate-50 active:bg-slate-100 text-[15px] font-semibold px-6 sm:px-7 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 cursor-pointer"
              >
                Let's Work Together
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center text-slate-600 hover:text-[#0e1e38] text-[14px] font-medium px-4 py-2 transition-colors cursor-pointer"
              >
                Explore Portfolio
              </button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <HeroVisual onOpenSocialMedia={onOpenSocialMedia} />
          </div>
        </div>

        {/* PRICING TABLE AT HERO SECTION */}
        <PricingSection
          onSelectPlan={(planName) => {
            if (onSelectPlan) {
              onSelectPlan(planName);
            } else {
              onWorkTogether();
            }
          }}
        />

        {/* Bottom Service Line / Ticker */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-4 text-center">
            {HERO_SERVICE_TICKER.map((item, index) => (
              <React.Fragment key={item}>
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#0e1e38]/85 uppercase">
                  {item}
                </span>
                {index < HERO_SERVICE_TICKER.length - 1 && (
                  <span className="text-[#EE7F23] font-bold text-xs">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
