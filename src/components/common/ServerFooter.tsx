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

const ServerFooter = async () => {
  let footerData: FooterData | null = null;

  try {
    footerData = await fetchAPI({
      path: '/footer',
    });
  } catch (error) {
    console.error('Error fetching footer data:', error);
  }

  return (
    <div className="container">
      <p className="text-center text-gray-500 text-sm">
        {footerData?.data?.attributes?.copyright ||
          '&copy; 2021 All rights reserved.'}
      </p>
    </div>
  );
};

export default ServerFooter;
