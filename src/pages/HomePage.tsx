import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Contact } from '../components/Contact';

interface HomePageProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
  prefilledService: string;
  prefilledScopeMessage: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectServiceForInquiry,
  prefilledService,
  prefilledScopeMessage,
}) => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <Services
        onSelectServiceForInquiry={onSelectServiceForInquiry}
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
