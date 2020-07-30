import React, { PropsWithChildren } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  // createGenerateClassName,
  // StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// const generateClassName = createGenerateClassName({
//   productionPrefix: "UI",
//   //startingletter
//   seed: "Wil",
// });
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import getTheme, { styledComponentsTheme } from "./getTheme";

export function ThemeContainer(props: PropsWithChildren<{}>) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => getTheme(prefersDarkMode),
    [prefersDarkMode],
  );

  return (
    <StyledComponentsThemeProvider theme={styledComponentsTheme}>
      {/* <StylesProvider generateClassName={generateClassName}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
      {/* </StylesProvider> */}
    </StyledComponentsThemeProvider>
  );
}
