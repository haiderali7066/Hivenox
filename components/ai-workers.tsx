"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiFileText,
  FiLayers,
  FiPhoneCall,
  FiSearch,
  FiShare2,
  FiStar,
  FiTrendingUp,
  FiVideo,
} from "react-icons/fi";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* ── Utilities ───────────────────────────────────────────────────── */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
function fmt(n: number) {
  return n.toLocaleString("en-US");
}
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Accent system — every value here is tuned for a WHITE card,      */
/* since the section (and now every card) sits on a white background. */
type Accent = "blue" | "violet" | "emerald" | "amber" | "rose" | "slate";

const accentText: Record<Accent, string> = {
  blue: "text-blue-600",
  violet: "text-violet-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
  rose: "text-rose-600",
  slate: "text-slate-700",
};
const accentBg50: Record<Accent, string> = {
  blue: "bg-blue-500/10",
  violet: "bg-violet-500/10",
  emerald: "bg-emerald-500/10",
  amber: "bg-amber-500/10",
  rose: "bg-rose-500/10",
  slate: "bg-slate-100",
};

/* ── Reveal (scroll-triggered) ──────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "scale" | "fade";
}) {
  const prefersReducedMotion = useReducedMotion();
  const offsets = {
    up: { y: 26 },
    scale: { scale: 0.94 },
    fade: {},
  } as const;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ── Data ────────────────────────────────────────────────────────── */
type Group = "core" | "specialist" | "enterprise";

type Worker = {
  code: string; // "01" | "02" | "03" for the core ladder, else a type tag
  tagline: string;
  categoryLabel: string;
  name: string;
  description: string;
  unit: string;
  price: number | "custom";
  href: string;
  secondaryHref?: string;
  image: string;
  icon: IconType;
  accent: Accent;
  group: Group;
  popular?: boolean;
  addOn?: boolean;
};

const workers: Worker[] = [
  {
    code: "01",
    tagline: "Never goes quiet — even when busy.",
    categoryLabel: "Core Ladder",
    name: "Social Worker",
    description:
      "Schedules, publishes, and keeps you consistent across 6 platforms.",
    unit: "50 posts / mo + link-in-bio",
    price: 79,
    href: "/ai-workers/social-worker",
    image: "/images/workers/social.webp",
    icon: FiShare2,
    accent: "blue",
    group: "core",
  },
  {
    code: "02",
    tagline: "Authority on autopilot.",
    categoryLabel: "Core Ladder",
    name: "Content Worker",
    description:
      "AI posts, blogs, and thought leadership in your brand voice.",
    unit: "70 posts + 8 blogs / mo",
    price: 99,
    href: "/ai-workers/content-worker",
    image: "/images/workers/content.webp",
    icon: FiFileText,
    accent: "violet",
    group: "core",
  },
  {
    code: "03",
    tagline: "The complete engine.",
    categoryLabel: "Core Ladder",
    name: "Growth Worker",
    description:
      "Social + Content unified, plus full workflows and a monthly strategist.",
    unit: "200 posts + 40 blogs / mo",
    price: 199,
    href: "/ai-workers/growth-worker",
    image: "/images/workers/growth.webp",
    icon: FiTrendingUp,
    accent: "blue",
    group: "core",
    popular: true,
  },
  {
    code: "SPECIALIST",
    tagline: "Scale on TikTok & Reels.",
    categoryLabel: "Specialists",
    name: "Video Worker",
    description:
      "Scripts, hooks, captions, and native scheduling for short-form video.",
    unit: "30 videos + 30 scripts / mo",
    price: 129,
    href: "/ai-workers/video-worker",
    image: "/images/workers/video.webp",
    icon: FiVideo,
    accent: "rose",
    group: "specialist",
  },
  {
    code: "SPECIALIST",
    tagline: "Bilingual visibility.",
    categoryLabel: "Specialists",
    name: "SEO Worker",
    description:
      "Blog articles, keyword strategy, and regional SERP dominance.",
    unit: "12 SEO articles / mo",
    price: 99,
    href: "/ai-workers/seo-worker",
    image: "/images/workers/seo.webp",
    icon: FiSearch,
    accent: "emerald",
    group: "specialist",
  },
  {
    code: "SPECIALIST",
    tagline: "Prove your ROI.",
    categoryLabel: "Specialists",
    name: "Analytics Worker",
    description: "Advanced dashboards, ROI attribution, and auto-reports.",
    unit: "20 auto reports / mo",
    price: 49,
    href: "/ai-workers/advanced-analytics-worker",
    image: "/images/workers/analytics.webp",
    icon: FiBarChart2,
    accent: "amber",
    group: "specialist",
    addOn: true,
  },
  {
    code: "ENTERPRISE",
    tagline: "Every Worker, unified.",
    categoryLabel: "Enterprise",
    name: "Enterprise OS",
    description:
      "For agencies & multi-brand: white-label, CRM sync, full API.",
    unit: "Priced to your brand count",
    price: "custom",
    href: "/ai-workers/enterprise-growth-os",
    secondaryHref: "/book",
    image: "/images/workers/analytics.webp",
    icon: FiLayers,
    accent: "slate",
    group: "enterprise",
  },
];

