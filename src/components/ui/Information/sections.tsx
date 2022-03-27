import { Button, Grid, Group, Space, Text, Title } from "@mantine/core";
import { SymbolsIllustration, SystemIllustration } from "components/future/illustrations";
import { BrandGithub } from "tabler-icons-react";

export function MinskyLandingSections() {
  return (
    <Grid>
      <Grid.Col sm={12} md={5}>
        <Group sx={{ justifyContent: "flex-start" }} m={6}>
          <SymbolsIllustration scale={0.62} />
        </Group>
        <Group position="left">
          <Group sx={{ justifyContent: "flex-start", maxWidth: 380, marginTop: 12 }} spacing={"md"}>
            <Title
              sx={theme => ({
                // fontSize: 42,
                fontWeight: 900,
                fontFamily: "Open Sans",
                textAlign: "start",
              })}
            >
              Who we are?
            </Title>
            <Text
              sx={theme => ({
                // maxWidth: 320,
                // marginTop: 12,
                lineHeight: 1.68,
                // fontSize: 18,
              })}
            >
              We are an organization that seeks to offer high-quality technology to society. We
              design and implement technological solutions to Academy and Companies, supported by
              Open Source on the shoulders of giants.
            </Text>
            <Text
              sx={{
                lineHeight: 1.68,
              }}
            >
              We are a team of people who are passionate about software development in particular,
              and technology in general.
            </Text>
            <Button>Our Dream Team</Button>
          </Group>
        </Group>
      </Grid.Col>
      <Grid.Col sm={12} md={7}>
        <Space h="xl" />
        {/* 2 */}
      </Grid.Col>
      <Grid.Col sm={12} md={7}>
        {/* 3 */}
        <Space h="xl" />
      </Grid.Col>
      <Grid.Col sm={12} md={5}>
        <Group sx={{ justifyContent: "flex-end" }} m={6}>
          <SystemIllustration scale={0.68} />
        </Group>
        <Group position="right">
          <Group
            sx={{
              justifyContent: "flex-end",
              maxWidth: 380,
              marginTop: 12,
            }}
            // position="right"
            spacing={"md"}
          >
            <Title
              sx={{
                // fontSize: 42,
                fontWeight: 900,
                fontFamily: "Open Sans",
                textAlign: "end",
              }}
            >
              What do we do?
            </Title>
            <Text
              sx={{
                // maxWidth: 320,
                // marginTop: 12,
                lineHeight: 1.68,
                textAlign: "end",
                // fontSize: 18,
              }}
            >
              We are working with partners and the academy to develop and launch software products,
              taking into consideration a holistic path and a comprehensive vision. Further, we have{" "}
              <a href="">job opportunities</a> for local developers (Peru), improving their
              experience and pleasure of crafting software.
            </Text>
            <Text
              sx={theme => ({
                // marginTop: 18,
                // maxWidth: 320,
                lineHeight: 1.68,
                textAlign: "end",
                // fontSize: 18,
              })}
            >
              We love to create pieces of software that are useful for all of us. All our
              exploration and proposals are open to the public in our repositories.
            </Text>
            <Button color="dark" leftIcon={<BrandGithub />}>
              Our GitHub
            </Button>
          </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
}
