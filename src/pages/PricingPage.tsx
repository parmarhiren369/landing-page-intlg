import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PRICING_PLANS } from '../data';
import { useNavigation } from '../context/NavigationContext';
import {
  Sparkles,
  Zap,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  Gift,
  Calculator,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  Award,
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { navigateTo, setPreselectedPlan } = useNavigation();

  // Savings Calculator State
  const [numAssistants, setNumAssistants] = useState<number>(1);
  const inHouseMonthlyCostPerPerson = 5200; // typical US recruiter/sourcer salary + taxes/benefits
  const legacyMonthlyCostPerPerson = 1200; // Full-Time plan
  const agencyMarketingValue = 1500; // free complimentary website, SEO, and social value

  const totalInHouse = numAssistants * inHouseMonthlyCostPerPerson;
  const totalLegacy = numAssistants * legacyMonthlyCostPerPerson;
  const monthlySavings = totalInHouse - totalLegacy + agencyMarketingValue;
  const annualSavings = monthlySavings * 12;

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is included in the 100% Free Trial?',
      a: 'Our Free Trial gives you a hands-on experience of our dedicated research and sourcing support for a full trial period with zero financial commitment. Your trial assistant delivers 50 database records, 50 company lists, 50 email validations, 50 hiring authorities, and 10 candidate profiles per day, alongside daily status reporting.',
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

  const handleSelectPlan = (planName: string) => {
    setPreselectedPlan(planName);
    navigateTo('contact', { preselectedPlan: planName });
  };

  // Matrix Features
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

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <PageHeader
        badge="Transparent Recruitment Support Tiers"
        badgeIcon={<Zap className="w-3.5 h-3.5 text-[#EE7F23]" />}
        title="Dedicated Virtual Assistant & Research Support Plans"
        subtitle="Scale your candidate sourcing, hiring authority pipelines, and recruitment business with dedicated offshore talent. All website, graphic, SEO, and social media services are included 100% Complimentary (- Free) with your subscription!"
        currentPageName="Plans & Pricing"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Special Discount Notice Pill */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#EE7F23] flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Special Limited Time Rate Reduction
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                Half-Time is $750/mo & Full-Time is $1,200/mo
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Both plans include free complimentary websites, social media marketing, SEO, and graphic design support.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleSelectPlan('Full-Time')}
            className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Claim Offer Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ================= 4 PRICING CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
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
                {/* Badge */}
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
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0e1e38] uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    {plan.originalNote ? (
                      <p className="text-[12px] font-semibold text-[#EE7F23] mt-0.5">
                        {plan.originalNote}
                      </p>
                    ) : (
                      <p className="text-[12px] text-slate-500 mt-0.5 min-h-[18px]">
                        {plan.tagline}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex flex-wrap items-baseline justify-center gap-1.5">
                    {plan.originalPrice && (
                      <span className="text-slate-400 line-through text-sm sm:text-base font-semibold">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38]">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`mt-5 w-full py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                      isFullTime
                        ? 'bg-[#EE7F23] hover:bg-[#de7016] text-white'
                        : isFreeTrial
                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                        : 'bg-slate-100 hover:bg-[#EE7F23] text-[#0e1e38] hover:text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Deliverables List */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-700">
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

                  {/* Complimentary banner at bottom of card */}
                  {(plan.id === 'half-time' || plan.id === 'full-time') && (
                    <div className="pt-3 border-t border-slate-100 bg-orange-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl text-[11px] text-slate-700">
                      <div className="flex items-center gap-1.5 text-[#EE7F23] font-bold mb-1">
                        <Gift className="w-3.5 h-3.5" />
                        <span>All 6 Complimentary Services Included</span>
                      </div>
                      <p className="text-slate-500 text-[10.5px]">
                        Website, Social Media, SEO, Graphics, Email Campaigns, Tech Support.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= RECRUITMENT OVERHEAD CALCULATOR ================= */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0e1e38] text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#EE7F23]" />
              <span>Interactive ROI Calculator</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38]">
              How Much Will Your Search Firm Save with Legacy?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Compare the cost of hiring local US recruitment sourcers and external marketing agencies versus partnering with a Dedicated Legacy Assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#0e1e38]">
                    Number of Dedicated Assistants / Sourcers:
                  </label>
                  <span className="font-display text-2xl font-bold text-[#EE7F23]">
                    {numAssistants} {numAssistants === 1 ? 'Assistant' : 'Assistants'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={numAssistants}
                  onChange={(e) => setNumAssistants(parseInt(e.target.value, 10))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#EE7F23]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1 (Boutique)</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5+ (Growing Agency)</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Local In-House Sourcing Cost (est.):</span>
                  <span className="font-bold text-slate-900">${totalInHouse.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Legacy Full-Time Dedicated Assistant:</span>
                  <span className="font-bold text-emerald-600">${totalLegacy.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Complimentary Website + Marketing Value:</span>
                  <span className="font-bold text-[#EE7F23]">Included Free ($1,500/mo value)</span>
                </div>
              </div>
            </div>

            {/* Savings Result Card */}
            <div className="lg:col-span-6 bg-[#0e1e38] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Estimated Total Annual Benefit
                </span>
                <div className="mt-2 text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  ${annualSavings.toLocaleString()}
                  <span className="text-lg text-slate-400 font-normal"> / year</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  You save approximately <strong className="text-orange-400">${monthlySavings.toLocaleString()} every single month</strong> in salary overhead, benefits, recruiter recruiting fees, and external agency marketing bills!
                </p>
              </div>

              <button
                onClick={() => handleSelectPlan('Full-Time')}
                className="mt-6 w-full py-3 bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Lock In This Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ================= PLAN COMPARISON MATRIX ================= */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F23]">
              Side-by-Side Comparison
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38] mt-1">
              Detailed Feature Matrix
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Review every capability, deliverable, and complimentary service across all four plan tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 sm:p-5 font-bold text-[#0e1e38] min-w-[200px]">Deliverables & Features</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-700 text-center min-w-[120px]">Free Trial ($0)</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-700 text-center min-w-[130px]">Half-Time ($750)</th>
                  <th className="p-4 sm:p-5 font-bold text-[#EE7F23] text-center bg-orange-50/50 min-w-[140px]">
                    Full-Time ($1,200) ★
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-700 text-center min-w-[120px]">Project ($10/hr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
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
                    <td className="p-4 sm:p-5 text-center bg-orange-50/30">
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
        </section>

        {/* ================= PRICING FAQ ACCORDION ================= */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EE7F23] mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38]">
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
        </section>

        {/* Bottom Guarantee Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold">Cancel or Adjust Anytime</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold">Start Within 24-48 Hours</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#EE7F23]" />
            <span className="font-semibold">Pre-Vetted Recruitment Specialists</span>
          </div>
        </div>
      </div>
    </div>
  );
};