/* ── Filter tabs ─────────────────────────────────────────────────── */
type TabKey = "all" | "core" | "specialist" | "enterprise";

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "core", label: "Core Ladder" },
  { key: "specialist", label: "Specialists" },
  { key: "enterprise", label: "Enterprise" },
];

function FilterTabs({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (key: TabKey) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter workers"
      className="inline-flex flex-wrap items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1"
    >
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.key)}
            className={cn(
              "relative rounded-full px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-200 sm:px-4 sm:text-sm",
              isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900",
              focusRing,
            )}
          >
            {isActive && (
              <motion.span
                layoutId="workers-tab-indicator"
                className="absolute inset-0 -z-10 rounded-full bg-slate-900"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

/* ── Worker card ─────────────────────────────────────────────────── */
/* Every card — including Enterprise — shares one identical structure  */
/* and white treatment, so the grid always reads as one consistent set */
/* rather than "cards + a banner." Row height is equalized by the grid */
/* (`auto-rows-fr`) and each card stretches with `h-full flex-col`, so */
/* the CTA area (`mt-auto`) always lands on the same baseline.         */
function WorkerCard({ w, index }: { w: Worker; index: number }) {
  const Icon = w.icon;
  const isEnterprise = w.group === "enterprise";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.18 } }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05, ease: EASE }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-900/8",
          w.popular ? "border-blue-300" : "border-slate-200",
        )}
      >
        {w.popular && (
          <span className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 items-center gap-1 rounded-b-lg bg-blue-600 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
            <FiStar className="size-2.5" />
            Popular
          </span>
        )}

        {/* Image box — fixed square, image only, no overlay text */}
        <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-slate-100">
          <Image
            src={w.image}
            alt={w.name}
            fill
            priority={index < 4}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
        </div>

        {/* Card body — fixed structure so every card reads identically */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
                accentBg50[w.accent],
                accentText[w.accent],
              )}
            >
              {w.code}
              {w.addOn && (
                <>
                  <span className="opacity-40">·</span>
                  Add-on
                </>
              )}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {w.categoryLabel}
            </span>
          </div>

          <p
            className={cn(
              "mt-3 line-clamp-1 text-sm font-semibold leading-snug",
              accentText[w.accent],
            )}
          >
            {w.tagline}
          </p>

          <div className="mt-2.5 flex items-center gap-2.5">
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-lg",
                accentBg50[w.accent],
                accentText[w.accent],
              )}
            >
              <Icon className="size-4" />
            </span>
            <h3 className="truncate text-base font-bold text-slate-900">
              HIVENOX {w.name}
            </h3>
          </div>

          <p className="mt-2.5 line-clamp-2 min-h-[2.5rem] text-[13px] leading-relaxed text-slate-500">
            {w.description}
          </p>

          <div className="mt-4 flex items-baseline gap-1">
            {w.price === "custom" ? (
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Custom
              </span>
            ) : (
              <>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  ${fmt(w.price)}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  /mo
                </span>
              </>
            )}
          </div>
          <p className="mt-0.5 text-xs text-slate-400">{w.unit}</p>

          {/* CTA area — always pinned to the bottom of the card so every
              card in a row ends at the same visual baseline regardless
              of how much copy sits above it. */}
          <div className="mt-4 flex flex-col gap-2 pt-4">
            <Link
              href={w.href}
              className={cn(
                "inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors duration-300 hover:bg-slate-50",
                focusRing,
              )}
            >
              Learn more
              {isEnterprise && <FiArrowRight className="size-3.5" />}
            </Link>
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */
export default function Specialists() {
  const [tab, setTab] = useState<TabKey>("all");

  const visible = useMemo(() => {
    if (tab === "all") return workers;
    return workers.filter((w) => w.group === tab);
  }, [tab]);

  // A denser 4-up grid on desktop keeps each square image (and the card
  // around it) noticeably smaller than a 3-up layout would. `auto-rows-fr`
  // forces every card in a row to the same height regardless of content
  // length, so the set always reads as uniform, fixed-size cards. A lone
  // result (the Enterprise tab) is centered instead of stretching full width.
  const gridClass =
    visible.length === 1
      ? "mx-auto grid max-w-sm grid-cols-1"
      : "grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.04),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row: heading on the left, filter tabs pinned top-right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal direction="fade" className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              The Hive
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              One hive. Every job. Pick your Worker.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              A modular suite of AI Workers — each solves one job
              exceptionally well. Start where you need to, expand as you
              grow. Arabic + English, native.
            </p>
          </Reveal>

          <Reveal direction="fade" delay={100} className="shrink-0 lg:pb-1.5">
            <FilterTabs active={tab} onChange={setTab} />
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div layout className={cn("mt-14", gridClass, "gap-5")}>
          <AnimatePresence mode="popLayout">
            {visible.map((w, i) => (
              <WorkerCard key={`${w.name}-${w.group}`} w={w} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}