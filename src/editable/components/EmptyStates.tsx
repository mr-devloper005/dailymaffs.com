import Link from 'next/link'
import { ArrowRight, SearchX } from 'lucide-react'
import { cn } from '@/lib/utils'

type EmptyStateProps = {
  title?: string
  description?: string
  actionLabel?: string
  actionHref?: string
  className?: string
}

export function EmptyState({
  title = 'Nothing published here yet',
  description = 'Fresh posts will appear here automatically once this section has published content.',
  actionLabel = 'Back to home',
  actionHref = '/',
  className,
}: EmptyStateProps) {
  return (
    <section className={cn('rounded-[1rem] border border-black/15 bg-white p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.06)]', className)}>
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-black/5">
        <SearchX className="h-6 w-6" />
      </div>
      <h2 className="font-display mt-5 text-3xl font-bold tracking-[-0.02em]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-black/65">{description}</p>
      <Link href={actionHref} className="mt-6 inline-flex items-center gap-2 rounded-full border border-black px-5 py-3 text-sm font-extrabold transition hover:bg-black hover:text-white">
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}

export function TaskEmptyState({ taskLabel = 'posts', className }: { taskLabel?: string; className?: string }) {
  return (
    <EmptyState
      className={className}
      title={`No ${taskLabel} available yet`}
      description={`Published ${taskLabel} will appear here automatically. This layout remains ready even when the feed is empty.`}
      actionLabel="Explore the site"
      actionHref="/"
    />
  )
}

export function ContactSuccessState({ className }: { className?: string }) {
  return (
    <EmptyState
      className={className}
      title="Message received"
      description="Thanks for reaching out. Your request has been sent and recorded."
      actionLabel="Return home"
      actionHref="/"
    />
  )
}

