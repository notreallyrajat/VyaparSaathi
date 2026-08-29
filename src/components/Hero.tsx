import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileCheck2, Calculator } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenCalculator?: () => void;
  onOpenChecklist?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, onOpenChecklist }) => {
  return (
    <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24 border-b border-[#E2E5EA] bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Editorial Copy Column (7 Cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFEFEA] border border-[#D8DBE0]">
                <span className="w-1.5 h-1.5 bg-[#152232]"></span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#4A525D]">
                  Accounting &amp; Financial Services
                </span>
              </div>

              {/* Responsive Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#152232] leading-[1.18] sm:leading-[1.15]">
                Clear accounting. <br className="hidden sm:inline" />
                <span className="font-normal text-[#2B3747]">Reliable financial support.</span>
              </h1>

              {/* Concise Supporting Sentence */}
              <p className="text-sm sm:text-base lg:text-lg text-[#3D4653] leading-relaxed max-w-2xl">
                We assist growing businesses, proprietary firms, and enterprise clients with billing management, GST compliance, daily bookkeeping, and structured financial documentation.
              </p>
            </div>

            {/* CTAs & Touch-Friendly Control Group */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors focus:outline-none"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EFEFEA] text-[#152232] text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors focus:outline-none"
                >
                  <span>View Services</span>
                </a>

                {onOpenCalculator && (
                  <button
                    onClick={onOpenCalculator}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A525D] hover:text-[#152232] min-h-[44px] px-4 border border-[#D5D8DE] hover:border-[#152232] bg-white transition-colors"
                  >
                    <Calculator size={15} />
                    <span>Estimate Scope</span>
                  </button>
                )}
              </div>

              {/* Verified Practice Scope Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-[#E2E5EA]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#4A525D]">
                  <CheckCircle2 size={14} className="text-[#152232] shrink-0" />
                  <span>GST Billing &amp; Returns</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#4A525D]">
                  <CheckCircle2 size={14} className="text-[#152232] shrink-0" />
                  <span>Routine Bookkeeping</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#4A525D]">
                  <CheckCircle2 size={14} className="text-[#152232] shrink-0" />
                  <span>Income Tax &amp; GST Filings</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Practice Summary Panel (5 Cols on Desktop) */}
          <div className="lg:col-span-5 bg-white border border-[#E2E5EA] p-5 sm:p-7 flex flex-col justify-between space-y-5">
            
            {/* Header of Panel */}
            <div className="border-b border-[#E2E5EA] pb-3.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#6C7582] block">
                  PRACTICE OVERVIEW
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#152232]">
                  Operational Parameters
                </span>
              </div>
              <div className="w-2 h-2 bg-[#152232]"></div>
            </div>

            {/* Fact Rows */}
            <div className="space-y-3 text-xs sm:text-sm divide-y divide-[#E2E5EA]">
              <div className="pt-2 flex flex-row items-center justify-between gap-2">
                <span className="text-[#6C7582] font-medium shrink-0">Core Focus</span>
                <span className="font-semibold text-[#152232] text-right truncate">GST &amp; Commercial Bookkeeping</span>
              </div>
              
              <div className="pt-2.5 flex flex-row items-center justify-between gap-2">
                <span className="text-[#6C7582] font-medium shrink-0">Location</span>
                <span className="font-semibold text-[#152232] text-right truncate">Jaipur &amp; Regional Offices</span>
              </div>

              <div className="pt-2.5 flex flex-row items-center justify-between gap-2">
                <span className="text-[#6C7582] font-medium shrink-0">Client Format</span>
                <span className="font-semibold text-[#152232] text-right truncate">Proprietorships, LLPs, Pvt Ltd</span>
              </div>

              <div className="pt-2.5 flex flex-row items-center justify-between gap-2">
                <span className="text-[#6C7582] font-medium shrink-0">Filing Rhythm</span>
                <span className="font-semibold text-[#152232] text-right truncate">Monthly / Quarterly / Annual</span>
              </div>

              <div className="pt-2.5 flex flex-row items-center justify-between gap-2">
                <span className="text-[#6C7582] font-medium shrink-0">Direct Line</span>
                <span className="font-mono text-xs font-semibold text-[#152232] truncate">{FIRM_DETAILS.phone}</span>
              </div>
            </div>

            {/* Action Box inside Panel */}
            <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-3.5 space-y-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#152232] shrink-0" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#152232]">
                  Client Confidentiality Guarantee
                </span>
              </div>
              <p className="text-xs text-[#5B6574] leading-normal">
                All client ledgers, bank statements, and business documentation are maintained under strict non-disclosure compliance.
              </p>
              
              {onOpenChecklist && (
                <button
                  onClick={onOpenChecklist}
                  className="w-full mt-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#152232] hover:underline pt-1 min-h-[36px]"
                >
                  <FileCheck2 size={13} />
                  <span>View Onboarding Document Checklist →</span>
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

