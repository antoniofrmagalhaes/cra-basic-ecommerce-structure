import React from 'react';

import Slider from '../Slider';

import ProductCard from './ProductCard';

import { useCart } from '../../contexts/CartContext';

import {
  ListContainer,
  ListHeader,
  List,
  SubtotalContainer,
  CheckoutButton,
} from './styles';

const Cart: React.FC = () => {
  const { cart, subtotal, handleCloseCart } = useCart();
  return (
    <Slider>
      <ListContainer>
        <ListHeader>
          <p>Meus Itens</p>
        </ListHeader>
        <List>
          {cart.products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </List>
      </ListContainer>
      <SubtotalContainer>
        <div>
          <p>Subtotal:</p>
          <strong>{subtotal}</strong>
        </div>
      </SubtotalContainer>
      <CheckoutButton to="/cart" onClick={handleCloseCart}>
        Finalizar Pedido
      </CheckoutButton>
    </Slider>
  );
};

export default Cart;
