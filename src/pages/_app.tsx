import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Fonts from "theming/fonts";
import { minskyBrandDark, minskyBrandPrimary } from "theming";
import { NotificationsProvider } from "@mantine/notifications";
import { useLocalStorage } from "@mantine/hooks";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

// const client = URQLClient();

const MinskyLandingApp = (props: AppProps & { colorScheme: ColorScheme }) => {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookies("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Minsky | Open Technology Innovation</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Script
        async
        src="https://analytics.internal.minsky.cc/tracker.js"
        data-ackee-server="https://analytics.internal.minsky.cc"
        data-ackee-domain-id="27dc13a2-fcf6-494a-99b6-dc40a0795946"
      />
      <Script defer data-domain="minsky.cc" src="https://plausible.io/js/plausible.js" />

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
            <DefaultSeo
              title="Minsky | Open Technology Innovation"
              description="We design and build digital solutions to generate value in our clients and society."
              canonical="https://minsky.cc/"
              openGraph={{
                type: "website",
                locale: "es_PE",
                url: "https://minsky.cc/",
                site_name: "Minsky",
                // title

                images: [
                  {
                    url: "/minsky_square_dark.png",
                    alt: "Minsky",
                    width: 512,
                    height: 512,
                  },
                  {
                    url: "/minsky_banner_dark.png",
                    alt: "Minsky",
                    width: 1140,
                    height: 600,
                  },
                ],
              }}
              twitter={{
                handle: "@MinskyLab",
                site: "@MinskyLab",
                cardType: "summary_large_image",
              }}
            />
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

MinskyLandingApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default MinskyLandingApp;
