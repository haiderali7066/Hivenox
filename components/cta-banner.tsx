import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type CtaBannerProps = {
  eyebrow?: string
  title?: string
  description?: string
}

export function CtaBanner({
  eyebrow = 'Get started',
  title = 'Ready to run your business on AI?',
  description = 'Join thousands of teams using Hivenox to automate operations and grow faster. Book a personalized demo with our team.',
}: CtaBannerProps) {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-ink-border px-3 py-1 text-xs font-medium text-ink-muted">
              {eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink-foreground sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-muted">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-demo"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Book a demo
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex w-full items-center justify-center rounded-lg border border-ink-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-white/10 sm:w-auto"
              >
                View pricing
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
