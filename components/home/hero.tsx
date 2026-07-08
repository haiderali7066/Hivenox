import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="grid-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            <span className="flex size-1.5 rounded-full bg-primary" />
            Introducing Hivenox AI Workers
            <ArrowRight className="size-3.5" />
          </Link>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Run your entire business on{' '}
            <span className="text-primary">intelligent AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Hivenox unifies ERP, CRM, and autonomous AI Workers on one platform,
            so your teams move faster, automate the busywork, and deliver real
            business results.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-demo"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 sm:w-auto"
            >
              Book a demo
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
            >
              <Play className="size-4 text-primary" />
              Explore products
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </span>
            <span>Rated 4.9/5 by 2,000+ enterprise teams</span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl lg:mt-20">
          <div className="pointer-events-none absolute -inset-x-8 -top-8 bottom-0 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="ml-3 rounded-md bg-background px-2 py-0.5 text-xs text-muted-foreground">
                app.hivenox.com
              </span>
            </div>
            <Image
              src="/hivenox-dashboard.png"
              alt="Hivenox enterprise dashboard showing revenue analytics, KPIs, and recent orders"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}




// import { Hero } from '@/components/home/hero'
// import { Trusted } from '@/components/home/trusted'
// import { AiWorkers } from '@/components/home/ai-workers'
// import { ProductsShowcase } from '@/components/home/products-showcase'
// import { WhyHivenox } from '@/components/home/why-hivenox'
// import { Workflow } from '@/components/home/workflow'
// import { Industries } from '@/components/home/industries'
// import { IntegrationsSection } from '@/components/home/integrations-section'
// import { Testimonials } from '@/components/home/testimonials'
// import { PricingPreview } from '@/components/home/pricing-preview'
// import { Insights } from '@/components/home/insights'
// import { CtaBanner } from '@/components/cta-banner'

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <Trusted />
//       <AiWorkers />
//       <ProductsShowcase />
//       <WhyHivenox />
//       <Workflow />
//       <Industries />
//       <IntegrationsSection />
//       <Testimonials />
//       <PricingPreview />
//       <Insights />
//       <CtaBanner />
//     </>
//   )
// }