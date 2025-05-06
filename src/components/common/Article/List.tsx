'use client'

import { Asset } from '@/utils/type'

import Carousel from '../Custom/Carousel'
import Article from './'

type ArticleType = {
  title: string
  description: string
  thumbnail: Asset
  slug: string
}

type Props = {
  title: string
  highlightTitle?: string
  articles: ArticleType[]
  path: string
  id?: string
}

const ListArticle = ({ title, highlightTitle, articles, path, id }: Props) => {
  const settings = {
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className='container scroll-mt-28' id={id}>
      <section className='section'>
        {highlightTitle ? (
          <h2 className='text-center text-2xl !font-bold md:text-4xl'>
            <span className='text-secondary'>{title}</span>
            <br />
            <span className='text-primary mt-1 inline-block'>{highlightTitle}</span>
          </h2>
        ) : (
          <h2 className='text-primary text-center text-2xl !font-bold md:text-4xl'>
            {title}
          </h2>
        )}
        <div className='mt-4 md:mt-8'>
          <Carousel {...settings}>
            {articles?.map(article => (
              <Article
                key={article.slug}
                {...article}
                link={`${path}/${article.slug}`}
                className='px-2'
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default ListArticle
