import { HomePageContent } from "modules/home/HomePageContent";
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common','home'])),
    }
  }
}

export default HomePageContent;
