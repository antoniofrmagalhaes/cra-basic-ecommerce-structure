import React, { HTMLAttributes } from 'react';

import Placeholder from './Placeholder';
import StickyContent from './StickyContent';
import Navigator from './Navigator';

import { useCart } from '../../contexts/CartContext';
import { useNavbar } from '../../contexts/NavbarContext';

import { Container } from './styles';
import Search from './Search';
import Logo from './Logo';

const Navbar: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  const { length, handleOpenCart } = useCart();
  const {
    navbarRef,
    isSearchOpen,
    isNavbarSticky,
    toggleSearch,
    closeSearch,
  } = useNavbar();
  return (
    <>
      <Placeholder />
      <Container ref={navbarRef}>
        <StickyContent isSticky={isNavbarSticky}>
          <Logo to="/" />
          <Search isSearchOpen={isSearchOpen} closeSearch={closeSearch} />
          <Navigator
            toggleSearch={toggleSearch}
            openCart={handleOpenCart}
            cartLenth={length}
          />
        </StickyContent>
      </Container>
    </>
  );
};

export default Navbar;
