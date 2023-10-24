import { Card, Center, createStyles, Group, Stack, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { ProjectLogo } from "./ProjectLogo";
import { ProjectDetail } from "./ProjectDetail";

const useStyles = createStyles(theme => ({
  card: {
    cursor: "pointer",
    transition: "transform 150ms ease, box-shadow 150ms ease",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
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
    [theme.fn.smallerThan("sm")]: {
      gap: 10,
      alignSelf: "flex-start",
    },
  },
  cardTitle: {
    lineHeight: 1.3,
    fontSize: 34,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 30,
    },
  },
  cardClient: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: 14,
    },
  },
}));

export type ProjectType = {
  id: string;
  name: string;
  link: string;
  tagline: string;
  description: string;
  client: string;
  program: string;
  industry: string;
  repository: string;
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

export const getServiceName = ({
  service,
  servicesList,
}: {
  service: string;
  servicesList: ServicesProps[];
}) => {
  const serviceName = servicesList.find(({ label }: ServicesProps) => label === service);
  return serviceName?.name;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery(`(max-width: 770px)`);

  const { t } = useTranslation("portfolio");
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const servicesList: ServicesProps[] = t("services", { returnObjects: true });
  const clientsList: ServicesProps[] = t("clients", { returnObjects: true });

  const services = project.services.map(service => {
    const name = getServiceName({ service: service, servicesList: servicesList });
    return name;
  });
  const client = clientsList.find(({ label }: ServicesProps) => label === project.client)?.name;

  return (
    <>
      <ProjectDetail
        project={project}
        services={services}
        client={client}
        opened={opened}
        close={close}
      />
      {/*  <Link href={`/portfolio/${project.link}`} passHref style={{ textDecoration: "none" }}> */}
      <Card
        p="xl"
        radius="md"
        shadow="sm"
        className={classes.card}
        onClick={() => {
          open();
          router.push(`#${project.link}`);
        }}
      >
        <Group className={classes.cardContainer}>
          <Center
            sx={theme => ({
              minWidth: 150,
              [theme.fn.smallerThan("sm")]: {
                minWidth: 100,
                height: 100,
              },
            })}
          >
            <ProjectLogo projectName={project.id} smallScreen={smallScreen} />
          </Center>
          <Stack spacing={15} className={classes.cardTextSection}>
            <Text transform="uppercase" sx={{ letterSpacing: 2 }} className={classes.cardClient}>
              {client}
            </Text>
            <Text weight="bold" className={classes.cardTitle}>
              {project.name}
              <Text weight={400} className={classes.cardTitle}>
                {project.tagline}
              </Text>
            </Text>
            <Group spacing={10}>
              {services.map((s, index) => {
                return (
                  <Text key={index} color="gray.6" size="sm">
                    {s}
                  </Text>
                );
              })}
            </Group>
          </Stack>
        </Group>
      </Card>
      {/* </Link> */}
    </>
  );
};
