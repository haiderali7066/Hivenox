export type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  href: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per user / month',
    description: 'For small teams getting started with one or two Hivenox apps.',
    features: [
      'Up to 10 users',
      '2 product modules',
      'Standard automation',
      'Community support',
      '5 GB storage',
    ],
    cta: 'Start free trial',
    href: '/book-demo',
  },
  {
    name: 'Growth',
    price: '$79',
    period: 'per user / month',
    description: 'For growing companies that need the full platform and AI Workers.',
    features: [
      'Unlimited users',
      'All product modules',
      'Advanced automation',
      '3 AI Workers included',
      'Priority support',
      '100 GB storage',
    ],
    cta: 'Start free trial',
    href: '/book-demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to you',
    description: 'For large organizations with advanced security and scale needs.',
    features: [
      'Everything in Growth',
      'Unlimited AI Workers',
      'SSO & SCIM',
      'Dedicated success manager',
      'Custom SLAs & onboarding',
      'Unlimited storage',
    ],
    cta: 'Contact sales',
    href: '/contact',
  },
]
