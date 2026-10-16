import React from 'react';
import { IndofiberLogo } from './IndofiberLogo';
import { COMPANY_PROFILE, SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { MapPin, Phone, Mail, Clock, ArrowUp, MessageCircle } from 'lucide-react';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03060d] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#00f2fe]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Wordmark, Tagline & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <IndofiberLogo variant="horizontal" size="md" showTagline={true} />
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Penyedia layanan infrastruktur fiber optik, konektivitas internet pita lebar dedicated berstandar carrier-grade, dan solusi Smartech terintegrasi di Indonesia.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {COMPANY_PROFILE.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00f2fe] shrink-0" />
                <a href={`tel:${COMPANY_PROFILE.phone}`} className="text-slate-300 hover:text-white font-mono">
                  {COMPANY_PROFILE.phone} (NOC & Sales)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="font-mono text-slate-300">
                  {COMPANY_PROFILE.email}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="text-slate-300">
                  {COMPANY_PROFILE.operatingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Official 10 Products (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
              10 Layanan & Produk Resmi
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => onSelectService(srv)}
                  className="text-left text-slate-400 hover:text-[#00f2fe] transition-colors truncate cursor-pointer py-0.5"
                >
                  {srv.number}. {srv.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Links & Trust (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Brosur & Katalog Layanan
                </a>
              </li>
              <li>
                <a href="#cakupan" className="hover:text-white transition-colors">
                  Peta Tulang Punggung Jaringan
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Kalkulator Bandwidth Klien
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang PT Indofiber Lintas Nusantara
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Survei Lokasi & Kontak Kantor Palembang
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] hover:from-white hover:to-[#e5c052] shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                Minta Proposal Penawaran
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PT Indofiber Lintas Nusantara. Seluruh Hak Cipta Dilindungi Undang-Undang.
            <div className="text-[11px] text-slate-600 mt-0.5">
              Connecting Nusantara and Smartech · Palembang, Sumatera Selatan
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#d4af37]/40 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Floating WhatsApp Action Pill for Fast Mobile / Desktop Access */}
      <a
        href={`https://wa.me/${COMPANY_PROFILE.whatsappNumber}?text=${encodeURIComponent('Halo PT Indofiber Lintas Nusantara, saya ingin konsultasi kebutuhan internet / jaringan.')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all font-semibold text-xs cursor-pointer group"
        aria-label="Chat WhatsApp Sales"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="hidden sm:inline">WhatsApp Fast Response</span>
      </a>
    </footer>
  );
};
