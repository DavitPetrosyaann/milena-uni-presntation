import { NavItem, StatData, FundingTier, CaseStudy } from './types';

export const NAVIGATION: NavItem[] = [
  { id: 'hero', label: 'Title' },
  { id: 'definition', label: 'Definition' },
  { id: 'impacts', label: 'Key Impacts' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'statistics', label: 'UN Statistics' },
  { id: 'funding', label: 'Research Funding' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'contact', label: 'Contact' },
];

export const DISPLACEMENT_STATS: StatData[] = [
  { year: '2018', displaced: 17.2, events: 280 },
  { year: '2019', displaced: 24.9, events: 310 },
  { year: '2020', displaced: 30.7, events: 389 },
  { year: '2021', displaced: 23.7, events: 340 },
  { year: '2022', displaced: 32.6, events: 420 },
  { year: '2023', displaced: 35.8, events: 450 },
];

export const SYRIA_CASE_STUDY: CaseStudy = {
  title: "The Syrian Conflict: A Climate-Conflict Nexus",
  location: "Syrian Arab Republic",
  period: "2006 - 2011 (Pre-conflict drought)",
  description: "Prior to the outbreak of civil war in 2011, Syria experienced its most severe drought on instrumental record. This drought, exacerbated by anthropogenic climate change, led to widespread agricultural failure and mass internal displacement.",
  impacts: [
    "75% of farms failed and 85% of livestock died between 2006-2011.",
    "1.5 million rural residents migrated to urban peripheries.",
    "Urban overcrowding exacerbated existing economic and social tensions.",
    "Served as a 'threat multiplier' alongside political instability."
  ]
};

export const FUNDING_TIERS: FundingTier[] = [
  {
    title: "Local Adaptation Grant",
    amount: "$50,000",
    description: "Seed funding for localized climate resilience studies.",
    features: [
      "Community-level vulnerability assessments",
      "1-year research timeline",
      "Focus on specific water basins",
      "Undergraduate research support"
    ],
    recommended: false
  },
  {
    title: "Regional Security Analysis",
    amount: "$250,000",
    description: "Comprehensive study of transboundary climate impacts.",
    features: [
      "Multi-state migration tracking",
      "3-year research timeline",
      "Predictive modeling integration",
      "Post-doctoral fellowship funding",
      "Policy brief publications"
    ],
    recommended: true
  },
  {
    title: "Global Policy Framework",
    amount: "$1.5M+",
    description: "Large-scale institutional grant for international policy development.",
    features: [
      "Global dataset aggregation",
      "5-year longitudinal study",
      "Direct UN agency collaboration",
      "Establishment of a dedicated research center",
      "Annual international symposiums"
    ],
    recommended: false
  }
];