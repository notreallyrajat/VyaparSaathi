import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/firmData';
import { FileUp, CheckCircle2, X, FileText, Info, Send } from 'lucide-react';

export const UploadDocumentsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing',
    documentType: 'GST Registration / Monthly Invoices',
    notes: '',
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionRef, setSubmissionRef] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const refId = 'DOC-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(refId);
    }, 800);
  };

  const handleReset = () => {
    setSubmissionRef(null);
    setSelectedFiles([]);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceRequired: SERVICES_LIST[0]?.name || 'Income Tax Return (ITR) Filing',
      documentType: 'GST Registration / Monthly Invoices',
      notes: '',
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              CLIENT DOCUMENT TRANSMISSION
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Upload Documents
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Submit invoices, bank statements, registration documents, or tax records required for your accounting engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Upload Form Container */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E2E5EA] p-6 sm:p-10 space-y-8">
            
            {submissionRef ? (
              /* Success Banner */
              <div className="space-y-6 py-4">
                <div className="w-12 h-12 bg-[#152232] text-white flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                    TRANSMISSION RECORD LOGGED
                  </span>
                  <h2 className="text-2xl font-bold text-[#152232]">
                    Document Receipt #{submissionRef}
                  </h2>
                  <p className="text-sm text-[#3D4653] leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your documents ({selectedFiles.length} files attached) for <strong>{formData.serviceRequired}</strong> have been received and logged for review by our accounting staff.
                  </p>
                </div>

                {/* File List Summary */}
                <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 text-xs font-mono space-y-2">
                  <span className="text-[#6C7582] block font-bold uppercase">Transmitted Files:</span>
                  <ul className="divide-y divide-[#E2E5EA]">
                    {selectedFiles.map((file, idx) => (
                      <li key={idx} className="py-1.5 flex items-center justify-between">
                        <span className="truncate max-w-xs">{file.name}</span>
                        <span className="text-[#6C7582]">{formatFileSize(file.size)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs font-semibold uppercase tracking-wider text-[#152232] underline hover:text-[#2B3747]"
                >
                  Submit Additional Documents →
                </button>
              </div>
            ) : (
              /* Upload Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-[#E2E5EA] pb-3 flex items-center justify-between">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#152232]">
                    Document Submission Form
                  </h2>
                  <span className="text-[11px] font-mono text-[#6C7582]">* Required Fields</span>
                </div>

                {/* Client Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="text-xs font-medium text-[#152232] block">
                      Client Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Verma"
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
                      placeholder="ramesh@company.in"
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    />
                  </div>
                </div>

                {/* Service & Document Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="space-y-1">
                    <label htmlFor="documentType" className="text-xs font-medium text-[#152232] block">
                      Document Category *
                    </label>
                    <select
                      id="documentType"
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleInputChange}
                      className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    >
                      <option value="GST Registration / Monthly Invoices">GST Registration / Monthly Sales &amp; Purchase Invoices</option>
                      <option value="Bank Statements">Bank Account Statements</option>
                      <option value="Income Tax Prep (Form 26AS / AIS)">Income Tax Prep (Form 26AS / AIS / Previous ITR)</option>
                      <option value="TDS Records">TDS Certificates &amp; Deduction Records</option>
                      <option value="Business Constitution Documents">PAN / Aadhaar / Premises Proof (Incorporation)</option>
                      <option value="Department Notice Copy">Income Tax or GST Notice Copy</option>
                      <option value="Other Financial Documentation">Other Financial Documentation</option>
                    </select>
                  </div>
                </div>

                {/* File Upload Selector Zone */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#152232] block">
                    Upload File(s) * <span className="text-[11px] font-normal text-[#6C7582]">(PDF, JPG, JPEG, PNG, XLS, XLSX, DOC, DOCX)</span>
                  </label>
                  
                  <div className="border-2 border-dashed border-[#D5D8DE] bg-[#FAF9F6] p-6 text-center hover:border-[#152232] transition-colors relative">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.xls,.xlsx,.doc,.docx"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                      <FileUp size={28} className="text-[#152232]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#152232]">
                        Click or Drag files to upload
                      </span>
                      <span className="text-[11px] text-[#6C7582]">
                        Select multiple documents for batch submission
                      </span>
                    </div>
                  </div>
                </div>

                {/* Selected Files Preview List */}
                {selectedFiles.length > 0 && (
                  <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-4 space-y-2">
                    <span className="text-xs font-mono font-bold text-[#152232] block uppercase">
                      Selected Files ({selectedFiles.length}):
                    </span>
                    <ul className="space-y-1.5 divide-y divide-[#E2E5EA]">
                      {selectedFiles.map((file, index) => (
                        <li key={index} className="pt-1.5 flex items-center justify-between text-xs text-[#2B3747]">
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText size={14} className="text-[#152232] shrink-0" />
                            <span className="truncate max-w-xs">{file.name}</span>
                            <span className="text-[11px] font-mono text-[#6C7582]">({formatFileSize(file.size)})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="p-1 text-[#6C7582] hover:text-[#152232]"
                            aria-label="Remove file"
                          >
                            <X size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Note */}
                <div className="space-y-1">
                  <label htmlFor="notes" className="text-xs font-medium text-[#152232] block">
                    Additional Instructions / Context
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Specify target filing month, financial year, or specific client instructions..."
                    className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || selectedFiles.length === 0}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-8 border border-[#152232] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Files...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Documents</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-1 text-[11px] text-[#6C7582] flex items-center gap-2">
                  <Info size={14} className="text-[#152232] shrink-0" />
                  <span>UI prepared for backend storage connectivity. Uploaded records are retained under practice confidentiality policies.</span>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};
