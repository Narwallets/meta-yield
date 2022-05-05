import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import Header from "./components/Header";
import theme from "../theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";
function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
