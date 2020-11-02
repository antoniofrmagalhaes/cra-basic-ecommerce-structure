import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  > strong {
    text-align: center;
  }
  > ul {
    margin-top: 8px;
    > li {
      text-align: center;
      display: inline-block;
      margin-right: 8px;
      > a {
        > svg {
          font-size: 22px;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (min-width: 420px) {
    margin-top: 0;
  }
`;
