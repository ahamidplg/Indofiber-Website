import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { IndofiberLogo } from './IndofiberLogo';
import { COMPANY_PROFILE } from '../data/servicesData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Cakupan', href: '#cakupan' },
    { label: 'Kalkulator', href: '#kalkulator' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Lokasi & Kontak', href: '#kontak' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060c18]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3'
            : 'bg-gradient-to-b from-[#060c18]/90 via-[#060c18]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2fe]"
              aria-label="PT Indofiber Lintas Nusantara"
            >
              <IndofiberLogo variant="horizontal" size="sm" showTagline={false} />
            </a>

            {/* Zone 2: 4-5 concise single-line nav links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#d4af37] after:to-[#00f2fe] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] hover:from-white hover:to-[#e5c052] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:shadow-[0_0_20px_rgba(212,175,55,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-950" />
                <span>Konsultasi Solusi</span>
              </button>

              {/* Mobile menu trigger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-[#d4af37]/40 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#060c18]/95 backdrop-blur-xl lg:hidden pt-20 px-6 pb-6 flex flex-col justify-between border-b border-[#d4af37]/20">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-[#d4af37] py-2 border-b border-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#f6e5b2] via-[#d4af37] to-[#c59c38] rounded-xl shadow-lg"
            >
              Hubungi Tim Sales Palembang
            </button>
            <div className="text-center text-xs text-slate-400">
              NOC 24/7:{' '}
              <a href={`tel:${COMPANY_PROFILE.phone}`} className="text-[#00f2fe] font-mono">
                {COMPANY_PROFILE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
