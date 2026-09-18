import React, { useState } from 'react';
import { PORTFOLIO_DATA, SOCIAL_MEDIA_IMAGES } from '../data';
import { PortfolioItem, SocialMediaImage } from '../types';
import { PortfolioCard } from './PortfolioCard';
import { SocialMediaGalleryGrid } from './SocialMediaGalleryGrid';
import { ImageLightboxModal } from './ImageLightboxModal';
import { ArrowRight, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectPortfolioItem: (item: PortfolioItem) => void;
  onViewAllPortfolio: () => void;
  onGetInTouch?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectPortfolioItem,
  onViewAllPortfolio,
  onGetInTouch,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [lightboxImage, setLightboxImage] = useState<SocialMediaImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    { label: 'All Work', value: 'All Work' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Social Media', value: 'Social Media', badge: '12 Images' },
    { label: 'SEO & Growth', value: 'SEO & Growth' },
    { label: 'Brand & Print', value: 'Brand & Print' },
  ];

  const handleCardClick = (item: PortfolioItem) => {
    if (item.category === 'Social Media') {
      setSelectedCategory('Social Media');
    } else {
      onSelectPortfolioItem(item);
    }
  };

  const handleOpenLightbox = (image: SocialMediaImage, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const handleNextLightbox = () => {
    const nextIdx = (lightboxIndex + 1) % SOCIAL_MEDIA_IMAGES.length;
    setLightboxIndex(nextIdx);
    setLightboxImage(SOCIAL_MEDIA_IMAGES[nextIdx]);
  };

  const handlePrevLightbox = () => {
    const prevIdx = (lightboxIndex - 1 + SOCIAL_MEDIA_IMAGES.length) % SOCIAL_MEDIA_IMAGES.length;
    setLightboxIndex(prevIdx);
    setLightboxImage(SOCIAL_MEDIA_IMAGES[prevIdx]);
  };

  const filteredCards = selectedCategory === 'All Work'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-white py-16 sm:py-20 border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Title and Right Action Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#EE7F23] uppercase block mb-3">
              FEATURED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1e38] tracking-tight leading-tight mb-3">
              A Glimpse of Our Work
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Real projects. Real results. Explore some of the brands we've helped grow.
            </p>
          </div>

          {/* Right-side Link */}
          <div className="flex-shrink-0">
            <button
              onClick={onViewAllPortfolio}
              className="group inline-flex items-center gap-2 text-base font-bold text-[#0e1e38] hover:text-[#EE7F23] transition-colors py-1 cursor-pointer"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#0e1e38] group-hover:text-[#EE7F23]" />
            </button>
          </div>
        </div>

        {/* Category Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0e1e38] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                {cat.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isSelected ? 'bg-[#EE7F23] text-white' : 'bg-orange-100 text-[#EE7F23]'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* WHEN "SOCIAL MEDIA" IS CLICKED: DISPLAY ALL THE EXACT IMAGES UNDER IT */}
        {selectedCategory === 'Social Media' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Social Media Highlight Banner */}
            <div className="bg-gradient-to-r from-[#0e1e38] to-[#162a4d] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#EE7F23] border border-orange-400/30 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Omnichannel Social Media Campaigns</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  IDEAS. PEOPLE. IMPACT.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Browse all 12 featured social media campaign creatives, influencer activations, thought leadership carousels, and verified client deliverables below.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const smItem = PORTFOLIO_DATA.find((p) => p.category === 'Social Media');
                    if (smItem) onSelectPortfolioItem(smItem);
                  }}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg border border-white/20 transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-orange-400" />
                  <span>Case Study Details</span>
                </button>
                {onGetInTouch && (
                  <button
                    onClick={onGetInTouch}
                    className="inline-flex items-center gap-2 bg-[#EE7F23] hover:bg-[#de7016] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <span>Request Campaign</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* ALL SOCIAL MEDIA IMAGES IN RESPONSIVE GRID */}
            <SocialMediaGalleryGrid
              onSelectImage={handleOpenLightbox}
              onRequestCampaign={onGetInTouch}
              showFilterTabs={true}
            />
          </div>
        ) : (
          /* STANDARD PORTFOLIO CARDS ROW (Matching Reference Design) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {filteredCards.map((item) => (
              <div key={item.id} className="relative group">
                <PortfolioCard
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
                {item.category === 'Social Media' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory('Social Media');
                    }}
                    className="mt-2 w-full py-1.5 px-3 rounded-lg bg-orange-50 hover:bg-orange-100 text-[#EE7F23] hover:text-[#de7016] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-orange-200/60"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Click to view all 12 social images</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox Modal for Social Media Images */}
      <ImageLightboxModal
        isOpen={Boolean(lightboxImage)}
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        currentIndex={lightboxIndex}
        totalImages={SOCIAL_MEDIA_IMAGES.length}
        onRequestCampaign={onGetInTouch}
      />
    </section>
  );
};

