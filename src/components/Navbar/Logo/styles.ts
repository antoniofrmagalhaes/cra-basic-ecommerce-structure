import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 35px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background: ${({ theme }) => theme.colors.primaryColor};
  @media (min-width: 1024px) {
    position: relative;
    width: 70px;
    height: 100%;
    top: initial;
    left: initial;
  }
`;
