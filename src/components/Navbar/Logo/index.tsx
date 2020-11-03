import React from 'react';
import { LinkProps } from 'react-router-dom';

import { Container } from './styles';

const Logo: React.FC<LinkProps> = ({ ...rest }) => (
  <Container {...rest}>
    <p>Home</p>
  </Container>
);

export default Logo;
