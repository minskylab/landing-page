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
import LogesLogo from "assets/Logos/LogesLogo";
import NviLogo from "assets/Logos/NviLogo";
import PachatecLogo from "assets/Logos/PachatecLogo";
import QronicaLogo from "assets/Logos/QronicaLogo";
import RedmopLogo from "assets/Logos/RedmopLogo";
import TeleusLogo from "assets/Logos/TeleusLogo";
import TotemiqLogo from "assets/Logos/TotemiqLogo";
import VaxcaninaLogo from "assets/Logos/VaxcaninaLogo";
import WorkdystLogo from "assets/Logos/WorkdystLogo";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const useStyles = createStyles(theme => ({
  card: {
    cursor: "pointer",
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.02)",
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
      alignSelf: "flex-start",
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
          height: 100,
        },
      })}
    >
      {projectName === "tele-us" && <TeleusLogo scale={largeScreen ? 0.2 : 0.25} />}
      {projectName === "pachatec" && (
        <PachatecLogo
          scale={largeScreen ? 0.25 : 0.3}
          fillColor={colorScheme === "dark" ? "#245C4B" : undefined}
        />
      )}
      {projectName === "neo-vigilancia-integrada" && (
        <NviLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillColor={colorScheme === "dark" ? "#F43D4E" : undefined}
        />
      )}
      {projectName === "loges" && (
        <LogesLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      )}
      {projectName === "redmop" && <RedmopLogo scale={largeScreen ? 0.2 : 0.3} />}
      {projectName === "qronica" && (
        <QronicaLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillColorFront={colorScheme === "dark" ? "#86C8E4" : undefined}
          fillColorBack={colorScheme === "dark" ? "#2E6ECD" : undefined}
        />
      )}
      {projectName === "totemiq-experiences" && (
        <TotemiqLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillColor={colorScheme === "dark" ? "#FFFFFF" : undefined}
        />
      )}
      {projectName === "experiencia-astronomica-vr" && <></>}
      {projectName === "vax-canina" && <VaxcaninaLogo scale={largeScreen ? 0.2 : 0.3} />}
      {projectName === "projection-mapping" && <></>}
      {projectName === "workdyst" && (
        <WorkdystLogo
          scale={largeScreen ? 0.2 : 0.3}
          fillColorFront={colorScheme === "dark" ? "#26ED7C" : undefined}
          fillColorBack={colorScheme === "dark" ? "#4661F2" : undefined}
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
  const { classes } = useStyles();
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
      <Card p="xl" radius="md" shadow="sm" className={classes.card}>
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
