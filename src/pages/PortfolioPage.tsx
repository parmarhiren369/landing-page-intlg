import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PORTFOLIO_DATA, SOCIAL_MEDIA_IMAGES } from '../data';
import { PortfolioItem, SocialMediaImage } from '../types';
import { PortfolioCard } from '../components/PortfolioCard';
import { ImageLightboxModal } from '../components/ImageLightboxModal';
import { PortfolioModal } from '../components/PortfolioModal';
import { useNavigation } from '../context/NavigationContext';
import {
  Layers,
  Sparkles,
  Search,
  ExternalLink,
  ArrowRight,
  Filter,
  Eye,
  CheckCircle2,
} from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [socialSearch, setSocialSearch] = useState<string>('');
  const [lightboxImage, setLightboxImage] = useState<SocialMediaImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [selectedPortfolioModalItem, setSelectedPortfolioModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { label: 'All Work', value: 'All Work' },
    { label: 'Web Development', value: 'Web Development', badge: 'Live Sites' },
    { label: 'Social Media', value: 'Social Media', badge: `${SOCIAL_MEDIA_IMAGES.length} Campaigns` },
    { label: 'SEO & Growth', value: 'SEO & Growth' },
    { label: 'Brand & Print', value: 'Brand & Print' },
  ];

  const filteredPortfolioCards =
    selectedCategory === 'All Work'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  const filteredSocialImages = SOCIAL_MEDIA_IMAGES.filter((img) =>
    img.title.toLowerCase().includes(socialSearch.toLowerCase())
  );

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

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <PageHeader
        badge="Featured Work & Live Case Studies"
        badgeIcon={<Layers className="w-3.5 h-3.5 text-[#EE7F23]" />}
        title="Real Projects. Real Results. Our Work."
        subtitle="Explore our portfolio of high-conversion recruitment websites, legal search portals, and over 60+ omnichannel social media and holiday campaign creatives engineered for our partners."
        currentPageName="Portfolio"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
          <div className="flex flex-wrap items-center gap-2">
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

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-[#0e1e38]">{selectedCategory === 'Social Media' ? filteredSocialImages.length : filteredPortfolioCards.length}</strong> items
          </div>
        </div>

        {/* ================= SOCIAL MEDIA DEDICATED SHOWCASE ================= */}
        {selectedCategory === 'Social Media' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Social Header Banner */}
            <div className="bg-gradient-to-r from-[#0e1e38] to-[#162a4d] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#EE7F23] border border-orange-400/30 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{SOCIAL_MEDIA_IMAGES.length} Campaign Creatives</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Omnichannel Social Media & Holiday Campaigns
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Browse all 60+ seasonal holiday greetings, client appreciation posts, thought leadership creatives, and recruitment promotions created for our clients.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-72 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search holiday or campaign..."
                  value={socialSearch}
                  onChange={(e) => setSocialSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-slate-400 border border-white/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EE7F23]"
                />
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {filteredSocialImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => handleOpenLightbox(image, index)}
                  className="group relative bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="aspect-square w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0e1e38]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-white text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <Eye className="w-5 h-5 text-[#EE7F23]" />
                        <span className="text-[11px] font-bold">Click to Expand</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 flex-1 flex flex-col justify-between bg-white">
                    <h4 className="font-semibold text-xs text-[#0e1e38] line-clamp-1 group-hover:text-[#EE7F23] transition-colors">
                      {image.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-1">
                      Campaign Asset
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredSocialImages.length === 0 && (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500">
                <p className="text-sm">No campaign creatives found matching "{socialSearch}".</p>
                <button
                  onClick={() => setSocialSearch('')}
                  className="mt-3 text-xs font-bold text-[#EE7F23] hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ================= ALL WORK OR WEB DEVELOPMENT ================= */
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolioCards.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-[#0e1e38] shadow-xs">
                      {item.badge || 'Live Project'}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#EE7F23]">
                          {item.category}
                        </span>
                        <div className="flex gap-1">
                          {item.tags.slice(0, 2).map((t) => (
                            <span key={t} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#0e1e38] group-hover:text-[#EE7F23] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedPortfolioModalItem(item)}
                        className="text-xs font-bold text-[#0e1e38] hover:text-[#EE7F23] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Case Study Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {item.websiteUrl && (
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0e1e38] hover:bg-[#EE7F23] px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Teaser for 60+ Social Media Campaigns when viewing All Work */}
            {selectedCategory === 'All Work' && (
              <div className="bg-[#0e1e38] text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#EE7F23] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>60+ Additional Creatives</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">
                    Looking for Our Social Media & Holiday Campaigns?
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 max-w-xl">
                    We've designed over 60+ bespoke social graphics for national holidays, awareness months, recruitment campaigns, and celebrations.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCategory('Social Media')}
                  className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
                >
                  <span>Switch to Social Media Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA to start a project */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-[#0e1e38] mb-2">
            Want a Custom Website or Social Media Campaign for Your Brand?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
            Remember, website design, development, and social media campaigns are 100% complimentary when you subscribe to our dedicated assistant plans.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-[#EE7F23] hover:bg-[#de7016] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(lightboxImage)}
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        currentIndex={lightboxIndex}
        totalImages={SOCIAL_MEDIA_IMAGES.length}
        onRequestCampaign={() => {
          setLightboxImage(null);
          navigateTo('contact');
        }}
      />

      {/* Portfolio Case Study Modal */}
      <PortfolioModal
        isOpen={Boolean(selectedPortfolioModalItem)}
        onClose={() => setSelectedPortfolioModalItem(null)}
        selectedItem={selectedPortfolioModalItem}
        onSelectAnotherItem={(item) => setSelectedPortfolioModalItem(item)}
        onGetInTouch={() => {
          setSelectedPortfolioModalItem(null);
          window.open('https://calendly.com/raj-kapoor', '_blank');
        }}
      />
    </div>
  );
};
