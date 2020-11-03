import styled from 'styled-components';

export const Title = styled.strong`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  @media (min-width: 768px) {
    justify-content: initial;
    margin-top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    > button {
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.primaryColor};
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      transition: all 350ms ease;
      box-shadow: 1px 3px 15px -7px rgba(0, 0, 0, 0.4);
      background: ${({ theme }) => theme.colors.backgroundColor};
      &:hover {
        border-color: ${({ theme }) => theme.colors.secondaryColor};
        color: ${({ theme }) => theme.colors.secondaryColor};
      }
      > svg {
        margin-right: 8px;
      }
    }

    @media (min-width: 420px) {
      margin-top: 16px;
      > button {
        height: 35px;
      }
    }
  }
  > p {
    text-align: center;
    margin-top: 32px;
    > strong {
      display: block;
      margin: 4px 0;
    }
    @media (min-width: 420px) {
      text-align: left;
      margin-top: 16px;
    }
  }
`;
