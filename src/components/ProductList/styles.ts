import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 56px);
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 250px;
  padding: 16px;
  @media (min-width: 375px) {
    padding: 16px;
    grid-gap: 24px;
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 32px 48px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
