import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, RefreshCw, Cpu, Wifi, Server, Check } from 'lucide-react';

interface ProbeTarget {
  name: string;
  location: string;
  distance: string;
  baseLatency: number;
  currentLatency: number;
  jitter: number;
  loss: string;
  status: 'Optimal' | 'Stabil';
}

export const NetworkSlaSimulator: React.FC = () => {
  const [isProbing, setIsProbing] = useState(false);
  const [probes, setProbes] = useState<ProbeTarget[]>([
    {
      name: 'Palembang Local Peering Ring',
      location: 'Lorok Pakjo, Palembang',
      distance: 'Intra-City Core',
      baseLatency: 0.8,
      currentLatency: 0.8,
      jitter: 0.2,
      loss: '0.00%',
      status: 'Optimal'
    },
    {
      name: 'Jakarta IIX & OpenIXP Direct',
      location: 'Cyber 1 Data Center, Jakarta',
      distance: '~430 km Fiber',
      baseLatency: 11.2,
      currentLatency: 11.2,
      jitter: 0.4,
      loss: '0.00%',
      status: 'Optimal'
    },
    {
      name: 'Singapore Equinix SG1 Gateway',
      location: 'Ayer Rajah, Singapore',
      distance: 'Submarine Cable',
      baseLatency: 15.6,
      currentLatency: 15.6,
      jitter: 0.5,
      loss: '0.00%',
      status: 'Optimal'
    },
    {
      name: 'Batam Subsea Landing Station',
      location: 'Batam, Kepri',
      distance: '~320 km Subsea',
      baseLatency: 9.1,
      currentLatency: 9.1,
      jitter: 0.3,
      loss: '0.00%',
      status: 'Optimal'
    }
  ]);

  const runProbeTest = () => {
    setIsProbing(true);
    setTimeout(() => {
      setProbes((prev) =>
        prev.map((item) => {
          const delta = (Math.random() * 0.6 - 0.3);
          const newLat = Number((item.baseLatency + delta).toFixed(1));
          return {
            ...item,
            currentLatency: Math.max(0.4, newLat),
            jitter: Number((0.2 + Math.random() * 0.3).toFixed(1)),
          };
        })
      );
      setIsProbing(false);
    }, 1200);
  };

  return (
    <section className="relative py-16 bg-[#040914] border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#10b981] font-mono mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>LIVE NOC METRICS & SLA VERIFICATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Simulasi Latensi & Jaminan Uptime 99.5%
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Pemantauan langsung performa jaringan optik dari Core Switch Palembang ke gateway domestik dan global.
            </p>
          </div>

          <button
            onClick={runProbeTest}
            disabled={isProbing}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#091833] hover:bg-[#0f244a] text-slate-200 border border-[#00f2fe]/40 text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#00f2fe] ${isProbing ? 'animate-spin' : ''}`} />
            <span>{isProbing ? 'Mengukur Rute...' : 'Uji Ping Prober Real-Time'}</span>
          </button>
        </div>

        {/* Latency Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {probes.map((probe, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#071122] border border-slate-800 hover:border-[#00f2fe]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                <span>{probe.distance}</span>
                <span className="text-[#10b981] font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  {probe.status}
                </span>
              </div>

              <div className="text-sm font-bold text-white font-heading truncate">
                {probe.name}
              </div>
              <div className="text-[11px] text-slate-400 mb-3">
                {probe.location}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Round-Trip Time:</span>
                  <span className="text-2xl font-heading font-black text-[#00f2fe] font-mono tabular-nums">
                    {probe.currentLatency} <span className="text-xs font-sans text-slate-400">ms</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Jitter / Loss:</span>
                  <span className="text-xs font-mono text-slate-300">
                    {probe.jitter}ms / {probe.loss}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
