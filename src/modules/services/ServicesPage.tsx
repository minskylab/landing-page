import { Container, Space, useMantineTheme } from "@mantine/core";
import { ServicesGrid } from "components/ui/Services";

export default function ServicesPageContent() {
  const theme = useMantineTheme();
  return (
    <Container
      mt={60}
      sx={theme => ({
        [theme.fn.smallerThan("md")]: {
          paddingLeft: theme.spacing.xl,
          paddingRight: theme.spacing.xl,
        },
      })}
    >
      <Space h={`calc(${theme.spacing.xl} * 6)`} />
      <ServicesGrid />
      <Space h={`calc(${theme.spacing.xl} * 6)`} />
    </Container>
  );
}
