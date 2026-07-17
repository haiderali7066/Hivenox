import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineArrowRight, AiOutlineTwitter } from 'react-icons/ai'

/* ------------------------------------------------------------------ */
/*  Sitemap data                                                        */
/* ------------------------------------------------------------------ */

const footerColumns: { title: string; href?: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Insights (Blog)', href: '/insights' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Book Demo', href: '/book-demo' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    href: '/solutions',
    links: [
      { label: 'Results-as-a-Service (RaaS)', href: '/solutions/raas' },
      { label: 'Business Intelligence', href: '/solutions/business-intelligence' },
      { label: 'Intelligent Automation', href: '/solutions/intelligent-automation' },
      { label: 'Custom Software Development', href: '/solutions/custom-development' },
      { label: 'All Solutions', href: '/solutions' },
    ],
  },
  {
    title: 'AI Workers',
    href: '/ai-workers',
    links: [
      { label: 'Social Worker', href: '/ai-workers/social' },
      { label: 'Content Worker', href: '/ai-workers/content' },
      { label: 'Growth Worker', href: '/ai-workers/growth' },
      { label: 'Video Worker', href: '/ai-workers/video' },
      { label: 'SEO Worker', href: '/ai-workers/seo' },
      { label: 'Advanced Analytics Worker', href: '/ai-workers/advanced-analytics' },
      { label: 'Enterprise Growth OS', href: '/ai-workers/enterprise-growth-os' },
      { label: 'All AI Workers', href: '/ai-workers' },
    ],
  },
  {
    title: 'All Products',
    href: '/products',
    links: [
      { label: 'Hivenox ERP', href: '/products/hivenox-erp' },
      { label: 'Hivenox CRM', href: '/products/hivenox-crm' },
      { label: 'Hivenox HRMS', href: '/products/hivenox-hrms' },
      { label: 'Hivenox Books', href: '/products/hivenox-books' },
      { label: 'Hivenox SalesFlow', href: '/products/hivenox-salesflow' },
      { label: 'Hivenox Desk', href: '/products/hivenox-desk' },
      { label: 'Hivenox Ops', href: '/products/hivenox-ops' },
      { label: 'Hivenox AI Sales Agent', href: '/products/ai-sales-agent' },
      { label: 'Hivenox AI Support Agent', href: '/products/ai-support-agent' },
      { label: 'Hivenox AI Recruiter', href: '/products/ai-recruiter' },
      { label: 'Hivenox Voice AI', href: '/products/voice-ai' },
      { label: 'Hivenox Insights AI', href: '/products/insights-ai' },
      { label: 'All Apps', href: '/products' },
    ],
  },
  {
    title: 'ERP Apps',
    href: '/erp',
    links: [
      { label: 'CRM', href: '/erp/crm' },
      { label: 'HRMS', href: '/erp/hrms' },
      { label: 'Inventory Management', href: '/erp/inventory' },
      { label: 'Accounting & Finance', href: '/erp/accounting' },
      { label: 'Operations Management', href: '/erp/operations' },
      { label: 'Analytics & Reporting', href: '/erp/analytics' },
      { label: 'All Apps', href: '/erp' },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
    links: [
      { label: 'Healthcare & Clinics', href: '/industries/healthcare' },
      { label: 'Salons & Wellness', href: '/industries/salons-wellness' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Retail & E-commerce', href: '/industries/retail' },
      { label: 'Restaurants & Cafés', href: '/industries/restaurants' },
      { label: 'Agencies', href: '/industries/agencies' },
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'All Industries', href: '/industries' },
    ],
  },
]

const socials = [
  { icon: AiFillLinkedin, href: '#', label: 'LinkedIn' },
  { icon: AiOutlineTwitter, href: '#', label: 'Twitter' },
  { icon: AiFillGithub, href: '#', label: 'GitHub' },
  { icon: AiFillYoutube, href: '#', label: 'YouTube' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
]

/* ------------------------------------------------------------------ */
/*  Background — pure CSS keyframes, no JS, no framer-motion            */
/* ------------------------------------------------------------------ */

function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes footerOrbA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(50px, -35px, 0) scale(1.08); }
        }
        @keyframes footerOrbB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-40px, 45px, 0) scale(1.1); }
        }
        @keyframes footerFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-orb-a { animation: footerOrbA 24s ease-in-out infinite; }
        .footer-orb-b { animation: footerOrbB 20s ease-in-out infinite; }
        .footer-fade { opacity: 0; animation: footerFadeIn 0.6s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .footer-orb-a, .footer-orb-b { animation: none; }
          .footer-fade { opacity: 1; animation: none; }
        }
      `}</style>

      <div
        className="footer-orb-a absolute -left-[10%] -top-[15%] h-[480px] w-[480px] rounded-full bg-blue-300/20 blur-[90px]"
        style={{ willChange: 'transform' }}
      />
      <div
        className="footer-orb-b absolute -right-[10%] top-[10%] h-[520px] w-[520px] rounded-full bg-cyan-300/20 blur-[90px]"
        style={{ willChange: 'transform' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer — Server Component: no 'use client', no hooks, no framer      */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-[#fafafa] text-slate-600">
      <FooterBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-8 lg:pb-12 lg:pt-28">
        {/* Brand & newsletter */}
        <div className="footer-fade mb-14 flex flex-col gap-8 border-b border-slate-200 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-sm">
            <div className="flex w-fit items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <span className="text-sm font-bold">H</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">HIVENOX</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              The AI enterprise platform that unifies your business and puts autonomous AI Workers to work alongside your team.
            </p>
          </div>

          <form action="/api/subscribe" method="POST" className="w-full max-w-sm">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400" htmlFor="footer-email">
              Subscribe to updates
            </label>
            <div className="mt-3 flex items-center gap-2">
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-slate-300/70 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 px-5 text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                <AiOutlineArrowRight className="size-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Sitemap columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col, i) => (
            <div key={col.title} className="footer-fade" style={{ animationDelay: `${i * 60}ms` }}>
              {col.href ? (
                <Link href={col.href} className="mb-5 inline-block text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600">
                  {col.title}
                </Link>
              ) : (
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">{col.title}</h3>
              )}
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="inline-block text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-fade mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 lg:flex-row lg:items-end">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <div className="mb-2 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Hivenox, Inc. All rights reserved.
              <span className="mx-2 hidden text-slate-300 md:inline">|</span>
              Developed by{' '}
              <a
                href="https://devntomsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 underline decoration-slate-300 decoration-1 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
              >
                Devntoms Solutions
              </a>
            </p>
          </div>

          <div className="mt-2 flex items-center gap-3 lg:mt-0">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/10"
                >
                  <Icon className="size-[18px] transition-transform group-hover:scale-110" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}