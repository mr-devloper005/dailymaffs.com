import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Reading Desk',
    headline: 'Editorial stories and practical long-form reads.',
    description: 'Designed for articles, explainers, and thoughtful reading sessions.',
    filterLabel: 'Filter article topics',
    secondaryNote: 'Keep spacing generous and typography calm for long reads.',
    chips: ['Editorial', 'Long-form', 'Readable'],
  },
  classified: {
    eyebrow: 'Notice Board',
    headline: 'Fast-moving offers and classified posts.',
    description: 'Structured for quick scanning with clear action paths.',
    filterLabel: 'Filter classified category',
    secondaryNote: 'Highlight price, location, and condition up front.',
    chips: ['Fast scan', 'Offers', 'Direct action'],
  },
  sbm: {
    eyebrow: 'Saved Links',
    headline: 'Curated resources and useful bookmarks.',
    description: 'Presented as clean collections that stay easy to browse.',
    filterLabel: 'Filter collections',
    secondaryNote: 'Prioritize readability and quick link context.',
    chips: ['Resources', 'Collections', 'Reference'],
  },
  profile: {
    eyebrow: 'People & Profiles',
    headline: 'Profiles with clear identity and context.',
    description: 'Profile pages focus on people, expertise, and trust signals.',
    filterLabel: 'Filter profiles',
    secondaryNote: 'Lead with identity details before long text blocks.',
    chips: ['Identity', 'Trust', 'Discovery'],
  },
  pdf: {
    eyebrow: 'Document Shelf',
    headline: 'Downloadable files and readable summaries.',
    description: 'Document pages are structured for preview and retrieval.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Show file context and keep calls-to-action obvious.',
    chips: ['Documents', 'Downloads', 'Library'],
  },
  listing: {
    eyebrow: 'Business Directory',
    headline: 'Business listings organized for comparison.',
    description: 'Directory cards surface the details readers need quickly.',
    filterLabel: 'Filter listing category',
    secondaryNote: 'Keep contact and location details easy to spot.',
    chips: ['Directory', 'Compare', 'Practical'],
  },
  image: {
    eyebrow: 'Visual Gallery',
    headline: 'Image posts with a gallery-first rhythm.',
    description: 'Image archives emphasize visuals while preserving context.',
    filterLabel: 'Filter visuals',
    secondaryNote: 'Use media-first layouts with concise captions.',
    chips: ['Gallery', 'Visual-first', 'Immersive'],
  },
} satisfies Record<TaskKey, TaskPageVoice>

