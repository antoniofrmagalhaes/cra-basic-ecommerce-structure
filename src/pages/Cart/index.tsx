import React from 'react';

import CartList from '../../components/CartList';
import Checkout from '../../components/Checkout';

import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <CartList />
      <Checkout />
    </Container>
  );
};

export default Cart;
