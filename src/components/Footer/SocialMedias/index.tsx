import React from 'react';
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';

import { Container } from './styles';

const SocialMedias: React.FC = () => {
  return (
    <Container>
      <strong>Siga-nos nas redes sociais</strong>
      <ul>
        <li>
          <a href="/">
            <RiFacebookBoxFill />
          </a>
        </li>
        <li>
          <a href="/">
            <RiInstagramLine />
          </a>
        </li>
        <li>
          <a href="/">
            <RiTwitterFill />
          </a>
        </li>
        <li>
          <a href="/">
            <RiYoutubeFill />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default SocialMedias;
