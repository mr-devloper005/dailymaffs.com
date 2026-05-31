import type { TaskKey } from '@/lib/site-config'

export const slot4TaskSupport = {
  article: true,
  classified: false,
  sbm: false,
  profile: false,
  pdf: false,
  listing: false,
  image: false,
} satisfies Record<TaskKey, boolean>

export const slot4TaskNotes = {
  article: 'Article pages and article detail routes',
  classified: 'Classified archive and detail routes',
  sbm: 'Bookmark archive and detail routes',
  profile: 'Profile archive and detail routes',
  pdf: 'PDF archive and detail routes',
  listing: 'Business listing archive and detail routes',
  image: 'Image archive and detail routes',
} satisfies Record<TaskKey, string>

