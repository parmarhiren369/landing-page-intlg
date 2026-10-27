import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';
import {
  Check,
  X,
  Sparkles,
  Gift,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const comparisonRows = [
    { feature: 'Dedicated Virtual Assistant', free: true, half: true, full: true, project: true },
    { feature: 'Candidate Sourcing (Daily Profiles)', free: '10/day', half: 'Unlimited', full: 'Unlimited', project: 'Per Hour' },
    { feature: 'Hiring Authority List Building', free: '50/day', half: 'Yes', full: 'Yes', project: 'Yes' },
    { feature: 'Email & Phone Number Validation', free: '50/day', half: 'Yes', full: 'Yes', project: 'Yes' },
    { feature: 'Database & ATS Maintenance', free: '50 records/day', half: 'Yes', full: 'Yes', project: 'Yes' },
    { feature: 'Job Searches & Postings Management', free: '50 jobs/day', half: 'Yes', full: 'Yes', project: 'Yes' },
    { feature: 'Dedicated Hours per Week', free: 'Trial', half: '20 Hours', full: '40 Hours', project: 'Flexible ($10/hr)' },
    { feature: 'Social Media Content Marketing', free: false, half: 'Complimentary Free', full: 'Complimentary Free', project: false },
    { feature: 'Website Design & Development', free: false, half: 'Complimentary Free', full: 'Complimentary Free', project: false },
    { feature: 'SEO & Content Writing Support', free: false, half: 'Complimentary Free', full: 'Complimentary Free', project: false },
    { feature: 'Graphic Design & Digital Collateral', free: false, half: 'Complimentary Free', full: 'Complimentary Free', project: false },
    { feature: 'Commercial Video & Graphic Assets', free: false, half: 'Complimentary Free', full: 'Complimentary Free', project: false },
    { feature: 'Daily Status Reports & Logs', free: true, half: true, full: true, project: true },
    { feature: 'Weekly Strategic Review Meetings', free: true, half: true, full: true, project: true },
  ];

  const faqs = [
    {
      q: 'What is included in the 100% Free Trial?',
      a: 'Our Free Trial gives you a hands-on experience of our dedicated research and sourcing support with zero financial commitment. Your trial assistant delivers 50 database records, 50 company lists, 50 email validations, 50 hiring authorities, and 10 candidate profiles per day, alongside daily status reporting.',
    },
    {
      q: 'How does "Complimentary Services Included Free" work?',
      a: 'Unlike agencies that bill thousands for digital marketing and web design on top of sourcing, Legacy includes custom website design & development, social media management, SEO blog writing, graphic branding, and technical support 100% complimentary with both Half-Time and Full-Time plans.',
    },
    {
      q: 'Can I cancel, pause, or switch plans at any time?',
      a: 'Yes, absolutely. All our subscriptions are month-to-month with no long-term lock-in or cancellation penalties. You can adjust your hours, add sourcers, or pause your account with simple written notice.',
    },
    {
      q: 'What time zones and working hours do assistants operate in?',
      a: 'Our dedicated assistants work seamlessly aligned with your local business hours (US Eastern, Central, Pacific, UK/GMT, and Australian time zones). We accommodate your schedule for real-time collaboration and weekly syncs.',
    },
    {
      q: 'How are candidates and hiring authority contacts validated?',
      a: 'We use premium multi-tool validation pipelines (including LinkedIn Recruiter, ZoomInfo, Apollo, Hunter, NeverBounce) along with manual human verification to ensure 98%+ email deliverability and phone accuracy.',
    },
  ];

  return (
    <div id="pricing" className="w-full mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-100 scroll-mt-24">
      {/* Top Value Banner */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#EE7F23] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#EE7F23]" />
          <span>Special Offer: Digital Services Included Complimentary</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1e38] tracking-tight leading-tight mb-4">
          Dedicated Virtual Assistant & Research Support Plans
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Scale your candidate sourcing, hiring authority lists, and recruitment engine with a dedicated assistant.
          <span className="font-semibold text-[#0e1e38]"> All website, graphic, SEO, and social media services are 100% Complimentary (- Free)</span> with your subscription!
        </p>

        {/* Pricing Highlight Pill */}
        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-slate-900 text-white px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Zap className="w-4 h-4" /> Half-Time is now $750/month
          </span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1.5 text-orange-400 font-bold">
            <Sparkles className="w-4 h-4" /> Full-Time is now $1,200/month
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Project Basis: $10/Hour</span>
        </div>
      </div>

      {/* 4 Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6 items-stretch mb-12">
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
                  {plan.originalNote ? (
                    <p className="text-[12px] font-semibold text-[#EE7F23] mt-0.5 text-center">
                      {plan.originalNote}
                    </p>
                  ) : (
                    <p className="text-[12px] text-slate-500 mt-0.5 min-h-[18px] text-center">
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

      {/* Feature Comparison Matrix */}
      <div className="mt-14 mb-12 bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="p-6 bg-slate-50/80 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F23] block mb-1">
            Side-by-Side Comparison
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1e38]">
            Detailed Deliverable Matrix
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Compare deliverables and complimentary services across all 4 plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="p-4 sm:p-5 font-bold text-[#0e1e38] min-w-[200px]">Deliverables & Features</th>
                <th className="p-4 sm:p-5 font-bold text-slate-700 text-center min-w-[120px]">Free Trial ($0)</th>
                <th className="p-4 sm:p-5 font-bold text-slate-700 text-center min-w-[130px]">Half-Time ($750)</th>
                <th className="p-4 sm:p-5 font-bold text-[#EE7F23] text-center bg-orange-50/40 min-w-[140px]">
                  Full-Time ($1,200) ★
                </th>
                <th className="p-4 sm:p-5 font-bold text-slate-700 text-center min-w-[120px]">Project ($10/hr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-slate-800">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">
                    {typeof row.free === 'boolean' ? (
                      row.free ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="font-semibold text-slate-700">{row.free}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">
                    {typeof row.half === 'boolean' ? (
                      row.half ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="font-semibold text-emerald-700">{row.half}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-orange-50/20">
                    {typeof row.full === 'boolean' ? (
                      row.full ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="font-bold text-[#EE7F23]">{row.full}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">
                    {typeof row.project === 'boolean' ? (
                      row.project ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="font-semibold text-slate-700">{row.project}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing FAQs Accordion */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EE7F23] mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1e38]">
            Frequently Asked Questions About Plans
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0e1e38] hover:text-[#EE7F23] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#EE7F23] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Assurance Footnote */}
      <div className="mt-10 pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-100">
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
