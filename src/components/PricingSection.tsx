import React from 'react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';
import {
  Check,
  Sparkles,
  Gift,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <div id="pricing" className="w-full scroll-mt-24">
      {/* Top Value Banner */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1e38] tracking-tight leading-tight mb-4">
          Dedicated Virtual Assistant & Research Support Plans
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Scale your candidate sourcing, hiring authority lists, and recruitment engine with a dedicated assistant.
          <span className="font-semibold text-[#0e1e38]"> All website, graphic, SEO, and social media services are 100% Complimentary (- Free)</span> with your subscription!
        </p>
      </div>

      {/* 3 Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
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

      {/* Assurance Footnote */}
      <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-100">
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
  );
};
