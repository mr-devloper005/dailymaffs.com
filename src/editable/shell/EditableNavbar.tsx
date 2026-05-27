'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import siteLogo from '@/editable/theme/site-logo.png'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const navVars = {
    '--editable-nav-bg': '#FFF0E4',
    '--editable-nav-text': '#007979',
    '--editable-nav-active': '#007979',
    '--editable-nav-active-text': '#ffffff',
    '--editable-cta-bg': '#007979',
    '--editable-cta-text': '#ffffff',
    '--editable-search-bg': '#ffffff',
    '--editable-border': 'rgba(0,0,0,0.14)',
    '--editable-container': '1360px',
  } as CSSProperties

  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label.toUpperCase(), href: task.route })),
    [],
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
      <div className="border-b border-[var(--editable-border)]">
        <div className="mx-auto flex min-h-[84px] w-full max-w-[var(--editable-container)] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src={siteLogo} alt={`${SITE_CONFIG.name} logo`} width={56} height={56} className="h-14 w-14 rounded-full object-cover" priority />
            <span className="font-display text-4xl font-bold leading-none tracking-[-0.04em]">{SITE_CONFIG.name.replace('.com', '')}</span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <Link href="/login" className="rounded-full px-3 py-2 text-sm font-bold hover:bg-[#007979]/5">Login</Link>
            <Link href="/signup" className="rounded-full border border-[#007979] px-4 py-2 text-sm font-extrabold hover:bg-[#007979] hover:text-white">Join</Link>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex min-h-[66px] w-full max-w-[var(--editable-container)] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white p-2" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
          {navItems.slice(0, 7).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-[13px] font-extrabold tracking-[0.08em] transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-[#007979]/6'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <form action="/search" className="ml-auto flex items-center rounded-full border border-[#007979] bg-white px-3 py-2">
          <Search className="h-4 w-4 opacity-55" />
          <input name="q" type="search" placeholder="Search" className="w-28 bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-current/45 sm:w-40" />
        </form>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <div className="mb-3 flex items-center gap-3">
            <Image src={siteLogo} alt={`${SITE_CONFIG.name} logo`} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-2xl font-bold tracking-[-0.04em]">{SITE_CONFIG.name.replace('.com', '')}</span>
          </div>
          <div className="grid gap-2">
            {[{ label: 'HOME', href: '/' }, ...navItems, { label: 'CONTACT', href: '/contact' }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-extrabold tracking-[0.08em]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Link href="/login" className="inline-flex items-center gap-1 rounded-full border border-[var(--editable-border)] bg-white px-4 py-2 text-sm font-bold"><LogIn className="h-4 w-4" />Login</Link>
            <Link href="/signup" className="inline-flex items-center gap-1 rounded-full border border-[#007979] bg-[#007979] px-4 py-2 text-sm font-bold text-white"><UserPlus className="h-4 w-4" />Join</Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

