import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";

import { Provider as URQLProvider } from "urql";

import { URQLClient } from "lib/client";
import Fonts from "theming/fonts";
import { minskyBrandDark, minskyBrandPrimary } from "theming";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import { useLocalStorage } from "@mantine/hooks";

const client = URQLClient();

const FairpayApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <Head>
        <title>Minsky | Open Innovation</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <URQLProvider value={client}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: colorScheme,
              fontFamily: "Open Sans",
              fontFamilyMonospace: "Ubuntu Mono",
              colors: {
                brand: minskyBrandPrimary,
                dark: minskyBrandDark,
              },
              primaryColor: "brand",
            }}
          >
            <NotificationsProvider position="top-right">
              <Fonts />
              <Component {...pageProps} />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </URQLProvider>
    </>
  );
};

export default FairpayApp;
