import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { WalletSelectorContextProvider } from "../context/WalletSelectorContext";
import { PageBlockerState } from "../common/components/PageBlocker";
import { blockerStore } from "../stores/pageBlocker";
import { QueryClient, QueryClientProvider } from "react-query";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PageBlocker from "../common/components/PageBlocker";

import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "../theme/theme";

import * as gtag from "../lib/gtag";
import Script from "next/script";
import NProgress from "nprogress";
import NextHead from "next/head";

import "@fontsource/inter/variable.css";
import "@near-wallet-selector/modal-ui/styles.css";
import "../styles/nprogress.css";

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageBlocerState, setPageBlockerState] = useState<PageBlockerState>({
    isActive: false,
    message: "",
  });
  useEffect(
    () =>
      blockerStore.subscribe((state) => {
        setPageBlockerState({
          isActive: state.isActive,
          message: state.message,
        });
      }),
    []
  );

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) {
        (window as any).gtag("config", gtag.GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  Router.events.on("routeChangeStart", (_) => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <ChakraProvider theme={theme}>
      <WalletSelectorContextProvider>
        <QueryClientProvider client={queryClient}>
          <NextHead>
            <meta charSet="UTF-8" />
            <title>
              {" "}
              Meta Yield - Allow any project to bootstrap liquidity through
              staking on Meta Pool.
            </title>
          </NextHead>
          <PageBlocker
            isActive={pageBlocerState.isActive}
            message={pageBlocerState.message}
          />
          <Header />
          <Component {...pageProps} />

          <Footer />
          {/* enable analytics script only for production */}
          {isProduction && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}');
              `}
              </Script>
            </>
          )}
        </QueryClientProvider>
      </WalletSelectorContextProvider>
    </ChakraProvider>
  );
}

export default App;
