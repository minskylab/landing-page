import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppLayout from "components/ui/AppLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import ServicesPageContent from "modules/services/ServicesPage";

const ServicesPage: NextPageWithLayout = () => {
  return <ServicesPageContent />;
};

ServicesPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default ServicesPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home", "services"])),
    },
  };
};
