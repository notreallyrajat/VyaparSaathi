export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  subTypes?: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
}

export interface DocumentChecklist {
  category: string;
  items: string[];
}

export interface CalculatorState {
  entityType: 'proprietorship' | 'pvt_ltd' | 'llp' | 'partnership' | 'individual';
  monthlyInvoices: '0-50' | '51-200' | '201-500' | '500+';
  selectedServices: string[];
  gstRegistered: boolean;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  entityType: string;
  serviceRequired: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}
