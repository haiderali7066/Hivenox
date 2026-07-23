import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import SmoothScroll from '@/components/SmoothScroll'

import { routing } from '@/i18n/routing'

import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Hivenox — The AI Enterprise Platform',
    template: '%s — Hivenox',
  },
  description:
    'Hivenox is the premium AI enterprise platform unifying ERP, CRM, and autonomous AI Workers to run your entire business intelligently.',
  generator: 'Devntom Solutions',
  keywords: [
    'AI enterprise platform',
    'ERP software',
    'CRM software',
    'AI Workers',
    'business automation',
    'Hivenox',
  ],
  openGraph: {
    title: 'Hivenox — The AI Enterprise Platform',
    description:
      'Unify ERP, CRM, and autonomous AI Workers on one intelligent platform.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  // Make sure the locale is valid
  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound()
  }

  const messages = await getMessages()

  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />

          <SmoothScroll />

          <main>{children}</main>

          <SiteFooter />

          {process.env.NODE_ENV === 'production' && <Analytics />}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}