import { ServiceItem, ProcessStep, WhyChooseUsItem, DocumentChecklist } from '../types';

export const FIRM_DETAILS = {
  name: 'Vyapar Saathi',
  tagline: 'Financial & Accounting Services',
  fullName: 'Vyapar Saathi Accounting & Consultancy Services',
  leadConsultant: 'R. K. Sharma',
  designation: 'Senior Accounting & Tax Consultant',
  experience: 'Professional Accounting Practice',
  address: '402, Financial District Towers, Tonk Road, Jaipur, Rajasthan 302015',
  phone: '+91 98765 43210',
  alternatePhone: '+91 141 2345678',
  email: 'contact@vyaparsaathi.in',
  hours: 'Monday – Saturday: 09:30 AM – 06:30 PM (IST)',
  whatsappNumber: '919876543210',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'itr-filing',
    number: '01',
    name: 'Income Tax Return (ITR) Filing',
    description: 'Preparation and filing of income tax returns for individuals and businesses.',
  },
  {
    id: 'gst-filing',
    number: '02',
    name: 'GST Registration & Return Filing',
    description: 'GST registration and periodic return filing for eligible businesses.',
  },
  {
    id: 'accounting-bookkeeping',
    number: '03',
    name: 'Accounting & Bookkeeping',
    description: 'Routine ledger maintenance, transaction entry, and bank statement reconciliation.',
  },
  {
    id: 'tds-filing',
    number: '04',
    name: 'TDS Return Filing',
    description: 'Tax Deduction at Source (TDS) calculation, return filing, and certificate generation.',
  },
  {
    id: 'msme-registration',
    number: '05',
    name: 'MSME Registration',
    description: 'Udyam MSME registration setup for business recognition and government benefits.',
  },
  {
    id: 'pan-tan-services',
    number: '06',
    name: 'PAN & TAN Services',
    description: 'Application, verification, and correction services for new or existing PAN and TAN.',
  },
  {
    id: 'business-registration',
    number: '07',
    name: 'Business Registration',
    description: 'Official registration assistance for new and expanding commercial entities.',
    subTypes: ['Proprietorship', 'Partnership', 'LLP', 'Company'],
  },
  {
    id: 'financial-statements',
    number: '08',
    name: 'Financial Statements & Compliance',
    description: 'Preparation of annual balance sheets, profit & loss statements, and periodic compliance records.',
  },
  {
    id: 'notice-consultation',
    number: '09',
    name: 'Notice Reply & Tax Consultation',
    description: 'Professional drafting of replies to income tax & GST query notices and expert advice on tax compliance.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Review & Assessment',
    description: 'We examine your business entity, existing tax records, and bank statements to determine your exact filing and bookkeeping needs.',
    keyOutputs: ['Entity document review', 'Filing requirement mapping', 'Tailored service scope definition'],
  },
  {
    number: '02',
    title: 'Organize',
    subtitle: 'Systematize & Reconcile',
    description: 'We compile your invoices, bank transactions, and tax documents into organized ledgers and filing schedules.',
    keyOutputs: ['Reconciled books of accounts', 'Timely return filing schedule', 'Structured document records'],
  },
  {
    number: '03',
    title: 'Support',
    subtitle: 'Ongoing Filing & Guidance',
    description: 'We handle periodic GST/TDS returns, routine bookkeeping updates, and prompt tax consultations whenever questions arise.',
    keyOutputs: ['Timely tax filings', 'Accurate financial statements', 'Direct consultant guidance'],
  },
];

export const WHY_CHOOSE_US_LIST: WhyChooseUsItem[] = [
  {
    number: '01',
    title: '100% Online Services',
    description: 'Handle accounting, tax and compliance work remotely with a simple online process.',
  },
  {
    number: '02',
    title: 'Fast & Accurate Work',
    description: 'Timely and carefully prepared filings, records and financial documentation.',
  },
  {
    number: '03',
    title: 'Affordable Professional Fees',
    description: 'Professional accounting and compliance services at reasonable fees.',
  },
  {
    number: '04',
    title: 'Data Privacy & Confidentiality',
    description: 'Client financial and business information is handled with strict confidentiality.',
  },
  {
    number: '05',
    title: 'Expert Support Throughout the Year',
    description: 'Ongoing support for accounting, tax and compliance requirements throughout the year.',
  },
];

export const DOCUMENT_CHECKLISTS: DocumentChecklist[] = [
  {
    category: 'GST & Monthly Filing Onboarding',
    items: [
      'GST Registration Certificate & Portal Login',
      'Monthly Sales & Purchase Invoices',
      'Bank Account Statements for target period',
      'List of primary HSN/SAC codes',
    ],
  },
  {
    category: 'Income Tax (ITR) & TDS Prep',
    items: [
      'PAN & Aadhaar Copies of Directors / Proprietor',
      'Bank Statements for target financial year',
      'Previous Year Income Tax Return (ITR) Copy',
      'TDS deduction vouchers & Form 26AS / AIS',
    ],
  },
  {
    category: 'Business Registration & MSME',
    items: [
      'Identity & Address Proof of Promoters',
      'Registered Office Premises Proof (Electricity Bill / Rent Agreement)',
      'Digital Signature Certificate (DSC) if applicable',
      'Proposed Business Name & Activity Details',
    ],
  },
];
