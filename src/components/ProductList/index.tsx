import React from 'react';

import ProductCard from './ProductCard';

import { useProducts } from '../../contexts/ProductsContext';

import { Container } from './styles';

const ProductList: React.FC = () => {
  const { products } = useProducts();
  return (
    <Container>
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </Container>
  );
};

export default ProductList;
