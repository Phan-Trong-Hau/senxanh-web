'use client'

import { Carousel, CarouselProps } from 'antd'
import classNames from 'classnames'

const CustomCarousel = ({ children, ...props }: CarouselProps) => {
  return (
    <div className='px-8'>
      <Carousel
        arrows
        draggable
        dots={{
          className:
            '!-bottom-8 [&_li]:bg-[#1c74bc] [&_.slick-active]:after:!bg-[#1c74bc]',
        }}
        rootClassName={classNames('!pb-8', props.rootClassName)}
        {...props}>
        {children}
      </Carousel>
    </div>
  )
}

export default CustomCarousel
