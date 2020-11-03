import React from 'react';

interface INavbarContextProps {
  navbarRef: React.RefObject<HTMLDivElement>;
  navbarHeight: number;
  isNavbarSticky: boolean;
  isSearchOpen: boolean;
  toggleSearch: () => void;
  closeSearch: () => void;
}

const NavbarContext = React.createContext<INavbarContextProps>(
  {} as INavbarContextProps,
);

const NavbarProvider: React.FC = ({ children }) => {
  const navbar = useProvideNavbar();
  return (
    <NavbarContext.Provider value={navbar}>{children}</NavbarContext.Provider>
  );
};

export const useNavbar = (): INavbarContextProps => {
  return React.useContext(NavbarContext);
};

export function useProvideNavbar(): INavbarContextProps {
  const [isNavbarSticky, setIsNavbarSticky] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [navbarHeight, setNavbarHeight] = React.useState(0);
  const navbarRef = React.useRef<HTMLDivElement>(null);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  React.useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
      setIsNavbarSticky(navbarRef.current?.getBoundingClientRect().top <= 0);
    }
  }, []);

  const handleScroll = React.useCallback(() => {
    if (
      navbarRef.current &&
      navbarRef.current?.getBoundingClientRect().top <= 0
    ) {
      return setIsNavbarSticky(true);
    }
    return setIsNavbarSticky(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return {
    navbarRef,
    navbarHeight,
    isNavbarSticky,
    isSearchOpen,
    toggleSearch,
    closeSearch: () => setIsSearchOpen(false),
  };
}

export default NavbarProvider;
