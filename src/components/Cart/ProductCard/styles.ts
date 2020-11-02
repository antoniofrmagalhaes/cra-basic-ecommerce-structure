import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  & + li {
    margin-top: 8px;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
  margin-right: 8px;
  border-radius: 8px;
  object-fit: cover;
  background: #ffffff;
`;

export const ProductInfo = styled.div`
  position: relative;
  flex: 1;
  width: 80px;
  height: 80px;
  > p {
    color: ${({ theme }) => theme.colors.primary};
    span {
      display: -webkit-box;
      margin-top: 3px;
      opacity: 0.5;
      color: ${({ theme }) => theme.colors.secondaryText};
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;

export const Price = styled.strong`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const DeleteProductButton = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  width: 16px;
  top: 0;
  right: 12px;
  border: 0;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.primaryText};
  background: 0;
  &:hover {
    opacity: 1;
  }
  > svg {
    width: 20px;
  }
`;

export const CounterContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  border: 1px solid #037ffc;
  > p {
    width: 22px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    border-left: 1px solid #037ffc;
    border-right: 1px solid #037ffc;
  }
  > div {
    cursor: pointer;
    width: 20px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.7;
    border: 0;
    background: 0;
    > svg {
    }
    border: 0;
    background: 0;
    &:hover {
      opacity: 1;
    }
  }
`;
