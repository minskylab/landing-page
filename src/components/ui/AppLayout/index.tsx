import { ReactElement } from "react";
import { Container } from "@mantine/core";
import { MinskyLandingHeader } from "../Header/index";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Container mt="lg" size={"xl"}>
        <MinskyLandingHeader />
      </Container>
      {children}
    </>
  );
};

export default AppLayout;
