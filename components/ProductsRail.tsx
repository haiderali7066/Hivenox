'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  ArrowUpRight,
  Boxes,
  Briefcase,
  Headset,
  LayoutDashboard,
  LineChart,
  PieChart,
  Users,
  type LucideIcon,
} from 'lucide-react'

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  desc: string
}

const businessAppsItems: NavItem[] = [
  { title: 'Hivenox ERP', href: '/products/hivenox-erp', icon: LayoutDashboard, desc: 'The connected core every other Hivenox app plugs into.' },
  { title: 'Hivenox CRM', href: '/products/hivenox-crm', icon: Users, desc: 'Pipelines, contacts, and deals in one shared view.' },
  { title: 'Hivenox HRMS', href: '/products/hivenox-hrms', icon: Briefcase, desc: 'Hiring, payroll, and people management in one place.' },
  { title: 'Hivenox Books', href: '/products/hivenox-books', icon: PieChart, desc: 'Accounting and finance that reconciles itself.' },
  { title: 'Hivenox SalesFlow', href: '/products/hivenox-salesflow', icon: LineChart, desc: 'Pipeline automation from first touch to closed deal.' },
  { title: 'Hivenox Desk', href: '/products/hivenox-desk', icon: Headset, desc: 'Customer support tickets, unified across every channel.' },
  { title: 'Hivenox Ops', href: '/products/hivenox-ops', icon: Boxes, desc: 'Inventory and operations, tracked in real time.' },
]

const ITEM_HEIGHT = 92 // px — must match each row's fixed height below
const VISIBLE_ROWS = 5 // odd number so there's a true center row
const RAIL_HEIGHT = ITEM_HEIGHT * VISIBLE_ROWS
const RAIL_PADDING = (RAIL_HEIGHT - ITEM_HEIGHT) / 2

export default function ProductsRail() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Track the continuous scroll position for smooth interpolations
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setScrollTop(container.scrollTop)
      })
    }

    // Initialize position
    handleScroll()

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // The true center line of the scroll container
  const containerCenter = scrollTop + RAIL_HEIGHT / 2

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

        {/* Picker wheel */}
        <div className="relative mx-auto max-w-3xl">
          {/* center highlight band, sits behind the rows */}
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 rounded-2xl border border-blue-200 bg-blue-50"
            style={{ height: ITEM_HEIGHT }}
          />

          {/* fade masks top/bottom so items dissolve as they scroll out */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-white to-transparent" />

          {/* Removed 'scroll-smooth' from classes because it breaks native snap mechanics */}
          <div
            ref={containerRef}
            className="relative z-10 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{
              height: RAIL_HEIGHT,
              scrollSnapType: 'y mandatory',
              paddingTop: RAIL_PADDING,
              paddingBottom: RAIL_PADDING,
            }}
          >
            {businessAppsItems.map((item, i) => {
              const Icon = item.icon

              // Calculate exact math distance from this row's center to the rail's center
              const itemCenter = RAIL_PADDING + i * ITEM_HEIGHT + ITEM_HEIGHT / 2
              const distancePixels = Math.abs(itemCenter - containerCenter)
              const distance = distancePixels / ITEM_HEIGHT 

              // The active item is whichever is mathematically closest to the center line (distance < 0.5)
              const isActive = distance < 0.5

              const rowStyle: CSSProperties = {
                height: ITEM_HEIGHT,
                scrollSnapAlign: 'center',
                // Use continuous distance to apply buttery-smooth scaling while scrolling
                opacity: Math.max(0.25, 1 - distance * 0.35),
                transform: `scale(${Math.max(0.82, 1 - distance * 0.08)})`,
                // Keeps the icons in a perfectly straight vertical line while they scale down
                transformOrigin: 'left center',
                willChange: 'transform, opacity'
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-4 px-4 transition-all duration-300 ease-out sm:gap-6"
                  style={rowStyle}
                >
                  <span
                    className={cn(
                      'flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:size-11',
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                    )}
                  >
                    <Icon className="size-4.5" />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-6">
                    <h3
                      className={cn(
                        'truncate font-bold tracking-tight transition-all duration-300',
                        isActive ? 'text-2xl text-blue-700 sm:text-3xl' : 'text-lg text-slate-400 sm:text-xl'
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        'max-w-sm truncate text-sm leading-relaxed transition-colors duration-300',
                        isActive ? 'text-slate-600' : 'text-slate-300'
                      )}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={cn(
                      'ml-auto size-5 shrink-0 text-blue-600 transition-all duration-300',
                      isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                    )}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}