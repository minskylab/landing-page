import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { setCookie } from "cookies-next";
import { useState, ReactNode } from "react";

import Fonts from "theming/fonts";
import { minskyBrandDark, minskyBrandPrimary } from "./index";

export const useColorScheme = (initialColorScheme: ColorScheme) => {
  const [currentColorScheme, setColorScheme] = useState<ColorScheme>(initialColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (currentColorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  return { currentColorScheme, toggleColorScheme };
};

interface MantineProviderProps {
  children: ReactNode;
  colorScheme: ColorScheme;
}

export const MyMantineProvider = ({ children, colorScheme }: MantineProviderProps) => {
  const { currentColorScheme, toggleColorScheme } = useColorScheme(colorScheme);
  return (
    <>
      <ColorSchemeProvider colorScheme={currentColorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: currentColorScheme,
            fontFamily: "Open Sans",
            fontFamilyMonospace: "Ubuntu Mono",
            colors: {
              brand: minskyBrandPrimary,
              dark: minskyBrandDark,
            },
            primaryColor: "brand",
          }}
        >
          <Fonts />
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};
