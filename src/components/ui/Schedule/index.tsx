import { Button, Modal, Title, createStyles, Stack, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { InlineWidget } from "react-calendly";
import { useTranslation } from "next-i18next";
import { CalendarEvent } from "tabler-icons-react";
import { CALENDLY_URL } from "lib/utils";

const useStyles = createStyles(theme => {
  return {
    title: {
      fontWeight: 900,
      fontFamily: "Open Sans",
      marginBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  };
});

export const MinskySchedule = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation("home");

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} padding={0}>
        <InlineWidget url={CALENDLY_URL} />
      </Modal>

      <Stack id="quote">
        <Title align="center" className={classes.title}>
          {t("schedule.title")}
        </Title>
        <Button size="md" m={"auto"} onClick={open} leftIcon={<CalendarEvent size={22} />}>
          {t("schedule.button")}
        </Button>
      </Stack>
    </>
  );
};
