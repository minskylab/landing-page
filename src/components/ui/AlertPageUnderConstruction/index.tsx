import { useMantineColorScheme, createStyles, Container, Center, Group, Title } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import MinskyLogotype from "../../future/MinskyLogo";
import { useTranslation } from 'next-i18next';

const useStyles = createStyles(theme => {
    const BREAKPOINT = theme.fn.smallerThan("lg");

    return {
        center: {
            height: "100vh",
        },
        text: {
            width: 300,
            fontFamily: `${theme.fontFamily}`,
            fontSize: "xl",
            fontWeight: 900,
            lineHeight: 1.2,
            color: theme.colorScheme === "dark" ? theme.white : theme.black,

            [BREAKPOINT]: {
                textAlign: "center",
                width: "100%",
            },
        },
    };
});

export default function MinskyAlertPageUnderConstruction() {
    const { colorScheme } = useMantineColorScheme();
    const { classes } = useStyles();
    const { width } = useViewportSize();
    const { t } = useTranslation('common');

    return (
        <Center className={classes.center}>
            <Group position="center">
                <MinskyLogotype scale={width < 1200 ? 0.15 : 0.2} typographyColor={colorScheme === "dark" ? "white" : undefined} />
                <Title className={classes.text} order={1}>{t("pageUnderConstructionMessage")}</Title>
            </Group>
        </Center>
    )
}