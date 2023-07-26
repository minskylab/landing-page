import { Title, createStyles, Box, Stack, Group, Text } from "@mantine/core";
import { useTranslation } from "next-i18next";

import { MinskyStack } from "lib/landing/structure";
import { techsImages } from "../../../assets/images/techs/index";
import Image from "next/image";
import { stackData } from "lib/data";
import { StackDataProps } from "../../../lib/data";

const useStyles = createStyles(theme => ({
  title: {
    fontWeight: 900,
    textAlign: "center",
    marginBottom: `calc(${theme.spacing.xl} * 4)`,
  },
}));

const ImageStack = ({ techs }: { techs: string[] }) => {
  const images = techs.map(tech => {
    const image = techsImages.find(data => data.id == tech);
    const name = stackData.find(({ label }: StackDataProps) => label === tech)?.name;
    return (
      <Group key={tech} miw={170}>
        {image ? <Image src={image.image} alt={image.id} /> : <></>}
        <Text>{name}</Text>
      </Group>
    );
  });

  return images;
};

export function MinskyStack() {
  const { classes } = useStyles();
  const { t } = useTranslation("home");

  const techs: MinskyStack[] = t("stackInformation.stack", { returnObjects: true });

  return (
    <Box>
      <Title className={classes.title}>{t("stackInformation.title")}</Title>

      <Stack spacing={40}>
        {techs.map(({ title, techs }) => {
          return (
            <Stack key={title}>
              <Title order={3}>{title}</Title>
              <Group>
                <ImageStack techs={techs} />
              </Group>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}
