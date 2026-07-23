'use client'

import { useEffect, useRef, useState, type ElementType } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

import {
  ArrowRight,
  Bot,
  BarChart3,
  Box,
  Boxes,
  Briefcase,
  Building2,
  ChevronDown,
  Code2,
  Factory,
  FileText,
  GraduationCap,
  Headset,
  HeartPulse,
  Info,
  Layers,
  LayoutDashboard,
  LineChart,
  Menu,
  Mic,
  Newspaper,
  Phone,
  PieChart,
  Puzzle,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  Users,
  Video,
  X,
  Zap,
  Play,
  ExternalLink,
} from 'lucide-react'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2'

type NavItem = { title: string; href: string; icon: ElementType; desc: string; badge?: string }

/* ------------------------------------------------------------------ */
/*  Accent system — one accent per mega menu                            */
/* ------------------------------------------------------------------ */

type Accent = 'blue' | 'violet' | 'indigo' | 'amber' | 'rose'

const accentStyles: Record<
  Accent,
  {
    text: string
    chipBg: string
    chipHoverBg: string
    panelBg: string
    panelBorder: string
    glow: string
    solidBg: string
    railActiveBg: string
    gradientFrom: string
    gradientTo: string
    iconBg: string
    softText: string
    previewGradient: string
    previewBorder: string
    ctaShadow: string
    ambientGlow: string
  }
> = {
  blue: {
    text: 'text-blue-600',
    chipBg: 'bg-blue-100/60 text-blue-600',
    chipHoverBg: 'group-hover:bg-blue-600 group-hover:text-white',
    panelBg: 'bg-blue-50/70',
    panelBorder: 'border-blue-100',
    glow: 'bg-blue-400/25',
    solidBg: 'bg-blue-600 hover:bg-blue-500',
    railActiveBg: 'bg-blue-50 text-blue-700',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-blue-500',
    iconBg: 'bg-blue-600',
    softText: 'text-blue-700',
    previewGradient: 'from-blue-50/80 to-sky-50/80',
    previewBorder: 'border-blue-200/60',
    ctaShadow: 'shadow-blue-600/25',
    ambientGlow: 'bg-blue-400/8',
  },
  violet: {
    text: 'text-violet-600',
    chipBg: 'bg-violet-100/60 text-violet-600',
    chipHoverBg: 'group-hover:bg-violet-600 group-hover:text-white',
    panelBg: 'bg-violet-50/70',
    panelBorder: 'border-violet-100',
    glow: 'bg-violet-400/25',
    solidBg: 'bg-violet-600 hover:bg-violet-500',
    railActiveBg: 'bg-violet-50 text-violet-700',
    gradientFrom: 'from-violet-600',
    gradientTo: 'to-violet-500',
    iconBg: 'bg-violet-600',
    softText: 'text-violet-700',
    previewGradient: 'from-violet-50/80 to-fuchsia-50/80',
    previewBorder: 'border-violet-200/60',
    ctaShadow: 'shadow-violet-600/25',
    ambientGlow: 'bg-violet-400/8',
  },
  indigo: {
    text: 'text-indigo-600',
    chipBg: 'bg-indigo-100/60 text-indigo-600',
    chipHoverBg: 'group-hover:bg-indigo-600 group-hover:text-white',
    panelBg: 'bg-indigo-50/70',
    panelBorder: 'border-indigo-100',
    glow: 'bg-indigo-400/25',
    solidBg: 'bg-indigo-600 hover:bg-indigo-500',
    railActiveBg: 'bg-indigo-50 text-indigo-700',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-indigo-500',
    iconBg: 'bg-indigo-600',
    softText: 'text-indigo-700',
    previewGradient: 'from-indigo-50/80 to-blue-50/80',
    previewBorder: 'border-indigo-200/60',
    ctaShadow: 'shadow-indigo-600/25',
    ambientGlow: 'bg-indigo-400/8',
  },
  amber: {
    text: 'text-amber-600',
    chipBg: 'bg-amber-100/60 text-amber-600',
    chipHoverBg: 'group-hover:bg-amber-500 group-hover:text-white',
    panelBg: 'bg-amber-50/70',
    panelBorder: 'border-amber-100',
    glow: 'bg-amber-400/25',
    solidBg: 'bg-amber-500 hover:bg-amber-400',
    railActiveBg: 'bg-amber-50 text-amber-700',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-400',
    iconBg: 'bg-amber-500',
    softText: 'text-amber-700',
    previewGradient: 'from-amber-50/80 to-orange-50/80',
    previewBorder: 'border-amber-200/60',
    ctaShadow: 'shadow-amber-500/25',
    ambientGlow: 'bg-amber-400/8',
  },
  rose: {
    text: 'text-rose-600',
    chipBg: 'bg-rose-100/60 text-rose-600',
    chipHoverBg: 'group-hover:bg-rose-600 group-hover:text-white',
    panelBg: 'bg-rose-50/70',
    panelBorder: 'border-rose-100',
    glow: 'bg-rose-400/25',
    solidBg: 'bg-rose-600 hover:bg-rose-500',
    railActiveBg: 'bg-rose-50 text-rose-700',
    gradientFrom: 'from-rose-600',
    gradientTo: 'to-rose-500',
    iconBg: 'bg-rose-600',
    softText: 'text-rose-700',
    previewGradient: 'from-rose-50/80 to-pink-50/80',
    previewBorder: 'border-rose-200/60',
    ctaShadow: 'shadow-rose-600/25',
    ambientGlow: 'bg-rose-400/8',
  },
}

