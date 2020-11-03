import React from 'react';

import Slider from '../Slider';

import ProductList from './ProductList';
import CheckoutButton from './CheckoutButton';
import Subtotal from './Subtotal';

import { useCart } from '../../contexts/CartContext';

const Cart: React.FC = () => {
  const {
    cart: { products },
    handleCloseCart,
  } = useCart();

  return (
    <Slider>
      <ProductList products={products} />
      <Subtotal />
      <CheckoutButton to="/cart" onClick={handleCloseCart}>
        Finalizar Pedido
      </CheckoutButton>
    </Slider>
  );
};

export default Cart;
