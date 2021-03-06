import { PropsWithChildren, useMemo } from 'react'
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
::-webkit-scrollbar{
  display: none;
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

  const theme = useMemo(() => getTheme(prefersDarkMode), [
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
