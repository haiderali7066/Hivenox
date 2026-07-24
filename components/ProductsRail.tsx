'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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
  color: string       // Active solid color (Hex)
  lightColor: string  // Inactive faded color (Hex)
}

// Added unique colors for every item
const businessAppsItems: NavItem[] = [
  { title: 'Hivenox ERP', href: '/products/hivenox-erp', icon: LayoutDashboard, desc: 'The connected core every other app plugs into.', color: '#2563eb', lightColor: '#93c5fd' }, // Blue
  { title: 'Hivenox CRM', href: '/products/hivenox-crm', icon: Users, desc: 'Pipelines, contacts, and deals in one shared view.', color: '#059669', lightColor: '#6ee7b7' }, // Emerald
  { title: 'Hivenox HRMS', href: '/products/hivenox-hrms', icon: Briefcase, desc: 'Hiring, payroll, and people management in one place.', color: '#7c3aed', lightColor: '#c4b5fd' }, // Violet
  { title: 'Hivenox Books', href: '/products/hivenox-books', icon: PieChart, desc: 'Accounting and finance that reconciles itself.', color: '#d97706', lightColor: '#fcd34d' }, // Amber
  { title: 'Hivenox SalesFlow', href: '/products/hivenox-salesflow', icon: LineChart, desc: 'Pipeline automation from first touch to closed deal.', color: '#e11d48', lightColor: '#fda4af' }, // Rose
  { title: 'Hivenox Desk', href: '/products/hivenox-desk', icon: Headset, desc: 'Customer support tickets, unified across channels.', color: '#0891b2', lightColor: '#67e8f9' }, // Cyan
  { title: 'Hivenox Ops', href: '/products/hivenox-ops', icon: Boxes, desc: 'Inventory and operations, tracked in real time.', color: '#c026d3', lightColor: '#f0abfc' }, // Fuchsia
]

const ITEM_HEIGHT = 80 // Reduced to fit beautifully in half-screen
const VISIBLE_ROWS = 5 
const RAIL_HEIGHT = ITEM_HEIGHT * VISIBLE_ROWS

const MotionLink = motion.create(Link)

export function ProductsRail() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateActive = () => {
      const containerCenter = container.scrollTop + container.clientHeight / 2
      let closestIndex = 0
      let closestDistance = Infinity

      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const itemCenter = el.offsetTop + el.offsetHeight / 2
        const dist = Math.abs(itemCenter - containerCenter)
        if (dist < closestDistance) {
          closestDistance = dist
          closestIndex = i
        }
      })

      setActiveIndex(closestIndex)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateActive)
    }

    const onWheel = (e: WheelEvent) => {
      if (!container) return

      const isAtTop = Math.floor(container.scrollTop) <= 0
      const isAtBottom = Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight

      // Release scroll to website if at bounds
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        return 
      }

      e.preventDefault()
      e.stopPropagation()
      container.scrollTop += e.deltaY
      onScroll()
    }

    updateActive()
    container.addEventListener('scroll', onScroll, { passive: true })
    container.addEventListener('wheel', onWheel, { passive: false })
    
    return () => {
      container.removeEventListener('scroll', onScroll)
      container.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const railPadding = (RAIL_HEIGHT - ITEM_HEIGHT) / 2

  return (
    // Height restricted to exactly half screen (h-[50vh]), minimum 500px so it doesn't break on small mobiles
    <section className="relative flex h-[50vh] min-h-[500px] w-full flex-col justify-center overflow-hidden py-4 sm:py-6">
      
      {/* 
        Animated Gradient Background 
        Moves infinitely and smoothly across the section
      */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] 
        }}
        transition={{ 
          duration: 20, 
          ease: 'linear', 
          repeat: Infinity 
        }}
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,#f8fafc,#e0e7ff,#f3e8ff,#ecfdf5,#f8fafc)] bg-[length:300%_300%]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header (Reduced margins) */}
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <span className="mb-2 inline-flex items-center rounded-full bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-700 backdrop-blur-md ring-1 ring-inset ring-slate-200/50">
            Our Ecosystem
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything connects.
          </h2>
        </div>

        {/* Scroll Rail Container */}
        <div className="relative mx-auto max-w-5xl">
          
          {/* Glassmorphism Active Box */}
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 rounded-[1.5rem] border border-white/60 bg-white/40 shadow-sm backdrop-blur-md transition-all duration-300"
            style={{ height: ITEM_HEIGHT }}
          />

          {/* Scrollable Area (Uses mask-image for transparent fading instead of solid white gradients) */}
          <div
            ref={containerRef}
            data-lenis-prevent
            data-scroll-container
            className="relative z-10 overflow-y-auto overscroll-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{
              height: RAIL_HEIGHT,
              scrollSnapType: 'y mandatory',
              paddingTop: railPadding,
              paddingBottom: railPadding,
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
          >
            {businessAppsItems.map((item, i) => {
              const Icon = item.icon
              const isActive = i === activeIndex
              const distance = Math.abs(i - activeIndex)
              const scale = isActive ? 1 : Math.max(0.85, 1 - distance * 0.05)
              const opacity = isActive ? 1 : Math.max(0.15, 1 - distance * 0.3)

              return (
                <MotionLink
                  key={item.title}
                  href={item.href}
                  ref={(el: HTMLAnchorElement | null) => {
                    itemRefs.current[i] = el
                  }}
                  className="group flex items-center gap-4 px-6 sm:gap-8 lg:px-10"
                  style={{ height: ITEM_HEIGHT, scrollSnapAlign: 'center' }}
                  animate={{ scale, opacity }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                >
                  {/* Dynamic Color Icon Container */}
                  <motion.span
                    animate={{
                      backgroundColor: isActive ? item.color : '#ffffff', 
                      color: isActive ? '#ffffff' : item.lightColor, 
                      boxShadow: isActive ? `0 10px 25px -5px ${item.color}66` : '0 2px 10px rgba(0,0,0,0.02)'
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex size-12 shrink-0 items-center justify-center rounded-2xl sm:size-14"
                  >
                    <Icon className="size-5 sm:size-6" />
                  </motion.span>

                  {/* Text Details */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <motion.h3
                      animate={{ color: isActive ? item.color : '#64748b' }} 
                      transition={{ duration: 0.3 }}
                      className={cn(
                        'truncate font-extrabold tracking-tight transition-colors',
                        isActive ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                      )}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p
                      animate={{ color: isActive ? '#334155' : '#94a3b8' }} 
                      transition={{ duration: 0.3 }}
                      className="truncate text-xs font-semibold sm:max-w-[220px] md:max-w-xs sm:text-sm"
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  {/* Dynamic Action Arrow */}
                  <motion.span
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      x: isActive ? 0 : -10,
                      scale: isActive ? 1 : 0.5,
                      backgroundColor: item.color
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="ml-auto hidden shrink-0 rounded-full p-2.5 text-white shadow-md sm:block"
                  >
                    <ArrowUpRight className="size-4" />
                  </motion.span>
                </MotionLink>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}