import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { ScopeSimulator } from './components/ScopeSimulator';
import { ServicesSection } from './components/ServicesSection';
import { Differentials } from './components/Differentials';
import { Methodology } from './components/Methodology';
import { AboutUs } from './components/AboutUs';
import { CommercialCTA } from './components/CommercialCTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { WhatsAppAdminModal } from './components/WhatsAppAdminModal';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  // WhatsApp is disabled by default until unlocked with password 8787 and number is configured
  const [isWhatsAppEnabled, setIsWhatsAppEnabled] = useState<boolean>(() => {
    return localStorage.getItem('conectados_wa_enabled') === 'true';
  });

  const [whatsappNumber, setWhatsappNumber] = useState<string>(() => {
    return localStorage.getItem('conectados_wa_num') || '';
  });

  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Gestão de Manutenção');
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const handleSaveWhatsAppData = (newNumber: string, enabled: boolean) => {
    setWhatsappNumber(newNumber);
    setIsWhatsAppEnabled(enabled);
    localStorage.setItem('conectados_wa_num', newNumber);
    localStorage.setItem('conectados_wa_enabled', enabled ? 'true' : 'false');
  };

  const cleanNum = whatsappNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(
    'Olá, conheci a Conectados Consultoria pelo site e gostaria de solicitar um atendimento.'
  );
  const globalWhatsappUrl = cleanNum ? `https://wa.me/${cleanNum}?text=${encodedText}` : '#contato';

  const handleSelectServiceForContact = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        whatsappUrl={globalWhatsappUrl}
        isWhatsAppEnabled={isWhatsAppEnabled}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          whatsappUrl={globalWhatsappUrl}
          isWhatsAppEnabled={isWhatsAppEnabled}
        />

        {/* Target Audience Sectors */}
        <TargetAudience />

        {/* Interactive Scope & Diagnostic Simulator */}
        <ScopeSimulator
          onSelectSolution={handleSelectServiceForContact}
          whatsappUrl={globalWhatsappUrl}
        />

        {/* 2-7. Soluções: Gestão de Manutenção, IoT, Automação, Elétrica, Treinamentos */}
        <ServicesSection
          onSelectServiceForContact={handleSelectServiceForContact}
          whatsappUrl={globalWhatsappUrl}
        />

        {/* Diferenciais: "Tecnologia e experiência conectadas ao resultado." */}
        <Differentials />

        {/* Metodologia de Atendimento: 4 Etapas */}
        <Methodology />

        {/* 8. Sobre a Empresa */}
        <AboutUs />

        {/* Chamada Comercial */}
        <CommercialCTA
          whatsappUrl={globalWhatsappUrl}
          isWhatsAppEnabled={isWhatsAppEnabled}
        />

        {/* 9. Formulário de Contato */}
        <ContactForm
          selectedService={selectedService}
          onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
          whatsappNumber={whatsappNumber}
          isWhatsAppEnabled={isWhatsAppEnabled}
        />
      </main>

      {/* Rodapé */}
      <Footer
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        whatsappNumber={whatsappNumber}
        isWhatsAppEnabled={isWhatsAppEnabled}
        onOpenWhatsAppAdmin={() => setAdminModalOpen(true)}
      />

      {/* Floating WhatsApp Button or Password-Protected Admin Activation Trigger */}
      <FloatingWhatsApp
        whatsappNumber={whatsappNumber}
        isEnabled={isWhatsAppEnabled}
        onOpenAdminModal={() => setAdminModalOpen(true)}
      />

      {/* Protected Admin Modal for entering password 8787 and configuring WhatsApp */}
      <WhatsAppAdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        isEnabled={isWhatsAppEnabled}
        currentNumber={whatsappNumber}
        onSaveConfig={handleSaveWhatsAppData}
      />

      {/* LGPD Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}


