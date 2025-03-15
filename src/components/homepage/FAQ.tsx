'use client';

import Border from '../common/Border';

type Props = {
  title: string;
  faqs: {
    title: string;
    description: string;
  }[];
};

const FAQs = ({ title, faqs }: Props) => {
  return (
    <div className="container text-primary">
      <section className="section">
        <h2 className="text-center font-bold text-4xl mb-8">{title}</h2>
        {faqs.map((faq, index) => (
          <Border
            key={index}
            className="mt-4 max-w-[1024px] mx-auto"
            classNameChildren="px-10 py-4"
          >
            <div className="font-semibold text-lg">{faq.title}</div>
            <p className="text-sm mt-2">{faq.description}</p>
          </Border>
        ))}
      </section>
    </div>
  );
};

export default FAQs;
