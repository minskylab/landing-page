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
import { Bulb, QuestionMark } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { useNotifications } from "@mantine/notifications";
import { MinskyGetInTouch } from "components/ui/ContactCard";
import TensionLine from "components/ui/TensionLine";

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
      <Container size={"xl"} className={classes.features}>
        <Box style={{ height: 700 }} />
        {/* <MinskyFeaturesGrid
          title="Who We Are?, What We do?"
          description="Mollit dolor nulla do aliqua sit ullamco proident sunt. Cillum nostrud incididunt deserunt qui excepteur magna labore adipisicing consequat cillum magna ut nostrud."
        /> */}
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
