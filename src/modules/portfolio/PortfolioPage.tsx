import {
  Container,
  Group,
  Stack,
  Text,
  Spoiler,
  Menu,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import IndustryNav from "components/ui/Portfolio/IndustryNav";
import ProjectCard, { ProjectType } from "components/ui/Portfolio/ProjectCard";
import { useTranslation } from "next-i18next";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import { useState } from "react";

const useStyles = createStyles(theme => ({
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
}));

export default function PortfolioPageContent() {
  const { classes } = useStyles();
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
      <Text py={80} weight={"bold"} className={classes.mainTitle}>
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
              <Text transform="uppercase">More projects</Text>
              <ChevronDown size={18} />
            </Group>
          }
          hideLabel={
            <Group>
              <Text transform="uppercase">Less projects</Text>
              <ChevronUp size={18} />
            </Group>
          }
          styles={{
            control: {
              margin: "10px 0px",
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
