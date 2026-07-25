"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  ArrowRight,
  Bot,
  BarChart3,
  Box,
  Boxes,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronRight,
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
} from "lucide-react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

type NavItem = {
  title: string;
  href: string;
  icon: ElementType;
  desc: string;
  badge?: string;
};

/* ------------------------------------------------------------------ */
/*  Accent system                                                       */
/* ------------------------------------------------------------------ */

type Accent = "blue" | "violet" | "indigo" | "amber" | "emerald" | "rose";

const accentStyles: Record<
  Accent,
  {
    text: string;
    chipBg: string;
    panelBg: string;
    panelBorder: string;
    glow: string;
    solidBg: string;
    railActiveBg: string;
  }
> = {
  blue: {
    text: "text-blue-600",
    chipBg: "bg-blue-100/60 text-blue-600",
    panelBg: "bg-blue-50/70",
    panelBorder: "border-blue-100",
    glow: "bg-blue-400/25",
    solidBg: "bg-blue-600 hover:bg-blue-500",
    railActiveBg: "bg-blue-50 text-blue-700",
  },
  violet: {
    text: "text-violet-600",
    chipBg: "bg-violet-100/60 text-violet-600",
    panelBg: "bg-violet-50/70",
    panelBorder: "border-violet-100",
    glow: "bg-violet-400/25",
    solidBg: "bg-violet-600 hover:bg-violet-500",
    railActiveBg: "bg-violet-50 text-violet-700",
  },
  indigo: {
    text: "text-indigo-600",
    chipBg: "bg-indigo-100/60 text-indigo-600",
    panelBg: "bg-indigo-50/70",
    panelBorder: "border-indigo-100",
    glow: "bg-indigo-400/25",
    solidBg: "bg-indigo-600 hover:bg-indigo-500",
    railActiveBg: "bg-indigo-50 text-indigo-700",
  },
  amber: {
    text: "text-amber-600",
    chipBg: "bg-amber-100/60 text-amber-600",
    panelBg: "bg-amber-50/70",
    panelBorder: "border-amber-100",
    glow: "bg-amber-400/25",
    solidBg: "bg-amber-500 hover:bg-amber-400",
    railActiveBg: "bg-amber-50 text-amber-700",
  },
  emerald: {
    text: "text-emerald-600",
    chipBg: "bg-emerald-100/60 text-emerald-600",
    panelBg: "bg-emerald-50/70",
    panelBorder: "border-emerald-100",
    glow: "bg-emerald-400/25",
    solidBg: "bg-emerald-600 hover:bg-emerald-500",
    railActiveBg: "bg-emerald-50 text-emerald-700",
  },
  rose: {
    text: "text-rose-600",
    chipBg: "bg-rose-100/60 text-rose-600",
    panelBg: "bg-rose-50/70",
    panelBorder: "border-rose-100",
    glow: "bg-rose-400/25",
    solidBg: "bg-rose-600 hover:bg-rose-500",
    railActiveBg: "bg-rose-50 text-rose-700",
  },
};

/* ------------------------------------------------------------------ */
/*  Navigation data                                                     */
/* ------------------------------------------------------------------ */

const productsItems: NavItem[] = [
  {
    title: "Results as a Service",
    href: "/solutions/results-as-a-service",
    icon: Rocket,
    desc: "Guaranteed outcomes powered by our technology — you pay for results, not seats.",
  },
  {
    title: "Business Intelligence",
    href: "/solutions/business-intelligence",
    icon: BarChart3,
    desc: "Live dashboards, forecasts, and KPI tracking pulled straight from your own data.",
  },
  {
    title: "Intelligent Automation",
    href: "/solutions/intelligent-automation",
    icon: Zap,
    desc: "Turn repetitive, manual workflows into automated processes across every team.",
  },
  {
    title: "Custom Software Development",
    href: "/solutions/custom-software-development",
    icon: Code2,
    desc: "Bespoke applications and integrations built and maintained by our engineers.",
  },
];

