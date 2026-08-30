import React from 'react';
import { Link } from 'react-router-dom';

export const MonthlyCompliancePage: React.FC = () => {
  const accountingPackages = [
    { name: 'BASIC', entries: 'Up to 50 Entries', price: '₹2,000/- per Month' },
    { name: 'STANDARD', entries: 'Up to 100 Entries', price: '₹3,000/- per Month' },
    { name: 'PREMIUM', entries: 'Up to 500 Entries', price: '₹7,000/- per Month' },
    { name: 'ADVANCE', entries: 'Up to 1000 Entries', price: '₹10,000/- per Month' },
  ];

  const whatYouGetEveryMonth = [
    'Timely Return Filing',
    'Dedicated Support',
    'Accurate Accounting',
    'Complete Data Security',
    'Better Business Insights',
  ];

  const specialOfferTiers = [
    {
      period: 'FIRST 4 MONTH',
      discount: '30% DISCOUNT',
      price: '₹2,450/- per Month',
      original: '(Instead of ₹3,500/-)',
    },
    {
      period: 'NEXT 4 MONTH',
      discount: '15% DISCOUNT',
      price: '₹2,975/- per Month',
      original: '(Instead of ₹3,500/-)',
    },
    {
      period: 'AFTER 8 MONTH',
      discount: 'NORMAL RATES',
      price: '₹3,500/- per Month',
      original: '(No Discount)',
    },
  ];

  const approvedRelatedServices = [
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
    {
      title: 'Company Registration',
      description: 'Complete Private Limited Company incorporation package.',
    },
  ];

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Page Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              MONTHLY RETAINER &amp; ENGAGEMENT SCHEDULE
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              REGULAR MONTHLY ACCOUNT &amp; COMPLIANCES
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] font-medium leading-relaxed">
              Complete Monthly Accounting &amp; Statutory Compliance for Private Limited Company
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* ================================================== */}
          {/* 1. MONTHLY COMPLIANCE PACKAGE                      */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                Structured Monthly Retainer Breakdown
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                MONTHLY COMPLIANCE PACKAGE
              </h2>
            </div>

            {/* Desktop / Responsive Package Table */}
            <div className="bg-white border border-[#E2E5EA] overflow-hidden">
              <div className="bg-[#152232] text-white px-5 sm:px-6 py-3.5 hidden md:grid grid-cols-12 gap-4 text-xs font-mono font-bold uppercase tracking-wider">
                <div className="col-span-3 text-white">SERVICE</div>
                <div className="col-span-5 text-white">DETAILS / INCLUDES</div>
                <div className="col-span-4 text-right text-[#9FA9B6]">PACKAGE / CHARGES (₹)</div>
              </div>

              <div className="divide-y divide-[#E2E5EA]">
                
                {/* 1. Accounting & Bookkeeping */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-[#FAF9F6] transition-colors">
                  <div className="md:col-span-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                    <h3 className="text-base font-bold text-[#152232]">Accounting &amp; Bookkeeping</h3>
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

                  <div className="md:col-span-4 space-y-3">
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
                    <p className="text-[11px] text-[#6C7582] font-mono text-left md:text-right">
                      Choose your package as per number of entries
                    </p>
                  </div>
                </div>

                {/* 2. GST Compliance */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors">
                  <div className="md:col-span-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                    <h3 className="text-base font-bold text-[#152232]">GST Compliance</h3>
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

                {/* 3. TDS Compliance */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors">
                  <div className="md:col-span-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                    <h3 className="text-base font-bold text-[#152232]">TDS Compliance</h3>
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

                {/* 4. Financial Reporting */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors">
                  <div className="md:col-span-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block md:hidden">SERVICE</span>
                    <h3 className="text-base font-bold text-[#152232]">Financial Reporting</h3>
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

          {/* ================================================== */}
          {/* 2. TOTAL MONTHLY COMPLIANCE                         */}
          {/* ================================================== */}
          <div className="bg-[#152232] text-white p-6 sm:p-8 space-y-2 border-2 border-[#152232]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                  COMBINED COMPLIANCE BASELINE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  TOTAL MONTHLY COMPLIANCE
                </h3>
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

          {/* ================================================== */}
          {/* 3. SPECIAL OFFER FOR BUSINESSES                    */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C7582] block">
                PROMOTIONAL MONTHLY DISCOUNTS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                SPECIAL OFFER FOR BUSINESSES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialOfferTiers.map((offer, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E5EA] p-6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#152232] block">
                        {offer.period}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#152232] text-white px-2 py-0.5">
                        {offer.discount}
                      </span>
                    </div>

                    <div className="pt-2 space-y-0.5">
                      <div className="text-2xl font-mono font-bold text-[#152232]">
                        {offer.price}
                      </div>
                      <div className="text-xs text-[#6C7582] font-mono">
                        {offer.original}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================== */}
          {/* 4. WHAT YOU GET EVERY MONTH & 5. ADDITIONAL FEE     */}
          {/* ================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What You Get Every Month */}
            <div className="space-y-4">
              <div className="border-b border-[#E2E5EA] pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                  WHAT YOU GET EVERY MONTH
                </h2>
              </div>

              <div className="bg-white border border-[#E2E5EA] p-6 space-y-3">
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D4653]">
                  {whatYouGetEveryMonth.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#152232] font-bold select-none">•</span>
                      <span className="font-medium text-[#152232]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Fee Note */}
            <div className="space-y-4">
              <div className="border-b border-[#E2E5EA] pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                  FEE &amp; STATUTORY NOTE
                </h2>
              </div>

              <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-6 space-y-2 text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                <span className="font-semibold text-[#152232] block">Statutory Charges Notice:</span>
                <p>
                  Government Fees / Stamp Duty / Professional Fees (if any) will be charged extra as applicable.
                </p>
              </div>
            </div>

          </div>

          {/* ================================================== */}
          {/* 6. RELATED SERVICES                                */}
          {/* ================================================== */}
          <div className="space-y-6">
            <div className="border-b border-[#E2E5EA] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#152232] tracking-tight">
                OUR RELATED SERVICES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {approvedRelatedServices.map((srv, idx) => (
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
          {/* CTA                                                */}
          {/* ================================================== */}
          <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-6 sm:p-10 text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#152232]">
              Set Up Your Monthly Accounting &amp; Compliance Retainer
            </h3>
            <p className="text-xs sm:text-sm text-[#3D4653] max-w-xl mx-auto leading-relaxed">
              Consult with our compliance specialists to select the optimal retainer package for your transaction volume.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?service=Regular%20Monthly%20Account%20%26%20Compliances"
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
