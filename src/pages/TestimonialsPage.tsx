import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { TESTIMONIALS_DATA } from '../data';
import { TestimonialItem } from '../types';
import { useNavigation } from '../context/NavigationContext';
import {
  Star,
  Sparkles,
  Quote,
  CheckCircle2,
  ArrowRight,
  PlusCircle,
  ThumbsUp,
  X,
  MessageSquare,
} from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Expanded testimonials list with additional search and staffing clients
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([
    ...TESTIMONIALS_DATA,
    {
      id: 'test-4',
      quote:
        'Having a dedicated virtual assistant from Legacy handling candidate sourcing and hiring authority lists gave our recruiters 20+ extra hours per week to focus strictly on closing candidate deals. The complimentary website redesign was an incredible bonus!',
      authorRole: 'Managing Director',
      authorName: 'David Sterling',
      company: 'Sterling Legal Search',
      rating: 5,
    },
    {
      id: 'test-5',
      quote:
        'Legacy delivers real precision. Our database of over 10,000 executive contacts was cleansed, verified, and mapped in record time. Their daily reporting ensures total visibility into what gets completed.',
      authorRole: 'VP of Talent Acquisition',
      authorName: 'Amanda Chen',
      company: 'Beacon Global Staffing',
      rating: 5,
    },
    {
      id: 'test-6',
      quote:
        'The social media holiday graphics and LinkedIn carousels they created for our boutique firm elevated our brand credibility significantly with Fortune 500 corporate clients. Highly recommended partners.',
      authorRole: 'Founding Partner',
      authorName: 'Robert Miller',
      company: 'Crestview Executive Search',
      rating: 5,
    },
  ]);

  // Review submission modal state
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newAuthorRole, setNewAuthorRole] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthorName || !newQuote) return;

    const newTestimonial: TestimonialItem = {
      id: `test-${Date.now()}`,
      authorName: newAuthorName,
      authorRole: newAuthorRole || 'Recruitment Leader',
      company: newCompany || 'Independent Agency',
      quote: newQuote,
      rating: newRating,
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsReviewModalOpen(false);
      setNewAuthorName('');
      setNewAuthorRole('');
      setNewCompany('');
      setNewQuote('');
    }, 1500);
  };

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <PageHeader
        badge="What Our Clients Say"
        badgeIcon={<Star className="w-3.5 h-3.5 fill-[#EE7F23] text-[#EE7F23]" />}
        title="Trusted by Search Leaders & Growing Brands"
        subtitle="Read firsthand experiences from search firm owners, talent leaders, and executive recruiters who have transformed their operations, candidate sourcing, and digital footprint with Legacy."
        currentPageName="Testimonials"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* ================= RATINGS OVERVIEW BANNER ================= */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 mb-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10 min-w-[140px]">
              <span className="font-display text-5xl font-bold text-[#EE7F23]">5.0</span>
              <div className="flex items-center space-x-1 text-[#EE7F23] mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#EE7F23] text-[#EE7F23]" />
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 font-medium">Overall Rating</span>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Client Feedback</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Proven Client Satisfaction & High Retention
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                99.8% of our recruitment and enterprise clients stay with us past their first year, relying on our assistants for daily candidate pipelines and complimentary digital support.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#EE7F23]" />
              <span>Leave a Review</span>
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================= TESTIMONIALS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quotation Mark & Rating Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-[#EE7F23] font-serif leading-none select-none font-bold">
                    “
                  </div>
                  <div className="flex items-center space-x-1 text-[#EE7F23]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#EE7F23] text-[#EE7F23]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Author & Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0e1e38]">
                    {item.authorName}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.authorRole} • <span className="font-semibold text-slate-700">{item.company}</span>
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0" title="Verified Client">
                  <ThumbsUp className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to start a trial */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38] mb-2">
            Ready to Join Our Community of Growing Search Firms?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Test drive our dedicated virtual assistants with a 100% Free Trial. See why our partners rate us 5 stars.
          </p>
          <button
            onClick={() => navigateTo('contact', { preselectedPlan: 'FREE TRIAL' })}
            className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start 100% Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ================= LEAVE A REVIEW MODAL ================= */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-display text-xl font-bold text-[#0e1e38]">Thank You!</h3>
                <p className="text-slate-600 text-xs mt-1">Your review has been successfully posted.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EE7F23] mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Share Your Experience</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0e1e38]">
                  Leave Client Feedback
                </h3>

                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] mb-1">Star Rating</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 cursor-pointer focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating ? 'fill-[#EE7F23] text-[#EE7F23]' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={newAuthorName}
                    onChange={(e) => setNewAuthorName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1">Your Role</label>
                    <input
                      type="text"
                      value={newAuthorRole}
                      onChange={(e) => setNewAuthorRole(e.target.value)}
                      placeholder="e.g. Founder & CEO"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1">Company Name</label>
                    <input
                      type="text"
                      value={newCompany}
                      onChange={(e) => setNewCompany(e.target.value)}
                      placeholder="e.g. Apex Search Group"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder="Describe your results, the sourcing quality, or complimentary digital deliverables..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
