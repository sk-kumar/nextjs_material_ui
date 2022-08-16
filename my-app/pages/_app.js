import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import SignUp from '../src/components/SignUp';
import StickyFooter from '../src/components/StickyFooter';
import Search from '../src/components/Search';
import Muiv5 from '../src/components/Muiv5';
import Autosearch from '../src/components/Autosearch';
import SearchQuery from '../src/components/SearchQuery';
import GetData from '../src/components/GetData';
import GetAxiosData from '../src/components/GetAxiosData';
import SearchAxios from '../src/components/SearchAxios';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        {/* <SignUp /> */}
        {/* <Search /> */}
        {/* <Muiv5/> */}
        {/* <Autosearch/> */}
        {/* <SearchQuery/> */}
        {/* <GetData/> */}
        {/* <GetAxiosData /> */}
        <SearchAxios/>
        <StickyFooter/>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};