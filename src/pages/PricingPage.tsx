import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Active Category Tab State: 'all' | 'annual-roc' | 'pvt-ltd' | 'monthly'
  const [activeTab, setActiveTab] = useState<'all' | 'annual-roc' | 'pvt-ltd' | 'monthly'>(
    (categoryParam as any) || 'all'
  );

  const handleTabChange = (tab: 'all' | 'annual-roc' | 'pvt-ltd' | 'monthly') => {
    setActiveTab(tab);
    if (tab === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: tab });
    }
  };

  // --- Data Structures ---
  const annualComplianceServices = [
    { title: 'ROC Annual Compliance', subtitle: '(AOC-4 + MGT-7 / MGT-7A)', fee: '₹6,000/-' },
    { title: 'Company Income Tax Return (ITR)', fee: '₹3,000/- onwards' },
    { title: 'Tax Audit', subtitle: '(Under Income Tax Act)', fee: 'As Per Audit Scope' },
    { title: 'Statutory Audit', subtitle: '(Under Companies Act, 2013)', fee: 'As Per Audit Scope' },
    { title: 'Annual GST Return', subtitle: '(GSTR-9 / GSTR-9C, if applicable)', fee: '₹2,500/- onwards' },
    { title: 'Director KYC', subtitle: '(DIR-3 KYC)', fee: '₹600/- per Director' },
    { title: 'Audit Coordination & Compliance Support', fee: '₹2,000/-' },
  ];

  const eventBasedRocServices = [
    { title: 'Change in Director', fee: '₹2,500/-' },
    { title: 'Change in Registered Office', fee: '₹2,500/-' },
    { title: 'Increase in Authorised Capital', fee: '₹2,500/-' },
    { title: 'Share Transfer', fee: '₹1,500/-' },
    { title: 'Share Allotment', fee: '₹1,500/-' },
    { title: 'Company Name Change', fee: '₹3,500/-' },
  ];

  const pvtLtdPackageServices = [
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

  const pvtLtdFeeBreakdown = [
    { title: 'Private Limited Company Registration', subtitle: '(Incorporation Package)', fee: '₹20,000/-' },
    { title: 'GST Registration', fee: '₹2,500/-' },
    { title: 'Udyam (MSME) Registration', fee: '₹1,000/-' },
    { title: 'BRN Registration', fee: 'Complimentary' },
  ];

  const pvtLtdRequiredDocs = [
    'PAN Card',
    'Aadhaar Card',
    'Passport Size Photograph',
    'Mobile Number & Email ID',
    'Registered Office Address Proof',
    'NOC (If Applicable)',
  ];

  const pvtLtdDeliverables = [
    'Certificate of Incorporation',
    'PAN & TAN',
    'GST Certificate',
    'Udyam (MSME) Certificate',
    'DIN',
    'DSC',
  ];

  const pvtLtdWhyUs = [
    'End-to-End Registration Support',
    'Experienced Compliance Professionals',
    'Transparent Pricing',
    'Quick & Hassle-Free Process',
    'Post Registration Compliance Guidance',
  ];

  const pvtLtdSteps = [
    { number: '01', title: 'Name Approval' },
    { number: '02', title: 'DSC & DIN' },
    { number: '03', title: 'Incorporation' },
    { number: '04', title: 'PAN & TAN' },
    { number: '05', title: 'GST Registration' },
    { number: '06', title: 'Udyam (MSME) Registration' },
  ];

  const accountingPackages = [
    { name: 'BASIC', entries: 'Up to 50 Entries', price: '₹2,000/- per Month' },
    { name: 'STANDARD', entries: 'Up to 100 Entries', price: '₹3,000/- per Month' },
    { name: 'PREMIUM', entries: 'Up to 500 Entries', price: '₹7,000/- per Month' },
    { name: 'ADVANCE', entries: 'Up to 1000 Entries', price: '₹10,000/- per Month' },
  ];

  const specialOfferTiers = [
    { period: 'FIRST 4 MONTH', discount: '30% DISCOUNT', price: '₹2,450/- per Month', original: '(Instead of ₹3,500/-)' },
    { period: 'NEXT 4 MONTH', discount: '15% DISCOUNT', price: '₹2,975/- per Month', original: '(Instead of ₹3,500/-)' },
    { period: 'AFTER 8 MONTH', discount: 'NORMAL RATES', price: '₹3,500/- per Month', original: '(No Discount)' },
  ];

  const monthlyWhatYouGet = [
    'Timely Return Filing',
    'Dedicated Support',
    'Accurate Accounting',
    'Complete Data Security',
    'Better Business Insights',
  ];

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              OFFICIAL PRACTICE FEE CATALOGUE
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Comprehensive Pricing &amp; Fee Schedule
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Transparent baseline professional fees for company incorporation, annual statutory compliance, event-based ROC filings, and monthly retainers.
            </p>
          </div>

          {/* Category Switcher Navigation Bar */}
          <div className="pt-2 border-t border-[#E2E5EA] flex flex-wrap gap-2 text-xs font-mono">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2.5 border transition-all ${
                activeTab === 'all'
                  ? 'bg-[#152232] text-white border-[#152232] font-bold shadow-xs'
                  : 'bg-white text-[#3D4653] border-[#D5D8DE] hover:bg-[#EFEFEA]'
              }`}
            >
              SHOW ALL SCHEDULES
            </button>
            <button
              onClick={() => handleTabChange('annual-roc')}
              className={`px-4 py-2.5 border transition-all ${
                activeTab === 'annual-roc'
                  ? 'bg-[#152232] text-white border-[#152232] font-bold shadow-xs'
                  : 'bg-white text-[#3D4653] border-[#D5D8DE] hover:bg-[#EFEFEA]'
              }`}
            >
              1. ANNUAL COMPLIANCE &amp; ROC
            </button>
            <button
              onClick={() => handleTabChange('pvt-ltd')}
              className={`px-4 py-2.5 border transition-all ${
                activeTab === 'pvt-ltd'
                  ? 'bg-[#152232] text-white border-[#152232] font-bold shadow-xs'
                  : 'bg-white text-[#3D4653] border-[#D5D8DE] hover:bg-[#EFEFEA]'
              }`}
            >
              2. PVT LTD INCORPORATION
            </button>
            <button
              onClick={() => handleTabChange('monthly')}
              className={`px-4 py-2.5 border transition-all ${
                activeTab === 'monthly'
                  ? 'bg-[#152232] text-white border-[#152232] font-bold shadow-xs'
                  : 'bg-white text-[#3D4653] border-[#D5D8DE] hover:bg-[#EFEFEA]'
              }`}
            >
              3. MONTHLY ACCOUNTING &amp; COMPLIANCE
            </button>
          </div>
        </div>
      </section>

      {/* Main Single Page Pricing Body */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          {/* ========================================================================= */}
          {/* MODULE 1: ANNUAL COMPLIANCE PACKAGE & EVENT BASED ROC SERVICES            */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'annual-roc') && (
            <div className="space-y-12 border-b border-[#E2E5EA] pb-16">
              
              {/* Category Header */}
              <div className="bg-[#152232] text-white p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                  CATEGORY 01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  ANNUAL COMPLIANCE &amp; EVENT BASED ROC FILINGS
                </h2>
                <p className="text-xs sm:text-sm text-[#D2D6DC]">
                  Yearly statutory filings, tax returns, audits, and event-based company records maintenance.
                </p>
              </div>

              {/* 1. Annual Compliance Package Table */}
              <div className="space-y-6">
                <div className="border-b border-[#E2E5EA] pb-3 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    Yearly Compliance – One Time in a Year
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
                    ANNUAL COMPLIANCE PACKAGE
                  </h3>
                </div>

                <div className="bg-white border border-[#E2E5EA] overflow-hidden">
                  <div className="bg-[#152232] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      SERVICE SPECIFICATION
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9FA9B6]">
                      PROFESSIONAL FEE
                    </span>
                  </div>

                  <div className="divide-y divide-[#E2E5EA]">
                    {annualComplianceServices.map((srv, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FAF9F6] transition-colors"
                      >
                        <div className="space-y-0.5">
                          <h4 className="text-sm sm:text-base font-bold text-[#152232]">{srv.title}</h4>
                          {srv.subtitle && <p className="text-xs text-[#6C7582] font-mono">{srv.subtitle}</p>}
                        </div>
                        <div className="text-left sm:text-right shrink-0">
                          <span className="text-xs text-[#6C7582] sm:hidden font-mono block">Fee: </span>
                          <span className="text-sm sm:text-base font-mono font-bold text-[#152232]">{srv.fee}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Combined Package Block */}
                <div className="bg-white border-2 border-[#152232] p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E5EA] pb-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-[#152232] px-2 py-0.5">
                          FIRST FINANCIAL YEAR
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#152232] bg-[#FAF9F6] border border-[#152232] px-2 py-0.5">
                          20% DISCOUNT
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                        ANNUAL COMPLIANCE PACKAGE (COMBINED)
                      </h4>
                      <p className="text-xs sm:text-sm text-[#3D4653] font-medium">
                        Includes: <span className="font-semibold text-[#152232]">ROC + ITR + Audit Coordination</span>
                      </p>
                    </div>

                    <div className="text-left md:text-right shrink-0">
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-[#152232]">
                        ₹10,000/- <span className="text-xs font-sans font-normal text-[#6C7582]">per Year</span>
                      </div>
                      <span className="text-xs text-[#3D4653] block font-medium">
                        Special for New Business
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Event Based ROC Services */}
              <div className="space-y-6">
                <div className="border-b border-[#E2E5EA] pb-3 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    As Per Requirement
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
                    EVENT BASED ROC SERVICES
                  </h3>
                </div>

                <div className="bg-white border border-[#E2E5EA] overflow-hidden">
                  <div className="bg-[#152232] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      ROC SERVICE ITEM
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9FA9B6]">
                      PROFESSIONAL FEE
                    </span>
                  </div>

                  <div className="divide-y divide-[#E2E5EA]">
                    {eventBasedRocServices.map((srv, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FAF9F6] transition-colors"
                      >
                        <h4 className="text-sm sm:text-base font-bold text-[#152232]">{srv.title}</h4>
                        <div className="text-left sm:text-right shrink-0">
                          <span className="text-xs text-[#6C7582] sm:hidden font-mono block">Fee: </span>
                          <span className="text-sm sm:text-base font-mono font-bold text-[#152232]">{srv.fee}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs sm:text-sm text-[#3D4653]">
                  <span className="font-semibold text-[#152232]">Note: </span>
                  <span>Government Fees, Stamp Duty &amp; MCA Filing Fees will be charged extra wherever applicable.</span>
                </div>
              </div>

              {/* Notes & Bottom Disclaimer */}
              <div className="space-y-4">
                <div className="bg-white border border-[#E2E5EA] p-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#152232] font-bold border-b border-[#E2E5EA] pb-2">
                    IMPORTANT NOTES
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#3D4653]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#152232] font-bold">•</span>
                      <span>Tax Audit &amp; Statutory Audit fees depend on turnover, nature of business and scope of work.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#152232] font-bold">•</span>
                      <span>GST Annual Return fees may vary based on transaction volume and reconciliation requirements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#152232] font-bold">•</span>
                      <span>All services will be provided as per applicable laws, rules &amp; government guidelines.</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center text-xs text-[#6C7582] font-mono pt-1">
                  Charges mentioned above are per annum and exclusive of applicable taxes.
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* MODULE 2: PRIVATE LIMITED COMPANY REGISTRATION                             */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'pvt-ltd') && (
            <div className="space-y-12 border-b border-[#E2E5EA] pb-16">
              
              {/* Category Header */}
              <div className="bg-[#152232] text-white p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                  CATEGORY 02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  PRIVATE LIMITED COMPANY REGISTRATION
                </h2>
                <p className="text-xs sm:text-sm text-[#D2D6DC]">
                  Start Your Business with Confidence — Complete end-to-end incorporation &amp; registration package.
                </p>
              </div>

              {/* Registration Package Included List */}
              <div className="space-y-4">
                <div className="border-b border-[#E2E5EA] pb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
                    REGISTRATION PACKAGE
                  </h3>
                </div>

                <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#152232] font-semibold">
                    {pvtLtdPackageServices.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-[#FAF9F6] border border-[#E2E5EA]">
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

              {/* Professional Fee Schedule */}
              <div className="space-y-4">
                <div className="border-b border-[#E2E5EA] pb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
                    PROFESSIONAL FEE
                  </h3>
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
                    {pvtLtdFeeBreakdown.map((item, idx) => (
                      <div key={idx} className="p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FAF9F6] transition-colors">
                        <div className="space-y-0.5">
                          <h4 className="text-sm sm:text-base font-bold text-[#152232]">{item.title}</h4>
                          {item.subtitle && <p className="text-xs text-[#6C7582] font-mono">{item.subtitle}</p>}
                        </div>
                        <div className="text-left sm:text-right shrink-0">
                          <span className="text-xs text-[#6C7582] sm:hidden font-mono block">Fee: </span>
                          <span className="text-sm sm:text-base font-mono font-bold text-[#152232]">{item.fee}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total Highlight */}
                  <div className="bg-[#152232] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E2E5EA]">
                    <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider">
                      TOTAL PROFESSIONAL FEE
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                      ₹23,500/-
                    </span>
                  </div>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  <p>Government fees are included only where specifically mentioned in the package.</p>
                  <p className="pt-1 text-[#6C7582]">Any additional statutory charges, if applicable, shall be borne by the client.</p>
                </div>
              </div>

              {/* Documents & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#152232] border-b border-[#E2E5EA] pb-2">
                    DOCUMENTS REQUIRED
                  </h4>
                  <div className="bg-white border border-[#E2E5EA] p-5">
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3D4653]">
                      {pvtLtdRequiredDocs.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#152232] font-bold">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#152232] border-b border-[#E2E5EA] pb-2">
                    DELIVERABLES
                  </h4>
                  <div className="bg-white border border-[#E2E5EA] p-5">
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3D4653]">
                      {pvtLtdDeliverables.map((del, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#152232] font-bold">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Why Choose Us & Process Steps */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#152232] border-b border-[#E2E5EA] pb-2">
                    WHY CHOOSE VYAPAAR SAATHI?
                  </h4>
                  <div className="bg-white border border-[#E2E5EA] p-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#3D4653]">
                      {pvtLtdWhyUs.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#FAF9F6] p-2.5 border border-[#E2E5EA]">
                          <span className="text-[#152232] font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#152232] border-b border-[#E2E5EA] pb-2">
                    REGISTRATION PROCESS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pvtLtdSteps.map((step) => (
                      <div key={step.number} className="bg-white border border-[#E2E5EA] p-4 space-y-1">
                        <span className="text-[11px] font-mono font-bold text-[#6C7582]">STEP {step.number}</span>
                        <h5 className="text-sm font-bold text-[#152232]">{step.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* MODULE 3: REGULAR MONTHLY ACCOUNT & COMPLIANCES                            */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'monthly') && (
            <div className="space-y-12 pb-8">
              
              {/* Category Header */}
              <div className="bg-[#152232] text-white p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                  CATEGORY 03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  REGULAR MONTHLY ACCOUNT &amp; COMPLIANCES
                </h2>
                <p className="text-xs sm:text-sm text-[#D2D6DC]">
                  Complete Monthly Accounting &amp; Statutory Compliance for Private Limited Company.
                </p>
              </div>

              {/* Monthly Compliance Package Table */}
              <div className="space-y-6">
                <div className="border-b border-[#E2E5EA] pb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
                    MONTHLY COMPLIANCE PACKAGE
                  </h3>
                </div>

                <div className="bg-white border border-[#E2E5EA] overflow-hidden">
                  <div className="bg-[#152232] text-white px-5 sm:px-6 py-3.5 hidden md:grid grid-cols-12 gap-4 text-xs font-mono font-bold uppercase tracking-wider">
                    <div className="col-span-3 text-white">SERVICE</div>
                    <div className="col-span-5 text-white">DETAILS / INCLUDES</div>
                    <div className="col-span-4 text-right text-[#9FA9B6]">PACKAGE / CHARGES (₹)</div>
                  </div>

                  <div className="divide-y divide-[#E2E5EA]">
                    
                    {/* Accounting & Bookkeeping */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-[#FAF9F6] transition-colors">
                      <div className="md:col-span-3 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                        <h4 className="text-base font-bold text-[#152232]">Accounting &amp; Bookkeeping</h4>
                      </div>

                      <div className="md:col-span-5 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">DETAILS / INCLUDES</span>
                        <ul className="space-y-1 text-xs text-[#3D4653]">
                          <li className="flex items-center gap-2">• Purchase Entries</li>
                          <li className="flex items-center gap-2">• Sales Entries</li>
                          <li className="flex items-center gap-2">• Expense Entries</li>
                          <li className="flex items-center gap-2">• Journal Entries</li>
                          <li className="flex items-center gap-2">• Bank Entries</li>
                          <li className="flex items-center gap-2">• Bank Reconciliation</li>
                        </ul>
                      </div>

                      <div className="md:col-span-4 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">PACKAGE / CHARGES (₹)</span>
                        <div className="space-y-2">
                          {accountingPackages.map((pkg, idx) => (
                            <div key={idx} className="bg-[#FAF9F6] border border-[#E2E5EA] p-2.5 flex items-center justify-between text-xs">
                              <div>
                                <span className="font-mono font-bold text-[#152232] block">{pkg.name}</span>
                                <span className="text-[11px] text-[#6C7582]">{pkg.entries}</span>
                              </div>
                              <span className="font-mono font-bold text-[#152232]">{pkg.price}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[11px] text-[#6C7582] font-mono text-left md:text-right pt-1">
                          Choose your package as per number of entries
                        </p>
                      </div>
                    </div>

                    {/* GST Compliance */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors">
                      <div className="md:col-span-3 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                        <h4 className="text-base font-bold text-[#152232]">GST Compliance</h4>
                      </div>

                      <div className="md:col-span-5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">DETAILS / INCLUDES</span>
                        <ul className="space-y-1 text-xs text-[#3D4653]">
                          <li className="flex items-center gap-2">• GSTR-1 Filing</li>
                          <li className="flex items-center gap-2">• GSTR-3B Filing</li>
                          <li className="flex items-center gap-2">• ITC Reconciliation</li>
                          <li className="flex items-center gap-2">• GST Consultation</li>
                        </ul>
                      </div>

                      <div className="md:col-span-4 text-left md:text-right">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">PACKAGE / CHARGES (₹)</span>
                        <span className="text-xs text-[#6C7582] font-mono block">Professional fee:</span>
                        <span className="text-base font-mono font-bold text-[#152232]">₹1,500/- per Month</span>
                      </div>
                    </div>

                    {/* TDS Compliance */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors">
                      <div className="md:col-span-3 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                        <h4 className="text-base font-bold text-[#152232]">TDS Compliance</h4>
                      </div>

                      <div className="md:col-span-5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">DETAILS / INCLUDES</span>
                        <ul className="space-y-1 text-xs text-[#3D4653]">
                          <li className="flex items-center gap-2">• TDS Working</li>
                          <li className="flex items-center gap-2">• TDS Return Filing</li>
                          <li className="flex items-center gap-2">• Form 16 / 16A Support</li>
                          <li className="flex items-center gap-2">• TDS Reconciliation</li>
                        </ul>
                      </div>

                      <div className="md:col-span-4 text-left md:text-right">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">PACKAGE / CHARGES (₹)</span>
                        <span className="text-xs text-[#6C7582] font-mono block">Professional fee:</span>
                        <span className="text-base font-mono font-bold text-[#152232]">₹2,500/- per Month</span>
                      </div>
                    </div>

                    {/* Financial Reporting */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors">
                      <div className="md:col-span-3 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                        <h4 className="text-base font-bold text-[#152232]">Financial Reporting</h4>
                      </div>

                      <div className="md:col-span-5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">DETAILS / INCLUDES</span>
                        <ul className="space-y-1 text-xs text-[#3D4653]">
                          <li className="flex items-center gap-2">• Profit &amp; Loss Account</li>
                          <li className="flex items-center gap-2">• Balance Sheet</li>
                          <li className="flex items-center gap-2">• MIS Reports</li>
                          <li className="flex items-center gap-2">• Cash Flow Summary</li>
                        </ul>
                      </div>

                      <div className="md:col-span-4 text-left md:text-right">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">PACKAGE / CHARGES (₹)</span>
                        <span className="text-base font-mono font-bold text-[#152232] block">NO CHARGES</span>
                        <span className="text-xs text-[#6C7582] font-mono block">Included in Monthly Package</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Total Monthly Compliance Summary Block */}
              <div className="bg-[#152232] text-white p-6 sm:p-8 space-y-2 border-2 border-[#152232]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                      COMBINED COMPLIANCE BASELINE
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      TOTAL MONTHLY COMPLIANCE
                    </h4>
                    <p className="text-xs text-[#D2D6DC]">
                      (Accounting + GST)
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-[#9FA9B6] block">Starting from:</span>
                    <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                      ₹3,500/- <span className="text-xs font-sans font-normal text-[#D2D6DC]">per Month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offer Section */}
              <div className="space-y-6">
                <div className="border-b border-[#E2E5EA] pb-3 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    PROMOTIONAL MONTHLY DISCOUNTS
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
                    SPECIAL OFFER FOR BUSINESSES
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {specialOfferTiers.map((offer, idx) => (
                    <div key={idx} className="bg-white border border-[#E2E5EA] p-6 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#152232] block">{offer.period}</span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#152232] text-white px-2 py-0.5">
                            {offer.discount}
                          </span>
                        </div>

                        <div className="pt-2 space-y-0.5">
                          <div className="text-2xl font-mono font-bold text-[#152232]">{offer.price}</div>
                          <div className="text-xs text-[#6C7582] font-mono">{offer.original}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get Every Month & Statutory Note */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#152232] border-b border-[#E2E5EA] pb-2">
                    WHAT YOU GET EVERY MONTH
                  </h4>
                  <div className="bg-white border border-[#E2E5EA] p-5">
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3D4653]">
                      {monthlyWhatYouGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#152232] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#152232] border-b border-[#E2E5EA] pb-2">
                    FEE &amp; STATUTORY NOTE
                  </h4>
                  <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-5 text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                    <span className="font-semibold text-[#152232] block">Statutory Charges Notice:</span>
                    <p>
                      Government Fees / Stamp Duty / Professional Fees (if any) will be charged extra as applicable.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* RESTRAINED GLOBAL CALL TO ACTION                                          */}
          {/* ========================================================================= */}
          <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-6 sm:p-10 text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
              Need Assistance with Your Engagement Scope or Custom Package?
            </h3>
            <p className="text-xs sm:text-sm text-[#3D4653] max-w-xl mx-auto leading-relaxed">
              Consult directly with our senior accounting team to discuss corporate incorporation, annual compliance filings, or monthly retainer arrangements.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
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
