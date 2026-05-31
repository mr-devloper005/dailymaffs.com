import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Create an account for this public site.' })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#007979] text-[#f2f2f2]">
        <section className="mx-auto grid min-h-[calc(100vh-13rem)] max-w-[1360px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-[1rem] border border-white/20 bg-white/10 p-6 shadow-[0_16px_34px_rgba(0,0,0,0.3)] backdrop-blur sm:p-8">
            <h1 className="font-display text-4xl font-bold tracking-[-0.03em]">Create account</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-white/75">Already a member? <Link href="/login" className="font-extrabold text-white underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/70">Join the community</p>
            <h2 className="font-display mt-4 max-w-xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Create your account and keep exploring.</h2>
            <p className="mt-5 max-w-lg text-sm leading-8 text-white/75">Save your profile, follow categories, and stay connected to the latest stories and resources.</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}


