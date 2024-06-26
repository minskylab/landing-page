import { Center, Group, Modal, Stack, Text, createStyles, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

import { ProjectLogo } from "./ProjectLogo";
import { ProjectType } from "./ProjectCard";
import { IndustryProps } from "./IndustryNav";
import { clientsImages } from "assets/images";
import { StackDataProps, stackData } from "lib/data";

const useStyles = createStyles(theme => ({
  modal: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    [theme.fn.smallerThan("md")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },
  container: {
    [theme.fn.smallerThan("md")]: {
      gap: theme.spacing.xl,
    },
  },
  leftSection: {
    width: 500,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
  image: {
    [theme.fn.smallerThan("md")]: {
      width: 50,
      height: 50,
    },
  },
  title: {
    fontSize: `calc(${theme.spacing.xl} * 1.5)`,
    [theme.fn.smallerThan("md")]: {
      fontSize: `calc(${theme.spacing.xl} * 1.2)`,
    },
  },
  description: {
    fontSize: `calc(${theme.spacing.lg} * 1.5)`,
    [theme.fn.smallerThan("md")]: {
      fontSize: `calc(${theme.spacing.lg} * 1.2)`,
    },
  },
  stackText: {
    maxWidth: 200,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
}));

type ProjectDetailProps = {
  project: ProjectType;
  services: (string | undefined)[];
  client: string | undefined;
  opened: boolean;
  close: () => void;
};

const ClientImage = ({
  clientId,
  clientName,
}: {
  clientId: string;
  clientName: string | undefined;
}) => {
  const theme = useMantineTheme();
  const clientImageData = clientsImages.find(client => client.id === clientId);

  const image =
    theme.colorScheme === "dark" ? clientImageData?.iconDarkmode : clientImageData?.iconLightmode;

  return image ? (
    <Image height={40} src={image} alt={clientId} />
  ) : (
    <Text fz={"sm"}>{clientName}</Text>
  );
};

export const ProjectDetail = ({ project, services, client, opened, close }: ProjectDetailProps) => {
  const { classes, theme } = useStyles();
  const { t } = useTranslation("portfolio");

  const router = useRouter();
  const { pathname, query } = useRouter();
  const hash = router.asPath.split("#")[1] || "";

  const doubleXl = `calc(${theme.spacing.xl} * 2)`;
  const smallScreen = useMediaQuery(`(max-width: 770px)`);

  const industries: IndustryProps[] = t("industries", { returnObjects: true });

  const industry = industries.find(({ label }: IndustryProps) => label === project.industry)?.name;
  const stacks = project.stack
    .map(stack => {
      const name = stackData.find(({ label }: StackDataProps) => label === stack)?.name;
      return name;
    })
    .join(", ");

  return (
    <Modal
      centered
      size="auto"
      padding={doubleXl}
      opened={hash == project.link ? true : opened}
      onClose={() => {
        close();
        router.push({
          pathname: pathname,
          query: query,
        });
      }}
      withCloseButton={false}
      classNames={{
        body: classes.modal,
      }}
    >
      <Group position="apart" align="flex-start" spacing={doubleXl} className={classes.container}>
        <Stack spacing={"xl"} className={classes.leftSection}>
          <Group>
            <Center w={100} h={100} className={classes.image}>
              <ProjectLogo projectName={project.id} smallScreen={smallScreen} />
            </Center>

            <Stack sx={{ flex: 1 }}>
              <Text weight="bold" sx={{ lineHeight: 1 }} className={classes.title}>
                {project.name}
              </Text>
              <Text weight={400} sx={{ lineHeight: 1.2 }} className={classes.description}>
                {project.tagline}
              </Text>
            </Stack>
          </Group>
          <Text>{project.description}</Text>
        </Stack>

        <Stack>
          <Stack spacing={5}>
            <Text fz={"sm"} color="gray.6">
              {t("titles.client")}
            </Text>

            <ClientImage clientId={project.client} clientName={client} />
          </Stack>

          <Stack spacing={5}>
            <Text fz={"sm"} color="gray.6">
              {t("titles.services")}
            </Text>
            <Stack spacing={0}>
              {services.map((s, index) => {
                return (
                  <Text key={index} fz={"sm"}>
                    {s}
                  </Text>
                );
              })}
            </Stack>
          </Stack>

          <Stack spacing={5}>
            <Text fz={"sm"} color="gray.6">
              {t("titles.industry")}
            </Text>
            <Text fz={"sm"}>{industry}</Text>
          </Stack>

          <Stack spacing={5}>
            <Text fz={"sm"} color="gray.6">
              {t("titles.repository")}
            </Text>
            <Text fz={"sm"}>{project.repository}</Text>
          </Stack>

          <Stack spacing={5}>
            <Text fz={"sm"} color="gray.6">
              {t("titles.stack")}
            </Text>
            <Text fz={"sm"} className={classes.stackText}>
              {stacks}
            </Text>
          </Stack>
        </Stack>
      </Group>
    </Modal>
  );
};
