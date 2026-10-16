import React from 'react';

interface ServiceBadgeIconProps {
  iconType: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ServiceBadgeIcon: React.FC<ServiceBadgeIconProps> = ({
  iconType,
  size = 'md',
  className = '',
}) => {
  const dim = size === 'sm' ? 48 : size === 'md' ? 68 : 88;

  const renderGlyph = () => {
    switch (iconType) {
      case 'internet-dedicated':
        // Globe with coordinate lat/long lines
        return (
          <g stroke="#00F2FE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="28" />
            <path d="M22 50h56" />
            <path d="M50 22a40 40 0 0 1 0 56" />
            <path d="M50 22a40 40 0 0 0 0 56" />
            <ellipse cx="50" cy="50" rx="14" ry="28" />
          </g>
        );

      case 'business-broadband':
        // Bar chart with ascending arrow
        return (
          <g stroke="#00F2FE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Bars */}
            <rect x="26" y="54" width="7" height="20" rx="1.5" fill="#00F2FE" fillOpacity="0.3" />
            <rect x="38" y="44" width="7" height="30" rx="1.5" fill="#00F2FE" fillOpacity="0.5" />
            <rect x="50" y="34" width="7" height="40" rx="1.5" fill="#00F2FE" fillOpacity="0.7" />
            <rect x="62" y="24" width="7" height="50" rx="1.5" fill="#00F2FE" />
            {/* Trend Arrow */}
            <path d="M24 48 L46 30 L60 38 L76 20" stroke="#FFF" strokeWidth="2.5" />
            <path d="M66 20 H76 V30" stroke="#FFF" strokeWidth="2.5" />
          </g>
        );

      case 'vpn-sdwan':
        // Hexagonal shield with "VPN"
        return (
          <g strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M50 22 L75 32 V54 C75 67 64 76 50 80 C36 76 25 67 25 54 V32 Z"
              stroke="#00F2FE"
              strokeWidth="2.5"
              fill="rgba(0, 242, 254, 0.15)"
            />
            <text
              x="50"
              y="56"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Outfit, sans-serif"
              fontWeight="800"
              fontSize="16"
              letterSpacing="0.5"
            >
              VPN
            </text>
          </g>
        );

      case 'managed-wifi':
        // Concentric Wi-Fi waves
        return (
          <g stroke="#00F2FE" strokeWidth="3" fill="none" strokeLinecap="round">
            {/* Outer wave */}
            <path d="M25 38 A36 36 0 0 1 75 38" />
            {/* Mid wave */}
            <path d="M33 48 A24 24 0 0 1 67 48" />
            {/* Inner wave */}
            <path d="M41 58 A12 12 0 0 1 59 58" />
            {/* Center dot */}
            <circle cx="50" cy="69" r="4.5" fill="#00F2FE" />
          </g>
        );

      case 'security-ddos':
        // Shield with lock
        return (
          <g stroke="#00F2FE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M50 22 L75 32 V54 C75 67 64 76 50 80 C36 76 25 67 25 54 V32 Z"
              fill="rgba(0, 242, 254, 0.1)"
            />
            {/* Padlock */}
            <rect x="42" y="50" width="16" height="13" rx="2" fill="#00F2FE" fillOpacity="0.3" stroke="#FFF" strokeWidth="2" />
            <path d="M46 50 V44 A4 4 0 0 1 54 44 V50" stroke="#FFF" strokeWidth="2" />
            <circle cx="50" cy="56" r="1.5" fill="#FFF" />
          </g>
        );

      case 'cloud-datacenter':
        // Cloud outline with server racks inside
        return (
          <g stroke="#00F2FE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M32 46 A14 14 0 0 1 56 34 A16 16 0 0 1 74 46 A12 12 0 0 1 68 64 H32 A12 12 0 0 1 32 46 Z"
              fill="rgba(0, 242, 254, 0.1)"
            />
            {/* Server unit 1 */}
            <rect x="40" y="47" width="22" height="6" rx="1.5" stroke="#FFF" strokeWidth="1.5" />
            <circle cx="44" cy="50" r="1" fill="#10B981" />
            <circle cx="47" cy="50" r="1" fill="#00F2FE" />
            {/* Server unit 2 */}
            <rect x="40" y="55" width="22" height="6" rx="1.5" stroke="#FFF" strokeWidth="1.5" />
            <circle cx="44" cy="58" r="1" fill="#10B981" />
            <circle cx="47" cy="58" r="1" fill="#00F2FE" />
          </g>
        );

      case 'smart-city':
        // Buildings with Wi-Fi signal
        return (
          <g stroke="#00F2FE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Wi-Fi waves above buildings */}
            <path d="M42 26 A12 12 0 0 1 58 26" stroke="#FFF" strokeWidth="2" />
            <path d="M46 31 A6 6 0 0 1 54 31" stroke="#FFF" strokeWidth="2" />
            <circle cx="50" cy="35" r="1.5" fill="#00F2FE" />

            {/* Central Tower */}
            <rect x="43" y="42" width="14" height="34" rx="1" fill="rgba(0, 242, 254, 0.15)" />
            {/* Windows */}
            <circle cx="47" cy="48" r="1" fill="#00F2FE" />
            <circle cx="53" cy="48" r="1" fill="#00F2FE" />
            <circle cx="47" cy="54" r="1" fill="#00F2FE" />
            <circle cx="53" cy="54" r="1" fill="#00F2FE" />
            <circle cx="47" cy="60" r="1" fill="#00F2FE" />
            <circle cx="53" cy="60" r="1" fill="#00F2FE" />

            {/* Left Building */}
            <rect x="28" y="52" width="12" height="24" rx="1" fill="rgba(0, 242, 254, 0.1)" />
            <circle cx="34" cy="58" r="1" fill="#00F2FE" />
            <circle cx="34" cy="64" r="1" fill="#00F2FE" />

            {/* Right Building */}
            <rect x="60" y="48" width="12" height="28" rx="1" fill="rgba(0, 242, 254, 0.1)" />
            <circle cx="66" cy="56" r="1" fill="#00F2FE" />
            <circle cx="66" cy="63" r="1" fill="#00F2FE" />
          </g>
        );

      case 'command-center':
        // Console with multiple screens and operator
        return (
          <g stroke="#00F2FE" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Monitor Screen Left */}
            <rect x="25" y="27" width="22" height="17" rx="1.5" stroke="#00F2FE" />
            <circle cx="31" cy="35" r="3" stroke="#FFF" strokeWidth="1.5" />
            <line x1="37" y1="33" x2="43" y2="33" stroke="#00F2FE" strokeWidth="1.5" />
            <line x1="37" y1="38" x2="43" y2="38" stroke="#00F2FE" strokeWidth="1.5" />

            {/* Monitor Screen Right */}
            <rect x="53" y="27" width="22" height="17" rx="1.5" stroke="#00F2FE" />
            <polyline points="57,39 62,33 67,36 71,30" stroke="#FFF" strokeWidth="1.5" />

            {/* Sub-monitor Left */}
            <rect x="25" y="48" width="15" height="12" rx="1" stroke="#00F2FE" strokeWidth="1.5" />
            <line x1="28" y1="53" x2="36" y2="53" stroke="#00F2FE" strokeWidth="1.5" />
            <line x1="28" y1="56" x2="33" y2="56" stroke="#00F2FE" strokeWidth="1.5" />

            {/* Sub-monitor Right */}
            <rect x="60" y="48" width="15" height="12" rx="1" stroke="#00F2FE" strokeWidth="1.5" />
            <rect x="63" y="54" width="2" height="4" fill="#00F2FE" />
            <rect x="67" y="52" width="2" height="6" fill="#00F2FE" />
            <rect x="71" y="50" width="2" height="8" fill="#00F2FE" />

            {/* Operator in center */}
            <circle cx="50" cy="54" r="5" fill="#FFF" />
            <path d="M42 70 C42 62 45 61 50 61 C55 61 58 62 58 70 Z" fill="#FFF" />
          </g>
        );

      case 'internet-satelite':
        // Satellite Parabolic Dish with transmission waves
        return (
          <g stroke="#00F2FE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Parabolic Dish Arc */}
            <path d="M30 65 C32 40 45 30 65 30" stroke="#00F2FE" strokeWidth="4" />
            <ellipse cx="48" cy="48" rx="20" ry="10" transform="rotate(-40 48 48)" fill="rgba(0, 242, 254, 0.15)" stroke="#00F2FE" strokeWidth="2" />
            {/* Feed horn transmitter */}
            <line x1="48" y1="48" x2="58" y2="38" stroke="#FFF" strokeWidth="2" />
            <circle cx="58" cy="38" r="2" fill="#FFF" />
            {/* Stand / Mount */}
            <path d="M38 64 L30 76 M46 70 L50 76 M25 76 H56" stroke="#00F2FE" strokeWidth="2" />
            {/* Radiating signal waves */}
            <path d="M66 32 A12 12 0 0 1 76 42" stroke="#FFF" strokeWidth="2" />
            <path d="M72 24 A20 20 0 0 1 84 36" stroke="#00F2FE" strokeWidth="2" />
          </g>
        );

      case 'website-hosting':
        // Web window + server rack
        return (
          <g stroke="#00F2FE" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Browser Window */}
            <rect x="25" y="28" width="50" height="30" rx="3" stroke="#00F2FE" strokeWidth="2.5" fill="rgba(0, 242, 254, 0.1)" />
            <line x1="25" y1="36" x2="75" y2="36" stroke="#00F2FE" strokeWidth="1.5" />
            <circle cx="30" cy="32" r="1.5" fill="#FFF" />
            <circle cx="35" cy="32" r="1.5" fill="#FFF" />
            <circle cx="40" cy="32" r="1.5" fill="#FFF" />
            <line x1="30" y1="44" x2="48" y2="44" stroke="#FFF" strokeWidth="2" />
            <line x1="30" y1="49" x2="42" y2="49" stroke="#00F2FE" strokeWidth="1.5" />

            {/* Server unit underneath */}
            <rect x="46" y="44" width="24" height="28" rx="2" stroke="#FFF" strokeWidth="2" fill="#091326" />
            <line x1="50" y1="52" x2="66" y2="52" stroke="#00F2FE" strokeWidth="1.5" />
            <circle cx="53" cy="52" r="1" fill="#10B981" />
            <line x1="50" y1="60" x2="66" y2="60" stroke="#00F2FE" strokeWidth="1.5" />
            <circle cx="53" cy="60" r="1" fill="#10B981" />
            <line x1="50" y1="66" x2="66" y2="66" stroke="#00F2FE" strokeWidth="1.5" />
            <circle cx="53" cy="66" r="1" fill="#10B981" />
          </g>
        );

      default:
        return (
          <circle cx="50" cy="50" r="20" stroke="#00F2FE" strokeWidth="2" fill="none" />
        );
    }
  };

  return (
    <div
      style={{ width: dim, height: dim }}
      className={`relative rounded-full flex items-center justify-center p-[3px] bg-gradient-to-b from-[#f9f2db] via-[#d4af37] to-[#7c5f1c] shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(212,175,55,0.25)] shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {/* Inner Metallic Bevel Ring */}
      <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-[#5a4212] via-[#d4af37] to-[#fff6de]">
        {/* Deep Blue Core Cavity with Ambient Glow */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0c224a] via-[#09152b] to-[#040812] relative overflow-hidden flex items-center justify-center">
          {/* Cyan Glow Spot */}
          <div className="absolute inset-0 bg-radial from-[#00f2fe]/25 via-transparent to-transparent pointer-events-none" />

          {/* SVG Glyph */}
          <svg
            viewBox="0 0 100 100"
            className="w-[82%] h-[82%] drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]"
          >
            {renderGlyph()}
          </svg>
        </div>
      </div>
    </div>
  );
};
