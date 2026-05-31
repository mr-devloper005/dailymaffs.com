import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#1d1d1d', surface: '#f2f2f2' }
      : productKind === 'editorial'
        ? { primary: '#007979', surface: '#FFF0E4' }
        : productKind === 'directory'
          ? { primary: '#007979', surface: '#FFF0E4' }
          : { primary: '#007979', surface: '#eeeeee' },
} as const


