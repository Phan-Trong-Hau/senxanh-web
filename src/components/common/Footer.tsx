'use client';

import { useEffect, useState } from 'react'

import fetchAPI from '@/utils/fetchApi'

// Define types for the footer data
type FooterAttributes = {
  copyright?: string;
  [key: string]: any;
};

type FooterData = {
  data?: {
    attributes?: FooterAttributes;
    [key: string]: any;
  };
  [key: string]: any;
};

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFooterData = async () => {
      try {
        const data = await fetchAPI({
          path: '/footer',
        });
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    getFooterData();
  }, []);

  return (
    <div className="container">
      <p className="text-center text-gray-500 text-sm">
        {loading
          ? '&copy; 2021 All rights reserved.'
          : footerData?.data?.attributes?.copyright ||
            '&copy; 2021 All rights reserved.'}
      </p>
    </div>
  );
};

export default Footer;
