import Link from 'next/link'
import { industries } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Industries() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Tailored for your industry"
          description="Prebuilt configurations, workflows, and AI models tuned to the realities of your sector."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <Reveal key={industry.title} delay={(i % 3) * 60}>
                <Link
                  href={industry.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
                >
                  {Icon && (
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                  )}
                  <span className="text-sm font-semibold text-foreground">
                    {industry.title}
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
