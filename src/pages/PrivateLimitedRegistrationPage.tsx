import React from 'react';
import { Link } from 'react-router-dom';

export const PrivateLimitedRegistrationPage: React.FC = () => {
  const packageServices = [
    { title: 'Company Name Approval' },
    { title: 'Digital Signature Certificate (DSC)' },
    { title: 'Director Identification Number (DIN)' },
    { title: 'Private Limited Company Incorporation' },
    { title: 'PAN & TAN' },
    { title: 'EPF Registration' },
    { title: 'ESIC Registration' },
    { title: 'GST Registration' },
    { title: 'Udyam (MSME) Registration' },
    { title: 'BRN Registration', badge: 'Complimentary' },
  ];

  const feeBreakdown = [
    {
      title: 'Private Limited Company Registration',
      subtitle: '(Incorporation Package)',
      fee: '₹20,000/-',
    },
    {
      title: 'GST Registration',
      fee: '₹2,500/-',
    },
    {
      title: 'Udyam (MSME) Registration',
      fee: '₹1,000/-',
    },
    {
      title: 'BRN Registration',
      fee: 'Complimentary',
    },
  ];

  const requiredDocuments = [
    'PAN Card',
    'Aadhaar Card',
    'Passport Size Photograph',
    'Mobile Number & Email ID',
    'Registered Office Address Proof',
    'NOC (If Applicable)',
  ];

  const deliverables = [
    'Certificate of Incorporation',
    'PAN & TAN',
    'GST Certificate',
    'Udyam (MSME) Certificate',
    'DIN',
    'DSC',
  ];

  const whyChooseUsPoints = [
    'End-to-End Registration Support',
    'Experienced Compliance Professionals',
    'Transparent Pricing',
    'Quick & Hassle-Free Process',
    'Post Registration Compliance Guidance',
  ];

  const registrationSteps = [
    { number: '01', title: 'Name Approval' },
    { number: '02', title: 'DSC & DIN' },
    { number: '03', title: 'Incorporation' },
    { number: '04', title: 'PAN & TAN' },
    { number: '05', title: 'GST Registration' },
    { number: '06', title: 'Udyam (MSME) Registration' },
  ];

  const otherApprovedServices = [
    {
      title: 'Accounting & Bookkeeping',
      description: 'Routine ledger maintenance, transaction entry, and bank reconciliation.',
    },
    {
      title: 'GST Return Filing',
      description: 'Monthly and quarterly GSTR-1 & GSTR-3B preparation and filing.',
    },
    {
      title: 'Income Tax Return Filing',
      description: 'Annual corporate and individual income tax return drafting & filing.',
    },
    {
      title: 'ROC Annual Compliance',
      description: 'Yearly statutory compliance, AOC-4 and MGT-7 filings for companies.',
    },
  ];

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Page Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              INCORPORATION &amp; REGISTRATION PACKAGE
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              PRIVATE LIMITED COMPANY REGISTRATION
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] font-medium leading-relaxed">
              Start Your Business with Confidence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* ================================================== */}
          {/* 1. REGISTRATION PACKAGE                            */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                REGISTRATION PACKAGE
              </h2>
            </div>

            <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#152232] font-semibold">
                {packageServices.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E2E5EA]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#152232] inline-block shrink-0"></span>
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#152232] text-white px-2 py-0.5 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* 2. PROFESSIONAL FEE & 3. FEE NOTE                   */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                PROFESSIONAL FEE
              </h2>
            </div>

            <div className="bg-white border border-[#E2E5EA] overflow-hidden">
              <div className="bg-[#152232] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  INCORPORATION COMPONENT
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9FA9B6]">
                  FEE AMOUNT
                </span>
              </div>

              <div className="divide-y divide-[#E2E5EA]">
                {feeBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FAF9F6] transition-colors"
                  >
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-[#152232]">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs text-[#6C7582] font-mono">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-[#6C7582] sm:hidden font-mono block">Fee: </span>
                      <span className="text-sm sm:text-base font-mono font-bold text-[#152232]">
                        {item.fee}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Professional Fee Highlight */}
              <div className="bg-[#152232] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E2E5EA]">
                <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider">
                  TOTAL PROFESSIONAL FEE
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  ₹23,500/-
                </span>
              </div>
            </div>

            {/* Fee Note */}
            <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs sm:text-sm text-[#3D4653] leading-relaxed">
              <p>Government fees are included only where specifically mentioned in the package.</p>
              <p className="pt-1 text-[#6C7582]">Any additional statutory charges, if applicable, shall be borne by the client.</p>
            </div>
          </div>

          {/* ================================================== */}
          {/* 4. DOCUMENTS REQUIRED & 5. DELIVERABLES            */}
          {/* ================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Documents Required */}
            <div className="space-y-4">
              <div className="border-b border-[#E2E5EA] pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                  DOCUMENTS REQUIRED
                </h2>
              </div>

              <div className="bg-white border border-[#E2E5EA] p-6 space-y-3">
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D4653]">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#152232] font-bold select-none">•</span>
                      <span className="font-medium text-[#152232]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-4">
              <div className="border-b border-[#E2E5EA] pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                  DELIVERABLES
                </h2>
              </div>

              <div className="bg-white border border-[#E2E5EA] p-6 space-y-3">
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D4653]">
                  {deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#152232] font-bold select-none">•</span>
                      <span className="font-medium text-[#152232]">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* ================================================== */}
          {/* 6. WHY CHOOSE VYAPAAR SAATHI?                      */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                WHY CHOOSE VYAPAAR SAATHI?
              </h2>
            </div>

            <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#3D4653]">
                {whyChooseUsPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-[#FAF9F6] p-3 border border-[#E2E5EA]">
                    <span className="text-[#152232] font-bold select-none">•</span>
                    <span className="font-medium text-[#152232]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================================================== */}
          {/* 7. REGISTRATION PROCESS                            */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                REGISTRATION PROCESS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {registrationSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white border border-[#E2E5EA] p-5 space-y-2 flex flex-col justify-between"
                >
                  <span className="text-xs font-mono font-bold text-[#6C7582]">
                    STEP {step.number}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#152232]">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================== */}
          {/* 8. OUR OTHER SERVICES                              */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                OUR OTHER SERVICES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherApprovedServices.map((srv, idx) => (
                <div key={idx} className="bg-white border border-[#E2E5EA] p-5 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#152232]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#3D4653] leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================== */}
          {/* 9. CALL TO ACTION                                  */}
          {/* ================================================== */}
          <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-6 sm:p-10 text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
              Ready to Register Your Private Limited Company?
            </h3>
            <p className="text-xs sm:text-sm text-[#3D4653] max-w-xl mx-auto leading-relaxed">
              Consult with our registration specialists to begin your incorporation process today.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?service=Private%20Limited%20Company%20Registration"
                className="inline-flex items-center justify-center bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-8 border border-[#152232] transition-colors"
              >
                <span>BOOK CONSULTATION</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
