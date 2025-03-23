import Image from 'next/image';

import { Asset } from '@/utils/type';

type Props = {
  title: string;
  logo: Asset;
  partners: Partner[];
};

type Partner = {
  icon: Asset;
  href: string;
};

const Partner: React.FC<Props> = ({ title, logo, partners }) => {
  return (
    <div className="container">
      <section className="section">
        <h2 className="!font-bold text-2xl md:text-4xl text-center">
          <span className="text-primary">{title}</span>
          <br />
          <div className="flex mt-5 justify-center">
            <Image
              loader={({ src }) => src}
              src={logo.url}
              width={logo.width}
              height={logo.height}
              alt="logo sen xanh"
              layout="fixed"
              objectFit="contain"
              className="w-48 md:w-64"
            />
          </div>
        </h2>
        <div className="mt-6 md:mt-8 text-center mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {partners.map((partner, index) => (
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Image
                  src={partner.icon.url}
                  alt="partner"
                  width={partner.icon.width}
                  height={partner.icon.height}
                  layout="fixed"
                  className="w-10 md:w-14 object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
