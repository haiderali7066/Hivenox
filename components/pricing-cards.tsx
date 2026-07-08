import Link from 'next/link'
import { Check } from 'lucide-react'
import { plans } from '@/lib/pricing'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 80} className="h-full">
          <div
            className={cn(
              'flex h-full flex-col rounded-2xl border p-8',
              plan.featured
                ? 'border-primary bg-card shadow-xl shadow-primary/10 ring-1 ring-primary'
                : 'border-border bg-card',
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              {plan.featured && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {plan.description}
            </p>
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <Link
              href={plan.href}
              className={cn(
                'mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors',
                plan.featured
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'border border-border bg-background text-foreground hover:bg-muted',
              )}
            >
              {plan.cta}
            </Link>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
