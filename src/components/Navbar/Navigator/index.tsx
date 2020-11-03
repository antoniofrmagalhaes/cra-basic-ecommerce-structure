import React from 'react';
import {
  RiFileListLine,
  RiInboxUnarchiveLine,
  RiSearchLine,
  RiShoppingCart2Line,
} from 'react-icons/ri';

import { Container } from './styles';

interface NavigatorProps {
  toggleSearch: () => void;
  openCart: () => void;
  cartLenth: number;
}

const Navigator: React.FC<NavigatorProps> = ({
  toggleSearch,
  openCart,
  cartLenth,
}) => {
  return (
    <Container>
      <ul>
        <li>
          <div>
            <RiSearchLine size={20} onClick={toggleSearch} />
          </div>
        </li>
        <li>
          <button type="button">
            <div>
              <RiInboxUnarchiveLine size={20} />
            </div>
            <p>Meus Pedidos</p>
          </button>
        </li>
        <li>
          <button type="button">
            <div>
              <RiFileListLine size={20} />
            </div>
            <p>Minhas Listas</p>
          </button>
        </li>
        <li>
          <button type="button" onClick={openCart}>
            <div>
              <RiShoppingCart2Line size={20} />
              <span>{cartLenth}</span>
            </div>
            <p>Meu Carrinho</p>
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Navigator;
