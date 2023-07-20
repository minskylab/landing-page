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
  title: string;
  description: string;
  items: string[];
}

export function Service({title, description, items}: ServiceProps) {

    const { classes } = useStyles();

    return (
        <div>
            <ThemeIcon size={30} radius={30}>
                {/* <Icon variant="light" size="1.1rem" stroke={1.5} /> */}
            </ThemeIcon>
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
                    ({title, description, items}) => (
                    <Service title={title} description={description} items={items} key={title} />
                ))}
            </SimpleGrid>
        </Container>
    );
}