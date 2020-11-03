import React from 'react';

import { Container } from './styled';

interface StickyContentProps {
  children: React.ReactNode;
  isSticky: boolean;
}

const StickyContent: React.FC<StickyContentProps> = ({
  children,
  isSticky,
}) => {
  return <Container isSticky={isSticky}>{children}</Container>;
};

export default StickyContent;
