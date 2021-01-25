import React, { PropsWithChildren } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  // createGenerateClassName,
  // StylesProvider,
  ThemeProvider
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

body{
  font-family: 'Poppins', 'Roboto', sans-serif;
}

html{
  background: radial-gradient(#757575d9, #ffffff9e, #d8d5d5f5, #b19d9e, #c1c1c1, #ffffffd9, #bbabacd9);
}

`

// Configure JSS

// const generateClassName = createGenerateClassName({
//   productionPrefix: "Wilfred",
// });
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import getTheme, { styledComponentsTheme } from './getTheme'

export function ThemeContainer(props: PropsWithChildren<{}>) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(() => getTheme(prefersDarkMode), [
    prefersDarkMode,
  ])

  return (
    <StyledComponentsThemeProvider theme={styledComponentsTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledComponentsThemeProvider>
  )
}
