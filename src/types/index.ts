export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
