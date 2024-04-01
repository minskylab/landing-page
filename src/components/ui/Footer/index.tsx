import React from "react";
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram, BrandGithub } from "tabler-icons-react";
import MinskyLogotype from "../../future/MinskyLogo";
import { MinskyFooterSection } from "lib/landing/structure";
import { useTranslation } from "next-i18next";

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function MinskyFooter() {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { t } = useTranslation("home");

  const sections: MinskyFooterSection[] = t("footerInformation.sections", { returnObjects: true });

  const groups = sections.map(group => {
    const links = group.links?.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        /* href={link.link} */
        href="#"
        onClick={event => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <MinskyLogotype fillColor={colorScheme === "dark" ? "white" : "#060607"} />
          <Text size="xs" color="dimmed" className={classes.description}>
            {t("footerInformation.tagline")}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          {t("footerInformation.brandTrademark")}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            onClick={() => window.open("https://github.com/minskylab", "_blank")}
            title="GitHub"
            arial-label="GitHub"
          >
            <BrandGithub size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => window.open("https://twitter.com/minskylab", "_blank")}
            title="Twitter"
            arial-label="Twitter"
          >
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => window.open("https://www.instagram.com/minskylab/", "_blank")}
            title="Instagram"
            arial-label="Instagram"
          >
            <BrandInstagram size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() =>
              window.open("https://www.youtube.com/channel/UCKJaMhGpxh_ffzZY7iXYiJw", "_blank")
            }
            title="YouTube"
            arial-label="YouTube"
          >
            <BrandYoutube size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
