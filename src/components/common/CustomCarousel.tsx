'use client';

import { Carousel, CarouselProps } from 'antd'

const CustomCarousel = ({ children, ...props }: CarouselProps) => {
  return (
    <Carousel
      arrows
      draggable
      dots={{
        className:
          '!-bottom-4 [&_li]:bg-[#1c74bc] [&_.slick-active]:after:!bg-[#1c74bc]',
      }}
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
