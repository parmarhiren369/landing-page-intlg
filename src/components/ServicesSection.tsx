import React from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-3">
            OUR SERVICES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1e38] tracking-tight leading-tight mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From strategy to execution, we deliver end-to-end digital solutions tailored to your business goals.
          </p>
        </div>

        {/* 6 Equal Service Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => onSelectService && onSelectService(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
