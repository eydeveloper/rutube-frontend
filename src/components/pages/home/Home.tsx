import React, { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import Discover from '@/components/pages/home/discover/Discover';

const Home: FC = () => {
  return (
    <Layout title='RuTube'>
      <Discover></Discover>
      <Catalog></Catalog>
    </Layout>
  );
};

export default Home;
