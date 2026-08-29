import React from 'react';
import { PROCESS_STEPS } from '../data/firmData';
import { ProcessStep } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-24 border-b border-[#E2E5EA] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
            HOW WE HELP
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#152232]">
            A structured engagement process built for clarity.
          </h2>
          <p className="text-xs sm:text-base text-[#3D4653] leading-relaxed">
            From initial review to regular bookkeeping, every stage follows a predictable, transparent workflow.
          </p>
        </div>

        {/* 3 Step Process Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step: ProcessStep, index: number) => (
            <div
              key={step.number}
              className="bg-white border border-[#E2E5EA] p-5 sm:p-7 flex flex-col justify-between space-y-5 relative group hover:border-[#152232] transition-colors"
            >
              {/* Step Top Bar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E5EA] pb-3.5">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#152232]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582]">
                    STAGE 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-[#5B6574] block mt-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Key Outputs */}
              <div className="pt-4 border-t border-[#E2E5EA] space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6C7582] block">
                  KEY OUTPUTS
                </span>
                <ul className="space-y-2">
                  {step.keyOutputs.map((output, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#2B3747]">
                      <CheckCircle2 size={13} className="text-[#152232] shrink-0" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Process Guarantee Banner */}
        <div className="mt-8 sm:mt-12 bg-white border border-[#E2E5EA] p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs sm:text-sm font-bold text-[#152232] uppercase tracking-wider block">
              Need immediate assistance with backlog billing or GST filings?
            </span>
            <p className="text-xs text-[#5B6574]">
              We offer rapid account reconciliation for businesses transitioning from informal bookkeeping.
            </p>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#152232] hover:bg-[#2B3747] text-white min-h-[44px] px-6 transition-colors"
          >
            <span>Discuss Your Accounts</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

