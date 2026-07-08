import {
  Bot,
  Workflow,
  BarChart3,
  Target,
  Code2,
  Users,
  Wallet,
  Boxes,
  Headphones,
  Cpu,
  Mic,
  Sparkles,
  LineChart,
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Landmark,
  HardHat,
  Home,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
}

export const solutions: NavItem[] = [
  {
    title: 'AI Workers',
    href: '/solutions#ai-workers',
    description: 'Autonomous agents that handle real work end to end.',
    icon: Bot,
  },
  {
    title: 'Intelligent Automation',
    href: '/solutions#automation',
    description: 'Orchestrate workflows across every department.',
    icon: Workflow,
  },
  {
    title: 'Business Intelligence',
    href: '/solutions#bi',
    description: 'Real-time analytics and decision intelligence.',
    icon: BarChart3,
  },
  {
    title: 'Results-as-a-Service',
    href: '/solutions#raas',
    description: 'Pay for outcomes, not just software licenses.',
    icon: Target,
  },
  {
    title: 'Custom Development',
    href: '/solutions#custom',
    description: 'Bespoke enterprise software, built to fit.',
    icon: Code2,
  },
]

export const products: NavItem[] = [
  { title: 'Hivenox ERP', href: '/products', description: 'Unified resource planning.', icon: Boxes },
  { title: 'Hivenox CRM', href: '/products', description: 'Close more, faster.', icon: Target },
  { title: 'Hivenox HRMS', href: '/products', description: 'People operations, simplified.', icon: Users },
  { title: 'Hivenox Books', href: '/products', description: 'Accounting & finance.', icon: Wallet },
  { title: 'Hivenox SalesFlow', href: '/products', description: 'Pipeline automation.', icon: LineChart },
  { title: 'Hivenox Desk', href: '/products', description: 'Support at scale.', icon: Headphones },
  { title: 'AI Sales Agent', href: '/products', description: 'Sells around the clock.', icon: Sparkles },
  { title: 'AI Support Agent', href: '/products', description: 'Resolves tickets instantly.', icon: Bot },
  { title: 'AI Recruiter', href: '/products', description: 'Sources & screens talent.', icon: Users },
  { title: 'Voice AI', href: '/products', description: 'Natural voice interfaces.', icon: Mic },
  { title: 'Insights AI', href: '/products', description: 'Ask your data anything.', icon: Cpu },
  { title: 'Hivenox Ops', href: '/products', description: 'Operations command center.', icon: Workflow },
]

export const industries: NavItem[] = [
  { title: 'Healthcare', href: '/solutions', icon: Stethoscope },
  { title: 'Retail & Ecommerce', href: '/solutions', icon: ShoppingCart },
  { title: 'Manufacturing', href: '/solutions', icon: Factory },
  { title: 'Logistics', href: '/solutions', icon: Truck },
  { title: 'Education', href: '/solutions', icon: GraduationCap },
  { title: 'Finance', href: '/solutions', icon: Landmark },
  { title: 'Construction', href: '/solutions', icon: HardHat },
  { title: 'Real Estate', href: '/solutions', icon: Home },
  { title: 'Government', href: '/solutions', icon: Building2 },
]

export type ProductDetail = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  icon: LucideIcon
  features: string[]
  monthly: number
}

