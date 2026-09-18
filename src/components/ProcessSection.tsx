import React from 'react';
import { PROCESS_STEPS } from '../data';

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-3">
              OUR PROCESS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1e38] tracking-tight leading-tight">
              A Simple Path to Success
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md md:text-right">
            We keep things simple, transparent and result-driven.
          </p>
        </div>

        {/* 4 Numbered Steps in One Horizontal Row with Connecting Line */}
        <div className="relative">
          {/* Thin Orange Horizontal Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#EE7F23] via-[#EE7F23] to-[#EE7F23] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.stepNumber} className="flex flex-col items-center text-center">
                {/* Numbered Circle matching reference */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#EE7F23] shadow-sm flex items-center justify-center mb-5 transition-transform hover:scale-105 duration-200">
                  <span className="font-sans text-xl font-bold text-[#0e1e38]">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-sans font-bold text-lg sm:text-[19px] text-[#0e1e38] mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-500 text-[14px] leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
