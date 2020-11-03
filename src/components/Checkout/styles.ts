import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  background: #ffffff;
  > p {
    margin-bottom: 8px;
  }
  > footer {
    width: 100%;
    height: 106px;
    padding-top: 16px;
    border-top: 1px solid #dddddd;
    > div {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p {
        display: flex;
        align-items: center;
        margin-right: 16px;
      }
      > input {
        width: 100%;
        height: 30px;
        padding: 0 16px;
        border-radius: 4px;
        border: 1px solid #dddddd;
      }
    }
  }
  @media (min-width: 1024px) {
    width: 40%;
    margin-top: 0;
  }
  @media (min-width: 1280px) {
    width: 30%;
  }
`;

export const ProductList = styled.div`
  width: 100%;
  height: calc(100% - 56px - 106px - 26px);
  margin-bottom: 16px;
  > div {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }
  }
`;

export const CheckoutButton = styled.button.attrs({
  type: 'button',
})`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  border-radius: 4px;
  border: 0;
  color: white;
  background: #41b02e;
`;
