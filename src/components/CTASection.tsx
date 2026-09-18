import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onGetInTouch: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetInTouch }) => {
  return (
    <section id="contact" className="relative bg-white py-20 sm:py-24 border-t border-slate-100/80 overflow-hidden">
      {/* Decorative Botanical Foliage on Left (Matching the reference screenshot) */}
      <div className="absolute left-0 bottom-0 pointer-events-none z-0 transform -translate-x-8 sm:-translate-x-4 translate-y-6 sm:translate-y-2 opacity-90">
        <svg
          width="260"
          height="220"
          viewBox="0 0 260 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 sm:w-60 md:w-72 h-auto"
        >
          {/* Monstera / Palm Leaf Elements */}
          <path
            d="M-20 220C20 180 60 140 70 80C80 20 50 -10 30 -20C10 20 -5 90 -20 220Z"
            fill="#1e4d36"
            opacity="0.9"
          />
          <path
            d="M30 220C70 170 110 120 140 70C160 30 140 0 120 -10C90 30 70 100 30 220Z"
            fill="#2d6a4f"
          />
          <path
            d="M60 220C110 160 160 100 210 50C230 30 220 10 190 10C150 40 120 110 60 220Z"
            fill="#40916c"
            opacity="0.8"
          />
          <path
            d="M10 220C40 190 90 160 120 130C150 100 130 80 110 85C80 115 50 155 10 220Z"
            fill="#52b788"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left spacer for leaf composition */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Center Main CTA Content */}
          <div className="lg:col-span-8 text-center flex flex-col items-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0e1e38] tracking-tight leading-tight mb-4">
              Let's Build Something Great Together.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Partner with Legacy and take your online presence to the next level.
            </p>

            {/* CTA Button */}
            <button
              onClick={onGetInTouch}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#EE7F23] hover:bg-[#de7016] active:bg-[#c9610f] text-white text-base font-semibold px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Decorative Handwritten Script */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="transform rotate-[3deg] text-center lg:text-right select-none">
              <span className="font-script text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0e1e38] leading-tight block">
                Your Success <br />
                <span className="text-[#0e1e38]/90">Our Legacy</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
