import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  desc: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ title, desc,  children }) => {
  return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="locale" content="IN" />
        <meta name="language" content="en" />
        <meta name="country" content="IN" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#91be89" />
        <meta property="og:type" content="website" />
        <title>{title ? title : 'PreachHub Games'}</title>
        <meta name="title" content={title ? title : 'PreachHub Games'} />
        <meta name="description" content={desc ? desc : 'Explore and browse all of your favorite games in one website'} />
        <meta property="og:title" content={title ? title : 'PreachHub Games'} />
        <meta property="og:description" content={desc ? desc : 'Explore and browse all of your favorite games in one website'} />
        </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