const aiWorkersItems: NavItem[] = [
  {
    title: "Social Worker",
    href: "/ai-workers/social-worker",
    icon: Sparkles,
    desc: "Schedules and publishes across every channel, bilingual, on autopilot.",
  },
  {
    title: "Content Worker",
    href: "/ai-workers/content-worker",
    icon: FileText,
    desc: "Writes on-brand posts, blogs, and thought leadership at scale.",
  },
  {
    title: "Growth Worker",
    href: "/ai-workers/growth-worker",
    icon: LineChart,
    desc: "Automation, approvals, and advanced analytics — everything, unified.",
  },
  {
    title: "Video Worker",
    href: "/ai-workers/video-worker",
    icon: Video,
    desc: "Scripts, hooks, and captions built for TikTok, Reels, and Shorts.",
  },
  {
    title: "SEO Worker",
    href: "/ai-workers/seo-worker",
    icon: Search,
    desc: "Bilingual keyword strategy and search-driven organic growth.",
  },
  {
    title: "Advanced Analytics Worker",
    href: "/ai-workers/advanced-analytics-worker",
    icon: BarChart3,
    desc: "Revenue-grade reporting — bolts onto any Worker as an add-on.",
  },
  {
    title: "Enterprise Growth OS",
    href: "/ai-workers/enterprise-growth-os",
    icon: Layers,
    desc: "Every Worker, unified, for multi-brand teams and agencies.",
    badge: "Popular",
  },
];

const allProductsItems: NavItem[] = [
  {
    title: "Hivenox ERP",
    href: "/products/hivenox-erp",
    icon: LayoutDashboard,
    desc: "The connected core every other Hivenox app plugs into.",
  },
  {
    title: "Hivenox CRM",
    href: "/products/hivenox-crm",
    icon: Users,
    desc: "Pipelines, contacts, and deals in one shared view.",
  },
  {
    title: "Hivenox HRMS",
    href: "/products/hivenox-hrms",
    icon: Briefcase,
    desc: "Hiring, payroll, and people management in one place.",
  },
  {
    title: "Hivenox Books",
    href: "/products/hivenox-books",
    icon: PieChart,
    desc: "Accounting and finance that reconciles itself.",
  },
  {
    title: "Hivenox SalesFlow",
    href: "/products/hivenox-salesflow",
    icon: LineChart,
    desc: "Pipeline automation from first touch to closed deal.",
  },
  {
    title: "Hivenox Desk",
    href: "/products/hivenox-desk",
    icon: Headset,
    desc: "Customer support tickets, unified across every channel.",
  },
  {
    title: "Hivenox Ops",
    href: "/products/hivenox-ops",
    icon: Boxes,
    desc: "Inventory and operations, tracked in real time.",
  },
  {
    title: "Hivenox AI Sales Agent",
    href: "/products/ai-sales-agent",
    icon: Bot,
    desc: "Prospects, follows up, and books meetings automatically.",
  },
  {
    title: "Hivenox AI Support Agent",
    href: "/products/ai-support-agent",
    icon: Headset,
    desc: "Answers customers instantly, in Arabic and English.",
  },
  {
    title: "Hivenox AI Recruiter",
    href: "/products/ai-recruiter",
    icon: Briefcase,
    desc: "Screens candidates and schedules interviews for you.",
  },
  {
    title: "Hivenox Voice AI",
    href: "/products/voice-ai",
    icon: Mic,
    desc: "Makes and takes natural phone calls, around the clock.",
  },
  {
    title: "Hivenox Insights AI",
    href: "/products/insights-ai",
    icon: BarChart3,
    desc: "Turns raw business data into plain-language answers.",
  },
];

const erpAppsItems: NavItem[] = [
  {
    title: "CRM",
    href: "/erp-solutions/crm",
    icon: Users,
    desc: "Track every lead, deal, and customer relationship.",
  },
  {
    title: "HRMS",
    href: "/erp-solutions/hrms",
    icon: Briefcase,
    desc: "Employee records, payroll, and performance in one module.",
  },
  {
    title: "Inventory Management",
    href: "/erp-solutions/inventory-management",
    icon: Box,
    desc: "Real-time stock levels across every location.",
  },
  {
    title: "Accounting & Finance",
    href: "/erp-solutions/accounting-finance",
    icon: PieChart,
    desc: "Books, invoicing, and financial reporting, automated.",
  },
  {
    title: "Operations Management",
    href: "/erp-solutions/operations-management",
    icon: LayoutDashboard,
    desc: "Coordinate day-to-day operations from one dashboard.",
  },
  {
    title: "Analytics & Reporting",
    href: "/erp-solutions/analytics-reporting",
    icon: BarChart3,
    desc: "Executive-ready reports, generated on schedule.",
  },
];

