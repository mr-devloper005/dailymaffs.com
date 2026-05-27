import { slot4BrandConfig } from './brand.config'

export type Slot4VisualPreset =
  | 'editorial-paper'
  | 'luxury-atelier'
  | 'brutalist-index'
  | 'organic-journal'
  | 'tech-directory'
  | 'retro-bulletin'
  | 'visual-gallery'

export const visualPresets = {
  'editorial-paper': {
    label: 'Editorial Paper',
    mood: 'clean and publication-like',
    fontDirection: 'display headlines with quiet sans body',
    colors: {
      background: '#FFF0E4',
      foreground: '#007979',
      muted: '#666666',
      primary: '#007979',
      accent: '#007979',
      surface: '#ffffff',
    },
    shape: 'soft corners and narrow borders',
  },
  'luxury-atelier': {
    label: 'Luxury Atelier',
    mood: 'high-contrast and dramatic',
    fontDirection: 'bold display with compact body text',
    colors: {
      background: '#007979',
      foreground: '#f0f0f0',
      muted: '#bdbdbd',
      primary: '#f0f0f0',
      accent: '#f0f0f0',
      surface: '#1b1b1b',
    },
    shape: 'dark panels and defined borders',
  },
  'brutalist-index': {
    label: 'Brutalist Index',
    mood: 'bold, hard, memorable',
    fontDirection: 'tight headline rhythm',
    colors: {
      background: '#f2f2f2',
      foreground: '#0f0f0f',
      muted: '#555555',
      primary: '#007979',
      accent: '#000000',
      surface: '#ffffff',
    },
    shape: 'square cards and visible outlines',
  },
  'organic-journal': {
    label: 'Organic Journal',
    mood: 'soft and natural',
    fontDirection: 'humanist reading flow',
    colors: {
      background: '#ecebe8',
      foreground: '#151515',
      muted: '#666666',
      primary: '#222222',
      accent: '#1d1d1d',
      surface: '#ffffff',
    },
    shape: 'rounded cards with clear whitespace',
  },
  'tech-directory': {
    label: 'Tech Directory',
    mood: 'compact, fast, and practical',
    fontDirection: 'clean sans hierarchy',
    colors: {
      background: '#eff1f2',
      foreground: '#101010',
      muted: '#676767',
      primary: '#007979',
      accent: '#007979',
      surface: '#ffffff',
    },
    shape: 'grid cards with precise spacing',
  },
  'retro-bulletin': {
    label: 'Retro Bulletin',
    mood: 'playful and tactile',
    fontDirection: 'bold headings with sharp labels',
    colors: {
      background: '#f1ece5',
      foreground: '#007979',
      muted: '#6b6158',
      primary: '#007979',
      accent: '#007979',
      surface: '#fbfaf7',
    },
    shape: 'framed modules and offset tags',
  },
  'visual-gallery': {
    label: 'Visual Gallery',
    mood: 'immersive and image-forward',
    fontDirection: 'clean heavy display',
    colors: {
      background: '#131313',
      foreground: '#f6f6f6',
      muted: '#adadad',
      primary: '#f6f6f6',
      accent: '#f6f6f6',
      surface: '#1d1d1d',
    },
    shape: 'dark cards and media emphasis',
  },
} as const

export const visualSystem = {
  productKind: slot4BrandConfig.productKind,
  recommendedPreset:
    slot4BrandConfig.productKind === 'visual'
      ? 'visual-gallery'
      : slot4BrandConfig.productKind === 'editorial'
        ? 'editorial-paper'
        : slot4BrandConfig.productKind === 'directory'
          ? 'tech-directory'
          : 'organic-journal',
  radius: {
    sm: '0.5rem',
    md: '0.9rem',
    lg: '1rem',
    xl: '1.2rem',
  },
  motion: {
    pageLoad: 'animate-in fade-in slide-in-from-bottom-4 duration-500',
    cardHover: 'transition duration-300 hover:-translate-y-1 hover:shadow-xl',
    softHover: 'transition duration-300 hover:opacity-90',
    reduceMotionSafe: 'motion-reduce:transform-none motion-reduce:transition-none',
  },
  typography: {
    eyebrow: 'text-[11px] font-extrabold uppercase tracking-[0.2em]',
    heroTitle: 'text-5xl font-bold tracking-[-0.03em] sm:text-6xl',
    sectionTitle: 'text-3xl font-bold tracking-[-0.03em] sm:text-4xl',
    body: 'text-base leading-8',
    caption: 'text-xs font-bold uppercase tracking-[0.14em]',
  },
  surfaces: {
    glass: 'border border-[#007979]/15 bg-white/90 backdrop-blur-xl',
    paper: 'border border-[#007979]/15 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.08)]',
    quiet: 'border border-[#007979]/15 bg-[#007979]/[0.03]',
    dark: 'border border-white/15 bg-[#007979]/90 shadow-[0_20px_40px_rgba(0,0,0,0.3)]',
  },
  layout: {
    page: 'mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-14 lg:py-16',
    cardGrid: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
  },
} as const

export function getVisualPreset(name: Slot4VisualPreset = visualSystem.recommendedPreset as Slot4VisualPreset) {
  return visualPresets[name]
}


