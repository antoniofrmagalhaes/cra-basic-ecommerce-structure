import styled, { css } from 'styled-components';

interface IContainerProps {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  active: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  background: #ffffff;
  ${({ active, isSearchOpen }) =>
    active &&
    css`
      > div {
        z-index: 3;
        position: fixed;
        height: ${isSearchOpen ? 130 : 64}px;
        top: 0;
        left: 0;
        right: 0;
        @media (min-width: 769px) {
          flex-direction: row;
          height: 80px;
          padding: 8px 46px;
        }
      }
    `}
  ${({ isCartOpen }) =>
    isCartOpen &&
    css`
      > div {
        top: 0;
        left: 0;
        right: 15px;
      }
    `}
`;

export const StickyNavbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  background: #ffffff;
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 8px 46px;
  }
`;

export const ProductCategoriesContainer = styled.div`
  z-index: 3;
  height: 35px;
  display: flex;
  padding: 0 46px;
  background: #037ffc;
`;

export const NavbarInfo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  padding: 0 16px;
  justify-content: flex-end;
  align-items: center;
  color: white;
  background: #037ffc;
  > p {
    margin-left: 16px;
  }

  @media (min-width: 769px) {
    padding: 0 46px;
  }
`;
