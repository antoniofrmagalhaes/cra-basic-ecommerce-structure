import { RiCloseLine } from 'react-icons/ri';
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
  background: rgba(255, 255, 255, 1);
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
    `}
  @media (min-width: 1024px) {
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
  @media(min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1280px) {
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
  @media (min-width: 1024px) {
    padding: 8px;
  }
  @media (min-width: 1920px) {
    padding: 0 24px;
  }
`;

export const CloseSliderButton = styled(RiCloseLine)`
  cursor: pointer;
  font-size: 28px;
`;

export const Content = styled.div`
  width: 100%;
  height: 91.5%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media (min-width: 1920px) {
    padding: 32px;
  }
`;
