import { Container, Text, createStyles } from "@mantine/core";

const useStyles = createStyles(theme => {
  return {
    mainTitle: {
      fontSize: 38,
      fontFamily: `${theme.fontFamily}`,
      lineHeight: 1.2,
      [theme.fn.smallerThan("md")]: {
        fontSize: 34,
        padding: "40px 20px",
      },
    },
  };
});

export default function ServicesPageContent() {
  const { classes } = useStyles();

  return (
    <Container>
      <Text pt={40} pb={40} weight={"bold"} className={classes.mainTitle}>
        Servicios
      </Text>
    </Container>
  );
}
