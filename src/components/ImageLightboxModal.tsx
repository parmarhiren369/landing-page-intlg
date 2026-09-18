import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Share2, Eye, Tag, Sparkles } from 'lucide-react';
import { SocialMediaImage } from '../types';

interface ImageLightboxModalProps {
  isOpen: boolean;
  image: SocialMediaImage | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
  onRequestCampaign?: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex = 0,
  totalImages = 0,
  onRequestCampaign,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  const getPlatformBadgeColor = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return 'bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white';
      case 'LinkedIn':
        return 'bg-[#0077b5] text-white';
      case 'Facebook':
        return 'bg-[#1877f2] text-white';
      default:
        return 'bg-[#0e1e38] text-white';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0e1e38] text-white rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden my-auto max-h-[94vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Navigation Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-[#EE7F23] text-white transition-all cursor-pointer shadow-lg hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Navigation Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-3 md:right-auto md:left-[58%] lg:left-[62%] top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-[#EE7F23] text-white transition-all cursor-pointer shadow-lg hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Left / Image Side */}
        <div className="md:w-7/12 lg:w-3/5 bg-black/60 flex items-center justify-center p-2 sm:p-6 relative min-h-[300px] md:min-h-[500px]">
          <img
            src={image.imageUrl}
            alt={image.title}
            className="max-h-[60vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />

          {/* Platform & Counter Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${getPlatformBadgeColor(image.platform)}`}>
              {image.platform}
            </span>
            {totalImages > 0 && (
              <span className="text-[11px] font-semibold bg-white/15 backdrop-blur-xs text-slate-200 px-2.5 py-1 rounded-full">
                {currentIndex + 1} / {totalImages}
              </span>
            )}
          </div>
        </div>

        {/* Right / Content Details Side */}
        <div className="md:w-5/12 lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#0e1e38] to-[#0a1628] border-t md:border-t-0 md:border-l border-slate-700/60">
          <div>
            {/* Category / Campaign */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE7F23]">
                {image.campaign}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400 font-medium">
                {image.category}
              </span>
            </div>

            {/* Headline & Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {image.headline}
            </h3>

            <p className="text-sm font-medium text-slate-300 leading-snug mb-4">
              {image.title}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {image.caption}
            </p>

            {/* Campaign Performance Metrics */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#EE7F23]" />
                <span>Verified Social Performance</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {image.impressions && (
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-[#EE7F23] mb-0.5">
                      <Eye className="w-3 h-3" />
                      <span className="font-bold text-xs">{image.impressions}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Impressions</span>
                  </div>
                )}
                {image.likes && (
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-pink-400 mb-0.5">
                      <Heart className="w-3 h-3 fill-current" />
                      <span className="font-bold text-xs">{image.likes}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Likes & Saves</span>
                  </div>
                )}
                {image.shares && (
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-emerald-400 mb-0.5">
                      <Share2 className="w-3 h-3" />
                      <span className="font-bold text-xs">{image.shares}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Shares / Co-Labs</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-1.5">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[11px] font-medium bg-white/10 text-slate-300 px-2.5 py-1 rounded-md"
                  >
                    <Tag className="w-2.5 h-2.5 text-[#EE7F23]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button & Navigation Footer */}
          <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-3">
            {onRequestCampaign && (
              <button
                onClick={() => {
                  onClose();
                  onRequestCampaign();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>Launch Similar Social Campaign</span>
              </button>
            )}

            {/* Mobile Nav Arrows */}
            <div className="flex sm:hidden items-center justify-between pt-1">
              <button
                onClick={onPrev}
                className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white p-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                onClick={onNext}
                className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white p-1 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
