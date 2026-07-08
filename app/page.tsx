'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiPlay,
  FiCheck,
  FiShield,
  FiZap,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiPieChart,
  FiLock,
  FiCalendar,
  FiEdit3,
  FiVideo,
  FiSearch,
  FiBarChart2,
  FiTarget,
  FiShoppingCart,
  FiHome,
  FiCoffee,
  FiBriefcase,
  FiHeart,
  FiChevronRight,
  FiAward,
} from 'react-icons/fi'
import {
  FaStar,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaSnapchatGhost,
  FaWhatsapp,
  FaGoogle,
} from 'react-icons/fa'

/* ------------------------------------------------------------------ */
/*  Shared utilities                                                    */
/* ------------------------------------------------------------------ */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function fmt(n: number) {
  return n.toLocaleString('en-US')
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'

/* ------------------------------------------------------------------ */
/*  Reveal — scroll-in animation, reduced-motion aware                  */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
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
        'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Eyebrow + SectionHeading                                            */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]',
        tone === 'light' ? 'text-blue-600' : 'text-blue-300'
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tone === 'light' ? 'bg-blue-600' : 'bg-blue-300')} />
      {children}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left',
        className
      )}
    >
      <div className={cn(align === 'center' && 'flex justify-center')}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Site data                                                           */
/* ------------------------------------------------------------------ */

type CoreWorker = {
  code: string
  name: string
  description: string
  monthly: number
  annual: number
  credits: string
  featured?: boolean
  badge?: string
  featureHead: string
  features: { text: string; inherited?: boolean }[]
  includes: { label: string; value: string }[]
  icon: IconType
}

const coreWorkers: CoreWorker[] = [
  {
    code: '01 · SOCIAL',
    name: 'Social Worker',
    description:
      'You already create — Hivenox schedules, publishes, and keeps you consistent across every channel.',
    monthly: 79,
    annual: 63,
    credits: '1,500 AI credits / mo',
    featureHead: 'What you get',
    icon: FiCalendar,
    features: [
      { text: 'All 6 platforms — scheduling & publishing' },
      { text: '50 scheduled posts / mo + link-in-bio page' },
      { text: 'Bilingual hashtags & best-time posting' },
      { text: 'Evergreen recycling + content calendar' },
      { text: 'Arabic AI · RTL · Hijri · Ramadan engine' },
    ],
    includes: [
      { label: 'Scheduled posts', value: '50 / mo' },
      { label: 'Team seats', value: '3' },
      { label: 'Brand profiles', value: '1' },
      { label: 'Support', value: 'Email + WhatsApp' },
    ],
  },
  {
    code: '02 · CONTENT',
    name: 'Content Worker',
    description:
      'AI posts, blogs, and thought leadership in your brand voice — bilingual, built for authority at scale.',
    monthly: 99,
    annual: 79,
    credits: '3,000 AI credits / mo',
    featureHead: 'What you get',
    icon: FiEdit3,
    features: [
      { text: '70 scheduled posts / mo + 20 AI content pieces' },
      { text: '8 blog drafts / mo + lite website publishing' },
      { text: 'Bilingual brand voice — 3 profiles (AR+EN)' },
      { text: 'Content categories + bulk scheduling' },
      { text: 'Lite approval workflow' },
    ],
    includes: [
      { label: 'Scheduled posts', value: '70 / mo' },
      { label: 'Content pieces', value: '20 / mo' },
      { label: 'Blog drafts', value: '8 / mo' },
      { label: 'Team seats', value: '5' },
      { label: 'Support', value: 'Email + WhatsApp' },
    ],
  },
  {
    code: '03 · GROWTH',
    name: 'Growth Worker',
    description:
      'Automation and content in one place — plus full approval workflows, 3 brands, and a monthly strategist.',
    monthly: 199,
    annual: 159,
    credits: '5,000 AI credits / mo',
    featured: true,
    badge: 'Most popular · best value',
    featureHead: 'Everything, unified',
    icon: FiTrendingUp,
    features: [
      { text: 'Everything in Social Worker', inherited: true },
      { text: 'Everything in Content Worker', inherited: true },
      { text: '200 posts + 40 blogs + 20 videos / mo' },
      { text: 'Full approval workflows + audit logs' },
      { text: 'Advanced analytics, ROI & A/B testing' },
      { text: '12 auto client reports / mo (AR+EN) + Zapier' },
      { text: 'Monthly 60-min strategy session' },
    ],
    includes: [
      { label: 'Scheduled posts', value: '200 / mo' },
      { label: 'Blogs + videos', value: '40 + 20 / mo' },
      { label: 'Team seats', value: '10' },
      { label: 'Brand profiles', value: '3' },
      { label: 'Support', value: 'Priority + Slack' },
    ],
  },
]

