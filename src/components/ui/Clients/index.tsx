import { Carousel } from "@mantine/carousel";
import { Title, createStyles } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRef } from "react";

import { clientsImages } from "assets/images";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    title: {
      fontWeight: 900,
      fontFamily: "Open Sans",
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
  };
});

export const MinskyClients = () => {
  const { classes, theme } = useStyles();
  const { t } = useTranslation("home");
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = clientsImages.map(client => {
    const image = theme.colorScheme === "dark" ? client.iconDarkmode : client.iconLightmode;
    return (
      <Carousel.Slide key={client.id} sx={{ display: "grid", placeItems: "center" }}>
        <Image height={client.height} src={image} alt={client.id} />
      </Carousel.Slide>
    );
  });

  return (
    <>
      <Title align="center" className={classes.title}>
        {t("clientsTitle")}
      </Title>
      <Carousel
        loop
        align="start"
        slideGap={`calc(${theme.spacing.xl} * 3)`}
        slideSize="auto"
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 0 }]}
      >
        {slides}
      </Carousel>
    </>
  );
};
