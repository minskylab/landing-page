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
  Select
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { MoonStars, Sun, World, ChevronDown } from "tabler-icons-react";
import Link from "next/link";
import MinskyLogotype from "../../future/MinskyLogo";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'

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
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontFamily: `${theme.fontFamily}`,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    }
  },
  selectLanguage: {
    width: "130px",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  selectLanguageBurger: {
    width: "130px",
  },
  burgerGroup: {
    marginBottom: theme.spacing.xs,
  },

  /*   linkLabel: {
      fontFamily: `${theme.fontFamily}`,
      marginRight: 5,
    }, */

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
    links?: { link: string; label: string }[]
  }[];
}

export function MinskyLandingHeader() {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation(['home', 'common']);
  const router = useRouter()

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
    router.locale === "en" ? router.push('/', '/', { locale: 'en' }) : router.push('/es');
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => toggleOpened(false)}
        title={
          <Text size="lg" weight={"bold"}>
            {t("burger-menu.title",{ ns: 'common' })}
          </Text>
        }
        padding={"md"}
        // padding="xl"
        size="sm"
        position="top"
      >
        {/* <h1 id="drawer-title">Title</h1>
        <div id="drawer-body">Body</div> */}
        <Group className={classes.burgerGroup}>
          <Text> {t("burger-menu.theme-description", { ns: 'common' })}</Text>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            variant="default"
          // className={classes.colorSchemaToggler}
          >
            {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
        <Group>
          <Text>{t("burger-menu.language-description",{ ns: 'common' })}</Text>
          <Select
            defaultValue={router.locale}
            onChange={(e: string) => { handleChangeLanguage(e) }}
            data={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
            ]}
            icon={<World size={18} />}
            rightSection={<ChevronDown size={18} />}
            className={classes.selectLanguageBurger}
          />
        </Group>
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
            />
            <MinskyLogotype typographyColor={colorScheme === "dark" ? "white" : undefined} />
          </Group>
          {/* <Group spacing={5} className={classes.links}>
            {items}
          </Group> */}
          <Group spacing={5} className={classes.links}>
            {t<string, MinskyHeaderTopic[]>("headerTopics", { returnObjects: true }).map(
              ({ label, link }, index: number) => (
                <Link key={index} href={`/${link}`}>
                  <a className={classes.link}>{label}</a>
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
            >
              {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
            <Select
              defaultValue={router.locale}
              onChange={(e: string) => { handleChangeLanguage(e) }}
              data={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
              ]}
              icon={<World size={18} />}
              rightSection={<ChevronDown size={18} />}
              className={classes.selectLanguage}
            />
            <Button component="a" href="#contact">{t('btn-contact', { ns: 'common' })}</Button>
          </Group>
        </Container>
      </Header>
      {/* </ColorSchemeProvider> */}
    </>
  );
}
