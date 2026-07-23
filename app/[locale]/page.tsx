'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Briefcase,
  Building,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Cloud,
  Coffee,
  Database,
  Globe,
  Globe2,
  Headset,
  Heart,
  HeartPulse,
  Landmark,
  Layers,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Megaphone,
  Mic,
  PenSquare,
  PenTool,
  PieChart,
  PlayCircle,
  Rocket,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UserCog,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import { NavItem } from '@/lib/site-data'

/* ------------------------------------------------------------------ */
/*  Utilities                                                           */
/* ------------------------------------------------------------------ */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function fmt(n: number) {
  return n.toLocaleString('en-US')
}

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'
const focusRingDark = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

/* ------------------------------------------------------------------ */
/*  Reveal — IntersectionObserver + CSS transition                      */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
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
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  CountUp                                                             */
/* ------------------------------------------------------------------ */

function CountUp({ value, suffix = '', duration = 1300 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const start = performance.now()
        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1)
          setDisplay(Math.floor(progress * value))
          if (progress < 1) requestAnimationFrame(tick)
          else setDisplay(value)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {fmt(display)}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Dark backdrop — CSS-only glow orbs + grid                           */
/* ------------------------------------------------------------------ */

function DarkBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes hvGlowA { 0%,100% { transform: translate(0,0) scale(1);} 50% { transform: translate(40px,-30px) scale(1.08);} }
        @keyframes hvGlowB { 0%,100% { transform: translate(0,0) scale(1);} 50% { transform: translate(-30px,40px) scale(1.1);} }
        .hv-glow-a { animation: hvGlowA 12s ease-in-out infinite; }
        .hv-glow-b { animation: hvGlowB 14s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .hv-glow-a, .hv-glow-b { animation: none; } }
      `}</style>
      <div className="hv-glow-a absolute -left-32 -top-32 size-[420px] rounded-full bg-blue-500/20 blur-3xl" style={{ willChange: 'transform' }} />
      <div className="hv-glow-b absolute -bottom-40 -right-20 size-[460px] rounded-full bg-sky-400/10 blur-3xl" style={{ willChange: 'transform' }} />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, rgb(255 255 255) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                     */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left', className)}>
      <div className={cn('inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]', tone === 'dark' ? 'text-sky-300' : 'text-blue-600', align === 'center' && 'justify-center')}>
        <span className={cn('h-1.5 w-1.5 rounded-full', tone === 'dark' ? 'bg-sky-300' : 'bg-blue-600')} />
        {eyebrow}
      </div>
      <h2 className={cn('mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl', tone === 'dark' ? 'text-white' : 'text-slate-900')}>{title}</h2>
      {description && <p className={cn('mt-4 text-pretty text-lg leading-relaxed', tone === 'dark' ? 'text-blue-100/75' : 'text-slate-600')}>{description}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  1. Welcome to the Agentic Enterprise — five pillars                 */
/* ------------------------------------------------------------------ */

type Pillar = {
  title: string
  description: string
  icon: LucideIcon
  theme: {
    bg: string
    text: string
    desc: string
    iconBg: string
    iconColor: string
  }
}

const pillars: Pillar[] = [
  { 
    title: 'AI Workforce', 
    description: 'Hire specialist workers and agents that do the work, day and night.', 
    icon: Bot,
    theme: {
      bg: 'bg-indigo-600',
      text: 'text-white',
      desc: 'text-indigo-100',
      iconBg: 'bg-white/20',
      iconColor: 'text-white'
    }
  },
  { 
    title: 'Results-as-a-Service', 
    description: 'Buy the outcome — we run the workers and systems for you.', 
    icon: Rocket,
    theme: {
      bg: 'bg-rose-600',
      text: 'text-white',
      desc: 'text-rose-100',
      iconBg: 'bg-white/20',
      iconColor: 'text-white'
    }
  },
  { 
    title: 'One Platform', 
    description: 'CRM, ERP, HR, finance and ops on one shared database.', 
    icon: Layers,
    theme: {
      bg: 'bg-yellow-400', 
      text: 'text-black',
      desc: 'text-black/80',
      iconBg: 'bg-black/10',
      iconColor: 'text-black'
    }
  },
  { 
    title: 'Live Analytics', 
    description: 'Ground every decision in real business context, in real time.', 
    icon: BarChart3,
    theme: {
      bg: 'bg-emerald-600',
      text: 'text-white',
      desc: 'text-emerald-100',
      iconBg: 'bg-white/20',
      iconColor: 'text-white'
    }
  },
  { 
    title: 'One Data Foundation', 
    description: 'One governed, trusted, bilingual source of truth.', 
    icon: Database,
    theme: {
      bg: 'bg-violet-600',
      text: 'text-white',
      desc: 'text-violet-100',
      iconBg: 'bg-white/20',
      iconColor: 'text-white'
    }
  },
]

export function AgenticEnterprise() {
  return (
    <section className="bg-white py-12">
      {/* Expanded max-width for wider layout footprint */}
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6">
        
        {/* Centered Heading with significantly increased font sizes, keeping the slim/medium weight */}
        <div className="mx-auto mb-12 flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Welcome to the Agentic Enterprise
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Where humans, agents, and platforms run your whole business together.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            HIVENOX isn't software you learn — it's a workforce and a foundation you switch on.
          </p>
        </div>

        {/* Minimized grid gaps for tighter layout execution */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div 
                key={p.title}
                /* Fixed, larger height (240px) that absolutely will not shrink on mobile viewports */
                className="group h-[240px] w-full shrink-0 [perspective:1000px]"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Flip Wrapper */}
                <div className="relative h-full w-full rounded-xl shadow-sm transition-transform duration-500 hover:shadow-md group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
                  
                  {/* Front Face - Now shares the exact same background as the back */}
                  <div className={cn(
                    'absolute inset-0 flex flex-col rounded-xl p-5 [backface-visibility:hidden]',
                    p.theme.bg,
                    p.theme.text
                  )}>
                    <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-lg', p.theme.iconBg, p.theme.iconColor)}>
                      <Icon className="size-4" />
                    </span>
                    <h3 className="mt-4 text-[13px] font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className={cn('mt-1.5 flex-1 text-[11px] leading-relaxed', p.theme.desc)}>
                      {p.description}
                    </p>
                  </div>

                  {/* Back Face */}
                  <div 
                    className={cn(
                      'absolute inset-0 flex flex-col items-center justify-center rounded-xl p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]',
                      p.theme.bg,
                      p.theme.text
                    )}
                  >
                    <Icon className="mb-3 size-7 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-[13px] font-semibold tracking-tight text-center">
                      {p.title}
                    </h3>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Three ways to grow                                               */
/* ------------------------------------------------------------------ */

const growthPaths: { tag: string; title: string; description: string; icon: LucideIcon; gradient: string; href: string }[] = [
  {
    tag: 'HIRE THE DOERS',
    title: 'AI Workforce',
    description: 'Purpose-built digital employees that own a whole job — content, sales, support, hiring, voice — around the clock, bilingually. Start in minutes, approve rather than operate, and pay a fraction of agency cost.',
    icon: Bot,
    gradient: 'from-blue-600 to-sky-500',
    href: '/ai-workers',
  },
  {
    tag: 'BUY THE OUTCOME',
    title: 'Results-as-a-Service',
    description: "Don't want to run it yourself? We operate the workers and systems for you and are measured on results — leads generated, content published, pipeline built, hours returned. Capacity without headcount.",
    icon: Rocket,
    gradient: 'from-indigo-600 to-blue-700',
    href: '/solutions/results-as-a-service',
  },
  {
    tag: 'RUN IT YOURSELF',
    title: 'SaaS Platform',
    description: 'The full business suite — CRM, ERP, HR, books, ops, analytics — on one shared database, one login, one bill. Start with one app and add the rest, without ever re-platforming.',
    icon: Layers,
    gradient: 'from-sky-500 to-cyan-500',
    href: '/products',
  },
]

function ThreeWaysToGrow() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Three ways to grow"
          title="AI Workforce · Results-as-a-Service · SaaS"
          description="HIVENOX is the rare product that says yes to all three from the same home page — pick the path that fits the problem keeping you up at night."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {growthPaths.map((g, i) => {
            const Icon = g.icon
            return (
              <Reveal key={g.title} delay={i * 90}>
                <Link
                  href={g.href}
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl',
                    g.gradient,
                    focusRing
                  )}
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[250%]" />
                  <span className="relative text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">{g.tag}</span>
                  <span className="relative mt-4 flex size-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold">{g.title}</h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/85">{g.description}</p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Explore
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
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
/*  3. A specialist app for every job — tabbed showcase                 */
/* ------------------------------------------------------------------ */
// New icon imports used only by this section — add to your shared import
// list: Bot, Boxes, Zap, Sparkles

type ShowcaseCard = { title: string; description: string; icon: LucideIcon }

type ShowcaseTab = {
  key: string
  label: string
  icon: LucideIcon
  activePill: string
  gradient: string
  hoverShadow: string
  numberTint: string
  items: ShowcaseCard[]
}

const showcaseTabs: ShowcaseTab[] = [
  {
    key: 'workforce',
    label: 'AI Workforce',
    icon: Bot,
    activePill: 'bg-gradient-to-r from-blue-600 to-indigo-700 shadow-blue-600/25',
    gradient: 'from-blue-600 to-indigo-700',
    hoverShadow: 'hover:shadow-blue-900/25',
    numberTint: 'text-white/15',
    items: [
      { title: 'Social Worker', description: 'Schedules and publishes across every channel, bilingually.', icon: Calendar },
      { title: 'Content Worker', description: 'Blogs, posts, and thought leadership in your brand voice.', icon: PenSquare },
      { title: 'Growth Worker', description: 'Content and automation unified, with a monthly strategist.', icon: TrendingUp },
      { title: 'Video Worker', description: 'Scripts, hooks, and short-form video, ready to publish.', icon: Video },
    ],
  },
  {
    key: 'erp',
    label: 'ERP Solutions',
    icon: Boxes,
    activePill: 'bg-gradient-to-r from-sky-600 to-blue-700 shadow-sky-600/25',
    gradient: 'from-sky-500 to-blue-700',
    hoverShadow: 'hover:shadow-sky-900/25',
    numberTint: 'text-white/15',
    items: [
      { title: 'Hivenox CRM', description: 'Leads, pipeline, and customers in one shared record.', icon: Users },
      { title: 'Hivenox HRMS', description: 'Employees, attendance, payroll, and performance.', icon: UserCog },
      { title: 'Hivenox Books', description: 'VAT/GST-ready accounting for AU, UAE, and KSA.', icon: Landmark },
      { title: 'Hivenox Ops', description: 'Projects, procurement, and delivery management.', icon: Building2 },
    ],
  },
  {
    key: 'agentic',
    label: 'Agentic Apps',
    icon: Zap,
    activePill: 'bg-gradient-to-r from-cyan-600 to-blue-700 shadow-cyan-600/25',
    gradient: 'from-cyan-600 to-blue-800',
    hoverShadow: 'hover:shadow-cyan-900/25',
    numberTint: 'text-white/15',
    items: [
      { title: 'AI Sales Agent', description: 'Prospects, follows up, and books meetings automatically.', icon: TrendingUp },
      { title: 'AI Support Agent', description: 'Answers customers instantly, across every channel.', icon: Headset },
      { title: 'AI Recruiter', description: 'Screens candidates and schedules interviews.', icon: Briefcase },
      { title: 'Voice AI', description: 'Natural bilingual phone calls, inbound and outbound.', icon: Mic },
    ],
  },
  {
    key: 'more',
    label: 'More Apps',
    icon: Sparkles,
    activePill: 'bg-gradient-to-r from-indigo-600 to-blue-800 shadow-indigo-600/25',
    gradient: 'from-indigo-600 to-blue-900',
    hoverShadow: 'hover:shadow-indigo-900/25',
    numberTint: 'text-white/15',
    items: [
      { title: 'Insights AI', description: 'Ask a question, get an answer grounded in live data.', icon: PieChart },
      { title: 'Hivenox Desk', description: 'Unified helpdesk across chat, email, and voice.', icon: Headset },
      { title: 'Hivenox SalesFlow', description: 'Pipeline automation for outbound-heavy teams.', icon: TrendingUp },
      { title: 'Hivenox Cloud', description: 'Secure infrastructure underneath every app.', icon: Cloud },
    ],
  },
]

function SpecialistShowcase() {
  const [active, setActive] = useState(showcaseTabs[0].key)
  const activeTab = showcaseTabs.find((t) => t.key === active) ?? showcaseTabs[0]

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* ambient color wash — blue tones only */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* header — run at a bigger, custom scale for this section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            A specialist app for every job
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Pick where you start.{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              Everything connects to everything else.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
            Every product runs on one source of truth, so the whole platform behaves like one organism rather than a drawer of disconnected instruments.
          </p>
        </div>

        {/* segmented tab control */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 p-1.5 shadow-sm">
            {showcaseTabs.map((tab) => {
              const TabIcon = tab.icon
              const isActive = active === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                    isActive ? cn('text-white shadow-lg', tab.activePill) : 'text-slate-600 hover:bg-white hover:text-slate-900',
                    focusRing
                  )}
                >
                  <TabIcon className="size-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* cards — re-keyed on the active tab so the reveal stagger replays on every switch */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activeTab.items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={active + item.title} delay={i * 80}>
                <div
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl',
                    activeTab.gradient,
                    activeTab.hoverShadow
                  )}
                >
                  {/* soft glow + dot texture, matching the connected-solutions cards elsewhere on the page */}
                  <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[length:18px_18px] opacity-40" />

                  <span className={cn('pointer-events-none absolute -right-1 -top-1 select-none font-mono text-6xl font-black', activeTab.numberTint)}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative flex size-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="relative mt-4 text-base font-bold text-white">{item.title}</h3>
                  <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-white/80">{item.description}</p>
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
/*  3.5. products rail                */
/* ------------------------------------------------------------------ */




const businessAppsItems = [
  { title: 'Hivenox ERP', href: '/products/hivenox-erp', icon: LayoutDashboard, desc: 'The connected core every other Hivenox app plugs into.' },
  { title: 'Hivenox CRM', href: '/products/hivenox-crm', icon: Users, desc: 'Pipelines, contacts, and deals in one shared view.' },
  { title: 'Hivenox HRMS', href: '/products/hivenox-hrms', icon: Briefcase, desc: 'Hiring, payroll, and people management in one place.' },
  { title: 'Hivenox Books', href: '/products/hivenox-books', icon: PieChart, desc: 'Accounting and finance that reconciles itself.' },
  { title: 'Hivenox SalesFlow', href: '/products/hivenox-salesflow', icon: LineChart, desc: 'Pipeline automation from first touch to closed deal.' },
  { title: 'Hivenox Desk', href: '/products/hivenox-desk', icon: Headset, desc: 'Customer support tickets, unified across every channel.' },
  { title: 'Hivenox Ops', href: '/products/hivenox-ops', icon: Boxes, desc: 'Inventory and operations, tracked in real time.' },
]


function ProductRow({ item, index }: { item: NavItem; index: number }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className="group relative flex items-center justify-between gap-4 overflow-hidden border-b border-slate-200 px-2 py-6 transition-colors duration-300 hover:bg-blue-600 sm:gap-6 sm:px-4"
    >
      {/* index */}
      <span className="hidden shrink-0 font-mono text-xs font-bold text-slate-300 transition-colors duration-300 group-hover:text-white/70 sm:block">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* title + description */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <h3 className="truncate text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="truncate text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-blue-50">
          {item.desc}
        </p>
      </div>

      {/* icon + arrow */}
      <div className="flex shrink-0 items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-white group-hover:text-blue-600 sm:size-10">
          <Icon className="size-4" />
        </span>
        <ArrowUpRight className="size-4.5 -translate-x-2 text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
      </div>
    </Link>
  )
}

export function ProductsRail() {
  const half = Math.ceil(businessAppsItems.length / 2)
  const leftItems = businessAppsItems.slice(0, half)
  const rightItems = businessAppsItems.slice(half)

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-blue-600">
            Our Products
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Everything connects to everything else.
          </h2>
        </div>

        {/* Two-column split */}
        <div className="grid gap-x-12 lg:grid-cols-2">
          <div className="border-t border-slate-200 lg:border-r lg:pr-6">
            {leftItems.map((item, i) => (
              <ProductRow key={item.title} item={item} index={i} />
            ))}
          </div>
          <div className="border-t border-slate-200 lg:pl-6">
            {rightItems.map((item, i) => (
              <ProductRow key={item.title} item={item} index={half + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



/* ------------------------------------------------------------------ */
/*  4. Pricing ladder — 3 tall cards + billing/currency toggle           */
/* ------------------------------------------------------------------ */

type CoreWorker = {
  code: string
  name: string
  description: string
  monthly: number // Base AUD price
  annual: number  // Base AUD price
  credits: string
  featured?: boolean
  badge?: string
  tagline?: string
  featureHead: string
  features: { text: string; inherited?: boolean }[]
  includes: { label: string; value: string }[]
  icon: LucideIcon
}

const coreWorkers: CoreWorker[] = [
  {
    code: '01 · SOCIAL',
    name: 'Social Worker',
    description: 'You already create — HIVENOX schedules, publishes, and keeps you consistent across every channel.',
    monthly: 79,
    annual: 63,
    credits: '1,500 AI credits / mo',
    icon: Calendar,
    featureHead: 'What you get',
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
    // MOVED TO CENTER (Index 1)
    code: '03 · GROWTH',
    name: 'Growth Worker',
    description: 'Automation and content in one place — plus full approval workflows, 3 brands, and a monthly strategist.',
    monthly: 199,
    annual: 159,
    credits: '5,000 AI credits / mo',
    featured: true,
    badge: 'Most popular · best value',
    tagline: 'The agency escape hatch — Social + Content, unified',
    icon: TrendingUp,
    featureHead: 'Everything, unified',
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
  {
    code: '02 · CONTENT',
    name: 'Content Worker',
    description: 'AI posts, blogs, and thought leadership in your brand voice — bilingual, built for authority at scale.',
    monthly: 99,
    annual: 79,
    credits: '3,000 AI credits / mo',
    icon: PenSquare,
    featureHead: 'What you get',
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
]

/* ------------------------------------------------------------------ */
/*  UI Components                                                     */
/* ------------------------------------------------------------------ */

function BillingToggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
        <span
          aria-hidden
          className={cn(
            'absolute inset-y-1 w-[calc(50%-2px)] rounded-full bg-blue-600 shadow-sm transition-transform duration-300 ease-out', 
            annual ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
          )}
        />
        <button 
          type="button" 
          aria-pressed={!annual} 
          onClick={() => onChange(false)} 
          className={cn('relative z-10 rounded-full px-5 py-1.5 text-xs font-semibold transition-colors', !annual ? 'text-white' : 'text-slate-600 hover:text-slate-900')}
        >
          Monthly
        </button>
        <button 
          type="button" 
          aria-pressed={annual} 
          onClick={() => onChange(true)} 
          className={cn('relative z-10 rounded-full px-5 py-1.5 text-xs font-semibold transition-colors', annual ? 'text-white' : 'text-slate-600 hover:text-slate-900')}
        >
          Annual
        </button>
      </div>
      <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-200/50">
        Save 20%
      </span>
    </div>
  )
}

function CurrencyToggle({ currency, onChange }: { currency: 'AUD' | 'USD'; onChange: (v: 'AUD' | 'USD') => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      {(['AUD', 'USD'] as const).map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={currency === c}
          onClick={() => onChange(c)}
          className={cn(
            'rounded-full px-4 py-1.5 text-xs font-semibold transition-colors', 
            currency === c ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          )}
        >
          {c === 'AUD' ? 'A$ AUD' : '$ USD'}
        </button>
      ))}
    </div>
  )
}

export function PricingLadder() {
  const [annual, setAnnual] = useState(false)
  const [currency, setCurrency] = useState<'AUD' | 'USD'>('AUD')
  const prefix = currency === 'AUD' ? 'A$' : '$'

  // Converts base AUD price to USD (1 AUD = 0.70 USD) and rounds to nearest whole number
  const calculatePrice = (basePrice: number) => {
    if (currency === 'USD') {
      return Math.round(basePrice * 0.70)
    }
    return basePrice
  }

  return (
    // Changed bg-white to bg-slate-50/50 to create contrast against the white pricing cards
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-blue-800 py-12 lg:py-16">
      
      {/* Abstract Background Enhancements (Darkened the dot grid slightly for better visibility) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] bg-blue-100/40 blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-blue-100">
            Pricing · AI Workers
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-4xl">
            Social. Content. Or both.
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-black">
            Social publishes what you make. Content makes what you publish. Growth does both — in one login, for less than buying them apart.
          </p>
        </div>

        {/* Highlighted Toggles Container */}
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row rounded-2xl bg-white/80 p-3 ring-1 ring-slate-200 w-fit mx-auto backdrop-blur-md shadow-sm">
          <BillingToggle annual={annual} onChange={setAnnual} />
          <div className="hidden sm:block h-6 w-px bg-slate-200" />
          <CurrencyToggle currency={currency} onChange={setCurrency} />
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {coreWorkers.map((worker) => {
            const Icon = worker.icon
            const basePrice = annual ? worker.annual : worker.monthly
            const displayPrice = calculatePrice(basePrice)
            
            return (
              <div
                key={worker.name}
                className={cn(
                  'relative flex h-full flex-col rounded-2xl bg-white p-6 transition-all duration-300',
                  worker.featured 
                    ? 'border-2 border-blue-600 shadow-xl shadow-blue-900/10 lg:-translate-y-2 lg:scale-[1.02] z-10' 
                    : 'border border-slate-200 shadow-md shadow-slate-200/50 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-300/50'
                )}
              >
                {worker.badge && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md shadow-blue-600/25">
                    <Sparkles className="size-3" />
                    {worker.badge}
                  </span>
                )}

                {/* Darkened text-slate-400 to text-slate-500 for better visibility */}
                <div className="text-[10px] font-bold tracking-widest text-slate-500">{worker.code}</div>
                
                <div className="mt-2 flex items-center gap-2.5">
                  <span className={cn(
                    'flex size-8 items-center justify-center rounded-lg',
                    worker.featured ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-600'
                  )}>
                    <Icon className="size-4" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{worker.name}</h3>
                </div>
                
                <p className="mt-2 min-h-[2.5rem] text-[12px] leading-relaxed text-slate-600">{worker.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-base font-semibold text-slate-500">{prefix}</span>
                  <span className="text-4xl font-bold tracking-tight text-slate-900">{displayPrice}</span>
                  <span className="text-xs font-semibold text-slate-500">/mo</span>
                </div>
                
                <p className="mt-1 text-[11px] font-medium text-slate-500">
                  {annual ? 'per month, billed annually' : 'per month · month-to-month'}
                </p>

                {worker.tagline && (
                  <p className="mt-3 rounded-lg bg-blue-50/70 px-3 py-1.5 text-[11px] font-bold text-blue-800 border border-blue-200/60">
                    {worker.tagline}
                  </p>
                )}

                <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-slate-100/80 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                  <Zap className="size-3 text-blue-600" />
                  {worker.credits}
                </div>

                <Link
                  href="/signup"
                  className={cn(
                    'mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold transition-all',
                    worker.featured 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-blue-600/30' 
                      : 'border-2 border-blue-400 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300'
                  )}
                >
                  Start 7-day trial
                  {worker.featured && <ArrowRight className="size-3.5" />}
                </Link>

                <div className="mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">{worker.featureHead}</div>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {worker.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2.5 text-[12px] leading-relaxed text-slate-600">
                      <span className={cn(
                        'mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full', 
                        f.inherited ? 'bg-blue-600' : 'bg-blue-100/80'
                      )}>
                        <Check className={cn('size-2.5', f.inherited ? 'text-white' : 'text-blue-600')} />
                      </span>
                      <span className={cn(f.inherited && 'font-semibold text-slate-900')}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Includes</span>
                  {worker.includes.map((row) => (
                    <div key={row.label} className="flex justify-between text-[11px]">
                      <span className="text-slate-600">{row.label}</span>
                      <span className="font-semibold text-slate-900">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Free-forever banner - enhanced contrast and border */}
        <div className="mt-8 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />
          
          <div className="relative mx-auto flex w-fit flex-col items-center justify-center rounded-xl bg-blue-50 border border-blue-100 px-5 py-3 sm:mx-0 shadow-sm">
            <span className="text-xl font-bold tracking-tight text-blue-700">{prefix}0</span>
            <span className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-600">Free forever</span>
          </div>
          
          <div className="relative mt-5 text-center sm:mt-0 sm:text-left">
            <h3 className="text-sm font-bold text-slate-900">Start free — let the AI show you what it can do</h3>
            <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-slate-600">
              No credit card, no expiry. Connect channels, schedule your week, and generate a taste of AI content.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5 sm:justify-start">
              {['3 channels', '15 posts / mo', '20 AI credits', '1 seat'].map((chip) => (
                <span key={chip} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-700">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative mt-5 flex flex-col items-center gap-1.5 sm:mt-0">
            <Link href="/signup" className="inline-flex w-full items-center justify-center rounded-lg border-2 border-blue-400 bg-white px-5 py-2 text-[12px] font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 sm:w-auto">
              Create free account
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  5. Full AI Workforce roster — image-panel cards, filters top-right  */
/* ------------------------------------------------------------------ */
const workforceFilters = ['All', 'Core Ladder', 'Specialists', 'Enterprise'] as const
type FilterGroup = (typeof workforceFilters)[number]

type WorkforceCard = {
  category: string
  name: string
  tagline: string
  description: string
  price: number | 'Custom'
  unit: string
  icon: LucideIcon
  group: FilterGroup
  addOn?: boolean
  popular?: boolean
}

const workforceRoster: WorkforceCard[] = [
  { 
    category: '01 · SOCIAL', 
    name: 'Social Worker', 
    tagline: 'Never goes quiet — even when busy.', 
    description: 'Schedules, publishes, and keeps you consistent across 6 platforms.', 
    price: 79, 
    unit: '50 posts / mo + link-in-bio', 
    icon: Share2, 
    group: 'Core Ladder' 
  },
  { 
    category: '02 · CONTENT', 
    name: 'Content Worker', 
    tagline: 'Authority on autopilot.', 
    description: 'AI posts, blogs, and thought leadership in your brand voice.', 
    price: 99, 
    unit: '70 posts + 8 blogs / mo', 
    icon: PenTool, 
    group: 'Core Ladder' 
  },
  { 
    category: '03 · GROWTH', 
    name: 'Growth Worker', 
    tagline: 'The complete engine.', 
    description: 'Social + Content unified, plus full workflows and a monthly strategist.', 
    price: 199, 
    unit: '200 posts + 40 blogs / mo', 
    icon: Rocket, 
    group: 'Core Ladder',
    popular: true
  },
  { 
    category: 'SPECIALIST', 
    name: 'Video Worker', 
    tagline: 'Scale on TikTok & Reels.', 
    description: 'Scripts, hooks, captions, and native scheduling for short-form video.', 
    price: 129, 
    unit: '30 videos + 30 scripts / mo', 
    icon: Video, 
    group: 'Specialists' 
  },
  { 
    category: 'SPECIALIST', 
    name: 'SEO Worker', 
    tagline: 'Bilingual visibility.', 
    description: 'Blog articles, keyword strategy, and regional SERP dominance.', 
    price: 99, 
    unit: '12 SEO articles / mo', 
    icon: Search, 
    group: 'Specialists' 
  },
  { 
    category: 'SPECIALIST', 
    name: 'Analytics Worker', 
    tagline: 'Prove your ROI.', 
    description: 'Advanced dashboards, ROI attribution, and auto-reports.', 
    price: 49, 
    unit: '20 auto reports / mo', 
    icon: BarChart3, 
    group: 'Specialists', 
    addOn: true 
  },
  { 
    category: 'ENTERPRISE', 
    name: 'Enterprise OS', 
    tagline: 'Every Worker, unified.', 
    description: 'For agencies & multi-brand: white-label, CRM sync, full API.', 
    price: 'Custom', 
    unit: 'Priced to your brand count', 
    icon: Building2, 
    group: 'Enterprise' 
  },
]

/* ------------------------------------------------------------------ */
/*  Theme Configuration for Card Bodies
/* ------------------------------------------------------------------ */

const getThemeStyles = (group: FilterGroup) => {
  switch (group) {
    case 'Core Ladder':
      return {
        bodyBg: 'bg-gradient-to-b from-blue-50/80 to-white',
        badge: 'text-blue-600',
        glow: 'bg-blue-500/20 group-hover:bg-blue-500/40',
        iconWrap: 'border-blue-400/30 bg-blue-500/20 text-blue-300 shadow-blue-900/30',
      }
    case 'Specialists':
      return {
        bodyBg: 'bg-gradient-to-b from-teal-50/80 to-white',
        badge: 'text-teal-700',
        glow: 'bg-teal-500/20 group-hover:bg-teal-500/40',
        iconWrap: 'border-teal-400/30 bg-teal-500/20 text-teal-300 shadow-teal-900/30',
      }
    case 'Enterprise':
      return {
        bodyBg: 'bg-gradient-to-b from-slate-100/80 to-white',
        badge: 'text-slate-700',
        glow: 'bg-slate-500/20 group-hover:bg-slate-500/40',
        iconWrap: 'border-slate-400/30 bg-slate-500/20 text-slate-300 shadow-slate-900/30',
      }
    default:
      return {
        bodyBg: 'bg-gradient-to-b from-slate-50/80 to-white',
        badge: 'text-slate-600',
        glow: 'bg-blue-500/20 group-hover:bg-blue-500/40',
        iconWrap: 'border-blue-400/30 bg-blue-500/20 text-blue-300 shadow-blue-900/30',
      }
  }
}

/* ------------------------------------------------------------------ */
/*  Components
/* ------------------------------------------------------------------ */

function formatPrice(price: number | 'Custom') {
  if (price === 'Custom') return 'Custom'
  return `$${new Intl.NumberFormat('en-US').format(price)}`
}

function WorkforceCardTile({ w, delay }: { w: WorkforceCard; delay: number }) {
  const Icon = w.icon
  const theme = getThemeStyles(w.group)

  return (
    <Reveal delay={delay}>
      {/* 
        Main Card Container: 
        border-2 and border-slate-200 ensures the border is ALWAYS clearly visible. 
        Changes to brand blue (border-blue-500) on hover.
      */}
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-[1.5rem] border-2 border-blue-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/10">
        
        {/* Top "Image" Panel (Dark UI) - Taller on desktop, shorter on mobile */}
        <div className="relative h-46 sm:h-58 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgb(255 255 255) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className={cn("pointer-events-none absolute -bottom-10 left-1/2 size-40 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-300", theme.glow)} />

          <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-lg border border-white/10 bg-white/10 px-2 py-1 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] font-bold text-white backdrop-blur-md">
            {w.category.split(' · ')[0]}
          </span>
          
          {w.addOn && (
            <span className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-blue-500 px-2 py-1 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">
              Add-on
            </span>
          )}

          {w.popular && (
            <span className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-amber-500 px-2 py-1 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-950 shadow-lg shadow-amber-500/30">
              ★ Popular
            </span>
          )}

          <div className="flex h-full flex-col items-center justify-center gap-2 sm:gap-3 px-2 text-center">
            <span className={cn("relative flex size-12 sm:size-16 items-center justify-center rounded-xl sm:rounded-2xl border shadow-lg transition-transform duration-300 group-hover:scale-110", theme.iconWrap)}>
              <Icon className="size-5 sm:size-7" />
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-300 max-w-[90%] leading-tight sm:leading-normal">
              {w.tagline}
            </span>
          </div>
        </div>

        {/* Card Body - Adjusts padding and text sizing for 2-column mobile view */}
        <div className={cn("flex flex-1 flex-col p-4 sm:p-6 lg:p-8", theme.bodyBg)}>
          <div className={cn("text-[9px] sm:text-[11px] font-bold uppercase tracking-widest", theme.badge)}>
            {w.group}
          </div>
          
          <h3 className="mt-1.5 sm:mt-2 text-base sm:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
            HIVENOX <br className="hidden lg:block" /> {w.name}
          </h3>
          <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-4 sm:line-clamp-none">
            {w.description}
          </p>
          <p className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-medium text-slate-500">
            {w.unit}
          </p>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 pt-4 sm:pt-5">
            <div>
              <span className="text-lg sm:text-2xl font-extrabold text-slate-900">
                {formatPrice(w.price)}
              </span>
              {w.price !== 'Custom' && (
                <span className="text-[10px] sm:text-sm text-slate-500">/mo</span>
              )}
            </div>
            
            <Link 
              href="/signup" 
              className="group/link inline-flex w-fit items-center gap-1 sm:gap-1.5 rounded-full sm:rounded-none bg-blue-50/50 sm:bg-transparent px-3 py-1.5 sm:p-0 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-blue-600 transition-colors hover:text-blue-800"
            >
              Learn more
              <ArrowRight className="size-3 sm:size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function WorkforceRoster() {
  const [filter, setFilter] = useState<FilterGroup>('All')
  const filtered = filter === 'All' ? workforceRoster : workforceRoster.filter((w) => w.group === filter)

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading 
            align="left" 
            eyebrow="The AI Workforce" 
            title="One hive. Every job. Pick your Worker." 
            description="A modular suite of AI Workers — each solves one job exceptionally well. Start where you need to, expand as you grow. Arabic + English, native." 
            className="mx-0 max-w-2xl" 
          />

          {/* Filter Buttons */}
          <div className="flex w-full overflow-x-auto pb-2 sm:w-auto sm:pb-0 hide-scrollbar">
            <div className="flex gap-2 rounded-2xl bg-slate-50 p-1.5 border border-slate-200 min-w-max">
              {workforceFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={cn(
                    'rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200',
                    filter === f 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-100' 
                      : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid: 2 columns strictly on Mobile, 3 on Desktop for bigger cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {filtered.map((w, i) => (
            <WorkforceCardTile key={w.name} w={w} delay={(i % 3) * 0.1} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
/* ------------------------------------------------------------------ */
/*  6. AI Workforce spotlight — dark band with stats                    */
/* ------------------------------------------------------------------ */
type SpotlightWorker = {
  label: string
  icon: LucideIcon
  colorClass: string
}

const spotlightRoster: SpotlightWorker[] = [
  { label: 'Social', icon: Calendar, colorClass: 'border-blue-500/30 bg-blue-500/10 text-blue-300 hover:border-blue-400' },
  { label: 'Content', icon: PenSquare, colorClass: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:border-indigo-400' },
  { label: 'Growth', icon: TrendingUp, colorClass: 'border-sky-500/30 bg-sky-500/10 text-sky-300 hover:border-sky-400' },
  { label: 'Video', icon: Video, colorClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400' },
  { label: 'SEO', icon: Search, colorClass: 'border-teal-500/30 bg-teal-500/10 text-teal-300 hover:border-teal-400' },
  { label: 'Analytics', icon: BarChart3, colorClass: 'border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-400' },
  { label: 'Sales', icon: Bot, colorClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400' },
  { label: 'Support', icon: Headset, colorClass: 'border-amber-500/30 bg-amber-500/10 text-amber-300 hover:border-amber-400' },
  { label: 'Recruiter', icon: Briefcase, colorClass: 'border-rose-500/30 bg-rose-500/10 text-rose-300 hover:border-rose-400' },
  { label: 'Voice', icon: Mic, colorClass: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 hover:border-fuchsia-400' },
  { label: 'Insights', icon: PieChart, colorClass: 'border-purple-500/30 bg-purple-500/10 text-purple-300 hover:border-purple-400' },
]

const spotlightStats: { value: number; suffix: string; label: string }[] = [
  { value: 15, suffix: ' hrs', label: 'Saved per week, per worker' },
  { value: 80, suffix: '%', label: 'Of tickets resolved by AI' },
  { value: 24, suffix: '/7', label: 'Bilingual coverage' },
]



export function WorkforceSpotlight() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      
      {/* Background Image with Deep Dark Gradient Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-slate-950/90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-indigo-950/40" />
      
      {/* Abstract Glowing Accent */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="mx-auto max-w-4xl text-center">
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 ring-1 ring-inset ring-blue-400/30 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            The AI Workforce spotlight
          </div>
          
          {/* Bigger, bolder heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
            Your AI employees clock in at midnight and never miss a follow-up.
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Social, Content, Growth, Video, SEO and Analytics workers, plus Sales, Support, Recruiter, Voice and Insights agents — all working on your live business data, bilingually, around the clock.
          </p>
        </div>

        {/* Multi-colored Roster Pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {spotlightRoster.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.label} delay={(i % 6) * 60}>
                <div className={cn(
                  'group flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                  r.colorClass
                )}>
                  <Icon className="size-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  {r.label}
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 shadow-2xl backdrop-blur-md">
          {spotlightStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="bg-slate-950/80 text-center">
              <div className="px-6 py-10 transition-colors hover:bg-slate-900/80">
                <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-blue-200/80">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action Button */}
        <Reveal className="mt-12 flex justify-center">
          <Link 
            href="/ai-workers" 
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-600/50 hover:scale-[1.02]"
          >
            Meet the workforce
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6.5 Proof, trust, and region                                         */
/* ------------------------------------------------------------------ */


const industries = [
  {
    title: 'Healthcare & Clinics',
    description: 'Elevate patient care by automating scheduling, follow-ups, and support with intelligent AI agents.',
    linkText: 'Explore Healthcare',
    href: '/industries/healthcare',
    icon: HeartPulse,
  },
  {
    title: 'Salons & Wellness',
    description: 'Streamline bookings, manage client profiles, and drive repeat visits effortlessly while you focus on service.',
    linkText: 'Explore Wellness',
    href: '/industries/wellness',
    icon: Sparkles,
  },
  {
    title: 'Real Estate',
    description: 'Qualify leads instantly, schedule property viewings, and close deals faster with always-on AI assistants.',
    linkText: 'Explore Real Estate',
    href: '/industries/real-estate',
    icon: Building,
  },
  {
    title: 'Retail & E-commerce',
    description: 'Acquire profitable customers faster, sync inventory, and automate multi-channel customer service.',
    linkText: 'Explore Retail',
    href: '/industries/retail',
    icon: ShoppingBag,
  },
  {
    title: 'Restaurants & Cafés',
    description: 'Manage reservations, coordinate orders seamlessly, and build loyalty with automated marketing tools.',
    linkText: 'Explore Restaurants',
    href: '/industries/restaurants',
    icon: Coffee,
  },
  {
    title: 'Agencies',
    description: 'Scale content creation, centralize client reporting, and automate billing to grow your portfolio.',
    linkText: 'Explore Agencies',
    href: '/industries/agencies',
    icon: Megaphone,
  },
  {
    title: 'Professional Services',
    description: 'Automate client intake, schedule consultations, and maintain flawless communication at every touchpoint.',
    linkText: 'Explore Services',
    href: '/industries/professional-services',
    icon: Briefcase,
  }
]

export function BrowseIndustries() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Browse Industries
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Discover how our AI workforce transforms operations for your specific sector.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              /* Wrap with <Reveal delay={index * 0.1}> if using your animation component */
              <div 
                key={industry.title}
                className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* 1. Base Gradient Background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />
                
                {/* 2. White Hover Fill Animation (Bottom to Top) */}
                <div className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />

                {/* Content (z-10 to sit above backgrounds) */}
                <div className="relative z-10">
                  {/* Dynamic Text Color Transition on Hover */}
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-blue-950 sm:text-[22px] leading-tight">
                    {industry.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-blue-50 transition-colors duration-500 group-hover:text-slate-600">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom Content (z-10) */}
                <div className="relative z-10 mt-8 flex items-end justify-between gap-4">
                  
                  {/* Link styling updates on hover */}
                  <Link 
                    href={industry.href}
                    className="text-sm font-bold tracking-wide text-white underline decoration-blue-300/60 underline-offset-4 transition-colors duration-500 group-hover:text-blue-600 group-hover:decoration-blue-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                  >
                    {industry.linkText}
                  </Link>
                  
                  {/* Circular Icon Badge dynamically inverts colors on hover */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-blue-600/20">
                    <Icon className="size-6 text-blue-600 transition-colors duration-500 group-hover:text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 bg-transparent px-8 py-3.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            See all Industries
          </Link>
        </div>

      </div>
    </section>
  )
}


/* ------------------------------------------------------------------ */
/*  7. Proof, trust, and region                                         */
/* ------------------------------------------------------------------ */

type TrustPoint = {
  title: string
  description: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
}

const trustPoints: TrustPoint[] = [
  { 
    title: 'Enterprise-grade, built to scale', 
    description: 'A product of AI Solution Technologies, an enterprise AI and data consultancy trusted across Australia and the GCC.', 
    icon: ShieldCheck,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700'
  },
  { 
    title: 'VAT/GST-ready', 
    description: 'Compliant accounting and invoicing built for Australia, the UAE, and Saudi Arabia from day one.', 
    icon: Landmark,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700'
  },
  { 
    title: 'Native Arabic & English', 
    description: 'RTL throughout, with campaigns planned on the Hijri and Gregorian calendars.', 
    icon: Globe2,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700'
  },
  { 
    title: 'Regional support hubs', 
    description: 'Supported from teams based in Sydney, Dubai, and Riyadh.', 
    icon: Building2,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-700'
  },
]


export function TrustRegion() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32">
      
      {/* Subtle abstract ambient glow in the background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* LEFT COLUMN: Headings & Region Checks */}
          <div className="lg:col-span-5">
            {/* Note: Assuming 'Reveal' is an existing component in your codebase */}
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 ring-1 ring-inset ring-blue-200/50">
                <ShieldCheck className="size-3.5" />
                Proof, trust, and region
              </div>
              
              {/* Heading size significantly increased */}
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.1]">
                Enterprise-grade governance, priced for a growing business.
              </h2>
              
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Built and supported for the markets it serves — not adapted after the fact. Everything you need to scale securely.
              </p>

              {/* Moved cities here to act as a supportive trust badge footer to the text */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-200/60 pt-8">
                {['Sydney', 'Dubai', 'Riyadh'].map((city) => (
                  <span key={city} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="size-5 text-blue-600" />
                    {city}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: 2x2 Bento-style Grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {trustPoints.map((t, i) => {
                const Icon = t.icon
                return (
                  <Reveal key={t.title} delay={(i % 4) * 80}>
                    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                      
                      <span className={cn(
                        "flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                        t.iconBg, 
                        t.iconColor
                      )}>
                        <Icon className="size-6" />
                      </span>
                      
                      <h3 className="mt-6 text-base font-bold text-slate-900">
                        {t.title}
                      </h3>
                      
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                        {t.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
/* ------------------------------------------------------------------ */
/*  8. Closing call to action                                           */
/* ------------------------------------------------------------------ */

export function ClosingCta() {
  return (
    <section className="bg-white py-24 sm:py-32">
      
      {/* CSS for the fast border animation */}
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 1.5s linear infinite;
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* The Animating Border Wrapper */}
        <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-[length:200%_auto] animate-gradient-flow shadow-xl shadow-blue-900/5">
          
          {/* Inner Card - Gradient + Blur + Overflow Hidden (for noise) */}
          <div className="relative overflow-hidden rounded-[calc(2.5rem-2px)] bg-gradient-to-br from-sky-50/90 via-blue-100/70 to-cyan-50/90 px-6 py-16 sm:px-12 sm:py-20 text-center backdrop-blur-2xl">
            
            {/* SVG Noise Texture Overlay */}
            <div 
              className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Content Container (z-10 to sit above noise) */}
            <div className="relative z-10 flex flex-col items-center">
              <Reveal>
                
                {/* Eyebrow Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-900 shadow-sm backdrop-blur-md">
                  <Shield className="size-3.5 text-blue-600" />
                  One hive. Every job.
                </span>
                
                {/* Heading */}
                <h2 className="mt-8 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:leading-[1.1]">
                  Stop stitching ten tools together. Start running one.
                </h2>
                
                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-700">
                  Automate sales, service, finance, HR and marketing with humans and AI workers on one trusted platform — in Arabic and English.
                </p>
                
                {/* Action Buttons */}
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40 hover:scale-[1.02] sm:w-auto"
                  >
                    Start for free
                    <ArrowRight className="size-4" />
                  </Link>
                  
                  <Link
                    href="/demo"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-300 bg-white/70 px-8 py-4 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-blue-400 hover:scale-[1.02] sm:w-auto"
                  >
                    <PlayCircle className="size-4 text-blue-600" />
                    Watch the 2-minute demo
                  </Link>
                </div>
                
                {/* Footer Specs */}
                <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  2 languages, RTL-native · 12 connected apps · 1 shared database · Free-forever plan
                </p>
                
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// ------------------------------------------------------------------ */
/*  9. Core Values Banner                                               */
/* ------------------------------------------------------------------ */
export function ValuesBanner() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-2xl">
            {/* <Reveal> */}
              <h2 className="text-balance text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl lg:leading-[1.15]">
                We believe AI is the greatest catalyst for human potential.
              </h2>
              
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
                Grounded in trust, bilingual accessibility, and relentless innovation, we’re committed to building an AI workforce that does more than just scale your business—it gives you your time back. We believe in technology that works alongside humans, automating the repetitive so you can focus on the meaningful.
              </p>
              
              {/* Updated CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  See what drives us
                  <ArrowRight className="size-4" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 bg-transparent px-8 py-3.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Contact us
                </Link>
              </div>
            {/* </Reveal> */}
          </div>

          {/* Right Column: Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* <Reveal delay={0.2}> */}
              <img 
                src="/hivenox-banner.png" // Update this path if your image is located elsewhere (e.g., /images/bannerhivenox.jpg)
                alt="HIVENOX Core Values"
                className="h-auto w-full rounded-3xl object-cover shadow-2xl shadow-blue-900/10 sm:max-h-[500px]"
              />
            {/* </Reveal> */}
          </div>

        </div>
      </div>
    </section>
  )
}
/* ------------------------------------------------------------------ */
/*  Composed page body — no hero, no nav, no footer                     */
/* ------------------------------------------------------------------ */

export default function HomeSections() {
  return (
    <>
            <HeroSection/>
      <AgenticEnterprise />
      <ThreeWaysToGrow />
      <SpecialistShowcase />
      <ProductsRail/>
      <PricingLadder />
      <WorkforceRoster />
      <WorkforceSpotlight />
      <BrowseIndustries/>
      <ValuesBanner/>
      <TrustRegion />
      <ClosingCta />
    </>
  )
}