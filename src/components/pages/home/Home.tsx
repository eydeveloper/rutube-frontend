import React, { FC } from 'react';

import Layout from '../../layout/Layout';

import Catalog from './catalog/Catalog';
import Discover from './discover/Discover';

const Home: FC = () => {
  return (
    <Layout title='RuTube'>
      <Discover></Discover>
      <Catalog></Catalog>
    </Layout>
  );
};

export default Home;
