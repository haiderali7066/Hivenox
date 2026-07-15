'use client'

import Link from 'next/link'
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'
import type { IconType } from 'react-icons'
import HeroSection from '@/components/HeroSection'

import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiBarChart2,
  FiBook,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiCoffee,
  FiCompass,
  FiCpu,
  FiDatabase,
  FiDollarSign,
  FiEdit3,
  FiFileText,
  FiGlobe,
  FiGrid,
  FiHeadphones,
  FiHeart,
  FiHome,
  FiKey,
  FiLayers,
  FiLock,
  FiMapPin,
  FiMic,
  FiPackage,
  FiPhoneCall,
  FiPieChart,
  FiPlay,
  FiSearch,
  FiSettings,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiStar,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiVideo,
  FiX,
  FiXCircle,
  FiZap,
} from 'react-icons/fi'

/* ------------------------------------------------------------------ */
/* Shared utilities                                                    */
/* ------------------------------------------------------------------ */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'

/* ------------------------------------------------------------------ */
/* Reveal — scroll-in animation, reduced-motion aware                  */
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
/* Eyebrow + SectionHeading                                            */
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
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left',
        className
      )}
    >
      <div className={cn(align === 'center' && 'flex justify-center')}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={cn(
          'mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl',
          tone === 'light' ? 'text-slate-900' : 'text-white'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-lg leading-relaxed',
            tone === 'light' ? 'text-slate-600' : 'text-blue-100/80'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Animated icon tile — used across Solutions / ERP / Workforce cards  */
/* ------------------------------------------------------------------ */

function IconTile({
  icon: Icon,
  tone = 'light',
  size = 'md',
}: {
  icon: IconType
  tone?: 'light' | 'dark'
  size?: 'md' | 'lg'
}) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 ease-out',
        'group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:scale-110',
        size === 'md' ? 'size-11' : 'size-14',
        tone === 'light'
          ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30'
          : 'bg-white/10 text-blue-300 group-hover:bg-blue-500 group-hover:text-white'
      )}
    >
      <Icon className={size === 'md' ? 'size-5' : 'size-6'} />
    </span>
  )
}



/* ------------------------------------------------------------------ */
/* 1. Hero — platform constellation with cursor spotlight              */
/* ------------------------------------------------------------------ */

type OrbitNode = {
  label: string
  icon: IconType
  top: string
  left: string
  delay: number
}

const orbitNodes: OrbitNode[] = [
  { label: 'CRM', icon: FiUsers, top: '18%', left: '30%', delay: 0 },
  { label: 'Inventory', icon: FiPackage, top: '46%', left: '13%', delay: 600 },
  { label: 'AI Workers', icon: FiCpu, top: '78%', left: '27%', delay: 1200 },
  { label: 'Finance', icon: FiDollarSign, top: '45%', left: '78%', delay: 300 },
  { label: 'Insights', icon: FiPieChart, top: '69%', left: '80%', delay: 900 },
  { label: 'Support', icon: FiHeadphones, top: '88%', left: '57%', delay: 1500 },
]

const CENTER = { top: '45%', left: '57%' }

