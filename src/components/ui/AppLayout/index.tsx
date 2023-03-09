import { ReactElement } from "react";
import { MinskyLandingHeader } from "../Header/index";
import { MinskyFooter } from "../Footer";
import { Box } from "@mantine/core";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <MinskyLandingHeader />
      <Box mt={104}>{children}</Box>
      <MinskyFooter />
    </>
  );
};

export default AppLayout;
