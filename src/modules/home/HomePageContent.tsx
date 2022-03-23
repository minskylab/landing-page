import { Center, Container, Grid } from "@mantine/core";
import { MinskyLandingHeader } from "components/ui/Header";
import { MinskyHeroTitle } from "components/ui/Hero";
import { ListUsers } from "modules/users/ListUsers";
import Image from "next/image";

const HomePageContent = () => {
  return (
    <>
      <Container mt="lg" size={"xl"}>
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
      <Center>
        <Image src="/minimal_automata.png" alt="hero-ca" width={520} height={520}></Image>
      </Center>
      <Container>
        <MinskyHeroTitle />
      </Container>
    </>
  );
};

export { HomePageContent };
