import React from 'react';
import { FIRM_DETAILS } from '../data/firmData';
import { Phone, MapPin, ShieldCheck, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              PRACTICE OVERVIEW
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              About Us
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Professional accounting, tax compliance, and commercial bookkeeping services for small businesses and commercial entities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Brief Introduction */}
              <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                  01 — FIRM PROFILE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#152232]">
                  Who We Are
                </h2>
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  <strong>{FIRM_DETAILS.fullName}</strong> is an accounting and financial services firm focused on providing systematic bookkeeping, GST filing, income tax compliance, and business registration support.
                </p>
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  We maintain organized ledgers and ensure periodic compliance filings are completed accurately and on schedule.
                </p>
              </div>

              {/* 2. What The Firm Does */}
              <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                  02 — CORE CAPABILITIES
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#152232]">
                  What We Do
                </h2>
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  Our practice handles routine daily and periodic financial management for sole proprietorships, partnerships, LLPs, and companies:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2B3747]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#152232] shrink-0 mt-0.5" />
                    <span>Income Tax Return (ITR) filing for individuals and corporate entities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#152232] shrink-0 mt-0.5" />
                    <span>GST registration, GSTR-1 &amp; GSTR-3B return processing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#152232] shrink-0 mt-0.5" />
                    <span>Systematic ledger entry, bank statement reconciliation, and bookkeeping</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#152232] shrink-0 mt-0.5" />
                    <span>TDS calculation, return preparation, and certificate generation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#152232] shrink-0 mt-0.5" />
                    <span>Business constitution setup (Proprietorship, Partnership, LLP, Company)</span>
                  </li>
                </ul>
              </div>

              {/* 3. Professional Approach */}
              <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                  03 — WORK METHODOLOGY
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#152232]">
                  Professional Approach
                </h2>
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  We believe commercial accounting functions best when transaction records are systematically processed month by month. Our approach centers on clear document organization, advance filing preparation, and direct communication when accounting queries arise.
                </p>
              </div>

              {/* 4. Accounting, Taxation & Compliance Focus */}
              <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                  04 — PRACTICE FOCUS
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#152232]">
                  Accounting &amp; Compliance Focus
                </h2>
                <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed">
                  Our daily focus is dedicated strictly to commercial accounting, tax return filing, statutory business setup, and periodic ledger maintenance.
                </p>
              </div>

            </div>

            {/* Right Profile & Contact Card (5 Cols on Desktop) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Consultant Frame */}
              <div className="bg-white border border-[#E2E5EA] p-4 sm:p-6 space-y-5">
                <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6C7582]">
                    LEAD CONSULTANT PROFILE
                  </span>
                  <span className="text-[10px] font-mono text-[#152232] font-semibold">PRACTICE PROFILE</span>
                </div>

                <div className="relative aspect-4/5 bg-[#EFEFEA] overflow-hidden border border-[#E2E5EA]">
                  <img
                    src="/consultant-portrait.jpg"
                    alt={FIRM_DETAILS.leadConsultant}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <UserCheck size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] block uppercase font-mono">Principal Consultant</span>
                      <span className="font-bold text-[#152232]">{FIRM_DETAILS.leadConsultant}</span>
                      <span className="text-xs text-[#5B6574] block">{FIRM_DETAILS.designation}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#E2E5EA]">
                    <MapPin size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] block uppercase font-mono">Office Address</span>
                      <span className="font-semibold text-[#152232] leading-tight block">{FIRM_DETAILS.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#E2E5EA]">
                    <Phone size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] block uppercase font-mono">Direct Lines</span>
                      <a href={`tel:${FIRM_DETAILS.phone}`} className="font-mono font-semibold text-[#152232] block hover:underline">
                        {FIRM_DETAILS.phone}
                      </a>
                      <a href={`mailto:${FIRM_DETAILS.email}`} className="font-mono text-xs text-[#5B6574] block hover:underline">
                        {FIRM_DETAILS.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Editable Placeholder Notice */}
                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-3 text-[11px] text-[#6C7582] space-y-1 font-mono">
                  <span className="font-semibold text-[#152232] block">[Editable Profile Information]</span>
                  <p>Client-specific details, practice registration numbers, and office locations can be updated here upon client review.</p>
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-white border border-[#E2E5EA] p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#152232] shrink-0" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#152232]">
                    Get in Touch
                  </h3>
                </div>
                <p className="text-xs text-[#3D4653] leading-relaxed">
                  Discuss your business filing, GST compliance, or bookkeeping requirements directly with our team.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors"
                >
                  <span>Contact Practice</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
