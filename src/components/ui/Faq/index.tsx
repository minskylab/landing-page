import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";
import { MinskyFAQ } from "lib/landing/structure";
import { useTranslation } from "next-i18next";

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

export function MinskySimpleFAQ() {
  const { classes } = useStyles();
  const { t } = useTranslation("home");
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        {t("faqsTitle")}
      </Title>
      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        {t<string, MinskyFAQ[]>("faqs", { returnObjects: true }).map(({ answer, question }) => (
          <Accordion.Item key={answer} label={question}>
            {answer}
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
