import React from 'react';
import { FIRM_DETAILS } from '../data/firmData';
import { Mail, Phone, MapPin, Award, ShieldCheck, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 border-b border-[#E2E5EA] bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Heading & Consultant Portrait (5 Cols on Desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
                ABOUT THE PRACTICE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#152232] leading-tight">
                Built around reliable financial work.
              </h2>
            </div>

            {/* Editorial Consultant Photo Frame (Constrained width on mobile) */}
            <div className="bg-white border border-[#E2E5EA] p-3 shadow-xs max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-4/5 bg-[#EFEFEA] overflow-hidden border border-[#E2E5EA]">
                <img
                  src="/consultant-portrait.jpg"
                  alt={`${FIRM_DETAILS.leadConsultant} - ${FIRM_DETAILS.designation}`}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Photo Caption / Information Tag */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between border-t border-[#E2E5EA] mt-3 text-xs">
                <div>
                  <span className="font-bold text-[#152232] block">{FIRM_DETAILS.leadConsultant}</span>
                  <span className="text-[#6C7582] text-[11px]">{FIRM_DETAILS.designation}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[#152232] block font-semibold">{FIRM_DETAILS.experience}</span>
                  <span className="text-[10px] uppercase font-mono text-[#6C7582]">Verification</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Approach & Editable Placeholders (7 Cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Approach Paragraph */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-[#3D4653] leading-relaxed">
              <p className="text-sm sm:text-lg text-[#152232] font-medium leading-snug">
                Accounting should be straightforward, organized, and reliable. We believe businesses function best when their financial documentation is kept in order every single month—not scrambled at the end of the year.
              </p>
              <p>
                Our firm focuses on practical daily accounting: establishing clean billing workflows, ensuring timely GST filing, handling routine bank reconciliations, and maintaining accurate financial statements and tax filings. We work directly with business owners, proprietors, and managing directors to maintain financial clarity without unnecessary jargon.
              </p>
            </div>

            {/* Structured Practice Details / Editable Placeholders Card */}
            <div className="bg-white border border-[#E2E5EA] p-4 sm:p-6 space-y-5 sm:space-y-6">
              <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#6C7582]">
                  PRACTICE DETAILS &amp; DIRECT CONTACT
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#152232] font-medium">EDITABLE PROFILE</span>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3">
                  <UserCheck size={18} className="text-[#152232] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#6C7582] text-[11px] block">Lead Consultant / Principal</span>
                    <span className="font-bold text-[#152232]">{FIRM_DETAILS.leadConsultant}</span>
                    <span className="text-xs text-[#5B6574] block">{FIRM_DETAILS.designation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award size={18} className="text-[#152232] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#6C7582] text-[11px] block">Practice Experience</span>
                    <span className="font-bold text-[#152232]">{FIRM_DETAILS.experience}</span>
                    <span className="text-xs text-[#5B6574] block">Commercial Accounting Practice</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#152232] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#6C7582] text-[11px] block">Office Location</span>
                    <span className="font-semibold text-[#152232] leading-tight block">{FIRM_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#152232] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#6C7582] text-[11px] block">Direct Contact Lines</span>
                    <a href={`tel:${FIRM_DETAILS.phone}`} className="font-mono font-semibold text-[#152232] block hover:underline">
                      {FIRM_DETAILS.phone}
                    </a>
                    <a href={`mailto:${FIRM_DETAILS.email}`} className="font-mono text-xs text-[#5B6574] block hover:underline">
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Confidentiality Notice */}
              <div className="pt-3 border-t border-[#E2E5EA] flex items-center gap-3 text-xs text-[#5B6574]">
                <ShieldCheck size={16} className="text-[#152232] shrink-0" />
                <span>
                  All accounting engagements are protected under standard client confidentiality protocols and secure document handling standards.
                </span>
              </div>

            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#152232] hover:bg-[#2B3747] text-white min-h-[44px] px-6 transition-colors"
              >
                <span>Schedule Discussion</span>
              </a>
              <a
                href={`mailto:${FIRM_DETAILS.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#152232] bg-white border border-[#152232] min-h-[44px] px-6 hover:bg-[#EFEFEA] transition-colors"
              >
                <Mail size={14} />
                <span>Email Office</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

