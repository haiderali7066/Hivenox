import Link from 'next/link'
import { ArrowRight, Plug } from 'lucide-react'
import { integrations } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function IntegrationsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Connects with the tools you already use"
          description="Hivenox plugs into your existing stack with hundreds of native integrations and a full API."
        />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {integrations.map((name, i) => (
            <Reveal key={name} delay={(i % 6) * 50}>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground">
                <Plug className="size-4 text-primary" />
                {name}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Browse all integrations
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
