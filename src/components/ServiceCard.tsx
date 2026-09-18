import React from 'react';
import { ServiceItem } from '../types';
import { Monitor, Megaphone, Search, PenTool, Mail, Settings } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const getIcon = () => {
    const iconClass = "w-6 h-6 text-[#0e1e38] stroke-[2]";
    switch (service.iconName) {
      case 'monitor':
        return <Monitor className={iconClass} />;
      case 'megaphone':
        return <Megaphone className={iconClass} />;
      case 'search':
        return <Search className={iconClass} />;
      case 'pen-tool':
        return <PenTool className={iconClass} />;
      case 'mail':
        return <Mail className={iconClass} />;
      case 'settings':
        return <Settings className={iconClass} />;
      default:
        return <Monitor className={iconClass} />;
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.07)] hover:border-orange-100 transition-all duration-300 flex flex-col items-center text-center h-full cursor-pointer hover:-translate-y-1"
    >
      {/* Soft Orange Circular Icon Badge */}
      <div className="w-14 h-14 rounded-full bg-[#FFF0E5] group-hover:bg-[#FFE5D3] flex items-center justify-center mb-5 transition-colors duration-200 border border-orange-100/60 flex-shrink-0">
        {getIcon()}
      </div>

      {/* Title */}
      <h3 className="font-sans font-bold text-base sm:text-[16.5px] text-[#0e1e38] group-hover:text-[#EE7F23] transition-colors leading-snug mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-[13px] sm:text-[13.5px] leading-relaxed flex-grow">
        {service.description}
      </p>
    </div>
  );
};
