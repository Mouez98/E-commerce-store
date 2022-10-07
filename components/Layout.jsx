import React from 'react';
import Head from 'next/head';

import {Navbar, Footer, ComingSoonBar} from './';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>My Bayneb Store</title>
      </Head>
      {/* <ComingSoonBar /> */}
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
