import React from 'react';

interface LegacyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const LegacyLogo: React.FC<LegacyLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-8',
    md: 'w-9 h-10',
    lg: 'w-11 h-12',
  };

  const textSizes = {
    sm: {
      title: 'text-lg tracking-[0.16em]',
      sub: 'text-[8px] tracking-[0.22em]',
      tagline: 'text-[7px] tracking-[0.2em]',
    },
    md: {
      title: 'text-[22px] tracking-[0.18em]',
      sub: 'text-[9px] tracking-[0.25em]',
      tagline: 'text-[7.5px] tracking-[0.22em]',
    },
    lg: {
      title: 'text-2xl tracking-[0.2em]',
      sub: 'text-[10px] tracking-[0.28em]',
      tagline: 'text-[8.5px] tracking-[0.25em]',
    },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Iconic Mark matching the reference image */}
      <div className={`${iconSizes[size]} flex-shrink-0 relative`}>
        <svg viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left Navy Column */}
          <rect x="2" y="3" width="7" height="34" rx="1" fill="#0e1e38" />
          
          {/* Middle Orange/Gold Accent Column */}
          <rect x="13" y="14" width="7" height="23" rx="1" fill="#EE7F23" />
          
          {/* Right Navy Column with geometric corner */}
          <path
            d="M24 3H31C32.1046 3 33 3.89543 33 5V36C33 36.5523 32.5523 37 32 37H24V3Z"
            fill="#0e1e38"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif font-extrabold text-[#0e1e38] leading-none uppercase ${textSizes[size].title}`}>
          LEGACY
        </span>
        <span className={`font-sans font-bold text-[#0e1e38] leading-tight mt-1 uppercase ${textSizes[size].sub}`}>
          GROUP INTERNATIONAL
        </span>
        {showTagline && (
          <span className={`font-sans font-medium text-slate-500 tracking-wider mt-0.5 uppercase ${textSizes[size].tagline}`}>
            PEOPLE <span className="text-[#EE7F23] mx-0.5">|</span> PROCESS <span className="text-[#EE7F23] mx-0.5">|</span> PROGRESS
          </span>
        )}
      </div>
    </div>
  );
};
