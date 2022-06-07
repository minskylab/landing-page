import { Center, Text, useMantineColorScheme, createStyles } from "@mantine/core";
import MinskyLogotype from "../../future/MinskyLogo";

const useStyles = createStyles(theme => {
    const BREAKPOINT = theme.fn.smallerThan("md");

    return {
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
        <Center style={{ height: "100vh" }}>
            <div className={classes.wrapper}>
                <MinskyLogotype scale={0.3} typographyColor={colorScheme === "dark" ? "white" : undefined} />
                <Text className={classes.text}>PAGE UNDER CONSTRUCTION</Text>
            </div>
        </Center>
    )
}