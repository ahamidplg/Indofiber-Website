import React, { useState } from 'react';
import { MapPin, Activity, Radio, Shield, Globe2, Check, ArrowRight } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/servicesData';

interface NodePoint {
  id: string;
  name: string;
  region: string;
  type: 'hq' | 'hub' | 'pop' | 'vsat';
  coordinates: { x: number; y: number };
  latencyFromPalembang: string;
  status: 'Operasional Prima' | 'Siap Layanan';
  services: string[];
}

export const NetworkBackbone: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('palembang');
  const [searchQuery, setSearchQuery] = useState('');
  const [coverageResult, setCoverageResult] = useState<string | null>(null);

  const nodes: NodePoint[] = [
    {
      id: 'palembang',
      name: 'Palembang NOC (HQ)',
      region: 'Sumatera Selatan',
      type: 'hq',
      coordinates: { x: 25, y: 55 },
      latencyFromPalembang: '0.8 ms (Local Core)',
      status: 'Operasional Prima',
      services: ['Internet Dedicated 1:1', 'Metro-E Fiber', 'NOC 24/7', 'Cloud Colocation', 'Command Center']
    },
    {
      id: 'jakarta',
      name: 'Jakarta Exchange Hub',
      region: 'DKI Jakarta (IIX & OpenIXP)',
      type: 'hub',
      coordinates: { x: 33, y: 70 },
      latencyFromPalembang: '11.4 ms',
      status: 'Operasional Prima',
      services: ['Direct IIX Peering', 'Global Tier-1 Transit', 'Cloud Interconnect']
    },
    {
      id: 'batam',
      name: 'Batam Subsea Gateway',
      region: 'Kepulauan Riau',
      type: 'hub',
      coordinates: { x: 26, y: 40 },
      latencyFromPalembang: '9.2 ms',
      status: 'Operasional Prima',
      services: ['Submarine Fiber Cable', 'Cross-Border Redundancy']
    },
    {
      id: 'singapore',
      name: 'Singapore Equinix SG1',
      region: 'International Gateway',
      type: 'hub',
      coordinates: { x: 25, y: 35 },
      latencyFromPalembang: '15.8 ms',
      status: 'Operasional Prima',
      services: ['Global Cloud Direct Connect', 'Low Latency International Routing']
    },
    {
      id: 'medan',
      name: 'Medan Sumatera PoP',
      region: 'Sumatera Utara',
      type: 'pop',
      coordinates: { x: 17, y: 25 },
      latencyFromPalembang: '16.5 ms',
      status: 'Operasional Prima',
      services: ['Trans-Sumatera Backbone', 'Broadband Enterprise']
    },
    {
      id: 'surabaya',
      name: 'Surabaya East Hub',
      region: 'Jawa Timur',
      type: 'pop',
      coordinates: { x: 45, y: 75 },
      latencyFromPalembang: '18.2 ms',
      status: 'Operasional Prima',
      services: ['Metro Ethernet', 'Data Center Link']
    },
    {
      id: 'balikpapan',
      name: 'Balikpapan & IKN Hub',
      region: 'Kalimantan Timur',
      type: 'pop',
      coordinates: { x: 55, y: 48 },
      latencyFromPalembang: '22.0 ms',
      status: 'Operasional Prima',
      services: ['Smart City Infrastructure', 'Dedicated Fiber', 'SD-WAN']
    },
    {
      id: 'makassar',
      name: 'Makassar Eastern PoP',
      region: 'Sulawesi Selatan',
      type: 'pop',
      coordinates: { x: 65, y: 62 },
      latencyFromPalembang: '26.4 ms',
      status: 'Operasional Prima',
      services: ['Eastern Indonesia Gateway', 'Broadband & VSAT']
    },
    {
      id: 'papua',
      name: 'Papua & Maluku VSAT Hub',
      region: 'Indonesia Timur (3T)',
      type: 'vsat',
      coordinates: { x: 86, y: 58 },
      latencyFromPalembang: 'Satellite Orbit Profile',
      status: 'Siap Layanan',
      services: ['VSAT Ku/C-Band Satellite', 'Maritime & Mining Link']
    }
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[0];

  const handleCheckCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const q = searchQuery.toLowerCase();
    if (
      q.includes('palembang') ||
      q.includes('lorok') ||
      q.includes('pakjo') ||
      q.includes('anggar') ||
      q.includes('ilir') ||
      q.includes('sumatera') ||
      q.includes('lahat') ||
      q.includes('prabumulih') ||
      q.includes('banyuasin') ||
      q.includes('ogan') ||
      q.includes('jakarta')
    ) {
      setCoverageResult(`✅ Jaringan Fiber Optik On-Net siap di area "${searchQuery}". Tersedia layanan Internet Dedicated 1:1, Business Broadband, dan Metro-E.`);
    } else {
      setCoverageResult(`⚡ Area "${searchQuery}" terjangkau melalui jaringan Hybrid Fiber & Internet Satelit VSAT Nusantara. Tim survei kami siap melakukan validasi teknis.`);
    }
  };

  return (
    <section id="cakupan" className="relative py-20 md:py-28 bg-[#040813] overflow-hidden">
      {/* Subtle Network Ambient */}
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] tracking-widest uppercase mb-2">
            <Globe2 className="w-4 h-4 text-[#00f2fe]" />
            <span>CONNECTING NUSANTARA AND SMARTECH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Tulang Punggung Jaringan{' '}
            <span className="text-gold-gradient">Nusantara</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Berpusat di Network Operations Center (NOC) Palembang, Sumatera Selatan, terhubung langsung dengan rute kabel serat optik bawah laut dan darat ke gateway utama Jakarta, Batam, Singapura, serta pelosok Nusantara via Satelit.
          </p>
        </div>

        {/* Interactive Network Map Visualization Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#09162e] via-[#071124] to-[#040915] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 md:p-8">
          
          {/* Top Bar inside Map Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]" />
              <span className="text-sm font-bold text-white font-heading">
                Status Backbone: <span className="text-[#10b981]">100% Online & Redundant</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] ring-2 ring-[#d4af37]/30" />
                <span>NOC Pusat Palembang</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00f2fe]" />
                <span>Fiber PoP / Gateway</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                <span>VSAT Satelit</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Area */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] my-6 rounded-2xl bg-[#03060e] border border-slate-800/80 overflow-hidden flex items-center justify-center">
            
            {/* SVG Interactive Map of Indonesian Archipelago */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full select-none"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0,242,254,0.1))' }}
            >
              <defs>
                <linearGradient id="fiberLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Lines */}
              <g stroke="rgba(0, 242, 254, 0.05)" strokeWidth="1">
                <line x1="0" y1="125" x2="1000" y2="125" />
                <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="4 4" />
                <line x1="0" y1="375" x2="1000" y2="375" />
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="4 4" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>

              {/* Stylized Archipelago Landmasses */}
              <g fill="#0e2347" stroke="#1c3d73" strokeWidth="1.5" opacity="0.85">
                {/* Sumatera */}
                <path d="M120,120 C140,90 170,120 190,160 C230,220 260,280 290,320 C280,340 260,330 240,290 C200,240 150,180 120,120 Z" />
                {/* Jawa & Bali */}
                <path d="M300,340 C340,340 400,345 460,355 C500,360 540,365 570,370 C540,380 460,380 390,370 C340,365 300,355 300,340 Z" />
                {/* Kalimantan */}
                <path d="M380,180 C410,150 460,160 510,190 C530,230 500,280 460,290 C420,300 380,260 380,180 Z" />
                {/* Sulawesi */}
                <path d="M570,190 C590,170 630,200 620,240 C650,230 670,260 650,290 C620,300 600,330 620,360 C590,360 570,310 580,270 C560,240 560,210 570,190 Z" />
                {/* Maluku */}
                <path d="M690,240 C710,230 730,250 720,280 C700,290 680,270 690,240 Z" />
                {/* Papua */}
                <path d="M750,260 C800,220 860,240 930,270 C920,320 870,360 830,340 C790,320 760,290 750,260 Z" />
              </g>

              {/* Fiber Routes connecting Palembang HQ */}
              {/* Palembang coordinates: x=250, y=280 */}
              <g stroke="url(#fiberLineGrad)" strokeWidth="2" strokeDasharray="6 4" opacity="0.8">
                {/* Palembang -> Jakarta (350, 350) */}
                <line x1="250" y1="280" x2="350" y2="350" strokeWidth="3" />
                {/* Palembang -> Batam (270, 200) */}
                <line x1="250" y1="280" x2="270" y2="200" strokeWidth="2.5" />
                {/* Batam -> Singapore (260, 180) */}
                <line x1="270" y1="200" x2="260" y2="180" strokeWidth="2.5" />
                {/* Palembang -> Medan (170, 140) */}
                <line x1="250" y1="280" x2="170" y2="140" strokeWidth="2" />
                {/* Jakarta -> Surabaya (470, 360) */}
                <line x1="350" y1="350" x2="470" y2="360" strokeWidth="2.5" />
                {/* Surabaya -> Balikpapan (480, 240) */}
                <line x1="470" y1="360" x2="480" y2="240" strokeWidth="2" />
                {/* Surabaya -> Makassar (610, 330) */}
                <line x1="470" y1="360" x2="610" y2="330" strokeWidth="2" />
                {/* Makassar -> Papua (840, 290) - Satellite link */}
                <line x1="610" y1="330" x2="840" y2="290" stroke="#38BDF8" strokeDasharray="3 3" strokeWidth="1.5" />
              </g>

              {/* Fiber Optical Signal Pulses (Animated Circles) */}
              <circle cx="300" cy="315" r="3" fill="#FFF">
                <animate attributeName="cx" values="250;350;250" dur="4s" repeatCount="indefinite" />
                <animate attributeName="cy" values="280;350;280" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="260" cy="240" r="3" fill="#00F2FE">
                <animate attributeName="cx" values="250;270;250" dur="3s" repeatCount="indefinite" />
                <animate attributeName="cy" values="280;200;280" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Node Hotspots */}
              {/* Palembang HQ */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedNode('palembang')}
              >
                <circle cx="250" cy="280" r="22" fill="#D4AF37" fillOpacity="0.2" className="animate-ping" />
                <circle cx="250" cy="280" r="12" fill="#D4AF37" stroke="#FFF" strokeWidth="2.5" filter="url(#nodeGlow)" />
                <text x="250" y="260" textAnchor="middle" fill="#F6E5B2" fontSize="13" fontWeight="bold" fontFamily="Outfit">
                  ★ PALEMBANG (HQ)
                </text>
              </g>

              {/* Jakarta */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('jakarta')}>
                <circle cx="350" cy="350" r="8" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="350" y="375" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontFamily="Outfit">
                  Jakarta (IIX)
                </text>
              </g>

              {/* Batam */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('batam')}>
                <circle cx="270" cy="200" r="7" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="270" y="190" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Batam
                </text>
              </g>

              {/* Singapore */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('singapore')}>
                <circle cx="260" cy="180" r="7" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="260" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Singapore
                </text>
              </g>

              {/* Medan */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('medan')}>
                <circle cx="170" cy="140" r="7" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="170" y="130" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Medan
                </text>
              </g>

              {/* Surabaya */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('surabaya')}>
                <circle cx="470" cy="360" r="7" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="470" y="385" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Surabaya
                </text>
              </g>

              {/* Balikpapan / IKN */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('balikpapan')}>
                <circle cx="480" cy="240" r="7" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="480" y="230" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Balikpapan & IKN
                </text>
              </g>

              {/* Makassar */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('makassar')}>
                <circle cx="610" cy="330" r="7" fill="#00F2FE" stroke="#FFF" strokeWidth="1.5" />
                <text x="610" y="355" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Makassar
                </text>
              </g>

              {/* Papua VSAT */}
              <g className="cursor-pointer" onClick={() => setSelectedNode('papua')}>
                <circle cx="840" cy="290" r="8" fill="#38BDF8" stroke="#FFF" strokeWidth="1.5" />
                <text x="840" y="315" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="Outfit">
                  Papua & Maluku (VSAT)
                </text>
              </g>
            </svg>

            {/* Helper label */}
            <div className="absolute bottom-3 left-4 text-[11px] text-slate-400 bg-[#09152b]/80 px-3 py-1.5 rounded-lg border border-slate-800">
              💡 Klik titik kota pada peta untuk melihat data rute & latensi
            </div>
          </div>

          {/* Bottom Card Split: Node Detail + Coverage Checker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            
            {/* Selected Node Metrics Box */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-[#09162e] border border-slate-800">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-base font-bold text-white font-heading">
                    {activeNodeData.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#10b981] font-semibold">
                  {activeNodeData.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400 block text-[10px]">Wilayah / Regional:</span>
                  <span className="font-semibold text-slate-200">{activeNodeData.region}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400 block text-[10px]">Latensi ke Palembang NOC:</span>
                  <span className="font-mono font-bold text-[#00f2fe]">{activeNodeData.latencyFromPalembang}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block mb-2">
                  Layanan Unggulan di Node Ini:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeNodeData.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#0e2142] text-[11px] text-slate-300 border border-slate-700/50"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage Availability Quick Checker Form */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#09162e] border border-slate-800 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00f2fe]" />
                  <span>Cek Ketersediaan Jaringan di Lokasi Anda</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Ketik nama jalan, kelurahan, atau kota bisnis Anda (khususnya wilayah Palembang & sekitarnya):
                </p>

                <form onSubmit={handleCheckCoverage} className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Contoh: Lorok Pakjo, Ilir Barat I..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#d4af37] hover:bg-[#e0b94c] text-slate-950 font-bold text-xs transition-colors cursor-pointer shrink-0"
                  >
                    Periksa
                  </button>
                </form>

                {coverageResult && (
                  <div className="mt-3 p-3 rounded-xl bg-[#0e2547] border border-[#00f2fe]/40 text-xs text-slate-200">
                    {coverageResult}
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                Hub Pusat:{' '}
                <strong className="text-slate-200">
                  {COMPANY_PROFILE.fullAddress}
                </strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
