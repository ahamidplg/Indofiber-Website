import React from 'react';
import { ServiceItem, COMPANY_PROFILE } from '../data/servicesData';
import { ServiceBadgeIcon } from './ServiceBadgeIcon';
import { X, CheckCircle2, ShieldCheck, MessageCircle, Building2, Server, HelpCircle } from 'lucide-react';

interface ModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Halo PT Indofiber Lintas Nusantara,\n\nSaya ingin menanyakan informasi lebih lanjut dan meminta proposal penawaran untuk layanan:\n*${service.name}*\n\nMohon info ketersediaan jaringan di area kami dan estimasi biaya instalasi serta langganan.\nTerima kasih.`
    );
    window.open(`https://wa.me/${COMPANY_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#040812]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-gradient-to-b from-[#0a1833] via-[#081224] to-[#050c18] border border-[#d4af37]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 z-10 my-8 overflow-hidden text-slate-100">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/60 hover:bg-slate-750 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700/50"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800/80">
          <ServiceBadgeIcon iconType={service.iconType} size="lg" />
          
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] font-semibold">
              <span>LAYANAN NO. {service.number}</span>
              <span>·</span>
              <span className="text-[#00f2fe] uppercase">{service.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              {service.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-2">
              Deskripsi Solusi
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Features Grid */}
          <div>
            <h3 className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-3">
              Fitur & Keunggulan Utama
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0e1d38]/60 border border-slate-800 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-3">
              Spesifikasi Teknis & SLA
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#09152b] border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Jaminan SLA</span>
                <span className="text-xs font-bold text-[#10b981] font-mono mt-1 block">
                  {service.specifications.sla}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#09152b] border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Rasio Bandwidth</span>
                <span className="text-xs font-bold text-white font-mono mt-1 block">
                  {service.specifications.ratio}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#09152b] border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Alokasi IP</span>
                <span className="text-xs font-bold text-white font-mono mt-1 block">
                  {service.specifications.ipType}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#09152b] border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Dukungan NOC</span>
                <span className="text-xs font-bold text-[#00f2fe] font-mono mt-1 block">
                  24/7/365 Lokal
                </span>
              </div>
            </div>
          </div>

          {/* Suitable Sectors */}
          <div>
            <h3 className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-3">
              Ideal untuk Sektor & Industri
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.suitableFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 flex items-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Direct Actions */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Lokasi Hub NOC:{' '}
            <span className="text-slate-200 font-medium">Lorok Pakjo, Palembang</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#0e1d38] hover:bg-[#14284d] border border-slate-700 transition-colors cursor-pointer text-center"
            >
              Ajukan Form Penawaran
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#29ea71] hover:to-[#16a090] shadow-[0_0_15px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white">Chat WhatsApp Sales</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
