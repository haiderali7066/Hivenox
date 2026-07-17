'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiArrowRight, FiAward, FiBarChart2, FiBookOpen, FiCalendar,
  FiCheck, FiCheckCircle, FiChevronDown, FiCloud, FiCode,
  FiCpu, FiDatabase, FiEdit3, FiFileText, FiGlobe, FiGrid,
  FiHardDrive, FiHeadphones, FiKey, FiLock, FiLogIn, FiMapPin,
  FiMic, FiPhoneCall, FiPieChart, FiPlay, FiPlus, FiSearch,
  FiServer, FiShare2, FiShield, FiSmartphone, FiTarget, FiTrendingUp,
  FiUserCheck, FiUsers, FiVideo, FiZap
} from 'react-icons/fi'
import {
  FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn,
  FaSnapchatGhost, FaTiktok, FaYoutube
} from 'react-icons/fa'
import { FaPinterest, FaThreads, FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import { Cpu, Database, RefreshCw, Share2, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

/* ── Utilities ───────────────────────────────────────────────────── */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
function fmt(n: number) {
  return n.toLocaleString('en-US')
}
const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'

/* ── Reveal with enhanced animations ─────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className,
  style,
  direction = 'up',
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
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
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClasses: Record<string, string> = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    scale: 'scale-90',
    fade: '',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none',
        visible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `${dirClasses[direction]} opacity-0`,
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}

/* ── Floating particles background ───────────────────────────────── */
function ParticleField({ count = 30, color = 'rgba(255,255,255,0.08)' }: { count?: number; color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []

    function resize() {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * (w / window.devicePixelRatio),
        y: Math.random() * (h / window.devicePixelRatio),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      }))
    }

    let animId: number
    function draw() {
      const cw = w / window.devicePixelRatio
      const ch = h / window.devicePixelRatio
      ctx.clearRect(0, 0, cw, ch)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > cw) p.vx *= -1
        if (p.y < 0 || p.y > ch) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = color.replace('0.08', `${0.04 * (1 - dist / 120)}`)
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count, color])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
}

/* ── Animated gradient blob ──────────────────────────────────────── */
function GradientBlob({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute blur-3xl', className)}>
      <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-purple-500/20" />
    </div>
  )
}

/* ── Eyebrow + SectionHeading ────────────────────────────────────── */
type Accent = 'blue' | 'violet' | 'emerald' | 'amber' | 'rose'

const accentText: Record<Accent, string> = {
  blue: 'text-blue-500',
  violet: 'text-violet-500',
  emerald: 'text-emerald-500',
  amber: 'text-amber-500',
  rose: 'text-rose-500',
}
const accentDot: Record<Accent, string> = {
  blue: 'bg-blue-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
}
const accentBg50: Record<Accent, string> = {
  blue: 'bg-blue-500/10',
  violet: 'bg-violet-500/10',
  emerald: 'bg-emerald-500/10',
  amber: 'bg-amber-500/10',
  rose: 'bg-rose-500/10',
}
const accentRing: Record<Accent, string> = {
  blue: 'group-hover:shadow-blue-500/30',
  violet: 'group-hover:shadow-violet-500/30',
  emerald: 'group-hover:shadow-emerald-500/30',
  amber: 'group-hover:shadow-amber-500/30',
  rose: 'group-hover:shadow-rose-500/30',
}

function Eyebrow({ children, accent = 'blue' }: { children: ReactNode; accent?: Accent }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]', accentText[accent])}>
      <span className={cn('h-1.5 w-1.5 rounded-full', accentDot[accent])} />
      {children}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  accent = 'blue',
  className,
  dark = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  accent?: Accent
  className?: string
  dark?: boolean
}) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left', className)}>
      <div className={cn(align === 'center' && 'flex justify-center')}>
        <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      </div>
      <h2 className={cn(
        'mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
        dark ? 'text-white' : 'text-slate-900'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-pretty text-lg leading-relaxed sm:text-xl',
          dark ? 'text-slate-400' : 'text-slate-600'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}

/* ── Animated icon tile ──────────────────────────────────────────── */
const accentHoverBg: Record<Accent, string> = {
  blue: 'group-hover:bg-blue-500',
  violet: 'group-hover:bg-violet-500',
  emerald: 'group-hover:bg-emerald-500',
  amber: 'group-hover:bg-amber-500',
  rose: 'group-hover:bg-rose-500',
}

function IconTile({ icon: Icon, accent = 'blue', size = 'md' }: { icon: IconType; accent?: Accent; size?: 'md' | 'lg' }) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ease-out',
        'group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:text-white group-hover:shadow-xl',
        size === 'md' ? 'size-12' : 'size-14',
        accentBg50[accent],
        accentText[accent],
        accentRing[accent],
        accentHoverBg[accent]
      )}
    >
      <Icon className={size === 'md' ? 'size-5' : 'size-6'} />
    </span>
  )
}

