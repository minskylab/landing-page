import { createStyles, Container, Text, Group, useMantineTheme, Highlight } from "@mantine/core";
import { useTranslation } from "next-i18next";

const useStyles = createStyles(theme => ({
  wrapper: {
    boxSizing: "border-box",
    maxWidth: 800,

    [theme.fn.smallerThan("md")]: {
      maxWidth: 520,
    },
  },

  inner: {
    position: "relative",
  },

  description: {
    marginTop: theme.spacing.md,
    fontSize: 24,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: 400,
      fontSize: 18,
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [theme.fn.smallerThan("sm")]: {
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
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { t } = useTranslation("home");

  return (
    <>
      <Container className={classes.wrapper}>
        <Group className={classes.inner}>
          <Highlight
            highlight={t("headlineHighlight")}
            highlightStyles={{
              backgroundImage: theme.fn.linearGradient(
                45,
                theme.colors.orange[6],
                theme.colors.red[6],
              ),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            sx={theme => ({
              fontFamily: `${theme.fontFamily}`,
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.2,
              margin: 0,
              padding: 0,
              color: theme.colorScheme === "dark" ? theme.white : theme.black,

              [theme.fn.smallerThan("sm")]: {
                fontSize: 38,
                lineHeight: 1.2,
              },
            })}
          >
            {t("headline")}
          </Highlight>
          <Text className={classes.description} color="gray.6">
            {t("minimalDescription")}
          </Text>
        </Group>
      </Container>
    </>
  );
};
