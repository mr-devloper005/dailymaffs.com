import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#FFF0E4',
  '--slot4-page-text': '#0c3f3f',
  '--slot4-panel-bg': '#FFE0C5',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#2d6e6e',
  '--slot4-soft-muted-text': '#4f8b8b',
  '--slot4-accent': '#007979',
  '--slot4-accent-fill': '#007979',
  '--slot4-accent-soft': '#24B1B1',
  '--slot4-dark-bg': '#007979',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#FFE0C5',
  '--slot4-cream': '#FFF0E4',
  '--slot4-warm': '#FFE0C5',
  '--slot4-lavender': '#FFF0E4',
  '--slot4-gray': '#FFF0E4',
  '--slot4-body-gradient': 'linear-gradient(180deg, #FFF0E4 0%, #FFE0C5 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[#007979]/25',
  darkBorder: 'border-white/30',
  shadow: 'shadow-[0_8px_24px_rgba(0,121,121,0.12)]',
  shadowStrong: 'shadow-[0_18px_42px_rgba(0,121,121,0.24)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,121,121,0.06),rgba(0,121,121,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-14 lg:py-16',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[280px] shrink-0 snap-start sm:w-[320px]',
  },
  type: {
    eyebrow: 'text-[11px] font-extrabold uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl',
    sectionTitle: 'text-3xl font-black tracking-[-0.03em] sm:text-4xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-[1.1rem] border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-[1rem] border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-[1rem] ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center rounded-full border border-[#007979] bg-[#007979] px-7 py-3 text-sm font-extrabold text-white transition hover:bg-[#24B1B1]`,
    secondary: `inline-flex items-center justify-center rounded-full border ${editablePalette.border} bg-white px-7 py-3 text-sm font-extrabold ${editablePalette.surfaceText} transition hover:bg-[#FFF0E4]`,
    accent: `inline-flex items-center justify-center rounded-full border border-[#24B1B1] bg-[#24B1B1] px-7 py-3 text-sm font-extrabold text-white transition hover:bg-[#007979]`,
  },
  media: {
    frame: `relative overflow-hidden rounded-[0.95rem] ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,121,121,0.24)]',
    fade: 'transition duration-300 hover:opacity-90',
  },
} as const

export const aiLayoutRules = [
  'Keep only src/editable/** changes for redesign work.',
  'Preserve fetch and task routing behavior by keeping route and task exports unchanged.',
  'Use postHref() and buildPostUrl() so dynamic routes keep working.',
  'Always provide visual fallbacks when post image, category, or summary is missing.',
  'Use at least five card patterns across the homepage and task pages.',
  'Maintain strong readability on mobile with clean spacing and no horizontal overflow.',
] as const
