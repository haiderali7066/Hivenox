'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { solutions, products, industries } from '@/lib/site-data'
import { HivenoxLogo } from '@/components/hivenox-logo'

type MenuKey = 'solutions' | 'products' | 'industries' | null

const simpleLinks = [
  { title: 'Pricing', href: '/pricing' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-background',
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Hivenox home">
          <HivenoxLogo className="h-7 w-auto text-foreground" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <MenuTrigger
            label="Solutions"
            active={openMenu === 'solutions'}
            onEnter={() => setOpenMenu('solutions')}
          />
          <MenuTrigger
            label="Products"
            active={openMenu === 'products'}
            onEnter={() => setOpenMenu('products')}
          />
          <MenuTrigger
            label="Industries"
            active={openMenu === 'industries'}
            onEnter={() => setOpenMenu('industries')}
          />
          {simpleLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={() => setOpenMenu(null)}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                pathname === l.href && 'text-foreground',
              )}
            >
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
          >
            Book a demo
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mega menu */}
      {openMenu && (
        <div className="absolute inset-x-0 top-16 hidden border-b border-border bg-background/95 backdrop-blur-xl lg:block">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {openMenu === 'solutions' && <ColumnGrid items={solutions} columns={3} />}
            {openMenu === 'products' && <ColumnGrid items={products} columns={4} />}
            {openMenu === 'industries' && <ColumnGrid items={industries} columns={3} compact />}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="space-y-6 px-4 py-6">
            <MobileGroup title="Solutions" items={solutions} />
            <MobileGroup title="Products" items={products} />
            <MobileGroup title="Industries" items={industries} />
            <div className="flex flex-col gap-1">
              {simpleLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground"
                >
                  {l.title}
                </Link>
              ))}
            </div>
            <Link
              href="/book-demo"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background"
            >
              Book a demo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function MenuTrigger({
  label,
  active,
  onEnter,
}: {
  label: string
  active: boolean
  onEnter: () => void
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onClick={onEnter}
      className={cn(
        'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {label}
      <ChevronDown
        className={cn('size-4 transition-transform', active && 'rotate-180')}
      />
    </button>
  )
}

function ColumnGrid({
  items,
  columns,
  compact,
}: {
  items: typeof solutions
  columns: number
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'grid gap-2',
        columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3',
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
          >
            {Icon && (
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-4.5" />
              </span>
            )}
            <span>
              <span className="block text-sm font-semibold text-foreground">
                {item.title}
              </span>
              {!compact && item.description && (
                <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                  {item.description}
                </span>
              )}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

function MobileGroup({
  title,
  items,
}: {
  title: string
  items: typeof solutions
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border pb-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-2 text-base font-semibold text-foreground"
      >
        {title}
        <ChevronDown className={cn('size-5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="mt-1 grid grid-cols-2 gap-1">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
