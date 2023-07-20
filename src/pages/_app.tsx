import { ColorScheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactElement, ReactNode } from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import { getCookie } from "cookies-next";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { MyMantineProvider } from "theming/mantine";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<T> = AppProps & {
  Component: NextPageWithLayout<T>;
};

type MinskyAppProps = {
  colorScheme: ColorScheme;
};

const MinskyLandingApp = ({
  Component,
  pageProps,
  colorScheme,
}: AppPropsWithLayout<MinskyAppProps> & MinskyAppProps) => {
  const getLayout = Component.getLayout ?? (page => page);

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

      <MyMantineProvider colorScheme={colorScheme}>
        <Notifications position="top-right" />
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
        {getLayout(<Component {...pageProps} />)}
      </MyMantineProvider>
    </>
  );
};

MinskyLandingApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default appWithTranslation(MinskyLandingApp);
