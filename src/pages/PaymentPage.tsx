import React, { useState } from 'react';
import { SERVICES_LIST, FIRM_DETAILS } from '../data/firmData';
import { CreditCard, CheckCircle2, Info, QrCode, Building2 } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  const [paymentData, setPaymentData] = useState({
    clientName: '',
    invoiceRef: 'INV-2026-08',
    serviceName: SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing',
    amount: '1,500',
    paymentMethod: 'upi',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const txId = 'TXN-' + Math.floor(10000000 + Math.random() * 90000000);
      setPaymentSuccess(txId);
    }, 900);
  };

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              CLIENT BILLING &amp; REMITTANCE
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Fee Payment &amp; Invoicing
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Submit professional fee payments for accounting, tax filing, and compliance engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Payment Container */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E2E5EA] p-6 sm:p-10 space-y-8">
            
            {paymentSuccess ? (
              /* Payment Confirmation State */
              <div className="space-y-6 py-4">
                <div className="w-12 h-12 bg-[#152232] text-white flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    PAYMENT REMITTANCE INITIATED
                  </span>
                  <h2 className="text-2xl font-bold text-[#152232]">
                    Transaction Reference #{paymentSuccess}
                  </h2>
                  <p className="text-sm text-[#3D4653] leading-relaxed">
                    Payment request logged for <strong>{paymentData.clientName}</strong> (Invoice #{paymentData.invoiceRef}) amounting to <strong>₹{paymentData.amount}</strong>.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs font-mono space-y-1.5">
                  <div>Firm Account: <span className="text-[#152232] font-semibold">{FIRM_DETAILS.fullName}</span></div>
                  <div>Invoice Ref: <span className="text-[#152232] font-semibold">{paymentData.invoiceRef}</span></div>
                  <div>Target Service: <span className="text-[#152232] font-semibold">{paymentData.serviceName}</span></div>
                  <div>Amount Paid: <span className="text-[#152232] font-semibold">₹{paymentData.amount}</span></div>
                </div>

                <button
                  onClick={() => {
                    setPaymentSuccess(null);
                    setPaymentData({
                      clientName: '',
                      invoiceRef: 'INV-2026-08',
                      serviceName: SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing',
                      amount: '1,500',
                      paymentMethod: 'upi',
                    });
                  }}
                  className="text-xs font-semibold uppercase tracking-wider text-[#152232] underline hover:text-[#2B3747]"
                >
                  Process Another Invoice Payment →
                </button>
              </div>
            ) : (
              /* Payment Form */
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                
                <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#152232]">
                    Invoice &amp; Remittance Details
                  </h2>
                  <span className="text-[11px] font-mono text-[#6C7582]">* Required Fields</span>
                </div>

                {/* Client Name & Invoice Ref */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="clientName" className="text-xs font-medium text-[#152232] block">
                      Client / Firm Name *
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      name="clientName"
                      required
                      value={paymentData.clientName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Enterprises"
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="invoiceRef" className="text-xs font-medium text-[#152232] block">
                      Invoice / Reference Number *
                    </label>
                    <input
                      type="text"
                      id="invoiceRef"
                      name="invoiceRef"
                      required
                      value={paymentData.invoiceRef}
                      onChange={handleInputChange}
                      placeholder="e.g. INV-2026-08"
                      className="w-full text-sm font-mono px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    />
                  </div>
                </div>

                {/* Service Selection & Amount */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-1">
                    <label htmlFor="serviceName" className="text-xs font-medium text-[#152232] block">
                      Target Service *
                    </label>
                    <select
                      id="serviceName"
                      name="serviceName"
                      value={paymentData.serviceName}
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

                  <div className="space-y-1">
                    <label htmlFor="amount" className="text-xs font-medium text-[#152232] block">
                      Amount (INR) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs font-mono text-[#6C7582]">₹</span>
                      <input
                        type="text"
                        id="amount"
                        name="amount"
                        required
                        value={paymentData.amount}
                        onChange={handleInputChange}
                        placeholder="[Amount]"
                        className="w-full text-sm font-mono pl-7 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Channel Selection */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-medium text-[#152232] block">
                    Preferred Remittance Channel *
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    <label className={`p-4 border cursor-pointer flex items-start gap-3 transition-colors ${
                      paymentData.paymentMethod === 'upi' ? 'bg-[#FAF9F6] border-[#152232]' : 'bg-white border-[#E2E5EA]'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={paymentData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                        className="mt-0.5 text-[#152232]"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <QrCode size={16} className="text-[#152232]" />
                          <span className="text-xs font-bold text-[#152232]">UPI / QR Remittance</span>
                        </div>
                        <p className="text-[11px] text-[#6C7582]">GPay, PhonePe, Paytm, or BHIM UPI string</p>
                      </div>
                    </label>

                    <label className={`p-4 border cursor-pointer flex items-start gap-3 transition-colors ${
                      paymentData.paymentMethod === 'neft' ? 'bg-[#FAF9F6] border-[#152232]' : 'bg-white border-[#E2E5EA]'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="neft"
                        checked={paymentData.paymentMethod === 'neft'}
                        onChange={handleInputChange}
                        className="mt-0.5 text-[#152232]"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} className="text-[#152232]" />
                          <span className="text-xs font-bold text-[#152232]">Direct Bank Transfer (NEFT / RTGS)</span>
                        </div>
                        <p className="text-[11px] text-[#6C7582]">Current Account Transfer Details</p>
                      </div>
                    </label>

                  </div>
                </div>

                {/* Account Details Box */}
                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between border-b border-[#E2E5EA] pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#6C7582]">Practice Account Details</span>
                    <span className="text-[10px] text-[#152232] font-bold">CURRENT ACCOUNT</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#2B3747]">
                    <div>Account Name: <span className="font-semibold text-[#152232]">{FIRM_DETAILS.fullName}</span></div>
                    <div>Bank Name: <span className="font-semibold text-[#152232]">HDFC Bank Ltd.</span></div>
                    <div>Account No: <span className="font-semibold text-[#152232]">502000XXXX1234</span></div>
                    <div>IFSC Code: <span className="font-semibold text-[#152232]">HDFC0001234</span></div>
                    <div>UPI ID: <span className="font-semibold text-[#152232]">vyaparsaathi@hdfcbank</span></div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-8 border border-[#152232] transition-colors"
                  >
                    {isProcessing ? (
                      <span>Processing Gateway Integration...</span>
                    ) : (
                      <>
                        <CreditCard size={15} />
                        <span>Proceed to Payment</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-1 text-[11px] text-[#6C7582] flex items-center gap-2">
                  <Info size={14} className="text-[#152232] shrink-0" />
                  <span>Integration-Ready UI. Real payment gateway connectors (Razorpay / Supabase / Stripe) can be attached to this interface.</span>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};
