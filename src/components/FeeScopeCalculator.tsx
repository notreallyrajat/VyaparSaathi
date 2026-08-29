import React, { useState, useEffect } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { CalculatorState } from '../types';

interface FeeScopeCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyScopeToContact: (scopeSummary: string) => void;
}

export const FeeScopeCalculator: React.FC<FeeScopeCalculatorProps> = ({
  isOpen,
  onClose,
  onApplyScopeToContact,
}) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    entityType: 'proprietorship',
    monthlyInvoices: '51-200',
    selectedServices: ['gst-filing', 'accounting-bookkeeping'],
    gstRegistered: true,
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setCalcState((prev) => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== id) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, id] };
      }
    });
  };

  const getRecommendedTier = () => {
    const serviceCount = calcState.selectedServices.length;
    if (calcState.monthlyInvoices === '500+' || calcState.entityType === 'pvt_ltd') {
      return {
        tierName: 'Full Corporate Retainer Tier',
        description: 'Comprehensive monthly accounting, ledger maintenance, and full tax compliance.',
        estimatedFrequency: 'Dedicated Monthly Retainer',
      };
    } else if (serviceCount > 2 || calcState.monthlyInvoices === '201-500') {
      return {
        tierName: 'Commercial Business Retainer Tier',
        description: 'Structured monthly bookkeeping, GST return filing, and periodic financial statements.',
        estimatedFrequency: 'Monthly / Quarterly Retainer',
      };
    } else {
      return {
        tierName: 'Essential Accounting Tier',
        description: 'Standard ledger maintenance, GST return filing, and annual ITR preparation.',
        estimatedFrequency: 'Monthly / Task Basis',
      };
    }
  };

  const recommendedTier = getRecommendedTier();

  const handleApply = () => {
    const entityLabels: Record<string, string> = {
      proprietorship: 'Sole Proprietorship',
      pvt_ltd: 'Private Limited Company',
      llp: 'Limited Liability Partnership (LLP)',
      partnership: 'Partnership Firm',
      individual: 'Individual / Consultant',
    };

    const serviceLabels: Record<string, string> = {
      'itr-filing': 'Income Tax Return (ITR) Filing',
      'gst-filing': 'GST Registration & Return Filing',
      'accounting-bookkeeping': 'Accounting & Bookkeeping',
      'tds-filing': 'TDS Return Filing',
      'msme-registration': 'MSME Registration',
      'pan-tan-services': 'PAN & TAN Services',
      'business-registration': 'Business Registration',
      'financial-statements': 'Financial Statements & Compliance',
      'notice-consultation': 'Notice Reply & Tax Consultation',
    };

    const selectedNames = calcState.selectedServices.map((id) => serviceLabels[id] || id).join(', ');

    const summaryText = `[Calculated Scope] Entity: ${entityLabels[calcState.entityType] || calcState.entityType} | Monthly Volume: ${calcState.monthlyInvoices} invoices | Selected Modules: ${selectedNames || 'General Accounting'} | Recommended Tier: ${recommendedTier.tierName}`;

    onApplyScopeToContact(summaryText);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#152232]/70 backdrop-blur-xs">
      {/* Modal Container */}
      <div className="bg-[#F9F8F5] border border-[#152232] w-full max-w-2xl max-h-[92dvh] overflow-y-auto shadow-2xl flex flex-col pt-safe pb-safe">
        
        {/* Modal Header */}
        <div className="bg-[#152232] text-white p-4 sm:p-6 flex items-center justify-between sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 text-white shrink-0">
              <Calculator size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                PRACTICE ESTIMATOR
              </span>
              <h3 className="text-base sm:text-lg font-bold">Retainer Scope Estimator</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Estimator Modal"
            className="p-2 text-[#9FA9B6] hover:text-white hover:bg-white/10 transition-colors min-h-[42px] min-w-[42px] flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-6 flex-1">
          
          {/* Step 1: Entity Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#152232] block">
              1. Business Entity Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'proprietorship', label: 'Proprietorship' },
                { id: 'pvt_ltd', label: 'Private Limited' },
                { id: 'llp', label: 'LLP / Partnership' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCalcState({ ...calcState, entityType: item.id as any })}
                  className={`p-3 text-left border text-xs font-semibold transition-colors min-h-[44px] ${
                    calcState.entityType === item.id
                      ? 'bg-[#152232] text-white border-[#152232]'
                      : 'bg-white text-[#4A525D] border-[#D5D8DE] hover:border-[#152232]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Invoice Volume */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#152232] block">
              2. Monthly Invoice Volume
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['0-50', '51-200', '201-500', '500+'].map((vol) => (
                <button
                  key={vol}
                  type="button"
                  onClick={() => setCalcState({ ...calcState, monthlyInvoices: vol as any })}
                  className={`p-2.5 text-center border text-xs font-semibold transition-colors min-h-[44px] ${
                    calcState.monthlyInvoices === vol
                      ? 'bg-[#152232] text-white border-[#152232]'
                      : 'bg-white text-[#4A525D] border-[#D5D8DE] hover:border-[#152232]'
                  }`}
                >
                  {vol} Invoices
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Select Required Services */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#152232] block">
              3. Select Required Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: 'itr-filing', label: 'Income Tax Return (ITR) Filing' },
                { id: 'gst-filing', label: 'GST Registration & Return Filing' },
                { id: 'accounting-bookkeeping', label: 'Accounting & Bookkeeping' },
                { id: 'tds-filing', label: 'TDS Return Filing' },
                { id: 'business-registration', label: 'Business Registration' },
                { id: 'financial-statements', label: 'Financial Statements & Compliance' },
              ].map((mod) => {
                const checked = calcState.selectedServices.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => toggleService(mod.id)}
                    className={`flex items-center justify-between text-xs font-medium p-3 border transition-colors min-h-[44px] ${
                      checked
                        ? 'bg-white border-[#152232] text-[#152232]'
                        : 'bg-[#F3F2EE] border-[#E2E5EA] text-[#6C7582]'
                    }`}
                  >
                    <span>{mod.label}</span>
                    <div
                      className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                        checked ? 'bg-[#152232] border-[#152232] text-white' : 'border-[#A0AEC0]'
                      }`}
                    >
                      {checked && <Check size={12} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Output Tier Result Card */}
          <div className="bg-white border-2 border-[#152232] p-4 sm:p-5 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#E2E5EA] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                  RECOMMENDED ENGAGEMENT TIER
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#152232]">{recommendedTier.tierName}</h4>
              </div>
              <span className="text-xs font-mono bg-[#EFEFEA] px-2.5 py-1 text-[#152232] border border-[#D5D8DE] shrink-0">
                {recommendedTier.estimatedFrequency}
              </span>
            </div>

            <p className="text-xs text-[#3D4653] leading-relaxed">
              {recommendedTier.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#6C7582]">
            <ShieldCheck size={14} className="text-[#152232] shrink-0" />
            <span>Scope is indicative. Final engagement scope is locked after document review.</span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#EFEFEA] border-t border-[#E2E5EA] p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-[#4A525D] hover:text-[#152232] py-2 px-4 border border-[#D5D8DE] sm:border-transparent min-h-[42px] flex items-center justify-center"
          >
            Close Estimator
          </button>
          
          <button
            type="button"
            onClick={handleApply}
            className="inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors"
          >
            <span>Apply Scope &amp; Open Enquiry</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};
