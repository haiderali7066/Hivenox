'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Bot,
  BarChart3,
  Code2,
  Zap,
  Box,
  Users,
  Briefcase,
  PieChart,
  Headset,
  Mic,
  LayoutDashboard,
  LineChart,
  Newspaper,
  Info,
  Phone,
  Sparkles,
  Video,
  Search,
  Rocket,
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  GraduationCap,
  Factory,
  HeartPulse,
  Puzzle,
  FileText,
  Layers,
} from 'lucide-react'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ------------------------------------------------------------------ */
/*  Accent system                                                       */
/*  Blue stays the brand color (logo, active states, primary CTA).      */
/*  Each mega menu gets its own accent so the header doesn't read as    */
/*  one flat wall of blue — Tailwind needs literal class names, so      */
/*  everything is pre-declared here rather than built dynamically.      */
/* ------------------------------------------------------------------ */

type Accent = 'blue' | 'violet' | 'indigo' | 'teal' | 'amber' | 'rose' | 'slate'

const accentStyles: Record<
  Accent,
  {
    text: string
    chipBg: string
    chipHoverBg: string
    titleHover: string
    panelBg: string
    panelBorder: string
    glow: string
    ring: string
  }
> = {
  blue: {
    text: 'text-blue-600',
    chipBg: 'bg-blue-100/60 text-blue-600',
    chipHoverBg: 'group-hover:bg-blue-600 group-hover:text-white',
    titleHover: 'group-hover:text-blue-600',
    panelBg: 'bg-blue-50/70',
    panelBorder: 'border-blue-100',
    glow: 'bg-blue-400/25',
    ring: 'ring-blue-200/60',
  },
  violet: {
    text: 'text-violet-600',
    chipBg: 'bg-violet-100/60 text-violet-600',
    chipHoverBg: 'group-hover:bg-violet-600 group-hover:text-white',
    titleHover: 'group-hover:text-violet-600',
    panelBg: 'bg-violet-50/70',
    panelBorder: 'border-violet-100',
    glow: 'bg-violet-400/25',
    ring: 'ring-violet-200/60',
  },
  indigo: {
    text: 'text-indigo-600',
    chipBg: 'bg-indigo-100/60 text-indigo-600',
    chipHoverBg: 'group-hover:bg-indigo-600 group-hover:text-white',
    titleHover: 'group-hover:text-indigo-600',
    panelBg: 'bg-indigo-50/70',
    panelBorder: 'border-indigo-100',
    glow: 'bg-indigo-400/25',
    ring: 'ring-indigo-200/60',
  },
  teal: {
    text: 'text-teal-600',
    chipBg: 'bg-teal-100/60 text-teal-600',
    chipHoverBg: 'group-hover:bg-teal-600 group-hover:text-white',
    titleHover: 'group-hover:text-teal-600',
    panelBg: 'bg-teal-50/70',
    panelBorder: 'border-teal-100',
    glow: 'bg-teal-400/25',
    ring: 'ring-teal-200/60',
  },
  amber: {
    text: 'text-amber-600',
    chipBg: 'bg-amber-100/60 text-amber-600',
    chipHoverBg: 'group-hover:bg-amber-500 group-hover:text-white',
    titleHover: 'group-hover:text-amber-600',
    panelBg: 'bg-amber-50/70',
    panelBorder: 'border-amber-100',
    glow: 'bg-amber-400/25',
    ring: 'ring-amber-200/60',
  },
  rose: {
    text: 'text-rose-600',
    chipBg: 'bg-rose-100/60 text-rose-600',
    chipHoverBg: 'group-hover:bg-rose-600 group-hover:text-white',
    titleHover: 'group-hover:text-rose-600',
    panelBg: 'bg-rose-50/70',
    panelBorder: 'border-rose-100',
    glow: 'bg-rose-400/25',
    ring: 'ring-rose-200/60',
  },
  slate: {
    text: 'text-slate-500',
    chipBg: 'bg-slate-100 text-slate-500',
    chipHoverBg: 'group-hover:bg-slate-800 group-hover:text-white',
    titleHover: 'group-hover:text-slate-900',
    panelBg: 'bg-slate-50',
    panelBorder: 'border-slate-100',
    glow: 'bg-slate-300/20',
    ring: 'ring-slate-200/60',
  },
}

/* ------------------------------------------------------------------ */
/*  Navigation data                                                     */
/*  Legal pages (Privacy/Terms/Cookie/Refund) live in the footer only.  */
/* ------------------------------------------------------------------ */

