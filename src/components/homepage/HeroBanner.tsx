'use client';

import Image from 'next/image';

import { Asset } from '@/utils/type';

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
          <div className="relative h-[90px] w-[450px]">
            <Image
              loader={({ src }) => src}
              src={logo.url}
              alt="logo sen xanh"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h1 className="text-4xl font-bold mt-10 mb-8">
            <span>{title}</span>
            <br />
            <span className="uppercase inline-block mt-2">
              {highlightTitle}
            </span>
          </h1>

          <p className="max-w-[980px] text-base">{description}</p>
        </section>
      </div>
    </>
  );
}
