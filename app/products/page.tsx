import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { productCatalog } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the full Hivenox product ecosystem: ERP, CRM, HRMS, AI Workers, and more, all on one unified platform.',
}

const categories = ['Platform', 'Sales', 'People', 'Finance', 'Support', 'AI Worker', 'Operations', 'Intelligence']

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product ecosystem"
        title="Every app your business needs, unified"
        description="From ERP to autonomous AI Workers, the Hivenox suite runs on one shared data model. Adopt everything, or start with a single product."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCatalog.map((product, i) => {
              const Icon = product.icon
              return (
                <Reveal key={product.slug} delay={(i % 3) * 70}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon className="size-5.5" />
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {product.category}
                      </span>
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-foreground">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {product.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="size-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <span className="text-sm text-muted-foreground">
                        From{' '}
                        <span className="text-base font-semibold text-foreground">
                          ${product.monthly}
                        </span>
                        /mo
                      </span>
                      <Link
                        href="/book-demo"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        Book demo
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Not sure where to start?"
        title="Let us build your ideal stack"
        description="Tell us about your business and our team will recommend the right combination of Hivenox products for your goals."
      />
    </>
  )
}
