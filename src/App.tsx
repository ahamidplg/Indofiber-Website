import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductServicesSection } from './components/ProductServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { NetworkBackbone } from './components/NetworkBackbone';
import { SolutionCalculator } from './components/SolutionCalculator';
import { NetworkSlaSimulator } from './components/NetworkSlaSimulator';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './data/servicesData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [formSelectedService, setFormSelectedService] = useState<ServiceItem | null>(null);

  const handleExploreServices = () => {
    const el = document.getElementById('layanan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (service: ServiceItem) => {
    setFormSelectedService(service);
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060c18] text-slate-100 flex flex-col font-sans selection:bg-[#00f2fe]/30 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={handleExploreServices}
          onOpenCalculator={handleOpenCalculator}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 2. SLA & Live Network Latency Simulator */}
        <NetworkSlaSimulator />

        {/* 3. Official Product & Services Showcase (Replicating User Flyer) */}
        <ProductServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Nusantara Fiber Backbone & Coverage Map (Connecting Nusantara) */}
        <NetworkBackbone />

        {/* 5. Solution & Bandwidth Calculator */}
        <SolutionCalculator />

        {/* 6. About PT Indofiber Lintas Nusantara & Quality Seal */}
        <AboutSection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Office Location (Palembang) & Consultation Form */}
        <ContactSection initialService={formSelectedService} />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={(service) => setSelectedService(service)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Service Detail Modal Dialog */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
}
