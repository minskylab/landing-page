import {
  Container,
  Group,
  Stack,
  Text,
  Spoiler,
  createStyles,
  useMantineColorScheme,
  Box,
} from "@mantine/core";
import { IndustryMenu, IndustryNav } from "components/ui/Portfolio/IndustryNav";
import ProjectCard, { ProjectType } from "components/ui/Portfolio/ProjectCard";
import { useTranslation } from "next-i18next";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import { useState } from "react";

const useStyles = createStyles(theme => {
  const { colorScheme } = useMantineColorScheme();

  return {
    mainTitle: {
      fontSize: 38,
      fontFamily: `${theme.fontFamily}`,
      lineHeight: 1.2,
      [theme.fn.smallerThan("md")]: {
        fontSize: 34,
        padding: "40px 20px",
      },
    },
    menuSection: {
      display: "none",
      width: "100%",
      paddingLeft: 20,
      [theme.fn.smallerThan("md")]: {
        display: "block",
      },
    },
    navSection: {
      minWidth: 200,

      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    projectSection: {
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },
    cardsection: {
      flex: 1,
      [theme.fn.smallerThan("md")]: {
        width: "100%",
      },
    },
    spoilerLabel: {
      color: colorScheme === "dark" ? theme.colors.gray[3] : "black",
    },
  };
});

export default function PortfolioPageContent() {
  const { classes, theme } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { t } = useTranslation("portfolio");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const projectsList = t<string, ProjectType[]>("projects", { returnObjects: true }).filter(
    project => {
      if (!selectedIndustry) {
        return true;
      }

      return project.industry == selectedIndustry;
    }
  );

  const projects = projectsList.map((project, index: number) => {
    return <ProjectCard key={index} project={project} />;
  });

  return (
    <Container>
      <Text pt={40} pb={40} weight={"bold"} className={classes.mainTitle}>
        {t("headline")}
      </Text>
      <Group spacing={40} align="flex-start" className={classes.projectSection}>
        <Box className={classes.menuSection}>
          <IndustryMenu setSelectedIndustry={setSelectedIndustry} />
        </Box>
        <Stack className={classes.navSection}>
          <Text size="lg" weight={"bold"}>
            {t("industryTitle")}
          </Text>
          <IndustryNav setSelectedIndustry={setSelectedIndustry} />
        </Stack>
        <Spoiler
          maxHeight={660}
          showLabel={
            <Group>
              <Text weight={"bold"} className={classes.spoilerLabel}>
                More projects
              </Text>
              <ChevronDown size={18} className={classes.spoilerLabel} />
            </Group>
          }
          hideLabel={
            <Group>
              <Text weight={"bold"} className={classes.spoilerLabel}>
                Less projects
              </Text>
              <ChevronUp size={18} className={classes.spoilerLabel} />
            </Group>
          }
          styles={{
            control: {
              margin: "10px 0px",
              "&:hover": {
                color: colorScheme === "dark" ? theme.colors.gray[3] : "black",
                /* textDecoration: "none", */
              },
            },
          }}
          className={classes.cardsection}
        >
          <Stack pb={20}>{projects}</Stack>
        </Spoiler>
      </Group>
    </Container>
  );
}
