import styled, { css } from 'styled-components';

interface IContentProps {
  isCompact?: boolean;
  isNavbarSticky: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div<IContentProps>`
  width: 100%;
  ${({ isCompact, isNavbarSticky }) =>
    isCompact &&
    css`
      @media (min-width: 1024px) {
        height: calc(87%);
      }
      ${isNavbarSticky &&
      css`
        @media (min-width: 1024px) {
          height: calc(87%);
        }
      `}
    `}
`;
