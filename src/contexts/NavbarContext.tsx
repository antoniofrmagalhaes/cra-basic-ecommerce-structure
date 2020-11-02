import React from 'react';

interface INavbarContextProps {
  navbarRef: React.RefObject<HTMLDivElement>;
  isNavbarSticky: boolean;
  searchOpen: boolean;
  handleOpenSearch: () => void;
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
  const [searchOpen, setSearchOpen] = React.useState(false);
  const navbarRef = React.useRef<HTMLDivElement>(null);
  const handleOpenSearch = () => setSearchOpen(!searchOpen);

  const handleScroll = () => {
    if (
      navbarRef.current &&
      navbarRef.current?.getBoundingClientRect().top <= 0
    ) {
      return setIsNavbarSticky(true);
    }
    return setIsNavbarSticky(false);
  };

  React.useEffect(() => {
    if (navbarRef.current) {
      setIsNavbarSticky(navbarRef.current?.getBoundingClientRect().top <= 0);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return {
    navbarRef,
    isNavbarSticky,
    searchOpen,
    handleOpenSearch,
  };
}

export default NavbarProvider;
