import React from 'react';
import { SERVICES_LIST } from '../data/firmData';
import { ServiceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForInquiry,
}) => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 border-b border-[#E2E5EA] bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-16 border-b border-[#E2E5EA] pb-6 sm:pb-8">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              PRACTICE SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#152232]">
              Services
            </h2>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Professional accounting, tax and business compliance services.
            </p>
          </div>
        </div>

        {/* 9 Services Structured Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-10">
          {SERVICES_LIST.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="border-b border-[#E2E5EA] pb-6 sm:pb-8 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5">
                {/* Number & Service Name Header */}
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono font-bold text-[#6C7582] shrink-0">
                    {service.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#152232] tracking-tight">
                    {service.name}
                  </h3>
                </div>

                {/* Short Factual Description */}
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed pl-7">
                  {service.description}
                </p>

                {/* Sub-types for Business Registration (#07) */}
                {service.subTypes && service.subTypes.length > 0 && (
                  <div className="pl-7 pt-1">
                    <span className="text-[11px] font-mono text-[#6C7582] block mb-1">
                      Covered Entities:
                    </span>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-[#152232] font-medium">
                      {service.subTypes.map((type) => (
                        <li key={type} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#152232] inline-block rounded-full"></span>
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Enquiry Trigger */}
              <div className="pl-7 pt-1">
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForInquiry?.(service.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#152232] hover:text-[#2B3747] py-1 transition-colors min-h-[38px]"
                >
                  <span>Enquire Service</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
