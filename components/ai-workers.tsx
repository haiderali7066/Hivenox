"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon, Share2, PenTool, Rocket, Video, Search, BarChart3, Building2 } from 'lucide-react';

// Mocking cn for standalone capability - replace with your actual import
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const workforceFilters = ['All', 'Core Ladder', 'Specialists', 'Enterprise'] as const;
type FilterGroup = (typeof workforceFilters)[number];

type WorkforceCard = {
  category: string;
  name: string;
  tagline: string;
  description: string;
  price: number | 'Custom';
  unit: string;
  icon: LucideIcon;
  group: FilterGroup;
  addOn?: boolean;
  popular?: boolean;
  href: string;
  imageUrl: string;
};

const workforceRoster: WorkforceCard[] = [
  { 
    category: 'SOCIAL', 
    name: 'Social Worker', 
    tagline: 'Never goes quiet — even when busy.', 
    description: 'Schedules, publishes, and keeps you consistent across 6 platforms.', 
    price: 79, 
    unit: '50 posts / mo + link-in-bio', 
    icon: Share2, 
    group: 'Core Ladder',
    href: '/ai-workers/social-worker',
    imageUrl: '/images/workers/w1.jpeg'
  },
  { 
    category: 'CONTENT', 
    name: 'Content Worker', 
    tagline: 'Authority on autopilot.', 
    description: 'AI posts, blogs, and thought leadership in your brand voice.', 
    price: 99, 
    unit: '70 posts + 8 blogs / mo', 
    icon: PenTool, 
    group: 'Core Ladder',
    href: '/ai-workers/content-worker',
    imageUrl: '/images/workers/w2.jpeg'
  },
  { 
    category: 'GROWTH', 
    name: 'Growth Worker', 
    tagline: 'The complete engine.', 
    description: 'Social + Content unified, plus full workflows and a monthly strategist.', 
    price: 199, 
    unit: '200 posts + 40 blogs / mo', 
    icon: Rocket, 
    group: 'Core Ladder',
    popular: true,
    href: '/ai-workers/growth-worker',
    imageUrl: '/images/workers/w3.jpeg'
  },
  { 
    category: 'SPECIALIST', 
    name: 'Video Worker', 
    tagline: 'Scale on TikTok & Reels.', 
    description: 'Scripts, hooks, captions, and native scheduling for short-form video.', 
    price: 129, 
    unit: '30 videos + 30 scripts / mo', 
    icon: Video, 
    group: 'Specialists',
    href: '/ai-workers/video-worker',
    imageUrl: '/images/workers/w4.jpeg'
  },
  { 
    category: 'SPECIALIST', 
    name: 'SEO Worker', 
    tagline: 'Bilingual visibility.', 
    description: 'Blog articles, keyword strategy, and regional SERP dominance.', 
    price: 99, 
    unit: '12 SEO articles / mo', 
    icon: Search, 
    group: 'Specialists',
    href: '/ai-workers/seo-worker',
    imageUrl: '/images/workers/w5.jpeg'
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
    addOn: true,
    href: '/ai-workers/advanced-analytics-worker',
    imageUrl: '/images/workers/w6.jpeg'
  },
  { 
    category: 'ENTERPRISE', 
    name: 'Enterprise OS', 
    tagline: 'Every Worker, unified.', 
    description: 'For agencies & multi-brand: white-label, CRM sync, full API.', 
    price: 'Custom', 
    unit: 'Priced to your brand count', 
    icon: Building2, 
    group: 'Enterprise',
    href: '/ai-workers/enterprise-growth-os',
    imageUrl: '/images/workers/w7.jpeg'
  },
];

const getThemeStyles = (group: FilterGroup) => {
  switch (group) {
    case 'Core Ladder':
      return {
        bodyBg: 'bg-gradient-to-b from-blue-50/80 to-white',
        badge: 'text-blue-600',
      };
    case 'Specialists':
      return {
        bodyBg: 'bg-gradient-to-b from-teal-50/80 to-white',
        badge: 'text-teal-700',
      };
    case 'Enterprise':
      return {
        bodyBg: 'bg-gradient-to-b from-slate-100/80 to-white',
        badge: 'text-slate-700',
      };
    default:
      return {
        bodyBg: 'bg-gradient-to-b from-slate-50/80 to-white',
        badge: 'text-slate-600',
      };
  }
};

function formatPrice(price: number | 'Custom') {
  if (price === 'Custom') return 'Custom';
  return `$${new Intl.NumberFormat('en-US').format(price)}`;
}

function WorkforceCardTile({ w, delay }: { w: WorkforceCard; delay: number }) {
  const theme = getThemeStyles(w.group);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-[1.5rem] border-2 border-blue-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/10">
        
        {/* Taller Image Panel with static image (no scale hover effect) */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100">
          <img 
            src={w.imageUrl} 
            alt={w.name} 
            className="h-full w-full object-cover"
          />
          
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
        </div>

        {/* Card Body */}
        <div className={cn("flex flex-1 flex-col p-4 sm:p-6 lg:p-8", theme.bodyBg)}>
          
          <div className={cn("text-[9px] sm:text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5", theme.badge)}>
            <span>{w.group}</span>
            <span className="size-1 rounded-full bg-current opacity-40" />
            <span>{w.category}</span>
          </div>
          
          <h3 className="mt-1.5 sm:mt-2 text-base sm:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
            HIVENOX <br className="hidden lg:block" /> {w.name}
          </h3>
          
          <p className="mt-1.5 text-[11px] sm:text-sm font-semibold text-slate-700">
            {w.tagline}
          </p>

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
              href={w.href} 
              className="group/link inline-flex w-fit items-center gap-1 sm:gap-1.5 rounded-full sm:rounded-none bg-blue-50/50 sm:bg-transparent px-3 py-1.5 sm:p-0 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-blue-600 transition-colors hover:text-blue-800"
            >
              Learn more
              <ArrowRight className="size-3 sm:size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkforceRoster() {
  const [filter, setFilter] = useState<FilterGroup>('All');
  const filtered = filter === 'All' ? workforceRoster : workforceRoster.filter((w) => w.group === filter);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          
          <div className="mx-0 max-w-2xl text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">The AI Workforce</h4>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">One hive. Every job. Pick your Worker.</h2>
            <p className="mt-4 text-lg text-slate-600">A modular suite of AI Workers — each solves one job exceptionally well. Start where you need to, expand as you grow. Arabic + English, native.</p>
          </div>

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

        {/* Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {filtered.map((w, i) => (
            <WorkforceCardTile key={w.name} w={w} delay={(i % 3) * 0.1} />
          ))}
        </div>
        
      </div>
    </section>
  );
}