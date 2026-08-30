import React from 'react';
import { Link } from 'react-router-dom';
import { FIRM_DETAILS } from '../data/firmData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152232] text-white pt-10 sm:pt-12 pb-8 pb-safe border-t border-[#2B3747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Description (4 Cols on Desktop) */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Vyapar Saathi Logo"
                className="w-8 h-8 object-contain shrink-0 bg-white p-0.5"
              />
              <div className="min-w-0">
                <span className="text-base font-bold tracking-tight block truncate group-hover:text-[#D2D6DC] transition-colors">
                  {FIRM_DETAILS.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block truncate">
                  {FIRM_DETAILS.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#9FA9B6] leading-relaxed max-w-md">
              Professional accounting, GST billing, bookkeeping, and business documentation support for commercial entities, proprietorships, and growing enterprises.
            </p>
          </div>

          {/* Core Navigation Links (3 Cols on Desktop) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9FA9B6] block">
              PRACTICE NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-[#D2D6DC]">
              <li>
                <Link to="/" className="hover:text-white transition-colors py-0.5 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors py-0.5 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors py-0.5 inline-block">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors py-0.5 inline-block">
                  Pricing Schedule
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors py-0.5 inline-block">
                  Tax &amp; Accounting Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors py-0.5 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Utilities (2 Cols on Desktop) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9FA9B6] block">
              CLIENT UTILITIES
            </span>
            <ul className="space-y-2 text-xs text-[#D2D6DC]">
              <li>
                <Link to="/login" className="hover:text-white transition-colors py-0.5 inline-block">
                  Client Portal / Login
                </Link>
              </li>
              <li>
                <Link to="/upload-documents" className="hover:text-white transition-colors py-0.5 inline-block">
                  Upload Documents
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-white transition-colors py-0.5 inline-block">
                  Make Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Office Contacts (3 Cols on Desktop) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9FA9B6] block">
              OFFICE LOCATION
            </span>
            <p className="text-xs text-[#D2D6DC] leading-relaxed">
              {FIRM_DETAILS.address}
            </p>
            <div className="pt-1 text-xs font-mono text-[#D2D6DC] space-y-1">
              <div>Phone: <a href={`tel:${FIRM_DETAILS.phone}`} className="hover:underline">{FIRM_DETAILS.phone}</a></div>
              <div>Email: <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:underline">{FIRM_DETAILS.email}</a></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar, Legal Links & Disclaimer */}
        <div className="pt-6 border-t border-[#2D3848] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9FA9B6]">
          <div>
            © {new Date().getFullYear()} {FIRM_DETAILS.fullName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#4A525D]">•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
