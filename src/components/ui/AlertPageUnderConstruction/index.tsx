import { useMantineColorScheme, createStyles } from "@mantine/core";
import MinskyLogotype from "../../future/MinskyLogo";
import { useTranslation } from 'next-i18next';

const useStyles = createStyles(theme => {
    const BREAKPOINT = theme.fn.smallerThan("md");

    return {
        container: {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        wrapper: {
            display: "flex",
            boxSizing: "border-box",
            maxWidth: 700,
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

            [BREAKPOINT]: {
                flexDirection: "column",
            },
        },
        text: {
            fontFamily: `${theme.fontFamily}`,
            fontSize: 38,
            fontWeight: 900,
            lineHeight: 1.2,
            marginLeft: 20,
            color: theme.colorScheme === "dark" ? theme.white : theme.black,

            [BREAKPOINT]: {
                align: "center",
                marginTop: 30,
                marginLeft: 0
            },
        },
    };
});

export default function MinskyAlertPageUnderConstruction() {
    const { colorScheme } = useMantineColorScheme();
    const { classes } = useStyles();
    const { t } = useTranslation('common');

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <MinskyLogotype scale={0.3} typographyColor={colorScheme === "dark" ? "white" : undefined} />
                <span className={classes.text}>{t("pageUnderConstructionMessage")}</span>
            </div>
        </div>
    )
}