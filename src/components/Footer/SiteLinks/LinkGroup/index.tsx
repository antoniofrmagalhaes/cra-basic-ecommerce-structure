import React from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

import { Title, Content } from './styles';

interface LinkGroupProps {
  children: React.ReactNode;
  label: string;
}

const LinkGroup: React.FC<LinkGroupProps> = ({ children, label }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Title onClick={() => setExpanded(!expanded)}>
        {label}
        {expanded ? <RiSubtractLine /> : <RiAddLine />}
      </Title>
      <Content expanded={expanded}>{children}</Content>
    </>
  );
};

export default LinkGroup;