const industriesItems: NavItem[] = [
  {
    title: "Healthcare & Clinics",
    href: "/industries/healthcare-clinics",
    icon: HeartPulse,
    desc: "Patient scheduling, records, and care coordination in one place.",
  },
  {
    title: "Salons & Wellness",
    href: "/industries/salons-wellness",
    icon: Sparkles,
    desc: "Bookings, memberships, and client history, simplified.",
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    icon: Building2,
    desc: "Listings, leads, and deal pipelines in one workspace.",
  },
  {
    title: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
    icon: ShoppingBag,
    desc: "Inventory, orders, and storefronts, all connected.",
  },
  {
    title: "Restaurants & Cafés",
    href: "/industries/restaurants-cafes",
    icon: UtensilsCrossed,
    desc: "Orders, reservations, and loyalty in a single system.",
  },
  {
    title: "Agencies",
    href: "/industries/agencies",
    icon: Briefcase,
    desc: "Client work, retainers, and reporting, all in one login.",
  },
  {
    title: "Professional Services",
    href: "/industries/professional-services",
    icon: Users,
    desc: "Client engagements, billing, and delivery tracked end to end.",
  },
  {
    title: "Education",
    href: "/industries/education",
    icon: GraduationCap,
    desc: "Enrollment, communication, and reporting for schools.",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    desc: "Production, supply chain, and inventory, unified.",
  },
];

const companyItems: NavItem[] = [
  {
    title: "About Us",
    href: "/about",
    icon: Info,
    desc: "Who we are and why we built Hivenox.",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    icon: FileText,
    desc: "Real businesses, real results, in their own words.",
  },
  {
    title: "Insights (Blog)",
    href: "/blogs",
    icon: Newspaper,
    desc: "Product updates, playbooks, and industry perspective.",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
    desc: "Talk to our team about your business, not a script.",
  },
];

const menuOverviews = {
  products: {
    href: "/solutions",
    label: "All Solutions",
    prefix: "/solutions",
    accent: "blue" as Accent,
    eyebrow: "Products",
  },
  aiWorkers: {
    href: "/ai-workers",
    label: "All AI Workers",
    prefix: "/ai-workers",
    accent: "violet" as Accent,
    eyebrow: "AI Workers",
  },
  allProducts: {
    href: "/products",
    label: "All Apps",
    prefix: "/products",
    accent: "indigo" as Accent,
    eyebrow: "All Products",
  },
  erpApps: {
    href: "/erp-solutions",
    label: "All ERP Apps",
    prefix: "/erp-solutions",
    accent: "emerald" as Accent,
    eyebrow: "ERP Apps",
  },
  industries: {
    href: "/industries",
    label: "All Industries",
    prefix: "/industries",
    accent: "amber" as Accent,
    eyebrow: "Industries",
  },
  company: {
    href: "/about",
    label: "About Hivenox",
    prefix: "/about",
    accent: "rose" as Accent,
    eyebrow: "Company",
  },
} as const;

type MenuKey = keyof typeof menuOverviews | null;

/* ------------------------------------------------------------------ */
/*  Language toggle                                                     */
/* ------------------------------------------------------------------ */