export const productCatalog: ProductDetail[] = [
  {
    slug: 'erp',
    name: 'Hivenox ERP',
    category: 'Platform',
    tagline: 'One system to run the whole company',
    description:
      'Connect finance, inventory, operations, and people in a single source of truth with AI woven through every module.',
    icon: Boxes,
    features: ['Unified data model', 'Real-time inventory', 'Multi-entity finance', 'Role-based access'],
    monthly: 89,
  },
  {
    slug: 'crm',
    name: 'Hivenox CRM',
    category: 'Sales',
    tagline: 'A CRM your team actually loves',
    description:
      'Track every deal, automate follow-ups, and let AI surface the next best action for each opportunity.',
    icon: Target,
    features: ['360° customer view', 'AI deal scoring', 'Pipeline automation', 'Revenue forecasting'],
    monthly: 45,
  },
  {
    slug: 'hrms',
    name: 'Hivenox HRMS',
    category: 'People',
    tagline: 'People operations on autopilot',
    description:
      'From hiring to payroll, run the entire employee lifecycle with automated workflows and self-service.',
    icon: Users,
    features: ['Applicant tracking', 'Onboarding flows', 'Payroll & leave', 'Performance reviews'],
    monthly: 39,
  },
  {
    slug: 'books',
    name: 'Hivenox Books',
    category: 'Finance',
    tagline: 'Accounting that closes itself',
    description:
      'Automated bookkeeping, invoicing, and reconciliation with real-time financial reporting.',
    icon: Wallet,
    features: ['Auto reconciliation', 'Smart invoicing', 'Tax compliance', 'Financial reports'],
    monthly: 35,
  },
  {
    slug: 'salesflow',
    name: 'Hivenox SalesFlow',
    category: 'Sales',
    tagline: 'Pipeline that moves itself forward',
    description:
      'Sequence outreach, route leads, and automate the busywork so reps focus on closing.',
    icon: LineChart,
    features: ['Multichannel sequences', 'Lead routing', 'Meeting scheduler', 'Engagement analytics'],
    monthly: 49,
  },
  {
    slug: 'desk',
    name: 'Hivenox Desk',
    category: 'Support',
    tagline: 'Support that scales without headcount',
    description:
      'Omnichannel help desk with AI triage, suggested replies, and full knowledge base.',
    icon: Headphones,
    features: ['Omnichannel inbox', 'AI triage', 'SLA management', 'Knowledge base'],
    monthly: 29,
  },
  {
    slug: 'ai-sales-agent',
    name: 'AI Sales Agent',
    category: 'AI Worker',
    tagline: 'A tireless rep that never sleeps',
    description:
      'An autonomous agent that qualifies leads, books meetings, and nurtures deals 24/7.',
    icon: Sparkles,
    features: ['Autonomous outreach', 'Lead qualification', 'Meeting booking', 'CRM sync'],
    monthly: 129,
  },
  {
    slug: 'ai-support-agent',
    name: 'AI Support Agent',
    category: 'AI Worker',
    tagline: 'Instant resolutions, any hour',
    description:
      'Resolves customer tickets end to end, escalating only the edge cases to your humans.',
    icon: Bot,
    features: ['Instant resolution', 'Context memory', 'Smart escalation', 'Multilingual'],
    monthly: 119,
  },
  {
    slug: 'ai-recruiter',
    name: 'AI Recruiter',
    category: 'AI Worker',
    tagline: 'Source and screen at machine speed',
    description:
      'Finds candidates, screens applications, and schedules interviews automatically.',
    icon: Users,
    features: ['Candidate sourcing', 'Resume screening', 'Interview scheduling', 'Bias checks'],
    monthly: 99,
  },
  {
    slug: 'voice-ai',
    name: 'Voice AI',
    category: 'AI Worker',
    tagline: 'Natural voice for every channel',
    description:
      'Human-like voice agents for inbound and outbound calls across your business.',
    icon: Mic,
    features: ['Natural speech', 'Inbound & outbound', 'Call summaries', 'CRM logging'],
    monthly: 149,
  },
  {
    slug: 'insights-ai',
    name: 'Insights AI',
    category: 'Intelligence',
    tagline: 'Ask your business anything',
    description:
      'A conversational analyst that turns your company data into clear answers and dashboards.',
    icon: Cpu,
    features: ['Natural language queries', 'Auto dashboards', 'Anomaly alerts', 'Forecasting'],
    monthly: 79,
  },
  {
    slug: 'ops',
    name: 'Hivenox Ops',
    category: 'Operations',
    tagline: 'Your operations command center',
    description:
      'Coordinate projects, resources, and field teams from a single operational hub.',
    icon: Workflow,
    features: ['Project planning', 'Resource scheduling', 'Field service', 'Live dashboards'],
    monthly: 55,
  },
]

export const integrations = [
  'Microsoft 365',
  'Google Workspace',
  'Slack',
  'Stripe',
  'Shopify',
  'QuickBooks',
  'Zoom',
  'OpenAI',
  'WhatsApp Business',
  'Meta',
  'Salesforce',
  'HubSpot',
]
