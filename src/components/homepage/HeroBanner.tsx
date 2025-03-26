'use client'

import { motion } from "framer-motion";
import Image from "next/image";

import { Asset } from "@/utils/type";

type Props = {
  background: Asset;
  logo: Asset;
  title: string;
  highlightTitle: string;
  description: string;
  clouds: Asset[];
  icons: Asset[];
  heroShot: Asset;
};

export default function HeroBanner({
  background,
  logo,
  title,
  highlightTitle,
  description,
  clouds,
  icons,
  heroShot,
}: Props) {
  return (
    <>
      {/* <Image
        loader={({ src }) => src}
        src={background.url}
        alt='hero banner'
        layout='fixed'
        width={background.width}
        height={background.height}
        objectFit="contain"
        objectPosition="top"
        className="w-screen"
      /> */}
      <div className="relative overflow-hidden">
        {/* Background */}
        <Image
          src={background.url}
          alt="background"
          layout="fixed"
          width={1920}
          height={1080}
          objectFit="cover"
          objectPosition="top"
          className="w-screen"
        />

        {/* Nhân vật */}
        <motion.img
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={heroShot.url}
          alt="nhân vật"
          className="absolute w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-9"
        />

        {/* Mây */}
        <motion.img
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={clouds[0].url}
          alt="mây"
          className="absolute -bottom-1/4 scale-[1.05] w-screen"
        />

        {/* Icons bay vào từ 4 góc */}
        {[
          {
            src: icons[0]?.url,
            initial: { x: "100vw", y: "100vh", opacity: 0 },
            className: "w-1/15 top-1/2 right-6/25 transform -translate-y-1/2",
          },
          {
            src: icons[1]?.url,
            initial: { x: "-100vw", y: "-100vh", opacity: 0 },
            className: "w-1/16 top-1/3 left-1/3 transform -translate-y-1/2",
          },
          {
            src: icons[2]?.url,
            initial: { x: "100vw", y: "-100vh", opacity: 0 },
            className: "w-1/12 bottom-1/3 right-1/12 transform translate-y-1/2",
          },
          {
            src: icons[3]?.url,
            initial: { x: "-100vw", y: "100vh", opacity: 0 },
            className: "w-1/14 bottom-1/3 left-1/5 transform translate-y-1/3",
          },
        ].map((icon, index) => (
          <motion.img
            key={index}
            initial={icon.initial}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            src={icon.src}
            alt={`icon ${index + 1}`}
            className={`absolute ${icon.className} z-9`}
          />
        ))}
      </div>
      <div className="container text-center">
        <section className="section flex flex-col items-center justify-center text-primary">
          <Image
            loader={({ src }) => src}
            src={logo.url}
            width={logo.width}
            height={logo.height}
            alt='logo sen xanh'
            layout='fixed'
            objectFit='contain'
            className='lg:w-[400px] md:w-[320px] w-[240px]'
          />

          <h1 className='text-xl md:text-2xl lg:text-4xl !font-bold !mt-6 md:!mt-10 !mb-4 md:!mb-8'>
            <span>{title}</span>
            <br />
            <span className="uppercase inline-block md:!mt-1 lg:!mt-2">{highlightTitle}</span>
          </h1>

          <p className='max-w-[980px] text-sm md:text-base'>{description}</p>
        </section>
      </div>
    </>
  )
}
