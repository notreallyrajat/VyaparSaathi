import React from 'react';
import { FIRM_DETAILS } from '../data/firmData';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              TERMS OF SERVICE &amp; PRACTICE ENGAGEMENT
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Terms &amp; Conditions
            </h1>
            <div className="text-xs font-mono text-[#6C7582] space-y-1">
              <div>Effective Date: <span className="text-[#152232] font-semibold">August 2026</span></div>
              <div>Firm Entity: <span className="text-[#152232] font-semibold">{FIRM_DETAILS.fullName}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Document Content */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E2E5EA] p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-[#3D4653] leading-relaxed">
            
            {/* Legal Notice Header */}
            <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs font-mono text-[#6C7582] space-y-1">
              <span className="font-bold text-[#152232] block">[Client / Legal Review Required]</span>
              <p>These Terms &amp; Conditions govern the use of our website and professional service engagements. Client-specific retainers or custom billing terms take precedence when formalized under a signed engagement letter.</p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                1. Website Usage &amp; Acceptance
              </h2>
              <p>
                By accessing this website or engaging <strong>{FIRM_DETAILS.fullName}</strong> ("Firm", "we", "us"), you agree to abide by these Terms &amp; Conditions. If you do not agree with any part of these terms, you should discontinue site usage.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                2. Professional Services Scope
              </h2>
              <p>
                Our services include Income Tax Return (ITR) filing, GST registration &amp; return filing, routine accounting &amp; bookkeeping, TDS return filing, MSME registration, PAN &amp; TAN assistance, business registration (Proprietorship, Partnership, LLP, Company), financial statement preparation, and notice query replies.
              </p>
              <p>
                The exact scope for any client engagement is defined by the service selected or explicitly agreed upon during consultation.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                3. Client Responsibilities &amp; Document Accuracy
              </h2>
              <p>
                Clients are responsible for providing complete, accurate, and truthful financial data, sales/purchase invoices, bank statements, and identity documents in a timely manner.
              </p>
              <p>
                The firm prepares tax filings and accounting ledgers based on client-provided records. The firm is not liable for statutory penalties or interest arising from incomplete or inaccurate documentation provided by the client.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                4. Document Submission &amp; Security
              </h2>
              <p>
                Documents submitted via our online transmission tools are received for practice processing. Clients should retain original hard copies or primary digital backups of all invoices and financial records.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                5. Payment Terms &amp; Billing
              </h2>
              <p>
                Professional fees are payable as specified in billing statements or service schedules (`₹[Amount]`). For monthly retainer services, fees are due on or before the specified billing date each month prior to return submission.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                6. Cancellation, Modifications &amp; Refunds
              </h2>
              <p>
                Once statutory return processing, government fee payment, or ledger entry work has commenced, professional fees are non-refundable. Modifications to service scope must be requested in writing.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                7. Service Limitations &amp; Disclaimers
              </h2>
              <p>
                While the firm exercises due diligence in preparing all tax filings and books of accounts, statutory acceptance rests with government tax authorities (Income Tax Department, GST Department, MCA).
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                8. Intellectual Property Rights
              </h2>
              <p>
                All website text, layout designs, editorial copy, and practice branding remain the property of {FIRM_DETAILS.fullName}. Unauthorised reproduction or duplication is prohibited.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable Indian law, the firm's total liability for any claim arising out of professional services shall not exceed the professional fee paid by the client for the specific service in question.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                10. Contact Information &amp; Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts in Jaipur, Rajasthan.
              </p>
              <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs font-mono space-y-1">
                <div>Firm Name: <span className="text-[#152232] font-semibold">{FIRM_DETAILS.fullName}</span></div>
                <div>Address: <span className="text-[#152232] font-semibold">{FIRM_DETAILS.address}</span></div>
                <div>Email: <a href={`mailto:${FIRM_DETAILS.email}`} className="text-[#152232] font-semibold underline">{FIRM_DETAILS.email}</a></div>
                <div>Phone: <a href={`tel:${FIRM_DETAILS.phone}`} className="text-[#152232] font-semibold underline">{FIRM_DETAILS.phone}</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
