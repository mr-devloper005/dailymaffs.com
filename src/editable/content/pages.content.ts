import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Daily stories, guides, and useful reads',
      description: 'Browse articles, visuals, and resources through a clean magazine-style layout.',
      openGraphTitle: 'Daily stories, guides, and useful reads',
      openGraphDescription: 'Discover new stories, useful resources, and curated sections in one place.',
      keywords: ['articles', 'reading', 'guides', 'resources'],
    },
    hero: {
      badge: 'Fresh picks every day',
      title: ['A smarter way to browse', 'stories and useful pages.'],
      description: 'DailyMaffs brings together articles, visuals, profiles, and resources in a clear, readable structure.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Explore visuals', href: '/image' },
      searchPlaceholder: 'Search stories and topics',
      focusLabel: 'Focus',
      featureCardBadge: 'editor pick',
      featureCardTitle: 'A cover-style homepage that changes with current stories.',
      featureCardDescription: 'The latest stories and sections flow into one discoverable reading surface.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for clear reading and quick discovery.',
      paragraphs: [
        'This site is designed to help readers move between categories without getting lost.',
        'Stories, visuals, and resources are presented in structured sections with clean navigation.',
        'Every page keeps the same reading rhythm so the experience stays consistent.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Magazine-style homepage with varied card formats.',
        'Task pages with readable archive layouts and detail pages.',
        'Simple section navigation with reliable routes.',
        'Mobile-friendly card and typography scaling.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Keep exploring',
      title: 'Read by topic, format, and interest.',
      description: 'Use sections, search, and featured picks to find your next read quickly.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse recent posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A cleaner way to navigate modern content.',
    description: `${slot4BrandConfig.siteName} is built to make reading and browsing across multiple categories feel simple and consistent.`,
    paragraphs: [
      'The platform organizes different content formats into one visual system.',
      'Readers can move from article to visual to resource pages without friction.',
    ],
    values: [
      {
        title: 'Reading-first layout',
        description: 'Headlines, spacing, and typography are tuned for comfortable scanning.',
      },
      {
        title: 'Connected sections',
        description: 'Each category uses a consistent structure while keeping visual variety.',
      },
      {
        title: 'Reliable navigation',
        description: 'Route-friendly templates keep discovery smooth across the whole site.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Tell us what you need and we will route it to the right team.',
    description: 'Share your question, submission idea, or support request through the form below.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find stories, listings, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover posts from every active section of the site.',
      placeholder: 'Search by keyword, topic, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create content for every active section.',
      description: 'Choose the content type, add details, and prepare a clean post with images, links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the publishing workspace, save details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested profiles',
      fallbackDescription: 'Profile details will appear here when available.',
      visitButton: 'Visit site',
    },
  },
} as const

