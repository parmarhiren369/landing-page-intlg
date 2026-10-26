import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { STATISTICS_DATA, PROCESS_STEPS } from '../data';
import { useNavigation } from '../context/NavigationContext';
import {
  Users,
  Briefcase,
  TrendingUp,
  Trophy,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
  Sparkles,
  Lock,
  HeartHandshake,
  Layers,
  FileCheck,
} from 'lucide-react';

export const WhyLegacyPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const getStatIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-[#0e1e38] stroke-[2]';
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'trending-up':
        return <TrendingUp className={iconClass} />;
      case 'trophy':
        return <Trophy className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  const comparisonData = [
    {
      factor: 'Vetted, Recruitment-Trained Talent',
      legacy: 'Yes, College-educated & trained specifically in search sourcing',
      inhouse: 'Yes, but high recruitment cost & 6-8 week hiring lag',
      freelance: 'Unpredictable, varying quality & high turnover',
    },
    {
      factor: 'Monthly Investment',
      legacy: '$750 - $1,200/month flat fee',
      inhouse: '$5,000 - $7,000/month (salary + taxes + benefits + desk)',
      freelance: '$25 - $50/hour with unpredictable billing spikes',
    },
    {
      factor: 'Complimentary Digital & Web Services',
      legacy: '100% Free Included (Web, Social Media, SEO, Branding)',
      inhouse: 'Requires separate digital agency ($2,500+/mo)',
      freelance: 'Requires hiring multiple separate freelancers',
    },
    {
      factor: 'Management & Accountability',
      legacy: 'Daily status reports, weekly review meetings, dedicated TL',
      inhouse: 'Requires intensive internal managerial oversight',
      freelance: 'Zero management structure, self-directed',
    },
    {
      factor: 'Confidentiality & Data Protection',
      legacy: 'Strict NDA, encrypted tools, enterprise compliance protocols',
      inhouse: 'Internal employee agreement',
      freelance: 'High security risk, lack of enforceable NDAs',
    },
    {
      factor: 'Contract Flexibility',
      legacy: 'Month-to-month, cancel or adjust hours anytime',
      inhouse: 'Severance risk, employment liabilities, long commitments',
      freelance: 'Per-gig basis, but freelancers disappear unexpectedly',
    },
  ];

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <PageHeader
        badge="People • Process • Progress"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#EE7F23]" />}
        title="Why Search & Staffing Firms Choose Legacy"
        subtitle="We are not just an offshore outsourcing vendor. We are your dedicated operational growth engine, designed specifically to scale recruitment pipelines, expand candidate outreach, and elevate your digital presence."
        currentPageName="Why Legacy"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* ================= 3 CORE PILLARS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EE7F23] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0e1e38] mb-3">
              1. People
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We recruit only top-tier, college-educated talent with exceptional English fluency and domain experience in executive search, candidate sourcing, LinkedIn Recruiter, and digital marketing.
            </p>
            <ul className="mt-6 space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Rigorous 4-stage screening process</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Dedicated one-on-one placement</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Continuous recruitment training</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0e1e38] flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-[#0e1e38]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0e1e38] mb-3">
              2. Process
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Standard operating procedures (SOPs), daily accountability reports, multi-tool validation pipelines, and weekly strategy meetings ensure steady, measurable momentum.
            </p>
            <ul className="mt-6 space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Daily end-of-day detailed logs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>98%+ email & phone accuracy</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Team lead quality assurance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0e1e38] mb-3">
              3. Progress
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our goal is direct business growth: more candidate interviews, more hiring authority conversations, higher placement fees, and a dominant digital presence.
            </p>
            <ul className="mt-6 space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Free websites & graphic branding</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Organic reach & social marketing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Scalable from 1 to 10+ assistants</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= IMPACT IN NUMBERS ================= */}
        <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex items-start gap-4">
              <div className="w-1 self-stretch bg-[#EE7F23] rounded-full flex-shrink-0" />
              <div>
                <span className="text-xs font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-2">
                  OUR IMPACT IN NUMBERS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight leading-[1.15]">
                  Helping Businesses <br />
                  Grow Everywhere
                </h2>
                <p className="text-slate-600 text-sm mt-3">
                  Measurable operational and digital milestones achieved with our recruitment partners.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {STATISTICS_DATA.map((stat) => (
                <div
                  key={stat.id}
                  className="py-4 sm:py-2 px-3 sm:px-4 flex flex-col items-center text-center justify-center"
                >
                  <div className="mb-2 text-[#0e1e38]">
                    {getStatIcon(stat.iconName)}
                  </div>
                  <div className="font-sans text-3xl sm:text-[38px] font-bold text-[#EE7F23] tracking-tight leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans font-bold text-xs sm:text-[13px] text-[#0e1e38] leading-tight max-w-[120px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4-STAGE OPERATIONAL PROCESS ================= */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F23]">
              Proven Methodology
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] mt-1">
              Our 4-Stage Operational Model
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From day one, we follow a structured roadmap to ensure rapid onboarding, high-fidelity candidate pipelines, and consistent quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-orange-50 text-[#EE7F23] font-display font-bold text-lg flex items-center justify-center border border-orange-200/60">
                      0{step.stepNumber}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Stage {step.stepNumber}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#0e1e38] mb-2">
                    {step.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-[#EE7F23] font-semibold flex items-center gap-1">
                  <span>Structured & Documented SOPs</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPARISON TABLE ================= */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F23]">
              The Smarter Choice
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38] mt-1">
              Legacy Dedicated Model vs Alternatives
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              See why recruitment agencies are replacing expensive in-house staff and unreliable freelancers with Legacy.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 sm:p-5 font-bold text-[#0e1e38] min-w-[180px]">Factor</th>
                  <th className="p-4 sm:p-5 font-bold text-[#EE7F23] bg-orange-50/50 min-w-[220px]">
                    Legacy Group International ★
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-700 min-w-[200px]">In-House US Employee</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-700 min-w-[200px]">Freelance Marketplaces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-800">
                      {item.factor}
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-[#0e1e38] bg-orange-50/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item.legacy}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      {item.inhouse}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      {item.freelance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECURITY & CONFIDENTIALITY ================= */}
        <section className="bg-[#0e1e38] text-white rounded-3xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#EE7F23] text-xs font-bold uppercase tracking-wider mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Enterprise Compliance</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Data Security, NDA & Complete Confidentiality
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              We understand that recruitment databases, candidate compensation records, and client search retainers are strictly confidential. We protect your data with enterprise-grade safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <ShieldCheck className="w-6 h-6 text-[#EE7F23] mb-3" />
              <h4 className="font-bold text-base text-white mb-2">Comprehensive NDAs</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                Every assistant and manager signs legally binding Non-Disclosure Agreements prior to onboarding.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Lock className="w-6 h-6 text-[#EE7F23] mb-3" />
              <h4 className="font-bold text-base text-white mb-2">Secure Cloud Access</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                We work directly inside your ATS/CRM (Bullhorn, JobDiva, Loxo, HubSpot) with zero local file downloads.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <FileCheck className="w-6 h-6 text-[#EE7F23] mb-3" />
              <h4 className="font-bold text-base text-white mb-2">Dedicated Workspace</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                Clean, monitored infrastructure with secure 2FA and strict access control guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200/80 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38] mb-2">
            Experience the Legacy Advantage Today
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
            Start with our 100% Free Trial. Zero credit card required, zero risk. See how our dedicated research support accelerates your search operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('contact', { preselectedPlan: 'FREE TRIAL' })}
              className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Start 100% Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('pricing')}
              className="bg-[#0e1e38] hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all cursor-pointer"
            >
              <span>Explore Plan Pricing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
