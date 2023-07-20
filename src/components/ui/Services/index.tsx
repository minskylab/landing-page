import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, List } from '@mantine/core';
import { MinskyServices } from 'lib/landing/structure';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    title: {
      fontWeight: 900,
      textAlign: 'center',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
        textAlign: 'left',
      },
    },
  
    title_service: {
        fontWeight: 900,
        fontSize: 22,
    },

    description_service: {
        fontSize: 14,
    },
    service_list_item: {
        fontSize: 14,
    },
  }));

  
type ServiceProps = {
    icon: string;
    title: string;
    description: string;
    items: string[];
}

type IconIllustrationProps = {
    scale?: number;
};

export const IconIllustration = ({ scale = 0.8 }: IconIllustrationProps) => {
    return (
        <svg
            width={scale * 68}
            height={scale * 63}
            viewBox="0 0 68 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M56.8252 31.1401C59.6588 42.8509 53.4056 44.7566 41.0111 47.7557C28.616 50.7548 23.7526 56.5823 17.1628 47.7557C10.4485 38.7626 23.4937 11.3525 41.0111 10.9218C58.5279 10.4911 53.9916 19.4293 56.8252 31.1401Z"
                fill="#FF9D43"
                fillOpacity="0.26"
            />
            <path
                d="M37.7085 13.4218C37.7085 13.4218 36.2943 20.9416 32.1076 26.7782C26.8861 34.0566 23.5115 41.6698 15.8465 39.7534C6.9392 37.5267 8.43231 18.8295 18.8087 15.9671C32.832 12.0984 33.3524 48.2342 48.9361 34.2876"
                stroke="#EA7E3C"
                strokeWidth="5.31988"
                strokeLinecap="round"
            />
        </svg>
    );
};
  

export const ServiceIcon = (
    icon?: string,
  ) => {
    switch (icon) {
      case "alfa":
        return <IconIllustration scale={0.7} />
      default:
        return <></>;
    }
  };
  

export function Service({icon, title, description, items}: ServiceProps) {

    const { classes } = useStyles();

    return (
        <div>
            {ServiceIcon(icon)}
            <Text my="md" className={classes.title_service}>
                {title}
            </Text>
            <Text sx={{ lineHeight: 1.6 }} mb={15} className={classes.description_service}>
                {description}
            </Text>
            <List >
                {items.map((item, index) => (
                <List.Item key={index} className={classes.service_list_item}>{item}</List.Item>
                ))}
            </List>
        </div>
    );
}

export function ServicesGrid() {

    const { classes } = useStyles();
    const { t } = useTranslation('home');

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title} my={70}>{t("servicesInformation.title")}</Title>

            <SimpleGrid
                mt={100}
                cols={3}
                spacing={50}
                breakpoints={[
                { maxWidth: 980, cols: 2, spacing: 'xl' },
                { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                {t<string, MinskyServices[]>("servicesInformation.services", { returnObjects: true }).map(
                    ({icon, title, description, items}) => (
                    <Service icon={icon} title={title} description={description} items={items} key={title} />
                ))}
            </SimpleGrid>
        </Container>
    );
}