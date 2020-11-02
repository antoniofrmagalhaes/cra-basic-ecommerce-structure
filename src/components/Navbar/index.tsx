import React, { HTMLAttributes } from 'react';

import Logo from './Logo';
import Search from './Search';
import Navigator from './Navigator';

import { useCart } from '../../contexts/CartContext';
import { useNavbar } from '../../contexts/NavbarContext';

import {
  NavbarInfo,
  Container,
  StickyNavbar,
  ProductCategoriesContainer,
} from './styles';

const Navbar: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  const { isOpen } = useCart();
  const {
    navbarRef,
    searchOpen,
    isNavbarSticky,
    handleOpenSearch,
  } = useNavbar();
  return (
    <>
      <NavbarInfo />
      <Container
        ref={navbarRef}
        isCartOpen={isOpen}
        active={isNavbarSticky}
        isSearchOpen={searchOpen}
      >
        <StickyNavbar>
          <Logo />
          <Navigator toggleSearch={handleOpenSearch} />
          {searchOpen && <Search />}
        </StickyNavbar>
      </Container>
      <ProductCategoriesContainer />
    </>
  );
};

export default Navbar;
