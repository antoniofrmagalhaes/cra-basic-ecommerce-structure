import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 8%;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.background};
`;
