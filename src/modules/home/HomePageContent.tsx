import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Drawer,
  Grid,
  Group,
  Loader,
  SimpleGrid,
  Space,
  Text,
  Title,
  Tooltip,
  Transition,
  useMantineColorScheme,
} from "@mantine/core";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MinskyFeaturesGrid } from "components/ui/Features";
import { MinskyFooter } from "components/ui/Footer";
import { MinskyLandingHeader } from "components/ui/Header";
import { MinskyHeroTitle } from "components/ui/Hero";
import dynamic, { noSSR } from "next/dynamic";
import { useMediaQuery } from "@mantine/hooks";
import { BrandGithub, Bulb, QuestionMark } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { useNotifications } from "@mantine/notifications";
import { MinskyGetInTouch } from "components/ui/ContactCard";
import TensionLine from "components/ui/TensionLine";
import { SymbolsIllustration, SystemIllustration } from "components/future/illustrations";
import { MinskySimpleFAQ } from "components/ui/Faq";

const LivingIdeaBlob = dynamic(() => import("components/future/LivingBlob"), {
  ssr: false,
  // suspense: true,
  // loading: () => {
  //   return <Loader />;
  // },
});

const BREAKPOINT = "@media (max-width: 755px)";

const AVAILABLE_CA = [132, 133, 142, 244, 262, 263, 264, 271].map(
  num => `/MinskyVideo${num}WithOpacity.mp4`
);

const useStyles = createStyles(theme => ({
  hero: {
    // position: "relative",
    // height: "100vh",
    // bottom: 32,
    [theme.fn.smallerThan("sm")]: {
      marginTop: "6vh",
    },
  },
  canvas: {
    height: 500,
    // [BREAKPOINT]: {
    //   height: 300,
    // },
  },
  blobWrapper: {
    marginBottom: 80,
    [theme.fn.smallerThan("sm")]: {
      marginBottom: 12,
    },
  },
  features: {
    marginTop: 120,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 12,
    },
  },

  tensionLine: {
    marginTop: 180,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 110,
    },
  },
}));

