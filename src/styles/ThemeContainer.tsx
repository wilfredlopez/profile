import React, { PropsWithChildren } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DefaultTheme } from "styled-components";
import primary from "@material-ui/core/colors/blueGrey";
import secondary from "@material-ui/core/colors/teal";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { common, red } from "@material-ui/core/colors";

const PRIMARY_COLOR = primary[900];
const PRIMARY_COLOR_CONTRAST = common["white"];
const SECONDARY_COLOR = secondary[700];
const SECONDARY_COLOR_CONTRAST = common["white"];
const DARK_COLOR = "#040c14";
const LIGHT_COLOR = common["white"];

const styledComponentsTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    primary: PRIMARY_COLOR,
    primaryContrast: PRIMARY_COLOR_CONTRAST,
    secondary: SECONDARY_COLOR,
    secondaryContrast: SECONDARY_COLOR_CONTRAST,
    dark: DARK_COLOR,
    light: LIGHT_COLOR,
  },
};

export function ThemeContainer(props: PropsWithChildren<{}>) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        status: {
          danger: red[500],
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: PRIMARY_COLOR,
            contrastText: PRIMARY_COLOR_CONTRAST,
          },
          secondary: {
            main: SECONDARY_COLOR,
            contrastText: SECONDARY_COLOR_CONTRAST,
          },
          tertiary: red,
        },
      }),
    [prefersDarkMode],
  );

  return (
    <StyledComponentsThemeProvider theme={styledComponentsTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledComponentsThemeProvider>
  );
}
