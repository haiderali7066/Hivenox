import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  'Work autonomously across sales, support, and recruiting',
  'Learn from your data and follow your business rules',
  'Escalate to humans only when judgment is required',
  'Deploy in minutes, no engineering team required',
]

export function AiWorkers() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-ink-border px-3 py-1 text-xs font-medium text-ink-muted">
            AI Workers
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Hire a digital workforce that never sleeps
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">
            Hivenox AI Workers are autonomous agents that handle real work end to
            end. They plug into your tools, take action, and deliver outcomes
            around the clock.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-ink-muted">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/solutions"
            className="mt-9 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore AI Workers
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-ink-border bg-white shadow-2xl">
            <Image
              src="/hivenox-ai-chat.png"
              alt="Hivenox AI Worker resolving a customer support ticket in a chat interface"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
