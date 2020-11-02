import React from 'react';

import ProductList from '../../components/ProductList';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ProductList />
    </Container>
  );
};

export default Home;