function useLocale() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const locale: "en" | "ar" = pathname.startsWith("/ar") ? "ar" : "en";

  function switchLocale(next: "en" | "ar") {
    if (next === locale) return;
    const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
    const target =
      next === "en" ? stripped : `/ar${stripped === "/" ? "" : stripped}`;
    router.push(target || "/");
  }

  return { locale, switchLocale };
}

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, switchLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5",
        compact ? "text-xs" : "text-[13px]",
      )}
    >
      {(["en", "ar"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded-full px-2.5 py-1 font-bold uppercase tracking-wide transition-colors",
            locale === code
              ? "bg-slate-900 text-white"
              : "text-slate-500 hover:text-slate-800",
            focusRing,
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                              */
/* ------------------------------------------------------------------ */

const HEADER_HEIGHT = 64;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, openMenu]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node))
        setOpenMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const isSectionActive = (prefix: string | null) =>
    !!prefix && pathname?.startsWith(prefix);
  const activeAccent: Accent = openMenu
    ? menuOverviews[openMenu].accent
    : "blue";

  return (
    <header
      ref={headerRef}
      dir={isRtl ? "rtl" : "ltr"}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || openMenu
          ? "border-slate-200/60 bg-white/95 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-white/70 backdrop-blur-md",
        mobileOpen && "border-transparent bg-white",
      )}
    >
      {/* SLIM UTILITY BAR */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-slate-100 transition-all duration-300 ease-out xl:block",
          scrolled || openMenu ? "max-h-0 opacity-0" : "max-h-9 opacity-100",
        )}
      >
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 lg:px-8">
          <p className="text-xs font-medium text-slate-500">
            🇦🇺 Australia · 🇦🇪 UAE · 🇸🇦 Saudi Arabia — one platform, every region
          </p>
          <div className="flex items-center gap-4">
            <LanguageToggle compact />
          </div>
        </div>
      </div>

      {/* MAIN ROW */}
      <div className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* BRAND LOGO */}
        <Link
          href="/"
          className={cn("group flex shrink-0 items-center gap-3", focusRing)}
          aria-label="Hivenox home"
        >
          <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-slate-200/80 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-200 group-hover:shadow-blue-900/5">
            <Image
              src="/logo.jpeg"
              alt="Hivenox Logo"
              width={40}
              height={40}
              className="size-full object-cover"
              priority
            />
          </div>
          <span className="text-[19px] font-black tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
            HIVENOX
          </span>
        </Link>

        {/* DESKTOP NAV — Elevated pill rail for pure white backgrounds */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1.5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] backdrop-blur-md xl:flex"
        >
          <Link
            href="/"
            onMouseEnter={() => setOpenMenu(null)}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200",
              pathname === "/"
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/50"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900",
              focusRing,
            )}
          >
            Home
          </Link>

          <MenuTrigger
            label="Products"
            active={openMenu === "products"}
            isCurrentSection={isSectionActive(menuOverviews.products.prefix)}
            accent={menuOverviews.products.accent}
            onToggle={() =>
              setOpenMenu((m) => (m === "products" ? null : "products"))
            }
          />
          <MenuTrigger
            label="AI Workers"
            active={openMenu === "aiWorkers"}
            isCurrentSection={isSectionActive(menuOverviews.aiWorkers.prefix)}
            accent={menuOverviews.aiWorkers.accent}
            onToggle={() =>
              setOpenMenu((m) => (m === "aiWorkers" ? null : "aiWorkers"))
            }
          />
          <MenuTrigger
            label="All Products"
            active={openMenu === "allProducts"}
            isCurrentSection={isSectionActive(menuOverviews.allProducts.prefix)}
            accent={menuOverviews.allProducts.accent}
            onToggle={() =>
              setOpenMenu((m) => (m === "allProducts" ? null : "allProducts"))
            }
          />
          <MenuTrigger
            label="ERP Apps"
            active={openMenu === "erpApps"}
            isCurrentSection={isSectionActive(menuOverviews.erpApps.prefix)}
            accent={menuOverviews.erpApps.accent}
            onToggle={() =>
              setOpenMenu((m) => (m === "erpApps" ? null : "erpApps"))
            }
          />
          <MenuTrigger
            label="Industries"
            active={openMenu === "industries"}
            isCurrentSection={isSectionActive(menuOverviews.industries.prefix)}
            accent={menuOverviews.industries.accent}
            onToggle={() =>
              setOpenMenu((m) => (m === "industries" ? null : "industries"))
            }
          />

          <Link
            href="/pricing"
            onMouseEnter={() => setOpenMenu(null)}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200",
              pathname === "/pricing"
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/50"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900",
              focusRing,
            )}
          >
            Pricing
          </Link>

          <MenuTrigger
            label="Company"
            active={openMenu === "company"}
            isCurrentSection={isSectionActive(menuOverviews.company.prefix)}
            accent={menuOverviews.company.accent}
            onToggle={() =>
              setOpenMenu((m) => (m === "company" ? null : "company"))
            }
          />
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/book-demo"
            className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 px-5 text-[13px] font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
          >
            Book Demo
          </Link>
          <Link
            href="/contact"
            className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 text-[13px] font-bold text-white shadow-sm shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30"
          >
            Contact Sales
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm xl:hidden",
            focusRing,
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Accent top-border */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r transition-opacity duration-300",
          openMenu ? "opacity-100" : "opacity-0",
          activeAccent === "blue" &&
            "from-transparent via-blue-500 to-transparent",
          activeAccent === "violet" &&
            "from-transparent via-violet-500 to-transparent",
          activeAccent === "indigo" &&
            "from-transparent via-indigo-500 to-transparent",
          activeAccent === "amber" &&
            "from-transparent via-amber-500 to-transparent",
          activeAccent === "emerald" &&
            "from-transparent via-emerald-500 to-transparent",
          activeAccent === "rose" &&
            "from-transparent via-rose-500 to-transparent",
        )}
      />

      {/* BACKDROP */}
      <div
        aria-hidden
        onClick={() => setOpenMenu(null)}
        style={{ top: HEADER_HEIGHT }}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 hidden bg-slate-900/30 backdrop-blur-[2px] transition-opacity duration-300 xl:block",
          openMenu ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* DESKTOP MEGA MENU — wider than half, not full */}
      <div
        role="region"
        aria-hidden={!openMenu}
        style={{
          top: HEADER_HEIGHT,
          height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
        }}
        className={cn(
          "fixed left-0 z-50 hidden w-full overflow-y-auto border-r border-slate-200 bg-white shadow-2xl shadow-slate-900/10 transition-transform duration-300 ease-out xl:block",
          "max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl",
          openMenu ? "translate-x-0" : "-translate-x-full pointer-events-none",
        )}
      >
        <div className="relative min-h-full p-8 sm:p-10 lg:p-12 xl:p-14 xl:pl-20 2xl:pl-28">
          <div
            className={cn(
              "pointer-events-none absolute -top-16 right-0 size-72 rounded-full blur-3xl",
              accentStyles[activeAccent].glow,
            )}
            aria-hidden="true"
          />

          {openMenu === "products" && (
            <PanelHeading
              eyebrow={menuOverviews.products.eyebrow}
              accent="blue"
            />
          )}
          {openMenu === "products" && (
            <RailMenu
              items={productsItems}
              accent="blue"
              overviewHref={menuOverviews.products.href}
              overviewLabel={menuOverviews.products.label}
            />
          )}

          {openMenu === "aiWorkers" && (
            <PanelHeading
              eyebrow={menuOverviews.aiWorkers.eyebrow}
              accent="violet"
            />
          )}
          {openMenu === "aiWorkers" && (
            <RailMenu
              items={aiWorkersItems}
              accent="violet"
              overviewHref={menuOverviews.aiWorkers.href}
              overviewLabel={menuOverviews.aiWorkers.label}
            />
          )}

          {openMenu === "allProducts" && (
            <PanelHeading
              eyebrow={menuOverviews.allProducts.eyebrow}
              accent="indigo"
            />
          )}
          {openMenu === "allProducts" && (
            <RailMenu
              items={allProductsItems}
              accent="indigo"
              overviewHref={menuOverviews.allProducts.href}
              overviewLabel={menuOverviews.allProducts.label}
            />
          )}

          {openMenu === "erpApps" && (
            <PanelHeading
              eyebrow={menuOverviews.erpApps.eyebrow}
              accent="emerald"
            />
          )}
          {openMenu === "erpApps" && (
            <RailMenu
              items={erpAppsItems}
              accent="emerald"
              overviewHref={menuOverviews.erpApps.href}
              overviewLabel={menuOverviews.erpApps.label}
            />
          )}

          {openMenu === "industries" && (
            <PanelHeading
              eyebrow={menuOverviews.industries.eyebrow}
              accent="amber"
            />
          )}
          {openMenu === "industries" && (
            <RailMenu
              items={industriesItems}
              accent="amber"
              overviewHref={menuOverviews.industries.href}
              overviewLabel={menuOverviews.industries.label}
            />
          )}

          {openMenu === "company" && (
            <PanelHeading
              eyebrow={menuOverviews.company.eyebrow}
              accent="rose"
            />
          )}
          {openMenu === "company" && <CompanyPanel accent="rose" />}
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 overflow-y-auto bg-white transition-transform duration-300 ease-in-out xl:hidden",
          mobileOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="flex min-h-full flex-col px-5 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Language
            </span>
            <LanguageToggle />
          </div>

          <div className="flex-1 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-slate-100 px-3 py-3.5 text-base font-bold text-slate-900"
            >
              Home
            </Link>
            <MobileAccordion
              title="Products"
              overviewHref={menuOverviews.products.href}
              items={productsItems}
              accent="blue"
            />
            <MobileAccordion
              title="AI Workers"
              overviewHref={menuOverviews.aiWorkers.href}
              items={aiWorkersItems}
              accent="violet"
            />
            <MobileAccordion
              title="All Products"
              overviewHref={menuOverviews.allProducts.href}
              items={allProductsItems}
              accent="indigo"
            />
            <MobileAccordion
              title="ERP Apps"
              overviewHref={menuOverviews.erpApps.href}
              items={erpAppsItems}
              accent="emerald"
            />
            <MobileAccordion
              title="Industries"
              overviewHref={menuOverviews.industries.href}
              items={industriesItems}
              accent="amber"
            />
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-slate-100 px-3 py-3.5 text-base font-bold text-slate-900"
            >
              Pricing
            </Link>
            <MobileAccordion
              title="Company"
              overviewHref={menuOverviews.company.href}
              items={companyItems}
              accent="rose"
            />
          </div>

          <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
            <Link
              href="/book-demo"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3.5 text-base font-bold text-slate-700"
            >
              Book Demo
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25"
            >
              Start Free
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  PanelHeading                                                        */
/* ------------------------------------------------------------------ */

