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
import { useMediaQuery } from "@mantine/hooks";
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
  cardContainer: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  cardTextSection: {
    flex: 1,
    [theme.fn.smallerThan("xs")]: {
      gap: 10,
    },
  },
  cardTitle: {
    fontSize: 45,
    [theme.fn.smallerThan("lg")]: {
      fontSize: 38,
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: 30,
    },
  },
  cardClient: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 14,
    },
  },
}));

const getLogo = (projectName: string, colorScheme: ColorScheme, largeScreen: boolean) => {
  return (
    <Center
      sx={theme => ({
        minWidth: 200,
        [theme.fn.smallerThan("md")]: {
          minWidth: 150,
        },
        [theme.fn.smallerThan("sm")]: {
          minWidth: 100,
        },
      })}
    >
      {projectName === "tele-us" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "pachatec" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "neo-vigilancia-integrada" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "loges" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "redmop" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "qronica" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "totemiq-experiences" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "experiencia-astronomica-vr" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "vax-canina" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "projection-mapping" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "workdyst" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
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
  const { classes, theme } = useStyles();
  const largeScreen = useMediaQuery(`(max-width: 1200px)`);
  const { colorScheme } = useMantineColorScheme();
  const logo = getLogo(project.link, colorScheme, largeScreen);
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
        <Group className={classes.cardContainer}>
          {logo}
          <Stack spacing={15} className={classes.cardTextSection}>
            <Text transform="uppercase" sx={{ letterSpacing: 2 }} className={classes.cardClient}>
              {project.client}
            </Text>
            <Text weight="bold" className={classes.cardTitle}>
              {project.name}{" "}
              <Text weight={400} className={classes.cardTitle}>
                {project.shortDescription}
              </Text>
            </Text>
            <Group spacing={10}>
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
