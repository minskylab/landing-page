import { Center, Container, createStyles, Grid } from "@mantine/core";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MinskyFeaturesGrid } from "components/ui/Features";
import { MinskyFooter } from "components/ui/Footer";
import { MinskyLandingHeader } from "components/ui/Header";
import { MinskyHeroTitle } from "components/ui/Hero";
import dynamic, { noSSR } from "next/dynamic";
import Image from "next/image";
import { a } from "@react-spring/web";
import { useMediaQuery } from "@mantine/hooks";

const BlobOfLife = dynamic(() => import("components/future/LivingBlob"), { ssr: false });

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles(theme => ({
  video: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 98,
    width: "100%",
    // left: 0,
    // width: "100vw",
    // height: "100vh",
    // height: 100,
    opacity: 0.06,
  },
  hero: {
    // position: "relative",
    // height: "100vh",
    // bottom: 32,
  },
  canvas: {
    height: 500,
    // [BREAKPOINT]: {
    //   height: 300,
    // },
  },
}));

const HomePageContent = () => {
  const { classes } = useStyles();
  const isSmall = useMediaQuery(BREAKPOINT);

  return (
    <>
      <Container mt="lg" size={"xl"}>
        <MinskyLandingHeader
          links={[
            { label: "Welcome", link: "home" },
            { label: "Platform", link: "platform" },
            { label: "Partners", link: "partners" },
            { label: "Academy", link: "academy" },
            { label: "Developers", link: "developers" },
          ]}
        />
      </Container>
      {/* <Center>
        <Image src="/minimal_automata.png" alt="hero-ca" width={520} height={520}></Image>
      </Center> */}
      {/* <div className={classes.video}>
        <video width="100%" autoPlay muted loop>
          <source src="/minimal_automata.png" type="image/png" />
          <source src="/MinskyAutomata.mp4" type="video/mp4" />
          Sorry, your browser {"doesn't"} support embedded videos.
        </video>
      </div> */}
      <Container size={"xl"}>
        <a.main>
          <Canvas dpr={[1, 2]} style={{ maxHeight: 520, height: "40vh" }}>
            <BlobOfLife />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </a.main>
      </Container>
      <Container size={"xl"} className={classes.hero}>
        <MinskyHeroTitle />
      </Container>
      <Container size={"xl"}>
        <MinskyFeaturesGrid
          title="Who We Are?, What We Are?"
          description="Mollit dolor nulla do aliqua sit ullamco proident sunt. Cillum nostrud incididunt deserunt qui excepteur magna labore adipisicing consequat cillum magna ut nostrud."
        />
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
          // {
          //   title: "Platform",
          // },
          // {
          //   title: "Partners",
          // },
          // {
          //   title: "Academy",
          // },
          // {
          //   title: "Developers",
          // },
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