/* ── 1. Everything connected ─ LIGHT SECTION ──────────────────────── */
const solutions: { title: string; description: string; icon: IconType; href: string; accent: Accent }[] = [
  {
    title: 'AI Workers',
    description:
      'Hire autonomous AI employees that create content, respond to customers, qualify leads, recruit talent, analyze performance, and automate repetitive work around the clock.',
    icon: FiCpu,
    href: '/workers',
    accent: 'violet',
  },
  {
    title: 'ERP Solutions',
    description: 'Manage CRM, HRMS, Finance, Inventory, Operations, Procurement, Payroll and Analytics through one connected ERP platform.',
    icon: FiGrid,
    href: '/erp',
    accent: 'blue',
  },
  {
    title: 'Intelligent Automation',
    description: 'Transform repetitive workflows into automated processes that save time, reduce errors, and improve productivity across every department.',
    icon: FiZap,
    href: '/solutions/automation',
    accent: 'amber',
  },
  {
    title: 'Business Intelligence',
    description: 'Turn live business data into executive dashboards, forecasts, KPI tracking, and AI-powered recommendations.',
    icon: FiPieChart,
    href: '/solutions/business-intelligence',
    accent: 'emerald',
  },
  {
    title: 'Results-as-a-Service',
    description: 'Prefer measurable outcomes over software? Our experts operate your AI Workers, automation, and business systems while you focus on growth.',
    icon: FiTarget,
    href: '/solutions/raas',
    accent: 'rose',
  },
  {
    title: 'Custom Development',
    description: 'Build custom applications, AI solutions, integrations, customer portals, and enterprise software tailored to your business.',
    icon: FiCode,
    href: '/solutions/custom-development',
    accent: 'blue',
  },
]

function EverythingConnected() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <GradientBlob className="-right-40 -top-40 h-96 w-96" />
      <GradientBlob className="-left-40 bottom-0 h-80 w-80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything your business needs — connected"
          title="Start with one product. Expand into the whole platform."
          description="HIVENOX lets you begin with the products that solve your biggest challenges today, then expand into a complete intelligent business platform whenever you're ready. Every application shares one database, one login, and one AI layer."
          accent="violet"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100} direction="up">
              <Link
                href={s.href}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10',
                  focusRing
                )}
              >
                <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                  s.accent === 'blue' && 'from-blue-400 to-blue-600',
                  s.accent === 'violet' && 'from-violet-400 to-violet-600',
                  s.accent === 'emerald' && 'from-emerald-400 to-emerald-600',
                  s.accent === 'amber' && 'from-amber-400 to-amber-600',
                  s.accent === 'rose' && 'from-rose-400 to-rose-600',
                )} />
                <IconTile icon={s.icon} accent={s.accent} size="lg" />
                <h3 className="mt-6 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{s.description}</p>
                <span className={cn('mt-6 inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3', accentText[s.accent])}>
                  Learn more
                  <FiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 2. Platform advantage — DARK SECTION ────────────────────────── */


// --- Mock Data (Replace with your actual content if needed) ---
const advantageBenefits = [
  {
    title: "Single Source of Truth",
    description: "Say goodbye to scattered spreadsheets. Every department pulls from the exact same live data seamlessly.",
    icon: Database,
  },
  {
    title: "Zero Integrations Required",
    description: "Stop paying for costly API bridges. Hivenox products are natively connected out of the box.",
    icon: Zap,
  },
  {
    title: "Instant Cross-Department Sync",
    description: "When a sale closes, inventory drops, and finance updates instantly without manual data entry.",
    icon: RefreshCw,
  },
];

const architectureFlow = [
  { label: "Data entered by Sales", icon: Users },
  { label: "Processed by Hivenox Core", icon: Cpu },
  { label: "Available everywhere", icon: Share2 },
];

