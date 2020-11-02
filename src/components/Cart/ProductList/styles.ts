import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 88px); /* Subtotal + CheckoutButton containers */
  @media (min-width: 1920px) {
    height: calc(100% - 113px);
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 26px;
`;

export const List = styled.ul`
  width: 100%;
  height: calc(100% - 26px);
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
