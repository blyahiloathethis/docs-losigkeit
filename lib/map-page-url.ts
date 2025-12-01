import { parsePageId } from 'notion-utils'
import { getCanonicalPageId } from './get-canonical-page-id'
import { type Site } from './types'

export const mapPageUrl =
  (site: Site, recordMap: any, searchParams: URLSearchParams) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })!

    if (pageUuid === site.rootNotionPageId) {
      return createUrl('/', searchParams)
    } else {
      return createUrl(`/${getCanonicalPageId(pageUuid, { uuid: true })}`, searchParams)
    }
  }

export const getCanonicalPageUrl =
  (site: Site, recordMap: any) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })!

    if (pageUuid === site.rootNotionPageId) {
      return `https://${site.domain}`
    } else {
      return `https://${site.domain}/${getCanonicalPageId(pageUuid, { uuid: true })}`
    }
  }

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}