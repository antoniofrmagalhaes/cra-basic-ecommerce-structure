import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

import { Container } from './styles';

interface SearchProps {
  isSearchOpen: boolean;
  closeSearch: () => void;
}

const Search: React.FC<SearchProps> = ({ isSearchOpen, closeSearch }) => (
  <Container isOpen={isSearchOpen}>
    <OutsideClickHandler onOutsideClick={closeSearch}>
      <input type="text" placeholder="Pesquise por produtos ou marcas..." />
      <div>
        <RiSearchLine size={16} />
      </div>
    </OutsideClickHandler>
  </Container>
);

export default Search;
