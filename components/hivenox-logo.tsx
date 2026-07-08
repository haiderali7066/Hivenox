import { cn } from '@/lib/utils'

export function HivenoxLogo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path
          d="M10 9v14M10 16h12M22 9v14"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">Hivenox</span>
    </span>
  )
}
