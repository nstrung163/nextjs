import axiosClient from "@/api-client/axios-client";
import EmptyLayout from "@/components/layout/empty";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log("App re-rendering");
  const Layout = Component.Layout ?? EmptyLayout;
  return (
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
  );
}
