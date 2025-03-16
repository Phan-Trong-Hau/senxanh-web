'use client';

import dynamic from 'next/dynamic';

const ServerFooter = dynamic(() => import('./ServerFooter'), {
  ssr: true,
  loading: () => (
    <div className="container">
      <p className="text-center text-gray-500 text-sm">Loading footer...</p>
    </div>
  ),
});

const FooterWrapper = () => {
  return <ServerFooter />;
};

export default FooterWrapper;
