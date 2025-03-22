'use client';

import { Asset } from '@/utils/type'

import CircleBubbles from './CircleBubbles'

type Props = {
  title: string;
  highlightTitle: string;
  description: string;
  infoBubbles: {
    name: string;
    description: string;
    image: Asset;
  }[];
};

export default function HeroBanner({
  title,
  highlightTitle,
  description,
  infoBubbles,
}: Props) {
  return (
    <div className="container text-center">
      <section className="section !mt-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-4xl text-primary !font-bold mt-6 md:mt-10 mb-4 md:mb-8">
          <span>{title}</span>
          <br />
          <span className="uppercase inline-block md:mt-1 lg:mt-2 text-secondary">
            {highlightTitle}
          </span>
        </h1>
        <p className="max-w-[700px] text-sm md:text-base !mb-0">
          {description}
        </p>
      </section>
      <section className="section md:!mt-20">
        <CircleBubbles items={infoBubbles} />
      </section>
    </div>
  );
}
