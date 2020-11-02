import React from 'react';
import { useCart } from '../../contexts/CartContext';

import { Container, ProductList, CheckoutButton } from './styles';

const Checkout: React.FC = () => {
  const { subtotal, deliveryFee, total, length } = useCart();
  return (
    <Container>
      <p>Resumo do pedido</p>
      <ProductList>
        <div>
          <p>{length === 1 ? `${length} produto` : `${length} produtos`}</p>
          <span>{subtotal}</span>
        </div>
      </ProductList>
      <footer>
        <div>
          <p>Cupom:</p>
          <input type="text" placeholder="Cole o codigo aqui..." />
        </div>
        <div>
          <p>Frete:</p>
          <span>{deliveryFee}</span>
        </div>
        <div>
          <p>Total:</p>
          <strong>{total}</strong>
        </div>
      </footer>
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </Container>
  );
};

export default Checkout;
