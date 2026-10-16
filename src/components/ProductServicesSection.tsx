import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { ServiceBadgeIcon } from './ServiceBadgeIcon';
import { ArrowUpRight, CheckCircle2, SlidersHorizontal, Sparkles, Layers } from 'lucide-react';

interface ProductServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ProductServicesSection: React.FC<ProductServicesProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const [viewMode, setViewMode] = useState<'poster' | 'cards'>('poster');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Konektivitas', 'Jaringan', 'Keamanan', 'Cloud', 'Smartech'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const leftColumnServices = SERVICES_DATA.filter((s) => s.flyerPosition === 'left');
  const rightColumnServices = SERVICES_DATA.filter((s) => s.flyerPosition === 'right');

  return (
    <section id="layanan" className="relative py-20 md:py-28 bg-[#060c18] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#00f2fe]/5 via-[#d4af37]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          
          {/* Authentic Gold Header Badge from User Flyer */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full mb-6">
            <div className="h-[2px] flex-1 max-w-[80px] sm:max-w-[140px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37] relative">
              <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
            </div>

            <div className="relative px-6 sm:px-10 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0c1f3d] via-[#102952] to-[#0c1f3d] border-2 border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0" />
                <h2 className="text-base sm:text-xl md:text-2xl font-heading font-black tracking-[0.2em] text-gold-gradient uppercase whitespace-nowrap">
                  PRODUCT & SERVICES
                </h2>
                <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0" />
              </div>
            </div>

            <div className="h-[2px] flex-1 max-w-[80px] sm:max-w-[140px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37] relative">
              <span className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Daftar resmi 10 solusi teknologi & telekomunikasi terintegrasi PT Indofiber Lintas Nusantara.
            Klik salah satu layanan untuk melihat spesifikasi teknis lengkap & penawaran korporat.
          </p>

          {/* View Mode Switcher */}
          <div className="mt-8 flex items-center gap-2 p-1 bg-[#09152b] border border-slate-800 rounded-xl">
            <button
              onClick={() => setViewMode('poster')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'poster'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b89330] text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Format Brosur Resmi (2 Kolom)</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b89330] text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Format Katalog Interaktif</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW 1: Official Flyer 2-Column Presentation (Mirroring image.png) */}
        {/* ============================================================== */}
        {viewMode === 'poster' && (
          <div className="relative rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-[#09152d]/90 via-[#071122]/95 to-[#050c18] border border-[#d4af37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
            
            {/* Top Subtle Metallic Corner Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-lg" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
              
              {/* Central Glowing Fiber Divider (Desktop) */}
              <div className="hidden lg:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#00f2fe]/50 to-transparent">
                {/* Node dots along center */}
                <div className="absolute top-1/4 -left-[3px] w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
                <div className="absolute top-1/2 -left-[3px] w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                <div className="absolute top-3/4 -left-[3px] w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
              </div>

              {/* Left Column (Services 1 - 5) */}
              <div className="flex flex-col space-y-6 sm:space-y-8">
                {leftColumnServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl bg-[#0b1b36]/40 hover:bg-[#102447]/80 border border-transparent hover:border-[#d4af37]/40 transition-all duration-300 cursor-pointer relative"
                  >
                    {/* Flyer Circular Gold Badge */}
                    <ServiceBadgeIcon iconType={service.iconType} size="md" />

                    {/* Content & Horizontal Fiber Connector */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-gold-gradient transition-colors">
                          {service.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f2fe] transition-colors shrink-0" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
                        {service.subtitle}
                      </p>
                      
                      {/* Sub-line with connector node mimicking flyer */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 via-slate-800 to-transparent group-hover:from-[#00f2fe]/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_6px_#00f2fe]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column (Services 6 - 10) */}
              <div className="flex flex-col space-y-6 sm:space-y-8">
                {rightColumnServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl bg-[#0b1b36]/40 hover:bg-[#102447]/80 border border-transparent hover:border-[#d4af37]/40 transition-all duration-300 cursor-pointer relative"
                  >
                    {/* Flyer Circular Gold Badge */}
                    <ServiceBadgeIcon iconType={service.iconType} size="md" />

                    {/* Content & Horizontal Fiber Connector */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-gold-gradient transition-colors">
                          {service.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f2fe] transition-colors shrink-0" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
                        {service.subtitle}
                      </p>
                      
                      {/* Sub-line with connector node */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 via-slate-800 to-transparent group-hover:from-[#00f2fe]/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_6px_#00f2fe]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Cyber Wave Banner (Replicating Image 1 bottom banner) */}
            <div className="mt-12 pt-8 border-t border-[#d4af37]/20 relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-[#041026] via-[#091f42] to-[#041026]">
              {/* Luminous Wave Curves */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#00f2fe]/10 via-[#d4af37]/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#00f2fe]" />
                    <span>Infrastruktur Menyeluruh & Siap Pakai</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-white mt-1">
                    Butuh Solusi Khusus Sesuai Regulasi & Kebutuhan Bisnis Anda?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    Tim solusi arsitek kami siap membantu survei lokasi gratis dan merancang topologi jaringan terbaik untuk instansi atau bisnis Anda di Palembang dan Sumatera Selatan.
                  </p>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] hover:from-white hover:to-[#e5c052] shadow-[0_0_20px_rgba(212,175,55,0.4)] whitespace-nowrap shrink-0 transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Minta Survei & Penawaran Resmi
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: Interactive Cards & Category Filter View */}
        {/* ============================================================== */}
        {viewMode === 'cards' && (
          <div>
            {/* Category Filter Pills (Functional Buttons) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md'
                      : 'bg-[#09152b] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat === 'All' ? 'Semua Produk (10)' : cat}
                </button>
              ))}
            </div>

            {/* Bento / Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="group rounded-2xl bg-gradient-to-b from-[#09152b] to-[#070f1f] border border-slate-800 hover:border-[#d4af37]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] cursor-pointer relative"
                >
                  <div>
                    {/* Top Header Badge & Number */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <ServiceBadgeIcon iconType={service.iconType} size="sm" />
                      <span className="text-2xl font-mono font-bold text-slate-600 group-hover:text-[#d4af37]/80 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Service Name & Subtitle */}
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-gold-gradient transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 mb-4 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Key Features Bullet List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: SLA & Action Button */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#10b981] font-medium">
                      {service.specifications.sla}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] group-hover:text-white transition-colors">
                      <span>Rincian</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
