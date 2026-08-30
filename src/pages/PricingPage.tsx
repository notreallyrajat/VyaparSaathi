import React from 'react';
import { Link } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const annualComplianceServices = [
    {
      title: 'ROC Annual Compliance',
      subtitle: '(AOC-4 + MGT-7 / MGT-7A)',
      fee: '₹6,000/-',
    },
    {
      title: 'Company Income Tax Return (ITR)',
      fee: '₹3,000/- onwards',
    },
    {
      title: 'Tax Audit',
      subtitle: '(Under Income Tax Act)',
      fee: 'As Per Audit Scope',
    },
    {
      title: 'Statutory Audit',
      subtitle: '(Under Companies Act, 2013)',
      fee: 'As Per Audit Scope',
    },
    {
      title: 'Annual GST Return',
      subtitle: '(GSTR-9 / GSTR-9C, if applicable)',
      fee: '₹2,500/- onwards',
    },
    {
      title: 'Director KYC',
      subtitle: '(DIR-3 KYC)',
      fee: '₹600/- per Director',
    },
    {
      title: 'Audit Coordination & Compliance Support',
      fee: '₹2,000/-',
    },
  ];

  const eventBasedRocServices = [
    { title: 'Change in Director', fee: '₹2,500/-' },
    { title: 'Change in Registered Office', fee: '₹2,500/-' },
    { title: 'Increase in Authorised Capital', fee: '₹2,500/-' },
    { title: 'Share Transfer', fee: '₹1,500/-' },
    { title: 'Share Allotment', fee: '₹1,500/-' },
    { title: 'Company Name Change', fee: '₹3,500/-' },
  ];

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Page Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              OFFICIAL FEE SCHEDULE
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Pricing &amp; Professional Fees
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Transparent, professional fee schedule for annual business compliance and event-based ROC filings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Content Section */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* ================================================== */}
          {/* 1. ANNUAL COMPLIANCE PACKAGE                       */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                Yearly Compliance – One Time in a Year
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                ANNUAL COMPLIANCE PACKAGE
              </h2>
            </div>

            {/* Annual Compliance Table */}
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
                      <h3 className="text-sm sm:text-base font-bold text-[#152232]">
                        {srv.title}
                      </h3>
                      {srv.subtitle && (
                        <p className="text-xs text-[#6C7582] font-mono">
                          {srv.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-[#6C7582] sm:hidden font-mono block">Fee: </span>
                      <span className="text-sm sm:text-base font-mono font-bold text-[#152232]">
                        {srv.fee}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Annual Package Block */}
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
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                    ANNUAL COMPLIANCE PACKAGE (COMBINED)
                  </h3>
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

          {/* ================================================== */}
          {/* 2. EVENT BASED ROC SERVICES                        */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                As Per Requirement
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                EVENT BASED ROC SERVICES
              </h2>
            </div>

            {/* Event Based ROC Table */}
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
                    <h3 className="text-sm sm:text-base font-bold text-[#152232]">
                      {srv.title}
                    </h3>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-[#6C7582] sm:hidden font-mono block">Fee: </span>
                      <span className="text-sm sm:text-base font-mono font-bold text-[#152232]">
                        {srv.fee}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Payment / Fee Note */}
            <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs sm:text-sm text-[#3D4653]">
              <span className="font-semibold text-[#152232]">Note: </span>
              <span>Government Fees, Stamp Duty &amp; MCA Filing Fees will be charged extra wherever applicable.</span>
            </div>
          </div>

          {/* ================================================== */}
          {/* IMPORTANT NOTES & DISCLAIMER                       */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#152232] font-bold border-b border-[#E2E5EA] pb-3">
                IMPORTANT NOTES
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#152232] font-bold select-none">•</span>
                  <span>Tax Audit &amp; Statutory Audit fees depend on turnover, nature of business and scope of work.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#152232] font-bold select-none">•</span>
                  <span>GST Annual Return fees may vary based on transaction volume and reconciliation requirements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#152232] font-bold select-none">•</span>
                  <span>All services will be provided as per applicable laws, rules &amp; government guidelines.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Note Disclaimer */}
            <div className="text-center text-xs sm:text-sm text-[#6C7582] font-mono pt-2">
              Charges mentioned above are per annum and exclusive of applicable taxes.
            </div>
          </div>

          {/* ================================================== */}
          {/* RESTRAINED CALL TO ACTION                          */}
          {/* ================================================== */}
          <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-6 sm:p-10 text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
              Need Assistance with Your Business Compliance Setup?
            </h3>
            <p className="text-xs sm:text-sm text-[#3D4653] max-w-xl mx-auto leading-relaxed">
              Consult directly with our accounting team to evaluate your company scope and annual filing requirements.
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
