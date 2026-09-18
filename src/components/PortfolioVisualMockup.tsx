import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioVisualMockupProps {
  item: PortfolioItem;
}

export const PortfolioVisualMockup: React.FC<
  PortfolioVisualMockupProps
> = ({ item }) => {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#eef3f8]">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="block w-full h-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#eef3f8]">
          <p className="text-sm text-slate-400">
            No image available
          </p>
        </div>
      )}
    </div>
  );
};