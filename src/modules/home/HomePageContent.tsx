import { Box, Center, Container, Loader, Space } from "@mantine/core";
import { MinskyHeroTitle } from "components/ui/Hero";
import dynamic from "next/dynamic";
import { Check } from "tabler-icons-react";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { MinskyGetInTouch } from "components/ui/ContactCard";
// import TensionLine from "components/ui/TensionLine";
import { MinskySimpleFAQ } from "components/ui/Faq";
import { Directus } from "@directus/sdk";
import { MinskyPlatformTypes, Subscriber } from "lib/platform/types";
import { MinskyLandingSections } from "components/ui/Information";
import { useTranslation } from "next-i18next";
import { NextPage } from "next";
// import { SpotLight } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import TensionLine from "components/ui/TensionLine";
import { ServicesGrid } from "components/ui/Services";
import { MinskyClients } from "components/ui/Clients";

const directus = new Directus<MinskyPlatformTypes>("https://self.internal.minsky.cc");

const createNewSubscriber = async (sub: Subscriber) => {
  return directus.items("Subscribers").createOne(sub);
};

const MinskyExpositor = dynamic(() => import("components/ui/Expositor"), {
  ssr: false,
  loading: () => {
    return (
      <Center style={{ maxHeight: 520, height: "35vh" }}>
        <Loader />
      </Center>
    );
  },
});

const HomePageContent: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation("home");

  return (
    <Box
      sx={theme => ({
        marginTop: 194,
        [theme.fn.smallerThan("sm")]: {
          marginTop: 24,
        },
      })}
    >
      <Container
        size={"xl"}
        sx={theme => ({
          marginBottom: 80,
          maxHeight: 520,
          [theme.fn.smallerThan("sm")]: {
            marginBottom: 12,
          },
        })}
      >
        <MinskyExpositor />
      </Container>
      <Container
        size={"xl"}
        sx={theme => ({
          [theme.fn.smallerThan("sm")]: {
            marginTop: "6vh",
          },
        })}
      >
        <MinskyHeroTitle />
      </Container>
      <Container
        sx={theme => ({
          marginTop: 180,
          [theme.fn.smallerThan("sm")]: {
            marginTop: 110,
          },
        })}
      >
        <Center>
          <TensionLine />
          {/* <Canvas dpr={[1, 2]} style={{ maxHeight: 510, height: "57vh" }}>
            <SpotLight
              position={[0, 3.6, 0]}
              distance={6}
              angle={0.6}
              attenuation={6}
              anglePower={6.5}
            />
          </Canvas> */}
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
        <MinskyLandingSections />
        <ServicesGrid />
      </Container>
      <Space h={62}></Space>
      <Container>
        <MinskySimpleFAQ />
      </Container>
      <Container mb={100}>
        <MinskyClients />
      </Container>

      <Container>
        <MinskyGetInTouch
          loading={loading}
          onSubmitNewSubscriber={async sub => {
            setLoading(true);
            const item = await createNewSubscriber(sub);
            setLoading(false);
            notifications.show({
              title: t("getInTouchNotification.title"),
              color: "green",
              icon: <Check />,
              message: t("getInTouchNotification.message"),
            });
            return true;
          }}
        />
      </Container>
    </Box>
  );
};

export { HomePageContent };