type Specialist = {
  name: string
  description: string
  monthly: number
  annual: number
  credits: string
  icon: IconType
  features: string[]
}

const specialists: Specialist[] = [
  {
    name: 'Video Worker',
    description:
      'Scale on TikTok, Reels, Shorts & Snapchat — scripts, hooks, captions, native scheduling.',
    monthly: 129,
    annual: 103,
    credits: '30 videos + 30 scripts / mo · 3 seats',
    icon: FiVideo,
    features: [
      '30 rendered videos / mo — TikTok, Reels, Shorts, Snapchat',
      '30 platform scripts / mo + first-3-sec hooks',
      'AI captions, subtitles & descriptions',
      'Native editor or one-click CapCut export',
      'Watch-time & retention analytics',
    ],
  },
  {
    name: 'SEO Worker',
    description:
      'Bilingual visibility — blog articles, keyword strategy, and regional SERP dominance.',
    monthly: 99,
    annual: 79,
    credits: '12 SEO blog articles / mo · 3 seats',
    icon: FiSearch,
    features: [
      '12 SEO blog articles / mo + custom-domain publishing',
      'Bilingual (EN+AR) keyword & intent mapping',
      'Dialect-aware SERP tracking — 50 keywords',
      'On-page audit + Arabic readability scoring',
      'Regional dominance: KSA · UAE · Egypt · AU',
    ],
  },
  {
    name: 'Analytics Worker',
    description:
      'Prove your ROI — campaign tagging, competitor benchmarking, audience insight, auto-reports.',
    monthly: 49,
    annual: 39,
    credits: '20 auto reports / mo · 3 seats',
    icon: FiBarChart2,
    features: [
      'Advanced dashboards + ROI attribution',
      'Competitor tracking (SERP + social rivals)',
      'Audience segmentation & sentiment trends',
      '20 auto PDF/PPT reports / mo (AR+EN)',
      'Email + WhatsApp support',
    ],
  },
]

const builtFor: { title: string; href: string; icon: IconType }[] = [
  { title: 'Marketing Agencies', href: '/industries/agencies', icon: FiTarget },
  { title: 'Ecommerce Brands', href: '/industries/ecommerce', icon: FiShoppingCart },
  { title: 'Real Estate', href: '/industries/real-estate', icon: FiHome },
  { title: 'Restaurants & Hospitality', href: '/industries/hospitality', icon: FiCoffee },
  { title: 'Professional Services', href: '/industries/professional-services', icon: FiBriefcase },
  { title: 'Healthcare & Clinics', href: '/industries/healthcare', icon: FiHeart },
]

const integrations: { name: string; icon: IconType }[] = [
  { name: 'Instagram', icon: FaInstagram },
  { name: 'TikTok', icon: FaTiktok },
  { name: 'Facebook', icon: FaFacebookF },
  { name: 'LinkedIn', icon: FaLinkedinIn },
  { name: 'YouTube Shorts', icon: FaYoutube },
  { name: 'Snapchat', icon: FaSnapchatGhost },
  { name: 'WhatsApp Business', icon: FaWhatsapp },
  { name: 'Google Business Profile', icon: FaGoogle },
]

const trustedCompanies = [
  'Northwind Media',
  'Souq Digital',
  'Vertex Agency',
  'Lumina Brands',
  'Stratus Retail',
  'Meridian Clinics',
  'Cobalt Realty',
  'Everfield Group',
]

const valueStats = [
  { value: '3×', label: 'Content output vs. manual' },
  { value: '+40%', label: 'Engagement from AI timing' },
  { value: '15+ hrs', label: 'Saved per week, per team' },
  { value: '6', label: 'Channels automated' },
]

