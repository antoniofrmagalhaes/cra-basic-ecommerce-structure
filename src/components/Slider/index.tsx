/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

import { useCart } from '../../contexts/CartContext';

import {
  Overlay,
  Container,
  Header,
  CloseSliderButton,
  Content,
} from './styles';

const Slider: React.FC = ({ children }) => {
  const { isOpen, handleCloseCart } = useCart();
  return (
    <Overlay isOpen={isOpen}>
      <OutsideClickHandler onOutsideClick={handleCloseCart}>
        <Container isOpen={isOpen}>
          <Header>
            <CloseSliderButton onClick={handleCloseCart} />
            <p>Carrinho de Compras</p>
            <RiShoppingCart2Line size={22} />
          </Header>
          <Content>{children}</Content>
        </Container>
      </OutsideClickHandler>
    </Overlay>
  );
};

export default Slider;
