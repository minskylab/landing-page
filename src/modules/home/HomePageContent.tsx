import { Container, Grid } from "@mantine/core";
import { MinskyLandingHeader } from "components/ui/Header";
import { MinskyHeroTitle } from "components/ui/Hero";
import { ListUsers } from "modules/users/ListUsers";

const HomePageContent = () => {
  return (
    <>
      <Container mt="lg">
        <MinskyLandingHeader
          links={[
            { label: "Welcome", link: "home" },
            { label: "Platform", link: "platform" },
            { label: "Partners", link: "partners" },
            { label: "Academy", link: "academy" },
            { label: "Developers", link: "developers" },
          ]}
        />
      </Container>
      <MinskyHeroTitle />
    </>
  );
};

export { HomePageContent };
