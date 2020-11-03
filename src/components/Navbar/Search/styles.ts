import styled, { css, keyframes } from 'styled-components';

const fadeUp = keyframes`
  0% {
    transform: translateY(-100%); 
    opacity: 0;
  }
  85% {
    transform: translateY(-100%); 
    opacity: 0;
  }
  100% {
    transform: translateY(0); 
    opacity: 1;
  }
`;

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  z-index: 4;
  display: none;
  position: absolute;
  width: calc(100% - 32px);
  height: 100%;
  order: 2;
  top: 100%;
  left: 16px;
  right: 16px;
  margin-top: 16px;
  border-radius: 4px;
  transform: translateY(-100%);
  opacity: 0;
  animation: ${fadeUp} 350ms ease-in forwards;
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
    `}
  @media(min-width: 1024px) {
    position: relative;
    flex: 1;
    top: initial;
    left: initial;
    transform: initial;
    opacity: initial;
    animation: none;
    margin: 0 32px;
  }
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 4px;
    > input {
      flex: 1;
      padding: 0 16px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 1px solid #aaaaaa;
      border-right: none;
      transition: all 350ms ease;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-right: none;
      }
    }
    > div {
      width: 45px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid #037ffc;
      border-left: none;
      color: white;
      background: #037ffc;
    }
  }
  @media (min-width: 1024px) {
    display: block;
    position: relative;
    order: 1;
    margin-top: 0;
  }
`;
