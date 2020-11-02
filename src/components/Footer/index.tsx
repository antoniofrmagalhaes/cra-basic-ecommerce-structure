import React from 'react';

import SiteLinks from './SiteLinks';
import PaymentMethods from './PaymentMethods';
import SocialMedias from './SocialMedias';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <SiteLinks />
      <div>
        <PaymentMethods />
        <SocialMedias />
      </div>
    </Container>
  );
};

export default Footer;
