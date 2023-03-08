import { Container, Group, Stack, Text, Spoiler } from "@mantine/core";
import IndustryNav from "components/ui/Portfolio/IndustryNav";
import ProjectCard, { ProjectType } from "components/ui/Portfolio/ProjectCard";
import { useTranslation } from "next-i18next";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import { useState } from "react";

export default function PortfolioPageContent() {
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
      <Text
        py={80}
        weight={"bold"}
        sx={theme => ({ fontSize: 48, fontFamily: `${theme.fontFamily}` })}
      >
        {t("headline")}
      </Text>
      <Group spacing={40} align="flex-start">
        <Stack sx={{ minWidth: 300 }}>
          <Text size="lg" weight={"bold"}>
            {t("industryTitle")}
          </Text>
          <IndustryNav setSelectedIndustry={setSelectedIndustry} />
        </Stack>
        <Spoiler
          maxHeight={580}
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
          sx={{ flexGrow: 1 }}
          styles={{
            control: {
              margin: "10px 0px",
            },
          }}
        >
          <Stack pb={20}>{projects}</Stack>
        </Spoiler>
      </Group>
    </Container>
  );
}
