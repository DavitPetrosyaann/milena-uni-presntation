export interface NavItem {
  id: string;
  label: string;
}

export interface StatData {
  year: string;
  displaced: number;
  events: number;
}

export interface FundingTier {
  title: string;
  amount: string;
  description: string;
  features: string[];
  recommended: boolean;
}

export interface CaseStudy {
  title: string;
  location: string;
  period: string;
  description: string;
  impacts: string[];
}