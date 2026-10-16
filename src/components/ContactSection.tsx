import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import { COMPANY_PROFILE, SERVICES_DATA, ServiceItem } from '../data/servicesData';

interface ContactProps {
  initialService?: ServiceItem | null;
}

export const ContactSection: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService ? initialService.name : SERVICES_DATA[0].name,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo PT Indofiber Lintas Nusantara,\n\n` +
      `Saya ingin berkonsultasi mengenai kebutuhan jaringan/smartech:\n` +
      `• *Nama:* ${formData.name || 'Calon Klien'}\n` +
      `• *Perusahaan/Instansi:* ${formData.company || '-'}\n` +
      `• *Email:* ${formData.email || '-'}\n` +
      `• *Telepon/WA:* ${formData.phone || '-'}\n` +
      `• *Layanan Diminati:* ${formData.service}\n` +
      `• *Catatan Kebutuhan:* ${formData.message || 'Mohon info ketersediaan jaringan & survei'}\n\n` +
      `Terima kasih.`
    );
    window.open(`https://wa.me/${COMPANY_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="relative py-20 md:py-28 bg-[#040813] overflow-hidden">
      {/* Background Cyber Mesh */}
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] tracking-wider uppercase mb-2">
            <MapPin className="w-4 h-4 text-[#00f2fe]" />
            <span>KANTOR PUSAT & PUSAT DUKUNGAN TEKNIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Hubungi Kami & Kunjungi Kantor Kami
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Tim konsultan solusi dan Network Operations Center (NOC) PT Indofiber Lintas Nusantara berpusat di Palembang dan siap melayani konsultasi serta survei lokasi gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Office Location & Coordinates */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#09162e] via-[#071122] to-[#050c18] border border-[#d4af37]/30 p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                PT Indofiber Lintas Nusantara
              </h3>
              <p className="text-xs text-gold-gradient font-medium uppercase tracking-wider">
                Headquarters & Network Operations Center (NOC)
              </p>
            </div>

            {/* Address Box */}
            <div className="p-4 rounded-2xl bg-[#0e1f3d]/70 border border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <span className="font-bold text-white block">Alamat Kantor:</span>
                  {COMPANY_PROFILE.fullAddress}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Kode Pos: 30137</span>
                <a
                  href={COMPANY_PROFILE.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00f2fe] hover:text-white transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Map Visual Mockup Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#07101f] h-48 flex flex-col items-center justify-center text-center p-4 group">
              <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <span className="text-xs font-bold text-white font-heading">
                  Lorok Pakjo, Ilir Barat I
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  Kota Palembang, Sumatera Selatan
                </span>
                <a
                  href={COMPANY_PROFILE.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 px-3.5 py-1.5 rounded-lg bg-[#00f2fe]/20 hover:bg-[#00f2fe]/30 border border-[#00f2fe]/50 text-[11px] font-semibold text-[#00f2fe] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Petunjuk Arah Navigasi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Phone className="w-4 h-4 text-[#00f2fe] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">Hotline NOC / Kantor Palembang:</span>
                  <a href={`tel:${COMPANY_PROFILE.phone}`} className="font-mono font-semibold text-slate-200 hover:text-white">
                    {COMPANY_PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">WhatsApp Resmi Sales & Pelanggan:</span>
                  <a
                    href={`https://wa.me/${COMPANY_PROFILE.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono font-semibold text-slate-200 hover:text-white"
                  >
                    {COMPANY_PROFILE.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">Email Korporasi & Pengadaan:</span>
                  <span className="font-mono font-semibold text-slate-200">
                    {COMPANY_PROFILE.email} / {COMPANY_PROFILE.nocEmail}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Clock className="w-4 h-4 text-[#10b981] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">Jam Operasional Layanan:</span>
                  <span className="font-semibold text-slate-200">
                    {COMPANY_PROFILE.operatingHours}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Consultation Form */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#09162e] to-[#060c18] border border-slate-800 p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Formulir Permohonan Survei & Penawaran
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Isi data organisasi Anda untuk penjadwalan survei jalur kabel optik, uji coba bandwidth (PoC), atau penawaran harga resmi (RFP/Rfq).
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#0c2447] border border-[#10b981]/50 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#10b981]/20 border-2 border-[#10b981] mx-auto flex items-center justify-center text-[#10b981]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white">
                  Permohonan Berhasil Dikirim!
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto">
                  Terima kasih <strong className="text-white">{formData.name}</strong> dari <strong className="text-white">{formData.company || 'perusahaan Anda'}</strong>. Tim teknis PT Indofiber Lintas Nusantara di Palembang akan segera menghubungi Anda dalam kurun waktu 1x24 jam kerja.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lanjutkan Diskusi di WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 cursor-pointer"
                  >
                    Kirim Form Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama PIC / Pejabat Pengadaan"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Nama Instansi / Perusahaan *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="PT / CV / Dinas / Hotel / RS"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Email Bisnis / Instansi *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="pic@perusahaan.co.id"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      No. WhatsApp / Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Layanan yang Diminati *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.name} className="bg-slate-900 text-white">
                        {srv.number}. {srv.name} ({srv.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Kebutuhan Spesifik / Lokasi Pemasangan
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Sebutkan lokasi pemasangan (misal: Jl. R. Sukamto Palembang), estimasi kapasitas bandwidth, atau kebutuhan khusus lainnya..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] hover:from-white hover:to-[#e5c052] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>{isSubmitting ? 'Mengirim Data...' : 'Kirim Permohonan Survei'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-semibold text-slate-200 bg-[#0f244a] hover:bg-[#142e5e] border border-slate-700 hover:border-[#25D366] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Kirim via WhatsApp Langsung</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Data Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan verifikasi teknis & penawaran resmi.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
