import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Contact } from '../components/Contact';

interface HomePageProps {
  onOpenCalculator: () => void;
  onOpenChecklist: () => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
  prefilledService: string;
  prefilledScopeMessage: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenCalculator,
  onOpenChecklist,
  onSelectServiceForInquiry,
  prefilledService,
  prefilledScopeMessage,
}) => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        onOpenCalculator={onOpenCalculator}
        onOpenChecklist={onOpenChecklist}
      />

      {/* Services Overview */}
      <Services
        onSelectServiceForInquiry={onSelectServiceForInquiry}
        onOpenCalculator={onOpenCalculator}
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
    </>
  );
};
