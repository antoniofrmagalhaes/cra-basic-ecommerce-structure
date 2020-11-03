import styled from 'styled-components';

interface ContainerProps {
  isNavbarSticky?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px;
  @media (min-width: 375px) {
    padding: 16px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 32px 48px;
  }
`;
