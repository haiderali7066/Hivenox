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
  HelpCircle,
  Info,
  Phone,
  Shield,
  Sparkles,
  Boxes,
} from 'lucide-react'

// Utility for merging tailwind classes (assuming you have this in @/lib/utils)
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- DATA BASED ON YOUR SITEMAP ---
const navigationData = {
  solutions: [
    { title: 'AI Workers', href: '/solutions/ai-workers', icon: Bot, desc: 'Autonomous AI agents for your workforce.' },
    { title: 'Intelligent Automation', href: '/solutions/intelligent-automation', icon: Zap, desc: 'Streamline repetitive workflows seamlessly.' },
    { title: 'Business Intelligence', href: '/solutions/business-intelligence', icon: BarChart3, desc: 'Data-driven insights for decision makers.' },
    { title: 'Results as a Service', href: '/solutions/results-as-a-service', icon: LineChart, desc: 'Guaranteed outcomes powered by our tech.' },
    { title: 'Custom Software', href: '/solutions/custom-software-development', icon: Code2, desc: 'Tailored enterprise development.' },
  ],
  erp: [
    { title: 'CRM', href: '/erp-solutions/crm', icon: Users },
    { title: 'HRMS', href: '/erp-solutions/hrms', icon: Briefcase },
    { title: 'Inventory Management', href: '/erp-solutions/inventory-management', icon: Box },
    { title: 'Accounting & Finance', href: '/erp-solutions/accounting-finance', icon: PieChart },
    { title: 'Operations Management', href: '/erp-solutions/operations-management', icon: LayoutDashboard },
    { title: 'Analytics & Reporting', href: '/erp-solutions/analytics-reporting', icon: BarChart3 },
  ],
  products: [
    { title: 'Hivenox ERP', href: '/products/hivenox-erp', icon: LayoutDashboard },
    { title: 'Hivenox CRM', href: '/products/hivenox-crm', icon: Users },
    { title: 'Hivenox HRMS', href: '/products/hivenox-hrms', icon: Briefcase },
    { title: 'Hivenox Books', href: '/products/hivenox-books', icon: PieChart },
    { title: 'Hivenox Salesflow', href: '/products/hivenox-salesflow', icon: LineChart },
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
  company: [
    { title: 'About Us', href: '/about', icon: Info },
    { title: 'Contact', href: '/contact', icon: Phone },
    { title: 'Careers', href: '/careers', icon: Briefcase },
    { title: 'Blog', href: '/blogs', icon: Newspaper },
    { title: 'FAQs', href: '/faqs', icon: HelpCircle },
    { title: 'Privacy Policy', href: '/company/privacy-policy', icon: Shield },
  ],
}

// Overview ("view all") destinations for each mega-menu, plus the section prefix
// used to decide whether the trigger should render as "active" for the current route.
const menuOverviews = {
  solutions: { href: '/solutions', label: 'View all solutions', prefix: '/solutions' },
  erp: { href: '/erp-solutions', label: 'View all ERP modules', prefix: '/erp-solutions' },
  products: { href: '/products', label: 'View all products', prefix: '/products' },
  company: { href: '/about', label: null, prefix: null },
} as const

type MenuKey = 'solutions' | 'erp' | 'products' | 'company' | null

const simpleLinks = [
  { title: 'Industries', href: '/industries' },
  { title: 'Pricing', href: '/pricing' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  // Close the open mega menu on Escape, and on click outside the header
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

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 border-b',
        scrolled
          ? 'border-slate-200/60 bg-white/80 backdrop-blur-lg shadow-sm'
          : 'border-transparent bg-transparent',
        mobileOpen && 'bg-white' // Solid background when mobile menu is open
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Hivenox home">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-100 shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.jpeg"
              alt="Hivenox Logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">HIVENOX</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
          <MenuTrigger
            label="Solutions"
            href={menuOverviews.solutions.href}
            active={openMenu === 'solutions'}
            isCurrentSection={isSectionActive(menuOverviews.solutions.prefix)}
            onEnter={() => setOpenMenu('solutions')}
          />
          <MenuTrigger
            label="ERP Modules"
            href={menuOverviews.erp.href}
            active={openMenu === 'erp'}
            isCurrentSection={isSectionActive(menuOverviews.erp.prefix)}
            onEnter={() => setOpenMenu('erp')}
          />
          <MenuTrigger
            label="Products & AI"
            href={menuOverviews.products.href}
            active={openMenu === 'products'}
            isCurrentSection={isSectionActive(menuOverviews.products.prefix)}
            onEnter={() => setOpenMenu('products')}
          />
          {simpleLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={() => setOpenMenu(null)}
              className={cn(
                'rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-200',
                pathname === l.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              )}
            >
              {l.title}
            </Link>
          ))}
          <MenuTrigger
            label="Company"
            href="/about"
            active={openMenu === 'company'}
            isCurrentSection={false}
            onEnter={() => setOpenMenu('company')}
          />
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/book-demo"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* DESKTOP MEGA MENUS (Animated Dropdowns) */}
      <div
        className={cn(
          'absolute inset-x-0 top-[80px] bg-white border-b border-slate-200 shadow-xl shadow-slate-900/5 transition-all duration-300 ease-in-out hidden lg:block overflow-hidden origin-top',
          openMenu ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0 border-transparent pointer-events-none'
        )}
      >
        <div className="mx-auto max-w-7xl px-8 py-10">
          {openMenu === 'solutions' && (
            <div className="grid grid-cols-3 gap-8">
              <OverviewPanel
                eyebrow="Our Solutions"
                description="Explore how Hivenox solves complex operational challenges with intelligent automation."
                href={menuOverviews.solutions.href}
                cta="View all solutions"
                icon={Sparkles}
              />
              <div className="col-span-2">
                <ColumnGrid items={navigationData.solutions} columns={2} detailed />
              </div>
            </div>
          )}

          {openMenu === 'erp' && (
            <div className="grid grid-cols-3 gap-8">
              <OverviewPanel
                eyebrow="ERP Modules"
                description="One connected platform for every core business operation, from finance to fulfillment."
                href={menuOverviews.erp.href}
                cta="View all ERP modules"
                icon={Boxes}
              />
              <div className="col-span-2">
                <ColumnGrid items={navigationData.erp} columns={2} />
              </div>
            </div>
          )}

          {openMenu === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Software Suite</h3>
                <Link
                  href={menuOverviews.products.href}
                  className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  View all products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <ColumnGrid items={navigationData.products} columns={2} />
                </div>
                <div className="pl-12 border-l border-slate-100">
                  <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-6">AI Workers & Agents</h3>
                  <ColumnGrid items={navigationData.aiAgents} columns={2} />
                </div>
              </div>
            </div>
          )}

          {openMenu === 'company' && (
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Resources & Company</h3>
              <ColumnGrid items={navigationData.company} columns={3} />
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={cn(
          'fixed inset-0 top-[80px] bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex-1 space-y-2">
            <MobileAccordion title="Solutions" overviewHref={menuOverviews.solutions.href} items={navigationData.solutions} />
            <MobileAccordion title="ERP Modules" overviewHref={menuOverviews.erp.href} items={navigationData.erp} />
            <MobileAccordion
              title="Products & AI"
              overviewHref={menuOverviews.products.href}
              items={[...navigationData.products, ...navigationData.aiAgents]}
            />

            {simpleLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3.5 text-lg font-bold text-slate-900 border-b border-slate-100"
              >
                {l.title}
              </Link>
            ))}

            <MobileAccordion title="Company & Resources" items={navigationData.company} />
          </div>

          <div className="mt-8 space-y-4 pt-8 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-slate-100 px-4 py-4 text-base font-bold text-slate-900"
            >
              Sign in
            </Link>
            <Link
              href="/book-demo"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

// --- SUB-COMPONENTS ---

function MenuTrigger({
  label,
  href,
  active,
  isCurrentSection,
  onEnter,
}: {
  label: string
  href: string
  active: boolean
  isCurrentSection: boolean
  onEnter: () => void
}) {
  // The label itself navigates to the section overview page; the chevron toggles
  // the mega-menu preview. Both share hover state so desktop behavior stays fluid.
  return (
    <div
      onMouseEnter={onEnter}
      className={cn(
        'inline-flex items-center rounded-lg pl-3.5 pr-1.5 py-2 text-sm font-semibold transition-all duration-200',
        active || isCurrentSection ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
        <ChevronDown className={cn('size-4 transition-transform duration-200', active && 'rotate-180 text-blue-600')} />
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
}: {
  eyebrow: string
  description: string
  href: string
  cta: string
  icon: React.ElementType
}) {
  return (
    <div className="col-span-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col">
      <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100/50 text-blue-600 mb-4">
        <Icon className="size-5" />
      </span>
      <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">{eyebrow}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
      <Link href={href} className="mt-auto text-blue-600 font-bold text-sm inline-flex items-center gap-1 hover:underline">
        {cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

function ColumnGrid({
  items,
  columns,
  detailed = false,
}: {
  items: any[]
  columns: number
  detailed?: boolean
}) {
  return (
    <div
      className={cn(
        'grid gap-x-4 gap-y-2',
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
                  detailed
                    ? 'size-10 bg-blue-100/50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                    : 'size-8 bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900'
                )}
              >
                <Icon className={detailed ? 'size-5' : 'size-4'} />
              </span>
            )}
            <div>
              <span
                className={cn(
                  'block font-bold transition-colors group-hover:text-blue-600',
                  detailed ? 'text-base text-slate-900' : 'text-sm text-slate-700'
                )}
              >
                {item.title}
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
}: {
  title: string
  items: any[]
  overviewHref?: string
}) {
  const [open, setOpen] = useState(false)
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
          open ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden flex flex-col gap-1 px-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            >
              {item.icon && <item.icon className="size-4.5 text-slate-400" />}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}