function PanelHeading({
  eyebrow,
  accent,
}: {
  eyebrow: string;
  accent: Accent;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span
        className={cn("h-2.5 w-2.5 rounded-full", accentStyles[accent].chipBg)}
        aria-hidden="true"
      />
      <h2 className="text-3xl font-black tracking-tight text-slate-900">
        {eyebrow}
      </h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  RailMenu — left rail + sticky right preview                         */
/* ------------------------------------------------------------------ */

function RailMenu({
  items,
  accent,
  overviewHref,
  overviewLabel,
}: {
  items: NavItem[];
  accent: Accent;
  overviewHref: string;
  overviewLabel: string;
}) {
  const [active, setActive] = useState(0);
  const styles = accentStyles[accent];
  const current = items[Math.min(active, items.length - 1)];
  const CurrentIcon = current.icon;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-1">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <Link
              key={item.title}
              href={item.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "group flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-all",
                isActive
                  ? styles.railActiveBg
                  : "text-slate-600 hover:bg-slate-50",
                focusRing,
              )}
            >
              <span className="flex items-center gap-2 truncate">
                <span className="truncate transition-transform group-hover:translate-x-0.5">
                  {item.title}
                </span>
                {item.badge && (
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      styles.chipBg,
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </span>
              <ChevronRight
                className={cn(
                  "size-4 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-1",
                  isActive && styles.text,
                )}
                aria-hidden="true"
              />
            </Link>
          );
        })}
        <Link
          href={overviewHref}
          className={cn(
            "mt-5 inline-flex w-fit items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
            styles.solidBg,
            focusRing,
          )}
        >
          {overviewLabel} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div
        className={cn(
          "group relative flex flex-col justify-center overflow-hidden rounded-3xl border p-8 transition-all hover:shadow-lg",
          styles.panelBg,
          styles.panelBorder,
        )}
      >
        {/* Stretched Link covering the entire card */}
        <Link
          href={current.href}
          className="absolute inset-0 z-10"
          aria-label={`Explore ${current.title}`}
        />

        <div
          className={cn("absolute inset-x-0 top-0 h-1.5", styles.solidBg)}
          aria-hidden="true"
        />

        <span
          className={cn(
            "mb-4 flex size-12 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
            styles.chipBg,
          )}
        >
          <CurrentIcon className="size-6" aria-hidden="true" />
        </span>

        <h3 className="mb-1.5 flex items-center gap-2 text-lg font-bold text-slate-900">
          {current.title}
          {current.badge && (
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                styles.chipBg,
              )}
            >
              {current.badge}
            </span>
          )}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          {current.desc}
        </p>

        <div
          className={cn(
            "inline-flex w-fit items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all",
            styles.solidBg,
          )}
        >
          Explore {current.title}{" "}
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CompanyPanel — bespoke 2-col grid + featured demo card              */
/* ------------------------------------------------------------------ */

