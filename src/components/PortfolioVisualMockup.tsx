import React from 'react';
import { PortfolioItem } from '../types';
import { Globe, ExternalLink, Sparkles, Layers } from 'lucide-react';

interface PortfolioVisualMockupProps {
  item: PortfolioItem;
  className?: string;
}

export const PortfolioVisualMockup: React.FC<PortfolioVisualMockupProps> = ({
  item,
  className = '',
}) => {
  return (
    <div className={`relative w-full aspect-[16/10] bg-slate-100/90 overflow-hidden flex flex-col ${className}`}>
      {/* Browser Bar */}
      <div className="bg-slate-200/90 px-3 py-1.5 flex items-center justify-between border-b border-slate-300/60 z-10">
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <div className="bg-white/80 text-[10px] text-slate-500 px-3 py-0.5 rounded-full flex items-center gap-1 max-w-[160px] truncate shadow-xs">
          <Globe className="w-2.5 h-2.5 text-slate-400 flex-shrink-0" />
          <span className="truncate">{item.websiteUrl ? item.websiteUrl.replace(/^https?:\/\//, '') : 'legacy.digital'}</span>
        </div>
        <div className="w-4" />
      </div>

      {/* Screen Content */}
      <div className="relative flex-1 w-full bg-slate-900 overflow-hidden group">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0e1e38] via-[#152a4e] to-[#0a1628] p-5 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-[#EE7F23] uppercase">
                {item.category}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            </div>

            <div>
              <h4 className="font-display font-bold text-lg text-white leading-tight mb-1">
                {item.headline || item.title}
              </h4>
              <p className="text-[11px] text-slate-300 line-clamp-2">
                {item.subheadline || item.description}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold bg-white/10 px-2 py-0.5 rounded text-slate-300">
                {item.badge || 'Case Study'}
              </span>
            </div>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#0e1e38]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="bg-[#EE7F23] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <span>View Details</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
