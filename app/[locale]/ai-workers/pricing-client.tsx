'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Gift,
  Globe2,
  Moon,
  PenSquare,
  Search,
  Shield,
  TrendingUp,
  Type as TypeIcon,
  Video,
  Wallet,
  X,
  Zap,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                      */
/* ------------------------------------------------------------------ */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type Currency = 'AUD' | 'USD'
type Billing = 'monthly' | 'annual'

// Prices are entered in AUD (HIVENOX's home-market currency). USD is an
// approximate, indicative conversion — actual billing happens in AUD.
const USD_PER_AUD = 0.7

function money(amountAUD: number, currency: Currency) {
  if (amountAUD === 0) return { symbol: currency === 'AUD' ? 'A$' : 'US$', value: '0' }
  const value = currency === 'AUD' ? amountAUD : Math.round(amountAUD * USD_PER_AUD)
  return { symbol: currency === 'AUD' ? 'A$' : 'US$', value: value.toLocaleString('en-US') }
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'

/** CTAs stay sharp-cornered everywhere — the one deliberate contrast against the rounded-2xl/3xl cards and panels. */
function Cta({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'secondaryDark' | 'ghostDark'
  className?: string
}) {
  const styles: Record<string, string> = {
    primary: 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-600/40',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white',
    secondaryDark: 'border-2 border-white/40 text-white hover:-translate-y-0.5 hover:bg-white hover:text-blue-950',
    ghostDark: 'bg-white text-blue-950 hover:-translate-y-0.5 hover:bg-blue-50',
  }
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex w-full items-center justify-center gap-2 rounded-none px-7 py-3.5 text-sm font-bold tracking-tight transition-all duration-300 sm:w-auto',
        styles[variant],
        focusRing,
        className
      )}
    >
      {children}
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  Decoration — blobs, dot grid, floating module badges                */
/* ------------------------------------------------------------------ */

const blobColor: Record<string, string> = {
  blue: 'bg-blue-400/20',
  sky: 'bg-sky-300/25',
  indigo: 'bg-indigo-400/20',
  violet: 'bg-violet-300/20',
  emerald: 'bg-emerald-300/20',
  amber: 'bg-amber-300/25',
  rose: 'bg-rose-300/20',
}

function Blobs({ tones = ['blue', 'violet'] }: { tones?: string[] }) {
  const positions = [
    '-left-24 top-0 h-96 w-96',
    '-right-20 bottom-0 h-[26rem] w-[26rem]',
    'left-1/2 top-1/3 h-72 w-72 -translate-x-1/2',
  ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {tones.map((tone, i) => (
        <div key={tone + i} className={cn('absolute rounded-full blur-3xl', positions[i % positions.length], blobColor[tone])} />
      ))}
    </div>
  )
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0', className)}
      aria-hidden
      style={{
        backgroundImage: 'radial-gradient(rgba(30,64,175,0.14) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(ellipse 65% 55% at 50% 20%, black 40%, transparent 100%)',
      }}
    />
  )
}

const floatBadges: { icon: LucideIcon; top: string; left: string; tone: string; delay: number }[] = [
  { icon: Calendar, top: '14%', left: '8%', tone: 'text-sky-600 bg-sky-50 border-sky-100', delay: 0 },
  { icon: Wallet, top: '68%', left: '10%', tone: 'text-indigo-600 bg-indigo-50 border-indigo-100', delay: 1.1 },
  { icon: BarChart3, top: '20%', left: '88%', tone: 'text-emerald-600 bg-emerald-50 border-emerald-100', delay: 0.6 },
  { icon: Globe2, top: '72%', left: '90%', tone: 'text-violet-600 bg-violet-50 border-violet-100', delay: 1.7 },
  { icon: Video, top: '46%', left: '4%', tone: 'text-rose-600 bg-rose-50 border-rose-100', delay: 2.2 },
  { icon: Search, top: '42%', left: '94%', tone: 'text-amber-600 bg-amber-50 border-amber-100', delay: 0.3 },
]

