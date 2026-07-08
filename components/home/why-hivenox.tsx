import { Shield, Zap, Globe2, Layers, LineChart, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Layers,
    title: 'One unified platform',
    description:
      'ERP, CRM, HR, finance, and AI in a single system with one data model, one login, and zero silos.',
    span: 'lg:col-span-2',
  },
  {
    icon: Zap,
    title: 'Automation everywhere',
    description: 'Trigger workflows across any module and let AI handle the repetitive work.',
    span: '',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II, GDPR, and role-based access baked in from day one.',
    span: '',
  },
  {
    icon: Globe2,
    title: 'Global by design',
    description:
      'Multi-currency, multi-language, and multi-entity support for teams operating worldwide.',
    span: 'lg:col-span-2',
  },
  {
    icon: LineChart,
    title: 'Real-time intelligence',
    description: 'Live dashboards and AI insights turn your data into confident decisions.',
    span: 'lg:col-span-2',
  },
  {
    icon: Lock,
    title: 'You own your data',
    description: 'Full export, audit logs, and transparent controls. No lock-in, ever.',
    span: '',
  },
]

export function WhyHivenox() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Hivenox"
          title="Built for the way modern enterprises work"
          description="Everything you need to run and scale your operations, without stitching together a dozen disconnected tools."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal
                key={f.title}
                delay={(i % 3) * 70}
                className={cn(f.span)}
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
