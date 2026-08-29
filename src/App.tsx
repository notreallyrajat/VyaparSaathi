import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeeScopeCalculator } from './components/FeeScopeCalculator';
import { Process } from './components/Process';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DocChecklistModal } from './components/DocChecklistModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledScopeMessage, setPrefilledScopeMessage] = useState<string>('');

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyScopeToContact = (scopeSummary: string) => {
    setPrefilledScopeMessage(scopeSummary);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#152232] flex flex-col font-sans">
      {/* Header */}
      <Header
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Main Content */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenChecklist={() => setIsChecklistOpen(true)}
        />

        {/* Services Overview */}
        <Services
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* Engagement Process */}
        <Process />

        {/* About & Credentials */}
        <About />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Lead Gen Contact Section */}
        <Contact
          prefilledService={prefilledService}
          prefilledScopeMessage={prefilledScopeMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Retainer Scope Calculator Modal */}
      <FeeScopeCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApplyScopeToContact={handleApplyScopeToContact}
      />

      {/* Document Checklist Modal */}
      <DocChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
};

export default App;