function FloatingBadges() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes hvxFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
          .hvx-float-badge { animation: hvxFloat 6s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) { .hvx-float-badge { animation: none; } }
        `,
        }}
      />
      {floatBadges.map((b, i) => {
        const Icon = b.icon
        return (
          <div
            key={i}
            className="hvx-float-badge absolute flex size-14 items-center justify-center rounded-2xl border shadow-sm"
            style={{ top: b.top, left: b.left, animationDelay: `${b.delay}s` }}
          >
            <span className={cn('flex size-14 items-center justify-center rounded-2xl border', b.tone)}>
              <Icon className="size-6" />
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section heading — slim weight, restrained size                      */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em]',
          dark ? 'border-white/20 bg-white/10 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-700'
        )}
      >
        <span className={cn('h-1.5 w-1.5 rounded-full', dark ? 'bg-blue-300' : 'bg-blue-600')} />
        {eyebrow}
      </span>
      <h2 className={cn('mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl', dark ? 'text-white' : 'text-slate-900')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg', dark ? 'text-blue-100/80' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Plan data                                                           */
/* ------------------------------------------------------------------ */

type Accent = 'slate' | 'sky' | 'indigo' | 'blue' | 'violet' | 'emerald' | 'amber' | 'rose'

const accentStyles: Record<
  Accent,
  { bar: string; iconBg: string; iconText: string; badgeText: string; solidCta: string; watermark: string }
> = {
  slate: { bar: 'bg-slate-300', iconBg: 'bg-slate-100', iconText: 'text-slate-600', badgeText: 'text-slate-500', solidCta: 'bg-slate-800', watermark: 'text-slate-100' },
  sky: { bar: 'bg-gradient-to-r from-sky-400 to-sky-500', iconBg: 'bg-sky-50', iconText: 'text-sky-600', badgeText: 'text-sky-600', solidCta: 'bg-sky-600', watermark: 'text-sky-100' },
  indigo: { bar: 'bg-gradient-to-r from-indigo-400 to-indigo-500', iconBg: 'bg-indigo-50', iconText: 'text-indigo-600', badgeText: 'text-indigo-600', solidCta: 'bg-indigo-600', watermark: 'text-indigo-100' },
  blue: { bar: 'bg-gradient-to-r from-blue-500 to-blue-600', iconBg: 'bg-blue-50', iconText: 'text-blue-600', badgeText: 'text-blue-600', solidCta: 'bg-blue-600', watermark: 'text-blue-100' },
  violet: { bar: 'bg-gradient-to-r from-violet-400 to-fuchsia-500', iconBg: 'bg-violet-50', iconText: 'text-violet-600', badgeText: 'text-violet-600', solidCta: 'bg-violet-600', watermark: 'text-violet-100' },
  emerald: { bar: 'bg-gradient-to-r from-emerald-400 to-teal-500', iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', badgeText: 'text-emerald-600', solidCta: 'bg-emerald-600', watermark: 'text-emerald-100' },
  amber: { bar: 'bg-gradient-to-r from-amber-400 to-orange-500', iconBg: 'bg-amber-50', iconText: 'text-amber-600', badgeText: 'text-amber-600', solidCta: 'bg-amber-500', watermark: 'text-amber-100' },
  rose: { bar: 'bg-gradient-to-r from-rose-400 to-pink-500', iconBg: 'bg-rose-50', iconText: 'text-rose-600', badgeText: 'text-rose-600', solidCta: 'bg-rose-500', watermark: 'text-rose-100' },
}

type Plan = {
  id: string
  slug: string | null
  number: string
  name: string
  hook: string
  icon: LucideIcon
  accent: Accent
  monthlyAUD: number
  annualAUD: number
  keyHighlight: string
  features: string[]
  featured?: boolean
  addOn?: boolean
  badge?: string
}

const freePlan: Plan = {
  id: 'free',
  slug: null,
  number: 'FREE FOREVER',
  name: 'Free',
  hook: 'Start free — let the AI show you what it can do.',
  icon: Gift,
  accent: 'slate',
  monthlyAUD: 0,
  annualAUD: 0,
  keyHighlight: '3 channels · 15 posts/mo · 1 seat',
  features: ['3 channels', '15 posts/month', '20 AI credits/month', 'Arabic AI · RTL · Hijri support', 'Basic analytics', '1 team seat'],
}

const corePlans: Plan[] = [
  {
    id: 'social',
    slug: 'social-worker',
    number: '01 · SOCIAL',
    name: 'Social Worker',
    hook: 'You already create. HIVENOX schedules, publishes, and keeps you consistent — everywhere.',
    icon: Calendar,
    accent: 'sky',
    monthlyAUD: 79,
    annualAUD: 63,
    keyHighlight: '50 posts/mo · 6 platforms · 1,500 AI credits · 3 seats',
    features: [
      '50 scheduled posts/month across 6 platforms',
      'Link-in-bio page',
      'Bilingual hashtags & best-time posting',
      'Evergreen content recycling + content calendar',
      'Arabic AI · RTL · Hijri · Ramadan engine',
      '1,500 AI credits/month · 3 team seats',
      'Email + WhatsApp support',
    ],
  },
  {
    id: 'content',
    slug: 'content-worker',
    number: '02 · CONTENT',
    name: 'Content Worker',
    hook: 'Sound like the expert you are — in two languages, at scale.',
    icon: PenSquare,
    accent: 'indigo',
    monthlyAUD: 99,
    annualAUD: 79,
    keyHighlight: '70 posts + 20 content pieces + 8 blogs/mo · 5 seats',
    features: [
      '70 scheduled posts + 20 AI content pieces/month',
      '8 blog drafts/month + lite website publishing',
      'Bilingual brand voice — 3 profiles (AR + EN)',
      'Content categories + bulk scheduling',
      'Lite approval workflow',
      '3,000 AI credits/month · 5 team seats',
    ],
  },
  {
    id: 'growth',
    slug: 'growth-worker',
    number: '03 · GROWTH',
    name: 'Growth Worker',
    hook: 'The agency escape hatch — Social + Content, unified.',
    icon: TrendingUp,
    accent: 'blue',
    monthlyAUD: 199,
    annualAUD: 159,
    keyHighlight: '200 posts + 40 blogs + 20 videos/mo · 10 seats',
    featured: true,
    badge: '★ Most popular · best value',
    features: [
      'Everything in Social Worker + Content Worker',
      '200 posts + 40 blogs + 20 videos/month',
      'Full approval workflows + audit logs',
      'Advanced analytics, ROI tracking & A/B testing',
      '12 automated client reports/month (AR + EN)',
      'Zapier integration + monthly 60-min strategy session',
      '5,000 AI credits/month · 10 team seats · 3 brand profiles',
      'Priority + Slack support',
    ],
  },
]

const specialistPlans: Plan[] = [
  {
    id: 'video',
    slug: 'video-worker',
    number: '04 · VIDEO',
    name: 'Video Worker',
    hook: 'Scale on TikTok, Reels, Shorts & Snapchat — without a studio.',
    icon: Video,
    accent: 'rose',
    monthlyAUD: 129,
    annualAUD: 103,
    keyHighlight: '30 videos + 30 scripts/mo · 3 seats',
    features: [
      '30 rendered videos + 30 platform scripts/month',
      'First-3-second hooks + AI captions & subtitles',
      'Native editor + one-click CapCut export',
      'Watch-time & retention analytics',
      '3 team seats',
    ],
  },
  {
    id: 'seo',
    slug: 'seo-worker',
    number: '05 · SEO',
    name: 'SEO Worker',
    hook: 'Get found by the people already searching for you — in both languages.',
    icon: Search,
    accent: 'emerald',
    monthlyAUD: 99,
    annualAUD: 79,
    keyHighlight: '12 SEO articles/mo · 50 keywords tracked · 3 seats',
    features: [
      '12 SEO blog articles/month + custom-domain publishing',
      'Bilingual EN + AR keyword & intent mapping',
      'Dialect-aware SERP tracking — 50 keywords',
      'On-page audit + Arabic readability scoring',
      'Regional SEO: KSA · UAE · Egypt · Australia',
      '3 team seats',
    ],
  },
  {
    id: 'analytics',
    slug: 'advanced-analytics-worker',
    number: '06 · ANALYTICS',
    name: 'Advanced Analytics Worker',
    hook: 'Prove your ROI — and know exactly where your money is best spent.',
    icon: BarChart3,
    accent: 'amber',
    monthlyAUD: 49,
    annualAUD: 39,
    keyHighlight: '20 automated reports/mo · add-on to any Worker',
    addOn: true,
    features: [
      'Advanced dashboards + ROI attribution + campaign tagging',
      'SERP & social competitor tracking',
      'Audience segmentation + sentiment trends',
      '20 automated PDF/PPT reports/month (AR + EN)',
      'Email + WhatsApp support · 3 team seats',
    ],
  },
]

const allPlansForTable: Plan[] = [freePlan, ...corePlans, ...specialistPlans]

const enterprisePlan: Plan = {
  id: 'enterprise',
  slug: 'enterprise-growth-os',
  number: '07 · ENTERPRISE',
  name: 'Enterprise',
  hook: '',
  icon: Building2,
  accent: 'blue',
  monthlyAUD: 0,
  annualAUD: 0,
  keyHighlight: 'Full AI workforce',
  features: [],
}

const tableColumns: Plan[] = [...allPlansForTable, enterprisePlan]

/* ------------------------------------------------------------------ */
/*  1. Hero                                                             */
/* ------------------------------------------------------------------ */

const trustPoints = [
  'Free-forever plan',
  '7-day trial on paid Workers',
  'No credit card',
  'Arabic + English native',
  'Built for Australia, UAE & Saudi Arabia',
  'Save 20% on annual plans',
]

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pb-20 pt-16">
      <Blobs tones={['blue', 'violet', 'sky']} />
      <DotGrid />
      <FloatingBadges />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            AI Workers · Index &amp; Pricing
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Every Worker, side by side.
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              Pick your rung on the ladder.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
            A modular suite of AI Workers — each built to solve a specific job exceptionally well. Start where you need
            to, expand as you grow, and bring your entire AI workforce together when you&rsquo;re ready.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm font-semibold text-slate-500">
            Start free forever, or take any paid Worker for a 7-day trial. No credit card. No lock-in.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Cta href="/book">
              Start Free
              <ArrowRight className="size-4" />
            </Cta>
            <Cta href="#ladder" variant="secondary">
              Compare Workers
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            {trustPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600">
                <Check className="size-4 text-blue-600" />
                {point}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Billing + currency control                                       */
/* ------------------------------------------------------------------ */

function PricingControls({
  billing,
  setBilling,
  currency,
  setCurrency,
}: {
  billing: Billing
  setBilling: (b: Billing) => void
  currency: Currency
  setCurrency: (c: Currency) => void
}) {
  return (
    <div className="sticky top-4 z-30 mb-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
      <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur">
        <button
          type="button"
          onClick={() => setBilling('monthly')}
          className={cn(
            'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
            billing === 'monthly' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900',
            focusRing
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling('annual')}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
            billing === 'annual' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900',
            focusRing
          )}
        >
          Annual
          <span
            className={cn(
              'rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase',
              billing === 'annual' ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700'
            )}
          >
            Save 20%
          </span>
        </button>
      </div>

      <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur">
        {(['AUD', 'USD'] as Currency[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCurrency(c)}
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              currency === c ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900',
              focusRing
            )}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Price display                                                       */
/* ------------------------------------------------------------------ */

function PriceTag({ plan, billing, currency }: { plan: Plan; billing: Billing; currency: Currency }) {
  const amount = billing === 'monthly' ? plan.monthlyAUD : plan.annualAUD
  const { symbol, value } = money(amount, currency)
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-lg font-semibold text-slate-500">{symbol}</span>
      <span className="text-4xl font-semibold tracking-tight text-slate-900">{value}</span>
      <span className="text-sm font-medium text-slate-400">/mo</span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Core ladder + specialists — colored plan cards                   */
/* ------------------------------------------------------------------ */

function PlanCard({ plan, billing, currency, delay = 0 }: { plan: Plan; billing: Billing; currency: Currency; delay?: number }) {
  const Icon = plan.icon
  const a = accentStyles[plan.accent]
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1',
          plan.featured ? 'border-blue-300 shadow-2xl shadow-blue-900/15' : 'border-slate-200 hover:shadow-lg hover:shadow-slate-900/5'
        )}
      >
        {/* colored top accent — makes each rung of the ladder visually distinct */}
        <span className={cn('absolute inset-x-0 top-0 h-1.5', a.bar)} aria-hidden />
        {/* faint watermark number */}
        <span className={cn('pointer-events-none absolute -right-2 -top-3 select-none font-mono text-6xl font-bold', a.watermark)} aria-hidden>
          {plan.number.replace(/[^0-9]/g, '') || '★'}
        </span>

        {plan.badge && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30">
            {plan.badge}
          </span>
        )}

        <div className="relative flex items-center justify-between">
          <span className={cn('text-xs font-bold tracking-wide', a.badgeText)}>{plan.number}</span>
          {plan.addOn && (
            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-600 ring-1 ring-inset ring-violet-200">
              Add-on
            </span>
          )}
        </div>

        <div className="relative mt-3 flex items-center gap-3">
          <span className={cn('flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110', a.iconBg, a.iconText)}>
            <Icon className="size-6" />
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">{plan.name}</h3>
        </div>

        <p className="relative mt-4 min-h-[3.25rem] text-base leading-relaxed text-slate-600">{plan.hook}</p>

        <div className="relative mt-6">
          <PriceTag plan={plan} billing={billing} currency={currency} />
          <p className="mt-1 min-h-[1.25rem] text-xs font-semibold text-emerald-600">
            {billing === 'annual' && plan.monthlyAUD > 0 ? 'Billed annually · save 20%' : '\u00A0'}
          </p>
        </div>

        <div className="relative mt-2 inline-flex w-fit items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600">
          <Zap className={cn('size-3.5', a.iconText)} />
          {plan.keyHighlight}
        </div>

        <Cta href="/book" variant={plan.featured ? 'primary' : 'secondary'} className="relative mt-6 w-full">
          {plan.monthlyAUD === 0 ? 'Start Free' : 'Start 7-Day Trial'}
        </Cta>

        {plan.slug && (
          <Link
            href={`/ai-workers/${plan.slug}`}
            className={cn('relative mt-3 inline-flex items-center gap-1 self-center text-sm font-semibold hover:underline', a.badgeText)}
          >
            View {plan.name}
            <ArrowRight className="size-3.5" />
          </Link>
        )}

        <ul className="relative mt-7 flex flex-1 flex-col gap-2.5 border-t border-dashed border-slate-200 pt-6">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
              <CheckCircle2 className={cn('mt-0.5 size-4 shrink-0', a.iconText)} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

function CoreLadder({ billing, currency }: { billing: Billing; currency: Currency }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The core ladder</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Social. Content. Or both.</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Social publishes what you make. Content makes what you publish. Growth does both — in one login, for less than
          buying them separately.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
        <span className="rounded-full bg-slate-100 px-3 py-1">Start Free</span>
        <ArrowRight className="size-3.5" />
        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">Social</span>
        <ArrowRight className="size-3.5" />
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">Content</span>
        <ArrowRight className="size-3.5" />
        <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">Growth</span>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        <PlanCard plan={freePlan} billing={billing} currency={currency} />
        {corePlans.map((p, i) => (
          <PlanCard key={p.id} plan={p} billing={billing} currency={currency} delay={(i + 1) * 90} />
        ))}
      </div>
    </div>
  )
}

function Specialists({ billing, currency }: { billing: Billing; currency: Currency }) {
  return (
    <div className="mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">The specialists</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Bolt on a focused Worker.</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Standalone specialist Workers for jobs outside the core ladder. Add exactly what your business needs.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {specialistPlans.map((p, i) => (
          <PlanCard key={p.id} plan={p} billing={billing} currency={currency} delay={i * 90} />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  5. Enterprise Growth OS                                             */
/* ------------------------------------------------------------------ */

const enterpriseFeatures = [
  'Every Worker, unified — custom high-volume quotas & seats',
  'Lead-generation workflows + CRM sync (HubSpot, Zoho, Salesforce, Odoo)',
  'Full REST API + webhooks',
  'White-label reports + client portals',
  'Concierge migration & onboarding',
  'Dedicated CSM + 4-hour SLA + quarterly business reviews',
]

function Enterprise() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              <Building2 className="size-3.5" />
              Enterprise AI workforce
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Every Worker, unified. Your branding on top. A dedicated team behind you.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-blue-100/80 sm:text-lg">
              Built for agencies, multi-brand operators, and teams running full-funnel demand generation at scale — with
              custom quotas, white-label reporting, CRM integrations, API access, and a dedicated customer success team.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-blue-50">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-300" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Cta href="/contact" variant="ghostDark">
                Contact Sales
                <ArrowRight className="size-4" />
              </Cta>
              <Cta href="/book" variant="secondaryDark">
                Book a Demo
              </Cta>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-200/70">Pricing</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-white">Custom</p>
            <p className="mt-2 text-sm text-blue-100/70">Priced around brands, seats, usage volume, Workers, and CRM integrations.</p>
            <p className="mt-6 text-sm font-semibold text-blue-100">Running an agency or multiple brands?</p>
            <p className="text-sm text-blue-100/70">Let&rsquo;s scope it around how you actually work.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. Why the ladder works                                             */
/* ------------------------------------------------------------------ */

const ladderSteps = [
  { title: 'Social', description: 'Keep your brand consistent.', icon: Calendar, tone: 'sky' as Accent },
  { title: 'Content', description: 'Build authority and trust.', icon: PenSquare, tone: 'indigo' as Accent },
  { title: 'Growth', description: 'Unify Social + Content and scale your marketing engine.', icon: TrendingUp, tone: 'blue' as Accent },
]

function WhyLadderWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white py-24 sm:py-28">
      <DotGrid className="opacity-60" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How it works" title="Start with one job. Build your workforce as you grow." />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-sky-200 via-indigo-300 to-blue-300 sm:block" />
          {ladderSteps.map((step, i) => {
            const Icon = step.icon
            const a = accentStyles[step.tone]
            return (
              <Reveal key={step.title} delay={i * 100} className="relative text-center">
                <div className={cn('mx-auto flex size-16 items-center justify-center rounded-2xl border shadow-sm', a.iconBg, a.iconText, 'border-white')}>
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mt-14">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm">
            <p className="text-base font-semibold text-slate-900">Hit your cap?</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Pay-as-you-go top-ups let you add posts, blogs, or videos without upgrading. Only pay for what you actually
              use.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  7. Comparison table                                                 */
/* ------------------------------------------------------------------ */

type TableRow = { label: string; values: (string | boolean)[]; advanced?: boolean }

function buildComparisonRows(billing: Billing, currency: Currency): TableRow[] {
  const priceRow = (which: Billing): TableRow => ({
    label: which === 'monthly' ? 'Monthly price' : 'Annual price',
    values: tableColumns.map((p) => {
      if (p.id === 'enterprise') return 'Custom'
      const amt = which === 'monthly' ? p.monthlyAUD : p.annualAUD
      const { symbol, value } = money(amt, currency)
      return amt === 0 ? 'Free' : `${symbol}${value}/mo`
    }),
  })

  return [
    priceRow('monthly'),
    priceRow('annual'),
    { label: 'Key output', values: tableColumns.map((p) => p.keyHighlight.split('·')[0].trim()) },
    { label: 'Team seats', values: ['1', '3', '5', '10', '3', '3', '3', 'Custom'] },
    { label: 'Brand profiles', values: ['1', '1', '3', '3', '1', '1', 'Any', 'Custom'] },
    { label: 'Arabic AI · RTL', values: [true, true, true, true, false, true, false, true] },
    { label: 'Hijri · Ramadan engine', values: [true, true, false, true, false, false, false, true], advanced: true },
    { label: 'SEO tracking', values: [false, false, false, false, false, true, false, true], advanced: true },
    { label: 'Advanced analytics', values: [false, false, false, true, false, false, true, true], advanced: true },
    { label: 'Approval workflows', values: [false, false, 'Lite', true, false, false, false, true], advanced: true },
    { label: 'CRM integrations', values: [false, false, false, false, false, false, false, true], advanced: true },
    { label: 'API access', values: [false, false, false, false, false, false, false, true], advanced: true },
    { label: 'White-label', values: [false, false, false, false, false, false, false, true], advanced: true },
    { label: 'Dedicated CSM', values: [false, false, false, false, false, false, false, true], advanced: true },
  ]
}

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? <Check className="mx-auto size-4 text-blue-600" /> : <X className="mx-auto size-4 text-slate-300" />
  }
  return <span>{value}</span>
}

function ComparisonTable({ billing, currency }: { billing: Billing; currency: Currency }) {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const rows = buildComparisonRows(billing, currency)
  const visibleRows = showAdvanced ? rows : rows.filter((r) => !r.advanced)

  return (
    <div className="mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">At a glance</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Compare every AI Worker.</h3>
      </div>

      <Reveal className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1080px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="sticky left-0 z-10 bg-slate-50 px-5 py-4 font-semibold text-slate-500">Feature</th>
                {tableColumns.map((p) => (
                  <th key={p.id} className={cn('px-5 py-4 text-center font-semibold', p.featured ? 'text-blue-600' : 'text-slate-900')}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, i) => (
                <tr key={row.label} className={cn('border-b border-slate-100', i % 2 === 1 && 'bg-slate-50/50')}>
                  <td className="sticky left-0 z-10 bg-inherit px-5 py-3.5 font-medium text-slate-700">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-5 py-3.5 text-center text-slate-600">
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-center">
          <button
            type="button"
            onClick={() => setShowAdvanced((v) => !v)}
            className={cn('inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700', focusRing)}
          >
            {showAdvanced ? 'Show fewer features' : 'Show all features'}
            <ChevronDown className={cn('size-4 transition-transform duration-300', showAdvanced && 'rotate-180')} />
          </button>
        </div>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  8. Value / ROI                                                      */
/* ------------------------------------------------------------------ */

const valueStats = [
  { value: '3×', label: 'Content output vs. manual', tone: 'sky' as Accent },
  { value: '+40%', label: 'Engagement from AI timing', tone: 'indigo' as Accent },
  { value: '15+ hrs', label: 'Saved per week, per team', tone: 'emerald' as Accent },
  { value: '6', label: 'Channels automated', tone: 'violet' as Accent },
]

function ValueSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50/40 to-white py-24 sm:py-28">
      <Blobs tones={['sky', 'emerald']} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why teams choose HIVENOX"
          title="The value is in the output."
          description="Every Worker replaces hours of manual work and expensive agency retainers. The goal isn't another dashboard — it's more capacity for your team."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {valueStats.map((s, i) => {
            const a = accentStyles[s.tone]
            return (
              <Reveal key={s.label} delay={i * 80}>
                <div className="h-full rounded-3xl border border-white bg-white/80 px-6 py-9 text-center shadow-sm backdrop-blur-sm">
                  <p className={cn('text-3xl font-semibold tracking-tight', a.iconText)}>{s.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mx-auto mt-10 max-w-2xl rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm">
          <p className="text-base font-semibold text-slate-900">Two ways to start free.</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            Use the free-forever plan for as long as you like — or take any paid Worker for a full 7-day trial with no
            credit card.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  9. Regional / bilingual trust                                       */
/* ------------------------------------------------------------------ */

const regionalCards: { flag: string; title: string; description: string; tone: Accent }[] = [
  { flag: '🇦🇺', title: 'Australia', description: 'Built for businesses operating in Australia.', tone: 'blue' },
  { flag: '🇦🇪', title: 'UAE', description: 'Bilingual operations for the Gulf.', tone: 'emerald' },
  { flag: '🇸🇦', title: 'Saudi Arabia', description: 'Arabic-first experiences with regional context.', tone: 'amber' },
]

function RegionalTrust() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Built to travel" title="Built for the way modern businesses operate." />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {regionalCards.map((card, i) => {
            const a = accentStyles[card.tone]
            return (
              <Reveal key={card.title} delay={i * 90}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-900/5">
                  <span className={cn('flex size-16 items-center justify-center rounded-full text-3xl', a.iconBg)}>{card.flag}</span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-blue-100 bg-blue-50/50 px-8 py-6 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Globe2 className="size-4 text-blue-600" />
            Arabic + English native
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
            <TypeIcon className="size-4 text-blue-600" />
            RTL-aware
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Moon className="size-4 text-blue-600" />
            Hijri &amp; Ramadan-ready
          </span>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  10. FAQ                                                             */
/* ------------------------------------------------------------------ */

const faqs = [
  { q: 'Is there really a free plan?', a: 'Yes. The Free plan is free forever, with no credit card and no expiry. Use it for as long as you like and upgrade when you need more capacity.' },
  { q: 'Can I try paid Workers?', a: 'Yes. Every paid Worker comes with a full 7-day trial. No credit card is required.' },
  { q: 'What happens when I reach my plan limit?', a: 'Pay-as-you-go top-ups let you add posts, blogs, or videos without upgrading your plan. You only pay for what you use.' },
  { q: 'Can I combine multiple Workers?', a: 'Yes. Start with one Worker and add specialist Workers as your business grows. Growth Worker also combines Social and Content in one unified experience.' },
  { q: 'Can I use HIVENOX in Arabic?', a: 'Yes. HIVENOX Workers are built for native Arabic and English experiences, with RTL support and regional features such as Hijri and Ramadan planning.' },
  { q: 'Can agencies use HIVENOX?', a: 'Yes. Enterprise Growth OS is built specifically for agencies and multi-brand businesses, with white-label reporting, client portals, CRM integrations, custom quotas, API access, and dedicated support.' },
  { q: 'Is annual billing available?', a: 'Yes. Monthly pricing is shown by default, and annual plans save 20%.' },
  { q: 'Which Worker should I choose?', a: 'Choose Social if consistency is your biggest challenge, Content if authority and long-form content are your priority, Growth if you want both in one system, or add specialist Workers such as Video, SEO, or Analytics for specific goals.' },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Frequently asked questions" title="Common questions, answered." />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={(i % 4) * 60}>
                <div className={cn('overflow-hidden rounded-2xl border bg-white transition-colors', isOpen ? 'border-blue-200' : 'border-slate-200')}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 border-l-4 px-6 py-4 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50',
                      isOpen ? 'border-blue-500' : 'border-transparent',
                      focusRing
                    )}
                  >
                    {item.q}
                    <ChevronDown className={cn('size-4 shrink-0 text-blue-600 transition-transform duration-300', isOpen && 'rotate-180')} />
                  </button>
                  <div className={cn('grid transition-all duration-300 ease-out', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                    <div className="overflow-hidden">
                      <p className="border-l-4 border-transparent px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  11. Final CTA                                                       */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
            <Shield className="size-3.5" />
            No card. No lock-in.
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Put your growth on autopilot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-blue-50/90">
            Start on the free-forever plan, or take any paid Worker for a 7-day trial.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Cta href="/book" variant="ghostDark">
              Start Free Trial
              <ArrowRight className="size-4" />
            </Cta>
            <Cta href="/contact" variant="secondaryDark">
              Talk to Sales
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AllAIWorkersPage() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const [currency, setCurrency] = useState<Currency>('AUD')

  return (
    <main>
      <Hero />

      <section id="ladder" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-24 sm:py-28">
        <DotGrid className="opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plans &amp; pricing"
            title="Every Worker, one shared platform."
            description="Prices shown in AUD by default — switch to USD for an approximate, indicative conversion. Billing always happens in AUD."
          />

          <div className="mt-10">
            <PricingControls billing={billing} setBilling={setBilling} currency={currency} setCurrency={setCurrency} />
          </div>

          <CoreLadder billing={billing} currency={currency} />
          <Specialists billing={billing} currency={currency} />
          <ComparisonTable billing={billing} currency={currency} />
        </div>
      </section>

      <Enterprise />
      <WhyLadderWorks />
      <ValueSection />
      <RegionalTrust />
      <FAQ />
      <FinalCta />
    </main>
  )
}