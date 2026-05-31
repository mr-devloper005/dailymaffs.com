import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: 'Login page for this public site.' })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#FFF0E4] text-[#007979]">
        <section className="mx-auto grid min-h-[calc(100vh-13rem)] max-w-[1360px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-60">Member access</p>
            <h1 className="font-display mt-4 max-w-xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Welcome back.</h1>
            <p className="mt-4 max-w-lg text-sm leading-8 text-black/70">Sign in to continue your reading and submissions. This local flow stays browser-based for safe testing.</p>
          </div>
          <div className="rounded-[1rem] border border-[#007979]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.1)] sm:p-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em]">Login</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-black/70">New here? <Link href="/signup" className="font-extrabold underline-offset-4 hover:underline">Create an account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}


