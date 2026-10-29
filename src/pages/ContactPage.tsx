import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useNavigation } from '../context/NavigationContext';
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Building2,
  User,
  MessageSquare,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { preselectedPlan, preselectedService } = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: preselectedPlan || 'Full-Time',
    service: preselectedService || 'Dedicated Virtual Assistant',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, plan: preselectedPlan }));
    }
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedPlan, preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <PageHeader
        badge="Let's Connect"
        badgeIcon={<Mail className="w-3.5 h-3.5 text-[#EE7F23]" />}
        title="Get in Touch with Legacy Group International"
        subtitle="Ready to scale your recruitment agency with a dedicated assistant and 100% complimentary digital services? Start your 100% Free Trial or schedule a personalized strategy consultation today."
        currentPageName="Contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: CONTACT DETAILS & HIGHLIGHTS ================= */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F23] block mb-2">
                Fast & Direct Response
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38]">
                We're Here to Accelerate Your Search Agency
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Whether you need a full-time candidate sourcer, database cleansing, or want to take advantage of our complimentary website design and social media services, our team is ready to onboard your firm within 24-48 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EE7F23] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0e1e38]">Email Inquiries</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Direct partnership & consultation</p>
                  <a
                    href="mailto:info@intlg.com"
                    className="font-semibold text-xs sm:text-sm text-[#EE7F23] hover:underline block mt-1"
                  >
                    info@intlg.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0e1e38]">Response Time Guarantee</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Average reply in under 2 hours</p>
                  <span className="text-xs text-slate-700 font-medium block mt-1">
                    Monday – Friday • Dedicated Global Support
                  </span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0e1e38]">Free 30-Minute Video Consultation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Discuss your ATS, candidate criteria, and goals</p>
                  <a
                    href="https://calendly.com/raj-kapoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-[#EE7F23] hover:underline mt-1.5"
                  >
                    <span>Schedule on Calendly (raj-kapoor)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Assurance Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Risk • Ironclad Privacy</span>
              </div>
              <p>
                All consultations and inquiries are protected by standard mutual Non-Disclosure. We never share, sell, or disclose your firm's pipeline data.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1e38]">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-bold text-[#0e1e38]">{formData.name}</span>. One of our recruitment operations directors will contact you within 2 business hours to finalize your {formData.plan} plan or complimentary service onboarding.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        plan: 'Full-Time',
                        service: 'Dedicated Virtual Assistant',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#EE7F23] hover:underline cursor-pointer"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EE7F23] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Consultation & Trial Booking</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1e38]">
                    Send Us a Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@searchgroup.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                      Company / Agency Name
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Apex Talent Partners"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                      Plan of Interest
                    </label>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                    >
                      <option value="FREE TRIAL">FREE TRIAL ($0 / Month)</option>
                      <option value="Half-Time">Half-Time ($750 / Month - 20 hrs/wk)</option>
                      <option value="Full-Time">Full-Time ($1,200 / Month - 40 hrs/wk) ★</option>
                      <option value="Project Basis">Project Basis / Standalone Deliverable</option>
                      <option value="Custom Project">Custom Project / Multiple Assistants</option>
                      {formData.plan &&
                        !['FREE TRIAL', 'Half-Time', 'Full-Time', 'Project Basis', 'Custom Project'].includes(
                          formData.plan
                        ) && <option value={formData.plan}>{formData.plan}</option>}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                      Primary Service Focus
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                    >
                      <option value="Dedicated Virtual Assistant">Dedicated Virtual Assistant</option>
                      <option value="Candidate Sourcing & Research">Candidate Sourcing & Research</option>
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="SEO & Content Writing">SEO & Content Writing</option>
                      <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                      <option value="Full Package (VA + Complimentary Digital)">Full Package (VA + Digital)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] mb-1.5">
                    How Can We Help Your Search Firm? *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your recruiting niche, target hiring authorities, candidate sourcing requirements, or any digital marketing needs..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting...' : 'Send Message & Book Consultation'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
