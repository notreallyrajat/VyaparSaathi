import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { UploadDocumentsPage } from './pages/UploadDocumentsPage';
import { LoginPage } from './pages/LoginPage';
import { PaymentPage } from './pages/PaymentPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { PrivateLimitedRegistrationPage } from './pages/PrivateLimitedRegistrationPage';

export const App: React.FC = () => {
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledScopeMessage] = useState<string>('');

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F9F8F5] text-[#152232] flex flex-col font-sans">
        
        {/* Header - Connected to global routes */}
        <Header />

        {/* Main Content Router */}
        <main className="grow">
          <Routes>
            {/* 1. Home Page */}
            <Route
              path="/"
              element={
                <HomePage
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
            <Route path="/pricing" element={<PricingPage />} />

            {/* 5. Upload Documents Page */}
            <Route path="/upload-documents" element={<UploadDocumentsPage />} />

            {/* 6. Dummy Client Auth & Login Page */}
            <Route path="/login" element={<LoginPage />} />

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

            {/* 12. Private Limited Company Registration Page */}
            <Route path="/private-limited-company-registration" element={<PrivateLimitedRegistrationPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
