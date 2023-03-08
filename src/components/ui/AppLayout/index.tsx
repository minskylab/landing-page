import { ReactElement } from "react";
import { Container } from "@mantine/core";
import { MinskyLandingHeader } from "../Header/index";
import { MinskyFooter } from "../Footer";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Container mt="lg" size={"xl"}>
        <MinskyLandingHeader />
      </Container>
      {children}
      <MinskyFooter />
    </>
  );
};

export default AppLayout;
