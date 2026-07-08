import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Workflow, BarChart3, Target, Code2, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { industries } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'AI Workers, intelligent automation, business intelligence, and results-as-a-service for modern enterprises.',
}

const blocks = [
  {
    id: 'ai-workers',
    icon: Bot,
    eyebrow: 'AI Workers',
    title: 'Autonomous agents that do the work, not just assist',
    body: 'Hivenox AI Workers operate like digital employees. They take ownership of complete workflows, sales outreach, ticket resolution, recruiting, and follow through end to end, escalating to your team only when it matters.',
    points: [
      'Self-directed task execution',
      'Long-term context and memory',
      'Human-in-the-loop escalation',
      'Full audit trail on every action',
    ],
  },
  {
    id: 'automation',
    icon: Workflow,
    eyebrow: 'Intelligent Automation',
    title: 'Orchestrate every workflow across every department',
    body: 'Design and deploy automations that span finance, sales, HR, and operations. Trigger from any event, branch on real business logic, and connect to the tools you already use.',
    points: [
      'Visual no-code builder',
      'Cross-department orchestration',
      '300+ native integrations',
      'Real-time monitoring',
    ],
  },
  {
    id: 'bi',
    icon: BarChart3,
    eyebrow: 'Business Intelligence',
    title: 'Decision intelligence in real time',
    body: 'Turn scattered data into a live command center. Ask questions in plain language and get dashboards, forecasts, and anomaly alerts without a data team.',
    points: [
      'Natural-language analytics',
      'Auto-generated dashboards',
      'Predictive forecasting',
      'Proactive anomaly alerts',
    ],
  },
  {
    id: 'raas',
    icon: Target,
    eyebrow: 'Results-as-a-Service',
    title: 'Pay for outcomes, not just software',
    body: 'Our RaaS model aligns our success with yours. We deploy the platform, configure the AI Workers, and are measured on the business results we deliver together.',
    points: [
      'Outcome-based pricing',
      'Dedicated success team',
      'Guaranteed SLAs',
      'Quarterly business reviews',
    ],
  },
  {
    id: 'custom',
    icon: Code2,
    eyebrow: 'Custom Development',
    title: 'Bespoke enterprise software, built to fit',
    body: 'When off-the-shelf is not enough, our engineering pods build custom modules and integrations on top of the Hivenox platform, delivered fast and maintained for you.',
    points: [
      'Dedicated engineering pods',
      'Custom modules & APIs',
      'Enterprise security review',
      'Ongoing maintenance',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Everything you need to run and grow your business"
        description="From autonomous AI Workers to bespoke enterprise builds, Hivenox brings intelligence to every corner of your operation."
        breadcrumb="Solutions"
      />

      <div className="divide-y divide-border">
        {blocks.map((block, i) => (
          <section key={block.id} id={block.id} className="scroll-mt-24 py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    <block.icon className="size-4" />
                    {block.eyebrow}
                  </div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                    {block.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{block.body}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {block.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-medium">
                        <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-demo"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Explore {block.eyebrow}
                    <ArrowRight className="size-4" />
                  </Link>
                </Reveal>

                <Reveal delay={100}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary">
                    <div className="grid-pattern absolute inset-0 opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-24 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                        <block.icon className="size-11" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Built for the way your industry works"
            description="Prebuilt templates, workflows, and AI Workers tuned for the realities of your sector."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 40}>
                <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                  {ind.icon ? (
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ind.icon className="size-5" />
                    </span>
                  ) : null}
                  <span className="font-semibold">{ind.title}</span>
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
