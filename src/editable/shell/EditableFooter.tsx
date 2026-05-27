import Link from 'next/link'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import siteLogo from '@/editable/theme/site-logo.png'

export function EditableFooter() {
  const footerVars = {
    '--editable-footer-bg': '#FFE0C5',
    '--editable-footer-text': '#007979',
  } as CSSProperties

  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()

  return (
    <footer style={footerVars} className="border-t border-[#007979]/15 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src={siteLogo} alt={`${SITE_CONFIG.name} logo`} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <p className="font-display text-4xl font-bold tracking-[-0.03em]">{SITE_CONFIG.name.replace('.com', '')}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 opacity-70">A reading-first destination with articles, collections, and practical resources across every category.</p>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] opacity-60">Sections</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] opacity-60">Information</h3>
          <div className="mt-4 grid gap-2">
            <Link href="/about" className="text-sm font-bold opacity-80 hover:opacity-100">About</Link>
            <Link href="/contact" className="text-sm font-bold opacity-80 hover:opacity-100">Contact</Link>
            <Link href="/comments" className="text-sm font-bold opacity-80 hover:opacity-100">Comments</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#007979]/15 px-4 py-5 text-center text-xs font-bold opacity-65">
        © {year} {SITE_CONFIG.name}. Curated for thoughtful reading.
      </div>
    </footer>
  )
}

