import axiosClient from "@/api-client/axios-client";
import EmptyLayout from "@/components/layout/empty";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import { SWRConfig } from "swr";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { theme, createEmotionCache } from "@/utils";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  console.log("App re-rendering");
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
