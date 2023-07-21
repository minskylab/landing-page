import { Text, Title, Container, SimpleGrid, createStyles, List } from "@mantine/core";
import { useTranslation } from "next-i18next";
import { AlphaIllustration } from "components/future/illustrations";
import { MinskyServices } from "lib/landing/structure";

const useStyles = createStyles(theme => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 6)`,
  },

  title: {
    fontWeight: 900,
    textAlign: "center",
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,

    /*  [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    }, */
  },

  title_service: {
    fontWeight: 900,
    fontSize: 22,
  },

  description_service: {
    fontSize: 14,
  },
  service_list_item: {
    fontSize: 14,
  },
}));

type ServiceProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

const ServiceIcon = (icon?: string) => {
  switch (icon) {
    case "alfa":
      return <AlphaIllustration scale={0.5} />;
    default:
      return <></>;
  }
};

const Service = ({ icon, title, description, items }: ServiceProps) => {
  const { classes } = useStyles();

  return (
    <div>
      <AlphaIllustration scale={0.7} />

      <Text my="md" className={classes.title_service}>
        {title}
      </Text>

      <Text sx={{ lineHeight: 1.6 }} mb={15} className={classes.description_service}>
        {description}
      </Text>
      <List>
        {items.map((item, index) => (
          <List.Item key={index} className={classes.service_list_item}>
            {item}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export function ServicesGrid() {
  const { classes } = useStyles();
  const { t } = useTranslation("home");

  const services: MinskyServices[] = t("servicesInformation.services", { returnObjects: true });

  return (
    <Container id="services" className={classes.wrapper}>
      <Title className={classes.title}>{t("servicesInformation.title")}</Title>

      <SimpleGrid
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {services.map(({ icon, title, description, items }) => (
          <Service icon={icon} title={title} description={description} items={items} key={title} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
