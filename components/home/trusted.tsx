import { Reveal } from '@/components/reveal'

const companies = [
  'Northwind',
  'Acme Corp',
  'Vertex',
  'Lumina',
  'Stratus',
  'Meridian',
  'Cobalt',
  'Everfield',
]

const stats = [
  { value: '2,000+', label: 'Enterprise customers' },
  { value: '40M+', label: 'Tasks automated monthly' },
  { value: '99.99%', label: 'Platform uptime' },
  { value: '65%', label: 'Average cost reduction' },
]

export function Trusted() {
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by high-growth teams and global enterprises
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((c) => (
            <span
              key={c}
              className="text-center text-lg font-semibold tracking-tight text-muted-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
