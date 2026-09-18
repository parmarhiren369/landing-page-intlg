import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-3">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1e38] tracking-tight leading-tight">
            Trusted by Businesses Like Yours
          </h2>
        </div>

        {/* 3 Testimonial Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Orange Quotation Mark matching reference */}
                <div className="text-4xl sm:text-5xl font-serif text-[#EE7F23] leading-none mb-3 font-bold select-none">
                  “
                </div>

                {/* Quote Body */}
                <p className="text-slate-700 text-[14.5px] sm:text-[15px] leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Author & Rating Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-sans font-bold text-sm text-[#0e1e38]">
                  {item.authorRole}
                </span>

                {/* 5 Gold Stars */}
                <div className="flex items-center space-x-1 text-[#EE7F23]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EE7F23] text-[#EE7F23]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
