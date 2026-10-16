import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Zap, Radio, Globe, PhoneCall } from 'lucide-react';
import { IndofiberLogo } from './IndofiberLogo';
import { COMPANY_PROFILE } from '../data/servicesData';

interface HeroProps {
  onExploreServices: () => void;
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onOpenCalculator,
  onOpenConsultation,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#040812] via-[#071124] to-[#060c18]">
      {/* Background Fiber Stream & Cyber Mesh Ambient */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
      
      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#00f2fe]/10 via-[#d4af37]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00f2fe]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Fiber Light Streak across hero */}
      <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe]/30 to-transparent pointer-events-none" />
      <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Hero Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Location & Authority Kicker */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
              <span className="text-[#d4af37] font-semibold tracking-wider uppercase">Palembang Hub</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Sumatera Selatan</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-[#00f2fe] font-mono">Fiber Optic & Smartech</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.12]">
              Infrastruktur Jaringan{' '}
              <span className="text-gold-gradient block sm:inline">
                Fiber Optik
              </span>{' '}
              & Ekosistem{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">
                Smartech
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              PT Indofiber Lintas Nusantara menghadirkan konektivitas enterprise berstandar telekomunikasi tinggi:
              <strong className="text-white font-medium"> Internet Dedicated Simetris 1:1 CIR 100%</strong>, SD-WAN multi-cabang, Cloud Data Center Tier-3, Cyber Security Anti-DDoS, hingga Pusat Komando (Command Center) pintar.
            </p>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] hover:from-white hover:to-[#e0b94c] shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat 10 Layanan Produk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-[#0e1a32]/80 hover:bg-[#132446] border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Calculator className="w-4 h-4 text-[#d4af37]" />
                <span>Kalkulator Kebutuhan</span>
              </button>
            </div>

            {/* Quick Contact & Address Highlight */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#00f2fe] shrink-0" />
                <span>NOC Palembang: Jl. Anggar Blok E.11, Lorok Pakjo</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>SLA 99.9% Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Emblem & Interactive Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-1 rounded-2xl bg-gradient-to-b from-[#d4af37]/40 via-[#00f2fe]/20 to-transparent shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
              <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#09152b] via-[#071021] to-[#040813] border border-slate-800/80 p-6 md:p-8 flex flex-col items-center text-center overflow-hidden">
                
                {/* Background Glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00f2fe]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-2xl" />

                {/* Official Logo Display */}
                <IndofiberLogo variant="full" size="lg" className="mb-4" />

                {/* Interactive Status & Certification Pill */}
                <div className="w-full mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                    <span className="text-slate-300 font-medium">Enterprise Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[#00f2fe]">
                    <span className="text-[10px] text-slate-400">STATUS:</span>
                    <span>CARRIER GRADE</span>
                  </div>
                </div>

                {/* Direct Fast Inquiry Button */}
                <button
                  onClick={onOpenConsultation}
                  className="mt-5 w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#00f2fe]/15 to-[#d4af37]/15 hover:from-[#00f2fe]/25 hover:to-[#d4af37]/25 border border-[#d4af37]/30 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Hubungi Hotline NOC Palembang</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width 4-Column KPI Trust Strip below the Hero */}
        <div className="mt-14 pt-8 border-t border-[#d4af37]/20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#09152b]/60 border border-slate-800/80 hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gold-gradient tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
