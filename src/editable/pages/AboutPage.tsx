import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#FFF0E4] px-4 py-12 text-[#007979] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1360px] gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1rem] border border-[#007979]/15 bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:p-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-60">{pagesContent.about.badge}</p>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-[-0.03em]">About {SITE_CONFIG.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black/75">{pagesContent.about.description}</p>
            <div className="mt-6 space-y-4 text-sm leading-8 text-black/75">
              {pagesContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-[1rem] border border-[#007979]/15 bg-white p-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">{value.title}</h2>
                <p className="mt-2 text-sm leading-7 text-black/70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}