/* ------------------------------------------------------------------ */
/*  Navigation data                                                     */
/* ------------------------------------------------------------------ */

const solutionsItems: NavItem[] = [
  { title: 'Results as a Service', href: '/solutions/results-as-a-service', icon: Rocket, desc: 'Guaranteed outcomes powered by our technology — you pay for results, not seats.', badge: 'Featured' },
  { title: 'Business Intelligence', href: '/solutions/business-intelligence', icon: BarChart3, desc: 'Live dashboards, forecasts, and KPI tracking pulled straight from your own data.' },
  { title: 'Intelligent Automation', href: '/solutions/intelligent-automation', icon: Zap, desc: 'Turn repetitive, manual workflows into automated processes across every team.' },
  { title: 'Custom Software Development', href: '/solutions/custom-software-development', icon: Code2, desc: 'Bespoke applications and integrations built and maintained by our engineers.' },
]

const aiWorkersItems: NavItem[] = [
  { title: 'Social Worker', href: '/ai-workers/social-worker', icon: Sparkles, desc: 'Schedules and publishes across every channel, bilingual, on autopilot.' },
  { title: 'Content Worker', href: '/ai-workers/content-worker', icon: FileText, desc: 'Writes on-brand posts, blogs, and thought leadership at scale.' },
  { title: 'Growth Worker', href: '/ai-workers/growth-worker', icon: LineChart, desc: 'Automation, approvals, and advanced analytics — everything, unified.' },
  { title: 'Video Worker', href: '/ai-workers/video-worker', icon: Video, desc: 'Scripts, hooks, and captions built for TikTok, Reels, and Shorts.' },
  { title: 'SEO Worker', href: '/ai-workers/seo-worker', icon: Search, desc: 'Bilingual keyword strategy and search-driven organic growth.' },
  { title: 'Advanced Analytics Worker', href: '/ai-workers/advanced-analytics-worker', icon: BarChart3, desc: 'Revenue-grade reporting — bolts onto any Worker as an add-on.' },
  { title: 'Enterprise Growth OS', href: '/ai-workers/enterprise-growth-os', icon: Layers, desc: 'Every Worker, unified, for multi-brand teams and agencies.', badge: 'Popular' },
]

