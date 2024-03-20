import {
  Accordion,
  Button,
  Container,
  Group,
  Image,
  List,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import {
  LandingPageDifferences,
  LandingPageFAQ,
  LandingPagePlans,
  LandingPagePlansFeatures,
} from "lib/landing/structure";
import { GOOGLECALENDAR_URL } from "lib/utils";
import { useCallback } from "react";
import { useTranslation } from "next-i18next";
import {
  CalendarEvent,
  Lock,
  Palette,
  DeviceTablet,
  Headset,
  Affiliate,
  UserCheck,
} from "tabler-icons-react";

const useStyles = createStyles(theme => {
  return {
    mainTitle: {
      fontSize: 38,
      fontFamily: `${theme.fontFamily}`,
      lineHeight: 1.2,
      [theme.fn.smallerThan("md")]: {
        fontSize: 34,
        padding: "40px 20px",
      },
    },
    inner: {
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },
    title: {
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: rem(28),
      },
    },
    control: {
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&[data-active]": {
        color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
      },
    },
    image: {
      width: rem(376),
      height: rem(356),
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        display: "none",
      },
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    highlight: {
      position: "relative",
      backgroundColor: theme.colors.brand,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
    titleProps: {
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: "center",

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: rem(28),
        textAlign: "left",
      },
    },
    description: {
      textAlign: "center",
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        textAlign: "left",
      },
    },
    itemFaq: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },
    titleFaq: {
      fontWeight: 900,
      fontFamily: "Open Sans",
      marginBottom: `calc(${theme.spacing.xl} * 2)`,
    },
    pricingRow: {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },
  };
});

const DifferenceIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "palette":
      return <Palette size={24} />;
    case "lock":
      return <Lock size={24} />;
    case "user":
      return <UserCheck size={24} />;
    case "device":
      return <DeviceTablet size={24} />;
    case "affiliate":
      return <Affiliate size={24} />;
    case "headset":
      return <Headset size={24} />;
    default:
      return <></>;
  }
};

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Difference({ icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <DifferenceIcon icon={icon} />
      </ThemeIcon>
      <Text fw={"600"} mt="sm" mb={7}>
        {title}
      </Text>
      <Text lh={1.6}>{description}</Text>
    </div>
  );
}

export default function LandingPageContent() {
  const { classes, theme } = useStyles();
  const { t } = useTranslation("services");

  const differences: LandingPageDifferences[] = t("landingPage.differences", {
    returnObjects: true,
  });
  const faqs: LandingPageFAQ[] = t("landingPage.faqs", { returnObjects: true });
  const plans: LandingPagePlans[] = t("landingPage.pricing.plans", { returnObjects: true });
  const plansFeatures: LandingPagePlansFeatures[] = t("landingPage.pricing.features", {
    returnObjects: true,
  });

  const handleClickExternalURL = useCallback(() => {
    window.open(GOOGLECALENDAR_URL, "_blank");
  }, []);

  return (
    <Container>
      <Group position="apart" noWrap className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>{t("landingPage.headline")}</Title>
          <Text mt="md">{t("landingPage.description")}</Text>

          <Group mt={30}>
            <Button
              size="md"
              onClick={handleClickExternalURL}
              leftIcon={<CalendarEvent size={22} />}
            >
              {t("landingPage.button")}
            </Button>
          </Group>
        </div>
        <Image
          src={"https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"}
          className={classes.image}
          alt="landing page"
        />
      </Group>
      <Container className={classes.wrapper}>
        <Title className={classes.titleProps}>{t("landingPage.differencesTitle")}</Title>

        <SimpleGrid
          mt={60}
          breakpoints={[
            { minWidth: "base", cols: 1, spacing: "xl", verticalSpacing: "xl" },
            { minWidth: "sm", cols: 2, spacing: "xl", verticalSpacing: "xl" },
            { minWidth: "md", cols: 3, spacing: 50, verticalSpacing: 50 },
          ]}
        >
          {differences.map(({ icon, title, description }) => (
            <Difference icon={icon} title={title} description={description} key={title} />
          ))}
        </SimpleGrid>

        <Container size="sm" className={classes.wrapper}>
          <Title align="center" className={classes.titleFaq}>
            {t("landingPage.faqsTitle")}
          </Title>

          <Accordion
            classNames={{
              item: classes.itemFaq,
              control: classes.control,
            }}
          >
            {faqs.map(({ title, description }: LandingPageFAQ) => (
              <Accordion.Item key={title} value={title}>
                <Accordion.Control>{title}</Accordion.Control>
                <Accordion.Panel>
                  {description.map((item, key) => {
                    return (
                      <Text key={key} pb={"xs"}>
                        {item}
                      </Text>
                    );
                  })}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
        <ScrollArea miw={800} type="never">
          <SimpleGrid cols={4} px={"md"} py={"lg"} className={classes.pricingRow}>
            <Stack></Stack>
            {plans.map(({ name, price, monthlyPrice, igv }: LandingPagePlans) => (
              <Stack key={name} align="center">
                <Text fw={700} color="brand.5">
                  {name}
                </Text>
                <Stack align="center" spacing={4}>
                  <Title order={2} fz={42}>
                    {price}
                  </Title>

                  <Text fw={700}>{monthlyPrice}</Text>
                  <Text color="gray.6" sx={{ fontSize: 14 }}>
                    {igv}
                  </Text>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
          {plansFeatures.map(({ name, basic, professional, premium }: LandingPagePlansFeatures) => (
            <SimpleGrid key={name} cols={4} px={"md"} py={"lg"} className={classes.pricingRow}>
              <Stack>
                <Text size="sm">{name}</Text>
              </Stack>
              <Stack>
                <List withPadding size="sm">
                  {basic.map((item, index) => {
                    return <List.Item key={index}>{item}</List.Item>;
                  })}
                </List>
              </Stack>
              <Stack>
                <List withPadding size="sm">
                  {professional.map((item, index) => {
                    return <List.Item key={index}>{item}</List.Item>;
                  })}
                </List>
              </Stack>
              <Stack>
                <List withPadding size="sm">
                  {premium.map((item, index) => {
                    return <List.Item key={index}>{item}</List.Item>;
                  })}
                </List>
              </Stack>
            </SimpleGrid>
          ))}
        </ScrollArea>
      </Container>
    </Container>
  );
}
