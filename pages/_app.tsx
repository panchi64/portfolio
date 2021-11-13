import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "../theme/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
