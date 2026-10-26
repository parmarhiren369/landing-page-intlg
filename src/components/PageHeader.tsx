import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface PageHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  currentPageName: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  currentPageName,
}) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative bg-gradient-to-b from-slate-50/80 via-white to-white pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-slate-100 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-1.5 hover:text-[#EE7F23] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-[#0e1e38] font-bold">{currentPageName}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#EE7F23] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            {badgeIcon}
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1e38] tracking-tight leading-[1.15] mb-4 max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
