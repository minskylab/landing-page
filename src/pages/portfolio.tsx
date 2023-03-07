import PortfolioPageContent from "modules/portfolio/PortfolioPage";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "portfolio"])),
    },
  };
};

export default PortfolioPageContent;