function OrbitDiagram() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[480px] sm:h-[480px] lg:h-[520px] lg:max-w-none">
      <style jsx>{`
        @keyframes orbitFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        @keyframes centerPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.25);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(37, 99, 235, 0);
          }
        }
        .orbit-node {
          animation: orbitFloat 5.5s ease-in-out infinite;
        }
        .orbit-center {
          animation: centerPulse 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-node,
          .orbit-center {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(203 213 225 / 0.7) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {orbitNodes.map((n) => (
          <line
            key={n.label}
            x1={parseFloat(CENTER.left)}
            y1={parseFloat(CENTER.top)}
            x2={parseFloat(n.left)}
            y2={parseFloat(n.top)}
            stroke="rgb(148 163 184 / 0.45)"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.6"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <Reveal
        delay={0}
        className="orbit-center absolute z-10 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-5 text-center shadow-xl shadow-blue-900/20 sm:w-36"
        style={{ top: CENTER.top, left: CENTER.left }}
      >
        <span className="text-base font-bold tracking-tight text-white">HIVENOX</span>
        <span className="mt-1 text-[11px] font-medium text-blue-100/80">one platform</span>
      </Reveal>

      {orbitNodes.map((n, i) => {
        const Icon = n.icon
        return (
          <Reveal
            key={n.label}
            delay={200 + i * 90}
            className="orbit-node group absolute z-[5] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ top: n.top, left: n.left, animationDelay: `${n.delay}ms` }}
          >
            <div className="flex cursor-default flex-col items-center gap-2">
              <span className="flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-600 shadow-md shadow-slate-900/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-600/20 sm:size-14">
                <Icon className="size-5 sm:size-6" />
              </span>
              <span className="whitespace-nowrap text-xs font-semibold text-slate-600">{n.label}</span>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

const trustCountries = ['🇦🇺 Australia', '🇦🇪 United Arab Emirates', '🇸🇦 Saudi Arabia']

function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: ReactMouseEvent<HTMLElement>) {
    const el = spotlightRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.background = `radial-gradient(560px circle at ${x}px ${y}px, rgba(37,99,235,0.12), transparent 60%)`
  }

  function handleMouseLeave() {
    const el = spotlightRef.current
    if (!el) return
    el.style.background = 'transparent'
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(203 213 225 / 0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.10),_transparent_60%)]" />
      <div ref={spotlightRef} className="pointer-events-none absolute inset-0 transition-[background] duration-200 ease-out" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 shadow-sm'
              )}
            >
              The Intelligent Business Platform
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Run your entire business on{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                one intelligent platform.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-slate-600 lg:mx-0">
              Replace disconnected software with a connected ecosystem of ERP, CRM,
              Finance, HR, Analytics, and autonomous AI Workers that actually do the
              work — built for ambitious businesses across Australia, the UAE, and
              Saudi Arabia.
            </p>

            <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-x-6 gap-y-2 lg:mx-0 lg:justify-start">
              {['One Platform', 'Two Languages', 'Every Department', 'AI That Works'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <FiCheck className="size-4 text-blue-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/signup"
                className={cn(
                  'inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700 sm:w-auto',
                  focusRing
                )}
              >
                Start Free
                <FiArrowRight className="size-4" />
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  'inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:w-auto',
                  focusRing
                )}
              >
                <FiPlay className="size-4 text-blue-600" />
                Book a Demo
              </Link>
            </div>

            <div className="mt-9 border-t border-slate-100 pt-6">
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-400 lg:text-left">
                Trusted across
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {trustCountries.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-slate-400 lg:text-left">
                Powered by AI Solution Technologies
              </p>
            </div>
          </div>

          <div className="relative">
            <OrbitDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Business problem                                                 */
/* ------------------------------------------------------------------ */

const painPoints = [
  'One system for sales',
  'Another for finance',
  'A different HR platform',
  'Spreadsheets everywhere',
  'Reports that disagree',
  "AI tools that can't access real business data",
]

const resolutions = [
  'Every department',
  'Every employee',
  'Every AI worker',
  'Working from one shared source of truth',
]

function BusinessProblem() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The business problem"
          title="Growing businesses don't fail because they lack ambition."
          description="They fail because their software never grows together. Every new application creates another data silo, another manual process, and another integration to maintain — and growth becomes harder instead of easier."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                <FiXCircle className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Managing software instead of growth</h3>
              <ul className="mt-5 flex flex-1 flex-col gap-3">
                {painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <FiXCircle className="mt-0.5 size-4 shrink-0 text-rose-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl border border-blue-600 bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl shadow-blue-900/5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FiCheckCircle className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Meet HIVENOX</h3>
              <p className="mt-2 text-sm text-slate-600">
                HIVENOX replaces disconnected software with one intelligent business
                platform.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-3">
                {resolutions.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                    <FiCheck className="mt-0.5 size-4 shrink-0 text-blue-600" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-blue-100 pt-5 text-sm font-semibold text-blue-700">
                Instead of managing software, your team manages growth.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Solutions                                                        */
/* ------------------------------------------------------------------ */

const solutions: { title: string; description: string; icon: IconType; href: string; highlight?: boolean }[] = [
  {
    title: 'AI Workers',
    description:
      'Autonomous AI employees that create content, answer customers, recruit candidates, qualify leads, and generate reports — working 24/7 in Arabic and English.',
    icon: FiCpu,
    href: '/workers',
  },
  {
    title: 'ERP Solutions',
    description: 'CRM, HRMS, Finance, Inventory, Operations, Payroll and Analytics connected through one shared database.',
    icon: FiGrid,
    href: '/erp',
  },
  {
    title: 'Intelligent Automation',
    description: 'Automate approvals, invoicing, onboarding, document processing, purchasing and hundreds of repetitive workflows.',
    icon: FiZap,
    href: '/solutions/automation',
  },
  {
    title: 'Business Intelligence',
    description: 'Every metric from every department, brought together into live dashboards and AI-powered insights.',
    icon: FiPieChart,
    href: '/solutions/business-intelligence',
  },
  {
    title: 'Results-as-a-Service',
    description: "Don't manage software. Define the outcome — we'll operate the platform and AI workforce for you.",
    icon: FiTarget,
    href: '/solutions/raas',
    highlight: true,
  },
  {
    title: 'Custom Development',
    description: 'Enterprise software, AI applications and integrations engineered specifically for your business.',
    icon: FiCode,
    href: '/solutions/custom-development',
  },
]

function Solutions() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Everything your business needs. Connected."
          description="Start with one product or one AI Worker, and expand into a complete business platform without rebuilding your systems."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <Link
                href={s.href}
                className={cn(
                  'group flex h-full flex-col rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5',
                  s.highlight ? 'border-blue-200 bg-blue-50/40' : 'border-slate-200 bg-white',
                  focusRing
                )}
              >
                <IconTile icon={s.icon} size="lg" />
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Learn more
                  <FiArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Why HIVENOX                                                      */
/* ------------------------------------------------------------------ */

const benefits: { label: string; icon: IconType }[] = [
  { label: 'One Login', icon: FiKey },
  { label: 'One Database', icon: FiDatabase },
  { label: 'One Source of Truth', icon: FiCheckCircle },
  { label: 'Native Arabic & English', icon: FiGlobe },
  { label: 'AI Workers on Live Business Data', icon: FiCpu },
  { label: 'Modular Platform', icon: FiLayers },
  { label: 'Enterprise Security', icon: FiLock },
  { label: 'Built for AU · UAE · KSA', icon: FiMapPin },
]

function WhyHivenox() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why HIVENOX"
          title="Everything works together because everything was built together."
          description="Unlike traditional business software, HIVENOX doesn't rely on dozens of integrations. Every product shares one database, one identity system and one intelligent AI layer — so every department always works from live information. No duplicate records. No manual reconciliation. No disconnected reports."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal key={b.label} delay={(i % 4) * 70}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-900/5">
                  <IconTile icon={Icon} />
                  <span className="text-sm font-semibold text-slate-800">{b.label}</span>
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
/* 5. AI Workforce                                                     */
/* ------------------------------------------------------------------ */

const aiWorkers: { name: string; description: string; icon: IconType }[] = [
  { name: 'Social Worker', description: 'Plans monthly content calendars, publishes posts, and replies to comments.', icon: FiCalendar },
  { name: 'Content Worker', description: 'Writes blogs, newsletters and campaigns in Arabic and English.', icon: FiEdit3 },
  { name: 'Growth Worker', description: 'Combines content, automation and analytics into one marketing engine.', icon: FiTrendingUp },
  { name: 'SEO Worker', description: 'Finds keywords, writes SEO content, and improves search rankings.', icon: FiSearch },
  { name: 'Video Worker', description: 'Creates short-form video for TikTok, Reels and YouTube Shorts.', icon: FiVideo },
  { name: 'AI Sales Agent', description: 'Finds prospects, follows up automatically, and books meetings.', icon: FiPhoneCall },
  { name: 'AI Support Agent', description: 'Answers customer questions instantly, across every channel.', icon: FiHeadphones },
  { name: 'AI Recruiter', description: 'Screens candidates, shortlists talent, and schedules interviews.', icon: FiUserCheck },
  { name: 'Voice AI', description: 'Makes and receives natural phone calls in Gulf Arabic and English.', icon: FiMic },
  { name: 'Insights AI', description: 'Ask questions about your business, get instant answers from live data.', icon: FiActivity },
]

function AIWorkforce() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet your AI workforce"
          title="Hire AI employees in minutes."
          description="Not assistants. Not chatbots. Real AI workers that own complete business functions from start to finish."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aiWorkers.map((w, i) => {
            const Icon = w.icon
            return (
              <Reveal key={w.name} delay={(i % 5) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-900/5">
                  <IconTile icon={Icon} />
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{w.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{w.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8 flex justify-center">
          <Link
            href="/workers"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50',
              focusRing
            )}
          >
            Meet the full workforce
            <FiArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 6. ERP Platform                                                     */
/* ------------------------------------------------------------------ */

const erpModules: { name: string; description: string; icon: IconType }[] = [
  { name: 'CRM', description: 'Manage leads, customers and sales.', icon: FiUsers },
  { name: 'HRMS', description: 'Employees, attendance, payroll and performance.', icon: FiUserCheck },
  { name: 'Inventory', description: 'Track stock across warehouses in real time.', icon: FiPackage },
  { name: 'Accounting', description: 'VAT/GST-ready finance built for AU, UAE and Saudi Arabia.', icon: FiDollarSign },
  { name: 'Operations', description: 'Projects, procurement and delivery management.', icon: FiCompass },
  { name: 'Analytics', description: 'Executive dashboards powered by one shared database.', icon: FiBarChart2 },
]

function ERPPlatform() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ERP Platform"
          title="One ERP. Every department. One source of truth."
          description="Unlike traditional ERP systems, HIVENOX lets you activate only the modules you need — while keeping everything connected."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {erpModules.map((m, i) => {
            const Icon = m.icon
            return (
              <Reveal key={m.name} delay={(i % 3) * 80}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-900/5">
                  <IconTile icon={Icon} />
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{m.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.description}</p>
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
/* 7. Platform architecture                                            */
/* ------------------------------------------------------------------ */

const flowSteps: { label: string; icon: IconType }[] = [
  { label: 'Lead created', icon: FiUserPlus },
  { label: 'CRM updated', icon: FiUsers },
  { label: 'Sales pipeline updated', icon: FiTrendingUp },
  { label: 'Invoice generated', icon: FiFileText },
  { label: 'Finance updated', icon: FiDollarSign },
  { label: 'Inventory updated', icon: FiPackage },
  { label: 'Analytics updated', icon: FiBarChart2 },
  { label: 'AI Workers take action', icon: FiCpu },
]

function Architecture() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform architecture"
          title="Built around one shared database."
          description="Every action updates your entire business automatically."
        />

        <div className="relative mx-auto mt-16 max-w-md">
          <style jsx>{`
            @keyframes flowPulse {
              0% {
                top: 0%;
                opacity: 0;
              }
              8% {
                opacity: 1;
              }
              92% {
                opacity: 1;
              }
              100% {
                top: 100%;
                opacity: 0;
              }
            }
            .flow-pulse {
              animation: flowPulse 4.5s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .flow-pulse {
                animation: none;
                display: none;
              }
            }
          `}</style>
          <div className="absolute bottom-6 left-6 top-6 w-px bg-slate-200" aria-hidden>
            <span className="flow-pulse absolute -left-[3px] size-[7px] rounded-full bg-blue-500 shadow-[0_0_8px_2px_rgba(37,99,235,0.5)]" />
          </div>

          <ol className="flex flex-col gap-7">
            {flowSteps.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.label} delay={i * 90}>
                  <li className="flex items-center gap-5">
                    <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm">
                      <Icon className="size-5" />
                    </span>
                    <span
                      className={cn(
                        'text-sm font-semibold',
                        i === flowSteps.length - 1 ? 'text-blue-700' : 'text-slate-800'
                      )}
                    >
                      {s.label}
                    </span>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {['No integrations', 'No exports', 'No duplicate work'].map((f) => (
            <span key={f} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FiCheck className="size-4 text-blue-600" />
              {f}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 8. Industries                                                       */
/* ------------------------------------------------------------------ */

const industries: { name: string; icon: IconType }[] = [
  { name: 'Healthcare', icon: FiHeart },
  { name: 'Real Estate', icon: FiHome },
  { name: 'Retail', icon: FiShoppingBag },
  { name: 'Manufacturing', icon: FiSettings },
  { name: 'Professional Services', icon: FiBriefcase },
  { name: 'Education', icon: FiBook },
  { name: 'Construction', icon: FiTool },
  { name: 'Hospitality', icon: FiStar },
  { name: 'Restaurants', icon: FiCoffee },
  { name: 'E-commerce', icon: FiShoppingCart },
  { name: 'Agencies', icon: FiTarget },
  { name: 'Government', icon: FiShield },
]

function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for every industry."
          description="Whether you run five employees or five hundred, HIVENOX adapts to your business."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.name} delay={(i % 4) * 60}>
                <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm">
                  <IconTile icon={Icon} />
                  <span className="text-sm font-semibold text-slate-800">{item.name}</span>
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
/* 9. Results                                                          */
/* ------------------------------------------------------------------ */

const outcomes = [
  'Reduce repetitive work',
  'Automate operations',
  'Close deals faster',
  'Support customers around the clock',
  'Create more content',
  'Gain complete business visibility',
  'Scale without complexity',
]

function Results() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Results"
          title="Businesses choose HIVENOX because it delivers outcomes."
          description="Spend less time managing software. Spend more time growing your business."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {outcomes.map((o, i) => (
            <Reveal key={o} delay={(i % 4) * 70}>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                <FiCheckCircle className="size-5 shrink-0 text-blue-600" />
                <span className="text-sm font-medium text-slate-800">{o}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 10. Customer success                                                */
/* ------------------------------------------------------------------ */

function CustomerSuccess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="font-serif text-6xl leading-none text-blue-400/50" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="mx-auto -mt-4 max-w-2xl text-pretty text-xl font-medium leading-relaxed text-white sm:text-2xl">
            HIVENOX replaced five disconnected systems with one intelligent platform.
            Our reporting became real-time, our marketing became consistent, and our
            team finally had time to focus on growth.
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-blue-200">
            Operations Director · Multi-department growth business
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 11. Pricing                                                         */
/* ------------------------------------------------------------------ */

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50 py-24 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing & Workforce Stack"
          title="Start free. Hire AI Workers as you grow."
          description="Deploy AI specialists in minutes. No credit card required to start. When you are ready, upgrade your workforce with one-click specialist modules."
        />

        {/* CORE LADDER PLANS */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-stretch">
          
          {/* Start Free Card */}
          <Reveal delay={0} className="flex h-full">
            <div className="flex flex-col justify-between w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Tier 00
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Start Free</h3>
                <p className="mt-2 text-xs text-slate-500 font-medium">Let the AI show you what it can do</p>
                
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">$0</span>
                  <span className="text-xs font-semibold text-slate-400">/ forever</span>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-600">
                  No credit card, no expiry. Connect 3 channels, schedule your week, and generate a taste of AI content. When you outgrow it, paid Workers are 1-click away.
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Plan includes:</p>
                  <ul className="mt-3 space-y-2.5">
                    {['3 channels', '15 posts / mo', '20 AI credits / mo', 'Arabic AI · RTL · Hijri', 'Basic analytics', '1 seat'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <FiCheck className="size-3.5 shrink-0 text-blue-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className={cn(
                    'flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-3 text-xs font-bold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-300',
                    focusRing
                  )}
                >
                  Start Free
                </Link>
                <p className="mt-2 text-center text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  No card · forever free
                </p>
              </div>
            </div>
          </Reveal>

          {/* 01 · SOCIAL */}
          <Reveal delay={80} className="flex h-full">
            <div className="flex flex-col justify-between w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  01 · SOCIAL
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Social Worker</h3>
                <p className="mt-2 text-xs text-slate-500 font-medium">Auto scheduling &amp; publishing consistency</p>
                
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">$79</span>
                  <span className="text-xs font-semibold text-slate-400">/ mo</span>
                </div>
                <p className="mt-1 text-[11px] font-semibold text-slate-400">per month · month-to-month</p>
                
                <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-blue-50/70 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  <FiCpu className="size-3" />
                  1,500 AI credits / mo
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">What you get:</p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      'All 6 platforms — scheduling & publishing',
                      '50 scheduled posts / mo',
                      '+ link-in-bio page',
                      'Bilingual hashtags & best-time posting',
                      'Evergreen recycling + content calendar',
                      'Arabic AI · RTL · Hijri · Ramadan engine'
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <FiCheck className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 bg-slate-50/50 p-3.5 rounded-xl">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Includes:</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Scheduled posts</span>
                      <strong className="text-slate-700">50 / mo</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Team seats</span>
                      <strong className="text-slate-700">3</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Brand profiles</span>
                      <strong className="text-slate-700">1</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Support</span>
                      <strong className="text-slate-700">Email + WA</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/signup?plan=social"
                  className={cn(
                    'flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-blue-700',
                    focusRing
                  )}
                >
                  Start 7-day trial
                </Link>
              </div>
            </div>
          </Reveal>

          {/* 02 · CONTENT */}
          <Reveal delay={160} className="flex h-full">
            <div className="flex flex-col justify-between w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600">
                  02 · CONTENT
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Content Worker</h3>
                <p className="mt-2 text-xs text-slate-500 font-medium">AI blogs, posts, and thought leadership</p>
                
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">$99</span>
                  <span className="text-xs font-semibold text-slate-400">/ mo</span>
                </div>
                <p className="mt-1 text-[11px] font-semibold text-slate-400">per month · month-to-month</p>
                
                <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-violet-50/70 px-2.5 py-1 text-xs font-semibold text-violet-700">
                  <FiCpu className="size-3" />
                  3,000 AI credits / mo
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">What you get:</p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      '70 scheduled posts / mo',
                      '+ 20 AI content pieces',
                      '8 blog drafts / mo',
                      '+ lite website publishing',
                      'Bilingual brand voice — 3 profiles (AR+EN)',
                      'Content categories + bulk scheduling',
                      'Lite approval workflow'
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <FiCheck className="mt-0.5 size-3.5 shrink-0 text-violet-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 bg-slate-50/50 p-3.5 rounded-xl">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Includes:</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Scheduled posts</span>
                      <strong className="text-slate-700">70 / mo</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Content pieces</span>
                      <strong className="text-slate-700">20 / mo</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Blog drafts</span>
                      <strong className="text-slate-700">8 / mo</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Team seats</span>
                      <strong className="text-slate-700">5</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/signup?plan=content"
                  className={cn(
                    'flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-slate-800',
                    focusRing
                  )}
                >
                  Start 7-day trial
                </Link>
              </div>
            </div>
          </Reveal>

          {/* 03 · GROWTH (Featured Card) */}
          <Reveal delay={240} className="flex h-full">
            <div className="relative flex flex-col justify-between w-full rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-xl shadow-blue-600/10 transition-transform duration-300 hover:-translate-y-1">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3.5 py-1 text-[9px] font-black uppercase tracking-wider text-white shadow-md">
                ★ MOST POPULAR · BEST VALUE
              </span>
              <div>
                <span className="mt-1 inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  03 · GROWTH
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">Growth Worker</h3>
                <p className="mt-2 text-xs text-slate-500 font-medium leading-normal">
                  The agency escape hatch — Social + Content, unified. Full approval flow.
                </p>
                
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-blue-600">$199</span>
                  <span className="text-xs font-semibold text-slate-400">/ mo</span>
                </div>
                <p className="mt-1 text-[11px] font-semibold text-slate-400">per month · month-to-month</p>
                
                <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  <FiCpu className="size-3 text-blue-600" />
                  5,000 AI credits / mo
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Everything, unified:</p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      'Everything in Social Worker',
                      'Everything in Content Worker',
                      '200 posts + 40 blogs + 20 videos / mo',
                      'Full approval workflows + audit logs',
                      'Advanced analytics, ROI & A/B testing',
                      '12 auto client reports / mo (AR+EN) + Zapier',
                      'Monthly 60-min strategy session'
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <FiCheck className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 bg-blue-50/30 p-3.5 rounded-xl border border-blue-50">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700">Includes:</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Scheduled posts</span>
                      <strong className="text-slate-700">200 / mo</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Blogs &amp; Videos</span>
                      <strong className="text-slate-700">40 + 20 / mo</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Team seats</span>
                      <strong className="text-slate-700">10</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400">Brand profiles</span>
                      <strong className="text-slate-700">3</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/signup?plan=growth"
                  className={cn(
                    'flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/10 transition-all hover:brightness-105',
                    focusRing
                  )}
                >
                  Start 7-day trial
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

        {/* LADDER FOOTNOTES / GUIDES */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-sm">
                🪜
              </span>
              <h4 className="mt-3 text-xs font-bold text-slate-900 uppercase tracking-wide">Why the ladder works</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                <strong>Social</strong> keeps you consistent, <strong>Content</strong> keeps you authoritative, and <strong>Growth</strong> unifies both in one system with complex workflows and a physical strategy lead. Most growth-focused teams start with Content or Social, then naturally slide into Growth within 60 days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600 font-bold text-sm">
                🔋
              </span>
              <h4 className="mt-3 text-xs font-bold text-slate-900 uppercase tracking-wide">Hit your cap? Pay-as-you-go</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                Every single plan supports instant, native pay-as-you-go top-ups. Purchase additional posts, SEO blogs, video generation tokens, or database capacities at any point without forced tier upgrades. You always pay only for what you run.
              </p>
            </div>
          </Reveal>
        </div>

        {/* THE SPECIALISTS BAR */}
        <div className="mt-24 border-t border-slate-200 pt-16 text-center">
          <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            The Specialists
          </span>
          <h3 className="mt-4 text-2xl font-bold text-slate-900 tracking-tight sm:text-3xl">
            Bolt on a focused Specialist Worker
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 leading-relaxed">
            Standalone agents designed for specialized, vertical pipelines. Add them individually directly to your stack at any time.
          </p>
        </div>

        {/* SPECIALIST CARDS */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          
          {/* Video Worker */}
          <Reveal delay={100} className="flex h-full">
            <div className="group flex flex-col justify-between w-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600 group-hover:scale-105 transition-transform">
                    <FiVideo className="size-5" />
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900">$129</span>
                    <span className="text-[10px] text-slate-400">/mo</span>
                  </div>
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">Video Worker</h4>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Scale on TikTok, Reels, Shorts &amp; Snapchat — scripts, hooks, captions, native scheduling.
                </p>
                <div className="mt-2.5 inline-block rounded-md bg-slate-50 px-2.5 py-0.5 text-[10px] font-medium text-slate-600">
                  30 videos + 30 scripts / mo · 3 seats
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {[
                    '30 rendered videos / mo — TikTok, Reels, Shorts, Snapchat',
                    '30 platform scripts / mo + first-3-sec hooks',
                    'AI captions, subtitles & descriptions',
                    'Native editor or one-click CapCut export',
                    'Watch-time & retention analytics'
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <FiCheck className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/signup?worker=video"
                  className={cn(
                    'flex w-full items-center justify-center gap-1 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300',
                    focusRing
                  )}
                >
                  Start 7-day trial
                  <FiArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* SEO Worker */}
          <Reveal delay={180} className="flex h-full">
            <div className="group flex flex-col justify-between w-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-green-50 text-green-600 group-hover:scale-105 transition-transform">
                    <FiSearch className="size-5" />
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900">$99</span>
                    <span className="text-[10px] text-slate-400">/mo</span>
                  </div>
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">SEO Worker</h4>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Bilingual visibility — blog articles, keyword strategy, and regional SERP dominance.
                </p>
                <div className="mt-2.5 inline-block rounded-md bg-slate-50 px-2.5 py-0.5 text-[10px] font-medium text-slate-600">
                  12 SEO blog articles / mo · 3 seats
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {[
                    '12 SEO blog articles / mo + custom-domain publishing',
                    'Bilingual (EN+AR) keyword & intent mapping',
                    'Dialect-aware SERP tracking — 50 keywords',
                    'On-page audit + Arabic readability scoring',
                    'Regional dominance: KSA · UAE · Egypt · AU'
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <FiCheck className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/signup?worker=seo"
                  className={cn(
                    'flex w-full items-center justify-center gap-1 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300',
                    focusRing
                  )}
                >
                  Start 7-day trial
                  <FiArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Analytics Worker */}
          <Reveal delay={260} className="flex h-full">
            <div className="group flex flex-col justify-between w-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                    <FiBarChart2 className="size-5" />
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900">$49</span>
                    <span className="text-[10px] text-slate-400">/mo</span>
                  </div>
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">Analytics Worker</h4>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Prove your ROI — campaign tagging, competitor benchmarking, audience sentiment, and auto reports.
                </p>
                <div className="mt-2.5 inline-block rounded-md bg-slate-50 px-2.5 py-0.5 text-[10px] font-medium text-slate-600">
                  20 auto reports / mo · 3 seats
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {[
                    'Advanced dashboards + ROI attribution',
                    'Competitor tracking (SERP + social rivals)',
                    'Audience segmentation & sentiment trends',
                    '20 auto PDF/PPT reports / mo (AR+EN)',
                    'Email + WhatsApp support'
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <FiCheck className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/signup?worker=analytics"
                  className={cn(
                    'flex w-full items-center justify-center gap-1 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300',
                    focusRing
                  )}
                >
                  Start 7-day trial
                  <FiArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 12. Insights                                                        */
/* ------------------------------------------------------------------ */

const insightPosts = [
  { category: 'AI Workers', title: 'AI Workers vs AI Assistants', date: 'Jul 8, 2026', readTime: '6 min read' },
  { category: 'Platform', title: 'Why Businesses Need One Source of Truth', date: 'Jun 24, 2026', readTime: '7 min read' },
  { category: 'AI Workers', title: 'Building an AI Workforce', date: 'Jun 12, 2026', readTime: '8 min read' },
  { category: 'ERP', title: 'ERP Without Complexity', date: 'May 30, 2026', readTime: '5 min read' },
  { category: 'Analytics', title: 'The Future of Business Intelligence', date: 'May 18, 2026', readTime: '6 min read' },
]

function Insights() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Latest insights"
            title="Learn how modern businesses scale with AI"
            description="AI, automation and connected data — practical guidance for building a business that grows without added complexity."
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insightPosts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 80}>
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{post.category}</span>
                  <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug text-slate-900">{post.title}</h3>
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
/* 13. FAQ                                                             */
/* ------------------------------------------------------------------ */

const faqs: { q: string; a: string }[] = [
  {
    q: 'What is the difference between AI Workers and AI assistants?',
    a: 'An assistant answers a question and forgets you. An AI Worker owns a job end to end — it plans, creates, publishes, follows up, and reports, acting on your live business data with minimal supervision.',
  },
  {
    q: 'Do I need to activate the full ERP to use HIVENOX?',
    a: 'No. You can start with a single AI Worker or a single ERP module and activate more as you grow. Every product shares the same database, so nothing needs to be rebuilt or migrated later.',
  },
  {
    q: 'Is HIVENOX really bilingual, or is it translated?',
    a: 'HIVENOX is written and rendered natively in Arabic and English — right-to-left where it should be, dialect-aware where it counts — not translated after the fact.',
  },
  {
    q: 'How does HIVENOX handle integrations with tools we already use?',
    a: 'HIVENOX connects to the social platforms, CRMs, and business tools you already rely on, including HubSpot, Salesforce, Odoo, and Shopify — so you can adopt it at your own pace.',
  },
  {
    q: 'Is HIVENOX secure enough for enterprise use?',
    a: 'HIVENOX is built by AI Solution Technologies, a Microsoft-aligned data and AI consultancy, on enterprise-grade governance, security, and reliability standards used across our enterprise deployments.',
  },
  {
    q: 'What does pricing look like as we grow?',
    a: 'Start free with no credit card required. Add AI Workers and ERP modules individually as you need them, all on one login and one consolidated bill — with no forced re-platforming.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Everything about AI Workers, ERP, pricing, integrations, bilingual support, deployment and security."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50',
                      focusRing
                    )}
                  >
                    {item.q}
                    <FiChevronDown
                      className={cn('size-4 shrink-0 text-blue-600 transition-transform duration-300', isOpen && 'rotate-180')}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
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
/* 14. Final CTA                                                       */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to run your entire business on one intelligent platform?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-blue-100/80">
            Whether you&apos;re looking for your first AI Worker, a complete ERP, or a
            platform that connects every department, HIVENOX gives you everything you
            need to grow — without the complexity of disconnected software.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-blue-300">
            One Platform · Two Languages · Every Department
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className={cn(
                'inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 sm:w-auto',
                focusRing
              )}
            >
              Start Free
              <FiArrowRight className="size-4" />
            </Link>
            <Link
              href="/book-demo"
              className={cn(
                'inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto',
                focusRing
              )}
            >
              Book a Demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}




/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSection />
      <BusinessProblem />
      <Solutions />
      <WhyHivenox />
      <AIWorkforce />
      <ERPPlatform />
      <Architecture />
      <Industries />
      <Results />
      <CustomerSuccess />
      <Pricing />
      <Insights />
      <FAQ />
      <FinalCta />
    </>
  )
}