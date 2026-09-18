import React, { useState } from 'react';
import { SOCIAL_MEDIA_IMAGES } from '../data';
import { SocialMediaImage } from '../types';
import { Eye, Heart, Share2, ZoomIn, Sparkles, Filter } from 'lucide-react';

interface SocialMediaGalleryGridProps {
  onSelectImage: (image: SocialMediaImage, index: number) => void;
  onRequestCampaign?: () => void;
  showFilterTabs?: boolean;
}

export const SocialMediaGalleryGrid: React.FC<SocialMediaGalleryGridProps> = ({
  onSelectImage,
  onRequestCampaign,
  showFilterTabs = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Campaign Posters',
    'Instagram Feeds',
    'Thought Leadership',
    'Carousels & Infographics',
  ];

  const filteredImages = activeCategory === 'All'
    ? SOCIAL_MEDIA_IMAGES
    : SOCIAL_MEDIA_IMAGES.filter((img) => img.category === activeCategory);

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return 'bg-gradient-to-r from-pink-500 to-orange-500 text-white';
      case 'LinkedIn':
        return 'bg-[#0077b5] text-white';
      case 'Facebook':
        return 'bg-[#1877f2] text-white';
      default:
        return 'bg-[#0e1e38] text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Gallery Header Info & Category Filter Bar */}
      {showFilterTabs && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-orange-50 text-[#EE7F23] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0e1e38]">
                All Social Media Campaign Creatives
              </span>
              <span className="text-xs text-slate-500 block">
                Showing {filteredImages.length} live campaign assets across Instagram, LinkedIn & Omnichannel
              </span>
            </div>
          </div>

          {/* Sub-categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 hidden sm:inline-block" />
            {categories.map((cat) => {
              const count = cat === 'All'
                ? SOCIAL_MEDIA_IMAGES.length
                : SOCIAL_MEDIA_IMAGES.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0e1e38] text-white shadow-sm font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? 'text-orange-300' : 'text-slate-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Responsive Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => onSelectImage(image, index)}
            className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Image Container with Zoom & Overlay */}
            <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
              <img
                src={image.imageUrl}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Badges */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide shadow-sm ${getPlatformBadge(image.platform)}`}>
                  {image.platform}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white">
                  {image.category}
                </span>
              </div>

              {/* Center Zoom Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="w-11 h-11 rounded-full bg-[#EE7F23]/95 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* In-image Bottom Headline */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
                <span className="text-[10px] text-orange-300 font-bold uppercase tracking-wider block">
                  {image.campaign}
                </span>
                <h4 className="font-display font-bold text-white text-sm leading-snug line-clamp-1">
                  {image.headline}
                </h4>
              </div>
            </div>

            {/* Bottom Card Content */}
            <div className="p-3.5 flex flex-col flex-grow justify-between bg-white">
              <div>
                <p className="text-xs font-semibold text-[#0e1e38] line-clamp-1 mb-1">
                  {image.title}
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-2.5">
                  {image.caption}
                </p>
              </div>

              {/* Performance Metrics Bar */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <div className="flex items-center gap-1 text-slate-700">
                  <Eye className="w-3 h-3 text-[#EE7F23]" />
                  <span>{image.impressions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-pink-500">
                    <Heart className="w-2.5 h-2.5 fill-current" />
                    <span>{image.likes}</span>
                  </span>
                  <span className="flex items-center gap-0.5 text-slate-400">
                    <Share2 className="w-2.5 h-2.5" />
                    <span>{image.shares}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA hint */}
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-xs font-bold text-[#0e1e38] block">
            Looking for a customized social campaign for your brand?
          </span>
          <span className="text-xs text-slate-500">
            We deliver multi-platform creative assets, copy strategy, motion graphics, and paid media distribution.
          </span>
        </div>
        {onRequestCampaign && (
          <button
            onClick={onRequestCampaign}
            className="flex-shrink-0 bg-[#EE7F23] hover:bg-[#de7016] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-all cursor-pointer"
          >
            Get Tailored Social Strategy
          </button>
        )}
      </div>
    </div>
  );
};
