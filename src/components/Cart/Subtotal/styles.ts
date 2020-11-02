import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 16px 0;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      display: flex;
      align-items: center;
    }
  }
`;
