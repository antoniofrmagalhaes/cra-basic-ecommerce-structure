import styled, { css } from 'styled-components';

interface IContentProps {
  compact?: boolean;
  isNavbarSticky: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div<IContentProps>`
  width: 100%;
  ${({ compact, isNavbarSticky }) =>
    compact &&
    css`
      ${isNavbarSticky &&
      css`
        padding-top: calc(35px + 64px);
        @media (min-width: 769px) {
          padding-top: calc(35px + 8px);
        }
      `}
      @media (min-width: 769px) {
        height: calc(100% - 65px - 35px - 32px);
      }
    `}
`;
