import React from 'react';
import { ArrowRight, CheckCircle2, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24 border-b border-[#E2E5EA] bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Copy */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Primary Headline Tagline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#152232] leading-[1.2] sm:leading-[1.15]">
              Simplifying Accounting, GST &amp; Tax Compliance – Anytime, Anywhere.
            </h1>

            {/* Concise Supporting Sentence */}
            <p className="text-sm sm:text-base lg:text-lg text-[#3D4653] leading-relaxed max-w-2xl">
              We assist growing businesses, proprietary firms, and enterprise clients with billing management, GST compliance, daily bookkeeping, and structured financial documentation.
            </p>
          </div>

          {/* CTAs & Touch-Friendly Control Group */}
          <div className="space-y-6 pt-2">
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/login?mode=signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors focus:outline-none"
              >
                <UserPlus size={16} />
                <span>Create Account</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EFEFEA] text-[#152232] text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors focus:outline-none"
              >
                <span>View Services</span>
              </Link>
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
      </div>
    </section>
  );
};
