'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

export type FaqItem = { question: string; answer: string }

export function Faq({
  items,
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description,
}: {
  items: FaqItem[]
  eyebrow?: string
  title?: string
  description?: string
}) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground">
                    {item.question}
                  </span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-muted-foreground transition-transform',
                      isOpen && 'rotate-45 text-primary',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
