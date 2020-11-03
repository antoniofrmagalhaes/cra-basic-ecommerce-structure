import styled, { css } from 'styled-components';

interface ContainerProps {
  isSticky?: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: none;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.backgroundColor};
  ${({ isSticky }) =>
    isSticky &&
    css`
      z-index: 3;
      position: fixed;
      height: 8%;
      min-height: 60px;
      top: 0;
      left: 0;
      right: 0;
      @media (min-width: 1024px) {
        flex-direction: row;
        height: 8%;
        min-height: 60px;
        padding: 8px 46px;
      }
    `}
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 8px 46px;
  }
  @media (min-width: 1440px) {
    padding: 12px 46px;
  }
  @media (min-width: 1920px) {
    padding: 16px 46px;
  }
`;
