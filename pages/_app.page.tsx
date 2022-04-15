import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import Header  from "./components/Header";
import theme from "../theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component  {...pageProps} />;
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
