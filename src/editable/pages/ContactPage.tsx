'use client'

import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

function getLanes(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return [
      { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify details, and launch your business profile.' },
      { icon: Phone, title: 'Partnership support', body: 'Coordinate campaigns and growth-focused collaborations.' },
      { icon: MapPin, title: 'Coverage requests', body: 'Request new categories or location-based expansion.' },
    ]
  }

  if (kind === 'visual') {
    return [
      { icon: ImageIcon, title: 'Creator collaborations', body: 'Pitch visual projects, features, and curated showcases.' },
      { icon: Sparkles, title: 'Licensing', body: 'Ask about image usage rights and custom visual requests.' },
      { icon: Mail, title: 'Media kits', body: 'Request kits, feature bundles, and editorial promotion options.' },
    ]
  }

  if (kind === 'editorial') {
    return [
      { icon: FileText, title: 'Editorial submissions', body: 'Send essays, explainers, and long-form article pitches.' },
      { icon: Mail, title: 'Newsletter opportunities', body: 'Discuss newsletter sponsorships and collaborations.' },
      { icon: Sparkles, title: 'Contributor support', body: 'Get help with publishing workflow and formatting.' },
    ]
  }

  return [
    { icon: Bookmark, title: 'Collection submissions', body: 'Suggest useful resources and curated links for publication.' },
    { icon: Mail, title: 'Resource partnerships', body: 'Collaborate on guides, resources, and evergreen pages.' },
    { icon: Sparkles, title: 'Curator support', body: 'Ask for help with collection and topic organization.' },
  ]
}

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const lanes = getLanes(productKind)

  return (
    <EditableSiteShell>
      <main className="bg-[#FFF0E4] px-4 py-12 text-[#007979] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1360px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-60">{pagesContent.contact.eyebrow}</p>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-[-0.03em]">{pagesContent.contact.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-black/70">{pagesContent.contact.description}</p>
            <div className="mt-7 space-y-3">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-[1rem] border border-[#007979]/15 bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="font-display mt-2 text-2xl font-bold tracking-[-0.02em]">{lane.title}</h2>
                  <p className="mt-1 text-sm leading-7 text-black/70">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1rem] border border-[#007979]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.08)] sm:p-8">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em]">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}


