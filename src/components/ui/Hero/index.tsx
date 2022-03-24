import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  useMantineTheme,
  Center,
} from "@mantine/core";
import Image from "next/image";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles(theme => ({
  wrapper: {
    // position: "absolute",
    boxSizing: "border-box",
    // left: 64,
    // bottom: 64,
    // backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    // [BREAKPOINT]: {
    //   left: 16,
    //   bottom: 16,
    // },
  },

  inner: {
    position: "relative",
    // paddingTop: 42,
    paddingBottom: 60,
    maxWidth: 700,

    // marginLeft: 32,

    [BREAKPOINT]: {
      paddingBottom: 80,
      // paddingTop: 80,
      // paddingRight: 28,
      // paddingLeft: 28,
    },
  },

  title: {
    fontFamily: `${theme.fontFamily}`,
    fontSize: 64,
    fontWeight: 900,
    lineHeight: 1.2,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colorScheme === "dark" ? "transparent" : theme.colors.dark[9],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : "transparent",

    "&:hover": {
      backgroundColor: `${
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      } !important`,
    },
  },
}));

export const MinskyHeroTitle = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <>
      <Container className={classes.wrapper}>
        <Group className={classes.inner}>
          <h1 className={classes.title}>
            A{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              inherit
            >
              new technological perspective
            </Text>{" "}
            for your ideas.
          </h1>
          <Text className={classes.description} color="dimmed">
            At Minsky, we design and build digital solutions that generate value for clients and
            society, both.
          </Text>

          {/* <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Get started
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="outline"
              className={cx(classes.control, classes.githubControl)}
              color={theme.colorScheme === "dark" ? "gray" : "dark"}
            >
              GitHub
            </Button>
          </Group> */}
        </Group>
      </Container>
    </>
  );
};
