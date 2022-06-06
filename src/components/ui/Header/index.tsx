import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  ColorSchemeProvider,
  Drawer,
  Text,
} from "@mantine/core";
import { useBooleanToggle, useWindowScroll } from "@mantine/hooks";
import { ChevronDown, MoonStars, Sun } from "tabler-icons-react";
import Link from "next/link";
import MinskyLogotype from "../../future/MinskyLogo";

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
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  colorSchemaToggler: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
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
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    fontFamily: `${theme.fontFamily}`,
    marginRight: 5,
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
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function MinskyLandingHeader({ links }: MinskyLandingHeaderProps) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [scroll, scrollTo] = useWindowScroll();

  const items = links.map(link => {
    const menuItems = link.links?.map(item => <Menu.Item key={item.link}>{item.label}</Menu.Item>);

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <Link href={`/${link.link}`}>
              <a href={link.link} className={classes.link}>
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <ChevronDown size={12} />
                </Center>
              </a>
            </Link>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <Link href={`/${link.link}`}>
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => toggleOpened(false)}
        title={
          <Text size="lg" weight={"bold"}>
            Navigation & Settings
          </Text>
        }
        padding={"md"}
        // padding="xl"
        size="sm"
        position="top"
      >
        {/* <h1 id="drawer-title">Title</h1>
        <div id="drawer-body">Body</div> */}
        <Group>
          <Text>Change theme:</Text>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            variant="default"
          // className={classes.colorSchemaToggler}
          >
            {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
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
          <Group spacing={5} className={classes.links}>
            {items}
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
            <Button radius="md" onClick={() => scrollTo({ y: 3229 })}>Contact</Button>
          </Group>
        </Container>
      </Header>
      {/* </ColorSchemeProvider> */}
    </>
  );
}
