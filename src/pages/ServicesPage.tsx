import React from 'react';
import { SERVICES_LIST } from '../data/firmData';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FileUp, Calendar } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              FULL PRACTICE CATALOG
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Services Catalog
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Factual scope descriptions for our core accounting, tax filing, and commercial business compliance offerings.
            </p>
          </div>
        </div>
      </section>

      {/* 9 Services Editorial Grid */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {SERVICES_LIST.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="bg-white border border-[#E2E5EA] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#152232] transition-colors"
              >
                <div className="space-y-4">
                  {/* Number & Service Name Header */}
                  <div className="flex items-baseline justify-between border-b border-[#E2E5EA] pb-3">
                    <span className="text-xs font-mono font-bold text-[#152232]">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582]">
                      CORE OFFERING
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-[#152232] tracking-tight">
                    {service.name}
                  </h2>

                  {/* Factual Description */}
                  <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Covered Entities for Service #07 Business Registration */}
                  {service.subTypes && service.subTypes.length > 0 && (
                    <div className="pt-2 border-t border-[#E2E5EA] space-y-2">
                      <span className="text-[11px] font-mono text-[#6C7582] uppercase block">
                        Covered Business Entities:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#152232] font-semibold">
                        {service.subTypes.map((type) => (
                          <div key={type} className="flex items-center gap-2 bg-[#FAF9F6] p-2 border border-[#E2E5EA]">
                            <span className="w-1.5 h-1.5 bg-[#152232] inline-block"></span>
                            <span>{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-[#E2E5EA] flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={`/book-consultation?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#152232] hover:text-[#2B3747] min-h-[38px]"
                  >
                    <Calendar size={14} />
                    <span>Book Consultation</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  <Link
                    to={`/upload-documents?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A525D] hover:text-[#152232] min-h-[38px]"
                  >
                    <FileUp size={14} />
                    <span>Submit Documents</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
