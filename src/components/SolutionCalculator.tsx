import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle, HelpCircle, ShieldAlert, Cpu, Zap, Wifi } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/servicesData';

export const SolutionCalculator: React.FC = () => {
  const [businessType, setBusinessType] = useState('corporate');
  const [usersCount, setUsersCount] = useState(50);
  const [needAntiDdos, setNeedAntiDdos] = useState(true);
  const [needSdwan, setNeedSdwan] = useState(false);
  const [needCloudBackup, setNeedCloudBackup] = useState(true);
  const [needManagedWifi, setNeedManagedWifi] = useState(true);
  const [needCommandCenter, setNeedCommandCenter] = useState(false);

  // Business type presets
  const businessTypes = [
    { id: 'corporate', label: 'Kantor Korporat / Swasta', baseMb: 2 },
    { id: 'hotel', label: 'Hotel & Hospitality', baseMb: 2.5 },
    { id: 'hospital', label: 'Rumah Sakit & Medis', baseMb: 2 },
    { id: 'gov', label: 'Pemerintah / Smart City', baseMb: 3 },
    { id: 'sme', label: 'UKM, Ritel & Coworking', baseMb: 1.5 },
    { id: 'industry', label: 'Pabrik / Pertambangan Remote', baseMb: 2 },
  ];

  const currentType = businessTypes.find((b) => b.id === businessType) || businessTypes[0];

  // Calculation
  const recommendedBandwidth = Math.max(30, Math.round(usersCount * currentType.baseMb));
  const isDedicatedRecommended = usersCount >= 25 || businessType === 'corporate' || businessType === 'hospital' || businessType === 'gov';

  const handleSendToWhatsApp = () => {
    const selectedAddons: string[] = [];
    if (needAntiDdos) selectedAddons.push('Network Security Anti-DDoS');
    if (needSdwan) selectedAddons.push('VPN & SD-WAN Multi-Cabang');
    if (needCloudBackup) selectedAddons.push('Cloud & Data Center Backup');
    if (needManagedWifi) selectedAddons.push('Managed Wi-Fi Enterprise');
    if (needCommandCenter) selectedAddons.push('Command Center Video Wall');

    const msg = encodeURIComponent(
      `Halo Tim Sales PT Indofiber Lintas Nusantara,\n\nSaya telah menggunakan Kalkulator Solusi di website dan ingin mendiskusikan penawaran resmi:\n` +
      `• *Jenis Usaha/Instansi:* ${currentType.label}\n` +
      `• *Perkiraan Pengguna:* ${usersCount} Pengguna\n` +
      `• *Rekomendasi Paket:* ${isDedicatedRecommended ? 'Internet Dedicated 1:1 CIR 100%' : 'Business Broadband Enterprise'}\n` +
      `• *Kapasitas Bandwidth:* ~${recommendedBandwidth} Mbps\n` +
      `• *Modul Tambahan:* ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Standar'}\n\n` +
      `Mohon jadwal survei lokasi dan pengiriman proposal penawaran.\nTerima kasih.`
    );

    window.open(`https://wa.me/${COMPANY_PROFILE.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="kalkulator" className="relative py-20 md:py-28 bg-[#060c18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4 text-[#00f2fe]" />
            <span>ESTIMASI KEBUTUHAN JARINGAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Kalkulator Solusi & Bandwidth Korporat
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Dapatkan rekomendasi spesifikasi paket konektivitas dan keamanan yang ideal untuk skala operasional instansi Anda di Palembang atau kota lainnya.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#09162e] to-[#060e1d] border border-slate-800 p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Business Type */}
            <div>
              <label className="text-xs font-bold text-[#d4af37] tracking-wider uppercase block mb-3">
                1. Pilih Kategori Bisnis / Sektor Operasional:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {businessTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setBusinessType(type.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                      businessType === type.id
                        ? 'bg-[#0f2752] border-[#d4af37] text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Concurrency / User count slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                  2. Estimasi Jumlah Perangkat & Pengguna:
                </label>
                <span className="text-base font-mono font-bold text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1 rounded-lg border border-[#00f2fe]/30">
                  {usersCount} Pengguna
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={usersCount}
                onChange={(e) => setUsersCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>10 Users</span>
                <span>100</span>
                <span>250</span>
                <span>500+ Enterprise</span>
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="text-xs font-bold text-[#d4af37] tracking-wider uppercase block mb-3">
                3. Integrasi Fitur Tambahan yang Dibutuhkan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needAntiDdos}
                    onChange={(e) => setNeedAntiDdos(e.target.checked)}
                    className="w-4 h-4 rounded text-[#d4af37] focus:ring-0 accent-[#d4af37]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Anti-DDoS & WAF Shield</span>
                    <span className="text-[11px] text-slate-400">Proteksi serangan siber & firewall</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needSdwan}
                    onChange={(e) => setNeedSdwan(e.target.checked)}
                    className="w-4 h-4 rounded text-[#d4af37] focus:ring-0 accent-[#d4af37]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">SD-WAN / VPN Multi-Cabang</span>
                    <span className="text-[11px] text-slate-400">Koneksi antar kantor aman</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needManagedWifi}
                    onChange={(e) => setNeedManagedWifi(e.target.checked)}
                    className="w-4 h-4 rounded text-[#d4af37] focus:ring-0 accent-[#d4af37]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Managed Enterprise Wi-Fi</span>
                    <span className="text-[11px] text-slate-400">AP Controller & Captive Portal</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needCloudBackup}
                    onChange={(e) => setNeedCloudBackup(e.target.checked)}
                    className="w-4 h-4 rounded text-[#d4af37] focus:ring-0 accent-[#d4af37]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Cloud Backup / Colocation</span>
                    <span className="text-[11px] text-slate-400">Tier-3 Disaster Recovery</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#0c1f42] via-[#091730] to-[#050c18] border-2 border-[#d4af37]/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                <span className="text-xs font-mono text-[#d4af37] font-bold uppercase tracking-wider">
                  HASIL REKOMENDASI PAKET
                </span>
                <span className="text-xs font-mono text-[#10b981] font-semibold">
                  SLA 99.5%
                </span>
              </div>

              {/* Main Bandwidth Output */}
              <div className="py-6 text-center">
                <div className="text-xs text-slate-300 uppercase tracking-widest font-semibold mb-1">
                  Kapasitas Ideal yang Disarankan:
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-black text-gold-gradient tabular-nums my-1">
                  {recommendedBandwidth} Mbps
                </div>
                <div className="text-sm font-semibold text-[#00f2fe] mt-2">
                  {isDedicatedRecommended
                    ? 'Paket Internet Dedicated 1:1 Simetris (CIR 100%)'
                    : 'Paket Business Broadband Ultra-Fast'}
                </div>
              </div>

              {/* Included Specifications Breakdown */}
              <div className="space-y-2.5 py-4 border-t border-slate-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Rasio Upload / Download:</span>
                  <span className="font-mono font-bold text-white">1:1 Simetris Penuh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Jaminan Ketersediaan (SLA):</span>
                  <span className="font-mono font-bold text-[#10b981]">99.5% Carrier-Grade</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Alokasi IP Public:</span>
                  <span className="font-mono font-bold text-white">IP Static IPv4 /29</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Dukungan NOC:</span>
                  <span className="font-mono font-bold text-[#00f2fe]">24/7 Palembang & Nasional</span>
                </div>
              </div>

              {/* Addons List */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                  Fitur Tambahan Terpilih:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {needAntiDdos && <span className="px-2 py-0.5 rounded bg-[#0e2142] text-[10px] text-slate-300">Anti-DDoS</span>}
                  {needSdwan && <span className="px-2 py-0.5 rounded bg-[#0e2142] text-[10px] text-slate-300">SD-WAN</span>}
                  {needManagedWifi && <span className="px-2 py-0.5 rounded bg-[#0e2142] text-[10px] text-slate-300">Managed Wi-Fi</span>}
                  {needCloudBackup && <span className="px-2 py-0.5 rounded bg-[#0e2142] text-[10px] text-slate-300">Cloud Backup</span>}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] hover:from-white hover:to-[#e5c052] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Kirim Estimasi ke WhatsApp Sales</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Survei lokasi dan konsultasi teknis gratis di seluruh wilayah Palembang & sekitarnya.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
