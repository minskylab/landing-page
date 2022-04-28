import { Center, Container, Loader, Space } from "@mantine/core";
import { MinskyFooter } from "components/ui/Footer";
import { MinskyLandingHeader } from "components/ui/Header";
import { MinskyHeroTitle } from "components/ui/Hero";
import dynamic from "next/dynamic";
import { Check } from "tabler-icons-react";
import { useState } from "react";
import { useNotifications } from "@mantine/notifications";
import { MinskyGetInTouch } from "components/ui/ContactCard";
import TensionLine from "components/ui/TensionLine";
import { MinskySimpleFAQ } from "components/ui/Faq";

import { Directus } from "@directus/sdk";
import { MinskyPlatformTypes, Subscriber } from "lib/platform/types";
import { MinskyLandingSections } from "components/ui/Information";
import { useMinskyLandingContent } from "./content";

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

const HomePageContent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const notifications = useNotifications();
  const {
    headerTopics,
    footerInformation,
    headline,
    headlineHighlight,
    minimalDescription,
    sections,
    faqs,
  } = useMinskyLandingContent();

  return (
    <>
      <Container mt="lg" size={"xl"}>
        <MinskyLandingHeader links={headerTopics} />
      </Container>
      <Container
        size={"xl"}
        sx={theme => ({
          marginBottom: 80,
          maxHeight: 520,
          height: "35vh",
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
        <MinskyHeroTitle
          headline={headline}
          headlineHighlight={headlineHighlight}
          minimalDescription={minimalDescription}
        />
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
        <MinskyLandingSections sections={sections} />
      </Container>
      <Space h={62}></Space>
      <Container>
        <MinskySimpleFAQ title={"Frequently Asked Questions"} faqs={faqs} />
      </Container>
      <Container>
        <MinskyGetInTouch
          loading={loading}
          onSubmitNewSubscriber={async sub => {
            setLoading(true);
            const item = await createNewSubscriber(sub);
            setLoading(false);
            console.log(`created new subscriber: ${item}`);
            notifications.showNotification({
              title: "Subscription successful",
              color: "green",
              icon: <Check />,
              message: "We will contact you as soon as possible.",
            });
            return true;
          }}
        />
      </Container>
      <MinskyFooter
        sections={footerInformation.sections}
        tagline={footerInformation.tagline}
        brandTrademark={footerInformation.brandTrademark}
      />
    </>
  );
};

export { HomePageContent };
