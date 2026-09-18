import React from 'react';
import { PortfolioItem } from '../types';
import { PortfolioVisualMockup } from './PortfolioVisualMockup';

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)] hover:border-orange-100 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Top Visual Showcase */}
      <PortfolioVisualMockup item={item} />

      {/* Card Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
        <h3 className="font-sans font-bold text-lg sm:text-[18px] text-[#0e1e38] group-hover:text-[#EE7F23] transition-colors leading-snug mb-2">
          {item.title}
        </h3>

        {/* Tags with Vertical Separators matching the reference image */}
        <div className="flex flex-wrap items-center gap-x-2 text-[13px] text-slate-500 font-medium">
          {item.tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {idx < item.tags.length - 1 && (
                <span className="text-slate-300 font-normal">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
