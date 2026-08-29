import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FeeScopeCalculator } from './components/FeeScopeCalculator';
import { DocChecklistModal } from './components/DocChecklistModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { UploadDocumentsPage } from './pages/UploadDocumentsPage';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { PaymentPage } from './pages/PaymentPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F9F8F5] text-[#152232] flex flex-col font-sans">
        
        {/* Header - Connected to global routes while preserving exact visual appearance */}
        <Header
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenChecklist={() => setIsChecklistOpen(true)}
        />

        {/* Main Content Router */}
        <main className="grow">
          <Routes>
            {/* 1. Home Page (Locked & Unchanged design/sections) */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                  onOpenChecklist={() => setIsChecklistOpen(true)}
                  onSelectServiceForInquiry={handleSelectServiceForInquiry}
                  prefilledService={prefilledService}
                  prefilledScopeMessage={prefilledScopeMessage}
                />
              }
            />

            {/* 2. About Us Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* 3. Dedicated Services Page */}
            <Route path="/services" element={<ServicesPage />} />

            {/* 4. Pricing Page */}
            <Route
              path="/pricing"
              element={<PricingPage onOpenCalculator={() => setIsCalculatorOpen(true)} />}
            />

            {/* 5. Upload Documents Page */}
            <Route path="/upload-documents" element={<UploadDocumentsPage />} />

            {/* 6. Book Consultation Page */}
            <Route path="/book-consultation" element={<BookConsultationPage />} />

            {/* 7. Payment Page */}
            <Route path="/payment" element={<PaymentPage />} />

            {/* 8. Blog Page */}
            <Route path="/blog" element={<BlogPage />} />

            {/* 9. Contact Us Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 10. Privacy Policy Page */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* 11. Terms & Conditions Page */}
            <Route path="/terms-and-conditions" element={<TermsPage />} />
          </Routes>
        </main>

        {/* Footer - Shared layout containing links to all 11 pages */}
        <Footer />

        {/* Modals */}
        <FeeScopeCalculator
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
          onApplyScopeToContact={handleApplyScopeToContact}
        />

        <DocChecklistModal
          isOpen={isChecklistOpen}
          onClose={() => setIsChecklistOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
