import styled from 'styled-components';

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px 32px;
  > li {
    @media (min-width: 420px) {
      margin-top: 0;
    }
  }
  @media (min-width: 769px) {
    padding: 32px 48px;
    flex-direction: row;
  }
`;
