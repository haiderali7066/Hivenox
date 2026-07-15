'use client'

import Link from 'next/link'
import { AiOutlineArrowRight, AiFillLinkedin, AiOutlineTwitter, AiFillGithub, AiFillYoutube } from 'react-icons/ai'
import { HivenoxLogo } from '@/components/hivenox-logo'

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'Hivenox ERP', href: '/products/hivenox-erp' },
      { label: 'Hivenox CRM', href: '/products/hivenox-crm' },
      { label: 'Hivenox HRMS', href: '/products/hivenox-hrms' },
      { label: 'AI Sales Agent', href: '/products/ai-sales-agent' },
      { label: 'Voice AI', href: '/products/voice-ai' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI Workers', href: '/solutions/ai-workers' },
      { label: 'Intelligent Automation', href: '/solutions/intelligent-automation' },
      { label: 'Business Intelligence', href: '/solutions/business-intelligence' },
      { label: 'Results-as-a-Service', href: '/solutions/results-as-a-service' },
      { label: 'Custom Development', href: '/solutions/custom-development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a Demo', href: '/book-demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Documentation', href: '/resources/docs' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Integrations', href: '/resources/integrations' },
    ],
  },
]

const socials = [
  { icon: AiFillLinkedin, href: '#', label: 'LinkedIn' },
  { icon: AiOutlineTwitter, href: '#', label: 'Twitter' },
  { icon: AiFillGithub, href: '#', label: 'GitHub' },
  { icon: AiFillYoutube, href: '#', label: 'YouTube' },
]

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid gap-16 lg:grid-cols-[1fr,2fr] mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <span className="font-bold text-xs">H</span> 
               </div>
               <span className="text-xl font-black tracking-tight text-white">HIVENOX</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The AI enterprise platform that unifies your business and puts autonomous AI Workers to work alongside your team.
            </p>
            <form className="mt-8">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="footer-email">
                Subscribe to updates
              </label>
              <div className="mt-3 flex items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-xl border border-slate-800 bg-white/5 px-4 text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <AiOutlineArrowRight className="size-5" />
                </button>
              </div>
            </form>
          </div>

          {/* COLUMNS */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
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

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Hivenox, Inc. All rights reserved.  Developed by Devntoms Solutions 
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex size-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800"
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