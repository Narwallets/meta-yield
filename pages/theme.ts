import { color, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import colors from "./colors";
const customTheme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {...colors, brand: colors.indigo},
  },
  proTheme
);

export default customTheme;
