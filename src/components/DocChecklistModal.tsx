import React, { useState, useEffect } from 'react';
import { X, FileText, Check, Copy, CheckCircle } from 'lucide-react';
import { DOCUMENT_CHECKLISTS } from '../data/firmData';

interface DocChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocChecklistModal: React.FC<DocChecklistModalProps> = ({ isOpen, onClose }) => {
  const [copiedCategory, setCopiedCategory] = useState<string | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyCategory = (categoryTitle: string, items: string[]) => {
    const textToCopy = `${categoryTitle}\n\nRequired Documents:\n` + items.map((item) => `- ${item}`).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopiedCategory(categoryTitle);
    setTimeout(() => setCopiedCategory(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#152232]/70 backdrop-blur-xs">
      {/* Modal Container */}
      <div className="bg-[#F9F8F5] border border-[#152232] w-full max-w-3xl max-h-[92dvh] overflow-y-auto shadow-2xl flex flex-col pt-safe pb-safe">
        
        {/* Modal Header */}
        <div className="bg-[#152232] text-white p-4 sm:p-6 flex items-center justify-between sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 text-white shrink-0">
              <FileText size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA9B6] block">
                ONBOARDING CHECKLIST
              </span>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">Client Document Checklist</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close document checklist modal"
            className="p-2 text-[#9FA9B6] hover:text-white hover:bg-white/10 transition-colors min-h-[42px] min-w-[42px] flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 flex-1">
          {DOCUMENT_CHECKLISTS.map((list) => (
            <div key={list.category} className="bg-white border border-[#E2E5EA] p-4 sm:p-5 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E5EA] pb-3 gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582]">CHECKLIST CATEGORY</span>
                  <h4 className="text-sm sm:text-base font-bold text-[#152232]">{list.category}</h4>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyCategory(list.category, list.items)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#152232] hover:text-[#2B3747] min-h-[38px] px-3.5 py-1.5 border border-[#D5D8DE] hover:border-[#152232] bg-[#FAF9F6] transition-colors self-start sm:self-auto"
                >
                  {copiedCategory === list.category ? (
                    <>
                      <CheckCircle size={13} className="text-green-700" />
                      <span className="text-green-700 font-bold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Checklist</span>
                    </>
                  )}
                </button>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {list.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#3D4653]">
                    <Check size={14} className="text-[#152232] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Note */}
          <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-3.5 sm:p-4 text-xs text-[#5B6574] leading-relaxed">
            <strong className="text-[#152232]">Note:</strong> Documents can be submitted digitally via encrypted email attachment, shared drive link, or physical file drop at our Jaipur office location.
          </div>

          {/* Footer Action */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider bg-[#152232] text-white min-h-[44px] px-8 hover:bg-[#2B3747] transition-colors"
            >
              Done / Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
