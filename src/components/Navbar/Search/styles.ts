import styled from 'styled-components';

export const Container = styled.div`
  order: 2;
  width: 100%;
  height: 50px;
  margin-top: 16px;
  border-radius: 4px;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 4px;
    > input {
      flex: 1;
      padding: 0 16px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 1px solid #aaaaaa;
      border-right: none;
      transition: all 350ms ease;
      &:focus {
        border: 1px solid #037ffc;
        border-right: none;
      }
    }
    > div {
      width: 45px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid #037ffc;
      border-left: none;
      color: white;
      background: #037ffc;
    }
  }
  @media (min-width: 769px) {
    order: 1;
    margin-top: 0;
    margin-right: 32px;
  }
`;
