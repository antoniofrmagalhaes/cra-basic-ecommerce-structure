/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiCloseLine, RiShoppingCart2Line } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCart } from '../../contexts/CartContext';
import ProductCard from './ProductCard';

import {
  Overlay,
  Container,
  Header,
  Content,
  ListContainer,
  SubtotalContainer,
  CheckoutButton,
  ListHeader,
  List,
} from './styles';

const Cart: React.FC = () => {
  const { cart, subtotal, isOpen, handleCloseCart } = useCart();
  return (
    <Overlay isOpen={isOpen}>
      <OutsideClickHandler onOutsideClick={handleCloseCart}>
        <Container isOpen={isOpen}>
          <Header>
            <RiCloseLine size={28} onClick={handleCloseCart} />
            <p>Carrinho de Compras</p>
            <RiShoppingCart2Line size={22} />
          </Header>
          <Content>
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
          </Content>
        </Container>
      </OutsideClickHandler>
    </Overlay>
  );
};

export default Cart;
