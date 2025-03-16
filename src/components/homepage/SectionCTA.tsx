import { Button } from 'antd';

import { CTA } from '@/utils/type';

type Props = {
  title: string;
  cta: CTA;
};

const SectionCTA = ({ title, cta }: Props) => {
  return (
    <div className="container">
      <section className="section">
        <div className="max-w-[800px] mx-auto rounded-xl md:rounded-full bg-[linear-gradient(90deg,#00a651,#8dc63f)] text-center px-3 py-5 md:py-10">
          <div className="text-white font-bold text-lg max-w-[420px] mx-auto">
            {title}
          </div>
          <Button className="text-secondary [&_span]:font-bold mt-3 md:mt-6 bg-white">
            {cta?.text || 'Liên hệ ngay'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SectionCTA;
