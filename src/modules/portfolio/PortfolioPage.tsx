import { Container, Group, Text } from "@mantine/core";
import { TableOfContentsFloating } from "components/ui/Portfolio/IndustryNav";
import { useTranslation } from "next-i18next";

export default function PortfolioPageContent() {
  const { t } = useTranslation("portfolio");

  return (
    <Container size={"xl"}>
      <Text weight={"bold"} sx={theme => ({ fontSize: 48, fontFamily: `${theme.fontFamily}` })}>
        {t("headline")}
      </Text>
      <Group>
        <TableOfContentsFloating />
      </Group>
    </Container>
  );
}
