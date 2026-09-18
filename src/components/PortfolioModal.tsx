import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';

import {
  PortfolioItem,
  SocialMediaImage,
} from '../types';

import {
  PORTFOLIO_DATA,
  SOCIAL_MEDIA_IMAGES,
} from '../data';

import { PortfolioVisualMockup } from './PortfolioVisualMockup';
import { SocialMediaGalleryGrid } from './SocialMediaGalleryGrid';
import { ImageLightboxModal } from './ImageLightboxModal';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: PortfolioItem | null;
  onSelectAnotherItem: (item: PortfolioItem) => void;
  onGetInTouch: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
  onSelectAnotherItem,
  onGetInTouch,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<string>('All');

  const [lightboxImage, setLightboxImage] =
    useState<SocialMediaImage | null>(null);

  const [lightboxIndex, setLightboxIndex] =
    useState<number>(0);

  if (!isOpen) {
    return null;
  }

  const current =
    selectedItem || PORTFOLIO_DATA[0];

  const categories = [
    'All',
    'Web Development',
    'Social Media',
    'SEO & Growth',
    'Brand & Print',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter(
          (item) => item.category === activeCategory
        );

  /*
   * All website development projects.
   * These images will appear in the right-side gallery.
   */
  const websiteItems = PORTFOLIO_DATA.filter(
    (item) => item.category === 'Web Development'
  );

  const isSocialMediaSelected =
    current.category === 'Social Media' ||
    activeCategory === 'Social Media';

  const handleOpenLightbox = (
    image: SocialMediaImage,
    index: number
  ) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const handleNextLightbox = () => {
    const nextIndex =
      (lightboxIndex + 1) %
      SOCIAL_MEDIA_IMAGES.length;

    setLightboxIndex(nextIndex);
    setLightboxImage(
      SOCIAL_MEDIA_IMAGES[nextIndex]
    );
  };

  const handlePrevLightbox = () => {
    const previousIndex =
      (lightboxIndex -
        1 +
        SOCIAL_MEDIA_IMAGES.length) %
      SOCIAL_MEDIA_IMAGES.length;

    setLightboxIndex(previousIndex);
    setLightboxImage(
      SOCIAL_MEDIA_IMAGES[previousIndex]
    );
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    const firstItem =
      PORTFOLIO_DATA.find(
        (item) => item.category === category
      );

    if (category !== 'All' && firstItem) {
      onSelectAnotherItem(firstItem);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6">
        <div className="relative my-auto flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">

          {/* ================= HEADER ================= */}
          <div className="flex flex-shrink-0 items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-7">
            <div>
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#EE7F23]">
                LEGACY PORTFOLIO SHOWCASE
              </span>

              <h3 className="font-display text-xl font-bold text-[#0e1e38] sm:text-2xl">
                {current.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-full p-2 text-slate-400 transition hover:bg-slate-200 hover:text-slate-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* ================= SCROLLABLE CONTENT ================= */}
          <div className="flex-1 space-y-8 overflow-y-auto p-5 sm:p-7">

            {/* ================= MAIN SHOWCASE ================= */}
            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12">

              {/* LEFT: SELECTED WEBSITE IMAGE */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex min-h-[330px] items-center justify-center overflow-hidden rounded-lg bg-white sm:min-h-[420px]">
                    {current.image ? (
                      <img
                        src={current.image}
                        alt={current.title}
                        className="h-full max-h-[560px] w-full object-contain"
                      />
                    ) : (
                      <PortfolioVisualMockup
                        item={current}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT: PROJECT DETAILS AND ALL WEBSITE IMAGES */}
              <div className="lg:col-span-5">

                {/* PROJECT DETAILS */}
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-[#EE7F23]">
                    {current.badge ||
                      current.category}
                  </span>

                  <h4 className="font-display text-2xl font-bold leading-tight text-[#0e1e38] sm:text-3xl">
                    {current.headline}
                  </h4>

                  <p className="text-sm font-medium leading-6 text-slate-500">
                    {current.subheadline}
                  </p>

                  {current.description && (
                    <p className="text-sm leading-7 text-slate-600">
                      {current.description}
                    </p>
                  )}

                  <div className="border-t border-slate-100 pt-4">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#0e1e38]">
                      Scope of Delivery:
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {current.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle className="h-3 w-3 text-[#EE7F23]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {current.websiteUrl && (
                    <a
                      href={current.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#EE7F23] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#de7016]"
                    >
                      Visit Website
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onGetInTouch();
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#EE7F23] bg-white px-4 py-3 text-sm font-semibold text-[#EE7F23] transition hover:bg-orange-50"
                  >
                    Request Similar Project
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                {/* ================= ALL WEBSITE IMAGES ================= */}
                {websiteItems.length > 0 && (
                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <div className="mb-4">
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#EE7F23]">
                        WEBSITE DEVELOPMENT
                      </span>

                      <h5 className="text-base font-bold text-[#0e1e38]">
                        Explore Website Projects
                      </h5>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Select any website image to view its details.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {websiteItems.map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => {
                            onSelectAnotherItem(item);
                            setActiveCategory(
                              'Web Development'
                            );
                          }}
                          className={`group overflow-hidden rounded-lg border text-left transition ${
                            item.id === current.id
                              ? 'border-[#EE7F23] bg-orange-50 ring-2 ring-orange-100'
                              : 'border-slate-200 bg-white hover:border-[#EE7F23]'
                          }`}
                        >
                          <div className="flex h-24 items-center justify-center overflow-hidden bg-slate-100">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <span className="px-2 text-center text-xs text-slate-400">
                                No image
                              </span>
                            )}
                          </div>

                          <div className="p-2.5">
                            <p className="truncate text-xs font-bold text-[#0e1e38]">
                              {item.title}
                            </p>

                            <p className="mt-1 truncate text-[10px] text-slate-400">
                              {item.category}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ================= SOCIAL MEDIA GALLERY ================= */}
            {isSocialMediaSelected && (
              <div className="border-t border-slate-200 pt-6">
                <div className="mb-4">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-[0.2em] text-[#EE7F23]">
                    CAMPAIGN CREATIVE GALLERY
                  </span>

                  <h4 className="font-display text-xl font-bold text-[#0e1e38] sm:text-2xl">
                    All Social Media Campaign Creatives & Posts
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Click any image to open the full-size preview.
                  </p>
                </div>

                <SocialMediaGalleryGrid
                  onSelectImage={handleOpenLightbox}
                  onRequestCampaign={() => {
                    onClose();
                    onGetInTouch();
                  }}
                />
              </div>
            )}

            {/* ================= OTHER CASE STUDIES ================= */}
            <div className="border-t border-slate-100 pt-6">
              <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#0e1e38]">
                  Explore Other Case Studies
                </h5>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      onClick={() =>
                        handleCategoryChange(category)
                      }
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        activeCategory === category
                          ? 'bg-[#0e1e38] font-semibold text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {filteredItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      onSelectAnotherItem(item);
                      setActiveCategory(item.category);
                    }}
                    className={`rounded-xl border p-3 text-left transition ${
                      item.id === current.id
                        ? 'border-[#EE7F23] bg-orange-50/30 ring-2 ring-orange-100'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="truncate text-xs font-bold text-[#0e1e38]">
                      {item.title}
                    </div>

                    <div className="mt-1 truncate text-[11px] text-slate-400">
                      {item.category}
                    </div>

                    {item.category === 'Social Media' && (
                      <span className="mt-2 inline-block text-[10px] font-bold text-[#EE7F23]">
                        View Campaigns →
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SOCIAL MEDIA LIGHTBOX ================= */}
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
          onClose();
          onGetInTouch();
        }}
      />
    </>
  );
};