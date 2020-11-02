import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

import { Container } from './styles';

const Search: React.FC = () => (
  <Container>
    <div>
      <input type="text" placeholder="Pesquise por produtos ou marcas..." />
      <div>
        <RiSearchLine size={16} />
      </div>
    </div>
  </Container>
);

export default Search;
