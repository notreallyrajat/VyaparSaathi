import React from 'react';
import { SERVICES_LIST } from '../data/firmData';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, ShieldCheck } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              FEE STRUCTURE &amp; ESTIMATES
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Pricing &amp; Fee Schedule
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Transparent baseline professional fees for accounting, return filing, and compliance engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Important Disclosure Banner */}
          <div className="bg-white border border-[#E2E5EA] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info size={18} className="text-[#152232] shrink-0 mt-0.5" />
              <div className="text-xs text-[#3D4653] leading-relaxed">
                <strong className="text-[#152232] font-semibold">Pricing Note:</strong> All fees below are indicative baseline estimates (`₹[Amount]`). Final professional fees are determined after evaluating business entity constitution, monthly invoice volume, and transaction complexity.
              </div>
            </div>
          </div>

          {/* 9 Services Fee Table */}
          <div className="bg-white border border-[#E2E5EA] overflow-hidden">
            <div className="bg-[#152232] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                  STANDARD SCHEDULE
                </span>
                <h2 className="text-base font-bold">Service Fee Baseline</h2>
              </div>
              <span className="text-xs font-mono text-[#9FA9B6]">ESTIMATED BASELINE</span>
            </div>

            <div className="divide-y divide-[#E2E5EA]">
              {SERVICES_LIST.map((srv) => (
                <div
                  key={srv.id}
                  className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#FAF9F6] transition-colors"
                >
                  <div className="md:col-span-1 text-xs font-mono font-bold text-[#6C7582]">
                    {srv.number}
                  </div>

                  <div className="md:col-span-6 space-y-1">
                    <h3 className="text-base font-bold text-[#152232]">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-[#3D4653] leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="md:col-span-3 text-left md:text-right">
                    <span className="text-xs text-[#6C7582] block font-mono">Baseline Fee:</span>
                    <span className="text-base font-mono font-bold text-[#152232]">
                      ₹[Amount]
                    </span>
                    <span className="text-[10px] text-[#6C7582] block">or Price on Inquiry</span>
                  </div>

                  <div className="md:col-span-2 flex justify-start md:justify-end pt-2 md:pt-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#152232] hover:text-[#2B3747] border border-[#152232] min-h-[36px] px-3 transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retainer Tiers Section */}
          <div className="space-y-4">
            <div className="border-b border-[#E2E5EA] pb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6C7582] block">
                MONTHLY RETAINERS
              </span>
              <h2 className="text-xl font-bold text-[#152232]">
                Ongoing Monthly Retainer Tiers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white border border-[#E2E5EA] p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    TIER 01
                  </span>
                  <h3 className="text-lg font-bold text-[#152232]">Essential Retainer</h3>
                  <div className="text-2xl font-mono font-bold text-[#152232]">
                    ₹[Amount] <span className="text-xs font-sans font-normal text-[#6C7582]">/ month</span>
                  </div>
                  <p className="text-xs text-[#3D4653] leading-relaxed">
                    Designed for small proprietorships with low transaction volume requiring standard GST filing and basic ledger entry.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="w-full text-center text-xs font-semibold uppercase tracking-wider text-[#152232] bg-[#FAF9F6] border border-[#152232] min-h-[40px] flex items-center justify-center hover:bg-[#EFEFEA]"
                >
                  Request Quote
                </Link>
              </div>

              <div className="bg-white border-2 border-[#152232] p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#152232] font-bold block">
                      TIER 02
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#152232] text-white px-2 py-0.5">
                      COMMERCIAL
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#152232]">Commercial Retainer</h3>
                  <div className="text-2xl font-mono font-bold text-[#152232]">
                    ₹[Amount] <span className="text-xs font-sans font-normal text-[#6C7582]">/ month</span>
                  </div>
                  <p className="text-xs text-[#3D4653] leading-relaxed">
                    Structured bookkeeping, monthly GST returns, TDS calculation, and quarterly financial statement updates.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="w-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#152232] min-h-[40px] flex items-center justify-center hover:bg-[#2B3747]"
                >
                  Request Quote
                </Link>
              </div>

              <div className="bg-white border border-[#E2E5EA] p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    TIER 03
                  </span>
                  <h3 className="text-lg font-bold text-[#152232]">Corporate Retainer</h3>
                  <div className="text-2xl font-mono font-bold text-[#152232]">
                    Price on Inquiry
                  </div>
                  <p className="text-xs text-[#3D4653] leading-relaxed">
                    Full corporate accounting, multi-user ledger management, company compliance filings, and dedicated notice assistance.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="w-full text-center text-xs font-semibold uppercase tracking-wider text-[#152232] bg-[#FAF9F6] border border-[#152232] min-h-[40px] flex items-center justify-center hover:bg-[#EFEFEA]"
                >
                  Request Quote
                </Link>
              </div>

            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6C7582]">
            <ShieldCheck size={16} className="text-[#152232] shrink-0" />
            <span>All billing details are explicitly confirmed prior to engagement start. No hidden fee structures.</span>
          </div>

        </div>
      </section>

    </div>
  );
};