const businessAppsItems: NavItem[] = [
  { title: 'Hivenox ERP', href: '/products/hivenox-erp', icon: LayoutDashboard, desc: 'The connected core every other Hivenox app plugs into.' },
  { title: 'Hivenox CRM', href: '/products/hivenox-crm', icon: Users, desc: 'Pipelines, contacts, and deals in one shared view.' },
  { title: 'Hivenox HRMS', href: '/products/hivenox-hrms', icon: Briefcase, desc: 'Hiring, payroll, and people management in one place.' },
  { title: 'Hivenox Books', href: '/products/hivenox-books', icon: PieChart, desc: 'Accounting and finance that reconciles itself.' },
  { title: 'Hivenox SalesFlow', href: '/products/hivenox-salesflow', icon: LineChart, desc: 'Pipeline automation from first touch to closed deal.' },
  { title: 'Hivenox Desk', href: '/products/hivenox-desk', icon: Headset, desc: 'Customer support tickets, unified across every channel.' },
  { title: 'Hivenox Ops', href: '/products/hivenox-ops', icon: Boxes, desc: 'Inventory and operations, tracked in real time.' },
]

const aiAgentsItems: NavItem[] = [
  { title: 'AI Sales Agent', href: '/products/ai-sales-agent', icon: Bot, desc: 'Prospects, follows up, and books meetings automatically.' },
  { title: 'AI Support Agent', href: '/products/ai-support-agent', icon: Headset, desc: 'Answers customers instantly, in Arabic and English.' },
  { title: 'AI Recruiter', href: '/products/ai-recruiter', icon: Briefcase, desc: 'Screens candidates and schedules interviews for you.' },
  { title: 'Voice AI', href: '/products/voice-ai', icon: Mic, desc: 'Makes and takes natural phone calls, around the clock.' },
  { title: 'Insights AI', href: '/products/insights-ai', icon: BarChart3, desc: 'Turns raw business data into plain-language answers.' },
]

const erpModulesItems: NavItem[] = [
  { title: 'CRM', href: '/erp-solutions/crm', icon: Users, desc: 'Track every lead, deal, and customer relationship.' },
  { title: 'HRMS', href: '/erp-solutions/hrms', icon: Briefcase, desc: 'Employee records, payroll, and performance in one module.' },
  { title: 'Inventory Management', href: '/erp-solutions/inventory-management', icon: Box, desc: 'Real-time stock levels across every location.' },
  { title: 'Accounting & Finance', href: '/erp-solutions/accounting-finance', icon: PieChart, desc: 'Books, invoicing, and financial reporting, automated.' },
  { title: 'Operations Management', href: '/erp-solutions/operations-management', icon: LayoutDashboard, desc: 'Coordinate day-to-day operations from one dashboard.' },
  { title: 'Analytics & Reporting', href: '/erp-solutions/analytics-reporting', icon: BarChart3, desc: 'Executive-ready reports, generated on schedule.' },
]

const industriesItems: NavItem[] = [
  { title: 'Healthcare & Clinics', href: '/industries/healthcare-clinics', icon: HeartPulse, desc: 'Patient scheduling, records, and care coordination in one place.' },
  { title: 'Salons & Wellness', href: '/industries/salons-wellness', icon: Sparkles, desc: 'Bookings, memberships, and client history, simplified.' },
  { title: 'Real Estate', href: '/industries/real-estate', icon: Building2, desc: 'Listings, leads, and deal pipelines in one workspace.' },
  { title: 'Retail & E-commerce', href: '/industries/retail-ecommerce', icon: ShoppingBag, desc: 'Inventory, orders, and storefronts, all connected.' },
  { title: 'Restaurants & Cafés', href: '/industries/restaurants-cafes', icon: UtensilsCrossed, desc: 'Orders, reservations, and loyalty in a single system.' },
  { title: 'Agencies', href: '/industries/agencies', icon: Briefcase, desc: 'Client work, retainers, and reporting, all in one login.' },
  { title: 'Professional Services', href: '/industries/professional-services', icon: Users, desc: 'Client engagements, billing, and delivery tracked end to end.' },
  { title: 'Education', href: '/industries/education', icon: GraduationCap, desc: 'Enrollment, communication, and reporting for schools.' },
  { title: 'Manufacturing', href: '/industries/manufacturing', icon: Factory, desc: 'Production, supply chain, and inventory, unified.' },
]

