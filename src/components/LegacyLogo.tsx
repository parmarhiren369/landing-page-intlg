import React from 'react';
import legacyLogo from '../assets/logo.png';

interface LegacyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const LegacyLogo: React.FC<LegacyLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const logoSizes = {
    sm: 'w-32',
    md: 'w-40',
    lg: 'w-52',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={legacyLogo}
        alt="Legacy Group International"
        className={`${logoSizes[size]} h-auto object-contain`}
      />
    </div>
  );
};