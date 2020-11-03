import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 48px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
    @media (min-width: 420px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: initial;
    }
  }
`;