function CompanyPanel({ accent }: { accent: Accent }) {
  const styles = accentStyles[accent];
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="grid gap-3 sm:grid-cols-2">
        {companyItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-slate-200 hover:shadow-md"
          >
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-xl",
                styles.chipBg,
              )}
            >
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div
        className={cn(
          "relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8",
          styles.panelBg,
          styles.panelBorder,
        )}
      >
        <div
          className={cn("absolute inset-x-0 top-0 h-1.5", styles.solidBg)}
          aria-hidden="true"
        />
        <div className="relative">
          <h3 className="text-xl font-black text-slate-900">Book a Demo</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            See how Hivenox works for your team. Get a personalised walkthrough
            with one of our solution architects.
          </p>
        </div>
        <Link
          href="/book-demo"
          className={cn(
            "relative mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
            styles.solidBg,
            focusRing,
          )}
        >
          Schedule Demo <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav-row sub-components                                              */
/* ------------------------------------------------------------------ */

function MenuTrigger({
  label,
  active,
  isCurrentSection,
  accent,
  onToggle,
}: {
  label: string;
  active: boolean;
  isCurrentSection: boolean;
  accent: Accent;
  onToggle: () => void;
}) {
  const styles = accentStyles[accent];
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
        active || isCurrentSection
          ? styles.chipBg
          : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900",
        focusRing,
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          "size-4 transition-transform duration-200",
          active && cn("rotate-180", styles.text),
        )}
        aria-hidden="true"
      />
    </button>
  );
}