const navigationData = {
  solutions: [
    { title: 'Results as a Service', href: '/solutions/results-as-a-service', icon: Rocket, desc: 'Guaranteed outcomes powered by our tech.' },
    { title: 'Business Intelligence', href: '/solutions/business-intelligence', icon: BarChart3, desc: 'Data-driven insights for decision makers.' },
    { title: 'Intelligent Automation', href: '/solutions/intelligent-automation', icon: Zap, desc: 'Streamline repetitive workflows seamlessly.' },
    { title: 'Custom Software Development', href: '/solutions/custom-software-development', icon: Code2, desc: 'Tailored enterprise development.' },
  ],
  aiWorkers: [
    { title: 'Social Worker', href: '/ai-workers/social-worker', icon: Sparkles },
    { title: 'Content Worker', href: '/ai-workers/content-worker', icon: FileText },
    { title: 'Growth Worker', href: '/ai-workers/growth-worker', icon: LineChart },
    { title: 'Video Worker', href: '/ai-workers/video-worker', icon: Video },
    { title: 'SEO Worker', href: '/ai-workers/seo-worker', icon: Search },
    { title: 'Advanced Analytics Worker', href: '/ai-workers/advanced-analytics-worker', icon: BarChart3 },
    { title: 'Enterprise Growth OS', href: '/ai-workers/enterprise-growth-os', icon: Layers, badge: 'Popular' },
  ],
  businessApps: [
    { title: 'Hivenox ERP', href: '/products/hivenox-erp', icon: LayoutDashboard },
    { title: 'Hivenox CRM', href: '/products/hivenox-crm', icon: Users },
    { title: 'Hivenox HRMS', href: '/products/hivenox-hrms', icon: Briefcase },
    { title: 'Hivenox Books', href: '/products/hivenox-books', icon: PieChart },
    { title: 'Hivenox SalesFlow', href: '/products/hivenox-salesflow', icon: LineChart },
    { title: 'Hivenox Desk', href: '/products/hivenox-desk', icon: Headset },
    { title: 'Hivenox Ops', href: '/products/hivenox-ops', icon: Box },
  ],
  aiAgents: [
    { title: 'AI Sales Agent', href: '/products/ai-sales-agent', icon: Bot },
    { title: 'AI Support Agent', href: '/products/ai-support-agent', icon: Headset },
    { title: 'AI Recruiter', href: '/products/ai-recruiter', icon: Briefcase },
    { title: 'Voice AI', href: '/products/voice-ai', icon: Mic },
    { title: 'Insights AI', href: '/products/insights-ai', icon: BarChart3 },
  ],
  erpModules: [
    { title: 'CRM', href: '/erp-solutions/crm', icon: Users },
    { title: 'HRMS', href: '/erp-solutions/hrms', icon: Briefcase },
    { title: 'Inventory Management', href: '/erp-solutions/inventory-management', icon: Box },
    { title: 'Accounting & Finance', href: '/erp-solutions/accounting-finance', icon: PieChart },
    { title: 'Operations Management', href: '/erp-solutions/operations-management', icon: LayoutDashboard },
    { title: 'Analytics & Reporting', href: '/erp-solutions/analytics-reporting', icon: BarChart3 },
  ],
  industries: [
    { title: 'Healthcare & Clinics', href: '/industries/healthcare-clinics', icon: HeartPulse },
    { title: 'Salons & Wellness', href: '/industries/salons-wellness', icon: Sparkles },
    { title: 'Real Estate', href: '/industries/real-estate', icon: Building2 },
    { title: 'Retail & E-commerce', href: '/industries/retail-ecommerce', icon: ShoppingBag },
    { title: 'Restaurants & Cafés', href: '/industries/restaurants-cafes', icon: UtensilsCrossed },
    { title: 'Agencies', href: '/industries/agencies', icon: Briefcase },
    { title: 'Professional Services', href: '/industries/professional-services', icon: Users },
    { title: 'Education', href: '/industries/education', icon: GraduationCap },
    { title: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
  ],
  company: [
    { title: 'About Us', href: '/about', icon: Info },
    { title: 'Case Studies', href: '/case-studies', icon: FileText },
    { title: 'Insights (Blog)', href: '/blogs', icon: Newspaper },
    { title: 'Integrations', href: '/integrations', icon: Puzzle },
    { title: 'Contact', href: '/contact', icon: Phone },
  ],
}

// Overview ("view all") destinations, section prefix (for active-state matching), and accent color.
const menuOverviews = {
  solutions: { href: '/solutions', label: 'View all solutions', prefix: '/solutions', accent: 'blue' as Accent },
  aiWorkers: { href: '/ai-workers', label: 'View all AI Workers', prefix: '/ai-workers', accent: 'violet' as Accent },
  products: { href: '/products', label: 'View all products', prefix: '/products', accent: 'indigo' as Accent },
  industries: { href: '/industries', label: 'View all industries', prefix: '/industries', accent: 'amber' as Accent },
  company: { href: '/about', label: null, prefix: null, accent: 'rose' as Accent },
} as const

type MenuKey = 'solutions' | 'aiWorkers' | 'products' | 'industries' | 'company' | null

/* ------------------------------------------------------------------ */
/*  Header                                                              */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  const isSectionActive = (prefix: string | null) => !!prefix && pathname?.startsWith(prefix)
  const activeAccent: Accent = openMenu ? (menuOverviews as any)[openMenu]?.accent ?? 'blue' : 'blue'

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 inset-x-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-lg'
          : 'border-transparent bg-transparent',
        mobileOpen && 'bg-white'
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO — also serves as the Home link */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Hivenox home">
          <div className="size-11 overflow-hidden rounded-full border-2 border-blue-100 shadow-md transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="Hivenox Logo"
              width={44}
              height={44}
              className="size-full object-cover"
              priority
            />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">HIVENOX</span>
        </Link>

        {/* DESKTOP NAVIGATION — a soft pill rail instead of loose links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-slate-200/70 bg-white/60 p-1 shadow-sm backdrop-blur-sm xl:flex">
          <MenuTrigger
            label="Solutions"
            href={menuOverviews.solutions.href}
            active={openMenu === 'solutions'}
            isCurrentSection={isSectionActive(menuOverviews.solutions.prefix)}
            accent={menuOverviews.solutions.accent}
            onEnter={() => setOpenMenu('solutions')}
          />
          <MenuTrigger
            label="AI Workers"
            href={menuOverviews.aiWorkers.href}
            active={openMenu === 'aiWorkers'}
            isCurrentSection={isSectionActive(menuOverviews.aiWorkers.prefix)}
            accent={menuOverviews.aiWorkers.accent}
            onEnter={() => setOpenMenu('aiWorkers')}
          />
          <MenuTrigger
            label="Products"
            href={menuOverviews.products.href}
            active={openMenu === 'products'}
            isCurrentSection={isSectionActive(menuOverviews.products.prefix)}
            accent={menuOverviews.products.accent}
            onEnter={() => setOpenMenu('products')}
          />
          <MenuTrigger
            label="Industries"
            href={menuOverviews.industries.href}
            active={openMenu === 'industries'}
            isCurrentSection={isSectionActive(menuOverviews.industries.prefix)}
            accent={menuOverviews.industries.accent}
            onEnter={() => setOpenMenu('industries')}
          />
          <Link
            href="/pricing"
            onMouseEnter={() => setOpenMenu(null)}
            className={cn(
              'rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200',
              pathname === '/pricing'
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
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
            onEnter={() => setOpenMenu('company')}
          />
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-bold text-slate-600 transition-colors hover:text-slate-900"
          >
            Contact
          </Link>
          <Link
            href="/book-demo"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:shadow-blue-600/40"
          >
            Book a Demo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Accent-colored top border that shifts with whichever mega menu is open */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r transition-opacity duration-300',
          openMenu ? 'opacity-100' : 'opacity-0',
          activeAccent === 'blue' && 'from-transparent via-blue-500 to-transparent',
          activeAccent === 'violet' && 'from-transparent via-violet-500 to-transparent',
          activeAccent === 'indigo' && 'from-transparent via-indigo-500 to-transparent',
          activeAccent === 'amber' && 'from-transparent via-amber-500 to-transparent',
          activeAccent === 'rose' && 'from-transparent via-rose-500 to-transparent'
        )}
      />

      {/* DESKTOP MEGA MENUS */}
      <div
        className={cn(
          'absolute inset-x-0 top-[80px] hidden origin-top overflow-hidden border-b border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition-all duration-300 ease-in-out xl:block',
          openMenu ? 'max-h-[640px] opacity-100' : 'max-h-0 border-transparent opacity-0 pointer-events-none'
        )}
      >
        <div className="relative mx-auto max-w-7xl px-8 py-10">
          {/* Ambient accent glow, unique per section */}
          <div
            className={cn(
              'pointer-events-none absolute -right-10 -top-24 size-72 rounded-full blur-3xl',
              accentStyles[activeAccent].glow
            )}
            aria-hidden
          />

          {openMenu === 'solutions' && (
            <div className="relative grid grid-cols-3 gap-8">
              <OverviewPanel
                eyebrow="Our Solutions"
                description="Explore how Hivenox solves complex operational challenges with intelligent automation."
                href={menuOverviews.solutions.href}
                cta="View all solutions"
                icon={Sparkles}
                accent="blue"
              />
              <div className="col-span-2">
                <ColumnGrid items={navigationData.solutions} columns={2} detailed accent="blue" />
              </div>
            </div>
          )}

          {openMenu === 'aiWorkers' && (
            <div className="relative grid grid-cols-3 gap-8">
              <OverviewPanel
                eyebrow="AI Workers"
                description="Bolt-on AI specialists — each one built for a single job, done exceptionally well."
                href={menuOverviews.aiWorkers.href}
                cta="View all AI Workers"
                icon={Bot}
                accent="violet"
              />
              <div className="col-span-2">
                <ColumnGrid items={navigationData.aiWorkers} columns={2} accent="violet" />
              </div>
            </div>
          )}

          {openMenu === 'products' && (
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600">Full Product Suite</h3>
                <Link
                  href={menuOverviews.products.href}
                  className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:underline"
                >
                  View all products <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-indigo-500">Business Apps</h4>
                  <ColumnGrid items={navigationData.businessApps} columns={1} accent="indigo" />
                </div>
                <div className="border-l border-slate-100 pl-10">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-500">AI Workers &amp; Agents</h4>
                  <ColumnGrid items={navigationData.aiAgents} columns={1} accent="teal" />
                </div>
                <div className="border-l border-slate-100 pl-10">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-amber-500">ERP Modules</h4>
                  <ColumnGrid items={navigationData.erpModules} columns={1} accent="amber" />
                </div>
              </div>
            </div>
          )}

          {openMenu === 'industries' && (
            <div className="relative grid grid-cols-3 gap-8">
              <OverviewPanel
                eyebrow="Built for your industry"
                description="Purpose-fit workflows and AI Workers tuned for how your industry actually operates."
                href={menuOverviews.industries.href}
                cta="View all industries"
                icon={Building2}
                accent="amber"
              />
              <div className="col-span-2">
                <ColumnGrid items={navigationData.industries} columns={3} accent="amber" />
              </div>
            </div>
          )}

          {openMenu === 'company' && (
            <div className="relative">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-rose-500">Company &amp; Resources</h3>
              <ColumnGrid items={navigationData.company} columns={3} accent="rose" />
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={cn(
          'fixed inset-0 top-[80px] z-40 overflow-y-auto bg-white transition-transform duration-300 ease-in-out xl:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col px-6 py-8">
          <div className="flex-1 space-y-1">
            <MobileAccordion title="Solutions" overviewHref={menuOverviews.solutions.href} items={navigationData.solutions} accent="blue" />
            <MobileAccordion title="AI Workers" overviewHref={menuOverviews.aiWorkers.href} items={navigationData.aiWorkers} accent="violet" />
            <MobileAccordion
              title="Products"
              overviewHref={menuOverviews.products.href}
              items={[...navigationData.businessApps, ...navigationData.aiAgents]}
              accent="indigo"
            />
            <MobileAccordion title="ERP Modules" items={navigationData.erpModules} accent="amber" />
            <MobileAccordion title="Industries" overviewHref={menuOverviews.industries.href} items={navigationData.industries} accent="amber" />

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-slate-100 px-4 py-3.5 text-lg font-bold text-slate-900"
            >
              Pricing
            </Link>

            <MobileAccordion title="Company &amp; Resources" items={navigationData.company} accent="rose" />
          </div>

          <div className="mt-8 space-y-4 border-t border-slate-100 pt-8">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-slate-100 px-4 py-4 text-base font-bold text-slate-900"
            >
              Contact us
            </Link>
            <Link
              href="/book-demo"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25"
            >
              Book a Demo
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function MenuTrigger({
  label,
  href,
  active,
  isCurrentSection,
  accent,
  onEnter,
}: {
  label: string
  href: string
  active: boolean
  isCurrentSection: boolean
  accent: Accent
  onEnter: () => void
}) {
  const styles = accentStyles[accent]
  return (
    <div
      onMouseEnter={onEnter}
      className={cn(
        'inline-flex items-center rounded-full py-2 pl-3.5 pr-1.5 text-sm font-semibold transition-all duration-200',
        active || isCurrentSection ? cn(styles.chipBg) : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
      )}
    >
      <Link href={href} className="pr-1">
        {label}
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          onEnter()
        }}
        aria-label={`Toggle ${label} menu`}
        aria-expanded={active}
        className="p-0.5"
      >
        <ChevronDown className={cn('size-4 transition-transform duration-200', active && cn('rotate-180', styles.text))} />
      </button>
    </div>
  )
}

function OverviewPanel({
  eyebrow,
  description,
  href,
  cta,
  icon: Icon,
  accent,
}: {
  eyebrow: string
  description: string
  href: string
  cta: string
  icon: React.ElementType
  accent: Accent
}) {
  const styles = accentStyles[accent]
  return (
    <div className={cn('col-span-1 flex flex-col rounded-2xl border p-6', styles.panelBg, styles.panelBorder)}>
      <span className={cn('mb-4 flex size-10 items-center justify-center rounded-lg', styles.chipBg)}>
        <Icon className="size-5" />
      </span>
      <h3 className={cn('mb-2 text-sm font-bold uppercase tracking-wider', styles.text)}>{eyebrow}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-600">{description}</p>
      <Link href={href} className={cn('mt-auto inline-flex items-center gap-1 text-sm font-bold hover:underline', styles.text)}>
        {cta} <ArrowRight className="size-4" />
      </Link>
    </div>
  )
}

function ColumnGrid({
  items,
  columns,
  detailed = false,
  accent = 'slate',
}: {
  items: any[]
  columns: number
  detailed?: boolean
  accent?: Accent
}) {
  const styles = accentStyles[accent]
  return (
    <div
      className={cn(
        'grid gap-x-4 gap-y-1',
        columns === 1 && 'grid-cols-1',
        columns === 2 && 'grid-cols-2',
        columns === 3 && 'grid-cols-3',
        columns === 4 && 'grid-cols-4'
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-slate-50"
          >
            {Icon && (
              <span
                className={cn(
                  'flex shrink-0 items-center justify-center rounded-lg transition-colors',
                  detailed ? 'size-10' : 'size-8',
                  styles.chipBg,
                  styles.chipHoverBg
                )}
              >
                <Icon className={detailed ? 'size-5' : 'size-4'} />
              </span>
            )}
            <div className="min-w-0">
              <span
                className={cn(
                  'flex items-center gap-2 font-bold text-slate-900 transition-colors',
                  detailed ? 'text-base' : 'text-sm',
                  styles.titleHover
                )}
              >
                {item.title}
                {item.badge && (
                  <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide', styles.chipBg)}>
                    {item.badge}
                  </span>
                )}
              </span>
              {detailed && item.desc && (
                <span className="mt-1 block text-sm leading-relaxed text-slate-500">{item.desc}</span>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

function MobileAccordion({
  title,
  items,
  overviewHref,
  accent = 'slate',
}: {
  title: string
  items: any[]
  overviewHref?: string
  accent?: Accent
}) {
  const [open, setOpen] = useState(false)
  const styles = accentStyles[accent]
  return (
    <div className="border-b border-slate-100">
      <div className="flex items-center justify-between">
        {overviewHref ? (
          <Link href={overviewHref} className="flex-1 py-4 pl-4 text-lg font-bold text-slate-900">
            {title}
          </Link>
        ) : (
          <span className="flex-1 py-4 pl-4 text-lg font-bold text-slate-900">{title}</span>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={`Toggle ${title} submenu`}
          aria-expanded={open}
          className="flex items-center justify-center px-4 py-4"
        >
          <ChevronDown className={cn('size-5 text-slate-400 transition-transform duration-200', open && 'rotate-180')} />
        </button>
      </div>
      <div
        className={cn(
          'grid overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="flex flex-col gap-1 overflow-hidden px-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              {item.icon && (
                <span className={cn('flex size-7 shrink-0 items-center justify-center rounded-md', styles.chipBg)}>
                  <item.icon className="size-3.5" />
                </span>
              )}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}