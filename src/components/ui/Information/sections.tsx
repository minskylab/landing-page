import { Button, Grid, Group, Space, Text, Title } from "@mantine/core";
import { SymbolsIllustration, SystemIllustration } from "components/future/illustrations";
import { MinskyLandingSection } from "lib/landing/structure";
import { BrandGithub } from "tabler-icons-react";

type MinskyLandingSections = {
  sections: MinskyLandingSection[];
};

export function MinskyLandingSections({ sections }: MinskyLandingSections) {
  let aboutUsSection: MinskyLandingSection | undefined;
  let ourWorkSection: MinskyLandingSection | undefined;

  sections.forEach(section => {
    if (section.type === "about-us") {
      aboutUsSection = section;
      // if (typeof aboutUsSection.description === "string") {
      //   aboutUsSection.description = [aboutUsSection.description];
      // }
    }

    if (section.type === "our-work") {
      ourWorkSection = section;
      if (typeof ourWorkSection.description === "string") {
        ourWorkSection.description = [ourWorkSection.description];
      }
    }
  });

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
              {aboutUsSection?.title}
            </Title>
            {(typeof aboutUsSection?.description === "string"
              ? [aboutUsSection?.description]
              : aboutUsSection?.description
            )?.map(paragraph => (
              <Text
                key={paragraph}
                sx={theme => ({
                  // maxWidth: 320,
                  // marginTop: 12,
                  lineHeight: 1.68,
                  // fontSize: 18,
                })}
              >
                {paragraph}
              </Text>
            ))}

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
            {(typeof ourWorkSection?.description === "string"
              ? [ourWorkSection?.description]
              : ourWorkSection?.description
            )?.map(paragraph => (
              <Text
                key={paragraph}
                sx={{
                  // maxWidth: 320,
                  // marginTop: 12,
                  lineHeight: 1.68,
                  textAlign: "end",
                  // fontSize: 18,
                }}
              >
                {paragraph}
              </Text>
            ))}

            <Button color="dark" leftIcon={<BrandGithub />}>
              Our GitHub
            </Button>
          </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
}
