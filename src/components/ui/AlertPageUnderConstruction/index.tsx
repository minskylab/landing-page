import { Center, Text, useMantineColorScheme, createStyles } from "@mantine/core";
import MinskyLogotype from "../../future/MinskyLogo";

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
            },
        },
    };
});

export default function MinskyAlertPageUnderConstruction() {
    const { colorScheme } = useMantineColorScheme();
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <MinskyLogotype scale={0.3} typographyColor={colorScheme === "dark" ? "white" : undefined} />
                <div className={classes.text}>
                    <span>PAGE UNDER CONSTRUCTION</span>
                </div>
            </div>
        </div>
    )
}