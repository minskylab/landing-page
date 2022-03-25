import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef("control");

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },

    title: {
      fontWeight: 900,
      fontFamily: "Open Sans",
      marginBottom: theme.spacing.xl * 1.5,
    },

    control: {
      ref: control,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },

    itemOpened: {
      [`& .${control}`]: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
      },
    },
  };
});

const placeholder = "We're currently working on a new FAQ page. Please check back soon. Sorry :(";

export function MinskySimpleFAQ() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        <Accordion.Item label="Where are your pricing system?">{placeholder}</Accordion.Item>
        <Accordion.Item label="Can you develop my web/mobile app?">{placeholder}</Accordion.Item>
        <Accordion.Item label="What's the experience of your team?">{placeholder}</Accordion.Item>
        <Accordion.Item label="Do you have any kind of quality certification?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="I'm a developer, how can I work at Minsky?">
          {placeholder}
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
