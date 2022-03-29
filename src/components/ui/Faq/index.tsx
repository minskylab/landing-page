import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";
import { MinskyFAQ } from "lib/landing/structure";

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

type MinskySimpleFAQProps = {
  title: string;
  faqs: MinskyFAQ[];
};

export function MinskySimpleFAQ({ title, faqs }: MinskySimpleFAQProps) {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        {title}
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        {faqs.map(faq => (
          <Accordion.Item key={faq.answer} label={faq.question}>
            {faq.answer}
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
