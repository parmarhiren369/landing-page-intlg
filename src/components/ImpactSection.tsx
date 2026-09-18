import React from 'react';
import { STATISTICS_DATA } from '../data';
import { Briefcase, Users, TrendingUp, Trophy } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#0e1e38] stroke-[2]";
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

  return (
    <section id="impact" className="bg-white py-16 sm:py-20 border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title Block with Vertical Accent Line */}
          <div className="lg:col-span-5 flex items-start gap-4">
            {/* Vertical Accent Line matching reference */}
            <div className="w-1 self-stretch bg-[#EE7F23] rounded-full flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-2">
                OUR IMPACT IN NUMBERS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e1e38] tracking-tight leading-[1.15]">
                Helping Businesses <br />
                Grow Everywhere
              </h2>
            </div>
          </div>

          {/* Right 4 Statistics Columns with Thin Vertical Separators */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {STATISTICS_DATA.map((stat) => (
              <div
                key={stat.id}
                className="py-4 sm:py-2 px-3 sm:px-4 flex flex-col items-center text-center justify-center"
              >
                {/* Navy Lucide Icon */}
                <div className="mb-2 text-[#0e1e38]">
                  {getIcon(stat.iconName)}
                </div>

                {/* Orange Statistic Value */}
                <div className="font-sans text-3xl sm:text-[38px] lg:text-[42px] font-extrabold text-[#EE7F23] tracking-tight leading-none mb-2">
                  {stat.value}
                </div>

                {/* Navy Label */}
                <div className="font-sans font-bold text-xs sm:text-[13px] text-[#0e1e38] leading-tight max-w-[120px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
