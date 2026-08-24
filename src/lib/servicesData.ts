import { Home, Building2, Sparkles, Truck, HardHat, Sofa } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface PricingTier {
  label: string;
  price: string;
  note: string;
}

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  tag: string | null;
  color: string;
  duration: string;
  pricing: PricingTier[];
  includes: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Cleaning',
    shortTitle: 'Residential',
    description: 'Thorough, consistent home cleaning tailored to your schedule. From studios to large family homes -- every corner, every time.',
    image: '/images/residential.jpg',
    tag: 'Most Popular',
    color: '#3b82f6',
    duration: '2 - 5 hrs',
    pricing: [
      { label: 'Studio / 1 Bed', price: 'KSh 1,500', note: 'Up to 40 sqm' },
      { label: '2 Bedrooms', price: 'KSh 2,500', note: 'Up to 80 sqm' },
      { label: '3 Bedrooms', price: 'KSh 3,500', note: 'Up to 120 sqm' },
      { label: '4+ Bedrooms', price: 'KSh 5,000+', note: 'Custom quote' },
    ],
    includes: ['Dusting & vacuuming', 'Kitchen & bathrooms', 'Mopping all floors', 'Bed making', 'Bin emptying'],
  },
  {
    id: 'office',
    icon: Building2,
    title: 'Office Cleaning',
    shortTitle: 'Office',
    description: 'Professional workspace cleaning that keeps your team productive and your clients impressed. Daily, weekly, or custom schedules.',
    image: '/images/office-clean.jpg',
    tag: null,
    color: '#8b5cf6',
    duration: '2 - 6 hrs',
    pricing: [
      { label: 'Small Office', price: 'KSh 2,000', note: 'Up to 50 sqm' },
      { label: 'Medium Office', price: 'KSh 4,000', note: '50 - 150 sqm' },
      { label: 'Large Office', price: 'KSh 7,500', note: '150 - 400 sqm' },
      { label: 'Corporate / Daily', price: 'Custom', note: 'Monthly contract' },
    ],
    includes: ['Desks & workstations', 'Washrooms & kitchenette', 'Reception & lobbies', 'Trash removal', 'Glass & windows'],
  },
  {
    id: 'deep',
    icon: Sparkles,
    title: 'Deep Cleaning',
    shortTitle: 'Deep Clean',
    description: 'A comprehensive top-to-bottom clean that reaches every hidden surface. Ideal for seasonal refreshes or first-time cleans.',
    image: '/images/kitchen-clean.jpg',
    tag: 'Recommended',
    color: '#c9a84c',
    duration: '4 - 8 hrs',
    pricing: [
      { label: '1 Bedroom', price: 'KSh 4,000', note: 'Full deep clean' },
      { label: '2 Bedrooms', price: 'KSh 6,500', note: 'Full deep clean' },
      { label: '3 Bedrooms', price: 'KSh 9,000', note: 'Full deep clean' },
      { label: '4+ Bedrooms', price: 'KSh 12,000+', note: 'Custom quote' },
    ],
    includes: ['Inside appliances', 'Oven & fridge deep clean', 'Grout & tile scrubbing', 'Skirting boards', 'Behind furniture'],
  },
  {
    id: 'moveinout',
    icon: Truck,
    title: 'Move-In / Move-Out',
    shortTitle: 'Move In/Out',
    description: 'Stress-free transition cleaning. We ensure your old home is spotless and your new one is ready to move into immediately.',
    image: '/images/about-bg.jpg',
    tag: null,
    color: '#10b981',
    duration: '4 - 10 hrs',
    pricing: [
      { label: '1 Bedroom', price: 'KSh 5,000', note: 'Empty unit' },
      { label: '2 Bedrooms', price: 'KSh 8,000', note: 'Empty unit' },
      { label: '3 Bedrooms', price: 'KSh 11,000', note: 'Empty unit' },
      { label: '4+ Bedrooms', price: 'KSh 15,000+', note: 'Custom quote' },
    ],
    includes: ['Full deep clean', 'Inside all cabinets', 'Walls & switches', 'Balcony & terrace', 'Deposit-back guarantee'],
  },
  {
    id: 'postconstruction',
    icon: HardHat,
    title: 'Post-Construction',
    shortTitle: 'Post-Construction',
    description: 'Specialist cleaning after renovation or construction. Dust, debris, and residue -- completely eliminated to reveal your new space.',
    image: '/images/team.jpg',
    tag: null,
    color: '#f59e0b',
    duration: '6 - 12 hrs',
    pricing: [
      { label: 'Small Space', price: 'KSh 8,000', note: 'Up to 60 sqm' },
      { label: 'Medium Space', price: 'KSh 15,000', note: '60 - 150 sqm' },
      { label: 'Large Space', price: 'KSh 25,000', note: '150 - 300 sqm' },
      { label: 'Commercial', price: 'Custom', note: 'Site assessment' },
    ],
    includes: ['Construction dust removal', 'Paint & adhesive residue', 'Window & frame cleaning', 'Floor scrubbing & polish', 'Debris disposal'],
  },
  {
    id: 'upholstery',
    icon: Sofa,
    title: 'Upholstery & Carpets',
    shortTitle: 'Upholstery',
    description: 'Professional steam and dry cleaning for carpets, sofas, and fabric furniture. Restore freshness and remove deep-set stains.',
    image: '/images/carpet-clean.jpg',
    tag: null,
    color: '#ec4899',
    duration: '2 - 5 hrs',
    pricing: [
      { label: 'Single Sofa / Chair', price: 'KSh 800', note: 'Per seat' },
      { label: '3-Seater Sofa', price: 'KSh 2,500', note: 'Steam clean' },
      { label: 'Carpet (per sqm)', price: 'KSh 150', note: 'Min. KSh 1,500' },
      { label: 'Full Living Room', price: 'KSh 6,000', note: 'Sofa + carpet' },
    ],
    includes: ['Hot water extraction', 'Stain pre-treatment', 'Deodorising', 'Fast-dry method', 'Fabric protection'],
  },
];

export const PAYMENT_METHODS = [
  {
    id: 'mpesa',
    label: 'M-Pesa',
    icon: 'mpesa',
    description: 'Pay via Lipa Na M-Pesa',
    detail: 'Till No. 123456',
    popular: true,
  },
  {
    id: 'card',
    label: 'Card',
    icon: 'card',
    description: 'Visa / Mastercard',
    detail: 'Secure online payment',
    popular: false,
  },
  {
    id: 'cash',
    label: 'Cash',
    icon: 'cash',
    description: 'Pay on arrival',
    detail: 'Exact amount preferred',
    popular: false,
  },
  {
    id: 'bank',
    label: 'Bank Transfer',
    icon: 'bank',
    description: 'Direct bank transfer',
    detail: 'Details sent via email',
    popular: false,
  },
];
