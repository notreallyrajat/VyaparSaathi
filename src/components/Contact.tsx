import React, { useState, useEffect } from 'react';
import { FIRM_DETAILS, SERVICES_LIST } from '../data/firmData';
import { ContactFormData } from '../types';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  prefilledService?: string;
  prefilledScopeMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, prefilledScopeMessage }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    entityType: 'proprietorship',
    serviceRequired: 'Income Tax Return (ITR) Filing',
    message: '',
    preferredContact: 'phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledScopeMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${prefilledScopeMessage}` : prefilledScopeMessage,
      }));
    }
  }, [prefilledScopeMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const refId = 'VS-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(refId);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      businessName: '',
      entityType: 'proprietorship',
      serviceRequired: 'GST Billing & Compliance Support',
      message: '',
      preferredContact: 'phone',
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 border-b border-[#E2E5EA] bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
            CLIENT ENQUIRIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#152232]">
            Let’s get your accounting in order.
          </h2>
          <p className="text-xs sm:text-base text-[#3D4653] leading-relaxed">
            Submit your details below or reach out directly to schedule a consultation on your financial requirements.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Form (7 Cols on Desktop) */}
          <div className="lg:col-span-7 bg-white border border-[#E2E5EA] p-4 sm:p-8 lg:p-10 space-y-6">
            
            {submittedRef ? (
              /* Success Confirmation Banner */
              <div className="space-y-5 py-4 text-left">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-[#152232] text-white">
                  <CheckCircle2 size={22} />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    ENQUIRY TRANSMITTED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#152232]">
                    Enquiry Reference #{submittedRef}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D4653] leading-relaxed max-w-lg">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding <strong>{formData.serviceRequired}</strong> has been logged. Our accounting team will review your details and contact you within 1 business day.
                  </p>
                </div>

                {/* Submission Summary Table */}
                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-3 sm:p-4 text-xs space-y-2 font-mono">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#E2E5EA] pb-1 gap-0.5">
                    <span className="text-[#6C7582]">Business Name:</span>
                    <span className="text-[#152232] font-semibold truncate">{formData.businessName || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#E2E5EA] pb-1 gap-0.5">
                    <span className="text-[#6C7582]">Contact Phone:</span>
                    <span className="text-[#152232] font-semibold">{formData.phone}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <span className="text-[#6C7582]">Contact Email:</span>
                    <span className="text-[#152232] font-semibold truncate">{formData.email}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold uppercase tracking-wider text-[#152232] underline hover:text-[#2B3747] min-h-[38px]"
                  >
                    Submit Another Enquiry →
                  </button>
                </div>
              </div>
            ) : (
              /* Enquiry Form */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#152232]">
                    Consultation Enquiry Form
                  </h3>
                  <span className="text-[11px] text-[#6C7582] font-mono">* Required fields</span>
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
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      placeholder="rajesh@company.in"
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="businessName" className="text-xs font-medium text-[#152232] block">
                      Business Name &amp; Entity Type
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Kumar Enterprises (Proprietorship)"
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
                    onChange={handleChange}
                    className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name}
                      </option>
                    ))}
                    <option value="General Accounting Consultation">General Accounting Consultation</option>
                  </select>
                </div>

                {/* Message / Requirements */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-medium text-[#152232] block">
                    Message / Key Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your billing volume, current bookkeeping system, or specific accounting challenges..."
                    className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors font-sans"
                  ></textarea>
                </div>

                {/* Preferred Contact Mode */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-medium text-[#152232] block">
                    Preferred Mode of Contact
                  </span>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#3D4653]">
                    <label className="flex items-center gap-2 cursor-pointer min-h-[38px]">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="text-[#152232] focus:ring-0 w-4 h-4"
                      />
                      <span>Phone Call</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer min-h-[38px]">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="text-[#152232] focus:ring-0 w-4 h-4"
                      />
                      <span>Email Response</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer min-h-[38px]">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleChange}
                        className="text-[#152232] focus:ring-0 w-4 h-4"
                      />
                      <span>WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-8 border border-[#152232] transition-colors focus:outline-none disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-1 text-[11px] text-[#6C7582] flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#152232] shrink-0" />
                  <span>Your information is strictly used to evaluate accounting scope and is never shared.</span>
                </div>
              </form>
            )}

          </div>

          {/* Direct Contact Information Panel (5 Cols on Desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Details Card */}
            <div className="bg-white border border-[#E2E5EA] p-5 sm:p-7 space-y-5">
              <div className="border-b border-[#E2E5EA] pb-3.5">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#6C7582] block">
                  DIRECT CONTACT
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#152232]">
                  Reach out directly
                </h3>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FAF9F6] border border-[#E2E5EA] text-[#152232] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6C7582] block uppercase font-mono">Telephone</span>
                    <a href={`tel:${FIRM_DETAILS.phone}`} className="font-mono font-semibold text-[#152232] hover:underline block">
                      {FIRM_DETAILS.phone}
                    </a>
                    <a href={`tel:${FIRM_DETAILS.alternatePhone}`} className="font-mono text-xs text-[#5B6574] hover:underline block">
                      {FIRM_DETAILS.alternatePhone} (Landline)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FAF9F6] border border-[#E2E5EA] text-[#152232] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#6C7582] block uppercase font-mono">Email Address</span>
                    <a href={`mailto:${FIRM_DETAILS.email}`} className="font-mono font-semibold text-[#152232] hover:underline block truncate">
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FAF9F6] border border-[#E2E5EA] text-[#152232] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6C7582] block uppercase font-mono">Office Address</span>
                    <p className="font-semibold text-[#152232] leading-tight">
                      {FIRM_DETAILS.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FAF9F6] border border-[#E2E5EA] text-[#152232] shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6C7582] block uppercase font-mono">Business Hours</span>
                    <p className="font-medium text-[#152232]">
                      {FIRM_DETAILS.hours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Action Button (Standard Button, NOT floating bubble) */}
              <div className="pt-4 border-t border-[#E2E5EA] space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6C7582] block">
                  QUICK MESSAGING
                </span>
                <a
                  href={`https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=Hello%20Vyapar%20Saathi%2C%20I%20would%20like%20to%20enquire%20about%20accounting%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#152232] bg-[#FAF9F6] hover:bg-[#EFEFEA] min-h-[44px] border border-[#152232] transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>Message via WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