const companyItems: NavItem[] = [
  { title: 'About Us', href: '/about', icon: Info, desc: 'Who we are and why we built Hivenox.' },
  { title: 'Case Studies', href: '/case-studies', icon: FileText, desc: 'Real businesses, real results, in their own words.' },
  { title: 'Insights (Blog)', href: '/blogs', icon: Newspaper, desc: 'Product updates, playbooks, and industry perspective.' },
  { title: 'Integrations', href: '/integrations', icon: Puzzle, desc: 'Connect the tools your team already relies on.' },
  { title: 'Contact', href: '/contact', icon: Phone, desc: 'Talk to our team about your business, not a script.' },
]

const productCategories = [
  { key: 'businessApps', label: 'Business Apps', icon: LayoutDashboard, items: businessAppsItems },
  { key: 'aiAgents', label: 'AI Workers & Agents', icon: Bot, items: aiAgentsItems },
  { key: 'erpModules', label: 'ERP Modules', icon: Boxes, items: erpModulesItems },
] as const

type ProductCategoryKey = (typeof productCategories)[number]['key']

const menuOverviews = {
  solutions: { href: '/solutions', label: 'View all solutions', prefix: '/solutions', accent: 'blue' as Accent, eyebrow: 'Solutions', sidebarLabel: 'Browse Solutions' },
  aiWorkers: { href: '/ai-workers', label: 'View all AI Workers', prefix: '/ai-workers', accent: 'violet' as Accent, eyebrow: 'AI Workers', sidebarLabel: 'Browse AI Workers' },
  products: { href: '/products', label: 'View all products', prefix: '/products', accent: 'indigo' as Accent, eyebrow: 'Products', sidebarLabel: 'Browse Products' },
  industries: { href: '/industries', label: 'View all industries', prefix: '/industries', accent: 'amber' as Accent, eyebrow: 'Industries', sidebarLabel: 'Browse Industries' },
  company: { href: '/about', label: 'View all', prefix: null, accent: 'rose' as Accent, eyebrow: 'Company & Resources', sidebarLabel: 'Browse Company' },
} as const

type MenuKey = keyof typeof menuOverviews | null

/* ------------------------------------------------------------------ */
/*  Language toggle                                                     */
/* ------------------------------------------------------------------ */