const whyFeatures: { icon: IconType; title: string; description: string; span: string }[] = [
  {
    icon: FiLayers,
    title: 'One login, every channel',
    description:
      'Schedule, publish, and monitor Instagram, TikTok, LinkedIn, Facebook, YouTube and Snapchat from a single workspace.',
    span: 'lg:col-span-2',
  },
  {
    icon: FiGlobe,
    title: 'Bilingual by design',
    description: 'Native Arabic AI, RTL layouts, Hijri calendar awareness, and a built-in Ramadan content engine.',
    span: '',
  },
  {
    icon: FiShield,
    title: 'Approval workflows built in',
    description: 'Draft, review, and sign off before anything goes live, with a full audit log.',
    span: '',
  },
  {
    icon: FiPieChart,
    title: 'Real ROI reporting',
    description:
      'Auto-generated client reports in Arabic and English, plus competitor and audience benchmarking.',
    span: 'lg:col-span-2',
  },
  {
    icon: FiZap,
    title: 'Pay only for what you use',
    description: 'Every plan supports pay-as-you-go top-ups for posts, blogs, or videos — no forced upgrades.',
    span: 'lg:col-span-2',
  },
  {
    icon: FiLock,
    title: 'No lock-in, ever',
    description: 'Cancel anytime. Export your calendar, assets, and reports whenever you like.',
    span: '',
  },
]

const workflowSteps = [
  {
    number: '01',
    title: 'Connect your channels',
    description: 'Link Instagram, TikTok, LinkedIn, and the rest in a few clicks — no developer needed.',
  },
  {
    number: '02',
    title: 'Set your brand voice',
    description: 'Teach Hivenox your tone, language mix, and visual style once. Every Worker follows it.',
  },
  {
    number: '03',
    title: 'Let Workers create & publish',
    description: 'AI drafts posts, blogs, and videos on schedule, routed through approval if you need it.',
  },
  {
    number: '04',
    title: 'Review results, optimize',
    description: 'Live dashboards and auto-reports show what is working, in Arabic and English.',
  },
]

const testimonials = [
  {
    quote:
      'Growth Worker replaced our social scheduler, our blog writer, and half our reporting deck. We run three brands with the same headcount as one.',
    name: 'Sarah Chen',
    role: 'Founder, Northwind Media Agency',
    initials: 'SC',
  },
  {
    quote:
      'The Arabic content actually sounds native, not translated. Our Ramadan campaign was the best-performing one we have ever run.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Souq Digital',
    initials: 'MW',
  },
  {
    quote:
      'We started on Social Worker to stay consistent, then upgraded to Growth within a month once the content volume paid for itself.',
    name: 'Priya Nair',
    role: 'Marketing Lead, Meridian Clinics',
    initials: 'PN',
  },
]

const insightPosts = [
  {
    category: 'AI Workers',
    title: 'How AI Workers are replacing the social media retainer',
    date: 'Jun 24, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Bilingual Marketing',
    title: 'What native Arabic AI content actually requires',
    date: 'Jun 12, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Guides',
    title: 'A practical playbook for proving social ROI to clients',
    date: 'May 30, 2026',
    readTime: '5 min read',
  },
]

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(203 213 225 / 0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.10),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/workers"
            className={cn(
              'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-colors hover:text-slate-900',
              focusRing
            )}
          >
            <span className="flex size-1.5 rounded-full bg-blue-600" />
            Free forever plan · 7-day trial on paid · No credit card
            <FiArrowUpRight className="size-3.5" />
          </Link>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            One hive. Every channel.
            <br />
            <span className="text-blue-600">Pick your Worker.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Hivenox is a modular suite of AI Workers — each one solves one marketing
            job exceptionally well. Start where you need to, expand as you grow.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className={cn(
                'inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700 sm:w-auto',
                focusRing
              )}
            >
              Start free trial
              <FiArrowRight className="size-4" />
            </Link>
            <Link
              href="/workers"
              className={cn(
                'inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:w-auto',
                focusRing
              )}
            >
              <FiPlay className="size-4 text-blue-600" />
              See the Workers
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {['🇦🇺 Australia', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', 'Arabic + English native'].map((chip) => (
              <span
                key={chip}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-slate-600 sm:flex-row sm:gap-4">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="size-3.5 text-blue-500" />
              ))}
            </span>
            <span>Rated 4.9/5 by 2,000+ marketing teams</span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl lg:mt-20">
          <div className="pointer-events-none absolute -inset-x-8 -top-8 bottom-0 rounded-[2rem] bg-blue-100/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/5">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="ml-3 rounded-md bg-white px-2 py-0.5 text-xs text-slate-500">
                app.hivenox.com
              </span>
            </div>
            <Image
              src="/hivenox-dashboard.png"
              alt="Hivenox dashboard showing a content calendar, scheduled posts, and channel performance"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full"
            />
          </div>

          <Reveal
            delay={500}
            className="absolute -bottom-6 -left-4 hidden w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-blue-900/10 sm:block lg:-left-10"
          >
            <div className="flex items-start gap-3">
              <span className="relative mt-0.5 flex size-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Growth Worker published</p>
                <p className="mt-0.5 text-xs text-slate-500">Instagram · Facebook · LinkedIn — 2 min ago</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  TrustedStats                                                        */