const HomePageContent = () => {
  const { classes } = useStyles();

  // const [sceneLoaded, setSceneLoaded] = useState(false);
  const notifications = useNotifications();

  // console.log("LivingIdeaBlob: ", );
  // useEffect(() => {
  //   console.log(LivingIdeaBlob);
  //   setSceneLoaded(true);
  // }, []);

  const randomBlobVideoSrc = (): string => {
    return AVAILABLE_CA[(Math.random() * AVAILABLE_CA.length) | 0];
  };

  return (
    <>
      <Container mt="lg" size={"xl"}>
        <MinskyLandingHeader
          links={[
            // { label: "Welcome", link: "home" },
            { label: "Platform", link: "platform" },
            { label: "Partners", link: "partners" },
            { label: "Academy", link: "academy" },
            { label: "Developers", link: "developers" },
          ]}
        />
      </Container>
      <Container
        size={"xl"}
        className={classes.blobWrapper}
        style={{ maxHeight: 520, height: "35vh" }}
      >
        {/* <a.main></a.main> */}
        {/* <Transition mounted={!sceneLoaded} transition={"fade"} duration={200} timingFunction="ease">
          {styles => (
            <Center style={styles}>
              <Loader />
            </Center>
          )}
        </Transition> */}
        {/* <Transition mounted={sceneLoaded} transition={"fade"} duration={200} timingFunction="ease">
          {styles => {
            return (
              
            );
          }}
        </Transition> */}
        <Canvas dpr={[1, 2]} style={{ maxHeight: 520, height: "40vh" }}>
          <LivingIdeaBlob
            videoSrc={randomBlobVideoSrc()} // "/MinskyVideo244WithOpacity.mp4"
            onTap={() => {
              // notifications.cleanQueue();
              notifications.clean();
              setTimeout(
                () =>
                  notifications.showNotification({
                    title: "What is that?",
                    // autoClose: false,
                    message: (
                      <div>
                        I represent an <b>idea</b>, a mental object. If you want to know more about
                        me, you can{" "}
                        <Anchor href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size="sm">
                          watch this video
                        </Anchor>
                        .
                      </div>
                    ),
                    icon: <Bulb />,
                  }),
                100
              );
            }}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Container>
      <Container size={"xl"} className={classes.hero}>
        <MinskyHeroTitle />
      </Container>
      <Container className={classes.tensionLine}>
        <Center>
          <TensionLine />
        </Center>
      </Container>

      <Container
        mt={60}
        sx={theme => ({
          [theme.fn.smallerThan("sm")]: {
            paddingLeft: 16,
            paddingRight: 16,
          },
          [theme.fn.smallerThan("md")]: {
            paddingLeft: 42,
            paddingRight: 42,
          },
        })}
      >
        <Grid>
          <Grid.Col sm={12} md={5}>
            <Group sx={{ justifyContent: "flex-start" }} m={6}>
              <SymbolsIllustration scale={0.62} />
            </Group>
            <Group position="left">
              <Group
                sx={{ justifyContent: "flex-start", maxWidth: 380, marginTop: 12 }}
                spacing={"md"}
              >
                <Title
                  sx={theme => ({
                    // fontSize: 42,
                    fontWeight: 900,
                    fontFamily: "Open Sans",
                    textAlign: "start",
                  })}
                >
                  Who We Are?
                </Title>
                <Text
                  sx={theme => ({
                    // maxWidth: 320,
                    // marginTop: 12,
                    lineHeight: 1.68,
                    // fontSize: 18,
                  })}
                >
                  {/* Somos una organizacion que busca ser un brazo tecnologico de alta calidad para la
              sociedad. Tomando un camino holistico y con una visión integral, disenamos e
              implementamos soluciones tecnologicas. */}
                  We are an organization that seeks to offer high-quality technology to society.
                  Taking a holistic path and with a comprehensive vision, we design and implement
                  technological solutions supported by Open Source on the shoulders of giants.
                </Text>
                <Text
                  sx={theme => ({
                    // marginTop: 18,
                    // maxWidth: 320,
                    lineHeight: 1.68,
                    // fontSize: 18,
                  })}
                >
                  We are a team of people who are passionate about software development in
                  particular and technology in general.
                </Text>
                <Button>Our Dream Team</Button>
              </Group>
            </Group>
          </Grid.Col>
          <Grid.Col sm={12} md={7}>
            <Space h="xl" />
            {/* 2 */}
          </Grid.Col>
          <Grid.Col sm={12} md={7}>
            {/* 3 */}
            <Space h="xl" />
          </Grid.Col>
          <Grid.Col sm={12} md={5}>
            <Group sx={{ justifyContent: "flex-end" }} m={6}>
              <SystemIllustration scale={0.68} />
            </Group>
            <Group position="right">
              <Group
                sx={{
                  justifyContent: "flex-end",
                  maxWidth: 380,
                  marginTop: 12,
                }}
                // position="right"
                spacing={"md"}
              >
                <Title
                  sx={theme => ({
                    // fontSize: 42,
                    fontWeight: 900,
                    fontFamily: "Open Sans",
                    textAlign: "end",
                  })}
                >
                  What We Do?
                </Title>
                <Text
                  sx={theme => ({
                    // maxWidth: 320,
                    // marginTop: 12,
                    lineHeight: 1.68,
                    textAlign: "end",
                    // fontSize: 18,
                  })}
                >
                  Actually, we are working with our partners and the academy to develop and launch
                  software products. We are also opening job opportunities for our local developers
                  {"'"}
                  community, improving their experience and pleasure of crafting software.
                </Text>
                <Text
                  sx={theme => ({
                    // marginTop: 18,
                    // maxWidth: 320,
                    lineHeight: 1.68,
                    textAlign: "end",
                    // fontSize: 18,
                  })}
                >
                  We love to create pieces of software that are useful for all of us. All our
                  exploration and proposals are open to the public in our repositories.
                </Text>
                <Button color="dark" leftIcon={<BrandGithub />}>
                  Our GitHub
                </Button>
              </Group>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
      {/* <Container size={"xl"} className={classes.features}>
        <Box style={{ height: 70 }} />
      </Container> */}
      <Space h={62}></Space>
      <Container>
        <MinskySimpleFAQ />
      </Container>
      <Container>
        <MinskyGetInTouch />
      </Container>
      <MinskyFooter
        data={[
          {
            title: "Minsky",
            links: [
              { label: "About", link: "about" },
              { label: "Careers", link: "careers" },
              { label: "Team", link: "team" },
              { label: "Contact", link: "contact" },
            ],
          },
          {
            title: "Vision",
            links: [
              { label: "Philosophy", link: "philosophy" },
              { label: "Technology", link: "technology" },
              { label: "Community", link: "future" },
              { label: "Future", link: "future" },
            ],
          },
        ]}
      />
    </>
  );
};

export { HomePageContent };

// Nosotros

// Filosofía

// Tecnología

// Servicios

// Equipo

// Contactos
