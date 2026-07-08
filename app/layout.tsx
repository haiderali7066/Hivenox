import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
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
  generator: 'Devntom solutions',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