export function PlatformAdvantage() {
  return (
    <section className="relative overflow-hidden bg-blue-800 py-28 w-full">
      
      {/* 1. Ambient Dark Theme Glows (Updated for blue-800 background) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-0 top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute right-0 bottom-[-10%] h-[600px] w-[600px] translate-x-1/3 rounded-full bg-white/10 blur-[150px]" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT COLUMN: Text & Benefits */}
          <div>
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left"
            >
              <span className="mb-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                The platform advantage
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                One database. Every department.{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                  Zero silos.
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-blue-100 max-w-xl">
                Traditional software forces businesses to purchase separate applications for sales, accounting, HR, inventory, and reporting. They rarely communicate well, creating duplicate work and costly integrations. HIVENOX is different — every product runs on one shared platform, so information entered once becomes available everywhere it's needed.
              </p>
            </motion.div>

            {/* Benefits List */}
            <div className="mt-12 flex flex-col gap-6">
              {advantageBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_-10px_rgba(255,255,255,0.1)]"
                  >
                    {/* Icon Tile */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-200 transition-colors group-hover:bg-white/20 group-hover:text-cyan-100">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text */}
                    <div>
                      <h3 className="text-base font-bold text-white transition-colors">
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-blue-200">
                        {b.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Architecture Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-blue-700/50 bg-blue-900/40 p-10 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
              
              {/* Subtle grid background inside the card */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
              
              <p className="relative text-center text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Platform Architecture
              </p>
              
              <div className="relative mt-12 flex flex-col items-center gap-12">
                
                {/* The Connecting Line */}
                <div className="absolute bottom-10 top-10 left-1/2 w-px -translate-x-1/2 bg-blue-700/50" aria-hidden>
                   {/* Animated Data Packet flowing down the line */}
                   <motion.div 
                     animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                     transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                     className="absolute left-1/2 h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
                   />
                </div>

                {/* Flow Nodes */}
                {architectureFlow.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="relative z-10 flex flex-col items-center gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl border shadow-lg transition-all duration-300 backdrop-blur-md
                          ${idx === 0 ? 'border-cyan-400/30 bg-cyan-500/20 text-cyan-200 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]' : 
                            idx === 1 ? 'border-white/30 bg-white/20 text-white shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)] ring-2 ring-white/20' : 
                            'border-blue-300/30 bg-blue-400/20 text-blue-200 shadow-[0_0_20px_-5px_rgba(147,197,253,0.3)]'
                          }`}
                      >
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </motion.div>
                      
                      {/* Node Label with glowing dark pill backdrop */}
                      <span className="rounded-full border border-blue-700/50 bg-blue-900/80 px-4 py-1.5 text-center text-xs font-bold text-blue-100 shadow-sm backdrop-blur-sm">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              <p className="relative mt-12 text-center text-sm font-medium text-blue-300">
                No exports. No duplicate data. <span className="text-white font-semibold">No disconnected systems.</span>
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

/* ── 3. Go live in three steps — LIGHT SECTION ───────────────────── */
const goLiveSteps = [
  {
    number: '01',
    title: 'Choose your starting point',
    description: 'Select the products or AI Workers that solve your immediate business challenges.',
    icon: FiTarget,
  },
  {
    number: '02',
    title: 'Import your business',
    description: 'Bring customers, employees, inventory, suppliers, and financial information into HIVENOX using guided migration tools.',
    icon: FiDatabase,
  },
  {
    number: '03',
    title: 'Activate automation',
    description: 'Deploy AI Workers, automate repetitive workflows, and expand your platform as your business grows.',
    icon: FiZap,
  },
]

function GoLive() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Go live in three steps"
          title="From signup to productivity in days, not months."
          description="Deploying enterprise software shouldn't require months of consulting and implementation."
          accent="emerald"
        />

        <div className="relative mt-20 grid gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block" />
          {goLiveSteps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.number} delay={i * 150} direction="up" className="relative text-center md:text-left">
                <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-emerald-500 shadow-lg shadow-emerald-500/10 md:mx-0">
                  <Icon className="size-7" />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow-md">
                    {s.number}
                  </span>
                </div>
                <p className="mt-6 text-xs font-bold tracking-[0.15em] text-emerald-600 uppercase">Step {s.number}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── 4. Core AI Workers comparison — DARK SECTION ──────────────────── */
type CoreWorker = {
  code: string
  name: string
  description: string
  monthly: number
  annual: number
  credits: string
  featured?: boolean
  badge?: string
  features: { text: string; inherited?: boolean }[]
  includes: { label: string; value: string }[]
  icon: IconType
}

const coreWorkers: CoreWorker[] = [
  {
    code: '01 · SOCIAL',
    name: 'Social Worker',
    description: 'You already create — HIVENOX schedules, publishes, and keeps you consistent across every channel.',
    monthly: 79,
    annual: 63,
    credits: '1,500 AI credits / mo',
    icon: FiCalendar,
    features: [
      { text: 'All major platforms — scheduling & publishing' },
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
    description: 'AI posts, blogs, and thought leadership in your brand voice — bilingual, built for authority at scale.',
    monthly: 99,
    annual: 79,
    credits: '3,000 AI credits / mo',
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
    ],
  },
  {
    code: '03 · GROWTH',
    name: 'Growth Worker',
    description: 'Automation and content in one place — plus full approval workflows, 3 brands, and a monthly strategist.',
    monthly: 199,
    annual: 159,
    credits: '5,000 AI credits / mo',
    featured: true,
    badge: 'Most popular · best value',
    icon: FiTrendingUp,
    features: [
      { text: 'Everything in Social Worker', inherited: true },
      { text: 'Everything in Content Worker', inherited: true },
      { text: '200 posts + 40 blogs + 20 videos / mo' },
      { text: 'Full approval workflows + audit logs' },
      { text: 'Advanced analytics, ROI & A/B testing' },
      { text: 'Monthly 60-min strategy session' },
    ],
    includes: [
      { label: 'Scheduled posts', value: '200 / mo' },
      { label: 'Team seats', value: '10' },
      { label: 'Brand profiles', value: '3' },
      { label: 'Support', value: 'Priority + Slack' },
    ],
  },
]

function BillingToggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="inline-flex items-center gap-4">
      <div className="relative inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
        <span
          aria-hidden
          className={cn(
            'absolute inset-y-1 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
            annual ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
          )}
        />
        <button
          type="button"
          aria-pressed={!annual}
          onClick={() => onChange(false)}
          className={cn('relative z-10 rounded-full px-6 py-2.5 text-sm font-bold transition-colors', !annual ? 'text-white' : 'text-slate-400', focusRing)}
        >
          Monthly
        </button>
        <button
          type="button"
          aria-pressed={annual}
          onClick={() => onChange(true)}
          className={cn('relative z-10 rounded-full px-6 py-2.5 text-sm font-bold transition-colors', annual ? 'text-white' : 'text-slate-400', focusRing)}
        >
          Annual
        </button>
      </div>
      <span className="rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
        Save 20%
      </span>
    </div>
  )
}

function WorkersComparison() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-24 relative overflow-hidden bg-brand-950 py-28">
      {/* Update ParticleField color prop to match your primary hex code if needed */}
      <ParticleField count={25} color="#6366f1" /> 
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,theme(colors.primary.500/6%),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Workers comparison"
          title="Choose the right Worker for your team."
          description="Social publishes what you make. Content makes what you publish. Growth does both — in one login, for less than buying them apart."
          accent="primary"
          dark
        />

        <div className="mt-10 flex justify-center">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {coreWorkers.map((worker, i) => {
            const Icon = worker.icon
            const price = annual ? worker.annual : worker.monthly
            return (
              <Reveal key={worker.name} delay={i * 120} direction={i === 1 ? 'scale' : 'up'}>
                <div
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden rounded-3xl border bg-brand-900/50 p-8 backdrop-blur-xl transition-all duration-500',
                    worker.featured
                      ? 'border-primary-500/40 shadow-2xl shadow-primary-500/10 hover:shadow-primary-500/20'
                      : 'border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'
                  )}
                >
                  {worker.badge && (
                    <span className="absolute -top-px left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-b-xl bg-gradient-to-r from-primary-500 to-secondary-500 px-5 py-2 text-xs font-bold text-white shadow-lg">
                      <FiAward className="size-3.5" />
                      {worker.badge}
                    </span>
                  )}
                  <div className="text-xs font-bold tracking-[0.15em] text-brand-500 uppercase">{worker.code}</div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white">{worker.name}</h3>
                  </div>
                  <p className="mt-3 min-h-[3rem] text-sm text-brand-400">{worker.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-brand-500">A$</span>
                    <span className="text-5xl font-bold tracking-tight text-white">{fmt(price)}</span>
                    <span className="text-sm font-medium text-brand-500">/mo</span>
                  </div>
                  <div className="mt-1 min-h-[1.1rem] text-xs font-bold text-accent-400">
                    {annual ? 'Billed annually · save 20%' : ' '}
                  </div>

                  <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-brand-300">
                    <FiZap className="size-3.5 text-primary-400" />
                    {worker.credits}
                  </div>

                  <Link
                    href="/contact"
                    className={cn(
                      'mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-300',
                      worker.featured
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-[1.02]'
                        : 'border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-[1.02]',
                      focusRing // Ensure this variable is defined in your scope
                    )}
                  >
                    Start 7-day trial
                    {worker.featured && <FiArrowRight className="size-4" />}
                  </Link>

                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {worker.features.map((f) => (
                      <li key={f.text} className="flex gap-3 text-sm leading-relaxed text-brand-300">
                        <span
                          className={cn(
                            'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                            f.inherited ? 'bg-primary-500' : 'border border-primary-500/30 bg-primary-500/10'
                          )}
                        >
                          <FiCheck className={cn('size-3', f.inherited ? 'text-white' : 'text-primary-400')} />
                        </span>
                        <span className={cn(f.inherited && 'font-semibold text-white')}>{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-2.5 border-t border-dashed border-white/10 pt-6">
                    {worker.includes.map((row) => (
                      <div key={row.label} className="flex justify-between text-xs">
                        <span className="text-brand-500">{row.label}</span>
                        <span className="font-bold text-brand-300">{row.value}</span>
                      </div>
                    ))}
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

/* ── 5. Meet the specialists — LIGHT SECTION (HIVENOX CARD STYLE) ── */
type Specialist = {
  code: string
  name: string
  description: string
  price: number
  unit: string
  addOn?: boolean
  icon: IconType
  features: string[]
}

const specialists: Specialist[] = [
  {
    code: "01 · SOCIAL",
    name: "Social Worker",
    image: "/images/workers/social.webp",
    description:
      "Businesses that already create content but need automation, scheduling, and consistent publishing.",
    price: 499,
    unit: "Unlimited scheduling · 3 seats",
    icon: FiShare2,
    features: [
      "AI social media scheduling",
      "Cross-platform publishing",
      "Content calendar automation",
      "Performance analytics",
    ],
  },
  {
    code: "02 · CONTENT",
    name: "Content Worker",
    image: "/images/workers/content.webp",
    description:
      "Businesses that need professional AI-generated content and brand authority.",
    price: 799,
    unit: "100 AI content pieces / mo · 3 seats",
    icon: FiFileText,
    features: [
      "Blogs, articles & landing pages",
      "Social captions & ad copy",
      "Brand voice consistency",
      "Arabic & English content",
    ],
  },
  {
    code: "03 · GROWTH",
    name: "Growth Worker",
    image: "/images/workers/growth.webp",
    description:
      "Businesses that want automation AND content creation in one place.",
    price: 1199,
    unit: "Complete Growth Suite · 3 seats",
    popular: true,
    icon: FiTrendingUp,
    features: [
      "Everything in Social Worker",
      "Everything in Content Worker",
      "Growth automation workflows",
      "Performance optimization",
    ],
  },
  {
    code: "04 · VIDEO",
    name: "Video Worker",
    image: "/images/workers/video.webp",
    description:
      "Brands ready to scale on TikTok, Reels, and YouTube Shorts.",
    price: 899,
    unit: "30 videos + 30 scripts / mo · 3 seats",
    icon: FiVideo,
    features: [
      "30 rendered videos / month",
      "30 AI video scripts",
      "Captions & subtitles",
      "Watch-time analytics",
    ],
  },
  {
    code: "05 · SEO",
    name: "SEO Worker",
    image: "/images/workers/seo.webp",
    description:
      "Businesses that want to rank with SEO blog articles, keyword strategy, and search-driven growth.",
    price: 599,
    unit: "12 SEO articles / mo · 3 seats",
    icon: FiSearch,
    features: [
      "Keyword research",
      "SEO blog generation",
      "On-page optimization",
      "Ranking & SERP tracking",
    ],
  },
  {
    code: "06 · ANALYTICS",
    name: "Advanced Analytics Worker",
    image: "/images/workers/analytics.webp",
    description:
      "Sold as an add-on to any Worker. Upgrades you from basic to revenue-grade insight.",
    price: 399,
    unit: "20 executive reports / mo",
    addOn: true,
    icon: FiBarChart2,
    features: [
      "Executive dashboards",
      "Cross-channel reporting",
      "Audience insights",
      "Competitor analytics",
    ],
  },
];



const enterpriseFeatures = [
  'Everything in all Workers (Social, Content, Growth, Video, Advanced Analytics)',
  'Multi-brand support (up to 5 brand profiles)',
  'Lead-generation workflows + CRM sync (HubSpot, Odoo, Salesforce)',
  'AI Campaign Operations (multi-touch sequences, ABM workflows)',
  'Executive dashboards with cross-brand benchmarking',
  'Dedicated success manager + priority support (4-hour SLA)',
]

function Specialists() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.04),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the specialists"
          title="A specialist for every job."
          description="Some business challenges require focused expertise. Bolt any specialist Worker onto your stack — each one built for a single job, done exceptionally well."
          accent="violet"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialists.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.name} delay={(i % 3) * 100} direction="up">
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
                  {/* ── Image Box — no text overlay, pure visual ── */}
                  {/* image box */}
                  <div className="relative h-65 overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      priority={i < 3}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div className="flex items-start justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                          <Icon className="size-5" />
                        </span>

                        {s.addOn && (
                          <span className="rounded-full border border-violet-400/30 bg-violet-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-200 backdrop-blur-md">
                            Add-on
                          </span>
                        )}
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                          {s.code}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          HIVENOX {s.name}
                        </h3>

                        <p className="mt-1 text-xs text-white/80">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ── Card Body — all text lives here ── */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Code + Name row */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          {s.code}
                        </p>
                        <h3 className="text-lg font-bold text-slate-900">
                          HIVENOX {s.name}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {s.description}
                    </p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-500">A$</span>
                      <span className="text-3xl font-bold tracking-tight text-slate-900">{fmt(s.price)}</span>
                      <span className="text-xs font-medium text-slate-400">/mo</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{s.unit}</p>

                    <Link
                      href="/contact"
                      className={cn(
                        'mt-5 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-slate-50 hover:scale-[1.02]',
                        focusRing,
                      )}
                    >
                      Learn more
                    </Link>

                    <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-500">
                          <FiCheck className="mt-0.5 size-4 shrink-0 text-violet-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Enterprise Banner */}
        <Reveal delay={200} direction="scale">
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-8 sm:grid sm:grid-cols-[1.3fr_1fr] sm:items-center sm:gap-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-violet-700">
                07 · Enterprise Growth OS
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Everything in HIVENOX. Built for multi-brand &amp; agencies.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                Multi-brand enterprises, agencies, and teams running full-funnel demand generation.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {enterpriseFeatures.map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] text-slate-600">
                    <FiCheck className="mt-0.5 size-3.5 shrink-0 text-violet-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-8 text-center sm:mt-0">
              <p className="text-4xl font-bold tracking-tight text-violet-600 sm:text-5xl">From $2,999</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">AUD / month · ex. GST</p>
              <Link
                href="/contact"
                className={cn(
                  'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-[1.02] sm:w-auto',
                  focusRing,
                )}
              >
                Learn more
                <FiArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── 6. Everything your workers need — DARK SECTION ───────────────── */
const workerCapabilities: { label: string; icon: IconType }[] = [
  { label: 'Shared Knowledge Base', icon: FiDatabase },
  { label: 'Brand Voice Memory', icon: FiBookOpen },
  { label: 'Approval Workflows', icon: FiCheckCircle },
  { label: 'Analytics Dashboard', icon: FiBarChart2 },
  { label: 'Secure Cloud', icon: FiCloud },
  { label: 'Team Collaboration', icon: FiUsers },
  { label: 'AI Credits', icon: FiZap },
  { label: 'Role Permissions', icon: FiKey },
  { label: 'API Access', icon: FiCode },
  { label: 'Audit Logs', icon: FiFileText },
]

function WorkerCapabilities() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-28 rounded-4xl">
      {/* 1. Premium Background Layering */}
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950" />
      
      {/* Grain/Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Ambient Radial Glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

      {/* 2. Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">Everything your Workers need</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Enterprise capabilities in every plan.</p>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">AI Workers become even more powerful because every plan includes the infrastructure to deploy AI safely, at scale.</p>
        </div>

        {/* 3. Shiny Glass Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {workerCapabilities.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={c.label} className="group relative flex h-full flex-col items-center gap-5 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]">
                
                {/* Shiny Gradient Border Effect */}
                <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                
                {/* Icon Container with Inner Glow */}
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                
                {/* Label */}
                <span className="relative text-sm font-bold text-slate-200 transition-colors duration-300 group-hover:text-cyan-100">
                  {c.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── 7. One Worker or the whole hive — LIGHT SECTION ───────────────── */
const combos: { a: { label: string; icon: IconType }; b: { label: string; icon: IconType } }[] = [
  { a: { label: 'Social', icon: FiCalendar }, b: { label: 'Video', icon: FiVideo } },
  { a: { label: 'Content', icon: FiEdit3 }, b: { label: 'SEO', icon: FiSearch } },
  { a: { label: 'Sales', icon: FiPhoneCall }, b: { label: 'CRM', icon: FiUsers } },
  { a: { label: 'Support', icon: FiHeadphones }, b: { label: 'Voice AI', icon: FiMic } },
]

function WorkerCombos() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.04),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="One Worker or the whole hive"
          title="Start with one. Expand whenever you're ready."
          description="Businesses don't need to purchase everything on day one. Every Worker shares one platform, so combinations click together naturally."
          accent="blue"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {combos.map((combo, i) => {
            const IconA = combo.a.icon
            const IconB = combo.b.icon
            return (
              <Reveal key={combo.a.label + combo.b.label} delay={i * 100} direction="up">
                <div className="group flex flex-col items-center gap-4 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <IconA className="size-6" />
                    </span>
                    <FiPlus className="size-5 text-slate-300" />
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30">
                      <IconB className="size-6" />
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    {combo.a.label} + {combo.b.label}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} direction="scale">
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-violet-50/80 px-8 py-7 text-center shadow-sm">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-200/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-200/20 blur-2xl" />
            <p className="relative text-sm font-bold text-slate-800">
              Or run the Complete Marketing Department — every Worker, unified, on one platform.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── 8. Publish everywhere — DARK SECTION ────────────────────────── */
const platforms: { name: string; icon: IconType }[] = [
  { name: 'Instagram', icon: FaInstagram },
  { name: 'Facebook', icon: FaFacebookF },
  { name: 'LinkedIn', icon: FaLinkedinIn },
  { name: 'TikTok', icon: FaTiktok },
  { name: 'YouTube', icon: FaYoutube },
  { name: 'X', icon: FaXTwitter },
  { name: 'Threads', icon: FaThreads },
  { name: 'Google Business', icon: FaGoogle },
  { name: 'Snapchat', icon: FaSnapchatGhost },
  { name: 'Pinterest', icon: FaPinterest },
];

const dynamicColors = [
    {
      text: "text-cyan-100",
      icon: "text-cyan-400",
      hover: "hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:text-cyan-50 hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)]",
    },
    {
      text: "text-fuchsia-100",
      icon: "text-fuchsia-400",
      hover: "hover:border-fuchsia-400/60 hover:bg-fuchsia-500/20 hover:text-fuchsia-50 hover:shadow-[0_0_25px_-5px_rgba(232,121,249,0.4)]",
    },
    {
      text: "text-pink-100",
      icon: "text-pink-400",
      hover: "hover:border-pink-400/60 hover:bg-pink-500/20 hover:text-pink-50 hover:shadow-[0_0_25px_-5px_rgba(244,114,182,0.4)]",
    },
    {
      text: "text-orange-100",
      icon: "text-orange-400",
      hover: "hover:border-orange-400/60 hover:bg-orange-500/20 hover:text-orange-50 hover:shadow-[0_0_25px_-5px_rgba(251,146,60,0.4)]",
    },
    {
      text: "text-emerald-100",
      icon: "text-emerald-400",
      hover: "hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.4)]",
    },
  ];

function PublishEverywhere() {
  return (
   <section className="relative w-full overflow-hidden bg-blue-800 py-28">
      
      {/* 1. Animated Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Cyan Orb - Top Left */}
        <div 
          className="absolute -left-[10%] -top-[20%] h-[800px] w-[800px] rounded-full bg-cyan-400/20 blur-[150px] animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
        {/* Vibrant Fuchsia Orb - Bottom Right */}
        <div 
          className="absolute -bottom-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '1s' }} 
        />
        {/* Deep Indigo Orb - Center */}
        <div 
          className="absolute left-[30%] top-[20%] h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" 
          style={{ animationDuration: '5s', animationDelay: '2s' }} 
        />
      </div>

      {/* 2. Particles Overlay */}
      <ParticleField count={25} color="rgba(255, 255, 255, 0.2)" />
      
      {/* Subtle grid pattern for texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* 3. Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Publish everywhere"
          title="One dashboard. Every major platform."
          description="Unified scheduling, analytics, and bilingual publishing across every channel your audience is already on."
          accent="cyan"
          dark
        />

        {/* 4. Colorful Platform Buttons Grid */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {platforms.map((item, i) => {
            const Icon = item.icon;
            
            // Assign a color theme based on the index to ensure vibrant variety
            const colorTheme = dynamicColors[i % dynamicColors.length];

            return (
              <Reveal key={item.name} delay={(i % 5) * 80} direction="scale">
                <button 
                  className={`group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${colorTheme.text} ${colorTheme.hover}`}
                >
                  {/* Subtle inner shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:animate-[shimmer_1.5s_infinite]" />
                  
                  {/* Icon */}
                  <Icon className={`size-5 transition-transform duration-500 group-hover:scale-125 ${colorTheme.icon}`} />
                  
                  {/* Name */}
                  <span className="relative z-10 tracking-wide">{item.name}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}

/* ── 9. Enterprise by default — LIGHT SECTION ──────────────────────── */
const securityFeatures: { label: string; icon: IconType }[] = [
  { label: 'Role Permissions', icon: FiKey },
  { label: 'Encryption', icon: FiLock },
  { label: 'Audit Logs', icon: FiFileText },
  { label: 'SSO', icon: FiLogIn },
  { label: 'Backups', icon: FiHardDrive },
  { label: 'API', icon: FiCode },
  { label: 'High Availability', icon: FiServer },
  { label: 'Multi-Workspace', icon: FiGrid },
  { label: 'Multi-Location', icon: FiMapPin },
  { label: 'Compliance', icon: FiShield },
  { label: 'Two-Factor Auth', icon: FiSmartphone },
]

function EnterpriseSecurity() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Enterprise by default"
          title="Security isn't an upgrade. It's built in."
          description="Every HIVENOX deployment ships with enterprise-grade governance and reliability standards from day one."
          accent="blue"
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {securityFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.label} delay={(i % 6) * 70} direction="scale">
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs font-bold text-slate-700">{f.label}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── 10. Customer success — DARK SECTION ───────────────────────────── */
const successMetrics = [
  { value: '5→1', label: 'Systems replaced with one platform' },
  { value: '70%', label: 'Less manual reporting work' },
  { value: '3×', label: 'Faster customer response time' },
  { value: '15+ hrs', label: 'Saved per week, per team' },
]

const testimonials = [
  {
    quote: "HIVENOX replaced five disconnected systems with one intelligent platform. Our reporting became real-time, and our team finally has time to focus on growth.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "TechFlow Growth",
    theme: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40",
    gradient: "from-blue-400 to-white"
  },
  {
    quote: "The unified dashboard changed how we handle social channels. No more switching tabs or losing data—everything is localized, bilingual, and ready to publish.",
    author: "David Chen",
    role: "CMO",
    company: "GlobalReach Media",
    theme: "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40",
    gradient: "from-indigo-400 to-white"
  },
  {
    quote: "Deploying AI workers securely across our entire department used to be a compliance nightmare. Now, it’s a one-click deployment with full audit logs.",
    author: "Elena Rodriguez",
    role: "Head of IT",
    company: "Nexus Financial",
    theme: "border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40",
    gradient: "from-violet-400 to-white"
  },
  {
    quote: "We consolidated our HR, Payroll, and Accounting into one flow. The automated approval workflows have literally saved us hundreds of hours this quarter.",
    author: "Marcus Thorne",
    role: "VP of Operations",
    company: "Stellar Logistics",
    theme: "border-sky-500/20 bg-sky-500/5 hover:border-sky-500/40",
    gradient: "from-sky-400 to-white"
  },
  {
    quote: "Their shared knowledge base means our support agents and sales reps are finally singing from the same hymn sheet. Absolute game-changer for brand voice.",
    author: "Aisha Patel",
    role: "Customer Success",
    company: "Elevate SaaS",
    theme: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40",
    gradient: "from-emerald-400 to-white"
  }
];

export function CustomerSuccess() {
  // Duplicate array for seamless infinite scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    // Reduced padding and removed min-h-screen to make it tighter
    <section className="relative w-full overflow-hidden bg-[#020617] py-16 md:py-20">
      
      {/* 1. Motion Gradient Background (Blue & White) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Deep Blue Orb */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-blue-700/20 blur-[120px]"
        />
        {/* Soft White/Sky Orb */}
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-white/5 blur-[120px]"
        />
        {/* Bright Blue Orb */}
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[40%] top-[30%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]"
        />
      </div>

      {/* 2. SVG Noise Filter & Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* 3. Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Customer success"
          title="Real outcomes, not just software."
          description="Businesses choose HIVENOX because it delivers measurable results — less manual work, faster reporting, and streamlined operations."
          accent="blue"
          dark
        />

        {/* 4. Moving Reviews (Infinite Marquee) */}
        <div className="relative mt-12 w-full overflow-hidden">
          {/* Gradient Masks for smooth fade in/out on the sides */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#020617] to-transparent md:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#020617] to-transparent md:w-32" />

          {/* Marquee Track */}
          <motion.div 
            className="flex w-fit gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {scrollingTestimonials.map((testimonial, i) => (
              <div 
                key={`${testimonial.author}-${i}`} 
                className={`group relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 md:w-[380px] ${testimonial.theme}`}
              >
                <div>
                  <span className={`bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-5xl leading-none text-transparent opacity-50`} aria-hidden>
                    &ldquo;
                  </span>
                  <blockquote className="mt-1 whitespace-normal text-sm font-medium leading-relaxed text-blue-50 md:text-base">
                    {testimonial.quote}
                  </blockquote>
                </div>
                
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-sm font-bold text-white">{testimonial.author}</p>
                  <p className="mt-0.5 text-xs font-semibold tracking-wide text-blue-300">
                    {testimonial.role} <span className="mx-1.5 text-white/20">|</span> <span className="text-blue-100">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 5. Metrics Grid (Slightly smaller padding) */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg">
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {successMetrics.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center justify-center bg-[#050b20] px-4 py-8 text-center transition-colors duration-300 hover:bg-[#08112b]">
                <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {s.value}
                  </span>
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-blue-300">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── 11. FAQ — LIGHT SECTION ─────────────────────────────────────── */
const faqs: { q: string; a: string }[] = [
  {
    q: 'What is an AI Worker, and how is it different from a chatbot?',
    a: 'A chatbot answers a message. An AI Worker owns a job end to end — planning, creating, publishing, following up, and reporting — acting on your live business data with minimal supervision.',
  },
  {
    q: 'Do I need the full ERP to get started?',
    a: 'No. Start with a single AI Worker or a single ERP module, and activate more as you grow. Every product shares the same database, so nothing needs to be rebuilt or migrated later.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Every paid Worker includes a 7-day free trial with no credit card required. You can also stay on the free-forever plan for as long as you like.',
  },
  {
    q: 'Does HIVENOX integrate with tools we already use?',
    a: 'Yes — HIVENOX connects to CRMs and business tools you already rely on, including HubSpot, Zoho, Salesforce, and Odoo, plus a full REST API and webhooks on Enterprise plans.',
  },
  {
    q: 'Is HIVENOX secure enough for enterprise use?',
    a: 'Every deployment includes role permissions, encryption, audit logs, SSO, backups, and two-factor authentication by default — not as a paid upgrade.',
  },
  {
    q: 'Is Arabic support native or translated?',
    a: 'Native. HIVENOX is written and rendered natively in Arabic and English — full RTL layouts, Hijri calendar awareness, and dialect-aware content — not translated after the fact.',
  },
  {
    q: 'What are AI credits, and do they expire?',
    a: 'AI credits power content generation, reports, and Worker actions. Every plan includes a monthly allowance, and pay-as-you-go top-ups are available any time without upgrading your plan.',
  },
  {
    q: 'What if we need something fully custom?',
    a: 'Our Custom Development and Results-as-a-Service teams build bespoke applications, integrations, and managed operations for businesses that need more than the standard platform.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Common questions, answered."
          description="AI Workers, ERP modules, pricing, the free trial, integrations, security, Arabic support, AI credits, deployment, and enterprise services."
          accent="blue"
        />

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={(i % 4) * 80} direction="up">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50/50',
                      focusRing
                    )}
                  >
                    {item.q}
                    <FiChevronDown className={cn('size-4 shrink-0 text-blue-500 transition-transform duration-500', isOpen && 'rotate-180')} />
                  </button>
                  <div className={cn('grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{item.a}</p>
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

/* ── 12. Final CTA — DARK SECTION ─────────────────────────────────── */
function FinalCta() {
  return (
   <section className="relative w-full overflow-hidden bg-[#020617] py-24 lg:py-32">

  {/* 1. Glow background — plain CSS keyframes, no framer-motion */}
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <style>{`
      @keyframes ctaGlowTop {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 0.8; }
      }
      @keyframes ctaGlowBottom {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-30px) scale(1.1); }
      }
      @keyframes ctaTwinkle {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 0.9; }
      }
      @keyframes ctaShimmer {
        from { transform: translateX(-120%); }
        to { transform: translateX(220%); }
      }
      .cta-glow-top { animation: ctaGlowTop 8s ease-in-out infinite; }
      .cta-glow-bottom { animation: ctaGlowBottom 12s ease-in-out infinite; }
      .cta-starfield { animation: ctaTwinkle 6s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .cta-glow-top, .cta-glow-bottom, .cta-starfield { animation: none; }
      }
    `}</style>

    <div className="flex h-full items-center justify-center">
      <div
        className="cta-glow-top absolute -top-[30%] h-[600px] w-[800px] rounded-[100%] bg-cyan-500/15 blur-[100px]"
        style={{ willChange: 'transform, opacity' }}
      />
      <div
        className="cta-glow-bottom absolute -bottom-[40%] h-[500px] w-[800px] rounded-[100%] bg-blue-600/20 blur-[100px]"
        style={{ willChange: 'transform' }}
      />
    </div>

    {/* Single-layer starfield — replaces <ParticleField count={25} />,
        one radial-gradient tile + one shared pulse instead of 25 animated nodes */}
    <div
      className="cta-starfield absolute inset-0 opacity-70"
      style={{
        backgroundImage: 'radial-gradient(rgba(34,211,238,0.35) 1px, transparent 1px)',
        backgroundSize: '46px 46px',
      }}
    />
  </div>

  {/* 2. Noise + grid overlay — static, unchanged (cheap: not animated) */}
  <div
    className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-screen"
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
  />
  <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

  {/* 3. Main content */}
  <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <Reveal direction="scale">

      <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Ready to build your{' '}
        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          intelligent business?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-blue-100 sm:text-xl">
        Replace disconnected software with one platform where ERP, CRM, Finance,
        HR, Analytics, Automation, and AI Workers work together from day one.
      </p>

      <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md">
        One Platform <span className="text-blue-500/50">•</span> One Database <span className="text-blue-500/50">•</span> Every Department
      </p>

      {/* 4. Action buttons */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">

        {/* Primary button */}
        <Link
          href="/contact"
          className={cn(
            'group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.7)] sm:w-auto',
            focusRing
          )}
        >
          {/* Shimmer — only animates on hover; the previous version referenced
              a `shimmer` keyframe that was never defined anywhere */}
          <span className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:block group-hover:animate-[ctaShimmer_1.4s_ease-in-out_infinite] motion-reduce:!hidden" />
          <span className="relative z-10 flex items-center gap-2">
            Start Free Trial
            <FiArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>

        {/* Secondary button */}
        <Link
          href="/contact#form"
          className={cn(
            'group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-50 sm:w-auto',
            focusRing
          )}
        >
          <FiPlay className="size-5 text-blue-300 transition-colors duration-300 group-hover:text-cyan-300" />
          Book a Demo
        </Link>

      </div>
    </Reveal>
  </div>
</section>
  )
}

/* ── Composed page body — no hero, no nav, no footer ─────────────── */
export default function HomeSections() {
  return (
    <>
      <HeroSection/>
      <EverythingConnected />
      <PlatformAdvantage />
      <GoLive />
      <WorkersComparison />
      <Specialists />
      <WorkerCapabilities />
      <WorkerCombos />
      <PublishEverywhere />
      <EnterpriseSecurity />
      <CustomerSuccess />
      <FAQ />
      <FinalCta />
    </>
  )
}