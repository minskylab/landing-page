import {
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  List,
  Group,
  Stack,
  Box,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import {
  AlphaIllustration,
  BethaIllustration,
  DeltaIllustration,
  GammaIllustration,
  LambdaIllustration,
  PiIllustration,
} from "components/future/illustrations";
import { MinskyServices } from "lib/landing/structure";

const useStyles = createStyles(theme => ({
  title: {
    fontWeight: 900,
    textAlign: "center",
    marginBottom: `calc(${theme.spacing.xl} * 4)`,
  },
}));

type ServiceProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

const ServiceIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "alfa":
      return <AlphaIllustration scale={0.5} />;
    case "beta":
      return <BethaIllustration scale={0.5} />;
    case "delta":
      return <DeltaIllustration scale={0.5} />;
    case "gamma":
      return <GammaIllustration scale={0.5} />;
    case "lambda":
      return <LambdaIllustration scale={0.5} />;
    case "pi":
      return <PiIllustration scale={0.5} />;
    default:
      return <></>;
  }
};

const Service = ({ icon, title, description, items }: ServiceProps) => {
  return (
    <Group align="flex-start">
      <ServiceIcon icon={icon} />

      <Stack sx={{ flex: 1 }}>
        <Title order={3}>{title}</Title>
        <Text>{description}</Text>
        <List>
          {items.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </Stack>
    </Group>
  );
};

export function ServicesGrid() {
  const { classes } = useStyles();
  const { t } = useTranslation("home");

  const services: MinskyServices[] = t("servicesInformation.services", { returnObjects: true });

  return (
    <Box id="services">
      <Title className={classes.title}>{t("servicesInformation.title")}</Title>

      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 755, cols: 1, spacing: "xl" }]}>
        {services.map(({ icon, title, description, items }) => (
          <Service icon={icon} title={title} description={description} items={items} key={title} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
