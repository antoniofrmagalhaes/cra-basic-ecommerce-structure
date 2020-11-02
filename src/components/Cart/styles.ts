import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  isOpen: boolean;
}

const fromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Overlay = styled.div<IContainerProps>`
  z-index: 3;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
    `}
  @media (min-width: 769px) {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div<IContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  background: #ffffff;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: 350ms ${fromRight} 150ms ease forwards;
    `}
  @media(min-width: 769px) {
    width: 25%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 8.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #dddddd;
  color: white;
  background: #037ffc;
  > p {
    letter-spacing: 2px;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 91.5%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px - 15px - 16px - 20px - 32px);
  margin-bottom: 16px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 15px;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubtotalContainer = styled.div`
  width: 100%;
  height: 20px;
  margin: 32px 0 16px;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    > p {
      display: flex;
      align-items: center;
    }
  }
`;

export const CheckoutButton = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0;
  color: white;
  background: #41b02e;
`;
