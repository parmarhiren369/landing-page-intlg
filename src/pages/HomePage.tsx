import React from 'react';
import { HeroVisual } from '../components/HeroVisual';
import { HERO_SERVICE_TICKER, SERVICES_DATA, PORTFOLIO_DATA, PRICING_PLANS, TESTIMONIALS_DATA } from '../data';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowRight,
  Sparkles,
  Check,
  Zap,
  Gift,
  ShieldCheck,
  Star,
  Users,
  Briefcase,
  TrendingUp,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  onOpenContactModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContactModal }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle ambient background aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 left-0 w-80 h-80 bg-slate-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#EE7F23] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>People. Process. Progress.</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-[#0e1e38] leading-[1.12] tracking-tight mb-5 sm:mb-6">
                Real Solutions. <br />
                <span className="text-[#EE7F23]">Real Results.</span> <br />
                For Your Growth.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-7 sm:mb-8">
                Empower your recruitment and search business with dedicated virtual assistants and advanced research support.
                <span className="font-semibold text-[#0e1e38]"> All website design, social media marketing, graphics & SEO services are included 100% complimentary</span> with our subscription plans!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
                <button
                  onClick={() => navigateTo('pricing')}
                  className="group inline-flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] active:bg-[#c9610f] text-white text-[15px] font-semibold px-6 sm:px-7 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>View Plans & Pricing</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className="inline-flex items-center justify-center text-[#0e1e38] hover:text-[#EE7F23] bg-white hover:bg-slate-50 active:bg-slate-100 text-[15px] font-semibold px-6 sm:px-7 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  Let's Work Together
                </button>

                <button
                  onClick={() => navigateTo('portfolio')}
                  className="inline-flex items-center justify-center text-slate-600 hover:text-[#0e1e38] text-[14px] font-medium px-4 py-2 transition-colors cursor-pointer"
                >
                  Explore Portfolio
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <Check className="w-4 h-4 stroke-[2.5]" /> 100% Free Trial Available
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" /> No Long-term Lock-in
                </span>
                <span className="flex items-center gap-1.5 text-[#EE7F23]">
                  <Gift className="w-4 h-4" /> Free Website & Social Included
                </span>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <HeroVisual onOpenSocialMedia={() => navigateTo('portfolio')} />
            </div>
          </div>

          {/* Service Ticker */}
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

      {/* ================= COMPLIMENTARY SERVICES TEASER ================= */}
      <section className="bg-slate-50/70 py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Gift className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Additional Fee</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight mb-2">
                Complimentary Services with Every Plan
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Unlike traditional agencies that charge thousands extra, we bundle our full digital agency suite with your dedicated assistant subscription.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="group inline-flex items-center gap-2 text-base font-bold text-[#0e1e38] hover:text-[#EE7F23] transition-colors py-1 cursor-pointer flex-shrink-0"
            >
              <span>Explore Dedicated Services Page</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div
                key={service.id}
                onClick={() => navigateTo('services', { preselectedService: service.title })}
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-orange-200 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200/60">
                      FREE WITH PLAN
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#EE7F23] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0e1e38] group-hover:text-[#EE7F23] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#EE7F23]">
                  <span>View Details & Deliverables</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLANS & PRICING PREVIEW ================= */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#EE7F23] text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Special Reduced Rates</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight mb-3">
              Transparent, Scalable Support Plans
            </h2>
            <p className="text-slate-600 text-base">
              Choose from full-time, half-time, hourly, or start right now with a 100% Free Trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {PRICING_PLANS.map((plan) => {
              const isPopular = plan.id === 'full-time';
              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all bg-white ${
                    isPopular
                      ? 'border-2 border-[#EE7F23] shadow-lg ring-4 ring-orange-500/5 -translate-y-1'
                      : 'border border-slate-200/90 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div>
                    {plan.badge && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-[#EE7F23] px-2.5 py-0.5 rounded-full mb-3">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-[#0e1e38] uppercase">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      {plan.originalPrice && (
                        <span className="text-slate-400 line-through text-sm">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="font-display text-3xl font-bold text-[#0e1e38]">
                        {plan.price}
                      </span>
                      <span className="text-slate-500 text-xs font-medium">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 min-h-[32px]">
                      {plan.tagline}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                      {plan.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{f.replace('- Free', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigateTo('pricing', { preselectedPlan: plan.name })}
                    className={`mt-6 w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-[#EE7F23] hover:bg-[#de7016] text-white'
                        : 'bg-slate-100 hover:bg-[#0e1e38] text-[#0e1e38] hover:text-white'
                    }`}
                  >
                    <span>View Plan Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigateTo('pricing')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#0e1e38] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>Compare All Plan Features & Calculate Savings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SHOWCASE TEASER ================= */}
      <section className="bg-slate-50/70 py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-2">
                FEATURED WORK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight mb-2">
                Proven Track Record & Client Success
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Explore real web development platforms and 60+ social media & holiday campaigns engineered for our clients.
              </p>
            </div>

            <button
              onClick={() => navigateTo('portfolio')}
              className="group inline-flex items-center gap-2 text-base font-bold text-[#0e1e38] hover:text-[#EE7F23] transition-colors py-1 cursor-pointer flex-shrink-0"
            >
              <span>View All 60+ Assets in Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {PORTFOLIO_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => navigateTo('portfolio')}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-[#0e1e38] shadow-xs">
                    {item.badge || 'Live Case'}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#EE7F23] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#0e1e38] group-hover:text-[#EE7F23] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#EE7F23]">
                    <span>View Case Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Campaign Callout */}
          <div className="bg-[#0e1e38] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-[#EE7F23] flex-shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold">60+ Social Media & Holiday Campaigns Included</h4>
                <p className="text-slate-300 text-sm mt-1">
                  Browse our complete interactive gallery of holiday greetings, hiring authority graphics, and branded carousels.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateTo('portfolio')}
              className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <span>Open Social Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY LEGACY & NUMBERS TEASER ================= */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-3">
                PEOPLE • PROCESS • PROGRESS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight mb-5">
                Why Search & Staffing Leaders Choose Legacy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                We combine vetted virtual talent with rigorous operational discipline and full-spectrum digital marketing. Our clients focus on placements while we handle the candidate pipeline and brand presence.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="font-sans text-3xl font-bold text-[#EE7F23]">100+</div>
                  <div className="text-xs font-bold text-[#0e1e38] mt-1">Projects Delivered</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="font-sans text-3xl font-bold text-[#EE7F23]">50+</div>
                  <div className="text-xs font-bold text-[#0e1e38] mt-1">Happy Clients</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="font-sans text-3xl font-bold text-[#EE7F23]">200%</div>
                  <div className="text-xs font-bold text-[#0e1e38] mt-1">Avg Traffic Increase</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="font-sans text-3xl font-bold text-[#EE7F23]">5+</div>
                  <div className="text-xs font-bold text-[#0e1e38] mt-1">Years Experience</div>
                </div>
              </div>

              <button
                onClick={() => navigateTo('why-legacy')}
                className="inline-flex items-center gap-2 bg-[#0e1e38] hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>Read Our Process & Methodology</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="font-display text-xl font-bold text-[#0e1e38] mb-6">
                Our 4-Stage Operational Model
              </h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Understand', desc: 'Deep dive into your hiring authority targets, candidate criteria, and goals.' },
                  { step: '02', title: 'Plan', desc: 'Craft custom sourcing workflows, daily KPIs, and digital content calendar.' },
                  { step: '03', title: 'Execute', desc: 'Daily candidate outreach, email validation, and complimentary creative design.' },
                  { step: '04', title: 'Grow', desc: 'Weekly strategy syncs, database hygiene, and ongoing business scaling.' },
                ].map((s) => (
                  <div key={s.step} className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-4">
                    <span className="font-display font-bold text-lg text-[#EE7F23]">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-sm text-[#0e1e38]">{s.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS TEASER ================= */}
      <section className="bg-slate-50/70 py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-2">
                CLIENT REVIEWS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0e1e38] tracking-tight mb-2">
                Trusted by Businesses Like Yours
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                See what recruitment founders and agency marketing leaders say about partnering with Legacy.
              </p>
            </div>

            <button
              onClick={() => navigateTo('testimonials')}
              className="group inline-flex items-center gap-2 text-base font-bold text-[#0e1e38] hover:text-[#EE7F23] transition-colors py-1 cursor-pointer flex-shrink-0"
            >
              <span>View All Testimonials & Ratings</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => navigateTo('testimonials')}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-[#EE7F23] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EE7F23] text-[#EE7F23]" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#0e1e38]">{item.authorName}</h4>
                    <p className="text-[11px] text-slate-500">{item.authorRole} • {item.company}</p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#0e1e38] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#EE7F23] border border-orange-400/30 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Real Growth?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Transform Your Recruitment Engine Today
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Start with our 100% Free Trial or take advantage of our discounted Half-Time and Full-Time Dedicated Assistant packages with complimentary web and social media services included.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateTo('pricing')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <span>Explore All Plans</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
