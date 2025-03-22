'use client';

import Image from 'next/image'

import { Asset } from '@/utils/type'

type Props = {
  background: Asset;
  logo: Asset;
  title: string;
  highlightTitle: string;
  description: string;
};

export default function HeroBanner({
  background,
  logo,
  title,
  highlightTitle,
  description,
}: Props) {
  return (
    <>
      <Image
        loader={({ src }) => src}
        src={background.url}
        alt="hero banner"
        layout="fixed"
        width={background.width}
        height={background.height}
        objectFit="contain"
        objectPosition="top"
        className="w-screen"
      />
      <div className="container text-center">
        <section className="section flex flex-col items-center justify-center text-primary">
          <Image
            loader={({ src }) => src}
            src={logo.url}
            width={logo.width}
            height={logo.height}
            alt="logo sen xanh"
            layout="fixed"
            objectFit="contain"
            className="lg:w-[400px] md:w-[320px] w-[240px]"
          />

          <h1 className="text-xl md:text-2xl lg:text-4xl !font-bold !mt-6 md:!mt-10 !mb-4 md:!mb-8">
            <span>{title}</span>
            <br />
            <span className="uppercase inline-block md:!mt-1 lg:!mt-2">
              {highlightTitle}
            </span>
          </h1>

          <p className="max-w-[980px] text-sm md:text-base">{description}</p>
        </section>
      </div>
    </>
  );
}
