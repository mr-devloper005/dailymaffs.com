import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Daily reading and discovery',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Daily reading and discovery',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Articles', href: '/article' },
      { label: 'Images', href: '/image' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse now', href: '/' },
      secondary: { label: 'Contact', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Clean sections and practical stories',
    description: 'A structured reading website covering articles, collections, listings, profiles, and resources.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Articles', href: '/article' },
          { label: 'Listings', href: '/listing' },
          { label: 'Images', href: '/image' },
          { label: 'Documents', href: '/pdf' },
        ],
      },
      {
        title: 'Pages',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Designed for easy reading and browsing.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const

