/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { Product } from '../../../store/modules/cart/types';

import {
  Container,
  ProductImage,
  ProductInfo,
  CounterContainer,
  AddButton,
  DeleteProductButton,
  Price,
  RemoveButton,
} from './styles';

import { formatPrice } from '../../../utils/formatPrice';

import { useCart } from '../../../contexts/CartContext';

interface ProductCard {
  product: Product;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const {
    handleIncrementProduct,
    handleDecrementProduct,
    handleRemoveProduct,
  } = useCart();
  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <p>
          {product.name}
          <span>{product.description}</span>
        </p>
        <div>
          <Price>{formatPrice(product.amount * product.price)}</Price>
          <CounterContainer>
            <RemoveButton onClick={() => handleDecrementProduct(product)} />
            <p>{product.amount}</p>
            <AddButton onClick={() => handleIncrementProduct(product)} />
          </CounterContainer>
          <DeleteProductButton
            onClick={() => handleRemoveProduct(product._id)}
          />
        </div>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
