import {
  Card,
  Center,
  ColorScheme,
  createStyles,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import LogesLogo from "assets/LogesLogo";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const useStyles = createStyles(theme => ({
  card: {
    cursor: "pointer",
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));

const getLogo = (projectName: string, colorScheme: ColorScheme) => {
  return (
    <Center sx={{ minWidth: 200 }}>
      {projectName === "tele-us" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "pachatec" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "neo-vigilancia-integrada" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "loges" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "redmop" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "qronica" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "totemiq-experiences" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "experiencia-astronomica-vr" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "vax-canina" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "projection-mapping" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
      {projectName === "workdyst" && (
        <LogesLogo scale={0.3} fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined} />
      )}
    </Center>
  );
};

export type ProjectType = {
  name: string;
  link: string;
  shortDescription: string;
  description: string;
  client: string;
  program: string;
  industry: string;
  services: string[];
  stack: string[];
};

interface ProjectCardProps {
  project: ProjectType;
}

type ServicesProps = {
  name: string;
  label: string;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const logo = getLogo(project.link, colorScheme);
  const { t } = useTranslation("portfolio");

  const getServiceName = (service: string) => {
    const serviceName = t<string, ServicesProps[]>("services", { returnObjects: true }).find(
      ({ label }) => label === service
    );
    return serviceName?.name;
  };

  return (
    <Link href={`/portfolio/${project.link}`} passHref>
      <Card p="xl" radius="md" className={classes.card}>
        <Group>
          <Center sx={{ minWidth: 200 }}>{logo}</Center>
          <Stack spacing={20}>
            <Text transform="uppercase" sx={{ letterSpacing: 2 }}>
              {project.client}
            </Text>
            <Text sx={{ fontSize: 45 }} weight="bold">
              {project.name} <Text inherit>{project.shortDescription}</Text>
            </Text>
            <Group>
              {project.services.map((service, index) => {
                return (
                  <Text key={index} color="dimmed" size="sm">
                    {getServiceName(service)}
                  </Text>
                );
              })}
            </Group>
          </Stack>
        </Group>
      </Card>
    </Link>
  );
};

export default ProjectCard;
