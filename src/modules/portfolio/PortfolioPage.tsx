import {
  Container,
  Group,
  Stack,
  Text,
  Spoiler,
  Menu,
  UnstyledButton,
  createStyles,
  useMantineColorScheme,
} from "@mantine/core";
import IndustryNav from "components/ui/Portfolio/IndustryNav";
import ProjectCard, { ProjectType } from "components/ui/Portfolio/ProjectCard";
import { useTranslation } from "next-i18next";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import { useState } from "react";

const useStyles = createStyles(theme => {
  const { colorScheme } = useMantineColorScheme();

  return {
    mainTitle: {
      fontSize: 48,
      fontFamily: `${theme.fontFamily}`,
      [theme.fn.smallerThan("lg")]: {
        fontSize: 38,
        paddingBottom: 40,
        paddingTop: 40,
      },
    },
    projectSection: {
      [theme.fn.smallerThan("lg")]: {
        flexDirection: "column",
      },
    },
    cardsection: {
      flexGrow: 1,
      [theme.fn.smallerThan("lg")]: {
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
    <Container size={"xl"}>
      <Text py={60} weight={"bold"} className={classes.mainTitle}>
        {t("headline")}
      </Text>
      <Group spacing={40} align="flex-start" className={classes.projectSection}>
        <Stack pl={20} sx={{ minWidth: 200 }}>
          <Text size="lg" weight={"bold"}>
            {t("industryTitle")}
          </Text>
          <IndustryNav setSelectedIndustry={setSelectedIndustry} />
        </Stack>
        <Spoiler
          maxHeight={560}
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
