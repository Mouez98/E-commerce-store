import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout, ErrorBoundry } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <ErrorBoundry >
          <Component {...pageProps} />
        </ErrorBoundry>
      </Layout>
    </StateContext>
  );
}

export default MyApp;
