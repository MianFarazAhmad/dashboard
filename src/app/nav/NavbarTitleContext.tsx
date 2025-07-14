// app/context/NavbarTitleContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

type NavbarTitleContextType = {
  title: string;
  setTitle: (value: string) => void;
};

const NavbarTitleContext = createContext<NavbarTitleContextType>({
  title: '',
  setTitle: () => {},
});

export const useNavbarTitle = () => useContext(NavbarTitleContext);

export const NavbarTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState('');
  return (
    <NavbarTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </NavbarTitleContext.Provider>
  );
};
