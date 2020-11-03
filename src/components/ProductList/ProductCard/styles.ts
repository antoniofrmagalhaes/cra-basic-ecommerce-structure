import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.backgroundColor};
  > p {
    display: -webkit-box;
    text-overflow: ellipsis;
    padding: 8px 16px 0;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  > img {
    width: 100%;
    height: calc(100% - 74px);
    padding: 16px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background: ${({ theme }) => theme.colors.primaryColor};

  > div {
    display: flex;
    justify-content: space-between;
    > span {
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    > button {
      padding: 5px;
      opacity: 0.8;
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      border: 0;
      background: 0;
      transition: all 350ms ease;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
