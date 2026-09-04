export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  items: string[];
  benefits?: string[];
  highlightBadge?: string;
}

export interface TargetSegment {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceOfInterest: string;
  description: string;
  lgpdConsent: boolean;
  honeypot?: string;
}
