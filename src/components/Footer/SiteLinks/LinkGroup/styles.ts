import styled, { css } from 'styled-components';

interface ContainerProps {
  expanded: boolean;
}

export const Title = styled.strong`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  @media (min-width: 768px) {
    padding: 0;
    > svg {
      display: none;
    }
  }
`;

export const Content = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  > a {
    & + a {
      margin-top: 16px;
    }
    > span {
      display: block;
    }
  }
  @media (max-width: 768px) {
    ${({ expanded }) =>
      !expanded &&
      css`
        display: none;
      `}
  }
`;
