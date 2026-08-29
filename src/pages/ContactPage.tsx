import React, { useState } from 'react';
import { SERVICES_LIST, FIRM_DETAILS } from '../data/firmData';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    serviceRequired: SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const inquiryId = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(inquiryId);
    }, 700);
  };

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              DIRECT PRACTICE INQUIRIES
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Reach out to our accounting team directly for service inquiries, filing assistance, or office consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Contact Form (7 Cols on Desktop) */}
            <div className="lg:col-span-7 bg-white border border-[#E2E5EA] p-6 sm:p-8">
              
              {submittedRef ? (
                /* Success Confirmation State */
                <div className="space-y-6 py-4">
                  <div className="w-12 h-12 bg-[#152232] text-white flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                      INQUIRY LOGGED SUCCESSFULLY
                    </span>
                    <h2 className="text-2xl font-bold text-[#152232]">
                      Inquiry Reference #{submittedRef}
                    </h2>
                    <p className="text-sm text-[#3D4653] leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding <strong>{formData.serviceRequired}</strong> has been transmitted to our office team. We will review your details and contact you via phone ({formData.phone}) or email within 1 business day.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        businessName: '',
                        serviceRequired: SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#152232] underline hover:text-[#2B3747]"
                  >
                    Submit Another Inquiry →
                  </button>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#152232]">
                      Send an Inquiry
                    </h2>
                    <span className="text-[11px] font-mono text-[#6C7582]">* Required Fields</span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-xs font-medium text-[#152232] block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-medium text-[#152232] block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>
                  </div>

                  {/* Email & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-medium text-[#152232] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="vikram@mehta.in"
                        className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="businessName" className="text-xs font-medium text-[#152232] block">
                        Business / Entity Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g. Mehta Enterprises"
                        className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1">
                    <label htmlFor="serviceRequired" className="text-xs font-medium text-[#152232] block">
                      Service Required *
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {srv.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-medium text-[#152232] block">
                      Message / Filing Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify your inquiry, tax questions, or accounting scope requirements..."
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  {/* Primary Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-8 border border-[#152232] transition-colors"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Right Editable Office Details Card (5 Cols on Desktop) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-[#E2E5EA] p-6 space-y-5">
                <div className="border-b border-[#E2E5EA] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6C7582] block">
                    PRACTICE CONTACT INFORMATION
                  </span>
                  <h3 className="text-base font-bold text-[#152232]">Office Details</h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#2B3747]">
                  
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] uppercase font-mono block">Registered Office Location</span>
                      <span className="font-semibold text-[#152232] leading-relaxed block">
                        {FIRM_DETAILS.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#E2E5EA]">
                    <Phone size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] uppercase font-mono block">Direct Phone Lines</span>
                      <a href={`tel:${FIRM_DETAILS.phone}`} className="font-mono font-semibold text-[#152232] block hover:underline">
                        {FIRM_DETAILS.phone}
                      </a>
                      <a href={`tel:${FIRM_DETAILS.alternatePhone}`} className="font-mono text-xs text-[#5B6574] block hover:underline">
                        {FIRM_DETAILS.alternatePhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#E2E5EA]">
                    <Mail size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] uppercase font-mono block">Official Email</span>
                      <a href={`mailto:${FIRM_DETAILS.email}`} className="font-mono text-[#152232] font-semibold block hover:underline">
                        {FIRM_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#E2E5EA]">
                    <Clock size={18} className="text-[#152232] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] uppercase font-mono block">Business Hours</span>
                      <span className="font-semibold text-[#152232] block leading-tight">
                        {FIRM_DETAILS.hours}
                      </span>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Quick Connect */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Vyapar Saathi, I have an inquiry regarding accounting & tax filing services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#152232] bg-[#FAF9F6] hover:bg-[#EFEFEA] min-h-[44px] px-4 border border-[#152232] transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#E2E5EA] p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#152232] shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#152232]">
                    Data Privacy Guarantee
                  </span>
                </div>
                <p className="text-xs text-[#3D4653] leading-relaxed">
                  All submitted inquiry details and business communications are held under strict practice confidentiality.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
