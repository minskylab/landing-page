import { Container, Tabs, Text } from "@mantine/core";
import { useTranslation } from "next-i18next";

export default function PortfolioPageContent() {
  const { t } = useTranslation("portfolio");
  return (
    <Container size={"xl"}>
      <Text
        p={40}
        weight={"bold"}
        sx={theme => ({ fontSize: 48, fontFamily: `${theme.fontFamily}` })}
      >
        {t("headline")}
      </Text>
    </Container>
  );
}
