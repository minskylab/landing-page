import React, { useState } from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { ContactIconsList } from "./contact";
import { NULL_SUBSCRIBER, Subscriber } from "lib/platform/types";
import { Mail } from "tabler-icons-react";
import { useTranslation } from "next-i18next";
// import bg from "./bg.svg";

const useStyles = createStyles(theme => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg /* - 2 */,
      //   backgroundImage: `url(${"/minsky_getintouch_banner.png"})`,
      backgroundColor: theme.colors["dark"][4],
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

type MinskyGetInTouchProps = {
  onSubmitNewSubscriber: (values: Subscriber) => Promise<boolean>;
  loading?: boolean;
};

export function MinskyGetInTouch({
  onSubmitNewSubscriber,
  loading = false,
}: MinskyGetInTouchProps) {
  const { classes } = useStyles();
  const [formState, setFormState] = useState<Subscriber>(NULL_SUBSCRIBER);
  const { t } = useTranslation(["home", "common"]);

  return (
    <Paper id="contact" shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text size="lg" weight={700} className={classes.title} sx={{ color: "#fff" }}>
            {t("contactInformation.title")}
          </Text>

          <ContactIconsList variant="white" />
        </div>

        <form
          className={classes.form}
          onSubmit={async event => {
            event.preventDefault();
            const reset = await onSubmitNewSubscriber(formState);

            if (reset) {
              setFormState(NULL_SUBSCRIBER);
            }
          }}
        >
          <Text size="lg" weight={700} className={classes.title}>
            {t("formGetIntouch.title")}
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
                label={t("formGetIntouch.nameLabel")}
                placeholder={t("formGetIntouch.namePlaceholder")}
                value={formState.name}
                disabled={loading}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
              />
              <TextInput
                label={t("formGetIntouch.emailLabel")}
                placeholder={t("formGetIntouch.emailPlaceholder")}
                required
                value={formState.email}
                disabled={loading}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
              />
            </SimpleGrid>
            <TextInput
              mt="md"
              label={t("formGetIntouch.subjectLabel")}
              placeholder={t("formGetIntouch.subjectPlaceholder")}
              required
              value={formState.subject}
              disabled={loading}
              onChange={e => setFormState({ ...formState, subject: e.target.value })}
            />
            <Textarea
              mt="md"
              label={t("formGetIntouch.messageLabel")}
              placeholder={t("formGetIntouch.messagePlaceholder")}
              minRows={3}
              value={formState.message}
              onChange={e => setFormState({ ...formState, message: e.target.value })}
            />
            <Group position="right" mt="md">
              <Button type="submit" loading={loading} leftIcon={<Mail size={14} />}>
                {t("contactFormBtn", { ns: "common" })}
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
