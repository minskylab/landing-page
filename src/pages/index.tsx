import { HomePageContent } from "modules/home/HomePageContent";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppLayout from "components/ui/AppLayout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <HomePageContent />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home"])),
    },
  };
};
