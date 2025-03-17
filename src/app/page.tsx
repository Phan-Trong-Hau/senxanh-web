import Homepage from '@/components/homepage';
import fetchAPI from '@/utils/fetchApi';

const Home = async () => {
  const homepage = await fetchAPI({
    path: '/homepage',
  });

  const footer = await fetchAPI({
    path: '/footer',
  });

  return <Homepage homepage={homepage} footer={footer} />;
};

export default Home;
