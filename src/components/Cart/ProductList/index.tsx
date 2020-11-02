import React from 'react';

import { Product } from '../../../store/modules/cart/types';

import ProductCard from '../ProductCard';

import { Container, Header, List } from './styles';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Container>
      <Header>
        <p>Meus Itens</p>
      </Header>
      <List>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
