import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px - 15px - 16px - 20px - 32px);
  margin-bottom: 16px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 15px;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubtotalContainer = styled.div`
  width: 100%;
  height: 20px;
  margin: 32px 0 16px;
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

export const CheckoutButton = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.secondary};
`;
