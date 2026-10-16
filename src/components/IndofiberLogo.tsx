import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const IndofiberLogo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Pure Mark Emblem (Infinity Fiber + Archipelago + Glow)
  const renderEmblem = (dim: number) => (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_0_15px_rgba(0,242,254,0.35)]"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="fiberGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="goldShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gradients */}
        <linearGradient id="goldArchipelago" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="30%" stopColor="#DFB75A" />
          <stop offset="70%" stopColor="#B3892F" />
          <stop offset="100%" stopColor="#6C4E15" />
        </linearGradient>

        <linearGradient id="fiberLoopGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="35%" stopColor="#0284C7" />
          <stop offset="70%" stopColor="#023E8A" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>

        <linearGradient id="fiberLoopGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="40%" stopColor="#00F2FE" />
          <stop offset="80%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#C99833" />
          <stop offset="100%" stopColor="#876019" />
        </linearGradient>
      </defs>

      {/* Outer ambient glow */}
      <circle cx="100" cy="100" r="85" fill="url(#fiberLoopGrad1)" opacity="0.08" />

      {/* Decorative Network Grid lines */}
      <path
        d="M20,100 Q100,20 180,100 Q100,180 20,100"
        stroke="#00F2FE"
        strokeWidth="0.75"
        strokeDasharray="3 3"
        opacity="0.3"
      />
      <path
        d="M30,70 Q100,130 170,70"
        stroke="#00F2FE"
        strokeWidth="0.5"
        opacity="0.25"
      />

      {/* Indonesian Archipelago Map (Stylized inside the infinity loops) */}
      <g filter="url(#goldShine)" opacity="0.95">
        {/* Sumatera (West) */}
        <path
          d="M48,66 C52,60 58,68 64,78 C68,85 74,96 78,104 C74,107 68,103 62,94 C56,86 50,76 48,66 Z"
          fill="url(#goldArchipelago)"
          stroke="#FFF2B2"
          strokeWidth="0.75"
        />
        {/* Jawa & Bali */}
        <path
          d="M78,118 C86,118 96,120 106,121 C112,121 118,122 122,123 C118,125 106,125 96,124 C86,123 78,121 78,118 Z"
          fill="url(#goldArchipelago)"
          stroke="#FFF2B2"
          strokeWidth="0.5"
        />
        {/* Kalimantan (Center North) */}
        <path
          d="M86,72 C92,68 100,70 106,75 C108,82 102,89 96,91 C90,92 84,85 86,72 Z"
          fill="url(#goldArchipelago)"
          stroke="#FFF2B2"
          strokeWidth="0.75"
        />
        {/* Sulawesi (K-Shape) */}
        <path
          d="M115,74 C118,72 122,76 122,82 C126,81 129,84 126,88 C122,89 120,93 122,98 C120,99 117,95 116,91 C114,84 113,78 115,74 Z"
          fill="url(#goldArchipelago)"
          stroke="#FFF2B2"
          strokeWidth="0.75"
        />
        {/* Maluku & Papua (East) */}
        <path
          d="M138,82 C146,80 156,82 165,88 C162,94 154,96 148,93 C144,91 140,88 138,82 Z"
          fill="url(#goldArchipelago)"
          stroke="#FFF2B2"
          strokeWidth="0.75"
        />
      </g>

      {/* Infinity Fiber Cable - Main Loop 1 (Outer Deep Cyan) */}
      <path
        d="M60,100 C30,70 30,130 60,100 C90,70 110,70 140,100 C170,130 170,70 140,100 C110,130 90,130 60,100 Z"
        stroke="url(#fiberLoopGrad1)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />

      {/* Infinity Fiber Cable - Main Loop 2 (Glow Cyan & Emerald Core) */}
      <path
        d="M60,100 C32,72 32,128 60,100 C88,72 112,72 140,100 C168,128 168,72 140,100 C112,128 88,128 60,100 Z"
        stroke="url(#fiberLoopGrad2)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#fiberGlow)"
      />

      {/* Infinity Fiber Strands - Thin bright highlights */}
      <path
        d="M60,100 C35,74 35,126 60,100 C87,74 113,74 140,100 C165,126 165,74 140,100 C113,126 87,126 60,100 Z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />

      {/* Radiant Fiber Optic Light Nodes / Sparkles */}
      <circle cx="34" cy="85" r="3" fill="#00F2FE" filter="url(#fiberGlow)" />
      <circle cx="34" cy="85" r="1.5" fill="#FFFFFF" />

      <circle cx="48" cy="64" r="2.5" fill="#10B981" filter="url(#fiberGlow)" />
      <circle cx="48" cy="64" r="1" fill="#FFFFFF" />

      <circle cx="166" cy="115" r="3.5" fill="#00F2FE" filter="url(#fiberGlow)" />
      <circle cx="166" cy="115" r="1.8" fill="#FFFFFF" />

      <circle cx="152" cy="136" r="2.5" fill="#10B981" filter="url(#fiberGlow)" />
      <circle cx="152" cy="136" r="1" fill="#FFFFFF" />

      <circle cx="100" cy="100" r="3" fill="#00F2FE" filter="url(#fiberGlow)" />
      <circle cx="100" cy="100" r="1.5" fill="#FFFFFF" />

      {/* Small fiber filament trails */}
      <path d="M142,66 C155,54 168,58 178,50" stroke="#00F2FE" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <circle cx="178" cy="50" r="1.5" fill="#FFF" />

      <path d="M152,70 C164,60 174,66 186,60" stroke="#10B981" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <circle cx="186" cy="60" r="1.5" fill="#FFF" />

      <path d="M136,60 C146,48 158,50 168,40" stroke="#00F2FE" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <circle cx="168" cy="40" r="1.5" fill="#FFF" />
    </svg>
  );

  // Innovation Quality IF Seal
  const renderQualitySeal = (dim: number) => (
    <div 
      style={{ width: dim, height: dim }}
      className="relative rounded-full p-[2px] bg-gradient-to-br from-[#f8f0d8] via-[#c79c38] to-[#594112] shadow-[0_0_15px_rgba(201,156,56,0.3)] shrink-0"
    >
      <div className="w-full h-full rounded-full bg-[#081326] border border-[#f5e6b5]/30 flex flex-col items-center justify-center p-1 text-center">
        <span className="text-[7px] tracking-widest text-[#f5e6b5] uppercase font-bold leading-none">INNOVATION</span>
        <div className="flex items-center justify-center my-[2px]">
          <span className="text-sm font-black italic tracking-tighter bg-gradient-to-r from-[#00f2fe] via-white to-[#d4af37] bg-clip-text text-transparent">
            iF
          </span>
        </div>
        <span className="text-[7px] tracking-widest text-[#f5e6b5] uppercase font-bold leading-none">QUALITY</span>
      </div>
    </div>
  );

  if (variant === 'mark') {
    const dim = size === 'sm' ? 36 : size === 'md' ? 48 : size === 'lg' ? 72 : 120;
    return <div className={`inline-flex items-center ${className}`}>{renderEmblem(dim)}</div>;
  }

  if (variant === 'badge') {
    return renderQualitySeal(size === 'sm' ? 44 : size === 'md' ? 56 : 72);
  }

  if (variant === 'horizontal') {
    const emblemDim = size === 'sm' ? 38 : size === 'md' ? 48 : 58;
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {renderEmblem(emblemDim)}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-heading font-black tracking-wider text-lg md:text-xl text-gold-gradient uppercase drop-shadow-sm">
              INDO
            </span>
            {/* O with network node */}
            <span className="relative inline-flex items-center justify-center">
              <span className="w-5 h-5 rounded-full border-2 border-[#d4af37] inline-flex items-center justify-center relative shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                <span className="absolute w-[18px] h-[2px] bg-[#d4af37] rotate-[-45deg]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981] z-10" />
              </span>
            </span>
            <span className="font-heading font-black tracking-wider text-lg md:text-xl text-gold-gradient uppercase drop-shadow-sm">
              FIBER
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-[0.22em] text-slate-300 font-semibold uppercase mt-0.5">
            <span className="text-[#d4af37]">•</span>
            <span className="text-silver-gradient">LINTAS NUSANTARA</span>
            <span className="text-[#d4af37]">•</span>
          </div>
          {showTagline && (
            <span className="hidden sm:inline-block text-[8px] tracking-[0.18em] text-[#d4af37]/80 font-medium uppercase mt-0.5">
              CONNECTING NUSANTARA AND SMARTECH
            </span>
          )}
        </div>
      </div>
    );
  }

  // Full Hero Emblem Representation (Large centered logo stack matching image.png)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Central Infinity Fiber Art */}
      <div className="relative mb-2">
        {renderEmblem(size === 'xl' ? 180 : size === 'lg' ? 140 : 100)}
      </div>

      {/* Main Brand Title */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 leading-none mt-2">
        <span className="font-heading font-black tracking-wider text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          INDO
        </span>
        {/* Node Styled O */}
        <span className="relative inline-flex items-center justify-center mx-0.5">
          <span className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full border-[3px] md:border-4 border-[#d4af37] inline-flex items-center justify-center relative shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <span className="absolute w-[24px] sm:w-[32px] md:w-[38px] h-[3px] bg-[#d4af37] rotate-[-45deg]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981] z-10" />
          </span>
        </span>
        <span className="font-heading font-black tracking-wider text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          FIBER
        </span>
      </div>

      {/* Lintas Nusantara Subtitle */}
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base tracking-[0.28em] font-bold text-slate-200 uppercase mt-2 drop-shadow-sm">
        <span className="text-[#d4af37] text-sm">•</span>
        <span className="text-silver-gradient">LINTAS NUSANTARA</span>
        <span className="text-[#d4af37] text-sm">•</span>
      </div>

      {/* Tagline */}
      {showTagline && (
        <div className="text-[10px] sm:text-xs md:text-sm tracking-[0.22em] text-[#d4af37] font-semibold uppercase mt-2">
          CONNECTING NUSANTARA AND SMARTECH
        </div>
      )}
    </div>
  );
};
