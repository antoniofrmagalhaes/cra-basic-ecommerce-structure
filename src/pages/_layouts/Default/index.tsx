import React from 'react';
import ScrollLock from 'react-scrolllock';

import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Cart from '../../../components/Cart';

import { useCart } from '../../../contexts/CartContext';
import { useNavbar } from '../../../contexts/NavbarContext';

import { Container, Content } from './styles';

interface DefaultLayoutProps {
  children: React.ReactNode;
  isCompact?: boolean;
}

const Default: React.FC<DefaultLayoutProps> = ({ children, isCompact }) => {
  const { isOpen } = useCart();
  const { isNavbarSticky } = useNavbar();
  return (
    <ScrollLock isActive={isOpen}>
      <Container id="home">
        <Navbar />
        <Content isNavbarSticky={isNavbarSticky} compact={isCompact}>
          {children}
        </Content>
        <Footer />
        <Cart />
      </Container>
    </ScrollLock>
  );
};

export default Default;
