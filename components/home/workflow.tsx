import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    title: 'Connect your business',
    description:
      'Import data and connect the tools you already use. Hivenox maps everything into one unified model.',
  },
  {
    number: '02',
    title: 'Configure workflows',
    description:
      'Design automations with a visual builder, or let AI suggest the workflows that will save you the most time.',
  },
  {
    number: '03',
    title: 'Deploy AI Workers',
    description:
      'Put autonomous agents to work on sales, support, and operations tasks with human oversight where it matters.',
  },
  {
    number: '04',
    title: 'Measure the results',
    description:
      'Track outcomes in real time and continuously optimize with built-in analytics and intelligence.',
  },
]

export function Workflow() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Intelligent automation"
          title="From setup to results in four steps"
          description="A workflow designed to get you live fast and delivering measurable value from week one."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 90} className="relative">
              <div className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-primary">
                {s.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
