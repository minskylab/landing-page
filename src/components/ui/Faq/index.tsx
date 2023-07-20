import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";
import { MinskyFAQ } from "lib/landing/structure";
import { useTranslation } from "next-i18next";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      minHeight: 650,
    },

    title: {
      fontWeight: 900,
      fontFamily: "Open Sans",
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },

    control: {
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&[data-active]": {
        color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },
  };
});

export function MinskySimpleFAQ() {
  const { classes } = useStyles();
  const { t } = useTranslation("home");

  const faqs: MinskyFAQ[] = t("faqs", { returnObjects: true });

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        {t("faqsTitle")}
      </Title>
      <Accordion
        classNames={{
          item: classes.item,
          control: classes.control,
        }}
      >
        {faqs.map(({ answer, question }: MinskyFAQ) => (
          <Accordion.Item key={question} value={question}>
            <Accordion.Control>{question}</Accordion.Control>
            <Accordion.Panel>{answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
