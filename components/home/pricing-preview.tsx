import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { PricingCards } from '@/components/pricing-cards'

export function PricingPreview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free, then pick the plan that fits. No hidden fees, cancel anytime."
        />
        <div className="mt-14">
          <PricingCards />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Compare all plans and features
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
