import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'Di mana saja cakupan area fiber optik PT Indofiber Lintas Nusantara di Kota Palembang?',
      a: 'Jaringan kabel optik On-Net kami mencakup kawasan utama Kota Palembang termasuk Lorok Pakjo, Ilir Barat I & II, Seberang Ulu, Sudirman, Demang Lebar Daun, R. Sukamto, Basuki Rahmat, Jakabaring Sport City, Bandara SMB II, hingga kawasan industri dan pelabuhan Tanjung Api-Api. Kami juga melayani interkoneksi ke kabupaten/kota di Sumatera Selatan seperti Banyuasin, Ogan Ilir, Prabumulih, Muara Enim, dan Lahat.'
    },
    {
      q: 'Apa perbedaan mendasar antara Internet Dedicated 1:1 CIR 100% dengan Broadband biasa?',
      a: 'Internet Dedicated memberikan jalur kabel optik eksklusif langsung ke router klien dengan kecepatan simetris (kecepatan upload setara kecepatan download) tanpa dibagi ke pelanggan lain. Jaminan CIR 100% dan SLA 99.5% memastikan throughput konstan 24/7 tanpa penurunan di jam sibuk, dilengkapi IP Public Static untuk hosting aplikasi dan VPN perusahaan.'
    },
    {
      q: 'Apakah proses survei lokasi dan uji kelayakan jaringan dikenakan biaya?',
      a: 'Tidak. Survei lokasi teknis oleh tim lapangan PT Indofiber Lintas Nusantara di seluruh wilayah Palembang dan sekitarnya adalah GRATIS tanpa ikatan kontrak. Tim kami akan mengukur jarak Optical Distribution Point (ODP), kebutuhan kabel drop, dan memberikan rekomendasi topologi terbaik.'
    },
    {
      q: 'Bagaimana prosedur penanganan gangguan dan berapa kecepatan respon tim teknis?',
      a: 'Network Operations Center (NOC) kami beroperasi 24 jam sehari, 7 hari seminggu, 365 hari setahun dari Palembang. Waktu respon tiket gangguan (Mean Time to Respond) di bawah 15 menit, dan teknisi lapangan siap siaga untuk penanganan fisik di lokasi dengan SLA recovery terstandar.'
    },
    {
      q: 'Apakah PT Indofiber Lintas Nusantara dapat menyediakan solusi untuk area pelosok tanpa kabel optik?',
      a: 'Ya. Melalui layanan Internet Satelite (VSAT High Throughput Satellite), kami dapat menghubungkan area perkebunan sawit, tambang batubara/mineral, fasilitas migas lepas pantai, dan pos perbatasan di seluruh pelosok pulau Indonesia dengan keandalan tinggi.'
    },
    {
      q: 'Apakah bisa membantu perancangan Smart City dan Command Center untuk instansi pemerintah atau swasta?',
      a: 'Sangat bisa. Kami berpengalaman merancang ekosistem Smartech terpadu, mulai dari pengadaan video wall multi-display beresolusi tinggi, sensor IoT lingkungan/banjir/PJU cerdas, kamera analitik AI lalu lintas, hingga integrasi data ruang kendali (Command Center).'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-20 bg-[#060c18] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#d4af37] tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4 text-[#00f2fe]" />
            <span>PERTANYAAN UMUM (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Informasi Layanan & Teknis
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Jawaban lengkap seputar instalasi, jaminan SLA, dan implementasi solusi jaringan kami.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#09152b] border border-slate-800 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-sm font-bold text-white font-heading">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180 text-[#00f2fe]' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
