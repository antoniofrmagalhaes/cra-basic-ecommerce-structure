import React from 'react';

import { useCart } from '../../../contexts/CartContext';
import { Product } from '../../../store/modules/cart/types';
import { formatPrice } from '../../../utils/formatPrice';

import { Container, ProductInfo } from './styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { handleAddProduct } = useCart();
  return (
    <Container>
      <p>{product.name}</p>
      <img src={product.image} alt="" />
      <ProductInfo>
        <div>
          <span>{formatPrice(product.price)}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            Add Product
          </button>
        </div>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
