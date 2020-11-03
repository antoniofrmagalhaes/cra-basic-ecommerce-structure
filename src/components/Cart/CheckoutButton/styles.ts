import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.secondary};
  @media (min-width: 1920px) {
    height: 70px;
  }
`;
