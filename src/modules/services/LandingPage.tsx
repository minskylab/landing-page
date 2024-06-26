import {
  Accordion,
  Button,
  Card,
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
  PlansDetailProps,
} from "lib/landing/structure";
import { GOOGLECALENDAR_URL } from "lib/utils";
import { useCallback } from "react";
import { useTranslation } from "next-i18next";
import {
  Lock,
  Palette,
  DeviceTablet,
  Headset,
  Affiliate,
  UserCheck,
  BrandWhatsapp,
  Check,
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
    titleProps: {
      marginBottom: `calc(${theme.spacing.xl} * 2)`,
      fontWeight: 900,
      textAlign: "center",

      [theme.fn.smallerThan("xs")]: {
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
    projectText: {
      textAlign: "center",

      [theme.fn.smallerThan("xs")]: {
        textAlign: "left",
      },
    },
    pricingRow: {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },
    listItemWrapper: {
      paddingRight: theme.spacing.lg,
    },
    plansTable: {
      display: "block",
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
    plansCards: {
      display: "none",
      [theme.fn.smallerThan("sm")]: {
        display: "block",
      },
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

const imagesLinks = [
  "https://raw.githubusercontent.com/minskylab/landing-page/main/src/assets/images/projects/WebPage1.webp",
  "https://raw.githubusercontent.com/minskylab/landing-page/main/src/assets/images/projects/WebPage2.webp",
  "https://raw.githubusercontent.com/minskylab/landing-page/main/src/assets/images/projects/WebPage3.webp",
  "https://raw.githubusercontent.com/minskylab/landing-page/main/src/assets/images/projects/WebPage4.webp",
  "https://raw.githubusercontent.com/minskylab/landing-page/main/src/assets/images/projects/WebPage5.webp",
  "https://raw.githubusercontent.com/minskylab/landing-page/main/src/assets/images/projects/WebPage6.webp",
];

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
  const plansdetail: PlansDetailProps[] = t("landingPage.pricing.plansDetail", {
    returnObjects: true,
  });
  const projectsText: string[] = t("landingPage.projectsText", {
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
              component="a"
              href="https://wa.me/+51936445786?text=Hola%20Minsky,%20soy%20[nombre],%20estoy%20buscando%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20Páginas%20Web,%20me%20interesa%20el%20plan%20[Startup/Profesional/Premium]."
              target="_blank"
              leftIcon={<BrandWhatsapp size={22} />}
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

      <Stack className={classes.inner}>
        <Title className={classes.titleProps}>{t("landingPage.differencesTitle")}</Title>

        <SimpleGrid
          mt={"xl"}
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
      </Stack>

      <Stack className={classes.inner}>
        <Stack m={"auto"} sx={{ maxWidth: 700 }} spacing={0}>
          <Title className={classes.titleProps}>{t("landingPage.projectsTitle")}</Title>
          {projectsText.map((item, index) => (
            <Text key={index} mt="md" className={classes.projectText}>
              {item}
            </Text>
          ))}
        </Stack>

        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "48rem", cols: 2, spacing: "md" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
          mt={`calc(${theme.spacing.xl} * 2)`}
        >
          {imagesLinks.map((item, index) => {
            return (
              <Card
                key={index}
                h={210}
                padding={0}
                shadow="md"
                radius="md"
                sx={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  width={"100%"}
                  src={item}
                  alt={"landingpage example"}
                  styles={{
                    image: {
                      objectFit: "cover",
                      objectPosition: "top",

                      "&:hover": {
                        transition: "transform 6s linear",
                        transform: "translateY(calc(-100% + 210px))",
                        /* objectPosition: "bottom", */
                      },
                    },
                  }}
                />
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>

      <ScrollArea miw={800} type="never" className={`${classes.inner} ${classes.plansTable}`}>
        <Title className={classes.titleProps}>{t("landingPage.pricing.title")}</Title>

        <SimpleGrid cols={4} px={"md"} py={"lg"} className={classes.pricingRow}>
          <Stack></Stack>
          {plans.map(({ id, name, price, monthlyPrice, button }: LandingPagePlans) => (
            <Stack key={name}>
              <Text fw={700} color="brand.5">
                {name}
              </Text>
              {id === "Profesional" ? (
                <Stack justify="center" sx={{ flex: 1 }}>
                  <Group>
                    <Button
                      size="sm"
                      component="a"
                      href="https://wa.me/+51936445786?text=Hola%20Minsky,%20soy%20[nombre],%20estoy%20buscando%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20Páginas%20Web,%20me%20interesa%20el%20plan%20[Startup/Profesional/Premium]."
                      target="_blank"
                      leftIcon={<BrandWhatsapp size={22} />}
                    >
                      {button}
                    </Button>
                  </Group>
                </Stack>
              ) : (
                <Stack spacing={4}>
                  <Title order={2} fz={36}>
                    {price}
                  </Title>

                  <Text fz={"sm"}>+ {monthlyPrice}</Text>
                </Stack>
              )}
            </Stack>
          ))}
        </SimpleGrid>
        {plansFeatures.map(({ name, basic, professional, premium }: LandingPagePlansFeatures) => (
          <SimpleGrid key={name} cols={4} px={"md"} py={"lg"} className={classes.pricingRow}>
            <Stack>
              <Text size="sm">{name}</Text>
            </Stack>
            <Stack>
              <List
                size="sm"
                classNames={{
                  itemWrapper: classes.listItemWrapper,
                }}
              >
                {basic.map((item, index) => {
                  return <List.Item key={index}>{item}</List.Item>;
                })}
              </List>
            </Stack>
            <Stack>
              <List
                size="sm"
                classNames={{
                  itemWrapper: classes.listItemWrapper,
                }}
              >
                {professional.map((item, index) => {
                  return <List.Item key={index}>{item}</List.Item>;
                })}
              </List>
            </Stack>
            <Stack>
              <List
                size="sm"
                classNames={{
                  itemWrapper: classes.listItemWrapper,
                }}
              >
                {premium.map((item, index) => {
                  return <List.Item key={index}>{item}</List.Item>;
                })}
              </List>
            </Stack>
          </SimpleGrid>
        ))}
      </ScrollArea>

      <Container size="sm" className={`${classes.inner} ${classes.plansCards}`}>
        <Title className={classes.titleProps}>{t("landingPage.pricing.title")}</Title>
        <Stack spacing={"xl"}>
          {plansdetail.map(
            ({ id, name, price, monthlyPrice, button, features }: PlansDetailProps) => (
              <Card key={id} shadow="md" p="lg" radius="md" withBorder>
                <Text fw={700} color="brand.5">
                  {name}
                </Text>
                {id === "Profesional" ? (
                  <Group mt={"xl"}>
                    <Button
                      size="sm"
                      component="a"
                      href="https://wa.me/+51936445786?text=Hola%20Minsky,%20soy%20[nombre],%20estoy%20buscando%20información%20sobre%20el%20servicio%20de%20desarrollo%20de%20Páginas%20Web,%20me%20interesa%20el%20plan%20[Startup/Profesional/Premium]."
                      target="_blank"
                      leftIcon={<BrandWhatsapp size={22} />}
                    >
                      {button}
                    </Button>
                  </Group>
                ) : (
                  <Stack spacing={4}>
                    <Title order={2} fz={36}>
                      {price}
                    </Title>

                    <Text fz={"sm"}>+ {monthlyPrice}</Text>
                  </Stack>
                )}

                {features.map((item, index) => {
                  return (
                    <Stack key={index} mt={"xl"}>
                      <Text fz={"sm"} fw={700}>
                        {item.name}
                      </Text>
                      {item.list.map((item, index) => {
                        return (
                          <Group key={index}>
                            <Check size={18} strokeWidth={2} color={theme.colors.brand[4]} />
                            <Text fz={"sm"} sx={{ flex: 1 }}>
                              {item}
                            </Text>
                          </Group>
                        );
                      })}
                    </Stack>
                  );
                })}
              </Card>
            ),
          )}
        </Stack>
      </Container>

      <Container size="sm" className={classes.inner}>
        <Title className={classes.titleProps}>{t("landingPage.faqsTitle")}</Title>

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
    </Container>
  );
}
