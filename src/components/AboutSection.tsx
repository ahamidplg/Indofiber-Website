import React from 'react';
import { IndofiberLogo } from './IndofiberLogo';
import { ShieldCheck, Cpu, Globe, Users, Award, Radio } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/servicesData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Radio,
      title: 'Infrastruktur Serat Optik Murni',
      desc: 'Jaringan kabel optik modern berkapasitas ultra-lebar dengan redundansi proteksi ganda (ring protection) meminimalkan risiko putus kabel.'
    },
    {
      icon: ShieldCheck,
      title: 'Jaminan SLA 99.5% Bergaransi',
      desc: 'Komitmen Service Level Agreement resmi untuk kontinuitas bisnis tanpa henti, didukung mitigasi otomatis dan redundansi multi-gateway.'
    },
    {
      icon: Users,
      title: 'Tim NOC & Ahli Berpusat di Palembang',
      desc: 'Dukungan Network Operations Center 24/7/365 dengan tim teknisi bersertifikasi yang berbasis lokal di Sumatera Selatan untuk kecepatan penanganan onsite.'
    },
    {
      icon: Cpu,
      title: 'Integrasi Smartech Nusantara',
      desc: 'Bukan sekadar penyedia internet—kami merancang ekosistem teknologi masa depan: IoT, Cloud Data Center, Keamanan Siber, hingga Pusat Komando Kota Pintar.'
    }
  ];

  return (
    <section id="tentang" className="relative py-20 md:py-28 bg-[#060c18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Emblem Showcase & Quality Seal */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-b from-[#09162e] via-[#071124] to-[#040915] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center text-center">
              
              <IndofiberLogo variant="full" size="xl" className="mb-6" />

              {/* Quality Seal Badge from Logo Image */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800 w-full justify-center">
                <IndofiberLogo variant="badge" size="md" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                    STANDAR KUALITAS
                  </div>
                  <div className="text-xs text-slate-300">
                    Inovasi & Mutu Telekomunikasi Terjamin
                  </div>
                </div>
              </div>

              {/* Local Headquarters Footnote */}
              <div className="mt-4 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 w-full text-center">
                Berlokasi di: {COMPANY_PROFILE.city}, Sumatera Selatan
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] tracking-wider uppercase">
              <Award className="w-4 h-4 text-[#00f2fe]" />
              <span>PROFIL PERUSAHAAN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Membangun Jembatan Digital:{' '}
              <span className="text-gold-gradient">
                Connecting Nusantara and Smartech
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">PT Indofiber Lintas Nusantara</strong> adalah perusahaan penyedia infrastruktur telekomunikasi dan solusi teknologi pintar terpadu. Berakar di Kota Palembang, kami mendedikasikan keahlian teknik kami untuk menghadirkan konektivitas berkecepatan tinggi, aman, dan tanpa jeda bagi sektor korporat, perhotelan, kesehatan, institusi pendidikan, dan pemerintahan di seluruh pelosok Indonesia.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dengan filosofi lambang <em className="text-[#00f2fe]">Infinity Fiber Optik</em> yang memeluk kepulauan Nusantara dalam warna emas, kami berkomitmen merajut konektivitas tanpa batas—menggabungkan keandalan kabel serat optik darat dan laut, sistem satelit canggih, hingga arsitektur komputasi awan dan keamanan siber berstandar global.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pil, idx) => {
                const IconComponent = pil.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#09152b] border border-slate-800 hover:border-[#d4af37]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30">
                        <IconComponent className="w-4 h-4 text-[#00f2fe]" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {pil.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
