import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { ArticleListCard, CompactIndexCard, EditorialFeatureCard, RailPostCard, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function HorizontalStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-[1rem] border border-[#007979]/15 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(0,0,0,0.12)] sm:grid-cols-[170px_minmax(0,1fr)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[0.8rem] bg-[#007979]/5 sm:aspect-auto sm:min-h-[132px]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] opacity-65">Editor's Pick {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-1 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.03em]">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/70">{getEditableExcerpt(post, 110)}</p>
      </div>
    </Link>
  )
}

function ImageFirstCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[1rem] border border-[#007979]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-[5/4] overflow-hidden bg-[#007979]/5">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-xl font-black leading-tight tracking-[-0.03em]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPost = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Discover ${taskLabel(primaryTask).toLowerCase()}`

  return (
    <section className="border-b border-[#007979]/10 bg-[#FFF0E4]">
      <div className="mx-auto grid max-w-[1360px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-14">
        <div>
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
          <h1 className={`${dc.type.heroTitle} font-display mt-3 max-w-3xl`}>{heroTitle}</h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-black/75">{pagesContent.home.hero.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>Browse {taskLabel(primaryTask)}</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact</Link>
          </div>
        </div>

        {heroPost ? (
          <div className="rounded-[1rem] border border-[#007979]/15 bg-white p-3 shadow-[0_10px_24px_rgba(0,0,0,0.1)]">
            <ImageFirstCard post={heroPost} href={postHref(primaryTask, heroPost, primaryRoute)} />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(1, 10)
  if (!railPosts.length) return null

  return (
    <section className="border-b border-[#007979]/10 bg-[#FFF0E4]">
      <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em]">Trending This Hour</h2>
          <Link href={primaryRoute} className="text-sm font-extrabold uppercase tracking-[0.12em]">View all</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {railPosts.map((post, index) => (
            <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[2]
  const list = posts.slice(3, 9)
  if (!lead) return null

  return (
    <section className="border-b border-[#007979]/10 bg-[#FFF0E4]">
      <div className="mx-auto grid max-w-[1360px] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <EditorialFeatureCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} label="Cover Story" />
        <div className="grid gap-4">
          {list.slice(0, 4).map((post, index) => (
            <HorizontalStoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts)
  const source = sectionPosts.length ? sectionPosts : posts
  const imageFirst = source.slice(0, 6)
  const listPosts = source.slice(6, 12)

  return (
    <section className="bg-[#FFF0E4]">
      <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.03em]">Search by Topic</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-black/70">Use categories or search to jump directly into the stories you care about.</p>
            <form action="/search" className="mt-5 flex max-w-md rounded-full border border-[#007979] bg-white p-2">
              <input name="q" placeholder="Search stories, guides, and updates" className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold outline-none" />
              <button className="inline-flex items-center gap-2 rounded-full bg-[#007979] px-5 py-2.5 text-sm font-extrabold text-white"><Search className="h-4 w-4" /> Search</button>
            </form>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {listPosts.slice(0, 6).map((post, index) => (
              <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-3xl font-bold tracking-[-0.03em]">Section Highlights</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {imageFirst.map((post) => (
              <ImageFirstCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          {source.slice(12, 16).map((post, index) => (
            <ArticleListCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="border-t border-[#007979]/10 bg-[#FFE0C5]">
      <div className="mx-auto max-w-[1360px] px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold tracking-[-0.03em]">Keep Reading Across Every Section</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-black/70">New stories and resources are updated throughout the day across articles, visuals, profiles, and collections.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/article" className={dc.button.primary}>Browse Articles <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/contact" className={dc.button.accent}>Send a message</Link>
        </div>
      </div>
    </section>
  )
}