function MobileAccordion({
  title,
  items,
  overviewHref,
  accent,
}: {
  title: string;
  items: NavItem[];
  overviewHref?: string;
  accent: Accent;
}) {
  const [open, setOpen] = useState(false);
  const styles = accentStyles[accent];
  return (
    <div className="border-b border-slate-100">
      <div className="flex items-center justify-between">
        {overviewHref ? (
          <Link
            href={overviewHref}
            onClick={() => setOpen(false)}
            className="flex-1 py-3.5 pl-3 text-base font-bold text-slate-900"
          >
            {title}
          </Link>
        ) : (
          <span className="flex-1 py-3.5 pl-3 text-base font-bold text-slate-900">
            {title}
          </span>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={`Toggle ${title} submenu`}
          aria-expanded={open}
          className={cn(
            "flex items-center justify-center rounded-full px-3 py-3.5",
            focusRing,
          )}
        >
          <ChevronDown
            className={cn(
              "size-5 text-slate-400 transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          open
            ? "grid-rows-[1fr] pb-4 opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 overflow-hidden px-3">
          {overviewHref && (
            <Link
              href={overviewHref}
              className={cn(
                "mb-1 inline-flex items-center gap-1.5 rounded-xl px-2 py-2 text-sm font-bold",
                styles.railActiveBg,
              )}
            >
              View All <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          )}
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center justify-between gap-3 rounded-xl px-2 py-2.5 text-[15px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              <span className="flex items-center gap-3 truncate">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-lg",
                    styles.chipBg,
                  )}
                >
                  <item.icon className="size-3.5" aria-hidden="true" />
                </span>
                <span className="truncate">{item.title}</span>
              </span>
              <ChevronRight
                className="size-4 shrink-0 text-slate-300"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
