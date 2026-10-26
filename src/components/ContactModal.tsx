import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) {
      // Reset form after exit transition
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(timer);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const servicesList = [
    'Full-Time Plan ($1,200/month) - Most Popular',
    'Half-Time Plan ($750/month)',
    'FREE TRIAL ($0/month)',
    'ADVANCED RESEARCH SUPPORT ($10/Hour)',
    'Website Design & Development (Complimentary)',
    'Social Media Management (Complimentary)',
    'SEO & Content Writing (Complimentary)',
    'Graphic Design & Branding (Complimentary)',
    'Emails & Drip Campaigns (Complimentary)',
    'Website & Technical Support (Complimentary)',
    'Custom Project / Consultation',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EE7F23] block mb-1">
              LET'S WORK TOGETHER
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e1e38]">
              Start Your Project With Legacy
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#0e1e38] mb-2">
                Thank You for Reaching Out!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6">
                We have received your message. A dedicated strategist from Legacy Group International will get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                  Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent bg-white"
                >
                  <option value="">Select a service...</option>
                  {servicesList.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand goals, timeline, and vision..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] active:bg-[#c9610f] text-white font-semibold py-3 px-6 rounded-lg text-sm shadow-sm transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Quick Contact Info Footer */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#EE7F23]" />
              <span>info@intlg.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#EE7F23]" />
              <span>Global Support Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EE7F23]" />
              <span>Legacy Group International</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
