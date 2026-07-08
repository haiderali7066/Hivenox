import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Hivenox replaced five separate tools and gave us one place to run the company. Our team ships work twice as fast.',
    name: 'Sarah Chen',
    role: 'COO, Northwind Logistics',
    initials: 'SC',
  },
  {
    quote:
      'The AI Sales Agent books more qualified meetings than two of our SDRs combined. It paid for itself in a month.',
    name: 'Marcus Webb',
    role: 'VP Sales, Vertex Software',
    initials: 'MW',
  },
  {
    quote:
      'We rolled Hivenox out across three regions in weeks. The unified data model is a genuine game-changer.',
    name: 'Priya Nair',
    role: 'CIO, Meridian Health',
    initials: 'PN',
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer stories"
          title="Loved by teams that move fast"
          description="See why thousands of enterprises choose Hivenox to run and scale their operations."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
