import Link from 'next/link'
import { ArrowRight, Linkedin, Twitter, Github, Youtube } from '@/components/social-icons'
import { HivenoxLogo } from '@/components/hivenox-logo'

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'Hivenox ERP', href: '/products' },
      { label: 'Hivenox CRM', href: '/products' },
      { label: 'Hivenox HRMS', href: '/products' },
      { label: 'AI Sales Agent', href: '/products' },
      { label: 'Voice AI', href: '/products' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI Workers', href: '/solutions' },
      { label: 'Intelligent Automation', href: '/solutions' },
      { label: 'Business Intelligence', href: '/solutions' },
      { label: 'Results-as-a-Service', href: '/solutions' },
      { label: 'Custom Development', href: '/solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a demo', href: '/book-demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/contact' },
      { label: 'Documentation', href: '/contact' },
      { label: 'Case studies', href: '/contact' },
      { label: 'Integrations', href: '/contact' },
    ],
  },
]

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <HivenoxLogo className="text-ink-foreground" />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              The AI enterprise platform that unifies your business and puts
              autonomous AI Workers to work alongside your team.
            </p>
            <form className="mt-6">
              <label className="text-xs font-medium text-ink-muted" htmlFor="footer-email">
                Get product updates
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-lg border border-ink-border bg-white/5 px-3 text-sm text-ink-foreground placeholder:text-ink-muted focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-ink-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Hivenox, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-ink-border text-ink-muted transition-colors hover:border-primary hover:text-ink-foreground"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
