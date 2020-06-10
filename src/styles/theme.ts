// my-theme.ts
import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    primary: "cyan",
    primaryContrast: "white",
    secondary: "magenta",
    secondaryContrast: "white",
    dark: "#000",
    light: "#c1c1c1",
  },
};

export { myTheme };
