import React from 'react';

interface HeroVisualProps {
  onOpenSocialMedia?: () => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onOpenSocialMedia }) => {

  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[620px] mx-auto select-none">
      {/* Decorative Handwritten Script Callout (Top Right) */}
      <div className="absolute -top-10 sm:-top-8 right-2 sm:right-6 z-20 text-right transform rotate-[-2deg]">
        <p className="font-script text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0e1e38] leading-[1.05] tracking-wide">
          More <br />
          Than Marketing <br />
          <span className="text-[#0e1e38]/90">A Growth Partner</span>
        </p>
      </div>

      {/* Main Composition Container */}
      <div className="relative pt-6 sm:pt-8 pb-4">
        {/* Soft atmospheric ambient glow behind devices */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/50 via-slate-50/70 to-blue-50/30 rounded-3xl -z-10 blur-xl scale-95 transform translate-y-4" />

        {/* 1. LAPTOP MOCKUP */}
        <div className="relative z-10 w-[88%] sm:w-[86%] shadow-2xl rounded-t-2xl overflow-hidden border-[6px] sm:border-[8px] border-[#222831] bg-[#111419] mx-auto md:ml-0">
          {/* Laptop Screen Bezel */}
          <div className="bg-[#1a1e24] p-1.5 flex items-center justify-between border-b border-[#2b303c]">
            <div className="flex items-center space-x-1.5 pl-1.5">
              <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
            </div>
            {/* Browser Address Bar */}
            <div className="bg-[#0e1217] text-[9px] text-slate-400 px-3 py-0.5 rounded-full flex items-center gap-1.5 w-48 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>https://yourbrand.com</span>
            </div>
            <div className="w-8" />
          </div>

          {/* Laptop Screen Content (Website from reference image) */}
          <div className="relative bg-slate-900 text-white aspect-[16/10] overflow-hidden flex flex-col justify-between">
            {/* Scenic Mountain Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(15, 29, 56, 0.4) 0%, rgba(15, 29, 56, 0.75) 100%), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80')`,
              }}
            />

            {/* In-screen Navbar */}
            <div className="relative z-10 px-4 py-3 flex items-center justify-between border-b border-white/10 backdrop-blur-[2px]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#EE7F23] flex items-center justify-center font-bold text-[9px]">
                  Y
                </div>
                <span className="font-semibold text-xs tracking-wider">Your Brand</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] text-white/90">
                <span className="hover:text-white cursor-pointer font-medium text-white border-b border-white pb-0.5">Home</span>
                <span className="hover:text-white cursor-pointer">About</span>
                <span className="hover:text-white cursor-pointer">Services</span>
                <span className="hover:text-white cursor-pointer">Contact</span>
              </div>
            </div>

            {/* In-screen Hero Content */}
            <div className="relative z-10 px-6 py-4 my-auto text-center flex flex-col items-center">
              <span className="inline-block text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-white/15 text-orange-200 mb-2 border border-white/20">
                Enterprise Digital Platform
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold leading-tight drop-shadow-md text-white mb-1.5">
                Ideas Today. <br />
                <span className="text-white">Growth Tomorrow.</span>
              </h3>
              <p className="text-[10px] sm:text-xs text-white/80 max-w-[240px] mb-3 leading-relaxed">
                Digital Solutions for a Brighter Tomorrow.
              </p>
              <div className="inline-flex items-center gap-1 bg-[#EE7F23] text-white text-[10px] font-semibold px-3 py-1.5 rounded-md shadow-md">
                <span>Get Started</span>
              </div>
            </div>

            {/* In-screen footer bar */}
            <div className="relative z-10 px-4 py-2 bg-black/40 backdrop-blur-xs flex items-center justify-between text-[8px] text-white/60">
              <span>Trusted by 500+ leaders</span>
              <div className="flex gap-2">
                <span>Analytics</span>
                <span>Security</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Laptop Base / Hinge Bar */}
          <div className="h-3 bg-[#e2e8f0] border-t border-[#cbd5e1] rounded-b-sm flex items-center justify-center">
            <div className="w-14 h-1 bg-[#94a3b8] rounded-full" />
          </div>
        </div>

        {/* 2. SMARTPHONE MOCKUP (Overlapping laptop on the right) */}
        <div
          onClick={onOpenSocialMedia}
          className={`absolute right-12 sm:right-16 -bottom-3 sm:-bottom-2 z-20 w-[145px] sm:w-[170px] lg:w-[185px] bg-[#0f172a] rounded-[28px] sm:rounded-[32px] p-2 sm:p-2.5 shadow-2xl border-[3px] border-[#334155] ${
            onOpenSocialMedia ? 'cursor-pointer hover:scale-[1.03] transition-transform duration-200 group/phone' : ''
          }`}
          title={onOpenSocialMedia ? "Click to view social media campaign gallery" : undefined}
        >
          {onOpenSocialMedia && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#EE7F23] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md z-40 opacity-0 group-hover/phone:opacity-100 transition-opacity">
              View 12 Images →
            </div>
          )}
          {/* Dynamic Island / Speaker Notch */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-30 flex items-center justify-end px-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
          </div>

          {/* Phone Screen Container */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] overflow-hidden flex flex-col aspect-[9/19] text-slate-800 text-[9px]">
            {/* Status bar */}
            <div className="pt-2 px-3 flex justify-between items-center text-[7px] font-bold text-slate-700 bg-white">
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-slate-800 inline-block" />
              </div>
            </div>

            {/* Social Header */}
            <div className="px-2.5 pt-2 pb-1.5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full ring-1.5 ring-[#EE7F23] p-0.5">
                  <div className="w-full h-full rounded-full bg-[#0e1e38] flex items-center justify-center text-white font-serif font-bold text-[7px]">
                    L
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[8px] text-[#0e1e38] leading-tight">legacy.intl</div>
                  <div className="text-[6.5px] text-slate-400">Verified Partner</div>
                </div>
              </div>
              <div className="bg-[#EE7F23] text-white px-2 py-0.5 rounded text-[7px] font-semibold">
                Follow
              </div>
            </div>

            {/* Social Metrics */}
            <div className="flex justify-around py-1 text-center bg-slate-50/60 border-b border-slate-100 text-[7px]">
              <div>
                <span className="font-bold block text-slate-900">428</span>
                <span className="text-slate-400 text-[6px]">Posts</span>
              </div>
              <div>
                <span className="font-bold block text-slate-900">48.2k</span>
                <span className="text-slate-400 text-[6px]">Followers</span>
              </div>
              <div>
                <span className="font-bold block text-slate-900">182</span>
                <span className="text-slate-400 text-[6px]">Following</span>
              </div>
            </div>

            {/* 3x3 Photo Grid Feed */}
            <div className="grid grid-cols-3 gap-0.5 p-1 bg-white flex-1 overflow-hidden">
              <div className="aspect-square bg-cover bg-center rounded-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80')` }} />
              <div className="aspect-square bg-[#0e1e38] text-white flex flex-col items-center justify-center p-1 text-center rounded-xs">
                <span className="font-serif font-bold text-[7px] text-[#EE7F23]">GROWTH</span>
                <span className="text-[5px] text-slate-300">Strategy</span>
              </div>
              <div className="aspect-square bg-cover bg-center rounded-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80')` }} />
              <div className="aspect-square bg-cover bg-center rounded-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80')` }} />
              <div className="aspect-square bg-cover bg-center rounded-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80')` }} />
              <div className="aspect-square bg-gradient-to-br from-[#EE7F23] to-[#d9701a] text-white flex flex-col items-center justify-center p-1 rounded-xs">
                <span className="font-bold text-[7px]">RESULTS</span>
                <span className="text-[5px]">#1 SEO</span>
              </div>
              <div className="aspect-square bg-cover bg-center rounded-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80')` }} />
              <div className="aspect-square bg-cover bg-center rounded-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=300&q=80')` }} />
              <div className="aspect-square bg-[#0e1e38] text-white flex items-center justify-center text-[6px] font-bold rounded-xs">
                LEGACY
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="py-1 px-2 border-t border-slate-100 flex justify-between items-center text-slate-600 bg-white">
              <span className="text-slate-900 font-bold">⌂</span>
              <span>🔍</span>
              <span>▶</span>
              <span>♡</span>
              <div className="w-3 h-3 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* 3. COFFEE MUG WITH HANDWRITTEN TEXT & POTTED SUCCULENT PLANT */}
        <div className="absolute right-0 sm:-right-2 bottom-0 z-20 flex flex-col items-center">
          {/* Plant Leaves Peeking out behind mug */}
          <div className="relative mb-[-12px] z-10">
            <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-6">
              {/* Plant Leaves */}
              <path d="M40 55C40 30 18 20 10 18C15 32 25 45 40 55Z" fill="#2d6a4f" />
              <path d="M40 55C45 28 65 18 72 15C68 32 55 48 40 55Z" fill="#1b4332" />
              <path d="M40 55C38 35 25 10 32 5C38 20 42 40 40 55Z" fill="#40916c" />
              <path d="M40 55C42 35 52 8 46 4C42 20 40 40 40 55Z" fill="#52b788" />
              <path d="M40 55C25 42 8 38 4 45C18 52 30 55 40 55Z" fill="#74c69d" />
            </svg>
          </div>

          {/* White Ceramic Mug */}
          <div className="relative w-[85px] sm:w-[98px] bg-gradient-to-r from-slate-100 via-white to-slate-200 rounded-b-2xl rounded-t-sm shadow-xl p-2 border-t-2 border-slate-200 border-x border-slate-200/80 flex flex-col items-center justify-center text-center">
            {/* Mug Handle */}
            <div className="absolute -right-3 top-3 w-4 h-9 border-3 border-slate-200 rounded-r-xl bg-transparent" />
            
            {/* Handwritten Coffee Mug Inscription */}
            <div className="my-1">
              <span className="font-script text-xs sm:text-sm text-[#0e1e38] font-bold block leading-tight">
                Your Growth
              </span>
              <span className="font-script text-xs sm:text-sm text-[#0e1e38] font-bold block leading-tight">
                Our Support
              </span>
              <div className="w-3 h-0.5 bg-[#EE7F23] mx-auto mt-1 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
