import React from 'react';
import { FIRM_DETAILS } from '../data/firmData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152232] text-white pt-10 sm:pt-12 pb-8 pb-safe border-t border-[#2B3747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Description (5 Cols on Desktop) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-[#152232] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                VS
              </div>
              <div className="min-w-0">
                <span className="text-base font-bold tracking-tight block truncate">
                  {FIRM_DETAILS.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block truncate">
                  {FIRM_DETAILS.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9FA9B6] leading-relaxed max-w-md">
              Professional accounting, GST billing, bookkeeping, and business documentation support for commercial entities, proprietorships, and growing enterprises.
            </p>
          </div>

          {/* Quick Navigation Links (3 Cols on Desktop) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9FA9B6] block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-[#D2D6DC]">
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  Services &amp; Deliverables
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors py-1 inline-block">
                  Engagement Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors py-1 inline-block">
                  About the Practice
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors py-1 inline-block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors py-1 inline-block">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Office Contacts (4 Cols on Desktop) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9FA9B6] block">
              OFFICE LOCATION
            </span>
            <p className="text-xs text-[#D2D6DC] leading-relaxed">
              {FIRM_DETAILS.address}
            </p>
            <div className="pt-2 text-xs font-mono text-[#D2D6DC] space-y-1">
              <div>Phone: <a href={`tel:${FIRM_DETAILS.phone}`} className="hover:underline">{FIRM_DETAILS.phone}</a></div>
              <div>Email: <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:underline">{FIRM_DETAILS.email}</a></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-6 border-t border-[#2D3848] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9FA9B6]">
          <div>
            © {new Date().getFullYear()} {FIRM_DETAILS.fullName}. All rights reserved.
          </div>

          <div className="text-[11px] text-[#9FA9B6] text-center sm:text-right">
            Professional accounting practice. Standard client data confidentiality maintained.
          </div>
        </div>

      </div>
    </footer>
  );
};

