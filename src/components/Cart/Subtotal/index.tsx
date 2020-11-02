import React from 'react';

import { useCart } from '../../../contexts/CartContext';

import { Container } from './styles';

const Subtotal: React.FC = () => {
  const { subtotal } = useCart();

  return (
    <Container>
      <div>
        <p>Subtotal:</p>
        <strong>{subtotal}</strong>
      </div>
    </Container>
  );
};

export default Subtotal;
