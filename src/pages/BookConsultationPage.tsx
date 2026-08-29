import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES_LIST, FIRM_DETAILS } from '../data/firmData';
import { Calendar, Clock, CheckCircle2, ShieldCheck, Phone, Mail } from 'lucide-react';

export const BookConsultationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    serviceRequired: initialService,
    preferredDate: '',
    preferredTime: '10:00 AM – 12:00 PM',
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
      const bookingId = 'BK-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(bookingId);
    }, 700);
  };

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              SCHEDULE ADVISORY MEETING
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Book a Consultation
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Schedule a direct consultation with our senior tax and accounting advisors to review your filing and bookkeeping scope.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Sidebar Grid */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Form Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 bg-white border border-[#E2E5EA] p-6 sm:p-8">
              
              {submittedRef ? (
                /* Success Confirmation State */
                <div className="space-y-6 py-4">
                  <div className="w-12 h-12 bg-[#152232] text-white flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                      CONSULTATION REQUEST REGISTERED
                    </span>
                    <h2 className="text-2xl font-bold text-[#152232]">
                      Booking Reference #{submittedRef}
                    </h2>
                    <p className="text-sm text-[#3D4653] leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{formData.serviceRequired}</strong> has been logged. Our office will confirm your preferred slot ({formData.preferredDate || 'Earliest Available'} at {formData.preferredTime}).
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs font-mono space-y-1.5">
                    <div className="text-[#6C7582]">Client: <span className="text-[#152232] font-semibold">{formData.fullName}</span></div>
                    <div className="text-[#6C7582]">Contact Phone: <span className="text-[#152232] font-semibold">{formData.phone}</span></div>
                    <div className="text-[#6C7582]">Preferred Window: <span className="text-[#152232] font-semibold">{formData.preferredDate} ({formData.preferredTime})</span></div>
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
                        preferredDate: '',
                        preferredTime: '10:00 AM – 12:00 PM',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#152232] underline hover:text-[#2B3747]"
                  >
                    Submit Another Booking Request →
                  </button>
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#152232]">
                      Consultation Request Details
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
                        placeholder="e.g. Rakesh Agarwal"
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
                        placeholder="rakesh@firm.in"
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
                        placeholder="e.g. Agarwal Traders"
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

                  {/* Date & Time Preferences */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="preferredDate" className="text-xs font-medium text-[#152232] block">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="preferredTime" className="text-xs font-medium text-[#152232] block">
                        Preferred Time Slot *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      >
                        <option value="10:00 AM – 12:00 PM">10:00 AM – 12:00 PM (Morning)</option>
                        <option value="02:00 PM – 04:00 PM">02:00 PM – 04:00 PM (Afternoon)</option>
                        <option value="04:00 PM – 06:00 PM">04:00 PM – 06:00 PM (Evening)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-medium text-[#152232] block">
                      Filing Context / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your business entity, filing requirements, or accounting questions..."
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Primary Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-8 border border-[#152232] transition-colors"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Calendar size={15} />
                          <span>Book Consultation</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Right Practice Contact Card (5 Cols on Desktop) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-[#E2E5EA] p-6 space-y-5">
                <div className="border-b border-[#E2E5EA] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6C7582] block">
                    DIRECT OFFICE LINES
                  </span>
                  <h3 className="text-base font-bold text-[#152232]">Practice Working Hours</h3>
                </div>

                <div className="space-y-3 text-xs text-[#2B3747]">
                  <div className="flex items-center gap-2.5">
                    <Clock size={16} className="text-[#152232] shrink-0" />
                    <div>
                      <span className="font-semibold block">{FIRM_DETAILS.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#E2E5EA]">
                    <Phone size={16} className="text-[#152232] shrink-0" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] block font-mono">Direct Phone</span>
                      <a href={`tel:${FIRM_DETAILS.phone}`} className="font-mono font-semibold text-[#152232] hover:underline">
                        {FIRM_DETAILS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#E2E5EA]">
                    <Mail size={16} className="text-[#152232] shrink-0" />
                    <div>
                      <span className="text-[#6C7582] text-[11px] block font-mono">Official Email</span>
                      <a href={`mailto:${FIRM_DETAILS.email}`} className="font-mono text-[#152232] hover:underline">
                        {FIRM_DETAILS.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-3 text-[11px] text-[#6C7582] space-y-1">
                  <span className="font-semibold text-[#152232] block">Integration-Ready Booking UI</span>
                  <p>Form interface structured to easily connect with real calendar and booking backend services (e.g. Google Calendar / Calendly / Supabase).</p>
                </div>
              </div>

              <div className="bg-white border border-[#E2E5EA] p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#152232] shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#152232]">
                    Data Privacy &amp; Confidentiality
                  </span>
                </div>
                <p className="text-xs text-[#3D4653] leading-relaxed">
                  All business data and consultation disclosures are handled with strict professional confidentiality.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