function useLocale() {
  const pathname = usePathname() ?? '/'
  const router = useRouter()
  const locale: 'en' | 'ar' = pathname.startsWith('/ar') ? 'ar' : 'en'

  function switchLocale(next: 'en' | 'ar') {
    if (next === locale) return
    const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, '') || '/'
    const target = next === 'en' ? stripped : `/ar${stripped === '/' ? '' : stripped}`
    router.push(target || '/')
  }

  return { locale, switchLocale }
}

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, switchLocale } = useLocale()

  return (
    <div role="group" aria-label="Language" className={cn('inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5', compact ? 'text-xs' : 'text-[13px]')}>
      {(['en', 'ar'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            'rounded-full px-2.5 py-1 font-bold uppercase tracking-wide transition-colors',
            locale === code ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800',
            focusRing
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Header                                                              */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey>(null)
  const [activeCategory, setActiveCategory] = useState<ProductCategoryKey>('businessApps')
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const { locale } = useLocale()
  const isRtl = locale === 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (openMenu === 'products') setActiveCategory('businessApps')
  }, [openMenu])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  const isSectionActive = (prefix: string | null) => !!prefix && pathname?.startsWith(prefix)
  const activeAccent: Accent = openMenu ? menuOverviews[openMenu].accent : 'blue'

  return (
    <header
      ref={headerRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300',
        scrolled || openMenu ? 'border-slate-200/60 bg-white/90 shadow-sm backdrop-blur-xl' : 'border-transparent bg-white/80 backdrop-blur-lg',
        mobileOpen && 'border-transparent bg-white'
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* SLIM UTILITY BAR — bigger height */}
      <div className={cn('hidden overflow-hidden border-b border-slate-100 transition-all duration-300 ease-out xl:block', scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100')}>
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-8">
          <p className="text-xs font-medium tracking-wide text-slate-500">🇦🇺 Australia · 🇦🇪 UAE · 🇸🇦 Saudi Arabia — one platform, every region</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className={cn('text-xs font-semibold text-slate-500 transition-colors hover:text-slate-900', focusRing)}>
              Contact Sales
            </Link>
            <Link href="/signin" className={cn('text-xs font-semibold text-slate-500 transition-colors hover:text-slate-900', focusRing)}>
              Sign in
            </Link>
            <LanguageToggle compact />
          </div>
        </div>
      </div>

      {/* MAIN ROW — 72px, bigger and bolder */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className={cn('group flex shrink-0 items-center gap-3', focusRing)} aria-label="Hivenox home">
          <div className="size-10 overflow-hidden rounded-full border-2 border-blue-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image src="/logo.jpeg" alt="Hivenox Logo" width={40} height={40} className="size-full object-cover" priority />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">HIVENOX</span>
        </Link>

        {/* DESKTOP NAV — pill rail, bigger padding */}
        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 p-1.5 shadow-sm backdrop-blur-sm xl:flex">
          <MenuTrigger
            label="Solutions"
            href={menuOverviews.solutions.href}
            active={openMenu === 'solutions'}
            isCurrentSection={isSectionActive(menuOverviews.solutions.prefix)}
            accent={menuOverviews.solutions.accent}
            onHover={() => setOpenMenu('solutions')}
            onToggle={() => setOpenMenu((m) => (m === 'solutions' ? null : 'solutions'))}
          />
          <MenuTrigger
            label="AI Workers"
            href={menuOverviews.aiWorkers.href}
            active={openMenu === 'aiWorkers'}
            isCurrentSection={isSectionActive(menuOverviews.aiWorkers.prefix)}
            accent={menuOverviews.aiWorkers.accent}
            onHover={() => setOpenMenu('aiWorkers')}
            onToggle={() => setOpenMenu((m) => (m === 'aiWorkers' ? null : 'aiWorkers'))}
          />
          <MenuTrigger
            label="Products"
            href={menuOverviews.products.href}
            active={openMenu === 'products'}
            isCurrentSection={isSectionActive(menuOverviews.products.prefix)}
            accent={menuOverviews.products.accent}
            onHover={() => setOpenMenu('products')}
            onToggle={() => setOpenMenu((m) => (m === 'products' ? null : 'products'))}
          />
          <MenuTrigger
            label="Industries"
            href={menuOverviews.industries.href}
            active={openMenu === 'industries'}
            isCurrentSection={isSectionActive(menuOverviews.industries.prefix)}
            accent={menuOverviews.industries.accent}
            onHover={() => setOpenMenu('industries')}
            onToggle={() => setOpenMenu((m) => (m === 'industries' ? null : 'industries'))}
          />
          <Link
            href="/pricing"
            onMouseEnter={() => setOpenMenu(null)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
              pathname === '/pricing' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900',
              focusRing
            )}
          >
            Pricing
          </Link>
          <MenuTrigger
            label="Company"
            href="/about"
            active={openMenu === 'company'}
            isCurrentSection={false}
            accent={menuOverviews.company.accent}
            onHover={() => setOpenMenu('company')}
            onToggle={() => setOpenMenu((m) => (m === 'company' ? null : 'company'))}
          />
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:shadow-blue-600/40"
          >
            Start Free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className={cn('inline-flex size-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 xl:hidden', focusRing)}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Accent top-border — thicker */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r transition-opacity duration-300',
          openMenu ? 'opacity-100' : 'opacity-0',
          activeAccent === 'blue' && 'from-transparent via-blue-500 to-transparent',
          activeAccent === 'violet' && 'from-transparent via-violet-500 to-transparent',
          activeAccent === 'indigo' && 'from-transparent via-indigo-500 to-transparent',
          activeAccent === 'amber' && 'from-transparent via-amber-500 to-transparent',
          activeAccent === 'rose' && 'from-transparent via-rose-500 to-transparent'
        )}
      />

      {/* DESKTOP MEGA MENU PANEL — bigger, roomier, sidebar style */}
      <div
        role="region"
        aria-hidden={!openMenu}
        className={cn(
          'absolute inset-x-0 top-full hidden origin-top overflow-hidden border-b border-slate-200 bg-white shadow-2xl shadow-slate-900/8 transition-all duration-300 ease-out xl:block',
          openMenu ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0'
        )}
      >
        <div className="relative mx-auto max-w-7xl px-8 py-10">
          {/* Ambient glow — bigger and softer */}
          <div className={cn('pointer-events-none absolute -top-28 right-16 size-80 rounded-full blur-3xl', accentStyles[activeAccent].ambientGlow)} aria-hidden="true" />

          {openMenu === 'solutions' && (
            <RailMenu
              items={solutionsItems}
              accent="blue"
              overviewHref={menuOverviews.solutions.href}
              overviewLabel={menuOverviews.solutions.label}
              sidebarLabel={menuOverviews.solutions.sidebarLabel}
            />
          )}
          {openMenu === 'aiWorkers' && (
            <RailMenu
              items={aiWorkersItems}
              accent="violet"
              overviewHref={menuOverviews.aiWorkers.href}
              overviewLabel={menuOverviews.aiWorkers.label}
              sidebarLabel={menuOverviews.aiWorkers.sidebarLabel}
            />
          )}
          {openMenu === 'industries' && (
            <RailMenu
              items={industriesItems}
              accent="amber"
              overviewHref={menuOverviews.industries.href}
              overviewLabel={menuOverviews.industries.label}
              sidebarLabel={menuOverviews.industries.sidebarLabel}
            />
          )}
          {openMenu === 'company' && (
            <RailMenu
              items={companyItems}
              accent="rose"
              overviewHref="/about"
              overviewLabel="About Hivenox"
              sidebarLabel={menuOverviews.company.sidebarLabel}
            />
          )}

          {/* PRODUCTS — two-level with category sidebar */}
          {openMenu === 'products' && (
            <div className="relative grid h-full grid-cols-[220px_1fr] gap-10">
              <div className="flex flex-col gap-1 border-r border-slate-100 pr-6">
                <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Category</p>
                {productCategories.map((cat) => {
                  const Icon = cat.icon
                  const isActive = activeCategory === cat.key
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onMouseEnter={() => setActiveCategory(cat.key)}
                      onFocus={() => setActiveCategory(cat.key)}
                      onClick={() => setActiveCategory(cat.key)}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-bold transition-colors',
                        isActive ? accentStyles.indigo.railActiveBg : 'text-slate-600 hover:bg-slate-50',
                        focusRing
                      )}
                    >
                      <Icon className="size-4 shrink-0" aria-hidden="true" />
                      {cat.label}
                    </button>
                  )
                })}
                <Link href={menuOverviews.products.href} className={cn('mt-3 inline-flex items-center gap-1 px-3 text-xs font-bold text-indigo-600 hover:underline', focusRing)}>
                  View all products <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="min-h-0">
                {productCategories.map(
                  (cat) =>
                    activeCategory === cat.key && (
                      <RailMenu
                        key={cat.key}
                        items={cat.items}
                        accent="indigo"
                        overviewHref={menuOverviews.products.href}
                        overviewLabel="View all products"
                        sidebarLabel={`Browse ${cat.label}`}
                        compact
                      />
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white transition-transform duration-300 ease-in-out xl:hidden',
          mobileOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        )}
      >
        <div className="flex min-h-full flex-col px-5 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Language</span>
            <LanguageToggle />
          </div>

          <div className="flex-1 space-y-1">
            <MobileAccordion title="Solutions" overviewHref={menuOverviews.solutions.href} items={solutionsItems} accent="blue" />
            <MobileAccordion title="AI Workers" overviewHref={menuOverviews.aiWorkers.href} items={aiWorkersItems} accent="violet" />
            <MobileAccordion
              title="Products"
              overviewHref={menuOverviews.products.href}
              items={[...businessAppsItems, ...aiAgentsItems, ...erpModulesItems]}
              accent="indigo"
            />
            <MobileAccordion title="Industries" overviewHref={menuOverviews.industries.href} items={industriesItems} accent="amber" />

            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block border-b border-slate-100 px-3 py-3.5 text-base font-bold text-slate-900">
              Pricing
            </Link>

            <MobileAccordion title="Company & Resources" items={companyItems} accent="rose" />
          </div>

          <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
            <Link href="/signin" onClick={() => setMobileOpen(false)} className="flex w-full items-center justify-center rounded-xl bg-slate-100 px-4 py-3.5 text-base font-bold text-slate-900">
              Sign in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25"
            >
              Start Free
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  RailMenu — ENHANCED with bigger sidebar and rich preview card       */
/* ------------------------------------------------------------------ */

function RailMenu({
  items,
  accent,
  overviewHref,
  overviewLabel,
  sidebarLabel,
  compact = false,
}: {
  items: NavItem[]
  accent: Accent
  overviewHref: string
  overviewLabel: string
  sidebarLabel: string
  compact?: boolean
}) {
  const [active, setActive] = useState(0)
  const styles = accentStyles[accent]
  const current = items[Math.min(active, items.length - 1)]
  const CurrentIcon = current.icon

  return (
    <div className={cn('grid gap-10', compact ? 'grid-cols-[1.1fr_1fr]' : 'grid-cols-[300px_1fr]')}>
      {/* LEFT SIDEBAR — bigger, with icon chips */}
      <div className={cn('flex flex-col gap-1', !compact && 'border-r border-slate-100 pr-6')}>
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">{sidebarLabel}</p>
        
        {items.map((item, i) => {
          const Icon = item.icon
          const isActive = i === active
          return (
            <Link
              key={item.title}
              href={item.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-bold transition-all duration-200',
                isActive 
                  ? cn(styles.railActiveBg, 'shadow-sm') 
                  : 'text-slate-600 hover:bg-slate-50/80',
                focusRing
              )}
            >
              <div className={cn(
                'flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-200',
                isActive ? cn(styles.iconBg, 'text-white shadow-md') : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
              )}>
                <Icon className="size-4" aria-hidden="true" />
              </div>
              <span className="truncate">{item.title}</span>
              {item.badge && (
                <span className={cn('ml-auto shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide', styles.chipBg)}>
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
        
        <Link href={overviewHref} className={cn('mt-3 inline-flex items-center gap-1.5 px-3 text-xs font-bold hover:underline', styles.text, focusRing)}>
          {overviewLabel} <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* RIGHT PREVIEW PANEL — rich gradient card with dual CTAs */}
      <div className="flex flex-col justify-center">
        <div className={cn(
          'relative overflow-hidden rounded-2xl border p-8 transition-all duration-300',
          'bg-gradient-to-br',
          styles.previewGradient,
          styles.previewBorder
        )}>
          {/* Decorative ambient blob */}
          <div className={cn('pointer-events-none absolute -top-16 -right-16 size-48 rounded-full blur-3xl', styles.ambientGlow)} aria-hidden="true" />
          
          <div className="relative z-10">
            {/* Large icon with gradient background */}
            <div className={cn(
              'mb-6 flex size-14 items-center justify-center rounded-2xl shadow-lg',
              styles.gradientFrom,
              styles.gradientTo,
              'bg-gradient-to-br'
            )}>
              <CurrentIcon className="size-7 text-white" aria-hidden="true" />
            </div>
            
            {/* Title with badge */}
            <div className="mb-3 flex items-center gap-3">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">{current.title}</h3>
              {current.badge && (
                <span className={cn('rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider', styles.chipBg)}>
                  {current.badge}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="mb-7 max-w-md text-[15px] leading-relaxed text-slate-600">{current.desc}</p>
            
            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={current.href}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 shadow-lg',
                  styles.gradientFrom,
                  styles.gradientTo,
                  'bg-gradient-to-r',
                  styles.ctaShadow
                )}
              >
                Explore {current.title}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              
              <Link
                href={current.href}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl border bg-white/80 px-5 py-2.5 text-sm font-bold backdrop-blur-sm transition-all hover:bg-white',
                  styles.previewBorder,
                  styles.text
                )}
              >
                <Play className="size-4" aria-hidden="true" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Nav-row sub-components                                              */
/* ------------------------------------------------------------------ */

function MenuTrigger({
  label,
  href,
  active,
  isCurrentSection,
  accent,
  onHover,
  onToggle,
}: {
  label: string
  href: string
  active: boolean
  isCurrentSection: boolean
  accent: Accent
  onHover: () => void
  onToggle: () => void
}) {
  const styles = accentStyles[accent]
  return (
    <div
      onMouseEnter={onHover}
      className={cn(
        'inline-flex items-center rounded-full py-2 pl-4 pr-2 text-sm font-semibold transition-all duration-200',
        active || isCurrentSection ? styles.chipBg : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
      )}
    >
      <Link href={href} className={cn('pr-1.5', focusRing)}>
        {label}
      </Link>
      <button type="button" onClick={onToggle} aria-label={`Toggle ${label} menu`} aria-expanded={active} className={cn('p-0.5', focusRing)}>
        <ChevronDown className={cn('size-4 transition-transform duration-200', active && cn('rotate-180', styles.text))} aria-hidden="true" />
      </button>
    </div>
  )
}

function MobileAccordion({ title, items, overviewHref, accent }: { title: string; items: NavItem[]; overviewHref?: string; accent: Accent }) {
  const [open, setOpen] = useState(false)
  const styles = accentStyles[accent]
  return (
    <div className="border-b border-slate-100">
      <div className="flex items-center justify-between">
        {overviewHref ? (
          <Link href={overviewHref} className="flex-1 py-3.5 pl-3 text-base font-bold text-slate-900">
            {title}
          </Link>
        ) : (
          <span className="flex-1 py-3.5 pl-3 text-base font-bold text-slate-900">{title}</span>
        )}
        <button type="button" onClick={() => setOpen((v) => !v)} aria-label={`Toggle ${title} submenu`} aria-expanded={open} className={cn('flex items-center justify-center px-3 py-3.5', focusRing)}>
          <ChevronDown className={cn('size-5 text-slate-400 transition-transform duration-200', open && 'rotate-180')} aria-hidden="true" />
        </button>
      </div>
      <div className={cn('grid overflow-hidden transition-all duration-300 ease-in-out', open ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0')}>
        <div className="flex flex-col gap-1 overflow-hidden px-3">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[15px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <span className={cn('flex size-7 shrink-0 items-center justify-center rounded-md', styles.chipBg)}>
                <item.icon className="size-3.5" aria-hidden="true" />
              </span>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}