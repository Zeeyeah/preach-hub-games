import React, { FC, ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};