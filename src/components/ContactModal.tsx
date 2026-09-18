import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { LegacyLogo } from './LegacyLogo';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Website Design & Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto close after success or let user close
    }, 4000);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0e1e38] mb-2">
              Message Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mb-6">
              Thank you, <span className="font-semibold text-slate-900">{name || 'there'}</span>. A growth partner from Legacy Group International will be in touch within 24 hours.
            </p>
            <button
              onClick={resetAndClose}
              className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <LegacyLogo size="sm" showTagline={false} className="mb-3" />
              <h3 className="font-display text-2xl font-bold text-[#0e1e38] tracking-tight">
                Let's Build Something Great Together
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Tell us about your business goals and we will prepare a tailored growth roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0e1e38] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0e1e38] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0e1e38] focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent transition-all bg-white"
                >
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="SEO & Content">SEO & Content</option>
                  <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Website Maintenance">Website Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e1e38] uppercase tracking-wider mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your objectives, timeline, or current challenges..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0e1e38] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EE7F23] focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
