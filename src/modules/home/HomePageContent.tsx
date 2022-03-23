import { Container, Grid } from "@mantine/core";
import { MinskyLandingHeader } from "components/ui/Header";
import { ListUsers } from "modules/users/ListUsers";

const HomePageContent = () => {
  return (
    <>
      <MinskyLandingHeader
        links={[
          { label: "Welcome", link: "home" },
          { label: "Organization", link: "organization" },
        ]}
      ></MinskyLandingHeader>
      <Container>
        <Grid grow gutter={"md"}>
          <Grid.Col span={12}> 1</Grid.Col>
          <Grid.Col span={3}> 2</Grid.Col>
          <Grid.Col span={3}> 3</Grid.Col>
          <Grid.Col span={3}> 3</Grid.Col>
          <Grid.Col span={3}> 3</Grid.Col>
          <Grid.Col span={3}> 3</Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export { HomePageContent };
