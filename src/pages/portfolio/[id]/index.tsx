import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppLayout from "components/ui/AppLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import ProjectPageContent from "modules/portfolio/ProjectPage";

const ProjectPage: NextPageWithLayout = () => {
  return <ProjectPageContent />;
};

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  /* const { id } = query; */

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home", "portfolio"])),
    },
  };
};
