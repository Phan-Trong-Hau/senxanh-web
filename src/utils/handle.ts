import { ArticleType, ArticleTypeReverse } from './constant'

export const getURLPageWithType = (type: string) => {
  if (type === ArticleTypeReverse.customer || type === ArticleTypeReverse.news)
    return `/${ArticleType[type as keyof typeof ArticleType]}`

  return `/knowledge?tab=${ArticleType[type as keyof typeof ArticleType]}`
}

export const getURLPageSlugWithType = ({
  type,
  slug,
}: {
  type: string
  slug: string
}) => {
  if (type === ArticleTypeReverse.customer || type === ArticleTypeReverse.news)
    return `/${ArticleType[type as keyof typeof ArticleType]}/${slug}`

  return `/knowledge/${slug}`
}
