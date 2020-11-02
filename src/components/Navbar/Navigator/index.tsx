import React from 'react';
import {
  RiFileListLine,
  RiInboxUnarchiveLine,
  RiSearchLine,
  RiShoppingCart2Line,
} from 'react-icons/ri';

import { useCart } from '../../../contexts/CartContext';

import { Container } from './styles';

interface NavigatorProps {
  toggleSearch: () => void;
}

const Navigator: React.FC<NavigatorProps> = ({ toggleSearch }) => {
  const { length, handleOpenCart } = useCart();
  return (
    <Container>
      <ul>
        <li>
          <RiSearchLine size={28} onClick={toggleSearch} />
        </li>
        <li>
          <button type="button">
            <RiInboxUnarchiveLine size={28} />
            <p>Meus Pedidos</p>
          </button>
        </li>
        <li>
          <button type="button">
            <RiFileListLine size={28} />
            <p>Minhas Listas</p>
          </button>
        </li>
        <li>
          <button type="button" onClick={handleOpenCart}>
            <div>
              <RiShoppingCart2Line size={28} />
              <span>{length}</span>
            </div>
            <p>Meu Carrinho</p>
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Navigator;
