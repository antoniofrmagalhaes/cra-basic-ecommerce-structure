import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.backgroundColor};
  @media (min-width: 769px) {
    margin-right: 16px;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  > table {
    width: calc(100% - 15px);
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    overflow-y: scroll;
    th {
      text-align: left;
      p {
        font-weight: bold;
      }
      &:nth-child(1) {
        @media (max-width: 1023px) {
          display: none;
        }
      }
      &:nth-child(2) {
        width: 150px;
        padding-left: 16px;
      }
      &:nth-child(3) {
        text-align: center;
        @media (max-width: 1023px) {
          display: none;
        }
      }
      &:nth-child(4) {
        text-align: center;
        width: 120px;
      }
      &:nth-child(5) {
        text-align: center;
        width: 100px;
      }
      &:nth-child(6) {
        text-align: center;
        @media (max-width: 1023px) {
          display: none;
        }
      }

      @media (min-width: 1024px) {
        &:nth-child(1) {
          width: 100px;
        }

        &:nth-child(2) {
          width: 150px;
          padding: 0 0 0 16px;
        }
        &:nth-child(3) {
          text-align: center;
          width: 100px;
        }
        &:nth-child(4) {
          text-align: center;
          width: 120px;
        }
        &:nth-child(5) {
          text-align: center;
          width: 100px;
        }
        &:nth-child(6) {
          text-align: center;
          width: 100px;
        }
      }
    }
  }
`;

export const Scroll = styled.div`
  height: calc(100% - 100px);
  overflow-y: scroll;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor}; ;
`;

export const DiscountTag = styled.div`
  position: absolute;
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  background: ${({ theme }) => theme.colors.backgroundColor};
  tr {
    height: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
    td {
      > img {
        width: 99px;
        height: 100px;
        border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
        padding: 16px;
        background: ${({ theme }) => theme.colors.backgroundColor};
        object-fit: cover;
      }
    }
  }
  td {
    &:nth-child(1) {
      position: relative;
      width: 100px;
      @media (max-width: 1023px) {
        display: none;
      }
    }
    &:nth-child(2) {
      padding: 0 16px;
      width: 150px;
    }
    &:nth-child(3) {
      text-align: center;
      width: 100px;
      @media (max-width: 1023px) {
        display: none;
      }
    }
    &:nth-child(4) {
      text-align: center;
      width: 120px;
      padding: 0 10px;
    }
    &:nth-child(5) {
      text-align: center;
      width: 100px;
    }
    &:nth-child(6) {
      text-align: center;
      width: 100px;
    }
  }
`;

export const RemoveAllProductsButton = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  bottom: 16px;
  right: 16px;
  border: 0;
  background: 0;
  opacity: 0.7;
  transition: all 250ms ease;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const RemoveProductButton = styled.div`
  cursor: pointer;
  opacity: 0.7;
  transition: all 250ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
    opacity: 1;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  width: 76px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  > p {
    width: 28px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
    background: ${({ theme }) => theme.colors.backgroundColor};
  }
  > div {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.7;
    background: 0;
    &:hover {
      opacity: 1;
    }
  }
`;
