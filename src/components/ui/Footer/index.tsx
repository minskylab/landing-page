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

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
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
    marginBottom: theme.spacing.xs / 2,
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

interface FooterLinksProps {
  sections: MinskyFooterSection[];
  tagline: string;
  brandTrademark: string;
}

export function MinskyFooter({ sections, tagline, brandTrademark }: FooterLinksProps) {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const groups = sections.map(group => {
    const links = group.links?.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
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
            {tagline}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          {brandTrademark}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            onClick={() => window.open("https://github.com/minskylab", "_blank")}
          >
            <BrandGithub size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => window.open("https://twitter.com/minskylab", "_blank")}
          >
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => window.open("https://www.instagram.com/minskylab/", "_blank")}
          >
            <BrandInstagram size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() =>
              window.open("https://www.youtube.com/channel/UCKJaMhGpxh_ffzZY7iXYiJw", "_blank")
            }
          >
            <BrandYoutube size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