/* ------------------------------------------------------------------ */

function TrustedStats() {
  return (
    <section className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500">
          Trusted by agencies and brands across AU, UAE, and KSA
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {trustedCompanies.map((c) => (
            <span
              key={c}
              className="text-center text-base font-semibold tracking-tight text-slate-400 transition-colors duration-200 hover:text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
          {valueStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-blue-50/50 text-center">
              <div className="px-6 py-8">
                <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  WhyHivenox                                                          */
/* ------------------------------------------------------------------ */

function WhyHivenox() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Hivenox"
          title="Built for how modern marketing teams actually work"
          description="Everything you need to run a bilingual, multi-channel content operation, without stitching together a dozen disconnected tools."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {whyFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.title} delay={(i % 3) * 70} className={cn(f.span)}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-shadow duration-200 hover:shadow-md hover:shadow-blue-900/5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
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
/*  BillingToggle — segmented control                                   */
/* ------------------------------------------------------------------ */

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean
  onChange: (annual: boolean) => void
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative inline-flex rounded-full border border-slate-200 bg-slate-100 p-1">
        <span
          aria-hidden
          className={cn(
            'absolute inset-y-1 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out',
            annual ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
          )}
        />
        <button
          type="button"
          aria-pressed={!annual}
          onClick={() => onChange(false)}
          className={cn(
            'relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors',
            !annual ? 'text-slate-900' : 'text-slate-500',
            focusRing
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          aria-pressed={annual}
          onClick={() => onChange(true)}
          className={cn(
            'relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors',
            annual ? 'text-slate-900' : 'text-slate-500',
            focusRing
          )}
        >
          Annual
        </button>
      </div>
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-200">
        Save 20%
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  CoreLadder — pricing section                                       */
/* ------------------------------------------------------------------ */

function CoreLadder() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The core ladder"
          title="Social. Content. Or both."
          description="Social publishes what you make. Content makes what you publish. Growth does both — in one login, for less than buying them apart."
        />

        <div className="mt-8 flex justify-center">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>

        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8">
            <div className="mx-auto flex w-fit flex-col items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-4 sm:mx-0">
              <span className="text-2xl font-bold tracking-tight text-blue-600">$0</span>
              <span className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                Free forever
              </span>
            </div>
            <div className="mt-6 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-bold text-slate-900">
                Start free — let the AI show you what it can do
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-slate-600">
                No credit card, no expiry. Connect 3 channels, schedule your week, and
                generate a taste of AI content. When you outgrow it, every paid Worker is
                one click away.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                {['3 channels', '15 posts / mo', '20 AI credits / mo', 'Arabic AI · RTL · Hijri', '1 seat'].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-1.5 sm:mt-0">
              <Link
                href="/signup"
                className={cn(
                  'inline-flex w-full items-center justify-center rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 sm:w-auto',
                  focusRing
                )}
              >
                Start free
              </Link>
              <span className="text-xs text-slate-400">No card · forever free</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {coreWorkers.map((worker, i) => {
            const Icon = worker.icon
            const price = annual ? worker.annual : worker.monthly
            return (
              <Reveal key={worker.name} delay={i * 90}>
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl border p-8 transition-shadow duration-200',
                    worker.featured
                      ? 'border-blue-600 bg-white shadow-xl shadow-blue-900/10'
                      : 'border-slate-200 bg-white hover:shadow-md hover:shadow-blue-900/5'
                  )}
                >
                  {worker.badge && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30">
                      <FiAward className="size-3.5" />
                      {worker.badge}
                    </span>
                  )}
                  <div className="text-xs font-bold tracking-wide text-slate-400">{worker.code}</div>
                  <div className="mt-1.5 flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="size-4.5" />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">{worker.name}</h3>
                  </div>
                  <p className="mt-3 min-h-[2.75rem] text-sm text-slate-600">{worker.description}</p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-slate-500">$</span>
                    <span className="text-4xl font-bold tracking-tight text-slate-900">{fmt(price)}</span>
                    <span className="text-sm font-medium text-slate-400">/mo</span>
                  </div>
                  <div className="mt-1 min-h-[1.1rem] text-xs font-semibold text-emerald-600">
                    {annual ? 'Billed annually · save 20%' : '\u00A0'}
                  </div>

                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600">
                    <FiZap className="size-3.5 text-blue-600" />
                    {worker.credits}
                  </div>

                  <Link
                    href="/signup"
                    className={cn(
                      'mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-semibold transition-colors',
                      worker.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
                      focusRing
                    )}
                  >
                    Start 7-day trial
                    {worker.featured && <FiArrowRight className="size-4" />}
                  </Link>

                  <div className="mt-7 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    {worker.featureHead}
                  </div>
                  <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                    {worker.features.map((f) => (
                      <li key={f.text} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                        <span
                          className={cn(
                            'mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full',
                            f.inherited ? 'bg-blue-600' : 'border border-blue-200 bg-blue-50'
                          )}
                        >
                          <FiCheck className={cn('size-2.5', f.inherited ? 'text-white' : 'text-blue-600')} />
                        </span>
                        <span className={cn(f.inherited && 'font-semibold text-slate-900')}>{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-col gap-2 border-t border-dashed border-slate-200 pt-5">
                    {worker.includes.map((row) => (
                      <div key={row.label} className="flex justify-between text-xs">
                        <span className="text-slate-400">{row.label}</span>
                        <span className="font-semibold text-slate-900">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex gap-4 rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50 p-6">
            <FiChevronRight className="mt-0.5 size-5 shrink-0 text-blue-600" />
            <p className="text-sm leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Why the ladder works: </span>
              Social keeps you consistent, Content keeps you authoritative — and Growth
              combines both in one login, with full approval workflows, 3 brands, and a
              monthly strategist. Most teams start on Social or Content, then graduate to
              Growth within 60 days.
            </p>
          </div>
        </Reveal>
        <Reveal className="mt-4">
          <div className="flex gap-4 rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50 p-6">
            <FiZap className="mt-0.5 size-5 shrink-0 text-blue-600" />
            <p className="text-sm leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Hit your cap? </span>
              Every plan supports pay-as-you-go top-ups — add posts, blogs, or videos any
              time without upgrading. You only pay for what you actually use.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Specialists                                                         */
/* ------------------------------------------------------------------ */

function Specialists() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The specialists"
          title="Bolt on a focused Worker"
          description="Standalone jobs that don't fit the core ladder. Add any to your stack — each a specialist in one thing."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {specialists.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.name} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-900/5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{s.name}</h3>
                  <p className="mt-2 min-h-[2.5rem] text-sm text-slate-600">{s.description}</p>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-slate-500">$</span>
                    <span className="text-3xl font-bold tracking-tight text-slate-900">{s.monthly}</span>
                    <span className="text-xs font-medium text-slate-400">/mo</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{s.credits}</p>

                  <Link
                    href="/signup"
                    className={cn(
                      'mt-5 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50',
                      focusRing
                    )}
                  >
                    Start 7-day trial
                  </Link>

                  <ul className="mt-5 flex flex-1 flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-2 text-[13px] leading-relaxed text-slate-600">
                        <FiChevronRight className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
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
/*  Enterprise                                                          */
/* ------------------------------------------------------------------ */

function Enterprise() {
  return (
    <section className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative grid gap-10 overflow-hidden rounded-2xl border border-blue-900 bg-gradient-to-br from-slate-900 to-blue-950 p-8 sm:p-11 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-200">
                Running an agency or multiple brands?
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Hivenox Enterprise
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-blue-100/80">
                Built for agencies and multi-brand operators. Every Worker, high-volume
                custom quotas, your branding on top — with a dedicated team behind you.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Every Worker, unified',
                  'Custom high-volume quotas & seats',
                  'Lead-gen workflows',
                  'CRM sync — HubSpot, Zoho, Salesforce, Odoo',
                  'Full REST API + webhooks',
                  'White-label reports & client portals',
                  'Concierge migration & onboarding',
                  'Dedicated CSM · 4-hour SLA',
                ].map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] text-blue-100/80">
                    <FiCheck className="mt-0.5 size-3.5 shrink-0 text-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm">
              <p className="text-xs text-blue-200/70">Custom pricing</p>
              <p className="mt-1.5 text-xl font-bold text-white">Let&apos;s scope it</p>
              <p className="mt-3 text-xs leading-relaxed text-blue-100/70">
                Priced to your brand count, seats, and volume — built around how your
                agency actually runs.
              </p>
              <Link
                href="/contact"
                className={cn(
                  'mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50',
                  focusRing
                )}
              >
                Contact sales
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  'mt-3 inline-flex w-full items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10',
                  focusRing
                )}
              >
                Book a demo
              </Link>
              <p className="mt-3 text-[11px] text-blue-200/60">
                Quarterly business review included · No lock-in
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Workflow                                                            */
/* ------------------------------------------------------------------ */

function Workflow() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From setup to results in four steps"
          description="A workflow designed to get you live fast and delivering measurable content output from week one."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
          {workflowSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 90} className="relative">
              <div className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-blue-600">
                {s.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  BuiltFor                                                            */
/* ------------------------------------------------------------------ */

function BuiltFor() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built for"
          title="Teams like yours already run on Hivenox"
          description="Prebuilt workflows and brand-voice presets tuned to the realities of your industry."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {builtFor.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(i % 3) * 60}>
                <Link
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5',
                    focusRing
                  )}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{item.title}</span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  IntegrationsSection                                                 */
/* ------------------------------------------------------------------ */

function IntegrationsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Publishes natively to every channel that matters"
          description="Hivenox connects directly to the platforms your audience is already on."
        />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {integrations.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.name} delay={(i % 6) * 50}>
                <div className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900">
                  <Icon className="size-3.5 text-blue-600" />
                  {item.name}
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
/*  Testimonials                                                        */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer stories"
          title="Loved by teams that move fast"
          description="See why agencies and brands across the region choose Hivenox to run their content operations."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} className="size-3.5 text-blue-500" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-slate-700">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
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

/* ------------------------------------------------------------------ */
/*  Insights                                                            */
/* ------------------------------------------------------------------ */

function Insights() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Latest from the Hivenox blog"
            description="Ideas, guides, and product updates for building a bilingual, AI-first marketing team."
            className="mx-0"
          />
          <Link
            href="/blog"
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100',
              focusRing
            )}
          >
            View all articles
            <FiArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insightPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <Link
                href="/blog"
                className={cn(
                  'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5',
                  focusRing
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-semibold tracking-tight text-white/80">Hivenox</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {post.category}
                  </span>
                  <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug text-slate-900">
                    {post.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span className="size-1 rounded-full bg-slate-300" />
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

/* ------------------------------------------------------------------ */
/*  CtaBanner                                                           */
/* ------------------------------------------------------------------ */

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Put your growth on autopilot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-blue-100/80">
            Start on the free-forever plan, or take any Worker for a 7-day trial.
            No card, no lock-in.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className={cn(
                'inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 sm:w-auto',
                focusRing
              )}
            >
              Start free trial
              <FiArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                'inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto',
                focusRing
              )}
            >
              Talk to sales
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedStats />
      <WhyHivenox />
      <CoreLadder />
      <Specialists />
      <Enterprise />
      <Workflow />
      <BuiltFor />
      <IntegrationsSection />
      <Testimonials />
      <Insights />
      <CtaBanner />
    </>
  ) 
} 