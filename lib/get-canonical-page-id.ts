import { parsePageId } from 'notion-utils'

export function getCanonicalPageId(
  pageId: string,
  { uuid = true }: { uuid?: boolean } = {}
): string | undefined {
  
  return parsePageId(pageId, { uuid }) ?? undefined
}
