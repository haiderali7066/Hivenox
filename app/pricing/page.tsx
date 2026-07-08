import type { Metadata } from 'next'
import { Check, Minus } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PricingCards } from '@/components/pricing-cards'
import { Faq } from '@/components/faq'
import { CtaBanner } from '@/components/cta-banner'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for teams of every size. Start free and scale with Hivenox as you grow.',
}

const comparison = [
  { feature: 'Users', starter: '10', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Product modules', starter: '2', growth: 'All', enterprise: 'All' },
  { feature: 'AI Workers', starter: false, growth: '3 included', enterprise: 'Unlimited' },
  { feature: 'Automation workflows', starter: 'Standard', growth: 'Advanced', enterprise: 'Advanced' },
  { feature: 'Analytics & reporting', starter: true, growth: true, enterprise: true },
  { feature: 'API access', starter: false, growth: true, enterprise: true },
  { feature: 'SSO & SCIM', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated success manager', starter: false, growth: false, enterprise: true },
  { feature: 'Custom SLAs', starter: false, growth: false, enterprise: true },
  { feature: 'Support', starter: 'Community', growth: 'Priority', enterprise: '24/7 premium' },
]

const faqs = [
  {
    question: 'Can I try Hivenox before buying?',
    answer:
      'Yes. Every plan includes a 14-day free trial with full access. No credit card required to get started.',
  },
  {
    question: 'What counts as an AI Worker?',
    answer:
      'An AI Worker is an autonomous agent, such as the AI Sales Agent or AI Support Agent, that runs tasks on your behalf. You can add more on the Growth and Enterprise plans.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel at any time from your billing settings, and changes are prorated automatically.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer:
      'Yes, annual billing saves you roughly two months compared to paying monthly. Enterprise plans can be tailored to your budget.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Hivenox is SOC 2 Type II certified and GDPR compliant, with encryption in transit and at rest, granular access controls, and full audit logs.',
  },
]

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <Check className="mx-auto size-5 text-primary" aria-label="Included" />
  if (value === false)
    return <Minus className="mx-auto size-5 text-border" aria-label="Not included" />
  return <span className="text-sm text-foreground">{value}</span>
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that scales with your ambition"
        description="Straightforward plans with everything you need to run your business on AI. Start free, upgrade when you're ready."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      <section className="bg-background pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compare plans"
            title="Everything you get, side by side"
          />
          <Reveal className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-2/5 py-4 text-left text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="py-4 text-center text-sm font-semibold text-foreground">
                    Starter
                  </th>
                  <th className="py-4 text-center text-sm font-semibold text-primary">
                    Growth
                  </th>
                  <th className="py-4 text-center text-sm font-semibold text-foreground">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 text-sm font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-4 text-center">
                      <Cell value={row.starter} />
                    </td>
                    <td className="bg-accent/30 py-4 text-center">
                      <Cell value={row.growth} />
                    </td>
                    <td className="py-4 text-center">
                      <Cell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <Faq items={faqs} description="Everything you need to know about plans and billing." />

      <CtaBanner
        eyebrow="Enterprise"
        title="Need a custom enterprise plan?"
        description="Get volume pricing, advanced security, and white-glove onboarding tailored to your organization."
      />
    </>
  )
}
