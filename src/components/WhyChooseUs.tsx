import React from 'react';
import { WHY_CHOOSE_US_LIST } from '../data/firmData';
import { WhyChooseUsItem } from '../types';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-24 border-b border-[#E2E5EA] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-3 mb-10 sm:mb-16 border-b border-[#E2E5EA] pb-6 sm:pb-8">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
            PRACTICE COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#152232]">
            Why Choose Us?
          </h2>
          <p className="text-xs sm:text-base text-[#3D4653] leading-relaxed">
            Straightforward principles that define how we deliver accounting and compliance services.
          </p>
        </div>

        {/* 5 Points Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_LIST.map((item: WhyChooseUsItem) => (
            <div
              key={item.number}
              className="bg-white border border-[#E2E5EA] p-5 sm:p-7 flex flex-col justify-between space-y-4 hover:border-[#152232] transition-colors"
            >
              <div className="space-y-3">
                {/* Number & Title */}
                <div className="flex items-center justify-between border-b border-[#E2E5EA] pb-3">
                  <span className="text-xs font-mono font-bold text-[#152232]">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582]">
                    PRINCIPLE
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#152232] tracking-tight">
                  {item.title}
                </h3>

                {/* One Concise Sentence Description */}
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal Accent Bar */}
              <div className="w-6 h-0.5 bg-[#152232] pt-0.5"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
