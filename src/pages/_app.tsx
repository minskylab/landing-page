import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

import { Provider as URQLProvider } from "urql";

import { URQLClient } from "lib/client";
import Fonts from "theming/fonts";
import { minskyBrandDark, minskyBrandPrimary } from "theming";

const client = URQLClient();

const FairpayApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Minsky | Open Innovation</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <URQLProvider value={client}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "dark",
            colors: {
              brand: minskyBrandPrimary,
              dark: minskyBrandDark,
            },
            primaryColor: "brand",
          }}
        >
          <Fonts />
          <Component {...pageProps} />
        </MantineProvider>
      </URQLProvider>
    </>
  );
};

export default FairpayApp;
