import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  padding: 0 16px;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background: ${({ theme }) => theme.colors.primaryColor};
  > p {
    margin-left: 16px;
  }
  @media (min-width: 1024px) {
    padding: 0 46px;
  }
`;
