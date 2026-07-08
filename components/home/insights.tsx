import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const posts = [
  {
    category: 'AI Workers',
    title: 'How autonomous agents are reshaping enterprise operations',
    date: 'Jun 24, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Product',
    title: 'Inside the Hivenox unified data model',
    date: 'Jun 12, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Guides',
    title: 'A practical playbook for automating your finance stack',
    date: 'May 30, 2026',
    readTime: '5 min read',
  },
]

export function Insights() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Latest from the Hivenox blog"
            description="Ideas, guides, and product updates for building an AI-first enterprise."
            className="mx-0"
          />
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            View all articles
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <Link
                href="/contact"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <div className="grid-pattern-dark absolute inset-0 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-semibold tracking-tight text-ink-foreground/80">
                      Hivenox
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="size-1 rounded-full bg-border" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
