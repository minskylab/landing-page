import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  Drawer,
  Select,
  Title,
  UnstyledButton,
  Text,
  Anchor,
  Stack,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MoonStars, Sun, World, ChevronDown } from "tabler-icons-react";
import Link from "next/link";
import MinskyLogotype from "../../future/MinskyLogo";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

type MinskyLabelLink = {
  id: string;
  link: string;
  label: string;
  type: string;
};

type MinskyHeaderTopic = {
  id: string;
  link: string;
  label: string;
  type: string;
  links?: MinskyLabelLink[];
};

type LinkComponentProps = {
  link: MinskyLabelLink;
  variant: string;
};

const useStyles = createStyles(theme => ({
  inner: {
    /* height: HEADER_HEIGHT, */
    maxWidth: 1320,
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
    borderBottom: 0,
  },
}));

export function MinskyLandingHeader() {
  const { classes } = useStyles();
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation(["home", "common", "portfolio"]);
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleChangeLanguage = (e: string) => {
    router.push({ pathname, query }, asPath, { locale: e });
  };

  const topics: MinskyHeaderTopic[] = t("headerTopics", { returnObjects: true });

  const LinkComponent = ({ variant, link }: LinkComponentProps) => {
    const responsiveClass = variant == "desktop" ? classes.linkDesktop : classes.linkMobile;

    if (link.type == "page") {
      return (
        <Link href={link.link} style={{ textDecoration: "none" }}>
          <Text className={`${classes.link} ${responsiveClass}`}>{link.label}</Text>
        </Link>
      );
    }

    if (link.type == "externalLink") {
      return (
        <Anchor href={link.link} target="_blank" underline={false}>
          <Text className={`${classes.link} ${responsiveClass}`}>{link.label}</Text>
        </Anchor>
      );
    }

    return (
      <Anchor
        underline={false}
        onClick={() =>
          pathname === "/"
            ? document.getElementById(link.link)?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              })
            : router.push(`/#${link.link}`)
        }
      >
        <Text className={`${classes.link} ${responsiveClass}`}>{link.label}</Text>
      </Anchor>
    );
  };

  return (
    <Header
      zIndex={1}
      py={10}
      height={"auto"}
      className={classes.header}
      sx={{ position: "fixed", top: 0, left: 0 }}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
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
        <Group spacing={5} className={classes.links}>
          {topics.map((link: MinskyHeaderTopic) => {
            return <LinkComponent key={link.id} variant="desktop" link={link} />;
          })}
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
          <Button
            onClick={() =>
              pathname === "/"
                ? document.getElementById("contact")?.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  })
                : router.push("/#contact")
            }
          >
            {t("contactBtn", { ns: "common" })}
          </Button>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        padding={"md"}
        position="top"
        transitionProps={{
          transition: "slide-down",
        }}
      >
        <Stack>
          <Title order={4}>{t("mobileNavigationMenu.navigationTitle", { ns: "common" })}</Title>
          <Stack spacing={0}>
            {topics.map((link: MinskyHeaderTopic) => (
              <LinkComponent key={link.id} variant="mobile" link={link} />
            ))}
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
    </Header>
  );
}
