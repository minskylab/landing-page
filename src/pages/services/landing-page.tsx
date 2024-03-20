import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppLayout from "components/ui/AppLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import LandingPageContent from "modules/services/LandingPage";

const LandingPage: NextPageWithLayout = () => {
  return <LandingPageContent />;
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default LandingPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home", "services"])),
    },
  };
};
