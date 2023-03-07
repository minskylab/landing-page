import PortfolioPageContent from "modules/portfolio/PortfolioPage";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppLayout from "components/ui/AppLayout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const PortfolioPage: NextPageWithLayout = () => {
  return <PortfolioPageContent />;
};

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default PortfolioPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home", "portfolio"])),
    },
  };
};
