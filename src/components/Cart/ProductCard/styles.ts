import { RiAddLine, RiDeleteBinLine, RiSubtractLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.accentColor};
  & + li {
    margin-top: 8px;
  }
  @media (min-width: 375px) {
    height: 120px;
    padding: 16px;
  }
  @media (min-width: 1024px) {
    height: 86px;
    padding: 8px;
  }
  @media (min-width: 1280px) {
    height: 94px;
  }
  @media (min-width: 1440px) {
    height: 105px;
    padding: 10px;
  }
  @media (min-width: 1600px) {
    height: 120px;
    padding: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
  margin-right: 8px;
  border-radius: 8px;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.background};
  @media (min-width: 375px) {
    width: 90px;
    height: 90px;
    margin-right: 16px;
  }
  @media (min-width: 1024px) {
    width: 70px;
    height: 70px;
    margin-right: 8px;
  }
  @media (min-width: 1280px) {
    width: 77px;
    height: 77px;
  }
  @media (min-width: 1440px) {
    width: 84px;
    height: 84px;
  }
  @media (min-width: 1600px) {
    margin-right: 16px;
    width: 90px;
    height: 90px;
  }
`;

export const ProductInfo = styled.div`
  position: relative;
  flex: 1;
  height: 80px;
  padding-right: 16px;
  > p {
    color: ${({ theme }) => theme.colors.primaryText};
    span {
      display: -webkit-box;
      margin-top: 3px;
      opacity: 0.7;
      color: ${({ theme }) => theme.colors.primaryText};
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  @media (min-width: 375px) {
    width: 85px;
    height: 85px;
  }
  @media (min-width: 1024px) {
    height: 65px;
  }
  @media (min-width: 1280px) {
    height: 75px;
  }
  @media (min-width: 1440px) {
    width: 82px;
    height: 82px;
  }
`;

export const Price = styled.strong`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const DeleteProductButton = styled(RiDeleteBinLine)`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.primaryText};
  &:hover {
    opacity: 1;
  }
  @media (min-width: 1600px) {
    font-size: 22px;
  }
`;

export const CounterContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  > p {
    width: 22px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    @media (min-width: 375px) {
      width: 28px;
      height: 24px;
    }
    @media (min-width: 1024px) {
      width: 20px;
      height: 18px;
    }
    @media (min-width: 1280px) {
      width: 22px;
      height: 18px;
    }
    @media (min-width: 1440px) {
      width: 26px;
      height: 22px;
    }
    @media (min-width: 1600px) {
      width: 32px;
      height: 26px;
    }
  }
`;

export const AddButton = styled(RiAddLine)`
  cursor: pointer;
  width: 20px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 1;
  }
  @media (min-width: 375px) {
    width: 26px;
    height: 24px;
  }
  @media (min-width: 1024px) {
    width: 18px;
    height: 18px;
  }
  @media (min-width: 1280px) {
    width: 20px;
    height: 18px;
  }
  @media (min-width: 1440px) {
    width: 24px;
    height: 22px;
  }
  @media (min-width: 1600px) {
    width: 28px;
    height: 26px;
  }
`;

export const RemoveButton = styled(RiSubtractLine)`
  cursor: pointer;
  width: 20px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 1;
  }
  @media (min-width: 375px) {
    width: 26px;
    height: 24px;
  }
  @media (min-width: 1024px) {
    width: 18px;
    height: 18px;
  }
  @media (min-width: 1280px) {
    width: 20px;
    height: 18px;
  }
  @media (min-width: 1440px) {
    width: 24px;
    height: 22px;
  }
  @media (min-width: 1600px) {
    width: 28px;
    height: 26px;
  }
`;
