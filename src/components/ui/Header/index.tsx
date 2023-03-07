import {
  createStyles,
  Menu,
  Header,
  Container,
  Group,
  Button,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  Drawer,
  Text,
  Select,
  Divider,
  Title,
  Stack,
  UnstyledButton,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { MoonStars, Sun, World, ChevronDown } from "tabler-icons-react";
import Link from "next/link";
import MinskyLogotype from "../../future/MinskyLogo";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HEADER_HEIGHT = 60;
const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles(theme => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  colorSchemaToggler: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontFamily: `${theme.fontFamily}`,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
  linkDesktop: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
  },
  linkMobile: {
    padding: "8px",
  },
  selectLanguage: {
    width: 130,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  selectBurger: {
    width: 130,
  },
  header: {
    marginBottom: 80,
    borderBottom: 0,
    [theme.fn.smallerThan("sm")]: {
      marginBottom: 12,
    },
  },
}));

interface MinskyLandingHeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function MinskyLandingHeader() {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation(["home", "common", "portfolio"]);
  const router = useRouter();

  type MinskyLabelLink = {
    link: string;
    label: string;
  };

  type MinskyHeaderTopic = {
    link: string;
    label: string;
    links?: MinskyLabelLink[];
  };

  const handleChangeLanguage = (e: string) => {
    router.locale = e === "en" ? "en" : "es";
    router.locale === "en" ? router.push("/", "/", { locale: "en" }) : router.push("/es");
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => toggleOpened(false)}
        padding={"md"}
        size={"xl"}
        position="top"
      >
        <Stack>
          <Title order={4}>{t("mobileNavigationMenu.navigationTitle", { ns: "common" })}</Title>
          <Stack spacing={0}>
            {t<string, MinskyHeaderTopic[]>("headerTopics", { returnObjects: true }).map(
              ({ label, link }, index: number) => (
                <Link key={index} href={`/${link}`}>
                  <a className={`${classes.link} ${classes.linkMobile}`}>{label}</a>
                </Link>
              )
            )}
          </Stack>
        </Stack>
        <Divider my="sm" />
        <Stack>
          <Title order={4}>{t("mobileNavigationMenu.settingsTitle", { ns: "common" })}</Title>
          <Group>
            <Select
              defaultValue={colorScheme}
              onChange={() => toggleColorScheme()}
              data={[
                { value: "light", label: "Light" },
                { value: "dark", label: "Dark" },
              ]}
              icon={colorScheme === "dark" ? <MoonStars size={18} /> : <Sun size={18} />}
              rightSection={<ChevronDown size={18} />}
              styles={{ rightSection: { pointerEvents: "none" } }}
              className={classes.selectBurger}
            />
            <Select
              defaultValue={router.locale}
              onChange={(e: string) => {
                handleChangeLanguage(e);
              }}
              data={[
                { value: "en", label: "English" },
                { value: "es", label: "Español" },
              ]}
              icon={<World size={18} />}
              rightSection={<ChevronDown size={18} />}
              styles={{ rightSection: { pointerEvents: "none" } }}
              className={classes.selectBurger}
            />
          </Group>
        </Stack>
      </Drawer>
      {/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}> */}
      <Header height={HEADER_HEIGHT} className={classes.header}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              className={classes.burger}
              size="sm"
              mr={"sm"}
              title="Open navigation"
              arial-label="Open navigation"
            />
            <Link href="/" passHref>
              <UnstyledButton>
                <MinskyLogotype typographyColor={colorScheme === "dark" ? "white" : undefined} />
              </UnstyledButton>
            </Link>
          </Group>
          {/* <Group spacing={5} className={classes.links}>
            {items}
          </Group> */}
          <Group spacing={5} className={classes.links}>
            {t<string, MinskyHeaderTopic[]>("headerTopics", { returnObjects: true }).map(
              ({ label, link }, index: number) => (
                <Link key={index} href={`/${link}`}>
                  <a className={`${classes.link} ${classes.linkDesktop}`}>{label}</a>
                </Link>
              )
            )}
          </Group>
          <Group position="center" my="xl">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              variant="default"
              className={classes.colorSchemaToggler}
              title="Mode"
              arial-label="Mode"
            >
              {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
            <Select
              defaultValue={router.locale}
              onChange={(e: string) => {
                handleChangeLanguage(e);
              }}
              data={[
                { value: "en", label: "English" },
                { value: "es", label: "Español" },
              ]}
              icon={<World size={18} />}
              rightSection={<ChevronDown size={18} />}
              styles={{ rightSection: { pointerEvents: "none" } }}
              className={classes.selectLanguage}
            />
            <Button component="a" href="#contact">
              {t("contactBtn", { ns: "common" })}
            </Button>
          </Group>
        </Container>
      </Header>
      {/* </ColorSchemeProvider> */}
    </>
  );
}
