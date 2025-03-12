'use client';

import { CTA } from '@/utils/type';

type Props = {
  background: string;
  title: string;
  description: string;
  cta?: CTA;
};

export default function HeroBanner({
  background,
  title,
  description,
  cta,
}: Props) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Welcome to our website</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="">Get Started</button>
        </div>
      </div>
    </div>
  );
}
