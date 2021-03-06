import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    > img {
      width: 30px;
      height: 20px;
      border-radius: 4px;
      margin-top: 8px;
      margin-right: 8px;
      border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
      border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
      object-fit: cover;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
