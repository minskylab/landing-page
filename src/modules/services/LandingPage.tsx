import {
  Accordion,
  Button,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { MinskyFAQ } from "lib/landing/structure";
import { GOOGLECALENDAR_URL } from "lib/utils";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CalendarEvent, ClockHour10 } from "tabler-icons-react";

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
    inner: {
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },
    title: {
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: rem(28),
      },
    },
    control: {
      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        flex: 1,
      },
    },
    image: {
      width: rem(376),
      height: rem(356),
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        display: "none",
      },
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    highlight: {
      position: "relative",
      backgroundColor: theme.colors.brand,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
    titleProps: {
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: "center",

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: rem(28),
        textAlign: "left",
      },
    },
    description: {
      textAlign: "center",
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        textAlign: "left",
      },
    },
    itemFaq: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },
    titleFaq: {
      fontWeight: 900,
      fontFamily: "Open Sans",
      marginBottom: `calc(${theme.spacing.xl} * 2)`,
    },
  };
});

const MOCKDATA = [
  {
    icon: ClockHour10,
    title: "Diseño Personalizado",
    description:
      "Cada página web que creamos es única y está diseñada específicamente para reflejar la identidad y los valores de tu marca.",
  },
  {
    icon: ClockHour10,
    title: "Seguridad Integral",
    description:
      "Implementamos medidas de seguridad robustas para proteger tu sitio web y la información de tus clientes contra amenazas cibernéticas.",
  },
  {
    icon: ClockHour10,
    title: "Experiencia de Usuario Intuitiva",
    description:
      "Diseñamos interfaces intuitivas y navegación fluida para que tus visitantes encuentren fácilmente lo que están buscando y disfruten de una experiencia sin problemas en tu sitio web.",
  },
  {
    icon: ClockHour10,
    title: "Diseño responsive",
    description:
      "Optimizamos todas nuestras páginas web para dispositivos móviles, garantizando una experiencia consistente y satisfactoria en smartphones y tablets.",
  },
  {
    icon: ClockHour10,
    title: "Gestión de Contenidos",
    description:
      "Tú tienes el control total sobre la información en tu página web. Mantén tu sitio web siempre actualizado y relevante para tus visitantes con solo unos pocos clics.",
  },
  {
    icon: ClockHour10,
    title: "Soporte Continuo",
    description:
      "Ofrecemos soporte continuo para ayudarte con cualquier pregunta, problema técnico o actualización que puedas necesitar en el futuro.",
  },
];

const FAQDATA = [
  {
    question: "Independencia de las Redes Sociales",
    answer:
      "Al tener un landing page, no estás sujeto a los cambios de algoritmos o caídas de servicios de las redes sociales, lo que te brinda estabilidad y control sobre tu presencia en línea.",
  },
  {
    question: "Control de la Data de Tus Clientes",
    answer:
      "Con un landing page, tienes la capacidad de recolectar y gestionar la información de tus clientes de manera directa y segura. Esto te permite personalizar tus estrategias de marketing y mejorar la experiencia del cliente.",
  },
  {
    question: "Percepción de Seriedad y Modernidad",
    answer:
      "Los negocios que cuentan con un sitio web dedicado, como un landing page, transmiten una imagen de profesionalismo, seriedad y modernidad. Esto genera confianza en tus clientes y demuestra tu compromiso con tu negocio y tu audiencia.",
  },
  {
    question: "Personalización y Flexibilidad Total",
    answer:
      "Al optar por un desarrollo de software a medida o una página web creada por nosotros, tienes la libertad de personalizar cada aspecto según tus necesidades específicas. A diferencia de las plantillas predefinidas de WordPress u otros sistemas similares, donde estás limitado por las funcionalidades prediseñadas, podemos construir una solución completamente adaptada a tus requerimientos comerciales, procesos internos y objetivos de crecimiento.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <ClockHour10 size={24} />
      </ThemeIcon>
      <Text fw={"600"} mt="sm" mb={7}>
        {title}
      </Text>
      <Text lh={1.6}>{description}</Text>
    </div>
  );
}

export default function LandingPageContent() {
  const { classes } = useStyles();
  const { t } = useTranslation("services");

  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  const handleClickExternalURL = useCallback(() => {
    window.open(GOOGLECALENDAR_URL, "_blank");
  }, []);

  return (
    <Container>
      <Group position="apart" noWrap className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Desarrollo de páginas web</Title>
          <Text mt="md">
            Toma el control de tu presencia en línea con Minsky. Creamos páginas web modernas,
            seguras y personalizadas para llevar tu negocio al siguiente nivel.
          </Text>

          <Group mt={30}>
            <Button
              size="md"
              onClick={handleClickExternalURL}
              leftIcon={<CalendarEvent size={22} />}
            >
              ¡Cotiza Ahora!
            </Button>
          </Group>
        </div>
        <Image
          src={"https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"}
          className={classes.image}
          alt="landing page"
        />
      </Group>
      <Container className={classes.wrapper}>
        <Title className={classes.titleProps}>
          Lo que nos diferencia: Características de nuestras páginas web
        </Title>

        {/* <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
            hunger drives it to try biting a Steel-type Pokémon.
          </Text>
        </Container> */}

        <SimpleGrid
          mt={60}
          breakpoints={[
            { minWidth: "base", cols: 1, spacing: "xl", verticalSpacing: "xl" },
            { minWidth: "sm", cols: 2, spacing: "xl", verticalSpacing: "xl" },
            { minWidth: "md", cols: 3, spacing: 50, verticalSpacing: 50 },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
      <Container size="sm" className={classes.wrapper}>
        <Title align="center" className={classes.titleFaq}>
          Importancia de tener una página web
        </Title>
        {
          <Accordion
            classNames={{
              item: classes.itemFaq,
              control: classes.control,
            }}
          >
            {FAQDATA.map(({ answer, question }: MinskyFAQ) => (
              <Accordion.Item key={question} value={question}>
                <Accordion.Control>{question}</Accordion.Control>
                <Accordion.Panel>{answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        }
      </Container>
    </Container>
  );
}
