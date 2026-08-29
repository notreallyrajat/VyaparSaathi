import React from 'react';
import { FIRM_DETAILS } from '../data/firmData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              STATUTORY &amp; LEGAL GOVERNANCE
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Privacy Policy
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
              <p>This Privacy Policy document provides standard administrative terms regarding client document handling, data collection, and billing information. Final legal customization should be conducted by practice counsel prior to formal engagement.</p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                1. Information Collected
              </h2>
              <p>
                <strong>{FIRM_DETAILS.fullName}</strong> ("Firm", "we", "us") collects personal and business information provided directly by clients when inquiring about or engaging our accounting, GST, income tax, and business registration services.
              </p>
              <p>Information collected may include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details: Name, phone number, email address, business address.</li>
                <li>Business entity information: Firm constitution (Proprietorship, Partnership, LLP, Company), GSTIN, PAN, and TAN numbers.</li>
                <li>Financial records: Bank statements, sales/purchase invoices, ledger records, TDS certificates, and previous year tax filings.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                2. Use of Information
              </h2>
              <p>
                All client information and business documentation collected are strictly used for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Preparing and filing GST returns, Income Tax Returns (ITR), and TDS statements on statutory portals.</li>
                <li>Maintaining books of accounts and compiling periodic financial statements.</li>
                <li>Drafting replies to tax query notices and providing accounting advisory.</li>
                <li>Communicating billing statements, engagement status, and compliance schedules.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                3. Uploaded Documents &amp; Record Handling
              </h2>
              <p>
                Documents transmitted via our online Document Upload interface or email are accessible solely to authorized accounting personnel assigned to your file.
              </p>
              <p>
                We do not sell, lease, commercialize, or disclose client ledgers or tax records to third-party marketing entities.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                4. Payment Information
              </h2>
              <p>
                Professional fee payments processed online through payment gateway partners or bank transfer channels adhere to standard banking protocols. The firm does not store raw credit card credentials or bank passwords on its website servers.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                5. Cookies &amp; Tracking
              </h2>
              <p>
                Our website utilizes standard technical session cookies to ensure consistent navigation, form memory, and user accessibility. We do not employ third-party tracking pixels or intrusive advertising cookies.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                6. Data Retention &amp; Archiving
              </h2>
              <p>
                Client financial records and tax filing acknowledgments are retained for the statutory period mandated by applicable Indian tax laws, after which physical or electronic archives are securely disposed of.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                7. Third-Party Services
              </h2>
              <p>
                In the course of performing engagement deliverables, data is transmitted to official government portals (such as the Income Tax Department portal, GST Portal, and MCA Portal) strictly as required to fulfill statutory filing duties.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                8. User Rights
              </h2>
              <p>
                Clients maintain the right to inspect, update, or request copies of their financial ledgers and filing acknowledgments maintained by the firm.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152232] border-b border-[#E2E5EA] pb-2 font-mono uppercase">
                9. Contact Information
              </h2>
              <p>
                For privacy inquiries or document access requests, please contact our compliance administrator:
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
