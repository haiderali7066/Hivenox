import type { Metadata } from 'next'
import Image from 'next/image'
import { Compass, Rocket, HeartHandshake, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hivenox is on a mission to give every business an AI-powered workforce. Learn about our story, values, and team.',
}

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '4,200+', label: 'Customers' },
  { value: '38', label: 'Countries' },
  { value: '480', label: 'Employees' },
]

const values = [
  {
    icon: Compass,
    title: 'Customer obsession',
    body: 'Every decision starts with the outcome our customers need. We measure ourselves on their results.',
  },
  {
    icon: Rocket,
    title: 'Bias for momentum',
    body: 'We ship fast, learn faster, and compound small wins into category-defining products.',
  },
  {
    icon: HeartHandshake,
    title: 'Radical trust',
    body: 'We earn trust with transparency, security, and doing exactly what we say we will do.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible AI',
    body: 'We build AI that is safe, explainable, and always keeps a human in control.',
  },
]

const timeline = [
  { year: '2019', title: 'The beginning', body: 'Founded with a bet that AI would reshape how businesses run.' },
  { year: '2021', title: 'Platform launch', body: 'Shipped the unified Hivenox platform with ERP, CRM, and HRMS.' },
  { year: '2023', title: 'AI Workers', body: 'Introduced autonomous AI Workers, redefining the category.' },
  { year: '2025', title: 'Global scale', body: 'Crossed 4,000 customers across 38 countries with RaaS.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hivenox"
        title="We are building the AI workforce for every business"
        description="Hivenox exists to put an intelligent, autonomous team inside every company, so people can focus on the work that only humans can do."
        breadcrumb="About"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/hivenox-team.png"
                alt="The Hivenox team collaborating in a modern office"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our mission"
            title="Give every business an AI-powered workforce"
            description="Enterprise software has been complex, siloed, and expensive for decades. We believe AI changes that, making world-class operations accessible to companies of every size. Our platform unifies your tools and layers autonomous AI Workers on top, so your team is freed to do their best work."
            center
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our values" title="What we stand for" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink py-20 text-ink-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our journey" title="From a bold bet to a global platform" invert />
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className="relative border-t-2 border-primary pt-5">
                  <div className="text-2xl font-bold text-primary">{t.year}</div>
                  <h3 className="mt-2 font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
